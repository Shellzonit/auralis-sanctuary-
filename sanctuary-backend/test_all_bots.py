import requests

bots = [
    "anna", "donna", "shaunia", "mrnanny", "relocationbot", "silver", "william", "entertainmentbot", "kai"
]

results = {}
for bot in bots:
    try:
        r = requests.post(f"http://localhost:5000/chat/{bot}", json={"text": "Hello!"}, timeout=10)
        data = r.json()
        results[bot] = data.get("reply", "No reply field")
    except Exception as e:
        results[bot] = f"Error: {e}"

for bot, reply in results.items():
    print(f"{bot}: {reply}\n")
