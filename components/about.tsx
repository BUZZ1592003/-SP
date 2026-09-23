import Reveal from "./Reveal";

const principles = [
  {
    number: "01",
    title: "Build",
    description: "Turn concepts and ideas into working experiences.",
  },
  {
    number: "02",
    title: "Learn",
    description:
      "Understand the tools, problems and decisions behind the code.",
  },
  {
    number: "03",
    title: "Evolve",
    description:
      "Improve through experimentation, feedback and repetition.",
  },
];

/* =========================================
   DEVELOPMENT SYSTEM GRAPHIC
========================================= */

function DevelopmentSystem() {
  return (
    <div className="relative min-h-[460px] overflow-hidden border border-neutral-800 bg-[#080808] sm:min-h-[560px] lg:min-h-[620px]">

      {/* GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #525252 1px, transparent 1px),
            linear-gradient(to bottom, #525252 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* BACKGROUND TYPOGRAPHY */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <p className="select-none whitespace-nowrap text-[28vw] font-bold uppercase leading-none tracking-[-0.08em] text-neutral-950 sm:text-[22vw] lg:text-[13vw]">
          PROCESS
        </p>
      </div>

      {/* TOP SYSTEM LABEL */}
      <div className="absolute left-5 top-5 z-20 sm:left-7 sm:top-7">

        <div className="flex items-center gap-3">

          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD400] opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFD400]" />
          </span>

          <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#FFD400] sm:text-[9px]">
            Development System / Active
          </p>

        </div>

        <p className="mt-2 pl-5 font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-700">
          Continuous Improvement Loop
        </p>

      </div>

      {/* TOP RIGHT */}
      <p className="absolute right-5 top-5 z-20 hidden font-mono text-[8px] uppercase tracking-[0.25em] text-neutral-700 sm:block sm:right-7 sm:top-7">
        Idea → Code → Feedback
      </p>

      {/* =========================================
          SVG SYSTEM
      ========================================= */}

      <div className="absolute inset-0 flex items-center justify-center px-4 pt-12 sm:px-10">

        <svg
          viewBox="0 0 800 600"
          className="h-full w-full max-w-[900px]"
          role="img"
          aria-label="Development process connecting ideas, building, learning and evolving"
        >
          {/* LARGE OUTER ORBIT */}
          <circle
            cx="400"
            cy="300"
            r="220"
            fill="none"
            stroke="#262626"
            strokeWidth="1"
            strokeDasharray="5 10"
            className="about-orbit"
          />

          {/* INNER ORBIT */}
          <circle
            cx="400"
            cy="300"
            r="145"
            fill="none"
            stroke="#171717"
            strokeWidth="1"
          />

          {/* CONNECTIONS */}

          {/* IDEA → BUILD */}
          <path
            d="M 185 300 Q 270 110 400 120"
            fill="none"
            stroke="#FFD400"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />

          {/* BUILD → CODE */}
          <path
            d="M 400 120 Q 545 125 615 300"
            fill="none"
            stroke="#FFD400"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />

          {/* CODE → EVOLVE */}
          <path
            d="M 615 300 Q 560 475 400 485"
            fill="none"
            stroke="#FFD400"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />

          {/* EVOLVE → IDEA */}
          <path
            d="M 400 485 Q 245 475 185 300"
            fill="none"
            stroke="#FFD400"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />

          {/* CROSS CONNECTIONS */}
          <line
            x1="185"
            y1="300"
            x2="615"
            y2="300"
            stroke="#262626"
            strokeWidth="1"
          />

          <line
            x1="400"
            y1="120"
            x2="400"
            y2="485"
            stroke="#262626"
            strokeWidth="1"
          />

          {/* ANIMATED SIGNAL PATH */}
          <path
            d="M 185 300 Q 270 110 400 120 Q 545 125 615 300 Q 560 475 400 485 Q 245 475 185 300"
            fill="none"
            stroke="#FFD400"
            strokeWidth="2"
            strokeLinecap="round"
            className="about-signal-path"
          />

          {/* CENTER CORE */}
          <circle
            cx="400"
            cy="300"
            r="66"
            fill="#FFD400"
            fillOpacity="0.04"
            stroke="#FFD400"
            strokeOpacity="0.3"
          />

          <circle
            cx="400"
            cy="300"
            r="45"
            fill="#FFD400"
            fillOpacity="0.08"
            stroke="#FFD400"
            strokeOpacity="0.6"
            className="about-core-ring"
          />

          <circle
            cx="400"
            cy="300"
            r="8"
            fill="#FFD400"
            className="about-core"
          />

          {/* IDEA NODE */}
          <g className="about-node">
            <circle
              cx="185"
              cy="300"
              r="32"
              fill="#080808"
              stroke="#525252"
              strokeWidth="1"
            />

            <circle
              cx="185"
              cy="300"
              r="7"
              fill="#FFD400"
            />

            <text
              x="185"
              y="355"
              textAnchor="middle"
              fill="#FFD400"
              fontSize="13"
              fontFamily="monospace"
              letterSpacing="3"
            >
              IDEA
            </text>

            <text
              x="185"
              y="375"
              textAnchor="middle"
              fill="#525252"
              fontSize="8"
              fontFamily="monospace"
              letterSpacing="2"
            >
              00 / INPUT
            </text>
          </g>

          {/* BUILD NODE */}
          <g className="about-node about-node-delay-1">
            <circle
              cx="400"
              cy="120"
              r="32"
              fill="#080808"
              stroke="#525252"
              strokeWidth="1"
            />

            <circle
              cx="400"
              cy="120"
              r="7"
              fill="#FFD400"
            />

            <text
              x="400"
              y="75"
              textAnchor="middle"
              fill="#FFD400"
              fontSize="13"
              fontFamily="monospace"
              letterSpacing="3"
            >
              BUILD
            </text>

            <text
              x="400"
              y="94"
              textAnchor="middle"
              fill="#525252"
              fontSize="8"
              fontFamily="monospace"
              letterSpacing="2"
            >
              01 / CREATE
            </text>
          </g>

          {/* CODE NODE */}
          <g className="about-node about-node-delay-2">
            <circle
              cx="615"
              cy="300"
              r="32"
              fill="#080808"
              stroke="#525252"
              strokeWidth="1"
            />

            <circle
              cx="615"
              cy="300"
              r="7"
              fill="#FFD400"
            />

            <text
              x="615"
              y="355"
              textAnchor="middle"
              fill="#FFD400"
              fontSize="13"
              fontFamily="monospace"
              letterSpacing="3"
            >
              LEARN
            </text>

            <text
              x="615"
              y="375"
              textAnchor="middle"
              fill="#525252"
              fontSize="8"
              fontFamily="monospace"
              letterSpacing="2"
            >
              02 / UNDERSTAND
            </text>
          </g>

          {/* EVOLVE NODE */}
          <g className="about-node about-node-delay-3">
            <circle
              cx="400"
              cy="485"
              r="32"
              fill="#080808"
              stroke="#525252"
              strokeWidth="1"
            />

            <circle
              cx="400"
              cy="485"
              r="7"
              fill="#FFD400"
            />

            <text
              x="400"
              y="540"
              textAnchor="middle"
              fill="#FFD400"
              fontSize="13"
              fontFamily="monospace"
              letterSpacing="3"
            >
              EVOLVE
            </text>

            <text
              x="400"
              y="560"
              textAnchor="middle"
              fill="#525252"
              fontSize="8"
              fontFamily="monospace"
              letterSpacing="2"
            >
              03 / IMPROVE
            </text>
          </g>

          {/* CENTER LABEL */}
          <text
            x="400"
            y="294"
            textAnchor="middle"
            fill="#737373"
            fontSize="8"
            fontFamily="monospace"
            letterSpacing="2"
          >
            ITERATION
          </text>

          <text
            x="400"
            y="318"
            textAnchor="middle"
            fill="#FFD400"
            fontSize="11"
            fontFamily="monospace"
            letterSpacing="3"
          >
            LOOP
          </text>
        </svg>

      </div>

      {/* FLOATING TECH LABELS */}
      <div className="absolute bottom-[18%] left-[8%] hidden border border-neutral-800 bg-[#050505]/80 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-600 lg:block">
        Problem / 01
      </div>

      <div className="absolute right-[8%] top-[25%] hidden border border-neutral-800 bg-[#050505]/80 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-600 lg:block">
        Solution / 02
      </div>

      {/* BOTTOM STATUS */}
      <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between border-t border-neutral-800 pt-4 sm:bottom-7 sm:left-7 sm:right-7">

        <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-700 sm:text-[8px]">
          Think / Build / Test
        </p>

        <div className="flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-[#FFD400]" />

          <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-600 sm:text-[8px]">
            Repeat
          </p>

        </div>

      </div>

    </div>
  );
}

/* =========================================
   ABOUT
========================================= */

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-neutral-800 bg-[#050505] px-6 py-20 text-white lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* SECTION LABEL */}
        <div className="flex items-center justify-between">

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD400] sm:text-xs">
            02 — About
          </p>

          <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 md:block">
            Developer / Builder / Learner
          </p>

        </div>

        {/* =========================================
            MAIN STATEMENT
        ========================================= */}

        <div className="mt-10 grid grid-cols-1 gap-8 border-b border-neutral-800 pb-10 lg:mt-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12 lg:pb-14">

          <Reveal>

            <h2 className="max-w-7xl text-[16vw] font-bold uppercase leading-[0.78] tracking-[-0.06em] sm:text-[10vw] lg:text-[6.5vw]">

              Building.
              <br />

              <span className="text-neutral-600">
                Learning.
              </span>

              <br />

              <span className="text-[#FFD400]">
                Evolving.
              </span>

            </h2>

          </Reveal>

          <div className="flex items-end">

            <Reveal delay={100}>

              <div>

                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  How I Approach Development
                </p>

                <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7 lg:text-lg">
                  I learn by turning ideas into working systems,
                  understanding what breaks and improving the next
                  iteration.
                </p>

              </div>

            </Reveal>

          </div>

        </div>

        {/* =========================================
            VISUAL SYSTEM
        ========================================= */}

        <div className="border-b border-neutral-800 py-8 sm:py-10 lg:py-14">

          <Reveal delay={100}>

            <DevelopmentSystem />

          </Reveal>

        </div>

        {/* =========================================
            ABOUT CONTENT
        ========================================= */}

        <div className="grid grid-cols-1 border-b border-neutral-800 lg:grid-cols-[0.55fr_1.45fr]">

          {/* LEFT */}
          <div className="border-b border-neutral-800 py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-10">

            <Reveal delay={100}>

              <div>

                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  About Me
                </p>

                <p className="mt-5 max-w-sm text-lg leading-8 text-neutral-300">
                  Web developer focused on turning ideas into practical,
                  responsive and engaging digital experiences.
                </p>

                <div className="mt-8 flex items-center gap-3">

                  <span className="h-px w-10 bg-[#FFD400]" />

                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-600">
                    Build With Purpose
                  </p>

                </div>

              </div>

            </Reveal>

          </div>

          {/* RIGHT */}
          <div className="py-9 lg:py-12 lg:pl-12">

            <Reveal delay={100}>

              <p className="max-w-4xl text-2xl font-medium leading-[1.4] tracking-tight text-neutral-200 sm:text-3xl lg:text-4xl lg:leading-[1.35]">
                I enjoy taking an idea, understanding how it should work,
                and turning it into something{" "}

                <span className="text-[#FFD400]">
                  people can actually use.
                </span>
              </p>

            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">

              <Reveal delay={150}>

                <p className="leading-7 text-neutral-400">
                  I work mainly with frontend technologies such as
                  JavaScript, React, Next.js and Tailwind CSS, while
                  continuing to develop my backend skills with PHP,
                  Laravel and MySQL.
                </p>

              </Reveal>

              <Reveal delay={200}>

                <p className="leading-7 text-neutral-400">
                  My approach to learning is simple: build something,
                  encounter problems, understand why they happen, fix
                  them and use that knowledge in the next project.
                </p>

              </Reveal>

            </div>

          </div>

        </div>

        {/* =========================================
            PRINCIPLES
        ========================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-3">

          {principles.map((principle, index) => (

            <div
              key={principle.number}
              className={`
                border-b
                border-neutral-800
                last:border-b-0
                sm:border-b-0
                ${
                  index !== principles.length - 1
                    ? "sm:border-r"
                    : ""
                }
              `}
            >

              <Reveal
                delay={100 + index * 50}
                className="h-full"
              >

                <div className="group relative h-full overflow-hidden px-0 py-8 sm:px-7 lg:py-10">

                  {/* BACKGROUND NUMBER */}
                  <span className="pointer-events-none absolute -bottom-6 right-3 select-none font-mono text-8xl font-bold tracking-[-0.08em] text-neutral-950 transition-colors duration-300 group-hover:text-[#FFD400]/5">
                    {principle.number}
                  </span>

                  <div className="relative z-10">

                    <div className="flex items-center justify-between">

                      <p className="font-mono text-xs text-[#FFD400]">
                        {principle.number}
                      </p>

                      <span className="h-1.5 w-1.5 rounded-full border border-neutral-700 transition-all duration-300 group-hover:border-[#FFD400] group-hover:bg-[#FFD400]" />

                    </div>

                    <h3 className="mt-7 text-2xl font-bold uppercase transition-colors duration-300 group-hover:text-[#FFD400]">
                      {principle.title}
                    </h3>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-500">
                      {principle.description}
                    </p>

                  </div>

                </div>

              </Reveal>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}