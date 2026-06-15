import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#05070d]/75 px-5 py-3 shadow-2xl backdrop-blur">
      <Link href="/#intro" className="text-sm font-medium tracking-wide text-white/80">
        Ari Friedman
      </Link>

      <div className="hidden gap-6 text-sm text-white/50 md:flex">
        <Link href="/#intro" className="transition hover:text-white">
          Intro
        </Link>

        <Link href="/#featured-work" className="transition hover:text-white">
          Featured Work
        </Link>

        <Link href="/#experience" className="transition hover:text-white">
          Experience
        </Link>

        <Link href="/#outside-work" className="transition hover:text-white">
          Outside Work
        </Link>

        <Link href="/#contact" className="transition hover:text-white">
          Contact
        </Link>
      </div>
    </nav>
  );
}