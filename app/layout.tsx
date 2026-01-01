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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Wilding" />
        <meta name="twitter:description" content="A mythic, minimalist creative sanctuary for AI jobs, creativity, and community." />
        <meta name="twitter:image" content="https://www.AIWilding.com/BCO.436bd64f-0acc-4437-a5c3-15269bfdf309.png" />
        {/* Open Graph meta tags */}
        <meta property="og:title" content="AI Wilding" />
        <meta property="og:description" content="A mythic, minimalist creative sanctuary for AI jobs, creativity, and community." />
        <meta property="og:image" content="https://www.AIWilding.com/BCO.436bd64f-0acc-4437-a5c3-15269bfdf309.png" />
        <meta property="og:url" content="https://www.AIWilding.com/" />
        <meta property="og:type" content="website" />
      </head>
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
