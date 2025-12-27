"use client";
import { useState } from "react";

export type Notification = {
  id: number;
  message: string;
  read?: boolean;
};

export default function NotificationBell({ notifications }: { notifications: Notification[] }) {
  const [open, setOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        aria-label="Notifications"
        onClick={() => setOpen(v => !v)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          position: "relative",
          padding: 0,
        }}
      >
        <svg width={28} height={28} viewBox="0 0 28 28" fill="none">
          <circle cx={14} cy={14} r={13} fill="#23242b" stroke="#ffe082" strokeWidth={2} />
          <path d="M14 7c-3 0-5 2-5 5v3c0 1-.5 2-1.5 2.5v1h13v-1C19.5 17 19 16 19 15v-3c0-3-2-5-5-5z" fill="#ffe082" />
          <circle cx={14} cy={22} r={2} fill="#ffe082" />
        </svg>
        {unreadCount > 0 && (
          <span style={{
            position: "absolute",
            top: 2,
            right: 2,
            background: "#ff5252",
            color: "#fff",
            borderRadius: "50%",
            fontSize: 12,
            fontWeight: 700,
            padding: "2px 6px",
            minWidth: 18,
            textAlign: "center",
            boxShadow: "0 1px 6px #0006",
          }}>{unreadCount}</span>
        )}
      </button>
      {open && (
        <div style={{
          position: "absolute",
          right: 0,
          top: 36,
          background: "#23242b",
          color: "#f7fafc",
          border: "1.5px solid #31323a",
          borderRadius: 12,
          boxShadow: "0 2px 16px #0008",
          minWidth: 260,
          zIndex: 100,
          padding: 0,
        }}>
          <div style={{ padding: "12px 18px", borderBottom: "1px solid #31323a", fontWeight: 700, color: "#ffe082" }}>
            Notifications
          </div>
          {notifications.length === 0 ? (
            <div style={{ padding: 18, color: "#aaa", textAlign: "center" }}>No notifications</div>
          ) : (
            notifications.map(n => (
              <div key={n.id} style={{
                padding: "14px 18px",
                borderBottom: "1px solid #23242b",
                background: n.read ? "none" : "#181a20",
                fontWeight: n.read ? 400 : 600,
                color: n.read ? "#aaa" : "#ffe082",
                fontSize: 15,
              }}>
                {n.message}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
