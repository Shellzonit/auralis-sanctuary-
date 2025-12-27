"use client";
import { useEffect, useState } from "react";


export default function AuthPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-white px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-amber-200">
        <h1 className="text-3xl font-extrabold mb-6 text-rose-700 text-center">
          Auth Page
        </h1>
        <div className="text-neutral-700 text-center">
          Authentication is currently disabled.<br />
          Please contact the site admin for access.
        </div>
      </div>
    </main>
  );
}