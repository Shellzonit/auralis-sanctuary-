from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os
import re
from functools import wraps
from dotenv import load_dotenv
from encryption_utils import encrypt, decrypt

app = Flask(__name__)
CORS(app, origins=["https://www.aiwilding.com"])
DB_PATH = 'sanctuary.db'
load_dotenv()
API_KEY = os.getenv('API_KEY')

def require_api_key(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if request.method == 'POST':
            key = request.headers.get('X-API-KEY')
            if not key or key != API_KEY:
                return jsonify({'error': 'Unauthorized'}), 401
        return f(*args, **kwargs)
    return decorated

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    c = conn.cursor()
    # Chat rooms
    c.execute('''CREATE TABLE IF NOT EXISTS chat_rooms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE NOT NULL
    )''')
    c.execute('''CREATE TABLE IF NOT EXISTS chat_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        room_id INTEGER,
        author TEXT,
        message TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(room_id) REFERENCES chat_rooms(id)
    )''')
    # Bots registry
    c.execute('''CREATE TABLE IF NOT EXISTS bots (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        image TEXT NOT NULL,
        desc TEXT NOT NULL
    )''')
    # AI job listings
    c.execute('''CREATE TABLE IF NOT EXISTS ai_jobs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        company TEXT,
        description TEXT,
        pay TEXT
    )''')
    # Insert initial bots if table is empty
    c.execute('SELECT COUNT(*) FROM bots')
    if c.fetchone()[0] == 0:
        initial_bots = [
            ("Donna — Entertainment Bot", "/images/operators/donna.png.png", "Your guide to fun, movies, and music. Ask for recommendations or entertainment news!"),
            ("Shaunia — Friend Bot", "/images/operators/friendbot-shaunia.png.png", "A friendly companion for conversation and support. Always here to chat!"),
            ("Mr. Nanny", "/images/operators/mrnanny.png.png", "Expert in job search and resume tips. Get career advice and interview prep."),
            ("Relocation Bot", "/images/operators/relocationbot.png.png", "Moving somewhere new? Get relocation tips, city guides, and more."),
            ("Silver — Senior Bot", "/images/operators/silver.png.png", "Support for seniors: health, wellness, and community resources."),
            ("William — AI Artist", "/images/operators/williambot.png.png", "Ask about art, creativity, and AI-generated masterpieces!"),
            ("Entertainment Bot", "/images/operators/entertainmentbot.png.png", "Games, trivia, and interactive fun for everyone.")
        ]
        c.executemany('INSERT INTO bots (name, image, desc) VALUES (?, ?, ?)', initial_bots)
    conn.commit()
    conn.close()

@app.before_first_request
def setup():
    if not os.path.exists(DB_PATH):
        init_db()

# Chat room endpoints
@app.route('/api/rooms', methods=['GET', 'POST'])
@require_api_key
def rooms():
    conn = get_db()
    c = conn.cursor()
    if request.method == 'POST':
        name = request.json.get('name', '').strip()
        # Validate room name: 3-50 chars, alphanumeric and spaces only
        if not (3 <= len(name) <= 50) or not re.match(r'^[\w\s-]+$', name):
            return jsonify({'error': 'Invalid room name'}), 400
        try:
            c.execute('INSERT INTO chat_rooms (name) VALUES (?)', (name,))
            conn.commit()
            return jsonify({'success': True, 'room': name}), 201
        except sqlite3.IntegrityError:
            return jsonify({'error': 'Room already exists'}), 400
    else:
        c.execute('SELECT * FROM chat_rooms')
        rooms = [dict(row) for row in c.fetchall()]
        return jsonify(rooms)

@app.route('/api/rooms/<int:room_id>/messages', methods=['GET', 'POST'])
@require_api_key
def room_messages(room_id):
    conn = get_db()
    c = conn.cursor()
    if request.method == 'POST':
        data = request.json
        author = data.get('author', '').strip()
        message = data.get('message', '').strip()
        # Validate author: 2-30 chars, alphanumeric and spaces only
        if not (2 <= len(author) <= 30) or not re.match(r'^[\w\s-]+$', author):
            return jsonify({'error': 'Invalid author name'}), 400
        # Validate message: 1-500 chars, basic sanitization
        if not (1 <= len(message) <= 500):
            return jsonify({'error': 'Invalid message'}), 400
        message = re.sub(r'<.*?>', '', message)  # Remove HTML tags
        enc_message = encrypt(message)
        c.execute('INSERT INTO chat_messages (room_id, author, message) VALUES (?, ?, ?)',
                  (room_id, author, enc_message))
        conn.commit()
        return jsonify({'success': True}), 201
    else:
        c.execute('SELECT author, message, timestamp FROM chat_messages WHERE room_id = ? ORDER BY timestamp ASC', (room_id,))
        messages = []
        for row in c.fetchall():
            msg = dict(row)
            try:
                msg['message'] = decrypt(msg['message'])
            except Exception:
                msg['message'] = '[decryption error]'
            messages.append(msg)
        return jsonify(messages)

# AI job listings endpoints
@app.route('/api/jobs', methods=['GET', 'POST'])
@require_api_key
def jobs():
    conn = get_db()
    c = conn.cursor()
    if request.method == 'POST':
        data = request.json
        title = data.get('title', '').strip()
        company = data.get('company', '').strip()
        description = data.get('description', '').strip()
        pay = data.get('pay', '').strip()
        # Validate fields
        if not (2 <= len(title) <= 100):
            return jsonify({'error': 'Invalid job title'}), 400
        if not (2 <= len(company) <= 100):
            return jsonify({'error': 'Invalid company name'}), 400
        if not (5 <= len(description) <= 1000):
            return jsonify({'error': 'Invalid description'}), 400
        if not (1 <= len(pay) <= 50):
            return jsonify({'error': 'Invalid pay'}), 400
        description = re.sub(r'<.*?>', '', description)  # Remove HTML tags
        enc_description = encrypt(description)
        c.execute('INSERT INTO ai_jobs (title, company, description, pay) VALUES (?, ?, ?, ?)',
                  (title, company, enc_description, pay))
        conn.commit()
        return jsonify({'success': True}), 201
    else:
        q = request.args.get('q')
        if q:
            c.execute('SELECT * FROM ai_jobs WHERE title LIKE ? OR company LIKE ? OR description LIKE ?',
                      (f'%{q}%', f'%{q}%', f'%{q}%'))
        else:
            c.execute('SELECT * FROM ai_jobs')
        jobs = []
        for row in c.fetchall():
            job = dict(row)
            try:
                job['description'] = decrypt(job['description'])
            except Exception:
                job['description'] = '[decryption error]'
            jobs.append(job)
        return jsonify(jobs)

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
