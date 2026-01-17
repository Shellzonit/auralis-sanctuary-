from fastapi import APIRouter, HTTPException

router = APIRouter()

# Example static news data
dummy_news = [
    {"id": 1, "title": "AI Revolutionizes Job Market", "content": "Artificial intelligence is changing the way we work."},
    {"id": 2, "title": "Remote Work Trends", "content": "More companies are offering remote positions in 2026."}
]

@router.get("/news")
def get_news():
    return {"news": dummy_news}
