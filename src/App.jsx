import React from "react";
import { Mail, FileText, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// Single-file React component for a portfolio. Uses TailwindCSS utility classes.
// Replace placeholder text, images and links with your real content.

export default function Portfolio() {
  const projects = [
    // placeholders — we'll replace these when you provide project details
    {
      id: 1,
      title: "Project Title — Placeholder",
      summary: "Short one-line summary of the project and impact (metrics!).",
      tech: ["Python", "Pandas", "SQL"],
      repo: "#",
      live: "#",
    },
  ];

  const certifications = [
    { id: 1, name: "Certification Name (Placeholder)", issuer: "Issuer", date: "May 2025", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Yugan — Data Scientist</h1>
          <p className="text-sm text-gray-600">M.S. Management Data Analytics (May 2025) • Work authorization until Jul 2028</p>
        </div>
        <nav className="flex gap-3 items-center">
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#certifications" className="text-sm hover:underline">Certifications</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <a href="/resume.pdf" className="ml-3 inline-flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm">
            <FileText size={16} /> Resume
          </a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-10">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Hi — I'm Yugan.</h2>
            <p className="mt-4 text-gray-700">
              Data Scientist and recent M.S. (Management Data Analytics). I build reproducible data pipelines, clean and model data, and deliver
              dashboards and machine learning prototypes that drive business decisions. Experienced with data engineering for gaming,
              fintech and restaurant operations (ZBD, CrunchTime).
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-4 py-2 rounded-lg border text-sm">View projects</a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm">Contact me</a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <a href="#" aria-label="GitHub" className="inline-flex items-center gap-2"><Github size={16} /> github</a>
              <a href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2"><Linkedin size={16} /> linkedin</a>
            </div>
          </motion.div>

          <motion.div className="w-full h-56 md:h-72 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-md flex items-center justify-center" initial={{ scale: 0.98 }} animate={{ scale: 1 }}>
            {/* Placeholder for photo or hero illustration */}
            <div className="text-center text-sm text-gray-500">Your photo or a data-visual illustration goes here</div>
          </motion.div>
        </section>

        {/* Skills + Quick Stats */}
        <section className="grid sm:grid-cols-3 gap-4 mt-8">
          <div className="p-4 rounded-xl border bg-white">
            <h3 className="font-semibold">Skills</h3>
            <p className="text-sm text-gray-600 mt-2">Python · SQL · Pandas · NumPy · scikit-learn · Snowflake · Airflow · DBT · Tableau · PowerBI</p>
          </div>
          <div className="p-4 rounded-xl border bg-white">
            <h3 className="font-semibold">Experience</h3>
            <p className="text-sm text-gray-600 mt-2">ZBD (Gaming & Fintech), CrunchTime (Restaurant ops). Data engineering & analytics projects.</p>
          </div>
          <div className="p-4 rounded-xl border bg-white">
            <h3 className="font-semibold">Education</h3>
            <p className="text-sm text-gray-600 mt-2">M.S. Management Data Analytics — Graduated May 2025</p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-bold">Selected Projects</h3>
          <p className="text-sm text-gray-600 mt-2">(Placeholders — we'll populate with real projects, writeups, code links & metrics.)</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.id} className="p-4 border rounded-xl bg-white shadow-sm">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{p.summary}</p>
                <div className="mt-3 text-xs text-gray-500">Tech: {p.tech.join(", ")}</div>
                <div className="mt-3 flex gap-3">
                  <a href={p.repo} className="text-sm underline">Code</a>
                  <a href={p.live} className="text-sm underline">Live</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="mt-12">
          <h3 className="text-2xl font-bold">Certifications</h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {certifications.map((c) => (
              <li key={c.id} className="p-3 border rounded-lg bg-white">
                <div className="font-medium">{c.name}</div>
                <div className="text-sm text-gray-600">{c.issuer} — {c.date}</div>
                <div className="mt-2"><a href={c.link} className="text-sm underline">View credential</a></div>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12">
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="text-sm text-gray-600 mt-2">I'm currently open to data science / analytics roles and freelance projects. Prefer email for quick replies.</p>

          <form className="mt-6 grid sm:grid-cols-2 gap-4 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
            <input className="p-3 border rounded-lg" placeholder="Your name" />
            <input className="p-3 border rounded-lg" placeholder="Your email" />
            <textarea className="p-3 border rounded-lg sm:col-span-2" rows={4} placeholder="Message (brief)" />
            <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white">Send <Mail size={16} /></button>
          </form>

          <div className="mt-6 text-sm text-gray-600">Or email me directly at <a href="mailto:your.email@example.com" className="underline">your.email@example.com</a></div>
        </section>

        {/* Footer */}
        <footer className="mt-16 py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Yugan — Built with React & Tailwind</footer>
      </main>
    </div>
  );
}
