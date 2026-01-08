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
                    <section style={{ background: '#fff7fa', borderRadius: 10, padding: '1.5rem 1.5rem', marginBottom: 12, borderLeft: '5px solid #f357a8', fontSize: '1.08rem', color: '#232526', fontWeight: 500 }}>
                      <h2 style={{ color: '#f357a8', fontSize: '1.12rem', fontWeight: 700, marginBottom: 10 }}>📝 What You'll Learn</h2>
                      <ul style={{ marginTop: 6, marginBottom: 6, paddingLeft: 22 }}>
                        <li>How to write clear, effective prompts for AI tools</li>
                        <li>Common mistakes and how to avoid them</li>
                        <li>How to iterate and refine your prompts for better results</li>
                        <li>Real-world examples: creative writing, business, research, and more</li>
                        <li>How to use context, instructions, and examples to guide AI</li>
                        <li>Tips for using AI in resumes, job search, and content creation</li>
                      </ul>
                      <h3 style={{ color: '#f357a8', fontSize: '1.08rem', fontWeight: 700, marginTop: 16, marginBottom: 8 }}>Step-by-Step Prompting Guide</h3>
                      <ol style={{ marginTop: 6, marginBottom: 6, paddingLeft: 22 }}>
                        <li><strong>Start Simple:</strong> Ask a direct question or give a clear instruction.</li>
                        <li><strong>Add Details:</strong> Include specifics about what you want (format, style, topic).</li>
                        <li><strong>Give Context:</strong> Share background info or examples to help the AI understand.</li>
                        <li><strong>Iterate:</strong> Refine your prompt based on the AI's response.</li>
                        <li><strong>Experiment:</strong> Try different approaches and compare results.</li>
                      </ol>
                      <div style={{ marginTop: 8, color: '#f357a8', fontWeight: 600 }}>
                        Practice is key! The more you experiment, the better your results will be.
                      </div>
                    </section>
            {/* Community, FAQ, and Resources Section */}
            <section style={{ maxWidth: 700, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #7b2ff222', padding: '2rem', marginBottom: 32 }}>
              <h2 style={{ fontSize: '1.15rem', color: '#7b2ff2', fontWeight: 700, marginBottom: 10 }}>🤝 Community & Resources</h2>
              <div style={{ marginBottom: 18 }}>
                <strong>Share your progress:</strong> <a href="https://twitter.com/intent/tweet?text=I%20just%20completed%20the%20Prompting%20Mini%20Class%20on%20Sanctuary!%20%F0%9F%8E%89%20%23PromptEngineering" target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', textDecoration: 'underline' }}>Tweet your achievement</a> or join our <a href="https://discord.gg/ai" target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', textDecoration: 'underline' }}>AI Community Chat</a>.
              // end FAQ section
              <div style={{ marginBottom: 18 }}>
                <strong>FAQ:</strong>
                <ul style={{ marginTop: 6, marginBottom: 6, paddingLeft: 22 }}>
                  <li><strong>Q:</strong> What is a prompt?<br /><strong>A:</strong> A prompt is the instruction or question you give to an AI to get a response.</li>
                  <li><strong>Q:</strong> How do I make my prompts better?<br /><strong>A:</strong> Be clear, specific, and include details about what you want.</li>
                  <li><strong>Q:</strong> Can anyone learn prompting?<br /><strong>A:</strong> Yes! You don’t need to be technical—just practice clear communication.</li>
                  <li><strong>Q:</strong> Where can I use prompting skills?<br /><strong>A:</strong> In chatbots, resume builders, creative tools, customer support, and more.</li>
                </ul>
              </div>
              </div>
                <ul style={{ marginTop: 6, marginBottom: 0, paddingLeft: 22 }}>
                  <li><a href="https://learnprompting.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', textDecoration: 'underline' }}>LearnPrompting.org</a> — Free, in-depth guide to prompt engineering</li>
                  <li><a href="https://www.promptingguide.ai/" target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', textDecoration: 'underline' }}>Prompting Guide</a> — Tips, examples, and best practices</li>
                  <li><a href="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', textDecoration: 'underline' }}>ChatGPT Prompt Engineering (DeepLearning.AI)</a></li>
                </ul>
              // end resources section
            </section>
            {/* Real-world Case Studies Section */}
            <section style={{ maxWidth: 700, background: '#f5f3fd', borderRadius: 16, boxShadow: '0 2px 12px #7b2ff222', padding: '2rem', marginBottom: 32, borderLeft: '5px solid #7b2ff2' }}>
              <h2 style={{ fontSize: '1.15rem', color: '#7b2ff2', fontWeight: 700, marginBottom: 10 }}>🌎 Real-World Case Studies: Prompting in Action</h2>
              <ul style={{ marginTop: 6, marginBottom: 6, paddingLeft: 22 }}>
                <li><strong>Healthcare:</strong> Doctors use AI prompts to summarize patient records and suggest diagnoses, saving time and improving accuracy.</li>
                <li><strong>Marketing:</strong> Content creators prompt AI to generate ad copy, social media posts, and campaign ideas, boosting creativity and speed.</li>
                <li><strong>Education:</strong> Teachers use AI to create lesson plans, quizzes, and personalized feedback for students.</li>
                <li><strong>Customer Support:</strong> Support teams prompt AI chatbots to answer questions and resolve issues 24/7.</li>
                <li><strong>Entertainment:</strong> Writers and artists use AI to brainstorm story ideas, lyrics, and visual concepts.</li>
              </ul>
            </section>
            {/* Ethical & Responsible AI Use Section */}
            <section style={{ maxWidth: 700, background: '#fff7fa', borderRadius: 16, boxShadow: '0 2px 12px #f357a822', padding: '2rem', marginBottom: 32, borderLeft: '5px solid #f357a8' }}>
              <h2 style={{ fontSize: '1.15rem', color: '#f357a8', fontWeight: 700, marginBottom: 10 }}>🧭 Tips for Ethical & Responsible AI Use</h2>
              <ul style={{ marginTop: 6, marginBottom: 6, paddingLeft: 22 }}>
                <li>Always check AI-generated content for accuracy and bias.</li>
                <li>Respect privacy—never share sensitive personal data in prompts.</li>
                <li>Use AI to support, not replace, human creativity and judgment.</li>
                <li>Be transparent when using AI in your work or projects.</li>
                <li>Report and correct harmful or inappropriate outputs.</li>
              </ul>
            </section>
            {/* Common Pitfalls & Troubleshooting Section */}
            <section style={{ maxWidth: 700, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #7b2ff222', padding: '2rem', marginBottom: 32, borderLeft: '5px solid #7b2ff2' }}>
              <h2 style={{ fontSize: '1.15rem', color: '#7b2ff2', fontWeight: 700, marginBottom: 10 }}>⚠️ Common Pitfalls & Troubleshooting</h2>
              <ul style={{ marginTop: 6, marginBottom: 6, paddingLeft: 22 }}>
                <li><strong>Vague Prompts:</strong> If your prompt is unclear, the AI may give irrelevant or generic answers. Be specific!</li>
                <li><strong>Overly Complex Prompts:</strong> Too much detail can confuse the AI. Break complex requests into smaller steps.</li>
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
