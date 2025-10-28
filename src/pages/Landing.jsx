import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="container-max px-4 py-8">
      <section className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 p-8">
        {/* Decorative circle (non-blocking) */}
        <div className="absolute -top-16 -right-16 w-48 h-48 opacity-80 pointer-events-none">
          <img
            src="/assets/circle-dark.svg"
            alt="decorative circle"
            className="w-full h-full"
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              TicketApp — Track & Resolve
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl">
              Manage issues, track progress, and resolve tickets — a simple,
              dark-themed ticket manager with authentication and full CRUD.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                to="/auth/login"
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white transition"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="px-4 py-2 rounded-md border border-slate-700 hover:bg-slate-800 text-slate-200 transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-xl bg-slate-800 p-6 shadow-lg">
              <h3 className="font-semibold text-white">Features</h3>
              <ul className="mt-3 space-y-2 text-slate-300">
                <li>• Protected routes with simulated auth</li>
                <li>• Create, update, delete tickets</li>
                <li>• Responsive and accessible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Wave background (non-blocking) */}
        <div className="absolute left-0 right-0 bottom-0 pointer-events-none z-0">
          <img
            src="/assets/wave-dark.svg"
            alt="wave"
            className="w-full h-28 object-cover"
          />
        </div>
      </section>

      <section className="mt-8 grid md:grid-cols-3 gap-6 relative z-10">
        <div className="rounded-2xl bg-slate-800 p-5 shadow text-white">
          <h4 className="font-semibold">Fast setup</h4>
          <p className="text-slate-300 mt-2">
            Zero backend required — runs in the browser.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-800 p-5 shadow text-white">
          <h4 className="font-semibold">Secure simulation</h4>
          <p className="text-slate-300 mt-2">
            Session token in localStorage, protected routes and logout.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-800 p-5 shadow text-white">
          <h4 className="font-semibold">Accessible</h4>
          <p className="text-slate-300 mt-2">
            Semantic markup and visible focus states.
          </p>
        </div>
      </section>
    </main>
  );
}
