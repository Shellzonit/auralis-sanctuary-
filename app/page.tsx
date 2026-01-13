"use client";


import Link from "next/link";

// Import Next.js Image component
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function HomePage() {
  const pathname = usePathname();
  // List of images from public/
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
  // ...existing code...

    // Banner message for Android testers
    const bannerStyle = {
      width: '100%',
      background: '#ff1744',
      color: '#fff',
      fontWeight: 700,
      fontSize: '1.2rem',
      textAlign: 'center',
      padding: '12px 0',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    };
  const random = Math.floor(Math.random() * images.length);
  let secondRandom = Math.floor(Math.random() * images.length);
  // Ensure the second image is different
  if (secondRandom === random) {
    secondRandom = (secondRandom + 1) % images.length;
  }
  const img = images[random];
  const img2 = images[secondRandom];

  // Simple language switcher (English/Spanish)
  const [lang, setLang] = React.useState('en');
  const t: { [key: string]: { [key: string]: string } } = {
    en: {
      tagline: 'Empowering your AI journey: discover jobs, training, and support in a privacy-first community.',
      meet: 'Meet Mr. Job Nanny!',
      desc: 'Your personal, privacy-first AI job assistant. Discover new AI jobs, analyze your skill gaps, set interview reminders, and get personalized job alerts—all in a safe, supportive environment.',
      privacy: 'Your privacy is always protected—your data stays on your device unless you choose to share it.',
      chat: 'Chat with Mr. Job Nanny',
    },
    es: {
      tagline: 'Impulsa tu carrera en IA: descubre empleos, formación y apoyo en una comunidad que prioriza la privacidad.',
      meet: '¡Conoce a Mr. Job Nanny!',
      desc: 'Tu asistente personal de IA. Descubre nuevos empleos, analiza tus habilidades, recibe recordatorios de entrevistas y alertas personalizadas en un entorno seguro.',
      privacy: 'Tu privacidad siempre está protegida: tus datos permanecen en tu dispositivo a menos que decidas compartirlos.',
      chat: 'Chatea con Mr. Job Nanny',
    },
    ja: {
      tagline: 'AIのキャリアを強化：プライバシー重視のコミュニティで仕事、トレーニング、サポートを発見。',
      meet: 'Mr. Job Nannyに会いましょう！',
      desc: 'あなた専用のプライバシー重視AIジョブアシスタント。新しいAIの仕事を発見し、スキルギャップを分析し、面接リマインダーやパーソナライズされたジョブアラートを安全な環境で受け取れます。',
      privacy: 'あなたのプライバシーは常に保護されます—データはあなたが共有しない限りデバイスに残ります。',
      chat: 'Mr. Job Nannyとチャット',
    },
    zh: {
      tagline: '提升您的AI职业之路：在注重隐私的社区中发现工作、培训和支持。',
      meet: '认识Mr. Job Nanny！',
      desc: '您的个人隐私优先AI求职助手。发现新的AI职位，分析技能差距，设置面试提醒，并在安全环境中获得个性化职位通知。',
      privacy: '您的隐私始终受到保护——除非您选择分享，否则您的数据仅保留在您的设备上。',
      chat: '与Mr. Job Nanny聊天',
    },
    hi: {
      tagline: 'अपनी AI यात्रा को सशक्त बनाएं: गोपनीयता-प्रथम समुदाय में नौकरियाँ, प्रशिक्षण और समर्थन खोजें।',
      meet: 'Mr. Job Nanny से मिलें!',
      desc: 'आपका व्यक्तिगत, गोपनीयता-प्रथम AI जॉब सहायक। नई AI नौकरियाँ खोजें, अपने कौशल अंतर का विश्लेषण करें, साक्षात्कार अनुस्मारक सेट करें, और सुरक्षित वातावरण में व्यक्तिगत जॉब अलर्ट प्राप्त करें।',
      privacy: 'आपकी गोपनीयता हमेशा सुरक्षित है—आपके डेटा आपके डिवाइस पर ही रहते हैं जब तक आप साझा करने का निर्णय नहीं लेते।',
      chat: 'Mr. Job Nanny से चैट करें',
    }
  };

  return (
    <>
      <div style={bannerStyle}>
        Want to help test our app? <span style={{ color: '#fff', textDecoration: 'underline' }}>We need Android testers!</span> Please join the group: <a href="https://play.google.com/store/apps/details?id=com.aiwilding.mrnannyapp" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>Mr Nanny App on Google Play</a>
      </div>
      <main style={{ marginTop: '60px' }}>
      id="main-content"
        {/* Announcement now shown in banner above */}
        {/* ...existing code... */}
        background: '#f5f3fd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      role="main"
      tabIndex={-1}
    >
      {/* Language Switcher */}
      <div style={{ position: 'absolute', top: 12, right: 24, zIndex: 100, display: 'flex', gap: 8 }}>
        <button onClick={() => setLang('en')} style={{ padding: '4px 12px', borderRadius: 6, border: '1px solid #7b2ff2', background: lang === 'en' ? '#7b2ff2' : '#fff', color: lang === 'en' ? '#fff' : '#7b2ff2', fontWeight: 600, cursor: 'pointer' }}>EN</button>
        <button onClick={() => setLang('es')} style={{ padding: '4px 12px', borderRadius: 6, border: '1px solid #7b2ff2', background: lang === 'es' ? '#7b2ff2' : '#fff', color: lang === 'es' ? '#fff' : '#7b2ff2', fontWeight: 600, cursor: 'pointer' }}>ES</button>
        <button onClick={() => setLang('ja')} style={{ padding: '4px 12px', borderRadius: 6, border: '1px solid #7b2ff2', background: lang === 'ja' ? '#7b2ff2' : '#fff', color: lang === 'ja' ? '#fff' : '#7b2ff2', fontWeight: 600, cursor: 'pointer' }}>日本語</button>
        <button onClick={() => setLang('zh')} style={{ padding: '4px 12px', borderRadius: 6, border: '1px solid #7b2ff2', background: lang === 'zh' ? '#7b2ff2' : '#fff', color: lang === 'zh' ? '#fff' : '#7b2ff2', fontWeight: 600, cursor: 'pointer' }}>中文</button>
        <button onClick={() => setLang('hi')} style={{ padding: '4px 12px', borderRadius: 6, border: '1px solid #7b2ff2', background: lang === 'hi' ? '#7b2ff2' : '#fff', color: lang === 'hi' ? '#fff' : '#7b2ff2', fontWeight: 600, cursor: 'pointer' }}>हिन्दी</button>
      </div>
            {/* Banner with Tagline */}
            <section style={{
              width: '100%',
              maxWidth: 900,
              margin: '2.5rem auto 2rem auto',
              background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)',
              borderRadius: 28,
              boxShadow: '0 4px 32px #18191a22',
              padding: '2.5rem 0 2.5rem 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <h1
                style={{
                  color: 'rgba(255,255,255,0.97)',
                  fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
                  fontWeight: 800,
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontStyle: 'italic',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  margin: 0,
                  width: '100%',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  position: 'relative',
                  zIndex: 2,
                  textShadow: '0 2px 8px #8882',
                  WebkitTextStroke: '1.5px #bba6f7',
                  filter: 'none',
                  background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  maskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)',
                  lineHeight: 1.18,
                  paddingBottom: '0.18em',
                }}
              >
                AI Wilding
              </h1>
              <div style={{
                color: '#18191a',
                fontSize: '1.25rem',
                fontWeight: 500,
                marginTop: 12,
                textAlign: 'center',
                maxWidth: 600,
                textShadow: '0 1px 6px #fff',
              }}>
                {t[lang].tagline}
              </div>
            </section>
            {/* Homepage random images with alt text for accessibility */}
            <section style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
              <Image src={`/${img}`} alt={img.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')} width={600} height={320} style={{ borderRadius: 16, boxShadow: '0 2px 16px #7b2ff222', objectFit: 'cover', maxWidth: '100%', height: 'auto' }} />
              <Image src={`/${img2}`} alt={img2.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')} width={600} height={320} style={{ borderRadius: 16, boxShadow: '0 2px 16px #7b2ff222', objectFit: 'cover', maxWidth: '100%', height: 'auto' }} />
            </section>
      {/* Feature Section */}
      <section style={{
        background: '#fff',
        borderRadius: 16,
        padding: '32px 40px',
        maxWidth: 700,
        margin: '32px auto 48px auto',
        boxShadow: '0 2px 16px #18191a22',
        color: '#18191a',
        textAlign: 'center',
        fontSize: '1.18rem',
        lineHeight: 1.7,
        border: '1.5px solid #e0d6f7',
      }}>
        <strong style={{ color: '#7b2ff2', fontSize: '1.25rem' }}>{t[lang].meet}</strong>
        <br />
        <span role="img" aria-label="nanny">🧑‍🦳</span> {t[lang].desc}<br /><br />
        <ul style={{ margin: '8px 0 8px 24px', color: '#18191a', textAlign: 'left', fontSize: '1.08rem' }}>
          <li>{
            lang === 'en' ? 'Suggest jobs and career paths based on your interests and skills'
            : lang === 'es' ? 'Sugiere empleos y trayectorias profesionales según tus intereses y habilidades'
            : lang === 'ja' ? 'あなたの興味やスキルに基づいて仕事やキャリアパスを提案します'
            : lang === 'zh' ? '根据您的兴趣和技能推荐工作和职业路径'
            : 'आपके रुचियों और कौशल के आधार पर नौकरियाँ और करियर पथ सुझाएँ'
          }</li>
          <li>{
            lang === 'en' ? 'Analyze your resume and offer actionable feedback'
            : lang === 'es' ? 'Analiza tu currículum y ofrece recomendaciones útiles'
            : lang === 'ja' ? '履歴書を分析し、実用的なフィードバックを提供します'
            : lang === 'zh' ? '分析您的简历并提供可行的反馈'
            : 'आपके रिज़्यूमे का विश्लेषण करें और उपयोगी सुझाव दें'
          }</li>
          <li>{
            lang === 'en' ? 'Help you identify missing skills or certifications for your dream job'
            : lang === 'es' ? 'Te ayuda a identificar habilidades o certificaciones faltantes para tu trabajo ideal'
            : lang === 'ja' ? '理想の仕事に必要なスキルや資格の不足を特定するのを手伝います'
            : lang === 'zh' ? '帮助您识别理想工作所需的技能或证书缺失'
            : 'आपके सपनों की नौकरी के लिए आवश्यक कौशल या प्रमाणपत्रों की कमी की पहचान करने में मदद करें'
          }</li>
          <li>{
            lang === 'en' ? 'Send you interview reminders (with a friendly disclaimer!)'
            : lang === 'es' ? 'Te envía recordatorios de entrevistas (¡con un aviso amistoso!)'
            : lang === 'ja' ? '面接のリマインダーを送信します（親切な注意書き付き）'
            : lang === 'zh' ? '发送面试提醒（附友好免责声明）'
            : 'आपको साक्षात्कार अनुस्मारक भेजें (एक मित्रवत अस्वीकरण के साथ)'
          }</li>
          <li>{
            lang === 'en' ? 'Alert you to new job postings in chat or by email'
            : lang === 'es' ? 'Te avisa de nuevas ofertas de trabajo por chat o correo electrónico'
            : lang === 'ja' ? '新しい求人情報をチャットやメールでお知らせします'
            : lang === 'zh' ? '通过聊天或电子邮件提醒您新的职位发布'
            : 'चैट या ईमेल द्वारा आपको नई नौकरी की सूचनाएँ भेजें'
          }</li>
          <li>{
            lang === 'en' ? 'Answer your questions about pay, qualifications, and career growth'
            : lang === 'es' ? 'Responde tus preguntas sobre salario, requisitos y crecimiento profesional'
            : lang === 'ja' ? '給与、資格、キャリア成長についての質問に答えます'
            : lang === 'zh' ? '回答您关于薪资、资格和职业发展的问题'
            : 'वेतन, योग्यता और करियर ग्रोथ के बारे में आपके सवालों का जवाब दें'
          }</li>
        </ul>
        <span style={{ color: '#7b2ff2', fontWeight: 600 }}>{t[lang].privacy}</span>
        <br /><br />
          <div style={{ margin: '20px 0', padding: '10px', background: '#f3e8ff', borderRadius: '8px', color: '#4a148c', fontWeight: 500 }}>
            Want to help test our app? <br />
            <span style={{ color: '#6a1b9a' }}>We need Android testers!</span> Please join the group: <a href="https://play.google.com/store/apps/details?id=com.aiwilding.mrnannyapp" target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', textDecoration: 'underline' }}>Mr Nanny App on Google Play</a>
          </div>
        <Link href="/chatbot-demo" style={{ color: '#6a1b9a', fontWeight: 700, textDecoration: 'underline', fontSize: '1.1rem' }}>{t[lang].chat}</Link>
      </section>
    </main>
  );
}
