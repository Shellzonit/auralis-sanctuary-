export default function TransitionalPhasingJobs() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-16">
      <h1 className="text-5xl font-bold mb-8 text-center text-amber-300 drop-shadow-lg">
        Transitional Phasing Jobs
      </h1>
      <p className="max-w-2xl text-center text-lg md:text-xl text-gray-300 mb-10">
        Explore how traditional roles are evolving and what equivalent experience looks like in the AI era.
      </p>
      <div className="w-full max-w-3xl bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700 mb-12">
        <h2 className="text-2xl font-semibold text-amber-200 mb-6 text-center">Jobs Replaced or Evolving with AI</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-3 border-b border-gray-700 text-lg">Traditional Job</th>
              <th className="py-2 px-3 border-b border-gray-700 text-lg">AI Field Equivalent</th>
              <th className="py-2 px-3 border-b border-gray-700 text-lg">Relevant AI Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Data Entry Clerk</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Data Annotator</td>
              <td className="py-2 px-3 border-b border-gray-800">Labeling, dataset curation, prompt engineering</td>
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
      {/* AI Companies Seeking Help - Editable Section */}
      <div className="w-full max-w-3xl rounded-xl shadow-lg p-8 border border-yellow-600" style={{ background: '#111', color: '#ffe082' }}>
        <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#ffd700', textShadow: '0 2px 12px #000a' }}>AI Companies Looking for Help</h2>
        <ul className="space-y-4">
          {/* To update this list, simply add or remove <li> elements below */}
          <li className="rounded-lg p-4 border border-yellow-700" style={{ background: '#18120a', color: '#ffd700' }}>
            <span className="font-bold" style={{ color: '#ffe082' }}>OpenAI</span> — Roles: Prompt Engineer, Data Annotator, Community Moderator
            <br /><a href="https://openai.com/careers" target="_blank" rel="noopener noreferrer" style={{ color: '#ffe082', textDecoration: 'underline' }}>openai.com/careers</a>
          </li>
          <li className="rounded-lg p-4 border border-yellow-700" style={{ background: '#18120a', color: '#ffd700' }}>
            <span className="font-bold" style={{ color: '#ffe082' }}>Anthropic</span> — Roles: AI Safety Researcher, Data Labeler, Technical Writer
            <br /><a href="https://www.anthropic.com/careers" target="_blank" rel="noopener noreferrer" style={{ color: '#ffe082', textDecoration: 'underline' }}>anthropic.com/careers</a>
          </li>
          <li className="rounded-lg p-4 border border-yellow-700" style={{ background: '#18120a', color: '#ffd700' }}>
            <span className="font-bold" style={{ color: '#ffe082' }}>Hugging Face</span> — Roles: Community Contributor, Model Trainer, Developer Advocate
            <br /><a href="https://huggingface.co/careers" target="_blank" rel="noopener noreferrer" style={{ color: '#ffe082', textDecoration: 'underline' }}>huggingface.co/careers</a>
          </li>
          <li className="rounded-lg p-4 border border-yellow-700" style={{ background: '#18120a', color: '#ffd700' }}>
            <span className="font-bold" style={{ color: '#ffe082' }}>Stability AI</span> — Roles: Data Curator, AI Artist, Research Assistant
            <br /><a href="https://stability.ai/careers" target="_blank" rel="noopener noreferrer" style={{ color: '#ffe082', textDecoration: 'underline' }}>stability.ai/careers</a>
          </li>
          {/* Add more companies and roles as needed */}
        </ul>
      </div>
    </main>
  );
}
