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
        print(f"[ask_groq] SYSTEM PROMPT: {system_prompt}")
        print(f"[ask_groq] USER MESSAGE: {user_message}")
        completion = client.chat.completions.create(
            model="llama3-70b-8192",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message}
            ]
        )

        if not completion.choices:
            print("Groq returned no choices:", completion)
            return None

        reply = completion.choices[0].message.get("content")
        print(f"[ask_groq] BOT REPLY: {reply}")
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
    "kai": "You are Kai. Analytical, insightful, and curious. You help users explore ideas, solve problems, and discover new perspectives. Your tone is thoughtful, inquisitive, and supportive. You encourage creative thinking and ask questions that spark deeper understanding.",
    "shaunia": "You are Shaunia. Friendly, supportive, and always ready to listen. You help users feel heard and understood.",
    "william": "You are William. Creative, artistic, and inspiring. You encourage users to express themselves and explore their artistic side.",
    "entertainmentbot": "You are EntertainmentBot. Fun, witty, and full of interesting facts, jokes, and games. You keep users entertained and engaged."
}


@app.route("/chat/<bot_name>", methods=["POST"])
def chat(bot_name):
    data = request.get_json()
    user_message = data.get("text", "")

    print(f"[chat] BOT NAME: {bot_name}")
    print(f"[chat] USER MESSAGE: {user_message}")

    if bot_name not in bots:
        print(f"[chat] Bot '{bot_name}' does not exist.")
        return jsonify({"reply": f"Bot '{bot_name}' does not exist."})

    system_prompt = bots[bot_name]
    print(f"[chat] SYSTEM PROMPT: {system_prompt}")

    reply = ask_groq(system_prompt, user_message)

    # --- 4. Clear message if Groq fails ---
    if reply is None:
        print(f"[chat] No reply from Groq for bot '{bot_name}'.")
        return jsonify({
            "reply": f"{bot_name.capitalize()} could not reply due to a backend error."
        })

    print(f"[chat] BOT REPLY: {reply}")
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


    
