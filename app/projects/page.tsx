import Link from "next/link";

export default function Projects() {
  const projects = [
    {
       title: "EMG Harmonics Captain",
        href: "/projects/emg-harmonics-captain",
        description: "Placeholder description.",
        tag: "Signal Processing · Embedded Systems",
        context: "Project",
        image: "/emg.png",
    },
    {
      title: "Liver Transplant Training Device",
      href: "/projects/liver-transplant-training-device",
      description: "Placeholder description.",
      tag: "Medical Device · CAD",
      context: "Project",
      image: "/liver.JPEG",
    },
    {
      title: "Oxygen Mask Fixation Sensor",
      href: "/projects/oxygen-mask-fixation-sensor",
      description: "Placeholder description.",
      tag: "Sensors · Bioengineering",
      context: "Project",
      image: "/mask.JPEG",
    },
    {
      title: "Quinn Lift — 48 Hour Designathon",
      href: "https://arifriedman-ai.github.io/quinlift-site/index.html#hero",
      description: "48-hour designathon project focused on rapid prototyping and system design.",
      tag: "Rapid Design · Team Project",
      context: "Designathon",
      external: true,
      image: "/quinn.JPEG",},
    {
      title: "EKG Sensor",
      href: "/projects/ekg-sensor",
      description: "Placeholder description.",
      tag: "Bioelectronics · Circuits",
      context: "Project",
      image: "/ekgme.JPEG",
    },
    {
      title: "Research",
      href: "/research",
      description: "Further projects and work outlined in the research section.",
      tag: "Biomechanics · Analysis",
      context: "Research",
    },
  ];

  return (
    <main className="min-h-screen bg-[#05070d] text-white px-6 py-16">
      <nav className="relative z-10 mx-auto mb-16 flex max-w-6xl items-center justify-between">
  <Link href="/" className="text-sm font-medium tracking-wide text-white/80 hover:text-white">
    Ari Friedman
  </Link>

  <div className="hidden gap-6 text-sm text-white/50 md:flex">
    <Link href="/" className="hover:text-white">Home</Link>
    <Link href="/projects" className="hover:text-white">Projects</Link>
    <Link href="/research" className="hover:text-white">Research</Link>
    <Link href="/leadership" className="hover:text-white">Leadership</Link>
    <Link href="/#contact" className="hover:text-white">Contact</Link>
  </div>
</nav>
      
      
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 text-white/60">
          A selection of engineering, research, and design work. Click each card to explore more.
        </p>

        {/* Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
  const CardContent = (
    <div className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10">
      
      <div className="mb-4 h-40 w-full overflow-hidden rounded-xl bg-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      <p className="text-xs uppercase tracking-widest text-white/40">
        {project.context}
      </p>

      <h2 className="mt-1 text-lg font-semibold">
        {project.title}
      </h2>

      <p className="mt-2 text-sm text-white/60">
        {project.description}
      </p>

      <p className="mt-3 text-xs text-cyan-300/70">
        {project.tag}
      </p>

      <p className="mt-4 text-sm text-white/50 group-hover:text-white">
        {project.external ? "View Project ↗" : "View Project →"}
      </p>
    </div>
  );

  return project.external ? (
    <a
      key={project.title}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {CardContent}
    </a>
  ) : (
    <Link key={project.title} href={project.href} className="block">
      {CardContent}
    </Link>
  );
})}
        </div>
      </div>
    </main>
  );
}