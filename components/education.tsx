import Reveal from "./Reveal";

const education = [
  {
    number: "01",
    period: "2022 — 2025",
    startYear: "2022",
    endYear: "2025",
    degree: "B.Sc. (Hons.) Information Technology",
    institution: "Sanatan Dharma College, Ambala Cantt.",
    description:
      "Studied information technology with a focus on computer applications, programming, web technologies and software development.",
    tag: "Information Technology",
  },
  {
    number: "02",
    period: "2020 — 2022",
    startYear: "2020",
    endYear: "2022",
    degree: "Class XII — Non-Medical",
    institution: "Kendriya Vidyalaya No. 1",
    description:
      "Completed senior secondary education with a non-medical background.",
    tag: "Science / Non-Medical",
  },
  {
    number: "03",
    period: "2011 — 2020",
    startYear: "2011",
    endYear: "2020",
    degree: "Class X",
    institution: "St. Paul's High School",
    description:
      "Completed secondary education under the ICSE curriculum.",
    tag: "ICSE",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-neutral-800 bg-[#050505] px-6 py-20 text-white lg:px-12 lg:py-32"
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

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

      {/* DECORATIVE GLOW */}
      <div className="pointer-events-none absolute right-[-180px] top-[30%] h-[420px] w-[420px] rounded-full bg-[#FFD400]/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* =========================================
            SECTION LABEL
        ========================================= */}

        <div className="flex items-center justify-between">

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD400] sm:text-xs">
            06 — Education
          </p>

          <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 md:block">
            Education / Foundation / Learning
          </p>

        </div>

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mt-10 grid grid-cols-1 gap-8 border-b border-neutral-800 pb-10 lg:mt-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10 lg:pb-14">

          <Reveal>

            <h2 className="text-[16vw] font-bold uppercase leading-[0.78] tracking-[-0.06em] sm:text-[10vw] lg:text-[7vw]">
              Academic
              <br />

              <span className="text-[#FFD400]">
                Journey.
              </span>
            </h2>

          </Reveal>

          <div className="flex items-end">

            <Reveal delay={100}>

              <div>

                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  Foundation → Development
                </p>

                <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7 lg:text-lg">
                  My education gave me a foundation in technology,
                  programming and computer science while encouraging me
                  to keep learning beyond the classroom.
                </p>

              </div>

            </Reveal>

          </div>

        </div>

        {/* =========================================
            JOURNEY STATUS
        ========================================= */}

        <Reveal delay={100}>

          <div className="grid grid-cols-3 border-b border-neutral-800">

            {education.map((item, index) => (
              <div
                key={item.number}
                className={`
                  relative
                  py-5
                  ${index !== education.length - 1
                    ? "border-r border-neutral-800"
                    : ""
                  }
                `}
              >

                <div className="px-3 sm:px-5 lg:px-7">

                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-700 sm:text-[9px]">
                    Stage {item.number}
                  </p>

                  <p className="mt-2 font-mono text-[10px] text-[#FFD400] sm:text-xs">
                    {item.endYear}
                  </p>

                </div>

                {/* PROGRESS LINE */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-neutral-900">

                  <div
                    className={`
                      h-full
                      bg-[#FFD400]
                      ${
                        index === 0
                          ? "w-full"
                          : index === 1
                          ? "w-2/3"
                          : "w-1/3"
                      }
                    `}
                  />

                </div>

              </div>
            ))}

          </div>

        </Reveal>

        {/* =========================================
            TIMELINE
        ========================================= */}

        <div className="relative">

          {/* DESKTOP TIMELINE LINE */}
          <div className="pointer-events-none absolute bottom-0 left-[155px] top-0 hidden w-px bg-neutral-800 md:block">

            <div className="h-full w-px bg-gradient-to-b from-[#FFD400] via-[#FFD400]/50 to-neutral-800" />

          </div>

          {/* MOBILE TIMELINE LINE */}
          <div className="pointer-events-none absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-[#FFD400] via-[#FFD400]/50 to-neutral-800 md:hidden" />

          {education.map((item, index) => (

            <div
              key={`${item.period}-${item.institution}`}
              className="border-b border-neutral-800"
            >

              <Reveal delay={index * 80}>

                <article className="group relative grid grid-cols-1 md:grid-cols-[180px_1fr]">

                  {/* =================================
                      YEAR / TIMELINE NODE
                  ================================= */}

                  <div className="relative py-8 pl-8 md:py-12 md:pl-0 lg:py-16">

                    {/* NODE */}
                    <div className="absolute left-0 top-[38px] z-10 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-[#FFD400] bg-[#050505] md:left-[148px] md:top-[56px] lg:top-[72px]">

                      <span className="h-[5px] w-[5px] rounded-full bg-[#FFD400] transition-transform duration-300 group-hover:scale-[2]" />

                    </div>

                    {/* YEAR */}
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                      Period
                    </p>

                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-[#FFD400]">
                      {item.period}
                    </p>

                    <p className="pointer-events-none mt-3 hidden select-none text-5xl font-bold tracking-[-0.06em] text-neutral-900 lg:block">
                      {item.endYear}
                    </p>

                  </div>

                  {/* =================================
                      EDUCATION CONTENT
                  ================================= */}

                  <div className="pb-10 pl-8 md:py-12 md:pl-10 lg:py-16 lg:pl-14">

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">

                      {/* LEFT */}
                      <div>

                        <div className="flex items-center gap-3">

                          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                            Qualification
                          </p>

                          <span className="h-px w-8 bg-neutral-800" />

                          <p className="font-mono text-[9px] text-neutral-700">
                            {item.number}
                          </p>

                        </div>

                        <h3 className="mt-4 max-w-3xl text-3xl font-bold leading-[1] tracking-[-0.035em] transition-colors duration-300 group-hover:text-[#FFD400] sm:text-4xl lg:text-5xl">
                          {item.degree}
                        </h3>

                        <div className="mt-5 flex flex-wrap items-center gap-3">

                          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-400 sm:text-xs">
                            {item.institution}
                          </p>

                          <span className="hidden h-1 w-1 rounded-full bg-neutral-700 sm:block" />

                          <span className="border border-neutral-800 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-600">
                            {item.tag}
                          </span>

                        </div>

                      </div>

                      {/* RIGHT */}
                      <div className="flex flex-col justify-between">

                        <p className="max-w-xl text-sm leading-7 text-neutral-400 sm:text-base lg:text-lg lg:leading-8">
                          {item.description}
                        </p>

                        {/* YEAR RANGE VISUAL */}
                        <div className="mt-8">

                          <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-700">

                            <span>
                              {item.startYear}
                            </span>

                            <span>
                              {item.endYear}
                            </span>

                          </div>

                          <div className="relative mt-2 h-px bg-neutral-800">

                            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-neutral-600" />

                            <span className="absolute left-2 right-2 top-0 h-px bg-[#FFD400]/40" />

                            <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#FFD400]" />

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </article>

              </Reveal>

            </div>

          ))}

        </div>

        {/* =========================================
            BOTTOM MESSAGE
        ========================================= */}

        <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-[0.8fr_1.2fr] lg:pt-12">

          <Reveal delay={100}>

            <div>

              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                Learning Model
              </p>

              <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-[#FFD400]">
                Formal Education × Continuous Learning
              </p>

            </div>

          </Reveal>

          <Reveal delay={150}>

            <p className="max-w-2xl text-lg leading-8 text-neutral-300 md:ml-auto lg:text-xl">
              The classroom built the foundation. Building projects,
              experimenting and solving problems{" "}
              <span className="text-[#FFD400]">
                continues the learning.
              </span>
            </p>

          </Reveal>

        </div>

      </div>
    </section>
  );
}