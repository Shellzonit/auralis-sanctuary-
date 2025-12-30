import Link from 'next/link';
import Image from 'next/image';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-yellow-400 text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-yellow-300">Events & Webinars</h1>
        <div className="flex flex-col items-center mb-8">
          <Image src="/photo2.jpg" alt="Events and Webinars" width={420} height={260} className="rounded-xl shadow border-4 border-yellow-300 object-cover mb-4" />
        </div>
        <p className="mb-8 text-lg text-purple-100 text-center">Discover upcoming career fairs, webinars, and networking opportunities to help you transition and grow in the AI era.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Upcoming Career Fairs & Webinars</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.careereco.com/Fair/UpcomingFairs" target="_blank" rel="noopener" className="text-yellow-200 underline">CareerEco Virtual Fairs</a></li>
            <li><a href="https://www.eventbrite.com/d/online/career-fair/" target="_blank" rel="noopener" className="text-yellow-200 underline">Eventbrite: Online Career Fairs</a></li>
            <li><a href="https://www.linkedin.com/events/" target="_blank" rel="noopener" className="text-yellow-200 underline">LinkedIn Events</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Featured Virtual Events</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.techjobsfair.com/" target="_blank" rel="noopener" className="text-yellow-200 underline">Tech Jobs Fair</a></li>
            <li><a href="https://www.womenwhocode.com/events" target="_blank" rel="noopener" className="text-yellow-200 underline">Women Who Code Events</a></li>
            <li><a href="https://www.meetup.com/topics/career/" target="_blank" rel="noopener" className="text-yellow-200 underline">Meetup: Career Events</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">AI & Tech Industry Conferences</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.aiconference.com/" target="_blank" rel="noopener" className="text-yellow-200 underline">AI Conference</a></li>
            <li><a href="https://www.techsummit.ai/" target="_blank" rel="noopener" className="text-yellow-200 underline">Tech Summit AI</a></li>
            <li><a href="https://www.siggraph.org/" target="_blank" rel="noopener" className="text-yellow-200 underline">SIGGRAPH</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Local Networking Meetups</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.meetup.com/" target="_blank" rel="noopener" className="text-yellow-200 underline">Meetup: Find Local Events</a></li>
            <li><a href="https://www.eventbrite.com/d/near-me/networking/" target="_blank" rel="noopener" className="text-yellow-200 underline">Eventbrite: Local Networking</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Tips for Finding & Attending Events</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Check event platforms regularly for new opportunities.</li>
            <li>Prepare your resume and LinkedIn profile before attending.</li>
            <li>Engage with speakers and attendees for networking.</li>
            <li>Follow up with connections after the event.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
