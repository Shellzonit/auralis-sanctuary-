import * as Ably from "ably";


function testAbly() {
  const key = process.env.ABLY_API_KEY;

  if (!key) {
    console.error("❌ ABLY_API_KEY is missing");
    return;
  }

  const client = new Ably.Realtime({ key });

  client.connection.once("connected", () => {
    console.log("✅ Ably connected successfully!");
    process.exit(0);
  });

  client.connection.once("failed", (err) => {
    console.error("❌ Ably connection failed:", err);
    process.exit(1);
  });
}

testAbly();
