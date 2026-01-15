from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from api.database import get_connection

router = APIRouter()

class Bot(BaseModel):
    id: Optional[int]
    name: str
    image: str
    desc: str

@router.get("/bots", response_model=List[Bot])
def list_bots():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, name, image, desc FROM bots")
    bots = [Bot(id=row[0], name=row[1], image=row[2], desc=row[3]) for row in cur.fetchall()]
    cur.close()
    conn.close()
    return bots

@router.post("/bots", response_model=Bot)
def add_bot(bot: Bot):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO bots (name, image, desc) VALUES (%s, %s, %s) RETURNING id", (bot.name, bot.image, bot.desc))
    bot_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()
    bot.id = bot_id
    return bot
