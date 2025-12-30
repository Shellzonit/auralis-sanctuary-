export default function FAQPage() {
  // Simple local visitor count (demo only)
  const [visits, setVisits] = React.useState(0);
  React.useEffect(() => {
    const stored = localStorage.getItem('faqVisits');
    const count = stored ? parseInt(stored) + 1 : 1;
    localStorage.setItem('faqVisits', count.toString());
    setVisits(count);
  }, []);

  // Feedback button handler (demo only)
  const [feedbackSent, setFeedbackSent] = React.useState(false);
  const handleFeedback = () => {
    setFeedbackSent(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-yellow-400 text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-yellow-300">Frequently Asked Questions</h1>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">What is Ai Wilding and who is it for?</h2>
          <p className="mb-6 text-purple-100">Ai Wilding is a platform designed to help people navigate career transitions in the age of artificial intelligence. It’s for anyone seeking new opportunities, skills, or support as jobs evolve.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">How can I use this site to find new career opportunities?</h2>
          <p className="mb-6 text-purple-100">Explore our Resources and Events pages for job boards, training programs, and networking events. Success Stories offer inspiration from real people who have made successful transitions.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">What are “AI jobs” and why are they important?</h2>
          <p className="mb-6 text-purple-100">AI jobs are roles that involve working with, developing, or supporting artificial intelligence technologies. They’re important because AI is transforming many industries, creating new opportunities and changing skill requirements.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">How do I access training and upskilling resources?</h2>
          <p className="mb-6 text-purple-100">Visit the Resources page for links to online courses, certifications, and learning platforms. Many options are free or offer financial aid.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Where can I find financial aid or government support?</h2>
          <p className="mb-6 text-purple-100">The Resources page lists government programs, grants, and scholarships to help you fund your career transition or education.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">How do I join events or webinars?</h2>
          <p className="mb-6 text-purple-100">Check the Events page for upcoming career fairs, webinars, and conferences. Each listing includes a link to register or learn more.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">What should I do if I feel overwhelmed by career changes?</h2>
          <p className="mb-6 text-purple-100">You’re not alone. Ai Wilding offers resources for mental health and wellbeing, plus tips for managing stress and uncertainty. Reach out to support groups or mentors for guidance.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">How can I connect with mentors or support groups?</h2>
          <p className="mb-6 text-purple-100">Our Resources page includes links to mentorship programs and networking platforms. Joining events is also a great way to meet others in transition.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Is my personal data safe on this site?</h2>
          <p className="mb-6 text-purple-100">Ai Wilding values your privacy. We use secure technologies and never share your data without consent. See our Privacy page for details.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Who can I contact for more help?</h2>
          <p className="mb-6 text-purple-100">If you need more assistance, visit our Contact or Feedback page to reach out. We’re here to support your journey.</p>
        </section>
        {/* ...existing code... */}
        <div className="mt-12 text-center">
          <div className="mb-4 text-purple-100">Visitor count: <span className="font-bold text-yellow-200">{visits}</span></div>
          <button
            className="bg-yellow-300 text-purple-900 px-4 py-2 rounded shadow hover:bg-yellow-400 transition"
            onClick={handleFeedback}
            disabled={feedbackSent}
          >
            {feedbackSent ? 'Thank you for your feedback!' : 'Send Feedback'}
          </button>
        </div>
      </div>
    </main>
  );
}
