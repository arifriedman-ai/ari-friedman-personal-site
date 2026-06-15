import { FiDownload, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const featuredWork = [
  {
    title: "Liver Transplant Training Device",
    category: "Medical Design",
    image: "/featured/liver-transplant-training-device.jpeg",
    href: "/work/liver-transplant-training-device",
  },
  {
    title: "Circuit Board Design for Unmanned Aerial Fire Suppression System",
    category: "Autonomous Drone Research - Project in Progress",
    image: "/featured/pcb.png",
    href: "/work/drone",
  },
  {
    title: "Neuromuscular Interface for Inclusive Audio Production",
    category: "Assistive Device Design",
    image: "/featured/emg-hero.png",
    href: "/work/emg-grip",
  },
  {
    title: "Longitudinal Analysis of Functional Recovery Post-Ankle Arthroplasty",
    category: "Research Data Analysis",
    image: "/featured/hnl.PNG",
    href: "/work/ankle-artho",
  },
  {
    title: "International Collaboration on Oxygen Mask Fixation Sensor: Zagazig University",
    category: "Circuit Prototyping",
    image: "/featured/mask.jpeg",
    href: "/work/oxygen-mask",
  },
  {
    title: "48 Hour Designathon: Assistive Post-Op Device Design",
    category: "Rapid Design Challenge",
    image: "/featured/quinn.jpeg",
    href: "https://arifriedman-ai.github.io/quinlift-site/index.html",
  },
  {
    title: "Optimizing Balance Training Data Collection",
    category: "Software Development for Biomechanics Research",
    image: "/featured/fth.png",
    href: "/work/balance",
  },
 
];

const experience = [
  {
    organization: "Dream Team Engineering",
    role: "Executive Board Member – Director of Recruitment & Shadowing Program",
    dates: "August 2024 – Present",
    bullets: [
      "Developed individualized shadowing cycle plans for 26 vetted engineering students, aligning placements with technical interests and project needs across multiple multidisciplinary teams",
      "Orchestrated weekly meetings, technical workshops with guest speakers, and social events to strengthen members’ skill sets and foster a cohesive cohort",
    ],
  },
  {
    organization: "Unmanned Aircraft Systems Research Laboratory",
    role: "Research Assistant",
    dates: "May 2026 – Present",
    bullets: [
      "Designed a custom Printed Circuit Board (PCB) and Power Distribution Board (PDB) to distribute motor power and flight-control signals for autonomous wildfire detection and suppression drone systems",
    ],
  },
  {
    organization: "Generational Relief in Prosthetics",
    role: "Research and Development Team Captain",
    dates: "August 2025 – April 2026",
    bullets: [
      "Directed an 8-person multidisciplinary R&D team, organizing technical design reviews, delegating prototyping tasks, and coordinating milestones to support iterative testing and device reliability",
      "Led development of an assistive neuromuscular interface, integrating Arduino-based EMG acquisition with Python algorithms to translate muscle activity into real-time electronic music control signals",
      "CAD-designed enclosure and soldered circuitry to reduce electrical noise and improve signal quality",
    ],
  },
  {
    organization: "Human Neuromechanics Laboratory ",
    role: "Research Assistant",
    dates: "May 2025 – Present",
    bullets: [
      "Processed EMG, 3D motion capture, and force plate data in Motive, Visual3D, and MATLAB to assess lower-limb biomechanics during post–ankle replacement gait recovery",
      "Collected data for human‑subject experiments using wearable EEG and IMU systems, including participant preparation, sensor placement, and structured experimental data acquisition",
      "Created CAD designs that enhanced accuracy of beam size adjustments and placements in the experimental setup of a visual perturbation balance training study",
      "Engineered an HTML-based application to log and export time-stamped beam-walking data to Excel, enabling efficient step-off frequency analysis across 200+ experimental data collections",
    ],
  },
];

const skills = [
  "Biomedical Device Design",
  "CAD Modeling",
  "SolidWorks",
  "Fusion 360",
  "Analog Circuit Design",
  "PCB Design & Soldering",
  "KiCad",
  "Arduino",
  "C++",
  "Python",
  "MATLAB",
  "Biosignal Processing",
  "Motion Capture Analysis",
  "Visual3D",
  "Human-Subject Research",
  "UI/UX Design",
  "Website Design",
  "Team Leadership",
];

const outsideWork = [
  {
    title: "Freelance Disk Jockey",
    description: "",
  },
  {
    title: "Running, Swimming & Weight Lifting",
    description: "",
  },
  {
    title: "Brazilian Jiu Jitsu & Muay Thai",
    description: "",
  },
  {
    title: "Music Production & Sound Design",
    description: "",
  },
  {
    title: "Playing Soccer",
    description: "",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#05070d] text-white">
      <section className="relative overflow-hidden px-6 py-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="pointer-events-none absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute right-20 top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute bottom-40 left-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

        <Navbar />

        <section
          id="intro"
          className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-12 py-20 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100/80 shadow-lg backdrop-blur">
              Biomedical Engineer · Business Student · Innovator
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
              Ari Friedman
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              I’m an honors biomedical engineering and business student passionate about turning ideas into useful, human-centered products. My work spans medical device design, research, prototyping, and entrepreneurial problem-solving, with a focus on building tools that improve human movement, healthcare training, and everyday quality of life.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#featured-work"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-100"
              >
                View Featured Work
              </a>

              <a
                href="/a_friedman_resume_6_10.pdf"
                download
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                <FiDownload className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-white/60">
              <a
                href="mailto:arifriedman@ufl.edu"
                className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-300"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/ari-friedman-bme/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300/50 hover:text-blue-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="/a_friedman_resume_6_10.pdf"
                download
                className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-300"
                aria-label="Download resume"
              >
                <FiDownload className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative transition duration-500 hover:scale-[1.02]">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b1020] p-3 shadow-2xl">
                <div className="aspect-[4/5] w-72 overflow-hidden rounded-[1.5rem] bg-black md:w-80">
                  <img
                    src="/headshot.JPEG"
                    alt="Ari Friedman headshot"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 max-w-[230px] rounded-2xl border border-white/10 bg-[#0b1020]/85 p-4 text-sm shadow-lg backdrop-blur">
                <p className="font-medium text-white">B.S. in Biomedical Engineering </p>
                <p className="mt-1 text-white/50">
                  Minor in Business Adminstration
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="featured-work" className="relative z-10 mx-auto max-w-6xl py-24">
          <h2 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Featured Work
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredWork.map((item) => (
  <Link
    key={item.title}
    href={item.href}
    className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.06]"
  >
    <div className="h-64 overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
      />
    </div>

    <div className="p-6">
      <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-sm text-cyan-300/70">{item.category}</p>
    </div>
  </Link>
))}
          </div>
        </section>

        <section id="experience" className="relative z-10 mx-auto max-w-6xl py-24">
          <h2 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Leadership & Experience
          </h2>

          <div className="mt-10 space-y-6">
            {experience.map((item) => (
              <article
                key={`${item.organization}-${item.role}`}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {item.organization}
                    </h3>
                    <p className="mt-1 text-cyan-300/70">{item.role}</p>
                  </div>

                  <p className="text-sm text-white/40">{item.dates}</p>
                </div>

                <ul className="mt-5 space-y-2 text-sm leading-6 text-white/60">
                  {item.bullets.map((bullet, bulletIndex) => (
  <li key={`${item.organization}-${bulletIndex}`}>• {bullet}</li>
))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-4xl font-semibold tracking-tight text-cyan-300 md:text-5xl">
              Skills
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill, index) => (
  <span
    key={`${skill}-${index}`}
    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
  >
    {skill}
  </span>
))}
            </div>
          </div>
        </section>

        <section id="outside-work" className="relative z-10 mx-auto max-w-6xl py-24">
          <h2 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Outside of Work
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {outsideWork.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.06]"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/60">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <Footer />
      </section>
    </main>
  );
}