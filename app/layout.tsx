import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavTabs from "../components/NavTabs";
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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A mythic, minimalist creative sanctuary for AI jobs, creativity, and community." />
        <meta name="keywords" content="AI jobs, AI careers, training, resume, hiring, sanctuary, creative, community" />
        <meta name="author" content="Sanctuary" />
        <link rel="canonical" href="https://www.aiwilding.com/" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* Open Graph tags */}
        <meta property="og:title" content="AI Wilding" />
        <meta property="og:description" content="A mythic, minimalist creative sanctuary for AI jobs, creativity, and community." />
        <meta property="og:url" content="https://www.aiwilding.com/" />
        <meta property="og:image" content="/BCO.436bd64f-0acc-4437-a5c3-15269bfdf309.png" />
        <meta property="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Wilding" />
        <meta name="twitter:description" content="A mythic, minimalist creative sanctuary for AI jobs, creativity, and community." />
        <meta name="twitter:image" content="/BCO.436bd64f-0acc-4437-a5c3-15269bfdf309.png" />
        {/* Structured Data (JSON-LD) can be added via Next.js Head component or server-side for CSP compliance */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0, padding: 0, minHeight: '100vh', background: '#fff', color: '#18191a', fontFamily: 'Inter, Arial, sans-serif' }}
      >
        {/* Skip to content link for accessibility */}
        <a href="#main-content" style={{ position: 'absolute', left: '-999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden', zIndex: 1000 }}>
          Skip to main content
        </a>
        <NavTabs />
        <main id="main-content" role="main" tabIndex={-1}
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
        </main>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 24, marginBottom: 8 }}>
          <div style={{ width: '100%', maxWidth: 900, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SiteFooter />
            <footer style={{ width: '100%', textAlign: 'center', fontSize: '0.95rem', marginTop: 8 }}>
              <a href="/privacy/policy.md" style={{ color: '#7b2ff2', textDecoration: 'underline' }}>Privacy Policy</a>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
