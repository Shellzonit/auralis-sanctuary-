from flask import Flask, request, jsonify
import os
from groq import Groq
import psycopg2
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Table mapping for bots
bot_table_map = {
    "anna": "chat_messages",
    "donna": "entertainmentbot_chat",
    "shaunia": "friendbot_chat",
    "mrnanny": "mrnanny_chat",
    "relocationbot": "relocationbot_chat",
    "silver": "seniorbot_chat",
    "william": "artistbot_chat",
    "entertainmentbot": "entertainmentbot_chat"
}

def get_connection():
    return psycopg2.connect(
        host=os.getenv("POSTGRES_HOST"),
        port=os.getenv("POSTGRES_PORT"),
        dbname=os.getenv("POSTGRES_DB"),
        user=os.getenv("POSTGRES_USER"),
        password=os.getenv("POSTGRES_PASSWORD"),
    )

@app.route("/chat/anna", methods=["POST"])
def chat_anna():
    data = request.get_json()
    user_message = data.get("text", "")

    try:
        completion = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=[
                {"role": "system", "content": "You are Anna."},
                {"role": "user", "content": user_message}
            ]
        )

        reply = completion.choices[0].message["content"]
        return jsonify({"reply": reply})

    except Exception as e:
        print("Error:", e)
        return jsonify({"reply": "Sorry, Anna did not reply."})

@app.route("/chat/<bot_name>", methods=["POST"])
def chat_with_bot(bot_name):
    data = request.get_json()
    author = data.get("author", "user")
    text = data.get("text", "")
    table = bot_table_map.get(bot_name.lower())
    if not table:
        return jsonify({"error": "Bot not found"}), 404

    conn = get_connection()
    cur = conn.cursor()
    cur.execute(f"INSERT INTO {table} (author, text) VALUES (%s, %s) RETURNING id, timestamp", (author, text))
    row = cur.fetchone()
    conn.commit()

    reply = None
    if bot_name.lower() == "anna":
        try:
            completion = client.chat.completions.create(
                model="llama3-8b-8192",
                messages=[{"role": "user", "content": text}]
            )
            reply = completion.choices[0].message["content"]
        except Exception as e:
            print("Groq API failed:", e)
            reply = "Hi! I'm Anna, your meal bot. Ask me for recipes, meal ideas, or nutrition tips!"
        cur.execute(f"INSERT INTO {table} (author, text) VALUES (%s, %s)", ("Anna", reply))
        conn.commit()
    else:
        bot_name_title = bot_name.title()
        cur.execute(f"SELECT text FROM {table} WHERE author = %s ORDER BY timestamp DESC LIMIT 1", (bot_name_title,))
        bot_reply = cur.fetchone()
        if bot_reply:
            reply = bot_reply[0]
        else:
            reply = f"Hi, I'm {bot_name_title}! How can I help you?"
        cur.execute(f"INSERT INTO {table} (author, text) VALUES (%s, %s)", (bot_name_title, reply))
        conn.commit()

    cur.close()
    conn.close()
    return jsonify({"user_message_id": row[0], "bot_reply": reply})

@socketio.on('send_message')
def handle_send_message(data):
    # data: {author, text, bot}
    author = data.get("author", "user")
    text = data.get("text", "")
    bot_name = data.get("bot", "anna")
    table = bot_table_map.get(bot_name.lower())
    if not table:
        emit('receive_message', {"error": "Bot not found"})
        return

    conn = get_connection()
    cur = conn.cursor()
    cur.execute(f"INSERT INTO {table} (author, text) VALUES (%s, %s) RETURNING id, timestamp", (author, text))
    row = cur.fetchone()
    conn.commit()

    reply = None
    if bot_name.lower() == "anna":
        try:
            completion = client.chat.completions.create(
                model="llama3-8b-8192",
                messages=[{"role": "user", "content": text}]
            )
            reply = completion.choices[0].message["content"]
        except Exception as e:
            print("Groq API failed:", e)
            reply = "Hi! I'm Anna, your meal bot. Ask me for recipes, meal ideas, or nutrition tips!"
        cur.execute(f"INSERT INTO {table} (author, text) VALUES (%s, %s)", ("Anna", reply))
        conn.commit()
    else:
        bot_name_title = bot_name.title()
        cur.execute(f"SELECT text FROM {table} WHERE author = %s ORDER BY timestamp DESC LIMIT 1", (bot_name_title,))
        bot_reply = cur.fetchone()
        if bot_reply:
            reply = bot_reply[0]
        else:
            reply = f"Hi, I'm {bot_name_title}! How can I help you?"
        cur.execute(f"INSERT INTO {table} (author, text) VALUES (%s, %s)", (bot_name_title, reply))
        conn.commit()

    cur.close()
    conn.close()
    # Broadcast user message and bot reply
    emit('receive_message', {"sender": author, "text": text, "bot": bot_name}, broadcast=True)
    emit('receive_message', {"sender": bot_name, "text": reply, "bot": bot_name}, broadcast=True)

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5000)
