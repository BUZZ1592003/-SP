import Reveal from "./Reveal";

const skillGroups = [
  {
    number: "01",
    title: "FRONTEND",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "BACKEND",
    skills: [
      "PHP",
      "Laravel",
      "MySQL",
    ],
  },
  {
    number: "03",
    title: "PROGRAMMING",
    skills: [
      "Python",
      "C++",
    ],
  },
  {
    number: "04",
    title: "TOOLS",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
];

function getSkillCode(skill: string) {
  const codes: Record<string, string> = {
    HTML: "HT",
    CSS: "CS",
    JavaScript: "JS",
    React: "RE",
    "Next.js": "NX",
    "Tailwind CSS": "TW",
    PHP: "PH",
    Laravel: "LA",
    MySQL: "SQL",
    Python: "PY",
    "C++": "C+",
    Git: "GT",
    GitHub: "GH",
    "VS Code": "VS",
  };

  return codes[skill] ?? skill.slice(0, 2).toUpperCase();
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-neutral-800 bg-[#050505] px-6 py-20 text-white lg:px-12 lg:py-32"
    >
      {/* BACKGROUND DECORATION */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
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
            03 — Tech Stack
          </p>

          <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 md:block">
            Technologies / Tools / Languages
          </p>
        </div>

        {/* LARGE TITLE */}
        <div className="mt-10 border-b border-neutral-800 pb-10 lg:mt-12 lg:pb-12">

          <Reveal>
            <h2 className="text-[18vw] font-bold uppercase leading-[0.78] tracking-[-0.06em] sm:text-[12vw] lg:text-[8vw]">
              Tech
              <br />

              <span className="text-[#FFD400]">
                Stack.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-7 max-w-xl text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7 md:ml-auto md:text-lg">
              Technologies I use for building, experimenting and
              continuously improving as a developer.
            </p>
          </Reveal>

        </div>

        {/* =========================================
            MOBILE / TABLET TECH RAILS
        ========================================= */}

        <div className="lg:hidden">

          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className="border-b border-neutral-800 py-10"
            >
              <Reveal delay={groupIndex * 60}>

                {/* CATEGORY HEADER */}
                <div className="mb-6 flex items-end justify-between">

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFD400]">
                      {group.number}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">

                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                      Swipe
                    </p>

                    <span className="text-sm text-[#FFD400]">
                      →
                    </span>

                  </div>

                </div>

                {/* HORIZONTAL RAIL */}
                <div className="-mx-6 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

                  <div className="flex w-max gap-3">

                    {group.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="group relative flex h-[180px] w-[155px] shrink-0 flex-col justify-between overflow-hidden border border-neutral-800 bg-[#080808] p-5 transition-all duration-300 active:border-[#FFD400] active:bg-[#FFD400] active:text-black"
                      >
                        {/* TOP */}
                        <div className="flex items-start justify-between">

                          <span className="font-mono text-[9px] text-neutral-600 transition-colors group-active:text-black/50">
                            {String(skillIndex + 1).padStart(2, "0")}
                          </span>

                          <span className="h-2 w-2 rounded-full border border-[#FFD400] transition-colors group-active:border-black group-active:bg-black" />

                        </div>

                        {/* DECORATIVE CODE */}
                        <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 select-none font-mono text-[72px] font-bold tracking-[-0.08em] text-neutral-900 transition-colors duration-300 group-active:text-black/10">
                          {getSkillCode(skill)}
                        </div>

                        {/* SKILL */}
                        <div className="relative z-10">

                          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600 transition-colors group-active:text-black/50">
                            Technology
                          </p>

                          <p className="mt-2 max-w-[120px] text-xl font-semibold leading-tight tracking-tight text-neutral-100 transition-colors group-active:text-black">
                            {skill}
                          </p>

                        </div>

                      </div>
                    ))}

                    {/* END CARD */}
                    <div className="flex h-[180px] w-[90px] shrink-0 items-center justify-center border border-dashed border-neutral-800">

                      <span className="rotate-90 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-700">
                        End / {group.number}
                      </span>

                    </div>

                  </div>

                </div>

                {/* RAIL LINE */}
                <div className="mt-3 flex items-center gap-3">

                  <div className="h-px flex-1 bg-neutral-800" />

                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFD400]" />

                </div>

              </Reveal>
            </div>
          ))}

        </div>

        {/* =========================================
            DESKTOP TECH MATRIX
        ========================================= */}

        <div className="hidden lg:block">

          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="border-b border-neutral-800"
            >
              <Reveal delay={index * 60}>

                <div className="grid grid-cols-[220px_1fr]">

                  {/* CATEGORY */}
                  <div className="border-r border-neutral-800 py-8 pr-8">

                    <p className="font-mono text-xs text-[#FFD400]">
                      {group.number}
                    </p>

                    <h3 className="mt-3 font-mono text-sm tracking-[0.2em] text-neutral-400">
                      {group.title}
                    </h3>

                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="grid grid-cols-4">

                    {group.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="group relative flex min-h-[160px] items-end overflow-hidden border-l border-t border-neutral-800 p-5 transition-colors duration-300 first:border-l-0 hover:bg-[#FFD400]"
                      >
                        {/* INDEX */}
                        <span className="absolute right-4 top-4 font-mono text-[9px] text-neutral-700 transition-colors duration-300 group-hover:text-black/40">
                          {String(skillIndex + 1).padStart(2, "0")}
                        </span>

                        {/* DECORATIVE CODE */}
                        <span className="absolute -right-2 top-1/2 -translate-y-1/2 select-none font-mono text-6xl font-bold text-neutral-900 transition-colors duration-300 group-hover:text-black/10">
                          {getSkillCode(skill)}
                        </span>

                        {/* NAME */}
                        <p className="relative z-10 text-3xl font-medium tracking-tight text-neutral-200 transition-colors duration-300 group-hover:text-black">
                          {skill}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </Reveal>
            </div>
          ))}

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="grid grid-cols-1 gap-6 pt-10 lg:grid-cols-2 lg:pt-12">

          <Reveal delay={100}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600 sm:text-xs">
              Learn → Build → Break → Debug → Repeat
            </p>
          </Reveal>

          <Reveal delay={150}>
            <p className="max-w-lg text-base leading-7 text-neutral-300 lg:ml-auto lg:text-lg lg:leading-8">
              I don&apos;t just collect technologies. I learn them by
              using them to turn ideas into working products.
            </p>
          </Reveal>

        </div>

      </div>
    </section>
  );
}