import Link from "next/link";
import { FiArrowLeft, FiDownload } from "react-icons/fi";

const ImageCard = ({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
    <div className="overflow-hidden rounded-xl bg-white/10">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
    <p className="mt-3 text-xs text-white/40">{label}</p>
  </div>
);

export default function LiverTransplantPage() {
  return (
    <main className="min-h-screen bg-[#05070d] px-6 py-8 text-white">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="fixed left-1/3 top-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="fixed right-20 top-32 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <nav className="mx-auto mb-16 flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-sm font-medium text-white/80 hover:text-white">
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
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"
        >
          <FiArrowLeft />
          Back to Projects
        </Link>

        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-widest text-cyan-300/70">
              Surgical Training · CAD · 3D Printing · Fluid Simulation
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Liver Transplant Training Device
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              A low-cost, reusable surgical box model designed to simulate liver transplant
              vasculature and fluid flow for resident training.
            </p>

            <a
              href="/liver-poster.pdf"
              download
              className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
            >
              <FiDownload className="mr-2 h-4 w-4" />
              Download Poster PDF
            </a>
          </div>

          <ImageCard
            src="/liver-full-model.JPEG"
            alt="Full liver transplant training model"
            label="Full surgical box model"
          />
        </section>

        {/* OVERVIEW */}
        <section className="mt-28 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Problem</h2>
            <p className="mt-3 text-sm leading-7 text-white/60">
              Surgical residents need realistic ways to practice liver transplant procedures
              before entering the operating room, but existing training models can be costly,
              limited, or lack reusable fluid-flow feedback.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Solution</h2>
            <p className="mt-3 text-sm leading-7 text-white/60">
              Our team designed a reusable box model that represents liver anatomy,
              vascular pathways, and fluid flow involved in a bicaval liver transplant.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Impact</h2>
            <p className="mt-3 text-sm leading-7 text-white/60">
              The prototype provides a low-cost training platform for practicing surgical
              workflow, vessel handling, and anatomical orientation.
            </p>
          </div>
        </section>

        {/* SYSTEM DESIGN */}
        <section className="mt-28 grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">System Design</h2>
            <p className="mt-4 leading-8 text-white/60">
              The model includes a two-chamber housing system, molded organ models,
              tubing for vascular pathways, and a fluid-flow system that mimics key vessels
              including the hepatic artery, portal vein, bile duct, and inferior vena cava.
            </p>
            <p className="mt-4 leading-8 text-white/60">
              The design balances anatomical realism with manufacturability, durability,
              and low-cost construction.
            </p>
          </div>

          <ImageCard
            src="/liver-schematic.png"
            alt="Liver transplant model schematic"
            label="Schematic / system layout"
          />
        </section>

        {/* PROTOTYPE */}
        <section className="mt-28 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <ImageCard
            src="/liver-first-prototype.JPG"
            alt="First liver transplant prototype"
            label="First prototype"
          />

          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Prototype Development</h2>
            <p className="mt-4 leading-8 text-white/60">
              The first prototype helped validate the overall layout, organ placement,
              vessel routing, and box structure before refinement into the final training
              model.
            </p>
            <p className="mt-4 leading-8 text-white/60">
              Iterating through physical prototypes allowed the team to test how the model
              would be assembled, accessed, and used during simulated surgical practice.
            </p>
          </div>
        </section>

        {/* CAD CONTRIBUTIONS */}
        <section className="mt-28">
          <h2 className="text-3xl font-semibold tracking-tight">CAD + Molded Organ Models</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/60">
            I contributed to the CAD and physical modeling of abdominal anatomy, including
            molded components for the duodenum and stomach used in the training setup.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <ImageCard
              src="/liver-duodenum-cad.png"
              alt="Duodenum CAD model"
              label="Duodenum CAD / mold design"
            />

            <ImageCard
              src="/liver-stomach-cad.JPEG"
              alt="Stomach CAD model"
              label="Stomach CAD / mold design"
            />
          </div>
        </section>

        {/* RESULTS */}
        <section className="mt-28 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-semibold tracking-tight">Result</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/60">
            The final device demonstrated a functional, low-cost surgical training model
            that replicated key liver transplant structures and fluid-flow behavior. The
            model was designed to be reusable, repairable, and practical for resident
            training.
          </p>
        </section>

        {/* TAKEAWAYS */}
        <section className="mt-28 grid gap-8 pb-24 md:grid-cols-3">
          {[
            {
              title: "Clinical Design",
              body: "Translated a surgical training need into a physical simulation model.",
            },
            {
              title: "Rapid Prototyping",
              body: "Used CAD, molding, 3D printing, and physical iteration to improve the device.",
            },
            {
              title: "Systems Thinking",
              body: "Integrated housing, organ models, tubing, flow, and usability into one training platform.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{item.body}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}