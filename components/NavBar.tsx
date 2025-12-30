"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [statesOpen, setStatesOpen] = useState(false);
  const [jobsOpen, setJobsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          AI Wilding
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-6 md:flex items-center">
          {/* STATES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setStatesOpen(true)}
            onMouseLeave={() => setStatesOpen(false)}
          >
            <button className="hover:text-blue-600">States ▾</button>

            {statesOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg border border-gray-200 z-20">
                <div className="flex flex-col p-2">
                  <Link
                    href="/states/texas"
                    className="px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    Texas
                  </Link>
                  <Link
                    href="/states/california"
                    className="px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    California
                  </Link>
                  <Link
                    href="/states/florida"
                    className="px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    Florida
                  </Link>
                  <Link
                    href="/states/new-york"
                    className="px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    New York
                  </Link>
                  <Link
                    href="/states"
                    className="px-3 py-2 text-blue-600 font-medium"
                  >
                    View All States →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* JOBS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setJobsOpen(true)}
            onMouseLeave={() => setJobsOpen(false)}
          >
            <button className="hover:text-blue-600">Jobs at Risk ▾</button>

            {jobsOpen && (
              <div className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg border border-gray-200 z-20">
                <div className="flex flex-col p-2">
                  <Link
                    href="/jobs/administrative-assistant"
                    className="px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    Administrative Assistant
                  </Link>
                  <Link
                    href="/jobs/cashier"
                    className="px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    Cashier
                  </Link>
                  <Link
                    href="/jobs/customer-service-rep"
                    className="px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    Customer Service Rep
                  </Link>
                  <Link
                    href="/jobs/truck-driver"
                    className="px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    Truck Driver
                  </Link>
                  <Link
                    href="/jobs"
                    className="px-3 py-2 text-blue-600 font-medium"
                  >
                    View All Jobs →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link href="/transitional-paths" className="hover:text-blue-600">
            Transitional Paths
          </Link>

          <Link href="/new-ai-jobs" className="hover:text-blue-600">
            New AI Jobs
          </Link>


        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <span className="text-gray-700">☰</span>
        </div>
      </div>
    </nav>
  );
}
