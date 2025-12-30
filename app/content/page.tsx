

"use client";

export default function ContentTutorialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#1a1a22] text-red-200 px-6 py-16 font-serif">
      <h1 className="text-4xl font-bold text-red-400 tracking-wide text-center mb-6">
        How to Use Sanctuary: Content Submission Tutorial
      </h1>
      <div className="w-32 h-1 bg-red-600 mx-auto mb-10 rounded-full"></div>
      <section className="max-w-2xl mx-auto bg-[#18181f] rounded-2xl shadow-2xl p-8 border-2 border-red-700/40">
        <h2 className="text-2xl text-red-300 font-semibold mb-4">Step-by-Step Guide</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <span className="font-bold text-red-200">Navigate to the Showcase Page:</span> Click on the "Showcase" tab in the navigation bar to view the gallery and submit your AI photos.
          </li>
          <li>
            <span className="font-bold text-red-200">Submit Your Content:</span> Use the upload form at the top of the Showcase page. Enter a title (optional) and paste the direct image URL of your AI-generated photo. Click "Submit" to upload.
          </li>
          <li>
            <span className="font-bold text-red-200">View Your Submission:</span> After submitting, your photo will appear in the gallery below, along with other user and sample images.
          </li>
          <li>
            <span className="font-bold text-red-200">Tips for Best Results:</span> Use high-quality image URLs. Make sure your image is accessible and not behind a login or restricted link.
          </li>
        </ol>
        <div className="mt-8 text-center">
          <span className="text-red-300 font-semibold">Need help?</span> Contact support via the link in the navigation bar.
        </div>
      </section>
      <div className="text-center mt-10">
        {/* Removed 'Back to Homepage' link as part of homepage cleanup */}
      </div>
    </main>
  );
}
