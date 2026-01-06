import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";

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
  openGraph: {
    title: "AI Wilding",
    description: "A mythic, minimalist creative sanctuary for AI jobs, creativity, and community.",
    url: "https://www.AIWilding.com/",
    siteName: "AI Wilding",
    images: [
      {
        url: "/BCO.436bd64f-0acc-4437-a5c3-15269bfdf309.png",
        width: 1200,
        height: 630,
        alt: "AI Wilding Sanctuary Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Wilding",
    description: "A mythic, minimalist creative sanctuary for AI jobs, creativity, and community.",
    images: ["/BCO.436bd64f-0acc-4437-a5c3-15269bfdf309.png"]
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ margin: 0, padding: 0, minHeight: '100vh', background: '#fff', color: '#18191a', fontFamily: 'Inter, Arial, sans-serif' }}>
        <NavBar />
        <div
          style={{
            position: "relative",
            minHeight: "100vh",
            background: "#fff",
            color: "#18191a",
            fontFamily: "Inter, Arial, sans-serif",
            maxWidth: 1200,
            margin: "0 auto",
            boxShadow: "0 2px 32px #7b2ff222",
            borderRadius: 18,
            padding: "0 0 24px 0",
          }}
        >
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
