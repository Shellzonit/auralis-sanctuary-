export default function TransitionalPhasingJobs() {
  const tabs = [
    { label: "Home", href: "/" },
    { label: "Chat", href: "/chat" },
    { label: "Showcase", href: "/showcase" },
    { label: "Email", href: "/email" },
    { label: "Spotlight", href: "/spotlight" },
    { label: "Sharing", href: "/sharing" },
    { label: "About", href: "/about" },
    { label: "Legacy", href: "/legacy" },
    { label: "Privacy", href: "/privacy" },
  ];
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-yellow-300 px-6 py-16" style={{ background: '#0a0a0a' }}>
      {/* Spotlight Section */}
      <section className="w-full max-w-3xl rounded-2xl shadow-xl p-8 border-2 border-yellow-400 mb-12 mt-4 bg-gradient-to-br from-yellow-900/80 to-yellow-700/40 flex flex-col items-center" style={{ color: '#ffe082', boxShadow: '0 4px 32px #000a' }}>
        <h2 className="text-3xl font-extrabold mb-4 text-center tracking-wide" style={{ color: '#ffd700', textShadow: '0 2px 16px #000a', letterSpacing: 1.2 }}>🌟 Featured This Week</h2>
        <div className="w-full flex flex-col md:flex-row md:justify-center gap-6">
          <div className="flex-1 bg-black/60 rounded-xl p-6 border border-yellow-700 flex flex-col items-center">
            <span className="font-bold text-lg mb-2" style={{ color: '#ffe082' }}>Top Job: AI Data Annotator</span>
            <span className="text-base mb-2">Labeling, dataset curation, prompt engineering</span>
            <a href="#" className="text-amber-200 underline font-semibold hover:text-amber-300 transition-colors">See Openings</a>
          </div>
          <div className="flex-1 bg-black/60 rounded-xl p-6 border border-yellow-700 flex flex-col items-center">
            <span className="font-bold text-lg mb-2" style={{ color: '#ffe082' }}>Contributor: Jane Doe</span>
            <span className="text-base mb-2">Recognized for outstanding AI content curation</span>
            <a href="#" className="text-amber-200 underline font-semibold hover:text-amber-300 transition-colors">View Profile</a>
          </div>
        </div>
      </section>
      <h1 className="text-5xl font-extrabold mb-4 text-center drop-shadow-lg" style={{ color: '#ffd700', letterSpacing: 1.5, textShadow: '0 2px 24px #000a' }}>
        Transitional Phasing Jobs
      </h1>
      {/* Navigation Tabs */}
      <nav style={{ width: "100%", display: "flex", justifyContent: "center", gap: 24, marginTop: 12, marginBottom: 32 }}>
        {tabs.map(tab => (
          <a
            key={tab.href}
            href={tab.href}
            style={{
              textDecoration: "none",
              color: "#f7fafc",
              background: "#23242b",
              borderRadius: 18,
              padding: "0.7rem 2.2rem",
              fontWeight: 600,
              fontSize: 18,
              letterSpacing: ".04em",
              border: "2px solid #31323a",
              boxShadow: "0 2px 12px 0 #0006",
              transition: "all .18s cubic-bezier(.4,0,.2,1)",
              margin: 0,
              display: "inline-block",
            }}
            onMouseOver={e => { e.currentTarget.style.background = "#2a2b33"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#23242b"; }}
          >
            {tab.label}
          </a>
        ))}
      </nav>
      <p className="max-w-2xl text-center text-lg md:text-xl mb-10" style={{ color: '#ffe082', opacity: 0.92 }}>
        Explore how traditional roles are evolving and what equivalent experience looks like in the AI era.
      </p>
      {/* Jobs at Risk Section */}
      <div className="w-full max-w-3xl rounded-xl shadow-lg p-8 border mb-12" style={{ background: 'linear-gradient(135deg, #18120a 80%, #ffd70022 100%)', borderColor: '#ffd700' }}>
        <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#ffd700' }}>Jobs at Risk</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li className="transition-transform duration-150 hover:scale-105 hover:bg-yellow-900/20 rounded-lg px-2">
            Retail Associate → <a href="#ai-retail" className="text-amber-300 underline hover:text-yellow-400 transition-colors">AI Retail Assistant</a>
          </li>
          <li className="transition-transform duration-150 hover:scale-105 hover:bg-yellow-900/20 rounded-lg px-2">
            Customer Service Rep → <a href="#ai-customer" className="text-amber-300 underline hover:text-yellow-400 transition-colors">Conversational AI Trainer</a>
          </li>
          <li className="transition-transform duration-150 hover:scale-105 hover:bg-yellow-900/20 rounded-lg px-2">
            Data Entry Clerk → <a href="#ai-data" className="text-amber-300 underline hover:text-yellow-400 transition-colors">AI Data Annotator</a>
          </li>
          <li className="transition-transform duration-150 hover:scale-105 hover:bg-yellow-900/20 rounded-lg px-2">
            Truck Driver → <a href="#ai-driver" className="text-amber-300 underline hover:text-yellow-400 transition-colors">Autonomous Vehicle Operator</a>
          </li>
          <li className="transition-transform duration-150 hover:scale-105 hover:bg-yellow-900/20 rounded-lg px-2">
            Administrative Assistant → <a href="#ai-admin" className="text-amber-300 underline hover:text-yellow-400 transition-colors">AI Workflow Coordinator</a>
          </li>
          <li className="transition-transform duration-150 hover:scale-105 hover:bg-yellow-900/20 rounded-lg px-2">
            Freelance Writer → <a href="#ai-writer" className="text-amber-300 underline hover:text-yellow-400 transition-colors">AI Content Curator/Prompt Designer</a>
          </li>
          <li className="transition-transform duration-150 hover:scale-105 hover:bg-yellow-900/20 rounded-lg px-2">
            Bookkeeper → <a href="#ai-bookkeeper" className="text-amber-300 underline hover:text-yellow-400 transition-colors">AI Financial Data Analyst</a>
          </li>
          <li className="transition-transform duration-150 hover:scale-105 hover:bg-yellow-900/20 rounded-lg px-2">
            Telemarketer → <a href="#ai-telemarketer" className="text-amber-300 underline hover:text-yellow-400 transition-colors">AI Outreach Specialist</a>
          </li>
          <li className="transition-transform duration-150 hover:scale-105 hover:bg-yellow-900/20 rounded-lg px-2">
            Graphic Designer → <a href="#ai-graphic" className="text-amber-300 underline hover:text-yellow-400 transition-colors">AI Visual Model Trainer</a>
          </li>
          <li className="transition-transform duration-150 hover:scale-105 hover:bg-yellow-900/20 rounded-lg px-2">
            Journalist → <a href="#ai-journalist" className="text-amber-300 underline hover:text-yellow-400 transition-colors">AI News Curator/Fact Checker</a>
          </li>
          <li className="transition-transform duration-150 hover:scale-105 hover:bg-yellow-900/20 rounded-lg px-2">
            Legal Secretary → <a href="#ai-legal" className="text-amber-300 underline hover:text-yellow-400 transition-colors">AI Legal Data Specialist</a>
          </li>
          <li className="transition-transform duration-150 hover:scale-105 hover:bg-yellow-900/20 rounded-lg px-2">
            Medical Transcriptionist → <a href="#ai-medical" className="text-amber-300 underline hover:text-yellow-400 transition-colors">AI Medical Data Annotator</a>
          </li>
        </ul>
      </div>
      <div className="w-full max-w-3xl rounded-xl shadow-lg p-8 border mb-12" style={{ background: 'linear-gradient(135deg, #18120a 80%, #ffd70022 100%)', borderColor: '#ffd700' }}>
        <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#ffd700' }}>Jobs Replaced or Evolving with AI</h2>
        <table className="w-full text-left border-collapse" style={{ color: '#ffe082' }}>
          <thead>
            <tr className="transition-colors duration-150 hover:bg-yellow-900/20">
              <th className="py-2 px-3 border-b border-yellow-700 text-lg">Traditional Job</th>
              <th className="py-2 px-3 border-b border-yellow-700 text-lg">AI Field Equivalent</th>
              <th className="py-2 px-3 border-b border-yellow-700 text-lg">Relevant AI Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-transform duration-150 hover:scale-102 hover:bg-yellow-900/20">
              <td className="py-2 px-3 border-b border-yellow-900">Data Entry Clerk</td>
              <td className="py-2 px-3 border-b border-yellow-900">AI Data Annotator</td>
              <td className="py-2 px-3 border-b border-yellow-900">Labeling, dataset curation, prompt engineering</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Customer Service Rep</td>
              <td className="py-2 px-3 border-b border-gray-800">Conversational AI Trainer</td>
              <td className="py-2 px-3 border-b border-gray-800">Chatbot scripting, user intent mapping, feedback analysis</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Copywriter</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Content Curator/Prompt Designer</td>
              <td className="py-2 px-3 border-b border-gray-800">Prompt writing, content review, AI output editing</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Photo Editor</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Image Model Trainer</td>
              <td className="py-2 px-3 border-b border-gray-800">Image dataset prep, prompt crafting, model fine-tuning</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Market Research Analyst</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Data Analyst</td>
              <td className="py-2 px-3 border-b border-gray-800">Data analysis, model evaluation, trend detection</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Transcriptionist</td>
              <td className="py-2 px-3 border-b border-gray-800">Speech-to-Text Model Validator</td>
              <td className="py-2 px-3 border-b border-gray-800">Audio labeling, accuracy review, error correction</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Paralegal/Legal Researcher</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Legal Data Specialist</td>
              <td className="py-2 px-3 border-b border-gray-800">Legal dataset curation, AI legal research, compliance review</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Medical Coder</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Medical Data Annotator</td>
              <td className="py-2 px-3 border-b border-gray-800">Medical data labeling, model validation, terminology mapping</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Proofreader</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Output Quality Reviewer</td>
              <td className="py-2 px-3 border-b border-gray-800">AI output review, error detection, feedback reporting</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Video Editor</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Video Model Trainer</td>
              <td className="py-2 px-3 border-b border-gray-800">Video dataset prep, prompt design, model evaluation</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Pay Potential Section */}
      <div className="w-full max-w-3xl rounded-xl shadow-lg p-8 border mb-10" style={{ background: 'linear-gradient(135deg, #18120a 80%, #ffd70022 100%)', borderColor: '#ffd700', color: '#ffe082' }}>
        <h2 className="text-2xl font-semibold mb-4 text-center" style={{ color: '#ffd700', textShadow: '0 2px 12px #000a' }}>Pay Potential for Transitional AI Jobs</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li><span className="font-bold">AI Data Annotator:</span> $20–$50/hr (varies by project and expertise)</li>
          <li><span className="font-bold">Conversational AI Trainer:</span> $25–$60/hr</li>
          <li><span className="font-bold">Prompt Designer/Content Curator:</span> $30–$80/hr</li>
          <li><span className="font-bold">AI Image/Video Model Trainer:</span> $25–$70/hr</li>
          <li><span className="font-bold">AI Data Analyst:</span> $35–$90/hr</li>
          <li><span className="font-bold">AI Output Quality Reviewer:</span> $20–$45/hr</li>
          <li><span className="font-bold">Specialized Roles (Legal, Medical, etc.):</span> $30–$100/hr</li>
        </ul>
      </div>
      {/* Call to Action Section */}
      <div className="w-full flex justify-center items-center mb-12">
        <a href="/join" className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold py-4 px-10 rounded-full shadow-lg text-xl hover:from-yellow-400 hover:to-yellow-200 transition-all duration-150 border-2 border-yellow-400" style={{ letterSpacing: 1.1 }}>
          Join the Community & Explore Jobs
        </a>
      </div>
      {/* AI Companies Seeking Help - Centered and Elegant Section */}
      <div className="w-full flex justify-center items-center mt-8 mb-8">
        <div className="w-full max-w-2xl rounded-2xl shadow-2xl p-10 border-2 border-yellow-400 bg-gradient-to-br from-yellow-900/80 to-yellow-700/40" style={{ color: '#ffe082', boxShadow: '0 4px 32px #000a' }}>
          <h2 className="text-3xl font-extrabold mb-8 text-center tracking-wide" style={{ color: '#ffd700', textShadow: '0 2px 16px #000a', letterSpacing: 1.2 }}>AI Companies Looking for Help</h2>
          <ul className="flex flex-col gap-6">
            <li className="rounded-xl p-6 border border-yellow-500 bg-yellow-950/80 flex flex-col md:flex-row md:items-center md:justify-between transition-transform hover:scale-105 hover:shadow-lg" style={{ color: '#ffd700' }}>
              <div>
                <span className="font-bold text-lg" style={{ color: '#ffe082' }}>OpenAI</span>
                <span className="ml-2 text-base">— Roles: Prompt Engineer, Data Annotator, Community Moderator</span>
              </div>
              <a href="https://openai.com/careers" target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-0 text-amber-200 underline font-semibold hover:text-amber-300 transition-colors">openai.com/careers</a>
            </li>
            <li className="rounded-xl p-6 border border-yellow-500 bg-yellow-950/80 flex flex-col md:flex-row md:items-center md:justify-between transition-transform hover:scale-105 hover:shadow-lg" style={{ color: '#ffd700' }}>
              <div>
                <span className="font-bold text-lg" style={{ color: '#ffe082' }}>Anthropic</span>
                <span className="ml-2 text-base">— Roles: AI Safety Researcher, Data Labeler, Technical Writer</span>
              </div>
              <a href="https://www.anthropic.com/careers" target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-0 text-amber-200 underline font-semibold hover:text-amber-300 transition-colors">anthropic.com/careers</a>
            </li>
            <li className="rounded-xl p-6 border border-yellow-500 bg-yellow-950/80 flex flex-col md:flex-row md:items-center md:justify-between transition-transform hover:scale-105 hover:shadow-lg" style={{ color: '#ffd700' }}>
              <div>
                <span className="font-bold text-lg" style={{ color: '#ffe082' }}>Hugging Face</span>
                <span className="ml-2 text-base">— Roles: Community Contributor, Model Trainer, Developer Advocate</span>
              </div>
              <a href="https://huggingface.co/careers" target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-0 text-amber-200 underline font-semibold hover:text-amber-300 transition-colors">huggingface.co/careers</a>
            </li>
            <li className="rounded-xl p-6 border border-yellow-500 bg-yellow-950/80 flex flex-col md:flex-row md:items-center md:justify-between transition-transform hover:scale-105 hover:shadow-lg" style={{ color: '#ffd700' }}>
              <div>
                <span className="font-bold text-lg" style={{ color: '#ffe082' }}>Stability AI</span>
                <span className="ml-2 text-base">— Roles: Data Curator, AI Artist, Research Assistant</span>
              </div>
              <a href="https://stability.ai/careers" target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-0 text-amber-200 underline font-semibold hover:text-amber-300 transition-colors">stability.ai/careers</a>
            </li>
            {/* Add more companies and roles as needed */}
          </ul>
        </div>
      </div>
    </main>
  );
}
