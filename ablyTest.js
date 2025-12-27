"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ably = require("ably");
function testAbly() {
    var key = process.env.ABLY_API_KEY;
    if (!key) {
        console.error("❌ ABLY_API_KEY is missing");
        return;
    }
    var client = new Ably.Realtime({ key: key });
    client.connection.once("connected", function () {
        console.log("✅ Ably connected successfully!");
        process.exit(0);
    });
    client.connection.once("failed", function (err) {
        console.error("❌ Ably connection failed:", err);
        process.exit(1);
    });
}
testAbly();
