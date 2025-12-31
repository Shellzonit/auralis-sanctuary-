
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
  title: "Auralis Sanctuary",
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
        <div className="blue-streak" />
      </body>
    </html>
  );
}
