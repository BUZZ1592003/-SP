"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    title: "ARES Face OSINT",
    displayTitle: ["ARES", "FACE OSINT"],
    type: "Computer Vision Research",
    description:
      "A face-recognition research project focused on face detection, embeddings and similarity search using consenting datasets.",
    technologies: [
      "Python",
      "Face Recognition",
      "OpenCV",
      "Computer Vision",
    ],
    GitHub: "#",
    Live: "#",
  },
  {
    number: "02",
    title: "Comic E-Commerce",
    displayTitle: ["COMIC", "E-COMMERCE"],
    type: "Full-Stack Web Application",
    description:
      "An e-commerce platform for browsing and managing comic products with a database-driven backend.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    GitHub: "#",
    Live: "#",
  },
  {
    number: "03",
    title: "Portfolio Website",
    displayTitle: ["PORTFOLIO", "WEBSITE"],
    type: "Interactive Web Experience",
    description:
      "A modern personal portfolio designed to showcase my skills, experience, projects and development journey.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
    ],
    GitHub: "#",
    Live: "#",
  },
];

/* =========================================
   ARES VISUAL
========================================= */

function AresVisual() {
  return (
    <div className="relative h-full min-h-[330px] overflow-hidden bg-[#080808] sm:min-h-[400px] lg:min-h-[480px]">

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #525252 1px, transparent 1px),
            linear-gradient(to bottom, #525252 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* LARGE BACKGROUND TEXT */}
      <p className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[22vw] font-bold uppercase tracking-[-0.08em] text-neutral-950 lg:text-[10vw]">
        ARES
      </p>

      {/* SCANNING BEAM */}
      <div className="project-scan-line absolute left-0 top-0 z-10 h-px w-full bg-[#FFD400] shadow-[0_0_20px_rgba(255,212,0,0.9)]" />

      {/* FACE FRAME */}
      <div className="absolute left-1/2 top-1/2 z-10 h-[190px] w-[145px] -translate-x-1/2 -translate-y-1/2 border border-[#FFD400]/60 sm:h-[230px] sm:w-[175px]">

        {/* CORNERS */}
        <span className="absolute -left-px -top-px h-7 w-7 border-l-2 border-t-2 border-[#FFD400]" />
        <span className="absolute -right-px -top-px h-7 w-7 border-r-2 border-t-2 border-[#FFD400]" />
        <span className="absolute -bottom-px -left-px h-7 w-7 border-b-2 border-l-2 border-[#FFD400]" />
        <span className="absolute -bottom-px -right-px h-7 w-7 border-b-2 border-r-2 border-[#FFD400]" />

        {/* FACE OUTLINE */}
        <div className="absolute left-1/2 top-1/2 h-[130px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-[45%] border border-neutral-800 sm:h-[155px] sm:w-[110px]" />

        {/* LANDMARKS */}
        <span className="project-landmark absolute left-[31%] top-[35%] h-2 w-2 rounded-full bg-[#FFD400]" />
        <span className="project-landmark absolute right-[31%] top-[35%] h-2 w-2 rounded-full bg-[#FFD400] [animation-delay:-0.6s]" />
        <span className="project-landmark absolute left-1/2 top-[52%] h-2 w-2 -translate-x-1/2 rounded-full bg-[#FFD400] [animation-delay:-1.2s]" />
        <span className="absolute left-1/2 top-[70%] h-px w-10 -translate-x-1/2 bg-[#FFD400]/60" />

      </div>

      {/* TRACKING POINTS */}
      <span className="project-data-point absolute left-[18%] top-[28%] h-1.5 w-1.5 rounded-full bg-[#FFD400]" />
      <span className="project-data-point absolute right-[17%] top-[39%] h-1 w-1 rounded-full bg-[#FFD400] [animation-delay:-1s]" />
      <span className="project-data-point absolute bottom-[23%] left-[26%] h-1 w-1 rounded-full bg-[#FFD400] [animation-delay:-2s]" />

      {/* LABELS */}
      <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FFD400]">
          Face Detection / Active
        </p>

        <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-700">
          Tracking landmarks
        </p>
      </div>

      <div className="absolute bottom-4 left-4 z-20 sm:bottom-6 sm:left-6">
        <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-600 sm:text-[9px]">
          Similarity / Embeddings / Detection
        </p>
      </div>

      <p className="absolute bottom-4 right-4 z-20 font-mono text-[8px] uppercase tracking-[0.15em] text-[#FFD400] sm:bottom-6 sm:right-6 sm:text-[9px]">
        System / Active
      </p>

    </div>
  );
}

/* =========================================
   COMIC VISUAL
========================================= */

function ComicVisual() {
  return (
    <div className="relative h-full min-h-[330px] overflow-hidden bg-[#FFD400] p-3 text-black sm:min-h-[400px] sm:p-5 lg:min-h-[480px]">

      {/* BACKGROUND WORD */}
      <p className="pointer-events-none absolute -bottom-4 -left-2 select-none text-[25vw] font-black uppercase leading-none text-black/10 lg:text-[11vw]">
        SHOP
      </p>

      <div className="relative z-10 grid h-full grid-cols-2 grid-rows-2 gap-2 sm:gap-3">

        {/* PANEL 1 */}
        <div className="group relative overflow-hidden border-[3px] border-black bg-[#050505] sm:border-4">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#262626_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />

          <p className="absolute left-3 top-3 font-mono text-[8px] uppercase text-[#FFD400] sm:left-4 sm:top-4 sm:text-xs">
            Issue / 001
          </p>

          <p className="absolute bottom-3 left-3 text-xl font-black uppercase text-white transition-transform duration-500 group-hover:-translate-y-1 sm:bottom-4 sm:left-4 sm:text-3xl">
            Explore
          </p>

        </div>

        {/* PANEL 2 */}
        <div className="group relative overflow-hidden border-[3px] border-black bg-white sm:border-4">

          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-12 bg-black transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110 sm:h-24 sm:w-24" />

          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD400]" />

          <p className="absolute bottom-3 right-3 font-mono text-[8px] uppercase sm:bottom-4 sm:right-4 sm:text-xs">
            Discover
          </p>

        </div>

        {/* PANEL 3 */}
        <div className="group relative overflow-hidden border-[3px] border-black bg-white sm:border-4">

          <p className="absolute left-3 top-3 text-3xl font-black sm:left-4 sm:top-4 sm:text-4xl">
            BUY!
          </p>

          <div className="absolute bottom-4 right-4 h-14 w-14 rounded-full border-[3px] border-black transition-transform duration-500 group-hover:scale-125 sm:bottom-5 sm:right-5 sm:h-16 sm:w-16 sm:border-4" />

          <span className="absolute bottom-[39px] right-[38px] text-xl font-black sm:bottom-[43px] sm:right-[43px]">
            →
          </span>

        </div>

        {/* PANEL 4 */}
        <div className="group relative overflow-hidden border-[3px] border-black bg-[#050505] sm:border-4">

          <p className="absolute bottom-3 left-3 text-lg font-black uppercase text-[#FFD400] sm:bottom-4 sm:left-4 sm:text-2xl">
            Comics
          </p>

          <span className="absolute -right-8 -top-8 h-28 w-28 rotate-45 border-[3px] border-[#FFD400] transition-transform duration-700 group-hover:rotate-90 sm:h-32 sm:w-32 sm:border-4" />

          <span className="absolute right-6 top-6 h-8 w-8 rotate-45 bg-[#FFD400]" />

        </div>

      </div>

    </div>
  );
}

/* =========================================
   PORTFOLIO VISUAL
========================================= */

function PortfolioVisual() {
  return (
    <div className="relative flex h-full min-h-[330px] items-center justify-center overflow-hidden bg-[#080808] sm:min-h-[400px] lg:min-h-[480px]">

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #525252 1px, transparent 1px),
            linear-gradient(to bottom, #525252 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* GLOW */}
      <div className="project-portfolio-glow absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD400]/10 blur-[80px] sm:h-72 sm:w-72" />

      {/* ORBITS */}
      <div className="project-orbit absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFD400]/20 sm:h-[330px] sm:w-[330px]" />

      <div className="project-orbit-reverse absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-neutral-700 sm:h-[260px] sm:w-[260px]" />

      {/* TYPOGRAPHY */}
      <div className="relative z-10 text-center">

        <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#FFD400] sm:text-[10px]">
          Portfolio / 2026
        </p>

        <p className="mt-5 text-5xl font-bold uppercase leading-[0.8] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
          BUILD
          <br />

          <span className="text-[#FFD400]">
            DIGITAL
          </span>
        </p>

        <p className="mt-6 font-mono text-[8px] uppercase tracking-[0.25em] text-neutral-600">
          Design / Development / Interaction
        </p>

      </div>

      {/* DECORATION */}
      <div className="project-floating-square absolute right-[9%] top-[15%] h-16 w-16 rotate-12 border border-[#FFD400]/50 sm:h-24 sm:w-24" />

      <div className="project-floating-circle absolute bottom-[12%] left-[10%] h-12 w-12 rounded-full border border-neutral-700 sm:h-16 sm:w-16" />

    </div>
  );
}

/* =========================================
   PROJECT VISUAL SWITCHER
========================================= */

function ProjectVisual({
  activeProject,
}: {
  activeProject: number;
}) {
  if (activeProject === 0) {
    return <AresVisual />;
  }

  if (activeProject === 1) {
    return <ComicVisual />;
  }

  return <PortfolioVisual />;
}

/* =========================================
   PROJECTS
========================================= */

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  function previousProject() {
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  }

  function nextProject() {
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-neutral-800 bg-[#050505] px-6 py-20 text-white lg:px-12 lg:py-32"
    >
      {/* SUBTLE BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #737373 1px, transparent 1px),
            linear-gradient(to bottom, #737373 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* SECTION LABEL */}
        <div className="flex items-center justify-between">

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD400] sm:text-xs">
            05 — Selected Work
          </p>

          <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 md:block">
            Projects / Experiments / Ideas
          </p>

        </div>

        {/* HEADER */}
        <div className="mt-10 grid grid-cols-1 gap-8 border-b border-neutral-800 pb-10 lg:mt-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10 lg:pb-14">

          <Reveal>
            <h2 className="text-[17vw] font-bold uppercase leading-[0.78] tracking-[-0.06em] sm:text-[11vw] lg:text-[8vw]">
              Selected
              <br />

              <span className="text-[#FFD400]">
                Work.
              </span>
            </h2>
          </Reveal>

          <div className="flex items-end">

            <Reveal delay={100}>
              <p className="max-w-lg text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7 lg:text-lg">
                A selection of projects that demonstrate my interests,
                technical skills and approach to turning ideas into
                working software.
              </p>
            </Reveal>

          </div>

        </div>

        {/* =========================================
            MOBILE / TABLET SHOWCASE
        ========================================= */}

        <div className="lg:hidden">

          <Reveal delay={100}>

            <div className="py-8">

              {/* PROJECT POSITION + CONTROLS */}
              <div className="mb-5 flex items-center justify-between">

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                    Active Project
                  </p>

                  <p className="mt-1 font-mono text-xs text-[#FFD400]">
                    {String(activeProject + 1).padStart(2, "0")}
                    <span className="mx-2 text-neutral-700">/</span>
                    {String(projects.length).padStart(2, "0")}
                  </p>
                </div>

                <div className="flex gap-2">

                  <button
                    type="button"
                    onClick={previousProject}
                    aria-label="Previous project"
                    className="flex h-11 w-11 items-center justify-center border border-neutral-800 font-mono text-sm transition-colors duration-300 active:border-[#FFD400] active:bg-[#FFD400] active:text-black"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={nextProject}
                    aria-label="Next project"
                    className="flex h-11 w-11 items-center justify-center bg-[#FFD400] font-mono text-sm text-black transition-transform duration-300 active:scale-95"
                  >
                    →
                  </button>

                </div>

              </div>

              {/* VISUAL */}
              <div className="overflow-hidden border border-neutral-800">

                <ProjectVisual
                  activeProject={activeProject}
                />

              </div>

              {/* PROJECT NUMBER SELECTOR */}
              <div className="mt-4 grid grid-cols-3 border border-neutral-800">

                {projects.map((item, index) => {
                  const isActive = activeProject === index;

                  return (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => setActiveProject(index)}
                      className={`
                        border-r
                        border-neutral-800
                        py-3
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        transition-colors
                        duration-300
                        last:border-r-0
                        ${
                          isActive
                            ? "bg-[#FFD400] text-black"
                            : "text-neutral-600"
                        }
                      `}
                    >
                      {item.number}
                    </button>
                  );
                })}

              </div>

              {/* PROJECT IDENTITY */}
              <div className="border-b border-neutral-800 py-7">

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FFD400]">
                  {project.type}
                </p>

                <h3 className="mt-3 text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] sm:text-4xl">
                  {project.displayTitle[0]}
                  <br />

                  <span className="text-neutral-500">
                    {project.displayTitle[1]}
                  </span>
                </h3>

              </div>

              {/* INFORMATION */}
              <div className="grid grid-cols-1 gap-7 py-7 sm:grid-cols-2">

                <div>

                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                    About Project
                  </p>

                  <p className="mt-3 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
                    {project.description}
                  </p>

                </div>

                <div>

                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                    Technologies
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-neutral-800 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-neutral-400"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

              {/* LINKS */}
              {(project.Live !== "#" ||
                project.GitHub !== "#") && (
                <div className="flex gap-6 border-t border-neutral-800 py-6">

                  {project.Live !== "#" && (
                    <a
                      href={project.Live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] uppercase tracking-[0.15em] transition-colors duration-300 hover:text-[#FFD400]"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.GitHub !== "#" && (
                    <a
                      href={project.GitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] uppercase tracking-[0.15em] transition-colors duration-300 hover:text-[#FFD400]"
                    >
                      GitHub ↗
                    </a>
                  )}

                </div>
              )}

            </div>

          </Reveal>

        </div>

        {/* =========================================
            DESKTOP SHOWCASE
        ========================================= */}

        <div className="hidden border-b border-neutral-800 lg:grid lg:grid-cols-[0.75fr_1.25fr]">

          {/* PROJECT SELECTOR */}
          <div className="border-r border-neutral-800">

            <Reveal delay={100}>

              <div>

                {projects.map((item, index) => {
                  const isActive = activeProject === index;

                  return (
                    <button
                      key={item.number}
                      type="button"
                      onMouseEnter={() => setActiveProject(index)}
                      onFocus={() => setActiveProject(index)}
                      onClick={() => setActiveProject(index)}
                      className={`
                        group
                        relative
                        w-full
                        overflow-hidden
                        border-b
                        border-neutral-800
                        px-8
                        py-9
                        text-left
                        transition-colors
                        duration-300
                        last:border-b-0
                        ${
                          isActive
                            ? "bg-[#FFD400] text-black"
                            : "bg-transparent text-white hover:bg-[#0d0d0d]"
                        }
                      `}
                    >
                      {/* LARGE NUMBER */}
                      <span
                        className={`
                          absolute
                          -right-2
                          top-1/2
                          -translate-y-1/2
                          select-none
                          font-mono
                          text-8xl
                          font-bold
                          tracking-[-0.08em]
                          ${
                            isActive
                              ? "text-black/10"
                              : "text-neutral-950"
                          }
                        `}
                      >
                        {item.number}
                      </span>

                      <div className="relative z-10 flex items-start gap-6">

                        <span
                          className={`
                            pt-1
                            font-mono
                            text-xs
                            ${
                              isActive
                                ? "text-black/60"
                                : "text-[#FFD400]"
                            }
                          `}
                        >
                          {item.number}
                        </span>

                        <div>

                          <p
                            className={`
                              font-mono
                              text-[10px]
                              uppercase
                              tracking-[0.2em]
                              ${
                                isActive
                                  ? "text-black/60"
                                  : "text-neutral-600"
                              }
                            `}
                          >
                            {item.type}
                          </p>

                          <h3 className="mt-3 max-w-md text-3xl font-bold uppercase tracking-tight xl:text-4xl">
                            {item.title}
                          </h3>

                        </div>

                      </div>

                    </button>
                  );
                })}

              </div>

            </Reveal>

          </div>

          {/* ACTIVE PROJECT */}
          <div className="p-8">

            <Reveal delay={180}>

              <div>

                {/* VISUAL */}
                <div className="overflow-hidden border border-neutral-800">

                  <ProjectVisual
                    activeProject={activeProject}
                  />

                </div>

                {/* INFORMATION */}
                <div className="grid grid-cols-2 gap-10 py-8">

                  <div>

                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600">
                      About Project
                    </p>

                    <p className="mt-4 max-w-xl leading-7 text-neutral-300">
                      {project.description}
                    </p>

                  </div>

                  <div>

                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600">
                      Technologies
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">

                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="border border-neutral-800 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-neutral-400"
                        >
                          {technology}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

                {/* LINKS */}
                {(project.Live !== "#" ||
                  project.GitHub !== "#") && (
                    <div className="flex gap-6 border-t border-neutral-800 py-6">

                      {project.Live !== "#" && (
                        <a
                          href={project.Live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-300 hover:text-[#FFD400]"
                        >
                          Live Demo ↗
                        </a>
                      )}

                      {project.GitHub !== "#" && (
                        <a
                          href={project.GitHub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-300 hover:text-[#FFD400]"
                        >
                          GitHub ↗
                        </a>
                      )}

                    </div>
                )}

              </div>

            </Reveal>

          </div>

        </div>

        {/* BOTTOM STATUS */}
        <div className="flex items-center justify-between border-t border-neutral-800 pt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600 lg:border-t-0 lg:pt-8">

          <p className="hidden lg:block">
            Hover / Focus / Select
          </p>

          <p className="lg:hidden">
            Tap / Explore
          </p>

          <p>
            {String(activeProject + 1).padStart(2, "0")}
            <span className="mx-2 text-[#FFD400]">
              /
            </span>
            {String(projects.length).padStart(2, "0")}
          </p>

        </div>

      </div>
    </section>
  );
}