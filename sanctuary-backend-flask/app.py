from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
import sqlite3
from anthropic import Anthropic

load_dotenv()
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
if not ANTHROPIC_API_KEY:
    raise RuntimeError("ANTHROPIC_API_KEY is missing. Please add it to your .env file.")

app = Flask(__name__)
anthropic_client = Anthropic(api_key=ANTHROPIC_API_KEY)

@app.route("/chat/<bot_name>", methods=["POST"])
def chat(bot_name):
    return jsonify({"reply": f"Bot '{bot_name}' is not available."})

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
        {"author": row["author"], "text": row["text"], "timestamp": row["timestamp"]} 
        for row in rows
    ]
    return jsonify({"history": history})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
