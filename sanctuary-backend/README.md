# Sanctuary Backend

A simple Python/Flask backend for chat rooms and AI job listings.

## Features
- REST API for chat rooms (create/list rooms, post/get messages)
- REST API for AI job listings (add/list/search jobs)
- SQLite database (no external keys required)
- CORS enabled for frontend integration

## Endpoints

### Chat Rooms
- `GET /api/rooms` — List all chat rooms
- `POST /api/rooms` — Create a new chat room (`{"name": "Room Name"}`)
- `GET /api/rooms/<room_id>/messages` — List messages in a room
- `POST /api/rooms/<room_id>/messages` — Post a message (`{"author": "Name", "message": "Text"}`)

### AI Job Listings
- `GET /api/jobs` — List all jobs (optional `?q=search`)
- `POST /api/jobs` — Add a job (`{"title": "...", "company": "...", "description": "...", "pay": "..."}`)

## Setup

1. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
2. Run the server:
   ```sh
   python app.py
   ```

The server will start on http://127.0.0.1:5000

## Database
- SQLite file: `sanctuary.db` (auto-created)
- No external API keys or services required

---

This backend is designed for easy integration with your Next.js/React frontend.
