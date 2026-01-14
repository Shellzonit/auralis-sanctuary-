"use client";



import Link from "next/link";
import SanctuaryLogo from '../components/SanctuaryLogo';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import HeroSection from './hero-preview/HeroSection';
import OperatorGallery from './hero-preview/OperatorGallery';
import AnnaOperatorCard from '../components/AnnaOperatorCard';
import OperatorCards from '../components/OperatorCards';

export default function HomePage() {
  const pathname = usePathname();
  const [lang, setLang] = React.useState('en');
  const [imgError, setImgError] = React.useState(false);
  const [img2Error, setImg2Error] = React.useState(false);
  const images = [
    'ai around the world 2.png',
    'ai around the world.png',
    'ai homepage 3.png',
    'ai homepage.png',
    'Ai wilding (2).png',
    'Ai wilding.png',
    'background.png',
    'BCO.436bd64f-0acc-4437-a5c3-15269bfdf309.png',
    'big cities.png',
    'canada graph.png',
    'china.png',
    'education.png',
    'educational outlook.png',
    'healthy.png',
    'icon.png',
    'japan.png',
    'job growth.png',
    'Mr Nanny.png',
    'Resume.png',
    'states 2.png',
    'states.png',
    'uk.png',
    'usa.png',
  ];
  const [img, setImg] = React.useState(images[0]);
  const [img2, setImg2] = React.useState(images[1]);
  const t: Record<string, any> = {
    en: {
      tagline: "A mythic, minimalist creative sanctuary for AI jobs, creativity, and community.",
      meet: "Meet Mr. Job Nanny, your AI career guide:",
      desc: "Get personalized job advice, resume feedback, and career tips in your language.",
      privacy: "Your privacy is protected. No data is shared.",
      chat: "Try the Chatbot Demo"
    },
    es: {
      import HeroSection from "../components/HeroSection";
      import OperatorGallery from "../components/OperatorGallery";

      export default function HomePage() {
        return (
          <main style={{ minHeight: '100vh', width: '100%', background: '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <HeroSection />
            <section style={{ maxWidth: 700, margin: '2rem auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: 12 }}>Meet Your Operators</h2>
              <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>
                Each operator brings a unique style and support. Choose the one that fits your needs, or explore them all.
              </p>
            </section>
            <OperatorGallery />
          </main>
        );
      }
      privacy: "Tu privacidad está protegida. No se comparte ningún dato.",

      chat: "Prueba el Chatbot Demo"
