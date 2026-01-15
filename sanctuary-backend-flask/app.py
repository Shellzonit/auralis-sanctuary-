from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
from groq import Groq

load_dotenv()

app = Flask(__name__)
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def ask_groq(system_prompt, user_message):
    completion = client.chat.completions.create(
        model="llama3-8b-8192",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_message}
        ]
    )
    return completion.choices[0].message["content"]

@app.route("/chat/<bot_name>", methods=["POST"])
def chat(bot_name):
    data = request.get_json()
    user_message = data.get("text", "")

    bots = {
        "anna": "You are Anna. Warm, intuitive, emotionally intelligent.",
        "donna": "You are Donna. Direct, protective, no-nonsense.",
        "silver": "You are Silver. Calm, wise, grounding.",
        "mrnanny": "You are Mr. Nanny. Gentle, playful, child-safe.",
        "relocation": "You are the Relocation Bot. Practical, organized, helpful."
    }

    if bot_name not in bots:
        return jsonify({"reply": "That bot does not exist."})

    try:
        reply = ask_groq(bots[bot_name], user_message)
        return jsonify({"reply": reply})
    except Exception as e:
        print("Error:", e)
        return jsonify({"reply": "Sorry, the bot did not reply."})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
Ctrl + V

