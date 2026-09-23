import HeroScene from "./HeroScene";

const dataStreams = [
  { top: "18%", width: "18rem", duration: "12s", delay: "0s" },
  { top: "34%", width: "10rem", duration: "9s", delay: "-4s" },
  { top: "57%", width: "15rem", duration: "14s", delay: "-7s" },
  { top: "73%", width: "8rem", duration: "10s", delay: "-2s" },
  { top: "86%", width: "13rem", duration: "16s", delay: "-9s" },
];

const particles = [
  { left: "8%", top: "22%", delay: "0s", duration: "6s" },
  { left: "18%", top: "67%", delay: "-2s", duration: "8s" },
  { left: "31%", top: "15%", delay: "-4s", duration: "7s" },
  { left: "43%", top: "78%", delay: "-1s", duration: "9s" },
  { left: "58%", top: "19%", delay: "-5s", duration: "8s" },
  { left: "69%", top: "69%", delay: "-3s", duration: "6s" },
  { left: "82%", top: "28%", delay: "-6s", duration: "9s" },
  { left: "91%", top: "61%", delay: "-2s", duration: "7s" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* =========================================
          AMBIENT BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* TECHNICAL GRID */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #525252 1px, transparent 1px),
              linear-gradient(to bottom, #525252 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        {/* CENTRAL GLOW */}
        <div className="hero-glow absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD400]/10 blur-[120px] sm:h-[520px] sm:w-[520px] lg:h-[650px] lg:w-[650px]" />

        {/* LARGE BACKGROUND RING */}
        <div className="hero-ring absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFD400]/10 sm:h-[620px] sm:w-[620px] lg:h-[820px] lg:w-[820px]" />

        {/* SECOND RING */}
        <div className="hero-ring-reverse absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-neutral-800 sm:h-[460px] sm:w-[460px] lg:h-[620px] lg:w-[620px]" />

        {/* MOVING DATA STREAMS */}
        {dataStreams.map((stream, index) => (
          <div
            key={index}
            className="hero-data-stream absolute left-[-20rem] h-px bg-gradient-to-r from-transparent via-[#FFD400]/70 to-transparent"
            style={{
              top: stream.top,
              width: stream.width,
              animationDuration: stream.duration,
              animationDelay: stream.delay,
            }}
          />
        ))}

        {/* FLOATING DATA PARTICLES */}
        {particles.map((particle, index) => (
          <span
            key={index}
            className="hero-particle absolute h-1 w-1 rounded-full bg-[#FFD400]"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}

        {/* LEFT TECH LABEL */}
        <div className="absolute left-6 top-[42%] hidden items-center gap-3 lg:flex">

          <span className="h-px w-10 bg-neutral-700" />

          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-700">
            System / Online
          </p>

        </div>

        {/* RIGHT TECH LABEL */}
        <div className="absolute right-6 top-[58%] hidden items-center gap-3 lg:flex">

          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-700">
            Creative / Development
          </p>

          <span className="h-px w-10 bg-neutral-700" />

        </div>

      </div>

      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 pb-8 pt-24 sm:pt-28 lg:px-12 lg:pb-10">

        {/* TOP LABEL */}
        <div className="relative z-30 flex items-center justify-between">

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD400] sm:text-xs">
            01 — Introduction
          </p>

          <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 md:block">
            Web Developer × IT Student
          </p>

        </div>

        {/* =========================================
            MAIN HERO
        ========================================= */}

        <div className="relative flex min-h-[440px] flex-1 items-center justify-center py-10 sm:min-h-[520px] sm:py-12 lg:min-h-[560px]">

          {/* 3D OBJECT */}
          <div className="pointer-events-auto absolute left-1/2 top-1/2 z-10 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 sm:h-[290px] sm:w-[290px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] xl:h-[430px] xl:w-[430px]">

            <HeroScene />

          </div>

          {/* LARGE TYPOGRAPHY */}
          <div className="pointer-events-none relative z-20 w-full text-center">

            <h1 className="font-bold uppercase leading-[0.8] tracking-[-0.06em]">

              <span className="block text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[9.5vw]">
                I Build
              </span>

              <span className="block text-[16vw] text-[#FFD400] sm:text-[14vw] md:text-[12vw] lg:text-[9.5vw]">
                Digital
              </span>

              <span className="block text-[11.5vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[7.8vw]">
                Experiences
              </span>

            </h1>

          </div>

          {/* INTERACTION LABEL */}
          <div className="pointer-events-none absolute bottom-[6%] left-1/2 z-30 hidden -translate-x-1/2 items-center gap-3 lg:flex">

            <span className="h-[5px] w-[5px] rounded-full bg-[#FFD400]" />

            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600">
              Interactive Object / Move Cursor
            </p>

          </div>

        </div>

        {/* =========================================
            HERO CONTROL PANEL
        ========================================= */}

        <div className="relative z-30 border-t border-neutral-800">

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">

            {/* WHAT I DO */}
            <div className="border-b border-neutral-800 py-6 lg:border-b-0 lg:border-r lg:py-8 lg:pr-10">

              <div className="flex items-center gap-3">

                <span className="font-mono text-[9px] text-[#FFD400]">
                  01
                </span>

                <span className="h-px w-8 bg-neutral-800" />

                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  What I Do
                </p>

              </div>

              <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
                I create modern, responsive and functional websites and
                web applications that turn ideas into usable digital
                experiences.
              </p>

            </div>

            {/* CURRENT STATUS */}
            <div className="border-b border-neutral-800 py-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-8">

              <div className="flex items-center justify-between">

                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  Current Status
                </p>

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-700">
                  Live
                </span>

              </div>

              <div className="mt-5 flex items-center gap-3">

                <span className="relative flex h-2.5 w-2.5 shrink-0">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD400] opacity-40" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FFD400]" />

                </span>

                <p className="text-sm font-medium uppercase tracking-wide text-white">
                  Available
                </p>

              </div>

              <p className="mt-2 pl-[22px] font-mono text-[9px] uppercase leading-5 tracking-[0.18em] text-neutral-600">
                Freelance

                <span className="mx-2 text-[#FFD400]">
                  /
                </span>

                Opportunities
              </p>

            </div>

            {/* QUICK ACTIONS */}
            <div className="py-6 lg:py-8 lg:pl-8">

              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                Quick Actions
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-1">

                <a
                  href="#projects"
                  className="group flex items-center justify-between bg-[#FFD400] px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  View My Work

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↘
                  </span>
                </a>

                <a
                  href="#contact"
                  className="group flex items-center justify-between border border-neutral-800 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#FFD400] hover:text-[#FFD400]"
                >
                  Contact Me

                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}