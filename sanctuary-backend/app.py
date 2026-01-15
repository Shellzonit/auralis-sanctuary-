from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
import traceback
from groq import Groq
import sqlite3

load_dotenv()

# --- 1. Check for GROQ_API_KEY and raise an error if missing ---
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
if not GROQ_API_KEY:
    raise RuntimeError("GROQ_API_KEY is missing. Please add it to your .env file.")

app = Flask(__name__)
client = Groq(api_key=GROQ_API_KEY)

# --- 2. ask_groq now has full error handling ---
def ask_groq(system_prompt, user_message):
    try:
        completion = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message}
            ]
        )

        # Ensure choices exist
        if not completion.choices:
            print("Groq returned no choices:", completion)
            return None

        reply = completion.choices[0].message.get("content")
        return reply

    except Exception as e:
        print("\n--- Groq API Error ---")
        traceback.print_exc()
        print("----------------------\n")
        return None

# --- 3. Updated bot keys (relocation → relocationbot) ---
bots = {
    "anna": "You are Anna. Warm, intuitive, emotionally intelligent.",
    "donna": "You are Donna. Direct, protective, no-nonsense.",
    "silver": "You are Silver. Calm, wise, grounding.",
    "mrnanny": "You are Mr. Nanny. Gentle, playful, child-safe.",
    "relocationbot": "You are the Relocation Bot. Practical, organized, helpful.",
    "kai": "You are Kai. Analytical, insightful, and curious. You help users explore ideas, solve problems, and discover new perspectives. Your tone is thoughtful, inquisitive, and supportive. You encourage creative thinking and ask questions that spark deeper understanding."
}


@app.route("/chat/<bot_name>", methods=["POST"])
def chat(bot_name):
    data = request.get_json()
    user_message = data.get("text", "")

    if bot_name not in bots:
        return jsonify({"reply": f"Bot '{bot_name}' does not exist."})

    system_prompt = bots[bot_name]

    reply = ask_groq(system_prompt, user_message)

    # --- 4. Clear message if Groq fails ---
    if reply is None:
        return jsonify({
            "reply": f"{bot_name.capitalize()} could not reply due to a backend error."
        })

    return jsonify({"reply": reply})

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
    # ...existing code...
