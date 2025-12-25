 "use client";

 import Link from "next/link";


 export default function Home() {
   return (
     <main className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#1a1a22] text-[#f2f2f7] flex flex-col items-center px-6 py-16 font-serif">
       
       {/* SANCTUARY GATE */}
       <h1 className="text-4xl md:text-6xl tracking-wide mb-4 text-center">
         Auralis Sanctuary
       </h1>

       <p className="max-w-xl text-center text-lg opacity-85 mb-12">
         Welcome to the Sanctuary — a creative space for music, art, blogs, and
         streaming. Explore, share, and connect with the community.
       </p>

       {/* CIRCULAR MENU */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
         <Link
           href="/showcase"
           className="w-32 h-32 rounded-full bg-[#1f1f29] hover:bg-[#2a2a35] flex items-center justify-center text-center text-sm transition"
         >
           Content Showcase
         </Link>

         <Link
           href="/email"
           className="w-32 h-32 rounded-full bg-[#1f1f29] hover:bg-[#2a2a35] flex items-center justify-center text-center text-sm transition"
         >
           Internal Email
         </Link>

         <Link
           href="/license"
           className="w-32 h-32 rounded-full bg-[#1f1f29] hover:bg-[#2a2a35] flex items-center justify-center text-center text-sm transition"
         >
           License Info
         </Link>

       </div>
     </main>
   );
}
