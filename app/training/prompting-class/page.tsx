
"use client";
import React from "react";

export default function PromptingClassPage() {
  return (
    <div>
      <h1>Week 1: Lesson 1 - Introduction to Prompting</h1>
      <p><strong>Written by shellzonit</strong></p>
      <div style={{ background: '#f5f3fd', borderRadius: 10, padding: '1rem', marginBottom: 16, maxWidth: 500 }}>
        <strong>About the Writer:</strong> shellzonit is an educator and developer passionate about making AI skills accessible to everyone. With years of experience in technology and teaching, shellzonit helps learners build confidence in using modern AI tools.
      </div>
      <h2>What is Prompting?</h2>
      <p>Prompting is giving instructions or questions to an AI system to get a useful response. A prompt can be a simple question, a command, or a detailed request.</p>
      <h2>Who Uses Prompting?</h2>
      <p>Anyone interacting with AI uses prompting: students, teachers, developers, business professionals, artists, writers, and researchers. Specialized roles like Prompt Engineers design prompts for advanced AI tasks.</p>
      <h2>Why Do We Hear So Much About Prompting?</h2>
      <p>Prompting is key to getting good results from AI. As AI tools become more common, knowing how to write effective prompts helps people get better, more accurate, and creative outputs.</p>
      <h2>How Much Time Does It Take to Prompt?</h2>
      <p>Prompting can take seconds for simple questions, or a few minutes for more detailed requests. The time depends on how specific and complex your needs are.</p>
      <h2>What Type of Commands Are Used for Prompting?</h2>
      <p>Prompts can be questions (“What is the weather today?”), instructions (“Write a summary of this article”), or commands (“Translate this text to Spanish”). The best prompts are clear, specific, and direct.</p>

      <h2>Demo: Try a Simple Prompt</h2>
      <div style={{ background: '#e6f7ff', borderRadius: 8, padding: '1rem', marginTop: 16, maxWidth: 500 }}>
        <strong>Prompt:</strong> "Write a short poem about the sky."
        <div style={{ marginTop: 10, color: '#232526', fontStyle: 'italic' }}>
          <strong>AI Response:</strong> <br />
          The sky above is vast and blue,<br />
          With clouds that drift and sunlight too.<br />
          Each day it paints a different view,<br />
          A canvas bright for me and you.
        </div>
      </div>

      <h2>Demo: Prompt a Song</h2>
      <div style={{ background: '#fff7e6', borderRadius: 8, padding: '1rem', marginTop: 16, maxWidth: 500 }}>
        <strong>Prompt:</strong> "Write a short song about friendship."
        <div style={{ marginTop: 10, color: '#232526', fontStyle: 'italic' }}>
          <strong>AI Response:</strong> <br />
          <em>Verse 1:</em> <br />
          Side by side, we laugh and play,<br />
          Through every storm, we find our way.<br />
          <em>Chorus:</em> <br />
          Friends forever, hand in hand,<br />
          Together we can understand.<br />
          <em>Verse 2:</em> <br />
          Sharing dreams and making plans,<br />
          Friendship's magic never ends.<br />
        </div>
      </div>
    </div>
  );
}
