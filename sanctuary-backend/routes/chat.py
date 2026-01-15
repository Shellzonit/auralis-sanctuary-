from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from api.database import get_connection

router = APIRouter()

class ChatRequest(BaseModel):
    author: str
    text: str
    avatar: str = None

@router.post("/chat/{bot_name}")
async def chat_with_bot(bot_name: str, msg: ChatRequest):
    conn = get_connection()
    cur = conn.cursor()
    # Insert user message into the bot's chat table
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
    # Store user message
    cur.execute(f"INSERT INTO {table} (author, text, avatar) VALUES (%s, %s, %s) RETURNING id, timestamp", (msg.author, msg.text, msg.avatar))
    row = cur.fetchone()
    conn.commit()

    # Smart reply logic for Silver (seniorbot)
    reply = None
    if bot_name.lower() == "silver":
        # Simple keyword/topic matching
        user_text = msg.text.lower()
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
            # Fallback: any Silver reply
            cur.execute(f"SELECT text FROM seniorbot_chat ORDER BY RANDOM() LIMIT 1")
            bot_reply = cur.fetchone()
            if bot_reply:
                reply = bot_reply[0]
        if not reply:
            reply = "Hi, I'm Silver! How can I help you today?"
    elif bot_name.lower() == "relocationbot":
        user_text = msg.text.lower()
        import re
        # Simple city extraction (looks for 'about CITY' or 'in CITY')
        match = re.search(r'(?:about|in) ([a-zA-Z ]+)', user_text)
        if match:
            city_query = match.group(1).strip()
            import requests
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
            # Default: last bot reply
            cur.execute(f"SELECT text FROM {table} WHERE author = %s ORDER BY timestamp DESC LIMIT 1", (bot_name.title(),))
            bot_reply = cur.fetchone()
            reply = bot_reply[0] if bot_reply else f"Hi, I'm {bot_name.title()}! How can I help you?"
    else:
        # Default: last bot reply
        cur.execute(f"SELECT text FROM {table} WHERE author = %s ORDER BY timestamp DESC LIMIT 1", (bot_name.title(),))
        bot_reply = cur.fetchone()
        if bot_reply:
            reply = bot_reply[0]
        else:
            if bot_name.lower() == "anna":
                reply = "Hi, I'm Anna! I'm here to help with meals, recipes, and nutrition. What can I do for you today?"
            else:
                reply = f"Hi, I'm {bot_name.title()}! How can I help you?"
    cur.close()
    conn.close()
    return {"user_message_id": row[0], "bot_reply": reply}
        else:
            # For Anna, use LLM to generate reply
            if bot_name.lower() == "anna":
                # Fetch Anna's identity from bots table
                cur.execute("SELECT name, image, desc FROM bots WHERE LOWER(name) LIKE '%anna%'")
                anna_info = cur.fetchone()
                anna_name = anna_info[0] if anna_info else "Anna"
                anna_avatar = anna_info[1] if anna_info else None
                anna_desc = anna_info[2] if anna_info else "Meal and recipe support bot."

                # Generate reply using OpenAI LLM
                openai.api_key = os.getenv("OPENAI_API_KEY", "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")
                openai.api_base = "https://openrouter.ai/api/v1"
                prompt = f"{anna_desc}\nUser: {msg.text}\nAnna:"
                try:
                    response = openai.ChatCompletion.create(
                        model="gpt-3.5-turbo",
                        messages=[{"role": "system", "content": anna_desc}, {"role": "user", "content": msg.text}]
                    )
                    reply = response.choices[0].message["content"].strip()
                except Exception as e:
                    reply = "Sorry, Anna couldn't generate a reply right now."

                # Insert Anna's reply into chat_messages
                cur.execute(f"INSERT INTO {table} (author, text, avatar) VALUES (%s, %s, %s) RETURNING id, timestamp", (anna_name, reply, anna_avatar))
                conn.commit()
