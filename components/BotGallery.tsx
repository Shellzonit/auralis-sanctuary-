
import React from "react";
import Link from "next/link";
import { bots } from "../data/bots";

export default function BotGallery() {
  return (
    <section style={{ width: "100%", maxWidth: 900, margin: "2rem auto", display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center" }}>
      {bots.map((bot, i) => {
        const botId = bot.name.toLowerCase().replace(/[^a-z0-9]/g, "");
        return (
          <Link key={i} href={`/bots/${botId}`} style={{ textDecoration: 'none' }}>
            <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px #18191a22", padding: 20, width: 240, display: "flex", flexDirection: "column", alignItems: "center", cursor: 'pointer', transition: 'box-shadow 0.2s', }}>
              <img src={bot.image} alt={bot.name} width={160} height={160} style={{ borderRadius: 12, marginBottom: 12 }} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: "8px 0 4px 0", color: "#7b2ff2" }}>{bot.name}</h3>
              <p style={{ fontSize: "0.98rem", color: "#444", textAlign: "center" }}>{bot.desc}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
