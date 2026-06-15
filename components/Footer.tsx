export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between"
    >
      <p>Designed and built by Ari Friedman using Next.js, React, TypeScript, and Tailwind CSS.</p>

      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:arifriedman@ufl.edu"
          className="transition hover:text-cyan-300"
        >
          arifriedman@ufl.edu
        </a>

        <a
          href="https://www.linkedin.com/in/ari-friedman-bme/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-cyan-300"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}