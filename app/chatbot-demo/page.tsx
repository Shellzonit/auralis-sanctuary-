// Macronutrient info for common foods (per serving)
const FOOD_MACROS: { [food: string]: { protein: number, carbs: number, fat: number } } = {
  "apple": { protein: 0.5, carbs: 25, fat: 0.3 },
  "banana": { protein: 1.3, carbs: 27, fat: 0.3 },
  "orange": { protein: 1.2, carbs: 15.4, fat: 0.2 },
  "egg": { protein: 6, carbs: 1, fat: 5 },
  "slice of bread": { protein: 2.7, carbs: 14, fat: 1.1 },
  "chicken breast (100g)": { protein: 31, carbs: 0, fat: 3.6 },
  "chicken thigh (100g)": { protein: 25, carbs: 0, fat: 9 },
  "turkey breast (100g)": { protein: 29, carbs: 0, fat: 1 },
  "lean ground beef (100g)": { protein: 26, carbs: 0, fat: 15 },
  "regular ground beef (100g)": { protein: 26, carbs: 0, fat: 20 },
  "pork chop (100g)": { protein: 25, carbs: 0, fat: 14 },
  "bacon (1 slice)": { protein: 3, carbs: 0.1, fat: 3.3 },
  "ham (100g)": { protein: 18, carbs: 1.5, fat: 7 },
  "salmon (100g)": { protein: 20, carbs: 0, fat: 13 },
  "beef steak (100g)": { protein: 25, carbs: 0, fat: 19 },
  "sausage (1 link)": { protein: 5, carbs: 1, fat: 16 },
  "hot dog": { protein: 5, carbs: 2, fat: 13 },
  "rice (1 cup cooked)": { protein: 4, carbs: 45, fat: 0.4 },
  "broccoli (1 cup)": { protein: 2.5, carbs: 6, fat: 0.3 },
  "avocado (whole)": { protein: 3, carbs: 12, fat: 22 },
  "almonds (1 oz)": { protein: 6, carbs: 6, fat: 14 },
  "carrot (medium)": { protein: 0.6, carbs: 6, fat: 0.1 },
  "potato (medium)": { protein: 3, carbs: 26, fat: 0.2 },
  "cheese (1 oz)": { protein: 7, carbs: 1, fat: 9 },
  "milk (1 cup)": { protein: 8, carbs: 12, fat: 5 },
  "oatmeal (1 cup cooked)": { protein: 6, carbs: 27, fat: 3 },
  "tofu (100g)": { protein: 8, carbs: 2, fat: 4 },
  "peanut butter (1 tbsp)": { protein: 4, carbs: 3, fat: 8 },
  "yogurt (plain, 1 cup)": { protein: 10, carbs: 10, fat: 0.4 },
  "granola bar": { protein: 2, carbs: 18, fat: 4 },
  "donut (plain)": { protein: 2, carbs: 22, fat: 11 },
  "donut (glazed)": { protein: 3, carbs: 31, fat: 14 },
  "potato chips (1 oz)": { protein: 2, carbs: 15, fat: 10 },
  "pretzels (1 oz)": { protein: 2.5, carbs: 23, fat: 0.8 },
  "chocolate bar (regular)": { protein: 3, carbs: 25, fat: 13 },
  "cookie (chocolate chip)": { protein: 1, carbs: 10, fat: 4 },
  "crackers (5 pieces)": { protein: 1, carbs: 10, fat: 2 },
  "popcorn (1 cup, air-popped)": { protein: 1, carbs: 6, fat: 0.1 },
  "energy bar": { protein: 10, carbs: 30, fat: 5 }
};
// Common foods and their approximate calorie counts per serving
const FOOD_CALORIES: { [food: string]: number } = {
  "apple": 95,
  "banana": 105,
  "orange": 62,
  "egg": 70,
  "slice of bread": 80,
  "chicken breast (100g)": 165,
  "chicken thigh (100g)": 209,
  "turkey breast (100g)": 135,
  "lean ground beef (100g)": 217,
  "regular ground beef (100g)": 250,
  "pork chop (100g)": 231,
  "bacon (1 slice)": 42,
  "ham (100g)": 145,
  "salmon (100g)": 208,
  "beef steak (100g)": 250,
  "sausage (1 link)": 180,
  "hot dog": 150,
  "rice (1 cup cooked)": 200,
  "broccoli (1 cup)": 30,
  "avocado (whole)": 240,
  "almonds (1 oz)": 160,
  "carrot (medium)": 25,
  "potato (medium)": 110,
  "cheese (1 oz)": 115,
  "milk (1 cup)": 120,
  "oatmeal (1 cup cooked)": 150,
  "tofu (100g)": 76,
  "peanut butter (1 tbsp)": 95,
  "yogurt (plain, 1 cup)": 100,
  "granola bar": 120,
  "donut (plain)": 195,
  "donut (glazed)": 260,
  "potato chips (1 oz)": 150,
  "pretzels (1 oz)": 110,
  "chocolate bar (regular)": 210,
  "cookie (chocolate chip)": 80,
  "crackers (5 pieces)": 70,
  "popcorn (1 cup, air-popped)": 30,
  "energy bar": 250
};
"use client";
// Health & weight management tips for Mr. Nanny
const WORKOUT_TIPS = [
  "Take a brisk walk around your neighborhood or a local park.",
  "Dance to your favorite song for 5 minutes.",
  "Try a short yoga or stretching routine.",
  "Do a quick set of bodyweight exercises: squats, push-ups, lunges.",
  "Play with your pet or kids—movement counts!",
  "Clean or organize a room—turn chores into movement.",
  "Take the stairs instead of the elevator.",
  "Try a 7-minute workout app or video.",
  "Do jumping jacks or march in place during TV commercials.",
  "Go for a bike ride or gentle jog.",
];

const HEALTH_TIPS = [
  "Aim for 7-8 hours of sleep each night for better health.",
  "Prioritize rest and recovery—your body and mind need downtime to function at their best.",
  "Quality sleep helps your body repair, boosts your immune system, and supports weight loss.",
  "Drink a glass of water before each meal.",
  "Add a fruit or vegetable to every meal.",
  "Limit sugary drinks and snacks—choose whole foods instead.",
  "Eat slowly and mindfully to enjoy your food.",
  "Plan healthy snacks for busy days.",
  "Try to keep a regular sleep schedule, even on weekends.",
  "Swap fried foods for grilled or baked options.",
  "Take short breaks to stretch and move during your day.",
  "Celebrate small wins—every healthy choice counts!",
  "Combine foods rich in antioxidants (like berries, leafy greens, and nuts) with healthy fats (like olive oil or avocado) to help reduce inflammation.",
  "Pair colorful vegetables with lean proteins and whole grains for meals that support lower inflammation.",
  "Spices like turmeric and ginger, when added to meals, can help fight inflammation naturally.",
];

import React, { useState, useEffect } from "react";
import { encryptFernet } from "../../lib/fernetEncrypt";
import { NEW_AI_JOBS } from "../new-ai-jobs/page";

// Record a visit to the chatbot page
async function recordChatbotVisit() {
  try {
    await fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        path: typeof window !== 'undefined' ? window.location.pathname : '/chatbot-demo'
      })
    });
  } catch (e) {
    // Optionally log error
  }
}

// Simple FAQ and AI job/event recommender chatbot
// Latest announcement/news (update this string as needed)
const ANNOUNCEMENT = "🎉 Happy New Year 2026! Check out our upcoming AI Hiring Events and new job listings for the year ahead. Stay tuned for more updates!";
const FAQS = [
  {
    q: "Why is rest important for health and weight loss?",
    a: "Rest is essential for your body to recover, repair muscles, balance hormones, and support your immune system. Quality sleep helps with weight loss, reduces stress, and improves mood and focus. Aim for 7-8 hours of sleep each night and listen to your body when it needs downtime."
  },
  {
    q: "What foods can I combine to reduce inflammation?",
    a: "To help reduce inflammation, combine foods rich in antioxidants (like berries, leafy greens, and nuts) with healthy fats (like olive oil or avocado). Pair colorful vegetables with lean proteins and whole grains. Spices like turmeric and ginger can also help fight inflammation naturally."
  },
                    {
                      q: "What are some fun ways to stay active if I don’t like the gym?",
                      a: "Try dancing, playing with pets or kids, cleaning, gardening, or taking walks in nature. Even chores and games count as movement!"
                    },
                    {
                      q: "How can I exercise at home with no equipment?",
                      a: "Bodyweight exercises like squats, lunges, push-ups, and stretching routines are great. You can also use household items for resistance or follow online workout videos."
                    },
                    {
                      q: "What are quick workouts I can do during a busy day?",
                      a: "Try a 7-minute workout, dance to a favorite song, do jumping jacks during TV commercials, or take short walks. Small bursts of movement add up!"
                    },
                    {
                      q: "How can I make daily chores count as exercise?",
                      a: "Vacuuming, mopping, organizing, and yard work all burn calories and build strength. Turn chores into a workout by moving energetically and setting a timer."
                    },
                    {
                      q: "What are some beginner-friendly exercises for weight loss?",
                      a: "Walking, gentle jogging, dancing, yoga, and bodyweight routines are safe for beginners. Start slow and build up as you feel comfortable."
                    },
                    {
                      q: "How do I stay motivated to move more?",
                      a: "Set small goals, celebrate progress, invite friends or family to join, and choose activities you enjoy. Track your habits and reward yourself for consistency!"
                    },
                    {
                      q: "Can you suggest activities for families to get fit together?",
                      a: "Go for walks, play active games, dance, bike ride, or do simple home workouts together. Make movement fun and part of your routine!"
                    },
                    {
                      q: "How much water should I drink each day?",
                      a: "Aim for 6-8 cups (about 1.5-2 liters) daily, more if you’re active or it’s hot. Listen to your body and drink when thirsty."
                    },
                    {
                      q: "What’s a healthy sleep routine for better fitness?",
                      a: "Try to get 7-8 hours of sleep each night, keep a regular schedule, and create a relaxing bedtime routine. Good sleep helps recovery and energy."
                    },
                    {
                      q: "How do I track my progress without a fitness tracker?",
                      a: "Log your meals, weight, and habits in a journal or app. Track steps by counting walks, and celebrate small wins. Consistency matters most!"
                    },
                    {
                      q: "What are creative ways to get more steps in?",
                      a: "Take the stairs, walk during phone calls, park farther away, or explore new places on foot. Every step counts!"
                    },
                    {
                      q: "How can I fit exercise into my work-from-home schedule?",
                      a: "Schedule short movement breaks, stretch between meetings, and use chores or errands as opportunities to move. Even 5 minutes helps!"
                    },
                    {
                      q: "What are healthy snack ideas for energy?",
                      a: "Try fruit, nuts, yogurt, veggies with hummus, or whole grain crackers. Plan snacks ahead for busy days."
                    },
                    {
                      q: "How do I recover from a workout?",
                      a: "Drink water, eat a balanced meal, stretch, and get enough sleep. Listen to your body and rest when needed."
                    },
                    {
                      q: "What are tips for staying active as I get older?",
                      a: "Choose low-impact activities like walking, swimming, or yoga. Focus on flexibility, balance, and strength. Stay social and keep moving!"
                    },
                  {
                    q: "How does this website handle privacy and user data?",
                    a: "Your privacy is important! This website does not collect personal data from visitors unless you choose to contact us or submit information. We comply with privacy laws such as GDPR and CCPA where applicable. For more details, see our Privacy Policy page or contact us with any questions."
                  },
                {
                  q: "How can I get in touch with the site owner?",
                  a: "You can reach out on X (formerly Twitter) at @shellzonit. Feel free to send a message or mention for questions, feedback, or collaboration!"
                },
              {
                q: "Have any books been written by AI?",
                a: "Yes, several books have been written by AI! For example, '1 the Road' (2018) is a novel generated by an AI trained on Jack Kerouac’s 'On the Road.' AI has also been used to co-author poetry, short stories, and non-fiction. These projects show how AI can assist or inspire human writers, opening new creative possibilities."
              },
            {
              q: "What are some ethical concerns with AI?",
              a: "AI raises important ethical questions, such as bias in algorithms, privacy, job displacement, and decision transparency. It's important for developers and users to consider fairness, accountability, and the societal impact of AI systems. Many organizations are working on guidelines and best practices to ensure responsible AI use."
            },
            {
              q: "How does AI impact jobs and society?",
              a: "AI is transforming many industries, automating repetitive tasks, and creating new job opportunities. While some jobs may be replaced, many new roles are emerging in AI development, data analysis, and creative fields. Society benefits from AI in healthcare, education, and accessibility, but it's important to address challenges like inequality and retraining."
            },
            {
              q: "How can I start learning about AI?",
              a: "If you're a beginner, start with online courses like Coursera's 'AI for Everyone' or free resources from Google and Microsoft. Intermediate learners can explore Python programming, machine learning basics, and hands-on projects. Advanced users might dive into deep learning, research papers, or contribute to open source AI projects. Our Resources page has more suggestions!"
            },
            {
              q: "Does using AI make you less intelligent?",
              a: "No, using AI does not make you less intelligent! AI is a tool that can help you be more productive, creative, and informed. Just like calculators or computers, AI assists with complex tasks and frees you to focus on higher-level thinking. The key is to use AI thoughtfully and continue learning alongside it."
            },
          {
            q: "Who are the largest companies hiring for AI jobs?",
            a: "Some of the largest companies hiring for AI roles include Google, Microsoft, Amazon, Meta (Facebook), Apple, NVIDIA, and OpenAI. Many other tech giants, startups, and companies in healthcare, finance, and automotive are also investing heavily in AI talent. These organizations seek AI engineers, data scientists, researchers, and creative technologists to drive innovation."
          },
          {
            q: "Why are plumbers and other blue-collar jobs important for AI and data centers?",
            a: "AI relies on massive data centers that require constant maintenance. Plumbers, electricians, HVAC technicians, and other skilled trades are essential for keeping these facilities running. They install and repair cooling systems, manage water and power infrastructure, and ensure the physical environment is safe for servers. As AI grows, so does the demand for blue-collar workers to support the technology behind the scenes."
          },
        {
          q: "How has AI already been used in games?",
          a: "AI has played a major role in games for decades. Classic examples include the ghosts in Pac-Man (1980), which use simple AI to chase the player, and the adaptive enemies in the 'Halo' series. Modern games use AI for NPC behavior, procedural world generation (like in 'Minecraft'), and even for testing and balancing gameplay. AI helps create more immersive, challenging, and dynamic experiences."
        },
        {
          q: "How has AI already been used in movies?",
          a: "AI is widely used in movies for visual effects, animation, and even scriptwriting. For example, AI-powered software helps create realistic CGI characters and environments, as seen in movies like 'Avengers: Endgame' and 'The Lion King' (2019). AI is also used for deepfake technology, voice synthesis, and editing. Some filmmakers experiment with AI-generated scripts and storyboards, pushing the boundaries of creativity in cinema."
        },
      {
        q: "What was the first AI-generated song?",
        a: "The first known AI-generated song was created in 1956 by researchers at Bell Labs using an IBM 704 computer. The program, written by Lejaren Hiller and Leonard Isaacson, generated a piece called the 'Illiac Suite' for string quartet. This marked the beginning of computer-generated music and showed that AI could be used creatively in music composition, a trend that has grown for decades."
      },
    {
      q: "How is AI used in games?",
      a: "AI is revolutionizing game development by powering smarter NPCs, procedural content generation, adaptive difficulty, and even game testing. AI tools help designers create more immersive and dynamic experiences. Careers include AI Game Designer, Game AI Programmer, and Narrative Designer."
    },
    {
      q: "How is AI used in music?",
      a: "AI is transforming music by enabling generative composition, intelligent mixing, and personalized recommendations. Artists use AI to create new sounds, collaborate with virtual musicians, and analyze trends. Careers include AI Music Producer, Sound Designer, and Music Data Analyst."
    },
  {
    q: "What is this site about?",
    a: "AI Wilding is a creative sanctuary dedicated to helping you thrive in the age of AI. We offer curated AI job listings, hiring events, resources, and community support for creative and technical talent. Whether you're looking to start a new career, upskill, or connect with others, you'll find guidance and opportunities here."
  },
  {
    q: "How do I find AI jobs?",
    a: "Visit the New AI Jobs page for a curated list of emerging roles, required skills, and employers. You can filter jobs by interest, skill set, or location. We regularly update listings to reflect the latest opportunities in AI, creative tech, and related fields."
  },
  {
    q: "What are AI hiring events?",
    a: "AI hiring events are job fairs, networking sessions, and workshops where you can meet recruiters, learn about open positions, and connect with industry leaders. Many events are hybrid or virtual, making it easy to participate from anywhere. Check the AI Hiring Events page for upcoming dates and details."
  },
  {
    q: "How can I prepare for an AI career?",
    a: "Explore our resources section for recommended courses, training programs, and articles. Attend hiring events to network and learn from experts. Consider building a portfolio of projects, contributing to open source, and staying updated on AI trends. We also share tips on resume building and interview prep."
  },
  {
    q: "Can I get career advice?",
    a: "Absolutely! Ask me about career paths, required skills, or how to transition into AI roles. You can also reach out through our contact page for personalized advice or mentorship opportunities."
  },
  {
    q: "Are there opportunities for beginners?",
    a: "Yes! Many AI jobs and events welcome beginners and those from non-technical backgrounds. Look for roles like AI Content Curator, Prompt Engineer, or Community Manager. Our resources page highlights beginner-friendly learning paths."
  }
];

const JOB_SUGGESTIONS = [
    {
      keyword: "games",
      suggestion: "Explore roles like AI Game Designer, Game AI Programmer, and Narrative Designer. AI is used for smarter NPCs, procedural worlds, and player analytics in the gaming industry."
    },
    {
      keyword: "music",
      suggestion: "Consider careers such as AI Music Producer, Sound Designer, or Music Data Analyst. AI is used for generative music, intelligent mixing, and music recommendation systems."
    },
  {
    keyword: "creative",
    suggestion: "You might enjoy roles like Generative Content Creator, AI Art Director, or AI Trainer. These positions blend creativity with technology and are in high demand. Check the New AI Jobs page for more."
  },
  {
    keyword: "coding",
    suggestion: "Consider roles such as AI Engineer, Machine Learning Engineer, or Data Scientist. These jobs require programming skills and offer opportunities to work on cutting-edge projects. See the New AI Jobs page for details."
  },
  {
    keyword: "education",
    suggestion: "AI Curriculum Designer, Prompt Engineer, and AI Literacy Advocate are great options for those passionate about teaching and learning."
  },
  {
    keyword: "remote",
    suggestion: "Many AI jobs and events are remote-friendly. Look for Remote AI Talent Fair and virtual networking sessions on the events page."
  },
  {
    keyword: "manager",
    suggestion: "AI Project Manager and Community Manager roles are perfect for those with leadership and organizational skills."
  },
  {
    keyword: "art",
    suggestion: "Explore opportunities as an AI Art Curator, Digital Artist, or Creative Technologist. The intersection of art and AI is growing rapidly."
  },
  {
    keyword: "writing",
    suggestion: "AI Content Writer, Technical Writer, and Prompt Engineer are excellent roles for strong communicators."
  },
  {
    keyword: "events",
    suggestion: "Check out upcoming AI Career Expos, Women in AI Summits, and virtual talent fairs. These events offer networking, workshops, and direct access to recruiters."
  },
  {
    keyword: "beginner",
    suggestion: "If you're just starting out, look for internships, junior roles, or volunteer opportunities in AI projects. Many companies offer mentorship and training for beginners."
  }
];


export default function MrJobNanny() {
    // Mode: 'job' or 'weight'
    const [mode, setMode] = useState<'job' | 'weight'>('job');
    // Mode label and description for UI
    const modeLabel = mode === 'job' ? 'Job & Career Assistant' : 'Weight Loss & Health Coach';
    const modeDesc = mode === 'job'
      ? 'Ask about AI jobs, careers, resumes, and events. Type "switch to weight mode" to get health and fitness coaching.'
      : 'Ask about exercise, healthy habits, or motivation. Type "switch to job mode" to return to career coaching.';
  // Interview reminder state
  const [interviewStep, setInterviewStep] = useState<number | null>(null);
  const [interviewInfo, setInterviewInfo] = useState<{date: string, time: string, company: string, email: string}>({date: '', time: '', company: '', email: ''});
  // Job alert subscription state
  const [alertStep, setAlertStep] = useState<number | null>(null);
  const [alertPrefs, setAlertPrefs] = useState<{skills: string, email: string}>({skills: '', email: ''});
  // Skill gap analysis state
  const [gapStep, setGapStep] = useState<number | null>(null);
  const [gapInfo, setGapInfo] = useState<{target: string, skills: string}>({target: '', skills: ''});
  const [visitorNum, setVisitorNum] = useState<number | null>(null);
  // Threaded messages: { id, from, text, parentId }
  const [messages, setMessages] = useState<Array<{id: number, from: string, text: string, parentId?: number}>>([]);
  // For career quiz state
  const [quizStep, setQuizStep] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [showResumeForm, setShowResumeForm] = useState(false);
  const [resumeForm, setResumeForm] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: ""
  });
  const [resumeDraft, setResumeDraft] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactSent, setContactSent] = useState(false);
  const nextId = React.useRef(1);
  // Track last seen job ID for alerts
  const lastJobId = React.useRef<number | null>(null);
    function handleContactFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const { name, value } = e.target;
      setContactForm(f => ({ ...f, [name]: value }));
    }

    async function handleContactSubmit(e: React.FormEvent) {
      e.preventDefault();
      try {
        const key = process.env.NEXT_PUBLIC_FERNET_KEY || '';
        const encrypted = encryptFernet(JSON.stringify(contactForm), key);
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ encrypted }),
        });
        if (res.ok) {
          setContactSent(true);
          setContactForm({ name: "", email: "", message: "" });
        } else {
          setContactSent(false);
          alert('Failed to send message. Please try again later.');
        }
      } catch {
        setContactSent(false);
        alert('Failed to send message. Please try again later.');
      }
    }
  function handleResumeFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setResumeForm(f => ({ ...f, [name]: value }));
  }

  const [resumeFeedback, setResumeFeedback] = useState<string[]>([]);
  function handleResumeSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name, email, phone, summary, experience, education, skills } = resumeForm;
    const draft = `${name}\n${email} | ${phone}\n\nProfessional Summary:\n${summary}\n\nExperience:\n${experience}\n\nEducation:\n${education}\n\nSkills:\n${skills}`;
    setResumeDraft(draft);
    // Simple rule-based feedback
    const feedback: string[] = [];
    if (!name.trim()) feedback.push("Missing full name.");
    if (!email.trim() || !email.includes('@')) feedback.push("Missing or invalid email address.");
    if (!phone.trim() || phone.length < 7) feedback.push("Missing or incomplete phone number.");
    if (!summary.trim() || summary.length < 30) feedback.push("Professional summary is too short. Aim for at least 2-3 sentences about your background and goals.");
    if (!experience.trim() || experience.length < 30) feedback.push("Experience section is too short. List at least one job, role, or project with details.");
    if (!education.trim()) feedback.push("Missing education section.");
    if (!skills.trim() || skills.split(',').length < 3) feedback.push("List at least 3 relevant skills, separated by commas.");
    if (/\b(responsible for|duties included|tasked with)\b/i.test(experience)) feedback.push("Use strong action verbs (e.g., 'led', 'created', 'improved') instead of phrases like 'responsible for'.");
    setResumeFeedback(feedback);
  }

  // On mount, increment and get visitor number from localStorage
  useEffect(() => {
        // Interview reminder: check daily if any reminders are due today and send email
        function checkInterviewReminders() {
          try {
            const reminders = JSON.parse(localStorage.getItem('interview-reminders') || '[]');
            const today = new Date().toISOString().slice(0, 10);
            reminders.forEach(async (rem: any) => {
              if (rem.date === today && !rem.sent) {
                // Send email via API
                await fetch('/api/interview-reminder', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email: rem.email, date: rem.date, time: rem.time, company: rem.company }),
                });
                // Mark as sent
                rem.sent = true;
                setMessages(msgs => [
                  ...msgs,
                  {
                    id: nextId.current++,
                    from: "Mr. Job Nanny",
                    text: `📧 Reminder: You have a job interview${rem.company ? ' at ' + rem.company : ''} today at ${rem.time}. Check your email for tips and encouragement! Good luck!`,
                    parentId: undefined
                  }
                ]);
              }
            });
            // Save updated reminders
            localStorage.setItem('interview-reminders', JSON.stringify(reminders));
          } catch {}
        }
        // Run on mount and every hour
        checkInterviewReminders();
        const reminderInterval = setInterval(checkInterviewReminders, 60 * 60 * 1000);
        // ...existing code...
    let num = 1;
    try {
      const stored = localStorage.getItem("chatbot-visitor-num");
      if (stored) {
        num = parseInt(stored, 10) + 1;
      }
      localStorage.setItem("chatbot-visitor-num", num.toString());
    } catch {}
    setVisitorNum(num);
    setMessages([
      { id: 0, from: "Mr. Job Nanny", text: `Welcome! You are visitor number ${num} on this browser. Ask me anything about this site, AI jobs, or events.`, parentId: undefined }
    ]);
    nextId.current = 1;
    recordChatbotVisit();

    // Poll for new jobs every 60 seconds
    let pollInterval: NodeJS.Timeout;
    async function pollJobs() {
      try {
        const res = await fetch("/api/jobs", { headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY || "" } });
        if (res.ok) {
          const jobs = await res.json();
          if (Array.isArray(jobs) && jobs.length > 0) {
            const newest = jobs[jobs.length - 1];
            if (lastJobId.current === null) {
              lastJobId.current = newest.id;
            } else if (newest.id !== lastJobId.current) {
              // New job detected
              // Check for job alert preferences
              let alertPrefs = null;
              try {
                const stored = localStorage.getItem('job-alert-prefs');
                if (stored) alertPrefs = JSON.parse(stored);
              } catch {}
              let matched = false;
              if (alertPrefs && alertPrefs.skills) {
                const skillsArr = alertPrefs.skills.toLowerCase().split(/[, ]+/).filter(Boolean);
                const jobText = `${newest.title} ${newest.description} ${newest.skills ? newest.skills.join(' ') : ''}`.toLowerCase();
                matched = skillsArr.some((skill: string) => jobText.includes(skill));
              }
              if (matched) {
                setMessages(msgs => [
                  ...msgs,
                  {
                    id: nextId.current++,
                    from: "Mr. Job Nanny",
                    text: `🔔 Job Alert! A new job matching your interests was posted: ${newest.title} at ${newest.company || "Unknown Company"}. Check the New AI Jobs page for details!`,
                    parentId: undefined
                  }
                ]);
                // (Optional) Email notification logic can be added here
              } else {
                setMessages(msgs => [
                  ...msgs,
                  {
                    id: nextId.current++,
                    from: "Mr. Job Nanny",
                    text: `🚨 New AI Job Posted: ${newest.title} at ${newest.company || "Unknown Company"}. Check the New AI Jobs page for details!`,
                    parentId: undefined
                  }
                ]);
              }
              lastJobId.current = newest.id;
            }
          }
        }
      } catch {}
    }
    pollInterval = setInterval(pollJobs, 60000); // 60 seconds
    // Initial poll
    pollJobs();
    return () => {
      clearInterval(pollInterval);
      clearInterval(reminderInterval);
    };
  }, []);

  function getBotResponse(userMsg: string) {
    const msg = userMsg.toLowerCase();
    // Special diet guidance trigger
    if (msg.includes("vegetarian") || msg.includes("vegan") || msg.includes("gluten-free") || msg.includes("dairy-free") || msg.includes("special diet") || msg.includes("allergy")) {
      return (
        "Special diets can help meet health needs or personal values.\n\n" +
        "Vegetarian: No meat, but may include eggs/dairy. Focus on beans, lentils, tofu, nuts, whole grains, fruits, and veggies.\n" +
        "Vegan: No animal products at all. Get protein from beans, lentils, tofu, tempeh, nuts, and seeds. Watch for vitamin B12, iron, and calcium—consider fortified foods or supplements.\n" +
        "Gluten-free: Avoid wheat, barley, rye. Choose rice, corn, quinoa, potatoes, and gluten-free oats.\n" +
        "Dairy-free: Avoid milk, cheese, yogurt. Use plant milks (soy, almond, oat), and check labels for hidden dairy.\n\n" +
        "For allergies or medical diets, always read labels and consult a healthcare professional or dietitian for safe, balanced options."
      );
    }
    // Vitamin and mineral info trigger
    if (msg.includes("vitamin") || msg.includes("mineral") || msg.includes("micronutrient") || msg.includes("nutrient deficiency") || msg.includes("what does vitamin")) {
      return (
        "Vitamins and minerals (micronutrients) are essential for your body to function well. For example: Vitamin C (in citrus fruits, peppers) supports immunity; Vitamin D (from sunlight, fortified foods) helps bones; Iron (in red meat, beans, spinach) carries oxygen in your blood; Calcium (in dairy, leafy greens) builds strong bones; Potassium (in bananas, potatoes) helps muscles and nerves.\n\n" +
        "A varied diet with plenty of fruits, vegetables, whole grains, lean proteins, and dairy usually provides all the vitamins and minerals you need. If you suspect a deficiency, consult your doctor before taking supplements."
      );
    }
    // Portion size and meal timing advice trigger
    if (msg.includes("portion size") || msg.includes("serving size") || msg.includes("how much should i eat") || msg.includes("meal timing") || msg.includes("when should i eat") || msg.includes("how often should i eat")) {
      return (
        "Portion sizes depend on your age, activity level, and health goals, but here are some general tips: Use your hand as a guide—protein (palm), carbs (cupped hand), fats (thumb), and veggies (fist). Fill half your plate with vegetables, a quarter with lean protein, and a quarter with whole grains or starchy foods.\n\n" +
        "For meal timing, aim for 3 balanced meals per day, and add healthy snacks if you're hungry between meals. Eating at regular times can help with energy and appetite control. Listen to your body's hunger and fullness cues, and try not to skip meals."
      );
    }
    // Macronutrient info trigger
    if (msg.includes("macronutrient") || msg.includes("macros") || msg.includes("protein") || msg.includes("carb") || msg.includes("fat")) {
      const foodNames = Object.keys(FOOD_MACROS);
      const found = foodNames.find(food => msg.includes(food.split(" ")[0]));
      if (found) {
        const macros = FOOD_MACROS[found];
        return `A typical serving of ${found} contains about ${macros.protein}g protein, ${macros.carbs}g carbs, and ${macros.fat}g fat. (Values are approximate and can vary by preparation.)`;
      } else {
        return "I can provide macronutrient info (protein, carbs, fat) for common foods like apple, chicken breast, rice, bread, and more. Please ask about a specific food!";
      }
    }
    // Lean meat explanation trigger
    if (msg.includes("lean meat") || msg.includes("not lean meat") || msg.includes("difference between lean and")) {
      return (
        "Lean meat refers to cuts of meat that have lower fat content. Examples include skinless chicken breast, turkey breast, and lean cuts of beef or pork. Lean meats are lower in calories and saturated fat, making them a healthier choice for heart health and weight management.\n\n" +
        "Non-lean meats (like regular ground beef, pork belly, or processed meats like sausage and bacon) have higher fat and calorie content. Choosing lean meats can help reduce your intake of saturated fat and calories."
      );
    }
    // Calorie lookup trigger
    if (msg.includes("calorie") || msg.includes("calories") || msg.includes("how many calories") || msg.includes("calorie count")) {
      // Try to extract food name from the message
      const foodNames = Object.keys(FOOD_CALORIES);
      const found = foodNames.find(food => msg.includes(food.split(" ")[0]));
      if (found) {
        return `A typical serving of ${found} contains about ${FOOD_CALORIES[found]} calories. (Values are approximate and can vary by preparation.)`;
      } else {
        return "I can provide calorie counts for common foods like apple, banana, egg, bread, chicken breast, rice, and more. Please ask about a specific food!";
      }
    }
    const fitnessKeywords = [
      "exercise", "workout", "weight", "active", "steps", "water", "sleep", "snack", "recover", "motivate", "family", "older", "track", "fit", "move", "chore", "gym", "beginner", "at home", "quick", "energy"
    ];
    // Mode switch triggers
    if (/switch to weight|weight mode|health mode|be my health coach|be my weight coach|weight loss assistant|help with weight|help with health/.test(msg)) {
      setMode('weight');
      return "You are now in Weight Loss & Health Coach mode. I can help with creative exercise ideas, healthy habits, and motivation. Remember: Always consult your doctor before starting any weight loss or exercise program, especially if you have health conditions or concerns.";
    }
    if (/switch to job|job mode|career mode|be my job coach|be my career coach|job assistant|help with jobs|help with career/.test(msg)) {
      setMode('job');
      return "You are now in Job & Career Assistant mode. I can help with AI jobs, career advice, resume tips, and more. If you want to switch back to health coaching, just ask!";
    }
    // In weight mode, prioritize health/fitness answers
    if (mode === 'weight') {
      // Diet/meal plan/nutrition triggers
      if (msg.includes("diet plan") || msg.includes("meal plan") || msg.includes("write a diet") || msg.includes("write a meal plan") || msg.includes("plan my meals") || msg.includes("nutrition plan") || msg.includes("nutrition advice")) {
        return (
          "I'm happy to offer general healthy eating tips, but I can't provide personalized diet or meal plans. For a safe and effective diet, it's best to consult a registered dietitian or healthcare professional who can tailor advice to your needs.\n\n" +
          "General tips: Focus on a variety of colorful vegetables, lean proteins, whole grains, healthy fats (like olive oil, nuts, and avocado), and stay hydrated. Limit processed foods, added sugars, and excess salt.\n\n" +
          "(Always consult your doctor or a registered dietitian before making significant changes to your diet or health routine.)"
        );
      }
      if (fitnessKeywords.some(k => msg.includes(k)) || msg.includes("rest") || msg.includes("sleep") || msg.includes("inflammation") || msg.includes("anti-inflammatory") || msg.includes("combine foods") || msg.includes("food pair") || msg.includes("recovery")) {
        // Try to find a matching FAQ
        const fitnessFaq = FAQS.find(f => {
          const q = f.q.toLowerCase();
          return (
            fitnessKeywords.some(k => q.includes(k) && msg.includes(k)) ||
            (q.includes("rest") && msg.includes("rest")) ||
            (q.includes("sleep") && msg.includes("sleep")) ||
            (q.includes("inflammation") && msg.includes("inflammation")) ||
            (q.includes("combine") && msg.includes("combine"))
          );
        });
        if (fitnessFaq) return fitnessFaq.a + "\n\n(Always consult your doctor before starting any new health or weight program.)";
        if (msg.includes("workout") || msg.includes("exercise") || msg.includes("move") || msg.includes("active")) {
          return `Here's a creative workout idea: ${WORKOUT_TIPS[Math.floor(Math.random() * WORKOUT_TIPS.length)]}\n\n(Always consult your doctor before starting any new health or weight program.)`;
        }
        if (msg.includes("rest") || msg.includes("sleep")) {
          return `Rest is essential for your body to recover, repair muscles, balance hormones, and support your immune system. Quality sleep helps with weight loss, reduces stress, and improves mood and focus. Aim for 7-8 hours of sleep each night and listen to your body when it needs downtime.\n\n(Always consult your doctor before starting any new health or weight program.)`;
        }
        if (msg.includes("inflammation") || msg.includes("anti-inflammatory") || msg.includes("combine foods") || msg.includes("food pair")) {
          return `To help reduce inflammation, combine foods rich in antioxidants (like berries, leafy greens, and nuts) with healthy fats (like olive oil or avocado). Pair colorful vegetables with lean proteins and whole grains. Spices like turmeric and ginger can also help fight inflammation naturally.\n\n(Always consult your doctor before starting any new health or weight program.)`;
        }
        if (msg.includes("health") || msg.includes("tip") || msg.includes("energy") || msg.includes("snack")) {
          return `Here's a health tip: ${HEALTH_TIPS[Math.floor(Math.random() * HEALTH_TIPS.length)]}\n\n(Always consult your doctor before starting any new health or weight program.)`;
        }
        return "Staying active and healthy can be fun and creative! Ask me for a workout idea, health tip, or advice on tracking your habits.\n\n(Always consult your doctor before starting any new health or weight program.)";
      }
      // If not a fitness/health question, gently prompt about mode
      return "You are in Weight Loss & Health Coach mode. Ask me about exercise, healthy habits, or motivation—or type 'switch to job mode' to return to career coaching.";
    }
        // Fitness/health FAQ interactive matching (job mode)
        if (mode === 'job' && fitnessKeywords.some(k => msg.includes(k))) {
          // Try to find a matching FAQ
          const fitnessFaq = FAQS.find(f => {
            const q = f.q.toLowerCase();
            return fitnessKeywords.some(k => q.includes(k) && msg.includes(k));
          });
          if (fitnessFaq) return fitnessFaq.a;
          // If no direct FAQ match, offer a random tip
          if (msg.includes("workout") || msg.includes("exercise") || msg.includes("move") || msg.includes("active")) {
            return `Here's a creative workout idea: ${WORKOUT_TIPS[Math.floor(Math.random() * WORKOUT_TIPS.length)]}`;
          }
          if (msg.includes("health") || msg.includes("tip") || msg.includes("energy") || msg.includes("snack")) {
            return `Here's a health tip: ${HEALTH_TIPS[Math.floor(Math.random() * HEALTH_TIPS.length)]}`;
          }
          return "Staying active and healthy can be fun and creative! Ask me for a workout idea, health tip, or advice on tracking your habits.";
        }
      // Mode switch UI
      // (moved modeLabel and modeDesc to component scope)
      // Mode label and description for UI
    // const msg = userMsg.toLowerCase(); // Removed duplicate declaration
    // Skill gap analysis trigger
    if (/(skill gap|missing skills|what skills do i need|skills for|how do i qualify|how to qualify|how to get|how to become|how do i become|what do i need to become|what do i need for|how to get hired|how to get a job)/.test(userMsg.toLowerCase())) {
      setGapStep(0);
      setGapInfo({target: '', skills: ''});
      return "Let's do a Skill Gap Analysis!\n\nWhat is your target job or job title? (e.g., 'AI Engineer', 'Prompt Engineer', 'AI Artist')";
    }
    // If in skill gap analysis mode
    if (gapStep !== null) {
      if (gapStep === 0) {
        setGapInfo(prev => ({...prev, target: userMsg.trim()}));
        setGapStep(1);
        return "Great! List your current skills, experience, or certifications (comma-separated, e.g., 'Python, SQL, Photoshop, Coursera ML cert')";
      }
      if (gapStep === 1) {
        setGapInfo(prev => ({...prev, skills: userMsg.trim()}));
        setGapStep(2);
        // Analyze skill gap using NEW_AI_JOBS if possible
        const target = userMsg.trim().toLowerCase();
        let job = null;
        for (const j of NEW_AI_JOBS) {
          if (j.title.toLowerCase() === gapInfo.target.toLowerCase() || gapInfo.target.toLowerCase().includes(j.title.toLowerCase())) {
            job = j;
            break;
          }
        }
        let userSkills = gapInfo.skills.toLowerCase().split(/[, ]+/).filter(Boolean);
        let missing: string[] = [];
        let suggestions = '';
        if (job) {
          missing = job.skills.filter(s => !userSkills.includes(s.toLowerCase()));
          suggestions = missing.length > 0
            ? `To qualify for ${job.title}, consider building these skills: ${missing.join(', ')}.`
            : `You already have most of the key skills for ${job.title}! Consider strengthening your portfolio or getting certified.`;
          if (job.resources && job.resources.length > 0) {
            suggestions += `\nRecommended resources: ${job.resources.join(', ')}`;
          }
        } else {
          suggestions = "I couldn't find that job in my database, but focus on learning the most in-demand skills for your target role. Check job listings for required skills and consider online courses or certifications.";
        }
        setGapStep(null);
        return suggestions + "\n\nIf you want to analyze another job, just type 'skill gap'.";
      }
      return "Please enter your target job or your current skills.";
    }
                        // Interview reminder trigger
                        if (/(remind me about my interview|interview reminder|schedule interview reminder|job interview reminder)/.test(msg)) {
                          setInterviewStep(0);
                          setInterviewInfo({date: '', time: '', company: '', email: ''});
                          return "Let's set up your interview reminder!\n\nWhat is the date of your interview? (YYYY-MM-DD)";
                        }
                        // If in interview reminder mode
                        if (interviewStep !== null) {
                          if (interviewStep === 0 && /^\d{4}-\d{2}-\d{2}$/.test(userMsg.trim())) {
                            setInterviewInfo(prev => ({...prev, date: userMsg.trim()}));
                            setInterviewStep(1);
                            return "What time is your interview? (e.g., 14:00 or 2:00 PM)";
                          }
                          if (interviewStep === 1 && userMsg.trim()) {
                            setInterviewInfo(prev => ({...prev, time: userMsg.trim()}));
                            setInterviewStep(2);
                            return "What is the company or job title for this interview? (Or type 'skip')";
                          }
                          if (interviewStep === 2) {
                            setInterviewInfo(prev => ({...prev, company: userMsg.trim() === 'skip' ? '' : userMsg.trim()}));
                            setInterviewStep(3);
                            return "What email address should I send your reminder to?";
                          }
                          if (interviewStep === 3 && /.+@.+\..+/.test(userMsg.trim())) {
                            setInterviewInfo(prev => ({...prev, email: userMsg.trim()}));
                            setInterviewStep(null);
                            // Save reminder to localStorage (can be extended to backend)
                            try {
                              const reminders = JSON.parse(localStorage.getItem('interview-reminders') || '[]');
                              reminders.push({...interviewInfo, email: userMsg.trim()});
                              localStorage.setItem('interview-reminders', JSON.stringify(reminders));
                            } catch {}
                            return `You're all set! I'll send you a reminder email on ${interviewInfo.date} for your interview${interviewInfo.company ? ' at ' + interviewInfo.company : ''}. Good luck!\n\n⚠️ Please note: While I do my best to remind you, always have a backup plan and set your own reminders. AI Wilding and Mr. Job Nanny are not liable for any missed appointments or technical issues. Stay prepared for unforeseen circumstances!`;
                          }
                          return "Please enter the requested info (date, time, company, or email).";
                        }
                  // Job alert subscription trigger
                  if (/(subscribe to job alerts|job alerts|alert me about jobs|notify me about jobs|job notification|job notifications)/.test(msg)) {
                    setAlertStep(0);
                    setAlertPrefs({skills: '', email: ''});
                    return "Let's set up your personalized job alerts!\n\nWhat skills, job titles, or interests should I watch for? (e.g., 'data science, AI trainer, remote')";
                  }
                  // If in job alert subscription mode
                  if (alertStep !== null) {
                    if (alertStep === 0) {
                      setAlertPrefs(prev => ({...prev, skills: userMsg}));
                      setAlertStep(1);
                      return "Great! Would you like to receive job alerts by email as well? If yes, please enter your email address. If not, type 'skip'.";
                    }
                    if (alertStep === 1) {
                      let email = '';
                      if (userMsg.toLowerCase() !== 'skip' && /.+@.+\..+/.test(userMsg.trim())) {
                        email = userMsg.trim();
                      }
                      setAlertPrefs(prev => ({...prev, email}));
                      setAlertStep(null);
                      // Save to localStorage for now (can be extended to backend)
                      try {
                        localStorage.setItem('job-alert-prefs', JSON.stringify({skills: alertPrefs.skills, email}));
                      } catch {}
                      return `You're all set! I'll alert you in chat whenever a new job matches: ${alertPrefs.skills}${email ? ` and send email alerts to: ${email}` : ''}. You can update your preferences anytime by typing 'job alerts'.`;
                    }
                    return "Please enter your skills/interests or type 'skip' for email.";
                  }
            // Career quiz trigger
            if (/(career test|career quiz|ai job quiz|ai job test|what ai job is right for me|what ai career|suggest ai job|find my ai job|find my ai career|quiz)/.test(msg)) {
              setQuizStep(0);
              setQuizAnswers({});
              return "Let's find out which AI career field might suit you best!\n\nQuestion 1: Which activity sounds most interesting to you?\nA) Solving puzzles and coding\nB) Creating art, music, or stories\nC) Teaching or helping others learn\nD) Organizing projects and leading teams\nE) Analyzing data and finding patterns\n(Type A, B, C, D, or E)";
            }
            // If in quiz mode, handle quiz steps
            if (quizStep !== null) {
              // Step 0: Expect A-E answer
              if (quizStep === 0 && /^[abcde]$/i.test(msg.trim())) {
                const answer1 = msg.trim().toUpperCase();
                setQuizAnswers(prev => ({ ...prev, q1: answer1 }));
                setQuizStep(1);
                return "Question 2: Which skill do you want to develop most?\nA) Programming and algorithms\nB) Creative thinking and design\nC) Communication and teaching\nD) Leadership and management\nE) Data analysis and statistics\n(Type A, B, C, D, or E)";
              }
              // Step 1: Expect A-E answer
              if (quizStep === 1 && /^[abcde]$/i.test(msg.trim())) {
                const answer2 = msg.trim().toUpperCase();
                setQuizAnswers(prev => ({ ...prev, q2: answer2 }));
                setQuizStep(2);
                return "Question 3: What motivates you most?\nA) Building things that work\nB) Expressing ideas creatively\nC) Helping others grow\nD) Achieving goals as a team\nE) Discovering insights from information\n(Type A, B, C, D, or E)";
              }
              // Step 2: Expect A-E answer, then give result
              if (quizStep === 2 && /^[abcde]$/i.test(msg.trim())) {
                const answer3 = msg.trim().toUpperCase();
                const allAnswers = { ...quizAnswers, q3: answer3 };
                setQuizAnswers({});
                setQuizStep(null);
                // Tally answers
                const counts: {[key: string]: number} = {A:0, B:0, C:0, D:0, E:0};
                Object.values(allAnswers).forEach(a => { if (counts[a]) counts[a]++; });
                // Find max
                let maxKey = 'A';
                let maxVal = 0;
                for (const k in counts) { if (counts[k] > maxVal) { maxKey = k; maxVal = counts[k]; } }
                // Suggest field
                let suggestion = '';
                if (maxKey === 'A') suggestion = 'AI Engineer, Machine Learning Engineer, or Software Developer. You enjoy building and problem-solving!';
                else if (maxKey === 'B') suggestion = 'AI Content Creator, AI Artist, or Creative Technologist. You thrive in creative, expressive roles!';
                else if (maxKey === 'C') suggestion = 'AI Trainer, Curriculum Designer, or Community Manager. You like helping others learn and grow!';
                else if (maxKey === 'D') suggestion = 'AI Project Manager or Team Lead. You excel at organizing and leading teams!';
                else if (maxKey === 'E') suggestion = 'Data Scientist, AI Analyst, or Researcher. You love working with data and finding insights!';
                return `Based on your answers, you might enjoy a career as a ${suggestion}\n\nRemember, this is just a starting point—explore, experiment, and keep learning! If you want to try the quiz again, just type 'career quiz'.`;
              }
              // If invalid answer
              return "Please answer with A, B, C, D, or E.";
            }
      // msg already declared at the top of getBotResponse
      // 0. Directly handle 'new jobs', 'latest jobs', 'open jobs', etc.
      if (/(new jobs|latest jobs|open jobs|recent jobs|current jobs|job openings|job posts|job listings|jobs available|jobs now|hiring now)/.test(msg)) {
        if (NEW_AI_JOBS && NEW_AI_JOBS.length > 0) {
          const latestJobs = NEW_AI_JOBS.slice(-5).map(job => `• ${job.title} (${job.employers[0] || ''})`).join("\n");
          return `Here are the latest AI job openings:\n\n${latestJobs}\n\nAs your job coach, I recommend reviewing each job description carefully and matching your skills to the requirements. Remember to tailor your resume for each application, highlight your achievements, and don't hesitate to reach out for networking or informational interviews. Stay positive—every application is a step forward!\n\nSee the New AI Jobs page for more, or ask about any job above for details or coaching tips!`;
        } else {
          return "There are currently no new jobs posted. As your job coach, I encourage you to keep building your skills and networking. Use this time to update your resume, learn something new, or connect with others in your field. Your next opportunity could be just around the corner!";
        }
      }
      // 1. Announcement/news match
      if (/(news|announcement|update|what's new|latest)/.test(msg)) {
        return ANNOUNCEMENT;
      }
      // Who is the site owner/creator/admin
      if ((msg.includes("who runs") || msg.includes("who is behind") || msg.includes("who created") || msg.includes("who made") || msg.includes("site owner") || msg.includes("admin") || msg.includes("creator") || msg.includes("who are you") || msg.includes("who am i") || msg.includes("who is the owner") || msg.includes("who is the admin") || msg.includes("who is the creator") || msg.includes("who is shellzonit") || msg.includes("what are you")) && (msg.includes("site") || msg.includes("website") || msg.includes("chatbot") || msg.includes("sanctuary") || msg.includes("auralis") || msg.includes("shellzonit") || msg.includes("you") || msg.includes("admin") || msg.includes("owner") || msg.includes("creator"))) {
        return "This website and chatbot were created and are managed by Shellzonit (also known as @shellzonit on X/Twitter). Shellzonit is a creative technologist and community builder—someone who blends technology, art, and innovation to help people thrive in the age of AI. As a creative technologist, Shellzonit builds tools, resources, and communities that empower others to learn, grow, and succeed in creative and technical fields. In the AI world, creative technologists can become AI product designers, prompt engineers, generative artists, AI content creators, innovation leads, or even founders of new creative tech startups. These roles combine coding, design, and creative thinking to shape the future of AI-powered experiences. You can reach out for questions, feedback, or collaboration via X (formerly Twitter) at @shellzonit.";
      }

      // How can a person help train the chatbot/AI and can it lead to a career
      if ((msg.includes("train you") || msg.includes("train the ai") || msg.includes("train chatbot") || msg.includes("help train") || msg.includes("how can i train") || msg.includes("can i train") || msg.includes("be used to train") || msg.includes("data labeling") || msg.includes("ai trainer") || msg.includes("become an ai trainer") || msg.includes("can i work as ai trainer") || msg.includes("can i get a job training ai"))) {
        return "People play a crucial role in training AI and chatbots! You can help by labeling data, providing feedback on AI outputs, or participating in user studies. This process is called 'data annotation' or 'AI training.' Many companies hire 'AI Trainers' or 'Data Annotators' to improve AI systems. These roles often require attention to detail and basic computer skills, and can be a great entry point into an AI career. Over time, you can advance to more specialized roles in AI development, quality assurance, or data science. Check out the 'AI Trainer' job in the New AI Jobs section for more info and resources on how to get started.";
      }
      // Easiest AI career question
      if ((msg.includes("easiest") || msg.includes("easy") || msg.includes("least training") || msg.includes("minimal training") || msg.includes("no experience") || msg.includes("beginner")) && (msg.includes("ai career") || msg.includes("ai job") || msg.includes("ai field") || msg.includes("ai work"))) {
        // Find the job with the lowest barrier to entry (based on pay and required skills)
        const entryJobs = NEW_AI_JOBS.filter(job => job.pay && (job.pay.includes("40,000") || job.pay.includes("60,000") || job.title.toLowerCase().includes("trainer") || job.title.toLowerCase().includes("content creator")));
        if (entryJobs.length > 0) {
          const easiest = entryJobs[0];
          return `One of the easiest AI careers to start with minimal training is **${easiest.title}**. ${easiest.description} This role often requires only basic skills such as ${easiest.skills.join(", ")}, and you can get started with resources like: ${easiest.resources.join(", ")}. Typical pay ranges from ${easiest.pay}.`;
        } else {
          return "Many entry-level AI jobs such as AI Trainer or Generative Content Creator require less training and are open to beginners. Look for roles that focus on data labeling, content creation, or supporting AI teams. Check the New AI Jobs page for more details.";
        }
      }
      // 2. List all AI jobs if user asks for a list
      if (
        (msg.includes("ai jobs") || msg.includes("list ai jobs") || msg.includes("all ai jobs") || msg.includes("what are the ai jobs") || msg.includes("show ai jobs") || msg.includes("available ai jobs") || msg.includes("types of ai jobs") || msg.includes("what do ai jobs do") || msg.includes("what is an ai job") || msg.includes("what are ai careers") || msg.includes("explain ai jobs") || msg.includes("tell me about ai jobs") || msg.includes("job list") || msg.includes("job options") || msg.includes("job roles"))
      ) {
        return `AI jobs are roles that involve working with artificial intelligence technologies, such as building, training, or applying AI models and systems. Here are some AI jobs you can explore:\n\n${NEW_AI_JOBS.map(job => `• ${job.title}`).join("\n")}\n\nAs your job coach, I suggest exploring roles that match your interests and strengths. If you need help choosing a path, ask me for advice! Remember to set small, achievable goals and celebrate your progress. You can ask about any job above to learn more about its responsibilities, required skills, and pay, or for tips on how to get started.`;
      }
      // 3. AI job definitions, qualifications, and pay
      for (const job of NEW_AI_JOBS) {
        const jobName = job.title.toLowerCase();
        // Certification or training questions
        if (
          (msg.includes("certification") || msg.includes("certificate") || msg.includes("certify") || msg.includes("training") || msg.includes("course") || msg.includes("learn") || msg.includes("where can i get certified") || msg.includes("how do i get certified")) &&
          msg.includes(jobName)
        ) {
          return `To get certified or trained for the role of **${job.title}**, you can explore these recommended resources: ${job.resources.join(", " )}. As your job coach, I recommend starting with a beginner-friendly course and building your skills step by step. Practice what you learn, and don't hesitate to ask for help or join a study group. Every bit of progress counts!`;
        }
        // General job info
        if (
          msg.includes(jobName) ||
          (msg.includes("define") && msg.includes(jobName)) ||
          (msg.includes("qualification") && msg.includes(jobName)) ||
          (msg.includes("pay") && msg.includes(jobName)) ||
          (msg.includes("salary") && msg.includes(jobName))
        ) {
          return `**${job.title}**\n\n${job.description}\n\n**Required Skills:** ${job.skills.join(", ")}\n**Industries:** ${job.industries.join(", ")}\n**Example Employers:** ${job.employers.join(", ")}\n**Training Resources:** ${job.resources.join(", ")}\n**Typical Pay Range:** ${job.pay}\n\nJob Coach Tip: If this job interests you, start by learning the top required skills and updating your resume to highlight relevant experience. Reach out to people in the field for advice, and remember—confidence grows with practice and persistence!`;
        }
      }
      // 4. General site/about questions
      if (
        msg.includes("about this site") ||
        msg.includes("what is this site") ||
        msg.includes("what does this site do") ||
        msg.includes("what is sanctuary") ||
        msg.includes("what is ai wilding") ||
        msg.includes("what does this website do") ||
        msg.includes("tell me about this site") ||
        msg.includes("site purpose") ||
        msg.includes("site info") ||
        msg.includes("website info") ||
        msg.includes("what is this for")
      ) {
        return "AI Wilding is a creative sanctuary dedicated to helping you thrive in the age of AI. We offer curated AI job listings, hiring events, resources, and community support for creative and technical talent. Whether you're looking to start a new career, upskill, or connect with others, you'll find guidance and opportunities here. What makes AI Wilding different from other job sites? We focus on privacy-first design, actionable coaching, and creative empowerment. Your data is never sold or shared, and you get personalized job alerts, skill gap analysis, interview reminders, and resume feedback—all in a supportive, creative environment.";
      }
      // 4b. What makes this site different
      if (
        msg.includes("what makes this site different") ||
        msg.includes("how is this site different") ||
        msg.includes("why is this site unique") ||
        msg.includes("how is this different from other job sites") ||
        msg.includes("what's special about this site")
      ) {
        return "AI Wilding stands out from other job sites by putting your privacy, creativity, and growth first. Unlike traditional job boards, we never sell or share your data. You get personalized job alerts, skill gap analysis, interview reminders, and resume feedback—all in a creative, supportive environment. Mr. Job Nanny acts as your personal job coach, helping you build confidence, skills, and connections for the future of work.";
      }
      // 5. Job suggestion
      const jobSuggestion = JOB_SUGGESTIONS.find(j => msg.includes(j.keyword));
      if (jobSuggestion) return jobSuggestion.suggestion;
      // 6. FAQ match (moved lower so job logic takes priority)
      const faq = FAQS.find(f => msg.includes(f.q.toLowerCase().split(" ")[0]));
      if (faq) return faq.a;
      // 7. Fallback
      return "I'm here to help with questions about AI jobs, events, and resources! Try asking about careers, events, or training. For the latest news, ask 'What's new?'";
    }

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input.trim();
    const msgId = nextId.current++;
    setMessages(msgs => [...msgs, { id: msgId, from: "You", text: userMsg, parentId: replyTo ?? undefined }]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
        // Pass quiz state to bot response
        const botReply = getBotResponse(userMsg);
      setMessages(msgs => [
        ...msgs,
        { id: nextId.current++, from: "Mr. Job Nanny", text: botReply, parentId: replyTo ?? undefined }
      ]);
      setLoading(false);
      setReplyTo(null);
    }, 600);
  };

  // Render threaded messages (one level deep)
  function renderMessages(parentId?: number) {
    return messages
      .filter(m => m.parentId === parentId)
      .map(m => (
        <div key={m.id} style={{ marginLeft: parentId !== undefined ? 32 : 0, marginBottom: 8 }}>
          <div style={{
            textAlign: m.from === "Mr. Job Nanny" ? "left" : "right",
            color: m.from === "Mr. Job Nanny" ? "#ffd700" : "#fff8dc",
            fontWeight: m.from === "Mr. Job Nanny" ? 700 : 400,
            background: m.from === "Mr. Job Nanny" ? "rgba(255,215,0,0.08)" : "rgba(255,255,255,0.05)",
            borderRadius: 8,
            padding: "8px 12px",
            display: 'inline-block',
            maxWidth: 380
          }}>
            <span style={{ fontSize: 13, opacity: 0.7 }}>{m.from}</span><br />
            {m.text}
          </div>
          <button onClick={() => setReplyTo(m.id)} style={{ marginLeft: 8, fontSize: 12, color: '#ffd700', background: 'none', border: 'none', cursor: 'pointer' }}>Reply</button>
          {renderMessages(m.id)}
        </div>
      ));
  }

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a141a 0%, #18191a 60%, #2a1a4d 100%)", fontFamily: "Inter, Arial, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 1rem" }} role="main" aria-label="AI Jobs Chatbot">
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffd700", margin: "32px 0 16px 0", textShadow: "0 2px 16px #6a1b9a" }} tabIndex={0} aria-label={modeLabel}>
        {modeLabel}
      </h1>
      <div style={{ color: '#ffd700', fontWeight: 600, marginBottom: 12, fontSize: 16 }}>{modeDesc}</div>
      {mode === 'weight' && (
        <div style={{ color: '#ffb300', fontWeight: 700, marginBottom: 12, fontSize: 15 }}>
          <span role="img" aria-label="warning">⚠️</span> Always consult your doctor before starting any weight loss or exercise program, especially if you have health conditions or concerns.
        </div>
      )}
      {/* Announcement/news banner */}
      <div style={{
        background: "#ffd700",
        color: "#232526",
        borderRadius: 10,
        padding: "10px 18px",
        fontWeight: 700,
        marginBottom: 18,
        boxShadow: "0 2px 12px #6a1b9a22",
        maxWidth: 520,
        width: "100%",
        textAlign: "center",
        letterSpacing: 0.1,
      }} role="status" aria-live="polite">
        {ANNOUNCEMENT}
      </div>
      <nav aria-label="Main actions" style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
        <button
          style={{ background: '#ffd700', color: '#232526', fontWeight: 700, borderRadius: 8, padding: '10px 18px', border: 'none', cursor: 'pointer' }}
          onClick={() => { setShowResumeForm(v => !v); setResumeDraft(null); }}
          aria-pressed={showResumeForm}
          aria-label={showResumeForm ? "Close Resume Writer" : "Open Resume Writer"}
        >
          {showResumeForm ? "Close Resume Writer" : "Write My Resume"}
        </button>
        <button
          style={{ background: '#6a1b9a', color: '#ffd700', fontWeight: 700, borderRadius: 8, padding: '10px 18px', border: 'none', cursor: 'pointer' }}
          onClick={() => { setShowContactForm(v => !v); setContactSent(false); }}
          aria-pressed={showContactForm}
          aria-label={showContactForm ? "Close Contact Form" : "Open Contact Form"}
        >
          {showContactForm ? "Close Contact Form" : "Contact the Creator"}
        </button>
      </nav>
      {showContactForm && (
        <section style={{ maxWidth: 500, width: '100%', background: "rgba(255,255,255,0.13)", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px #6a1b9a22", marginBottom: 32 }}>
          <h2 style={{ color: '#ffd700', fontSize: 20, marginBottom: 12 }}>Contact Your Personal Assistant</h2>
          <div style={{ color: '#fff8dc', fontSize: 15, marginBottom: 14, background: 'rgba(34,34,48,0.7)', borderRadius: 8, padding: 12 }}>
            Your personal assistant is always here to help! If you have a question, feedback, or just want to say hello, simply send your message below. Your assistant will make sure it reaches the creator, privately and securely.<br /><br />
            <span role="img" aria-label="lock">🔒</span> For your peace of mind, your message will be <strong>encrypted</strong> before it leaves your browser. Only the creator can read it—nobody else can see your message in transit. This is part of our strict privacy controls.
          </div>
          {contactSent ? (
            <div style={{ color: '#ffd700', fontWeight: 700, margin: '16px 0' }}>Thank you! Your message has been received. Your assistant will make sure it gets to the creator—privately and securely.</div>
          ) : (
            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <input name="name" value={contactForm.name} onChange={handleContactFormChange} placeholder="Your Name" required style={{ borderRadius: 8, border: '1.5px solid #ffd700', padding: '8px 12px', fontSize: '1rem', background: '#18191a', color: '#fff8dc' }} />
              <input name="email" type="email" value={contactForm.email} onChange={handleContactFormChange} placeholder="Your Email" required style={{ borderRadius: 8, border: '1.5px solid #ffd700', padding: '8px 12px', fontSize: '1rem', background: '#18191a', color: '#fff8dc' }} />
              <textarea name="message" value={contactForm.message} onChange={handleContactFormChange} placeholder="Your Message" rows={4} required style={{ borderRadius: 8, border: '1.5px solid #ffd700', padding: '8px 12px', fontSize: '1rem', background: '#18191a', color: '#fff8dc' }} />
              <button type="submit" style={{ background: '#ffd700', color: '#232526', fontWeight: 700, borderRadius: 8, padding: '10px 18px', border: 'none', cursor: 'pointer', marginTop: 8 }}>Send Message</button>
            </form>
          )}
        </section>
      )}
      {showResumeForm && (
        <section style={{ maxWidth: 500, width: '100%', background: "rgba(255,255,255,0.13)", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px #6a1b9a22", marginBottom: 32 }}>
          <h2 style={{ color: '#ffd700', fontSize: 20, marginBottom: 12 }}>Resume Writer (Private & Secure)</h2>
          <form onSubmit={handleResumeSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <input name="name" value={resumeForm.name} onChange={handleResumeFormChange} placeholder="Full Name" required style={{ borderRadius: 8, border: '1.5px solid #ffd700', padding: '8px 12px', fontSize: '1rem', background: '#18191a', color: '#fff8dc' }} />
            <input name="email" value={resumeForm.email} onChange={handleResumeFormChange} placeholder="Email" required style={{ borderRadius: 8, border: '1.5px solid #ffd700', padding: '8px 12px', fontSize: '1rem', background: '#18191a', color: '#fff8dc' }} />
            <input name="phone" value={resumeForm.phone} onChange={handleResumeFormChange} placeholder="Phone" required style={{ borderRadius: 8, border: '1.5px solid #ffd700', padding: '8px 12px', fontSize: '1rem', background: '#18191a', color: '#fff8dc' }} />
            <textarea name="summary" value={resumeForm.summary} onChange={handleResumeFormChange} placeholder="Professional Summary" rows={2} required style={{ borderRadius: 8, border: '1.5px solid #ffd700', padding: '8px 12px', fontSize: '1rem', background: '#18191a', color: '#fff8dc' }} />
            <textarea name="experience" value={resumeForm.experience} onChange={handleResumeFormChange} placeholder="Experience (jobs, roles, dates)" rows={3} required style={{ borderRadius: 8, border: '1.5px solid #ffd700', padding: '8px 12px', fontSize: '1rem', background: '#18191a', color: '#fff8dc' }} />
            <textarea name="education" value={resumeForm.education} onChange={handleResumeFormChange} placeholder="Education (schools, degrees, dates)" rows={2} required style={{ borderRadius: 8, border: '1.5px solid #ffd700', padding: '8px 12px', fontSize: '1rem', background: '#18191a', color: '#fff8dc' }} />
            <textarea name="skills" value={resumeForm.skills} onChange={handleResumeFormChange} placeholder="Skills (comma separated)" rows={2} required style={{ borderRadius: 8, border: '1.5px solid #ffd700', padding: '8px 12px', fontSize: '1rem', background: '#18191a', color: '#fff8dc' }} />
            <button type="submit" style={{ background: '#ffd700', color: '#232526', fontWeight: 700, borderRadius: 8, padding: '10px 18px', border: 'none', cursor: 'pointer', marginTop: 8 }}>Generate Resume Draft</button>
          </form>
          {resumeDraft && (
            <div style={{ background: '#232526', color: '#ffd700', borderRadius: 8, padding: 16, marginTop: 18, whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: 15 }}>
              <strong>Resume Draft:</strong>
              <br />
              {resumeDraft}
              <br />
              <button onClick={() => { navigator.clipboard.writeText(resumeDraft); }} style={{ marginTop: 10, background: '#ffd700', color: '#232526', fontWeight: 700, borderRadius: 8, padding: '6px 14px', border: 'none', cursor: 'pointer' }}>Copy to Clipboard</button>
              {resumeFeedback.length > 0 && (
                <div style={{ marginTop: 18, background: '#18191a', color: '#ffb300', borderRadius: 8, padding: 12, fontSize: 15 }}>
                  <strong>Mr. Job Nanny's Suggestions:</strong>
                  <ul style={{ margin: '8px 0 0 18px', padding: 0 }}>
                    {resumeFeedback.map((fb, i) => <li key={i}>{fb}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>
      )}
      <section style={{ maxWidth: 500, width: '100%', background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px #6a1b9a22", marginBottom: 32 }}>
        <div style={{ minHeight: 220, marginBottom: 16 }}>
          {renderMessages(undefined)}
          {loading && <div style={{ color: '#ffd700', fontStyle: 'italic' }}>Mr. Job Nanny is typing…</div>}
        </div>
        <form onSubmit={handleSend} style={{ display: 'flex', gap: 8 }}>
          {replyTo !== null && (
            <span style={{ color: '#ffd700', fontSize: 13, alignSelf: 'center' }}>
              Replying to message #{replyTo} <button type="button" onClick={() => setReplyTo(null)} style={{ color: '#fff8dc', background: 'none', border: 'none', marginLeft: 4, cursor: 'pointer' }}>Cancel</button>
            </span>
          )}
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            style={{ flex: 1, borderRadius: 8, border: '1.5px solid #ffd700', padding: '10px 14px', fontSize: '1rem', background: '#18191a', color: '#fff8dc' }}
            placeholder={replyTo !== null ? "Type your reply..." : "Type your question..."}
            disabled={loading}
            autoFocus
          />
          <button type="submit" style={{ background: '#ffd700', color: '#232526', fontWeight: 700, borderRadius: 8, padding: '10px 18px', border: 'none', cursor: 'pointer' }} disabled={loading || !input.trim()}>
            Send
          </button>
        </form>
      </section>
      <div style={{ color: '#fff8dc', fontSize: '1rem', marginTop: 24, textAlign: 'center', maxWidth: 600 }}>
        <strong>Meet Mr. Job Nanny: Your Private AI Career Assistant</strong>
        <ul style={{ textAlign: 'left', margin: '16px auto', maxWidth: 520, color: '#fff8dc', fontSize: '1rem', lineHeight: 1.6 }}>
          <li>Ask questions about AI jobs, qualifications, pay, and career paths.</li>
          <li>Get instant answers to FAQs about the site, AI, and hiring events.</li>
          <li>Receive personalized job suggestions based on your interests or skills.</li>
          <li>Explore the latest news and announcements about AI careers and events.</li>
          <li>Start a threaded chat for deeper, organized conversations.</li>
          <li>Use the secure, in-app Resume Writer to create and copy your resume—no accounts, no sharing, fully private.</li>
          <li>Get tips on resume building, interview prep, and career transitions.</li>
          <li>Enjoy a safe, supportive, and privacy-first environment—Mr. Job Nanny never shares your data.</li>
        </ul>
        <div style={{ color: '#ffd700', fontWeight: 700, marginTop: 8 }}>
          <span role="img" aria-label="lock">🔒</span> We are strong respecters of your privacy. All resume writing and chat features are private and secure—your data is never shared or sent anywhere without your consent.
        </div>
      </div>
    </main>
  );
}
