
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NotificationBell, { Notification } from "../components/NotificationBell";
import NavBar from "../components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Wilding",
  description: "A mythic, minimalist creative sanctuary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ position: "relative", minHeight: "100vh" }}
      >
        <NavBar />
        {children}
        <footer
          style={{
            width: '100%',
            background: 'rgba(106,27,154,0.85)',
            color: '#ffd700',
            textAlign: 'center',
            fontSize: '1rem',
            padding: '18px 0 14px 0',
            marginTop: 48,
            letterSpacing: 0.2,
            fontWeight: 500,
            position: 'relative',
            zIndex: 10,
          }}
        >
          Built with Next.js, React, and Python/Flask. All sensitive information is encrypted and your privacy is always respected.
        </footer>
        <div className="blue-streak" />
      </body>
    </html>
  );
}
