from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from api.database import get_connection
import os
import requests
from groq import Groq

router = APIRouter()

class ChatRequest(BaseModel):
    author: str
    text: str
    avatar: str = None

@router.post("/chat/{bot_name}")
async def chat_with_bot(bot_name: str, msg: ChatRequest):
    # --- Store user message in PostgreSQL ---
    conn = get_connection()
    cur = conn.cursor()
    table_map = {
        "anna": "chat_messages",
        "donna": "entertainmentbot_chat",
        "shaunia": "friendbot_chat",
        "mrnanny": "mrnanny_chat",
        "relocationbot": "relocationbot_chat",
        "silver": "seniorbot_chat",
        "william": "artistbot_chat",
        "entertainmentbot": "entertainmentbot_chat"
    }
    table = table_map.get(bot_name.lower())
    if not table:
        cur.close()
        conn.close()
        raise HTTPException(status_code=404, detail="Bot not found")
    cur.execute(f"INSERT INTO {table} (author, text, avatar) VALUES (%s, %s, %s) RETURNING id, timestamp", (msg.author, msg.text, msg.avatar))
    row = cur.fetchone()
    conn.commit()

    # --- Store user message in Supabase ---
    try:
        requests.post(
            os.getenv("SUPABASE_CHAT_INSERT_URL"),
            json={"author": msg.author, "text": msg.text, "avatar": msg.avatar}
        )
    except Exception:
        pass

    # --- Smart reply logic ---
    reply = None
    if bot_name.lower() == "anna":
        # Use Groq for Anna's reply
        from groq import Groq
        groq_key = os.getenv("GROQ_API_KEY")
        print(f"[Anna Chat Debug] GROQ_API_KEY loaded: {groq_key}")
        client = Groq(api_key=groq_key)
        try:
            print(f"[Anna Chat Debug] Calling Groq client with key: {groq_key}")
            groq_response = client.chat.completions.create(
                model="llama-3.1-70b-versatile",
                messages=[{"role": "user", "content": msg.text}]
            )
            reply = groq_response.choices[0].message["content"]
        except Exception as e:
            print(f"[Anna Chat Error] Groq API failed: {e}")
            reply = "Hi! I'm Anna, your meal bot. Ask me for recipes, meal ideas, or nutrition tips! (Groq is currently unavailable, but I'm still here to help.)"

        # --- Store Anna's reply in PostgreSQL ---
        cur.execute(f"INSERT INTO {table} (author, text, avatar) VALUES (%s, %s, %s) RETURNING id, timestamp", (anna_name, reply, anna_avatar))
        conn.commit()

        # --- Store Anna's reply in Supabase ---
        try:
            requests.post(
                os.getenv("SUPABASE_CHAT_INSERT_URL"),
                json={"author": anna_name, "text": reply, "avatar": anna_avatar}
            )
        except Exception:
            pass
    else:
        # ...existing logic for other bots...
        user_text = msg.text.lower()
        if bot_name.lower() == "silver":
            topic = None
            if any(word in user_text for word in ["health", "hydrate", "walk", "doctor"]):
                topic = "health"
            elif any(word in user_text for word in ["wellness", "meditation", "relax", "stretch"]):
                topic = "wellness"
            elif any(word in user_text for word in ["community", "center", "friends", "activities"]):
                topic = "community"
            elif any(word in user_text for word in ["resource", "support", "help"]):
                topic = "resources"
            if topic:
                cur.execute(f"SELECT text FROM seniorbot_chat WHERE topic = %s ORDER BY RANDOM() LIMIT 1", (topic,))
                bot_reply = cur.fetchone()
                if bot_reply:
                    reply = bot_reply[0]
            if not reply:
                cur.execute(f"SELECT text FROM seniorbot_chat ORDER BY RANDOM() LIMIT 1")
                bot_reply = cur.fetchone()
                if bot_reply:
                    reply = bot_reply[0]
            if not reply:
                reply = "Hi, I'm Silver! How can I help you today?"
        elif bot_name.lower() == "relocationbot":
            import re
            match = re.search(r'(?:about|in) ([a-zA-Z ]+)', user_text)
            if match:
                city_query = match.group(1).strip()
                api_url = f"http://localhost:8000/cityinfo/{city_query.replace(' ', '-').lower()}"
                try:
                    resp = requests.get(api_url)
                    if resp.status_code == 200:
                        city_data = resp.json()
                        reply = city_data.get("summary") or f"Here's some info about {city_query}."
                    else:
                        reply = f"Sorry, I couldn't find info for {city_query}."
                except Exception:
                    reply = f"Sorry, there was a problem fetching info for {city_query}."
            if not reply:
                cur.execute(f"SELECT text FROM {table} WHERE author = %s ORDER BY timestamp DESC LIMIT 1", (bot_name.title(),))
                bot_reply = cur.fetchone()
                reply = bot_reply[0] if bot_reply else f"Hi, I'm {bot_name.title()}! How can I help you?"
        else:
            cur.execute(f"SELECT text FROM {table} WHERE author = %s ORDER BY timestamp DESC LIMIT 1", (bot_name.title(),))
            bot_reply = cur.fetchone()
            if bot_reply:
                reply = bot_reply[0]
            else:
                reply = f"Hi, I'm {bot_name.title()}! How can I help you?"

    cur.close()
    conn.close()
    return {"user_message_id": row[0], "bot_reply": reply}
