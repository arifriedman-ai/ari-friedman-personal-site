import Link from "next/link";

export default function LeadershipPage() {
  const roles = [
    {
      title: "Director of Recruitment",
      organization: "Dream Team Engineering",
      dates: "2026–Present",
      image: "/recruitment.png",
      blurb:
        "...placeholder",
    },
    {
      title: "Research & Development Captain",
      organization: "General Relief in Prosthetics",
      dates: "2025–2026",
      image: "/grip.png",
      blurb:
        "Guided research and development work for prosthetic design projects, supporting technical progress and team coordination.",
    },
    {
      title: "Director of Shadowing",
      organization: "Dream Team Engineering",
      dates: "2025–2026",
      image: "/shadowing.JPEG",
      blurb:
        "Directed shadowing initiatives to help students explore technical teams and understand project roles before joining.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#05070d] px-6 py-16 text-white">
      <nav className="mx-auto mb-16 flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-sm font-medium text-white/80 hover:text-white">
          Ari Friedman
        </Link>

        <div className="hidden gap-6 text-sm text-white/50 md:flex">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/research" className="hover:text-white">Research</Link>
          <Link href="/leadership" className="text-white">Leadership</Link>
          <Link href="/#contact" className="hover:text-white">Contact</Link>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold tracking-tight">Leadership</h1>
        <p className="mt-3 max-w-2xl text-white/60">
          A brief overview of leadership roles focused on recruitment, technical development,
          and student engagement.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-5 h-48 w-full overflow-hidden rounded-xl bg-white/10">
                <img
                  src={role.image}
                  alt={role.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="text-xs uppercase tracking-widest text-cyan-300/70">
                {role.dates}
              </p>

              <h2 className="mt-2 text-xl font-semibold">{role.title}</h2>

              <p className="mt-1 text-sm text-white/50">{role.organization}</p>

              <p className="mt-4 text-sm leading-7 text-white/60">{role.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}