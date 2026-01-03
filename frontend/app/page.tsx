"use client";

import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "AI, ML & Data Science",
    desc: "ML for risk modeling, anomaly & change detection, interpretable ML (SHAP), decision support.",
    chips: ["GeoAI", "GIS", "LLM", "ML & DL", "SHAP"],
    accent: "from-slate-50 to-blue-50",
    dot: "bg-blue-600",
  },
  {
    title: "ML Engineering",
    desc: "Train, debug, and deploy ML systems with clean APIs, reproducible pipelines, and cloud-ready packaging.",
    chips: ["Python", "FastAPI", "Docker", "AWS"],
    accent: "from-slate-50 to-indigo-50",
    dot: "bg-indigo-600",
  },
  {
    title: "Data Products & Analytics",
    desc: "ETL → dashboards → insights. I build reliable pipelines and KPI systems that drive real decisions.",
    chips: ["SQL", "ETL", "Tableau/BI", "A/B Thinking"],
    accent: "from-slate-50 to-emerald-50",
    dot: "bg-emerald-600",
  },
];

const recruiterPrompts = [
  "What roles is Gazali open to right now?",
  "Summarize Gazali’s strongest projects in 30 seconds.",
  "Ask about Gazali’s GeoAI / landslide work.",
  "Ask about Gazali’s ML deployment experience.",
];

export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden />
              AI Engineer • Machine Learning • GeoAI
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              I build production-ready AI systems — from GeoAI risk models to LLM-powered assistants.
            </h1>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              I’m <span className="font-semibold text-slate-800">Gazal (full name: Gazali Agboola)</span>, a PhD
              candidate and ML engineer. I design, train, and deploy models with strong engineering hygiene — clear APIs,
              reproducible pipelines, and measurable impact.
            </p>

            {/* CTA ROW */}
            <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-sm hover:opacity-95 transition"
              >
                View Resume
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/70 px-5 py-3 font-semibold text-slate-900 hover:bg-white transition"
              >
                Featured Portfolio
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/70 px-5 py-3 font-semibold text-slate-900 hover:bg-white transition"
              >
                Contact
              </a>
            </div>

            {/* CONTACT LINKS */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-700">
              <span className="flex items-center gap-2">
                <span aria-hidden>📧</span>
                <a href="mailto:agboolagazal@gmail.com" className="text-blue-700 hover:underline">
                  agboolagazal@gmail.com
                </a>
              </span>

              <span className="flex items-center gap-2">
                <GitHubIcon className="h-4 w-4 text-slate-800" />
                <a
                  href="https://github.com/gazmaths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  GitHub
                </a>
              </span>

              <span className="flex items-center gap-2">
                <LinkedInIcon className="h-4 w-4 text-[#0A66C2]" />
                <a
                  href="https://www.linkedin.com/in/gazal-agboola-351b44b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  LinkedIn
                </a>
              </span>
            </div>

            {/* MINI PROOF / POSITIONING */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { k: "Focus", v: "Applied AI + GeoAI", dot: "bg-blue-600" },
                { k: "Strength", v: "End-to-end delivery", dot: "bg-indigo-600" },
                { k: "Style", v: "Measurable impact", dot: "bg-emerald-600" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur"
                >
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${x.dot}`} aria-hidden />
                    <p className="text-sm text-slate-500">{x.k}</p>
                  </div>
                  <p className="mt-1 font-semibold text-slate-900">{x.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PROFILE CARD + RECRUITER MODE */}
          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur">
              <div className="p-6">
                <div className="flex items-start gap-5">
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <Image src="/profile.jpg" alt="Gazali Agboola" fill className="object-cover" priority />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-bold text-slate-900">Gazali Agboola</h2>
                    <p className="text-slate-700">AI Engineer • ML Engineer • Data Scientist • GeoAI Researcher</p>

                    {/* Location + Map + Email */}
                    <div className="mt-3 space-y-3 text-sm text-slate-600">
                      <span className="flex items-center gap-2">
                        <span aria-hidden>📍</span>
                        <a
                          href="https://www.google.com/maps?q=Greensboro,+NC"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:underline"
                        >
                          Greensboro, NC
                        </a>
                      </span>

                      <div className="w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
                        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600" />
                        <iframe
                          title="Greensboro map"
                          src="https://www.google.com/maps?q=Greensboro,+NC&output=embed"
                          width="100%"
                          height="220"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>

                      <span className="flex items-center gap-2">
                        <span aria-hidden>📧</span>
                        <a href="mailto:goagboola@aggies.ncat.edu" className="text-blue-700 hover:underline">
                          goagboola@aggies.ncat.edu
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-50 p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Recruiter mode (use the Digital Twin)</p>
                  <p className="text-sm text-slate-600 mb-3">Try one of these prompts in the chat panel:</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {recruiterPrompts.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-0.5 text-blue-700" aria-hidden>
                          →
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://github.com/gazmaths?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/70 px-4 py-2.5 font-semibold text-slate-900 hover:bg-white transition"
                  >
                    Repositories
                  </a>

                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/70 px-4 py-2.5 font-semibold text-slate-900 hover:bg-white transition"
                  >
                    Portfolio
                  </Link>
                </div>

                {/* OPTIONAL: If your chatbot UI lives here, use this container style.
                    - Shorter (no scrolling to reach input)
                    - Slightly wider
                    Replace <YourChatComponent /> with your real component.
                */}
                {/*
                <div className="mt-6 w-full lg:w-[560px] xl:w-[620px]">
                  <div className="h-[420px] max-h-[420px] rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur overflow-hidden">
                    <div className="h-[calc(420px-56px)] overflow-y-auto p-4">
                      <YourChatComponent />
                    </div>
                    <div className="h-14 border-t border-slate-200 bg-white/80 px-3 flex items-center">
                      <YourChatInput />
                    </div>
                  </div>
                </div>
                */}
              </div>
            </div>
          </aside>
        </section>

        {/* VALUE SECTIONS */}
        <section className="mt-12">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">What I deliver</h2>
              <p className="text-slate-600 mt-2">
                I combine research-grade rigor with production engineering — so models don’t just look good, they ship.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur overflow-hidden"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${h.accent}`} />
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${h.dot}`} aria-hidden />
                    <h3 className="text-lg font-bold text-slate-900">{h.title}</h3>
                  </div>
                  <p className="mt-2 text-slate-600 leading-relaxed">{h.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {h.chips.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED LINKS */}
        <section className="mt-12">
          <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600" />
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-900">Quick proof</h2>
              <p className="text-slate-600 mt-2">If you only have 30 seconds, start here.</p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  href="/resume"
                  className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 p-4 hover:from-slate-50 hover:to-blue-100 transition"
                >
                  <p className="font-semibold text-slate-900">Resume</p>
                  <p className="text-sm text-slate-600 mt-1">Experience, skills, and highlights.</p>
                </Link>

                <Link
                  href="/portfolio"
                  className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-50 p-4 hover:from-slate-50 hover:to-indigo-100 transition"
                >
                  <p className="font-semibold text-slate-900">Portfolio</p>
                  <p className="text-sm text-slate-600 mt-1">End-to-end projects with demos.</p>
                </Link>

                <a
                  href="https://github.com/gazmaths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-emerald-50 p-4 hover:from-slate-50 hover:to-emerald-100 transition"
                >
                  <p className="font-semibold text-slate-900">GitHub</p>
                  <p className="text-sm text-slate-600 mt-1">Code, repos, and contributions.</p>
                </a>
              </div>

              {/* Removed: recent repositories listing */}
              <div className="mt-6">
                <a
                  href="https://github.com/gazmaths?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-700 hover:underline"
                >
                  View repositories on GitHub →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12">
          <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur p-8 overflow-hidden">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-slate-900 text-center">Let’s talk</h2>
              <p className="text-center text-slate-600 mt-2">
                Recruiting, collaborations, research, or product ideas — I reply fast.
              </p>

              <form action="https://formspree.io/f/mwplnnrp" method="POST" className="mt-6 space-y-4">
                <div>
                  <label htmlFor="email" className="block font-semibold text-slate-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold text-slate-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell me what role you’re hiring for, or what you’d like to build…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 font-bold text-white shadow-sm hover:opacity-95 transition"
                >
                  ✉️ Send Message
                </button>

                <p className="text-xs text-slate-500 text-center pt-1">
                  Prefer email?{" "}
                  <a className="text-blue-700 hover:underline" href="mailto:agboolagazal@gmail.com">
                    agboolagazal@gmail.com
                  </a>
                </p>
              </form>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Gazali Agboola • AI / ML / GeoAI</p>
        </footer>
      </div>
    </main>
  );
}

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.38-3.88-1.38-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56 4.56-1.53 7.85-5.85 7.85-10.95C23.5 5.74 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.368-1.85 3.6 0 4.268 2.369 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
