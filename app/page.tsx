import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F7F5F2] text-[#222]">
      <section className="flex flex-col justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
          alt="AI"
          className="rounded-2xl shadow-xl object-cover w-[500px] h-[340px] mb-8"
        />
        <h1 className="text-5xl font-extrabold text-[#4B2E83] mb-4 text-center">Welcome to AI Wilding</h1>
        <p className="text-xl text-[#444] text-center max-w-xl">
          Navigating the future of work and AI—resources, insights, and support for everyone.
        </p>
      </section>
    </main>
  );
}



