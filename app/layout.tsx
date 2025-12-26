import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <nav style={{ width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "1rem 2rem 0.5rem 2rem" }}>
          <a href="/" className="text-sanctuary-accent hover:text-sanctuary-text transition-colors font-bold text-lg" style={{ textDecoration: "none" }}>Home</a>
        </nav>
        {children}
        <div className="blue-streak" />
      </body>
    </html>
  );
}
