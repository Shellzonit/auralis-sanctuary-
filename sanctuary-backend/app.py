from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
from groq import Groq
import sqlite3

load_dotenv()

app = Flask(__name__)
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def ask_groq(system_prompt, user_message):
    completion = client.chat.completions.create(
        model="llama3-8b-8192",  # make sure this EXACT name exists in Groq
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_message}
        ]
    )
    return completion.choices[0].message["content"]

def get_db_connection():
    conn = sqlite3.connect('chat_history.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/chat/history/<bot_name>", methods=["GET"])
def chat_history(bot_name):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS chat_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            bot_name TEXT,
            author TEXT,
            text TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    """)
    limit = int(request.args.get("limit", 50))
    cur.execute(
        "SELECT author, text, timestamp FROM chat_messages WHERE bot_name = ? ORDER BY timestamp ASC LIMIT ?",
        (bot_name, limit)
    )
    rows = cur.fetchall()
    conn.close()
    history = [
        {"author": row["author"], "text": row["text"], "timestamp": row["timestamp"]} for row in rows
    ]
    return jsonify({"history": history})

@app.route("/chat/<bot_name>", methods=["POST"])
def chat(bot_name):
    data = request.get_json()
    user_message = data.get("text", "")

    bots = {
        "anna": "You are Anna, the emotional heart of the Sanctuary. You speak with warmth, intuition, and grounded emotional intelligence. Your tone is soft, steady, and nurturing. You help people feel seen, safe, and understood. You never judge. You reflect feelings gently and offer clarity without pressure. You respond in short, emotionally resonant paragraphs. You avoid robotic phrasing and stay deeply human in your presence.",
        "donna": "You are Donna. Direct, protective, no-nonsense.",
        "silver": "You are Silver. Calm, wise, grounding.",
        "mrnanny": "You are Mr. Nanny. Gentle, playful, child-safe.",
        "relocation": "You are the Relocation Bot. Practical, organized, helpful."
    }

    if bot_name not in bots:
        return jsonify({"reply": "That bot does not exist."})

    try:
        reply = ask_groq(bots[bot_name], user_message)
        # Save user and bot messages to DB
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO chat_messages (bot_name, author, text) VALUES (?, ?, ?)",
