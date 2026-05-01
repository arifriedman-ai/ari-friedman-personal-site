import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const SectionImage = ({
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

export default function EMGHarmonicsPage() {
  return (
    <main className="min-h-screen bg-[#05070d] px-6 py-8 text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="fixed left-1/3 top-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="fixed right-20 top-32 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Nav */}
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

        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-widest text-cyan-300/70">
              EMG · MIDI · Accessibility · Music Technology
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              EMG Harmonics Captain
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Placeholder project summary. Add a concise explanation of the problem,
              your role, and the final system.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Arduino", "Python", "MIDI", "Ableton", "Signal Processing", "CAD"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <SectionImage
            src="/emg-hero.png"
            alt="EMG Harmonics project hero"
            label="Hero image / final poster / final system render"
          />
        </section>

        {/* Overview */}
        <section className="mt-28 grid gap-10 md:grid-cols-3">
          {[
            ["Problem", "Placeholder text explaining the problem this project addresses."],
            ["Goal", "Placeholder text explaining the intended user need and engineering goal."],
            ["My Role", "Placeholder text describing your personal contribution."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/60">{body}</p>
            </div>
          ))}
        </section>

        {/* System Architecture */}
        <section className="mt-28 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">System Architecture</h2>
            <p className="mt-4 text-white/60">
              Placeholder explanation of the full signal path from muscle activity to
              software control.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
              Muscle activation → EMG electrodes → amplifier / signal conditioning →
              microcontroller → Python software → MIDI output → Ableton
            </div>
          </div>

          <SectionImage
            src="/emg-system-architecture.png"
            alt="EMG system architecture"
            label="System architecture / electrical workflow image"
          />
        </section>

        {/* Software + Ableton */}
        <section className="mt-28">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Software + Ableton Integration
              </h2>
              <p className="mt-4 text-white/60">
                Placeholder explanation of how EMG signals were processed and routed into
                Ableton for music production control.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-white/60">
                <li>• Placeholder: EMG signal input</li>
                <li>• Placeholder: filtering / processing</li>
                <li>• Placeholder: MIDI output</li>
                <li>• Placeholder: Ableton parameter control</li>
              </ul>
            </div>

            <SectionImage
              src="/emg-ableton.png"
              alt="Ableton interface"
              label="Ableton / music production software integration"
            />
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <SectionImage
              src="/emg-python-gui.JPEG"
              alt="Python GUI"
              label="Python GUI / live signal visualization"
            />
            <SectionImage
              src="/emg-serum.png"
              alt="Serum software"
              label="Serum / plugin control example"
            />
          </div>
        </section>

        {/* Schematic Iterations */}
        <section className="mt-28">
          <h2 className="text-3xl font-semibold tracking-tight">Schematic Iterations</h2>
          <p className="mt-4 max-w-2xl text-white/60">
            Placeholder intro explaining how the electrical design evolved through three
            schematic iterations.
          </p>

          <div className="mt-10 space-y-14">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <SectionImage
                src="/emg-schematic-1.png"
                alt="Schematic iteration 1"
                label="Schematic Iteration 1"
              />
              <div>
                <h3 className="text-2xl font-semibold">Iteration 1</h3>
                <p className="mt-4 text-white/60">
                  Placeholder text: what this version attempted, what worked, and what
                  limitation led to the next iteration.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl font-semibold">Iteration 2</h3>
                <p className="mt-4 text-white/60">
                  Placeholder text: what changed, what improved, and what still needed
                  refinement.
                </p>
              </div>
              <SectionImage
                src="/emg-schematic-2.png"
                alt="Schematic iteration 2"
                label="Schematic Iteration 2"
              />
            </div>


          </div>
        </section>

        {/* Hardware / CAD */}
        <section className="mt-28 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Hardware / CAD Prototype</h2>
            <p className="mt-4 text-white/60">
              Placeholder explanation of the enclosure, electronics housing, attachment
              strategy, and prototype design decisions.
            </p>
          </div>

          <SectionImage
            src="/emg-cad.png"
            alt="CAD enclosure"
            label="CAD enclosure / prototype housing"
          />
        </section>

        {/* Outcome */}
        <section className="mt-28 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-semibold tracking-tight">Outcome / Impact</h2>
          <p className="mt-4 max-w-3xl text-white/60">
            Placeholder text describing what was demonstrated, what the final prototype
            achieved, and what future improvements would be made.
          </p>
        </section>

        {/* Lessons */}
        <section className="mt-28 pb-24">
          <h2 className="text-3xl font-semibold tracking-tight">What I Learned</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              "Signal Processing",
              "Hardware / Software Integration",
              "Accessibility-Centered Design",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  Placeholder reflection.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}