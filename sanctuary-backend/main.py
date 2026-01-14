from fastapi import FastAPI
from api.database import get_connection

app = FastAPI()

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
