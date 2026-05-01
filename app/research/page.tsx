import Link from "next/link";

export default function ResearchPage() {
  const research = [
    {
      id: "hnl",
      title: "Human Neuromechanics Lab (HNL)",
      description:
        "Biomechanics and neural control of human movement. Focus on gait analysis, force data, and rehabilitation outcomes.",
      date: "2025 – Present",
      href: "/research/hnl",
      image: "/hnl.png",
    },
    {
      id: "research-1",
      title: "Research Project",
      description: "Placeholder description for future research work.",
      date: "Coming Soon",
      href: "#",
      image: "/placeholder.png",
    },
    {
      id: "research-2",
      title: "Research Project",
      description: "Placeholder description for future research work.",
      date: "Coming Soon",
      href: "#",
      image: "/placeholder.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#05070d] text-white px-6 py-16">
      
      {/* NAV */}
      <nav className="mx-auto mb-16 flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-sm font-medium text-white/80 hover:text-white">
          Ari Friedman
        </Link>

        <div className="hidden gap-6 text-sm text-white/50 md:flex">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/research" className="text-white">Research</Link>
          <Link href="/leadership" className="hover:text-white">Leadership</Link>
          <Link href="/#contact" className="hover:text-white">Contact</Link>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <h1 className="text-4xl font-semibold tracking-tight">Research</h1>
        <p className="mt-3 text-white/60">
          Lab experience and research projects focused on biomechanics, systems design, and applied engineering.
        </p>

        {/* GRID */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {research.map((item) => (
            <Link key={item.id} href={item.href} className="group block">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10">
                
                {/* IMAGE */}
                <div className="mb-4 h-40 w-full overflow-hidden rounded-xl bg-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Date */}
                <p className="text-xs uppercase tracking-widest text-white/40">
                  {item.date}
                </p>

                {/* Title */}
                <h2 className="mt-2 text-lg font-semibold">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-white/60">
                  {item.description}
                </p>

                {/* CTA */}
                <p className="mt-4 text-sm text-white/50 group-hover:text-white">
                  View Details →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}