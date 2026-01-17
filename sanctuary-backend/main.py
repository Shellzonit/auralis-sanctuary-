

import os
from fastapi import FastAPI, Request
from routes import bots, chat, cityinfo, news, jobs
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from api.database import get_connection

# Load environment variables for keys
FERNET_KEY = os.getenv("FERNET_KEY")
ADZUNA_APP_ID = os.getenv("ADZUNA_APP_ID")
ADZUNA_API_KEY = os.getenv("ADZUNA_API_KEY")
NEWS_API_KEY = os.getenv("NEWS_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")


app = FastAPI()
app.include_router(bots.router)
app.include_router(chat.router)
app.include_router(cityinfo.router)
app.include_router(news.router)
app.include_router(jobs.router)
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

