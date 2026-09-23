import Reveal from "./Reveal";

const experiences = [
  {
    period: "2024 — 2025",
    role: "Data Entry Operator / BDE",
    company: "Foxy Digits",
    description:
      "Worked with data management, business development activities, customer communication, documentation and day-to-day operational tasks.",
    skills: [
      "Communication",
      "Customer Handling",
      "Data Management",
      "Documentation",
      "Business Development",
      "Problem Solving",
    ],
  },
];

/* =========================================
   EXPERIENCE WORKFLOW GRAPHIC
========================================= */

function ExperienceWorkflow() {
  const nodes = [
    {
      number: "01",
      title: "DATA",
      subtitle: "MANAGEMENT",
      position: "left-[6%] top-[43%]",
    },
    {
      number: "02",
      title: "CUSTOMER",
      subtitle: "HANDLING",
      position: "left-1/2 top-[13%] -translate-x-1/2",
    },
    {
      number: "03",
      title: "BUSINESS",
      subtitle: "DEVELOPMENT",
      position: "right-[6%] top-[43%]",
    },
    {
      number: "04",
      title: "DOCUMENT",
      subtitle: "PROCESS",
      position: "left-[25%] bottom-[11%]",
    },
    {
      number: "05",
      title: "OPERATIONS",
      subtitle: "OUTCOME",
      position: "right-[25%] bottom-[11%]",
    },
  ];

  const stageLabels = [
    ["01", "DATA"],
    ["02", "CUSTOMER"],
    ["03", "BUSINESS"],
    ["04", "DOCUMENT"],
    ["05", "OPERATIONS"],
  ];

  return (
    <div className="relative min-h-[540px] overflow-hidden border border-neutral-800 bg-[#080808] sm:min-h-[620px] lg:min-h-[720px]">
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

      {/* DOT GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #737373 1px, transparent 1px)",
          backgroundSize: "110px 110px",
          backgroundPosition: "28px 28px",
        }}
      />

      {/* CENTRAL GLOW */}
      <div className="experience-background-glow pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD400]/[0.07] blur-[110px] sm:h-[480px] sm:w-[480px]" />

      {/* BACKGROUND WORD */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <p className="select-none whitespace-nowrap text-[28vw] font-bold uppercase leading-none tracking-[-0.09em] text-neutral-950 sm:text-[21vw] lg:text-[13vw]">
          WORK
        </p>
      </div>

      {/* LARGE ORBITS */}
      <div className="experience-outer-orbit pointer-events-none absolute left-1/2 top-1/2 hidden aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FFD400]/10 sm:block" />

      <div className="experience-outer-orbit-reverse pointer-events-none absolute left-1/2 top-1/2 hidden aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-800 sm:block" />

      {/* TOP STATUS */}
      <div className="absolute left-5 right-5 top-5 z-30 flex items-start justify-between sm:left-7 sm:right-7 sm:top-7">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD400] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFD400]" />
            </span>

            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#FFD400] sm:text-[9px]">
              Professional Workflow / Active
            </p>
          </div>

          <p className="mt-2 pl-5 font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-700 sm:text-[8px]">
            Foxy Digits / Operations
          </p>
        </div>

        <div className="hidden text-right sm:block">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-700">
            Input → Process → Outcome
          </p>

          <div className="mt-3 flex justify-end gap-1">
            <span className="h-3 w-[2px] bg-[#FFD400]" />
            <span className="h-3 w-[2px] bg-[#FFD400]" />
            <span className="h-3 w-[2px] bg-neutral-700" />
            <span className="h-3 w-[2px] bg-neutral-800" />
            <span className="h-3 w-[2px] bg-neutral-800" />
          </div>
        </div>
      </div>

      {/* LEFT WORKFLOW INDEX */}
      <div className="absolute left-7 top-[20%] z-20 hidden w-[135px] lg:block">
        <p className="mb-4 font-mono text-[7px] uppercase tracking-[0.25em] text-neutral-700">
          Workflow Index
        </p>

        {stageLabels.map(([number, label]) => (
          <div
            key={number}
            className="flex items-center gap-3 border-b border-neutral-800/70 py-2"
          >
            <span className="font-mono text-[7px] text-[#FFD400]">
              {number}
            </span>

            <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-neutral-600">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* RIGHT PROCESSING HUD */}
      <div className="absolute right-[5%] top-[22%] z-20 hidden lg:block">
        <div className="flex items-start gap-4">
          <span className="mt-1 h-8 w-px bg-gradient-to-b from-[#FFD400] to-transparent" />

          <div>
            <p className="font-mono text-[7px] uppercase leading-4 tracking-[0.2em] text-neutral-600">
              Processing
              <br />
              Information Into
              <br />
              Opportunities.
            </p>

            <span className="mt-4 block h-[2px] w-4 bg-[#FFD400]" />
          </div>
        </div>
      </div>

      {/* RIGHT DATA MATRIX */}
      <div className="pointer-events-none absolute right-[4%] top-[35%] hidden grid-cols-5 gap-3 opacity-40 lg:grid">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className={
              index === 8 || index === 17
                ? "h-[3px] w-[3px] bg-[#FFD400]"
                : "h-[3px] w-[3px] bg-neutral-600"
            }
          />
        ))}
      </div>

      {/* LEFT LOWER HUD */}
      <div className="absolute bottom-[17%] left-[5%] z-20 hidden lg:block">
        <div className="space-y-2">
          <span className="block h-[2px] w-4 bg-[#FFD400]" />
          <span className="block h-[2px] w-3 bg-[#FFD400]" />
          <span className="block h-[2px] w-2 bg-neutral-700" />
        </div>

        <p className="mt-4 font-mono text-[7px] uppercase leading-4 tracking-[0.2em] text-neutral-600">
          Information
          <br />
          Organisation
          <br />
          Progress
        </p>
      </div>

      {/* RIGHT LOWER HUD */}
      <div className="absolute bottom-[15%] right-[5%] z-20 hidden lg:block">
        <p className="font-mono text-[7px] uppercase leading-4 tracking-[0.22em] text-neutral-600">
          Small
          <br />
          Steps
          <br />
          Big
          <br />
          Progress.
        </p>

        <span className="mt-4 block h-[2px] w-4 bg-[#FFD400]" />
      </div>

      {/* DECORATIVE MARKERS */}
      <span className="absolute left-[20%] top-[30%] hidden h-3 w-3 border border-neutral-700 lg:block" />
      <span className="absolute right-[20%] top-[38%] hidden h-3 w-3 border border-neutral-700 lg:block" />
      <span className="absolute bottom-[17%] left-[18%] hidden h-2 w-2 border border-[#FFD400]/40 lg:block" />
      <span className="absolute bottom-[20%] right-[17%] hidden h-2 w-2 border border-neutral-700 lg:block" />

      {/* DATA PARTICLES */}
      <span className="experience-data-particle absolute left-[16%] top-[19%] hidden h-1 w-1 rounded-full bg-neutral-500 lg:block" />

      <span className="experience-data-particle experience-data-particle-delay absolute right-[18%] top-[28%] hidden h-1.5 w-1.5 rounded-full bg-[#FFD400] lg:block" />

      <span className="experience-data-particle absolute bottom-[22%] left-[36%] hidden h-1 w-1 rounded-full bg-[#FFD400] lg:block" />

      {/* SVG SYSTEM */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4 pt-10">
        <svg
          viewBox="0 0 800 600"
          className="h-full w-full"
          role="img"
          aria-label="Professional workflow connecting data, customers, business development, documentation and operations"
        >
          {/* STATIC CONNECTIONS */}
          <path
            d="M 130 300 Q 260 110 400 130"
            fill="none"
            stroke="#333333"
            strokeWidth="1"
          />

          <path
            d="M 400 130 Q 560 120 670 300"
            fill="none"
            stroke="#333333"
            strokeWidth="1"
          />

          <path
            d="M 130 300 Q 200 460 300 485"
            fill="none"
            stroke="#333333"
            strokeWidth="1"
          />

          <path
            d="M 670 300 Q 600 460 500 485"
            fill="none"
            stroke="#333333"
            strokeWidth="1"
          />

          <path
            d="M 300 485 L 500 485"
            fill="none"
            stroke="#333333"
            strokeWidth="1"
          />

          <path
            d="M 400 130 L 400 300"
            fill="none"
            stroke="#333333"
            strokeWidth="1"
          />

          <path
            d="M 130 300 L 400 300"
            fill="none"
            stroke="#333333"
            strokeWidth="1"
          />

          <path
            d="M 400 300 L 670 300"
            fill="none"
            stroke="#333333"
            strokeWidth="1"
          />

          <path
            d="M 400 300 L 300 485"
            fill="none"
            stroke="#333333"
            strokeWidth="1"
          />

          <path
            d="M 400 300 L 500 485"
            fill="none"
            stroke="#333333"
            strokeWidth="1"
          />

          {/* YELLOW FLOW */}
          <path
            d="M 130 300 Q 260 110 400 130 Q 560 120 670 300 Q 600 460 500 485 L 300 485 Q 200 460 130 300"
            fill="none"
            stroke="#FFD400"
            strokeWidth="2"
            strokeLinecap="round"
            className="experience-flow-path"
          />

          {/* INNER RINGS */}
          <circle
            cx="400"
            cy="300"
            r="125"
            fill="none"
            stroke="#FFD400"
            strokeOpacity="0.08"
            strokeWidth="1"
          />

          <circle
            cx="400"
            cy="300"
            r="105"
            fill="none"
            stroke="#FFD400"
            strokeOpacity="0.16"
            strokeWidth="1"
            strokeDasharray="7 12"
            className="experience-inner-orbit"
          />

          {/* CORE */}
          <circle
            cx="400"
            cy="300"
            r="82"
            fill="#FFD400"
            fillOpacity="0.025"
            stroke="#FFD400"
            strokeOpacity="0.15"
            strokeDasharray="5 8"
            className="experience-core-orbit"
          />

          <circle
            cx="400"
            cy="300"
            r="53"
            fill="#080808"
            stroke="#FFD400"
            strokeOpacity="0.5"
          />

          <circle
            cx="400"
            cy="300"
            r="8"
            fill="#FFD400"
            className="experience-core-dot"
          />

          <text
            x="400"
            y="286"
            textAnchor="middle"
            fill="#737373"
            fontSize="8"
            fontFamily="monospace"
            letterSpacing="2"
          >
            WORKFLOW
          </text>

          <text
            x="400"
            y="316"
            textAnchor="middle"
            fill="#FFD400"
            fontSize="12"
            fontFamily="monospace"
            letterSpacing="3"
          >
            CORE
          </text>

          {/* MOVING SIGNAL 1 */}
          <circle r="4" fill="#FFD400">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path="M 130 300 Q 260 110 400 130 Q 560 120 670 300"
            />
          </circle>

          {/* MOVING SIGNAL 2 */}
          <circle r="3" fill="#FFD400">
            <animateMotion
              dur="8s"
              begin="-3s"
              repeatCount="indefinite"
              path="M 670 300 Q 600 460 500 485 L 300 485 Q 200 460 130 300"
            />
          </circle>

          {/* MOVING INTERNAL SIGNAL */}
          <circle r="2.5" fill="#FFD400">
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
              path="M 400 130 L 400 300 L 500 485"
            />
          </circle>
        </svg>
      </div>

      {/* WORKFLOW NODES */}
      {nodes.map((node) => (
        <div
          key={node.number}
          className={`experience-work-node absolute z-20 ${node.position}`}
        >
          <div className="group flex flex-col items-center">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-[#080808] transition-all duration-300 group-hover:border-[#FFD400] group-hover:bg-[#FFD400] sm:h-14 sm:w-14">
              <span className="font-mono text-[8px] text-neutral-500 transition-colors duration-300 group-hover:text-black">
                {node.number}
              </span>

              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#FFD400]" />
            </div>

            <p className="mt-3 text-center font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-neutral-300 transition-colors duration-300 group-hover:text-[#FFD400] sm:text-[9px]">
              {node.title}
            </p>

            <p className="mt-1 text-center font-mono text-[6px] uppercase tracking-[0.15em] text-neutral-700 sm:text-[7px]">
              {node.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* INPUT */}
      <div className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-3 lg:flex">
        <span className="h-px w-8 bg-neutral-800" />

        <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-700">
          Input
        </p>
      </div>

      {/* OUTPUT */}
      <div className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-3 lg:flex">
        <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-700">
          Output
        </p>

        <span className="h-px w-8 bg-neutral-800" />
      </div>

      {/* BOTTOM STATUS */}
      <div className="absolute bottom-5 left-5 right-5 z-30 flex items-center justify-between border-t border-neutral-800 pt-4 sm:bottom-7 sm:left-7 sm:right-7">
        <div className="flex items-center gap-3">
          <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-700 sm:text-[8px]">
            Data / People / Process
          </p>

          <span className="hidden h-[2px] w-5 bg-[#FFD400] sm:block" />
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD400] opacity-40" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FFD400]" />
          </span>

          <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-600 sm:text-[8px]">
            Connected
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   EXPERIENCE SECTION
========================================= */

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-neutral-800 bg-[#050505] px-6 py-20 text-white lg:px-12 lg:py-32"
    >
      {/* BACKGROUND */}
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

      <div className="pointer-events-none absolute -left-40 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#FFD400]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* SECTION LABEL */}
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD400] sm:text-xs">
            07 — Experience
          </p>

          <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 md:block">
            Professional / Communication / Growth
          </p>
        </div>

        {/* HEADER */}
        <div className="mt-10 grid grid-cols-1 gap-8 border-b border-neutral-800 pb-10 lg:mt-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10 lg:pb-14">
          <Reveal>
            <h2 className="text-[17vw] font-bold uppercase leading-[0.78] tracking-[-0.06em] sm:text-[10vw] lg:text-[7vw]">
              Beyond
              <br />
              The
              <br />
              <span className="text-[#FFD400]">Code.</span>
            </h2>
          </Reveal>

          <div className="flex items-end">
            <Reveal delay={100}>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  Professional Experience
                </p>

                <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7 lg:text-lg">
                  Professional experience that helped me develop
                  communication, problem-solving, customer service and
                  workplace skills alongside my technical journey.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* COMPANY / ROLE */}
        {experiences.map((experience, index) => (
          <div
            key={`${experience.company}-${experience.role}`}
            className="border-b border-neutral-800"
          >
            <Reveal delay={index * 80}>
              <article className="grid grid-cols-1 lg:grid-cols-[0.65fr_1.35fr]">

                {/* COMPANY */}
                <div className="relative overflow-hidden border-b border-neutral-800 py-10 lg:border-b-0 lg:border-r lg:py-14 lg:pr-12">
                  <p className="pointer-events-none absolute -bottom-10 right-0 select-none font-mono text-[45vw] font-bold leading-none tracking-[-0.1em] text-neutral-950 sm:text-[30vw] lg:text-[15vw]">
                    01
                  </p>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                        Company
                      </p>

                      <span className="font-mono text-[9px] text-[#FFD400]">
                        EXP / 01
                      </span>
                    </div>

                    <h3 className="mt-8 text-5xl font-bold uppercase leading-[0.85] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                      Foxy
                      <br />
                      <span className="text-[#FFD400]">Digits.</span>
                    </h3>

                    <div className="mt-10">
                      <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-neutral-600">
                        Period
                      </p>

                      <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-[#FFD400]">
                        {experience.period}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ROLE */}
                <div className="py-10 lg:py-14 lg:pl-12">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                      Role / Position
                    </p>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFD400]" />
                  </div>

                  <h3 className="mt-5 max-w-4xl text-4xl font-bold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl xl:text-7xl">
                    Data Entry
                    <br />

                    <span className="text-neutral-500">
                      Operator
                    </span>

                    <span className="text-[#FFD400]"> / BDE</span>
                  </h3>

                  <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-400 sm:text-lg">
                    {experience.description}
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        ))}

        {/* WORKFLOW */}
        <div className="border-b border-neutral-800 py-8 sm:py-10 lg:py-14">
          <Reveal delay={100}>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  Work System
                </p>

                <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                  How The Work
                  <span className="text-[#FFD400]"> Connected.</span>
                </h3>
              </div>

              <p className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-700 sm:block">
                Workflow / 01
              </p>
            </div>

            <ExperienceWorkflow />
          </Reveal>
        </div>

        {/* SKILLS */}
        <div className="border-b border-neutral-800 py-10">
          <Reveal delay={100}>
            <div className="flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                Skills Developed
              </p>

              <p className="font-mono text-[9px] text-neutral-700">
                06 AREAS
              </p>
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 border-l border-t border-neutral-800 sm:grid-cols-3 lg:grid-cols-6">
            {experiences[0].skills.map((skill, index) => (
              <Reveal
                key={skill}
                delay={100 + index * 40}
                className="h-full"
              >
                <div className="group relative h-full min-h-[120px] overflow-hidden border-b border-r border-neutral-800 p-4 transition-colors duration-300 hover:bg-[#FFD400] sm:min-h-[140px] sm:p-5">
                  <span className="font-mono text-[8px] text-neutral-700 transition-colors duration-300 group-hover:text-black/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full border border-neutral-700 transition-all duration-300 group-hover:border-black group-hover:bg-black" />

                  <p className="absolute bottom-4 left-4 right-4 text-sm font-medium leading-tight text-neutral-300 transition-colors duration-300 group-hover:text-black sm:bottom-5 sm:left-5 sm:right-5">
                    {skill}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-[0.7fr_1.3fr] lg:pt-12">
          <Reveal delay={100}>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                Beyond Development
              </p>

              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#FFD400] sm:text-xs">
                People × Communication × Problem Solving
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="max-w-2xl text-lg leading-8 text-neutral-300 md:ml-auto lg:text-xl">
              Working with people taught me how to communicate,
              understand requirements and approach problems from{" "}
              <span className="text-[#FFD400]">
                different perspectives.
              </span>
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
}