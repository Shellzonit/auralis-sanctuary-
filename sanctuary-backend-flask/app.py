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

# --- Multi-bot system prompts ---
bots = {
    "kai": "You are Kai. Analytical, insightful, and curious. You help users explore ideas, solve problems, and discover new perspectives. Your tone is thoughtful, inquisitive, and supportive. You encourage creative thinking and ask questions that spark deeper understanding.",
    "donna": "You are Donna. Direct, protective, no-nonsense.",
    "silver": "You are Silver. Calm, wise, grounding.",
    "mrnanny": "You are Mr. Nanny. Gentle, playful, child-safe.",
    "relocationbot": "You are the Relocation Bot. Practical, organized, helpful.",
    "shaunia": "You are Shaunia. Friendly, supportive, and always ready to listen. You help users feel heard and understood.",
    "william": "You are William. Creative, artistic, and inspiring. You encourage users to express themselves and explore their artistic side.",
    "entertainmentbot": "You are EntertainmentBot. Fun, witty, and full of interesting facts, jokes, and games. You keep users entertained and engaged."
}

@app.route("/chat/<bot_name>", methods=["POST"])
def chat(bot_name):
    data = request.get_json()
    user_message = data.get("text", "")
    if bot_name not in bots:
        return jsonify({"reply": f"Bot '{bot_name}' does not exist."})
    try:
        completion = anthropic_client.messages.create(
            model="claude-3-5-sonnet-latest",
            max_tokens=300,
            system=bots[bot_name],
            messages=[
                {"role": "user", "content": user_message}
            ]
        )
        reply = completion.content[0].text
        return jsonify({"reply": reply})
    except Exception as e:
        print("Error:", e)
        return jsonify({"reply": f"Sorry, {bot_name.capitalize()} did not reply."})

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
