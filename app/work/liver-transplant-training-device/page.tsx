import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const project = {
  title: "Liver Transplant Training Device",
  category: "Medical Design",
  image: "/work/liver-transplant-training-device/liver-transplant-training-device.jpeg",
  role: "Organ Modeling, CAD Engineer, Prototype Fabrication",
  duration: "January 2024 - May 2026",
  tools: "SOLIDWORKS, Onshape, Ultimaker Cura",
  poster: "/work/liver-transplant-training-device/liver-poster.pdf",
};

const galleryImages = [
  
  {
    title: "Box Schematic",
    caption: "System layout showing the chamber structure, tubing paths, and internal organization.",
    image: "/work/liver-transplant-training-device/liver-schematic.png",
  },
  {
    title: "First Prototype",
    caption: "Early assembled prototype integrating the box, organ models, tubing, and fluid system.",
    image: "/work/liver-transplant-training-device/liver-first-prototype.jpg",
  },
  {
    title: "Duodenum CAD",
    caption: "CAD model used to develop the surrounding anatomy for the training model.",
    image: "/work/liver-transplant-training-device/liver-duodenum-cad.png",
  },
  {
    title: "Stomach Mold",
    caption: "3D printed mold used to support silicone modeling of anatomical components.",
    image: "/work/liver-transplant-training-device/liver-stomach-cad.jpeg",
  },
  
];

const moreWork = [
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
  {
    title: "Optimizing Balance Training Data Collection",
    category: "Software Development for Biomechanics Research",
    image: "/featured/fth.png",
    href: "/work/balance",
  },
 
];


export default function LiverTransplantTrainingDevicePage() {
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

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
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
<a
  href={project.poster}
  target="_blank"
  rel="noreferrer"
  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
>
  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
    Poster
  </p>

  <div className="mt-4 flex items-center justify-between gap-4">
    <p className="leading-7 text-white/60">
      University of Florida: Undergraduate Research Symposium 2026
    </p>

    <FiArrowUpRight className="h-5 w-5 shrink-0 text-white/35 transition group-hover:text-cyan-300" />
  </div>
</a>

          </div>

          <div className="mt-20 space-y-20">
            <section>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Overview
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
                I helped build a low-cost surgical training model that gives residents a more hands-on way to practice bicaval liver transplant techniques. The goal was to create something reusable, anatomically meaningful, and realistic enough to support training without relying on expensive or limited surgical simulation resources.
              </p>
            </section>


            <section>
  <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
    Design
  </h2>

  <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
    The model was built around a custom two-chamber surgical box that organized
    the liver model, fluid reservoir, tubing, and power components for reusable
    resident training. I helped plan and CAD the box with my teammates,
    including the chamber layout, access points, and internal structure. The
    lower chamber serves as a water reservoir with a sloped base for drainage,
    while the upper chamber houses the liver model, vessel pathways, and fluid
    outlets. I also helped assemble the physical box and integrate the tubing,
    pumps, reservoirs, and vessel connections into the working prototype.
  </p>

  <p className="mt-4 max-w-3xl text-lg leading-8 text-white/60">
    My main design focus was improving anatomical realism and consistent fluid
    flow. I planned and created extrusions through the liver model for the
    inferior vena cava, portal vein, common hepatic artery, and bile duct so
    tubing could pass through the correct anatomical regions and remain aligned
    during use. I also modeled and silicone-molded surrounding anatomy,
    including the stomach and duodenum. Together, the printed parts, molded
    anatomy, tubing, motors, and secured connectors created a reusable surgical
    model that simulated flow through the major liver transplant structures.
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
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">

  The final prototype successfully replicated the major vasculature and fluid

  flow involved in a bicaval liver transplant. The vessel system remained stable

  under flowing liquid, supported anastomosis practice with Penrose, and kept production cost to about $100, with

  operating costs limited to replacing fluids and vessels between runs. The full

  build required approximately 12–15 hours of design time and 8–10 hours of

  construction, and the completed model was delivered to the head of liver

  transplant surgery at UF Health Shands as a reusable foundation for resident

  training and future clinical validation.

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