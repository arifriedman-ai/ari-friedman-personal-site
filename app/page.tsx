import { FiDownload, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <section className="relative min-h-screen overflow-hidden px-6 py-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-20 top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between">
          <div className="text-sm font-medium tracking-wide text-white/80">
            Ari Friedman
          </div>

          <div className="hidden gap-6 text-sm text-white/50 md:flex">
            <Link href="/projects" className="hover:text-white">
  Projects
</Link>
            <a href="/research" className="hover:text-white">Research</a>
            <a href="/leadership" className="hover:text-white">Leadership</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100/80 backdrop-blur">
              Biomedical Engineering · Business · Systems Design
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
              Placeholder headline for your personal website.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Placeholder description. You can later add a short summary about your engineering work, research, leadership, and recruiting interests.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
  href="/projects"
  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-100"
>
  View Projects
</Link>

              <a
                href="/Ari-Friedman-Resume.pdf"
                download
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                <FiDownload className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-white/60">
              <a
                href="mailto:arifriedman@ufl.edu"
                className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-300"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/ari-friedman-bme/"
                target="_blank"
                className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:-translate-y-1 hover:border-blue-300/50 hover:text-blue-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="/Ari-Friedman-Resume.pdf"
                download
                className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-300"
                aria-label="Download resume"
              >
                <FiDownload className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b1020] p-3 shadow-2xl">
                <div className="aspect-[4/5] w-72 overflow-hidden rounded-[1.5rem] bg-black md:w-80">
                  <img
                    src="/headshot.JPEG"
                    alt="Ari Friedman headshot"
                    className="h-full w-full object-cover opacity-100"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#0b1020]/80 p-4 text-sm shadow-lg backdrop-blur">
                <p className="font-medium text-white">Placeholder status</p>
                <p className="text-white/50">Placeholder roles · industries · interests</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}