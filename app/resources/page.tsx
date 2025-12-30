import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-yellow-400 text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-yellow-300">Resources for Career Transition</h1>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Job Boards & Career Sites</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.indeed.com" target="_blank" rel="noopener" className="text-yellow-200 underline">Indeed</a></li>
            <li><a href="https://www.linkedin.com/jobs" target="_blank" rel="noopener" className="text-yellow-200 underline">LinkedIn Jobs</a></li>
            <li><a href="https://www.flexjobs.com" target="_blank" rel="noopener" className="text-yellow-200 underline">FlexJobs</a></li>
            <li><a href="https://www.remoteworkhub.com" target="_blank" rel="noopener" className="text-yellow-200 underline">Remote Work Hub</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Training & Upskilling</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.coursera.org" target="_blank" rel="noopener" className="text-yellow-200 underline">Coursera</a></li>
            <li><a href="https://www.edx.org" target="_blank" rel="noopener" className="text-yellow-200 underline">edX</a></li>
            <li><a href="https://www.udemy.com" target="_blank" rel="noopener" className="text-yellow-200 underline">Udemy</a></li>
            <li><a href="https://grow.google" target="_blank" rel="noopener" className="text-yellow-200 underline">Google Career Certificates</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Government Support</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.careeronestop.org" target="_blank" rel="noopener" className="text-yellow-200 underline">CareerOneStop (US)</a></li>
            <li><a href="https://www.gov.uk/find-a-job" target="_blank" rel="noopener" className="text-yellow-200 underline">Find a Job (UK)</a></li>
            <li><a href="https://www.canada.ca/en/services/jobs.html" target="_blank" rel="noopener" className="text-yellow-200 underline">Canada Job Bank</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Financial Aid & Grants</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://studentaid.gov" target="_blank" rel="noopener" className="text-yellow-200 underline">Federal Student Aid (US)</a></li>
            <li><a href="https://www.scholarships.com" target="_blank" rel="noopener" className="text-yellow-200 underline">Scholarships.com</a></li>
            <li><a href="https://www.fastweb.com" target="_blank" rel="noopener" className="text-yellow-200 underline">Fastweb</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">News & Trends</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.forbes.com/careers/" target="_blank" rel="noopener" className="text-yellow-200 underline">Forbes Careers</a></li>
            <li><a href="https://www.linkedin.com/pulse/" target="_blank" rel="noopener" className="text-yellow-200 underline">LinkedIn Pulse</a></li>
            <li><a href="https://www.hbr.org" target="_blank" rel="noopener" className="text-yellow-200 underline">Harvard Business Review</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Skill Assessment Tools</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.glassdoor.com/Salaries/know-your-worth.htm" target="_blank" rel="noopener" className="text-yellow-200 underline">Glassdoor Know Your Worth</a></li>
            <li><a href="https://www.skillsyouneed.com" target="_blank" rel="noopener" className="text-yellow-200 underline">SkillsYouNeed</a></li>
            <li><a href="https://www.123test.com" target="_blank" rel="noopener" className="text-yellow-200 underline">123test</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Mentorship & Networking</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.mentoring.org" target="_blank" rel="noopener" className="text-yellow-200 underline">Mentoring.org</a></li>
            <li><a href="https://www.meetup.com" target="_blank" rel="noopener" className="text-yellow-200 underline">Meetup</a></li>
            <li><a href="https://www.linkedin.com/groups/" target="_blank" rel="noopener" className="text-yellow-200 underline">LinkedIn Groups</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Mental Health & Wellbeing</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.betterhelp.com" target="_blank" rel="noopener" className="text-yellow-200 underline">BetterHelp</a></li>
            <li><a href="https://www.headspace.com" target="_blank" rel="noopener" className="text-yellow-200 underline">Headspace</a></li>
            <li><a href="https://www.mhanational.org" target="_blank" rel="noopener" className="text-yellow-200 underline">Mental Health America</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Resume & Interview Help</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.resumeworded.com" target="_blank" rel="noopener" className="text-yellow-200 underline">Resume Worded</a></li>
            <li><a href="https://www.interviewbit.com" target="_blank" rel="noopener" className="text-yellow-200 underline">InterviewBit</a></li>
            <li><a href="https://www.themuse.com/advice/interview-questions-and-answers" target="_blank" rel="noopener" className="text-yellow-200 underline">The Muse: Interview Q&A</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Events & Webinars</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.eventbrite.com" target="_blank" rel="noopener" className="text-yellow-200 underline">Eventbrite</a></li>
            <li><a href="https://www.careereco.com" target="_blank" rel="noopener" className="text-yellow-200 underline">CareerEco Virtual Fairs</a></li>
            <li><a href="https://www.linkedin.com/events/" target="_blank" rel="noopener" className="text-yellow-200 underline">LinkedIn Events</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
