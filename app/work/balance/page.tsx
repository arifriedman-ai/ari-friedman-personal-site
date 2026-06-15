import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const project = {
  title: "Optimizing Balance Training Data Collection",
  category: "Medical Design",
  image: "/featured/fth.png",
  role: "Research Assistant, Software Engineer",
  duration: "June 2025",
  tools: "HTML",
};
const galleryImages = [
  
  {
    title: "Participant Setup Screen",
    caption: "",
    image: "/work/balance/first-page.png",
  },
  {
    title: "Data Collection Screen",
    caption: "",
    image: "/work/balance/second-page.png",
  },
  {
    title: "Final Data Visualization Screen",
    caption: "",
    image: "/work/balance/third-page.png",
  },
  {
    title: "Treadmill Mounted Balance Beam",
    caption: "",
    image: "/work/balance/feet.jpg",
  },
  
];
const moreWork = [
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
    href: "#",
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
 
];


export default function balance() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <section className="relative overflow-hidden px-6 py-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="pointer-events-none absolute left-1/4 top-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute right-20 top-80 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-40 left-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

        <Navbar />

        <div className="relative z-10 mx-auto max-w-6xl py-20">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
              {project.category}
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              {project.title}
            </h1>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="h-[320px] w-full object-cover md:h-[560px]"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
                My Role
              </p>
              <p className="mt-4 leading-7 text-white/60">{project.role}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
                Duration
              </p>
              <p className="mt-4 leading-7 text-white/60">
                {project.duration}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
                Tools
              </p>
              <p className="mt-4 leading-7 text-white/60">{project.tools}</p>
            </div>
          </div>

          <div className="mt-20 space-y-20">
            <section>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Overview
              </h2>
              <p className="mt-4 leading-8 text-white/60">
  The balance training study recorded participant performance during beam
  walking trials, including the number of step-offs, total time spent on the
  beam, trial condition, beam size, session type, and participant age group.
  These measurements helped researchers evaluate balance performance across
  different visual perturbation conditions to identify optimal occlusion periods
  for balance training techniques in older individuals.
</p>
 <p className="mt-4 leading-8 text-white/60">
    I noticed that balance beam step-offs were being recorded by hand during
    research sessions, which slowed down data collection, created extra work for
    researchers, and left participants waiting between trials. To address this,
    I took the initiative to build an HTML-based data collection app that
    streamlined participant information, trial tracking, and fall timing into one
    workflow.
  </p>
            </section>


            <section>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Design
              </h2>
               <p className="mt-4 leading-8 text-white/60">
    I designed the app as a simple three-screen workflow: participant setup,
    fall tracking, and data summary. Researchers first enter participant
    information such as age group, beam size, condition, and session type, then
    use the trial tracker to start timed beam-walking trials and record when a
    participant steps off or returns to the beam.
  </p>

  <p className="mt-4 leading-8 text-white/60">
    The app automatically calculates fall count and total time on beam while
    also saving timestamped step-off and on-beam events for more detailed
    analysis. A summary page allows researchers to review each trial before
    exporting the data directly into the lab’s existing Excel format.
  </p>
            </section>
<section>
  <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
    Build Gallery
  </h2>

  <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
    {galleryImages.map((item) => (
      <article
        key={item.title}
        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.06]"
      >
        <div className="h-64 overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/55">
            {item.caption}
          </p>
        </div>
      </article>
    ))}
  </div>
</section>
            <section>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Results
              </h2>
             <p className="mt-4 leading-8 text-white/60">
    The application reduced manual data entry and saved approximately five
    minutes per collection session across more than 200 trials. By keeping the
    lab’s existing Excel format, the tool improved efficiency without requiring
    researchers to change their workflow.
  </p>

  <p className="mt-4 leading-8 text-white/60">
    The added timestamp data also gave the research team a more detailed record
    of when participants stepped off and returned to the beam, creating
    additional opportunities for future analysis beyond total falls and total
    time on beam.
  </p>
            </section>
          </div>

          <section className="mt-28 border-t border-white/10 pt-16">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              View More Work...
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {moreWork.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.06]"
                >
                  <div className="h-36 overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs text-cyan-300/70">
                          {item.category}
                        </p>
                      </div>

                      <FiArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/35 transition group-hover:text-cyan-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </section>
    </main>
  );
}