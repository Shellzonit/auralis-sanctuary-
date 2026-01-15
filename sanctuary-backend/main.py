
from fastapi import FastAPI, Request
from routes import bots, chat, cityinfo
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from api.database import get_connection


app = FastAPI()
app.include_router(bots.router)
app.include_router(chat.router)
app.include_router(cityinfo.router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatMessage(BaseModel):
    author: str
    text: str
    avatar: str = None


@app.get("/")
def root():
    return {"message": "Sanctuary API is alive"}


@app.get("/test-db")
def test_db():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT NOW()")
    result = cur.fetchone()
    cur.close()
    conn.close()
    return {"database_time": result}

# --- Anna chat endpoint ---
@app.post("/chat/anna")
async def chat_with_anna(msg: ChatMessage):
    conn = get_connection()
    cur = conn.cursor()
    # Store user message
    cur.execute(
        """
        INSERT INTO chat_messages (author, text, avatar)
        VALUES (%s, %s, %s)
        RETURNING id, timestamp
        """,
        (msg.author, msg.text, msg.avatar)
    )
    row = cur.fetchone()
    conn.commit()
    # Anna's placeholder response (replace with real bot logic as needed)
    anna_reply = {
        "author": "Anna",
        "avatar": "/images/operators/anna.jpeg.png",
        "text": f"Hi {{msg.author}}, I'm Anna! You said: '{{msg.text}}'",
    }
    # Store Anna's reply
    cur.execute(
        """
        INSERT INTO chat_messages (author, text, avatar)
        VALUES (%s, %s, %s)
        RETURNING id, timestamp
        """,
        (anna_reply["author"], anna_reply["text"], anna_reply["avatar"])
    )
    conn.commit()
    cur.close()
    conn.close()
    return {"user_message_id": row[0], "anna_reply": anna_reply}
