"use client";
import React, { useState } from "react";

export default function PromptingClassPage() {
  // Progress tracker state
  const [quizDone, setQuizDone] = useState(false);
  const [scenarioDone, setScenarioDone] = useState(false);
  const [practiceDone, setPracticeDone] = useState(false);

  // Calculate progress
  const totalSteps = 3;
  const completedSteps = [quizDone, scenarioDone, practiceDone].filter(Boolean).length;
  const progressPercent = Math.round((completedSteps / totalSteps) * 100);
  const [practicePrompt, setPracticePrompt] = useState("");
  const [practiceResponse, setPracticeResponse] = useState<string | null>(null);

  // Quiz state
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const quizQuestion = "What is the most important part of a good AI prompt?";
  const quizOptions = [
    "Making it as short as possible",
    "Using clear instructions and details",
    "Using lots of technical jargon",
    "Letting the AI guess what you want"
  ];
  const quizCorrect = 1;
  function handleQuizSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (quizAnswer === quizOptions[quizCorrect]) {
      setQuizFeedback("✅ Correct! Clear instructions and details make the best prompts.");
      setQuizDone(true);
    } else {
      setQuizFeedback("❌ Not quite. The best prompts are clear and detailed!");
    }
  }

  // Scenario state
  const [scenarioAnswer, setScenarioAnswer] = useState("");
  const [scenarioFeedback, setScenarioFeedback] = useState<string | null>(null);
  function handleScenarioSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (scenarioAnswer.toLowerCase().includes("role") && scenarioAnswer.toLowerCase().includes("task")) {
      setScenarioFeedback("✅ Great! You included both a role and a task, which is key for a strong prompt.");
      setScenarioDone(true);
    } else {
      setScenarioFeedback("💡 Try including both a role (who the AI should be) and a task (what you want done) in your prompt.");
    }
  }

  function handlePracticeSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulate a basic AI response
    if (!practicePrompt.trim()) {
      setPracticeResponse("Please enter a prompt to see a response.");
      return;
    }
    if (practicePrompt.toLowerCase().includes("resume")) {
      setPracticeResponse("Sure! Here's a confident 3-sentence resume summary including customer service experience.\n• Energetic professional with proven customer service skills.\n• Adept at resolving issues and building client loyalty.\n• Ready to contribute to a dynamic team.");
      setPracticeDone(true);
    } else if (practicePrompt.toLowerCase().includes("email")) {
      setPracticeResponse("Here's a friendly, professional email draft for you.\nSubject: Quick Update\nHi there,\nJust wanted to share a quick update. Let me know if you have any questions!\nBest,\nAI");
      setPracticeDone(true);
    } else {
      setPracticeResponse("This is a sample AI response to your prompt. Try being specific for best results!");
      setPracticeDone(true);
    }
  }

  return (
    <div>
      <h1>Prompting Mini Class</h1>
      <h2>Lesson 1: Introduction to Prompting</h2>
      <p>Prompting is the art of writing instructions for AI to get useful, accurate, and creative responses. In this class, you'll learn the basics and best practices for effective prompting.</p>

      <h2>Lesson 2: Why Prompting Matters</h2>
      <ul>
        <li>Prompting is used in many jobs: Prompt Engineer, AI Product Manager, Content Creator, Researcher, and more.</li>
        <li>Good prompts save time and improve results in business, education, and creative work.</li>
      </ul>

                <li><strong>Ignoring Context:</strong> Without background info, the AI may miss your intent. Add context or examples.</li>
                <li><strong>Unrealistic Expectations:</strong> AI is powerful, but not perfect. Review and edit outputs as needed.</li>
                <li><strong>Bad Outputs:</strong> If the AI gives poor results, try rephrasing your prompt or providing more guidance.</li>
              </ul>
              <div style={{ marginTop: 8, color: '#7b2ff2', fontWeight: 600 }}>
                Remember: Prompting is a skill. Practice, review, and keep learning!
              </div>
            </section>
      {/* Video & Audio Section */}
      <section style={{ maxWidth: 700, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #7b2ff222', padding: '2rem', marginBottom: 24 }}>
        <h2 style={{ fontSize: '1.15rem', color: '#7b2ff2', fontWeight: 700, marginBottom: 10 }}>🎬 Watch & Listen: Prompting in Action</h2>
        <div style={{ marginBottom: 18 }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/2xxziIWmaSA"
            title="Prompt Engineering for Everyone"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: 12, boxShadow: '0 1px 6px #7b2ff222', maxWidth: 420, width: '100%', margin: '0 auto', display: 'block' }}
          ></iframe>
        </div>
        <div>
          <audio controls style={{ width: '100%', maxWidth: 420, margin: '0 auto', display: 'block', borderRadius: 8, boxShadow: '0 1px 6px #7b2ff222' }}>
            <source src="/prompting-quick-tip.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div style={{ fontSize: '1.08rem', color: '#232526', marginTop: 8 }}>
            <strong>Listen:</strong> Quick tip on how to structure your prompts for best results.
          </div>
        </div>
      </section>


export default function PromptingClassPage() {
  // Progress tracker state
  const [quizDone, setQuizDone] = useState(false);
  const [scenarioDone, setScenarioDone] = useState(false);
  const [practiceDone, setPracticeDone] = useState(false);

  // Calculate progress
  const totalSteps = 3;
  const completedSteps = [quizDone, scenarioDone, practiceDone].filter(Boolean).length;
  const progressPercent = Math.round((completedSteps / totalSteps) * 100);
  const [practicePrompt, setPracticePrompt] = useState("");
  const [practiceResponse, setPracticeResponse] = useState<string | null>(null);

  // Quiz state
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const quizQuestion = "What is the most important part of a good AI prompt?";
  const quizOptions = [
    "Making it as short as possible",
    "Using clear instructions and details",
    "Using lots of technical jargon",
    "Letting the AI guess what you want"
  ];
  const quizCorrect = 1;
  function handleQuizSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (quizAnswer === quizOptions[quizCorrect]) {
      setQuizFeedback("✅ Correct! Clear instructions and details make the best prompts.");
      setQuizDone(true);
    } else {
      setQuizFeedback("❌ Not quite. The best prompts are clear and detailed!");
    }
  }

  // Scenario state
  const [scenarioAnswer, setScenarioAnswer] = useState("");
  const [scenarioFeedback, setScenarioFeedback] = useState<string | null>(null);
  function handleScenarioSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (scenarioAnswer.toLowerCase().includes("role") && scenarioAnswer.toLowerCase().includes("task")) {
      setScenarioFeedback("✅ Great! You included both a role and a task, which is key for a strong prompt.");
      setScenarioDone(true);
    } else {
      setScenarioFeedback("💡 Try including both a role (who the AI should be) and a task (what you want done) in your prompt.");
    }
  }

  function handlePracticeSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulate a basic AI response
    if (!practicePrompt.trim()) {
      setPracticeResponse("Please enter a prompt to see a response.");
      return;
    }
    if (practicePrompt.toLowerCase().includes("resume")) {
      setPracticeResponse("Sure! Here's a confident 3-sentence resume summary including customer service experience.\n• Energetic professional with proven customer service skills.\n• Adept at resolving issues and building client loyalty.\n• Ready to contribute to a dynamic team.");
      setPracticeDone(true);
    } else if (practicePrompt.toLowerCase().includes("email")) {
      setPracticeResponse("Here's a friendly, professional email draft for you.\nSubject: Quick Update\nHi there,\nJust wanted to share a quick update. Let me know if you have any questions!\nBest,\nAI");
      setPracticeDone(true);
    } else {
      setPracticeResponse("This is a sample AI response to your prompt. Try being specific for best results!");
      setPracticeDone(true);
    }
  }

  return (
    <div>
      <h1>Prompting Mini Class</h1>
      <h2>Lesson 1: Introduction to Prompting</h2>
      <p>Prompting is the art of writing instructions for AI to get useful, accurate, and creative responses. In this class, you'll learn the basics and best practices for effective prompting.</p>
      <h2>Lesson 2: Why Prompting Matters</h2>
      <ul>
        <li>Prompting is used in many jobs: Prompt Engineer, AI Product Manager, Content Creator, Researcher, and more.</li>
        <li>Good prompts save time and improve results in business, education, and creative work.</li>
      </ul>
      <h2>Lesson 3: How to Write a Good Prompt</h2>
      <ol>
        <li>Start with a clear instruction or question.</li>
        <li>Add details about what you want (format, style, topic).</li>
        <li>Give context or examples to help the AI understand.</li>
        <li>Iterate and refine your prompt based on the AI's response.</li>
        <li>Experiment with different approaches and compare results.</li>
      </ol>
      <h2>Lesson 4: Common Mistakes</h2>
      <ul>
        <li>Vague prompts lead to generic answers.</li>
        <li>Too much detail can confuse the AI.</li>
        <li>Not providing context may cause the AI to miss your intent.</li>
        <li>Expecting perfect results—always review and edit outputs.</li>
      </ul>
      <h2>Lesson 5: Practice & Quiz</h2>
      <p>Try writing a prompt for the following scenario:</p>
      <blockquote>"You want the AI to write a professional email for a job application."</blockquote>
      <form onSubmit={handlePracticeSubmit}>
        <label htmlFor="practicePrompt">Your prompt:</label><br />
        <input
          id="practicePrompt"
          type="text"
          value={practicePrompt}
          onChange={e => setPracticePrompt(e.target.value)}
          style={{ width: '100%', maxWidth: 400 }}
        /><br />
        <button type="submit">Submit</button>
      </form>
      {practiceResponse && <p><strong>AI Response:</strong> {practiceResponse}</p>}
      <h2>Lesson 6: Quick Quiz</h2>
      <form onSubmit={handleQuizSubmit}>
        <label htmlFor="quizAnswer">What is the most important part of a good AI prompt?</label><br />
        <select
          id="quizAnswer"
          value={quizAnswer}
          onChange={e => setQuizAnswer(e.target.value)}
        >
          <option value="">Select an answer</option>
          {quizOptions.map((option, idx) => (
            <option key={idx} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit">Check Answer</button>
      </form>
      {quizFeedback && <p><strong>Quiz Feedback:</strong> {quizFeedback}</p>}
      <h2>Lesson 7: Resources</h2>
      <ul>
        <li><a href="https://learnprompting.org/" target="_blank" rel="noopener noreferrer">LearnPrompting.org</a></li>
        <li><a href="https://www.promptingguide.ai/" target="_blank" rel="noopener noreferrer">Prompting Guide</a></li>
        <li><a href="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" target="_blank" rel="noopener noreferrer">ChatGPT Prompt Engineering (DeepLearning.AI)</a></li>
      </ul>
      <h2>Lesson 8: Summary</h2>
      <p>Prompting is a skill you can learn and improve. Use clear instructions, add details, provide context, and always review the AI's output. Practice and experiment to get the best results.</p>
    </div>
  );
}
