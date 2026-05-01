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

export default function OxygenMaskPage() {
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
              Sensors · Analog Circuits · Arduino · Clinical Design
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Oxygen Mask Fixation Sensor
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              A real-time detection system designed to identify improper oxygen mask usage
              using pressure sensing, strap tension detection, analog signal conditioning,
              and embedded alert logic.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Arduino", "AD620", "LM311", "Wheatstone Bridge", "Pressure Sensor", "Strain Sensor"].map(
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
            src="/oxygen-hero.JPEG"
            alt="Oxygen mask detection project"
            label="Project overview / final system image"
          />
        </section>

        {/* PROBLEM */}
        <section className="mt-28 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Clinical Problem</h2>
            <p className="mt-4 leading-8 text-white/60">
              This project was developed in collaboration with medical interns in Egypt to
              address a real patient-care problem: oxygen masks can be uncomfortable, causing
              patients to remove or misplace them without staff immediately noticing.
            </p>
            <p className="mt-4 leading-8 text-white/60">
              The goal was to create a low-cost system that detects whether the mask is
              being worn correctly and escalates warnings when improper use continues.
            </p>
          </div>

          <SectionImage
            src="/oxygen-problem.png"
            alt="Oxygen mask clinical problem"
            label="Clinical need / partner problem statement"
          />
        </section>

        {/* SYSTEM ARCHITECTURE */}
        <section className="mt-28 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">System Architecture</h2>
            <p className="mt-4 text-white/60">
              The system combines two sensing modalities: pressure at the nose area and
              strap tension around the head. These analog signals are converted into digital
              states that the Arduino uses to determine whether the mask is properly fastened.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/70">
              Pressure Sensor + Stretch Sensor → Wheatstone Bridge / Comparator Logic →
              AD620 Amplification → LM311 Comparators → Arduino → Alert System
            </div>
          </div>

          <SectionImage
            src="/oxygen-system-architecture.png"
            alt="Oxygen mask system architecture"
            label="Analog and digital workflow"
          />
        </section>

        {/* ANALOG SUBSYSTEMS */}
        <section className="mt-28">
          <h2 className="text-3xl font-semibold tracking-tight">Analog Signal Processing</h2>
          <p className="mt-4 max-w-3xl text-white/60">
            The analog subsystem converts physical mask placement into electrical signals
            that can be interpreted by the microcontroller.
          </p>

          <div className="mt-10 space-y-16">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl font-semibold">Pressure Sensor + Wheatstone Bridge</h3>
                <p className="mt-4 text-white/60">
                  A pressure sensor detects whether the mask is seated against the nose.
                  The sensor behaves as a variable resistor and is placed into a Wheatstone
                  bridge so resistance changes become measurable voltage differences.
                </p>
              </div>
              <SectionImage
                src="/oxygen-pressure-bridge.png"
                alt="Pressure sensor and Wheatstone bridge"
                label="Pressure sensor and Wheatstone bridge schematic"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <SectionImage
                src="/oxygen-ad620.png"
                alt="AD620 amplifier"
                label="AD620 instrumentation amplifier"
              />
              <div>
                <h3 className="text-2xl font-semibold">AD620 Amplification</h3>
                <p className="mt-4 text-white/60">
                  The bridge output is amplified using an AD620 instrumentation amplifier.
                  This helps strengthen the differential signal before threshold detection
                  while keeping the signal within a safe range for downstream components.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl font-semibold">LM311 Comparator Logic</h3>
                <p className="mt-4 text-white/60">
                  LM311 comparators convert analog sensor behavior into digital outputs.
                  One comparator evaluates mask pressure, while another evaluates strap
                  tension, allowing the Arduino to read clear HIGH/LOW states.
                </p>
              </div>
              <SectionImage
                src="/oxygen-lm311.png"
                alt="LM311 comparator"
                label="Comparator circuit for digital threshold detection"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <SectionImage
                src="/oxygen-stretch-sensor.png"
                alt="Stretch sensor strain gauge"
                label="Stretch sensor / strap tension subsystem"
              />
              <div>
                <h3 className="text-2xl font-semibold">Stretch Sensor / Strap Detection</h3>
                <p className="mt-4 text-white/60">
                  A stretch sensor placed along the mask strap detects whether the strap is
                  under tension. When the mask is removed or loosened, the signal changes and
                  contributes to the improper-mask detection logic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DIGITAL LOGIC */}
        <section className="mt-28">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Embedded Logic + Alert System
              </h2>
              <p className="mt-4 text-white/60">
                The Arduino reads digital outputs from the comparator circuits and tracks how
                long the mask has been worn incorrectly. The system then escalates alerts based
                on duration.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-white/70">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  10–30 seconds improper use → small user warning
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  30–120 seconds improper use → larger warning
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  120+ seconds improper use → doctor/caregiver alert
                </div>
              </div>
            </div>

            <SectionImage
              src="/oxygen-code-flow.png"
              alt="Oxygen mask code flow"
              label="Code design / digital subsystem workflow"
            />
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <SectionImage
              src="/oxygen-variables.png"
              alt="Set variables"
              label="Variables for timing and output states"
            />
            <SectionImage
              src="/oxygen-read-inputs.png"
              alt="Read inputs"
              label="Digital inputs from comparator outputs"
            />
            <SectionImage
              src="/oxygen-thresholds.png"
              alt="Warning thresholds"
              label="Time-based warning thresholds"
            />
          </div>
        </section>

        {/* FINAL PRODUCT */}
        <section className="mt-28 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Working Product</h2>
            <p className="mt-4 leading-8 text-white/60">
              The final prototype integrated the analog sensing chain with Arduino-based
              timing logic to detect when the mask was removed or improperly fastened.
              The system demonstrated a working proof-of-concept for real-time mask
              monitoring.
            </p>
          </div>

          <SectionImage
            src="/oxygen-working-product.JPEG"
            alt="Working oxygen mask prototype"
            label="Working prototype / final demonstration"
          />
        </section>

        {/* CONTRIBUTIONS */}
        <section className="mt-28 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-semibold tracking-tight">My Contributions</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "Helped define the clinical problem and user need through collaboration with international medical partners.",
              "Designed and tested analog sensing logic using pressure and stretch sensor inputs.",
              "Contributed to the Wheatstone bridge, amplification, and comparator-based detection system.",
              "Developed embedded logic for timing-based warning thresholds and alert escalation.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-[#05070d]/60 p-5 text-sm leading-7 text-white/60">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* OUTCOME */}
        <section className="mt-28 grid gap-8 pb-24 md:grid-cols-3">
          {[
            {
              title: "Clinical Relevance",
              body: "The system addressed a real patient-care challenge involving oxygen mask compliance and monitoring.",
            },
            {
              title: "Engineering Depth",
              body: "The project combined analog circuits, sensing, comparator logic, and embedded software.",
            },
            {
              title: "Future Direction",
              body: "Future improvements could include smaller packaging, wireless alerts, better attachment design, and clinical validation.",
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