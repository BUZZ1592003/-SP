import Reveal from "./Reveal";

const socialLinks = [
  {
    number: "01",
    name: "GitHub",
    label: "Code / Projects",
    href: "https://github.com/BUZZ1592003",
  },
  {
    number: "02",
    name: "LinkedIn",
    label: "Professional / Network",
    href: "https://www.linkedin.com/in/sohan-chandra-pani-83b796265/",
  },
];

/* =========================================
   CONTACT SIGNAL GRAPHIC
========================================= */

function ContactSignal() {
  return (
    <div className="relative min-h-[480px] overflow-hidden border border-neutral-800 bg-[#080808] sm:min-h-[560px] lg:min-h-[620px]">

      {/* GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #525252 1px, transparent 1px),
            linear-gradient(to bottom, #525252 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* CENTRAL GLOW */}
      <div className="contact-signal-glow pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD400]/10 blur-[100px] sm:h-[360px] sm:w-[360px]" />

      {/* HUGE BACKGROUND TEXT */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <p className="select-none whitespace-nowrap text-[26vw] font-bold uppercase leading-none tracking-[-0.08em] text-neutral-950 sm:text-[20vw] lg:text-[12vw]">
          SIGNAL
        </p>
      </div>

      {/* TOP STATUS */}
      <div className="absolute left-5 right-5 top-5 z-30 flex items-start justify-between sm:left-7 sm:right-7 sm:top-7">

        <div>
          <div className="flex items-center gap-3">

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD400] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFD400]" />
            </span>

            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#FFD400] sm:text-[9px]">
              Communication Channel / Online
            </p>

          </div>

          <p className="mt-2 pl-5 font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-700 sm:text-[8px]">
            Waiting For Signal
          </p>
        </div>

        <p className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-700 sm:block">
          Channel / 08
        </p>

      </div>

      {/* =========================================
          RADAR
      ========================================= */}

      <div className="absolute left-1/2 top-1/2 z-10 aspect-square w-[340px] -translate-x-1/2 -translate-y-1/2 sm:w-[430px] lg:w-[500px]">

        {/* OUTER RINGS */}
        <div className="absolute inset-0 rounded-full border border-neutral-800" />

        <div className="absolute inset-[12%] rounded-full border border-neutral-800" />

        <div className="absolute inset-[25%] rounded-full border border-neutral-800" />

        <div className="absolute inset-[38%] rounded-full border border-[#FFD400]/30" />

        {/* CROSSHAIR */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neutral-800" />

        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-neutral-800" />

        {/* DIAGONALS */}
        <div className="absolute left-1/2 top-1/2 h-px w-[95%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-neutral-900" />

        <div className="absolute left-1/2 top-1/2 h-px w-[95%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-neutral-900" />

        {/* ROTATING SCANNER */}
        <div className="contact-radar-scanner absolute inset-0 rounded-full">

          <div className="absolute left-1/2 top-1/2 h-px w-[47%] origin-left bg-gradient-to-r from-[#FFD400] to-transparent" />

          <div className="absolute left-1/2 top-1/2 h-[45%] w-[45%] origin-top-left bg-gradient-to-br from-[#FFD400]/10 to-transparent [clip-path:polygon(0_0,100%_0,0_100%)]" />

        </div>

        {/* EXPANDING SIGNALS */}
        <div className="contact-signal-ring absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFD400]/40" />

        <div className="contact-signal-ring contact-signal-ring-delay absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFD400]/40" />

        {/* CENTER CORE */}
        <div className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#FFD400]/40 bg-[#080808] sm:h-28 sm:w-28">

          <div className="text-center">

            <span className="contact-core-dot mx-auto block h-3 w-3 rounded-full bg-[#FFD400]" />

            <p className="mt-3 font-mono text-[7px] uppercase tracking-[0.25em] text-neutral-600">
              Sohan
            </p>

            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.2em] text-[#FFD400]">
              Online
            </p>

          </div>

        </div>

        {/* =========================================
    GITHUB NODE
========================================= */}
<a
  href="https://github.com/BUZZ1592003"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Open GitHub profile"
  className="group absolute left-[-2%] top-[25%] z-30 flex items-center"
>
  {/* RADAR POINT */}
  <span className="contact-radar-node flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#FFD400] bg-[#080808] shadow-[0_0_18px_rgba(255,212,0,0.3)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#FFD400] sm:h-8 sm:w-8">
    <span className="h-2 w-2 rounded-full bg-[#FFD400] transition-colors duration-300 group-hover:bg-black" />
  </span>

  {/* LABEL CARD */}
  <span className="ml-3 min-w-[120px] border border-neutral-700 bg-[#080808]/95 px-3 py-2.5 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FFD400] group-hover:bg-[#FFD400] sm:min-w-[145px] sm:px-4 sm:py-3">

    <span className="flex items-center justify-between gap-4">

      <span>
        <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-black sm:text-xs">
          GitHub
        </span>

        <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.16em] text-neutral-500 transition-colors duration-300 group-hover:text-black/60 sm:text-[8px]">
          Code / Projects
        </span>
      </span>

      <span className="font-mono text-sm text-[#FFD400] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black">
        ↗
      </span>

    </span>

  </span>
</a>


{/* =========================================
    EMAIL NODE
========================================= */}
<a
  href="mailto:sohan1592003@gmail.com"
  aria-label="Send email"
  className="group absolute right-[-1%] top-[8%] z-30 flex items-center"
>
  {/* LABEL CARD */}
  <span className="mr-3 min-w-[135px] border border-neutral-700 bg-[#080808]/95 px-3 py-2.5 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FFD400] group-hover:bg-[#FFD400] sm:min-w-[160px] sm:px-4 sm:py-3">

    <span className="flex items-center justify-between gap-4">

      <span>
        <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-black sm:text-xs">
          Email
        </span>

        <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.16em] text-neutral-500 transition-colors duration-300 group-hover:text-black/60 sm:text-[8px]">
          Primary Contact
        </span>
      </span>

      <span className="font-mono text-sm text-[#FFD400] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black">
        ↗
      </span>

    </span>

  </span>

  {/* RADAR POINT */}
  <span className="contact-radar-node flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#FFD400] bg-[#080808] shadow-[0_0_18px_rgba(255,212,0,0.3)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#FFD400] sm:h-8 sm:w-8">
    <span className="h-2 w-2 rounded-full bg-[#FFD400] transition-colors duration-300 group-hover:bg-black" />
  </span>
</a>


{/* =========================================
    LINKEDIN NODE
========================================= */}
<a
  href="https://www.linkedin.com/in/sohan-chandra-pani-83b796265/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Open LinkedIn profile"
  className="group absolute bottom-[18%] right-[-2%] z-30 flex items-center"
>
  {/* LABEL CARD */}
  <span className="mr-3 min-w-[145px] border border-neutral-700 bg-[#080808]/95 px-3 py-2.5 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FFD400] group-hover:bg-[#FFD400] sm:min-w-[175px] sm:px-4 sm:py-3">

    <span className="flex items-center justify-between gap-4">

      <span>
        <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-black sm:text-xs">
          LinkedIn
        </span>

        <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.16em] text-neutral-500 transition-colors duration-300 group-hover:text-black/60 sm:text-[8px]">
          Professional Network
        </span>
      </span>

      <span className="font-mono text-sm text-[#FFD400] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black">
        ↗
      </span>

    </span>

  </span>

  {/* RADAR POINT */}
  <span className="contact-radar-node flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#FFD400] bg-[#080808] shadow-[0_0_18px_rgba(255,212,0,0.3)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#FFD400] sm:h-8 sm:w-8">
    <span className="h-2 w-2 rounded-full bg-[#FFD400] transition-colors duration-300 group-hover:bg-black" />
  </span>
</a>

        {/* RANDOM SIGNAL POINTS */}
        <span className="contact-radar-point absolute left-[22%] top-[65%] h-1.5 w-1.5 rounded-full bg-neutral-600" />

        <span className="contact-radar-point contact-radar-point-delay absolute right-[24%] top-[32%] h-1.5 w-1.5 rounded-full bg-[#FFD400]" />

      </div>

      {/* SIDE COORDINATES */}
      <p className="absolute left-5 top-1/2 hidden -translate-y-1/2 font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-800 lg:block">
        30.3752° N
      </p>

      <p className="absolute right-5 top-1/2 hidden -translate-y-1/2 font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-800 lg:block">
        Channel / Open
      </p>

      {/* BOTTOM STATUS */}
      <div className="absolute bottom-5 left-5 right-5 z-30 flex items-center justify-between border-t border-neutral-800 pt-4 sm:bottom-7 sm:left-7 sm:right-7">

        <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-700 sm:text-[8px]">
          Opportunity / Project / Collaboration
        </p>

        <div className="flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-[#FFD400]" />

          <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-600 sm:text-[8px]">
            Signal Ready
          </p>

        </div>

      </div>

    </div>
  );
}

/* =========================================
   CONTACT
========================================= */

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-neutral-800 bg-[#050505] px-6 py-20 text-white lg:px-12 lg:py-32"
    >
      {/* BACKGROUND SYSTEM */}
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

      {/* GLOW */}
      <div className="pointer-events-none absolute bottom-[-220px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#FFD400]/10 blur-[150px] lg:h-[700px] lg:w-[700px]" />

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* =========================================
            TOP LABEL
        ========================================= */}

        <div className="flex items-center justify-between">

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD400] sm:text-xs">
            08 — Contact
          </p>

          <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 md:block">
            Open to work / Freelance / Collaboration
          </p>

        </div>

        {/* =========================================
            HERO
        ========================================= */}

        <div className="mt-10 grid grid-cols-1 gap-8 border-b border-neutral-800 pb-10 lg:mt-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10 lg:pb-14">

          <Reveal>

            <div>

              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600 sm:text-[10px]">
                Have something worth building?
              </p>

              <h2 className="text-[17vw] font-bold uppercase leading-[0.76] tracking-[-0.065em] sm:text-[11vw] lg:text-[8vw]">
                Let&apos;s
                <br />

                <span className="text-[#FFD400]">
                  Build
                </span>

                <br />

                Something.
              </h2>

            </div>

          </Reveal>

          <div className="flex items-end">

            <Reveal delay={100}>

              <div>

                <div className="flex items-center gap-3">

                  <span className="relative flex h-3 w-3">

                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD400] opacity-40" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#FFD400]" />

                  </span>

                  <p className="text-lg font-medium uppercase tracking-tight">
                    Available
                  </p>

                </div>

                <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-400 sm:text-base lg:text-lg">
                  Whether you&apos;re looking for a developer, need a
                  website or have an idea you&apos;d like to bring to
                  life, I&apos;d love to hear about it.
                </p>

              </div>

            </Reveal>

          </div>

        </div>

        {/* =========================================
            SIGNAL GRAPHIC
        ========================================= */}

        <div className="border-b border-neutral-800 py-8 sm:py-10 lg:py-14">

          <Reveal delay={100}>

            <div className="mb-6 flex items-end justify-between">

              <div>

                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  Communication System
                </p>

                <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                  Open For
                  <span className="text-[#FFD400]"> Signals.</span>
                </h3>

              </div>

              <p className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-700 sm:block">
                Radar / Active
              </p>

            </div>

            <ContactSignal />

          </Reveal>

        </div>

        {/* =========================================
            EMAIL
        ========================================= */}

        <Reveal delay={100}>

          <div className="border-b border-neutral-800">

            <a
              href="mailto:sohan1592003@gmail.com"
              className="group relative block overflow-hidden py-9 sm:py-12 lg:py-16"
            >

              <div className="absolute inset-0 origin-left scale-x-0 bg-[#FFD400] transition-transform duration-500 ease-out group-hover:scale-x-100" />

              <div className="relative z-10">

                <div className="mb-4 flex items-center justify-between">

                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 transition-colors duration-300 group-hover:text-black/50">
                    Primary Contact / Email
                  </p>

                  <span className="font-mono text-[9px] text-[#FFD400] transition-colors duration-300 group-hover:text-black">
                    01 ↗
                  </span>

                </div>

                <div className="flex items-end justify-between gap-5">

                  <p className="break-all text-[6.2vw] font-bold leading-none tracking-[-0.055em] transition-colors duration-300 group-hover:text-black sm:text-[4.5vw] lg:text-[3.8vw]">
                    sohan1592003

                    <span className="text-[#FFD400] transition-colors duration-300 group-hover:text-black">
                      @
                    </span>

                    gmail.com
                  </p>

                  <span className="hidden shrink-0 text-5xl transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:text-black sm:block lg:text-7xl">
                    ↗
                  </span>

                </div>

              </div>

            </a>

          </div>

        </Reveal>

        {/* =========================================
            SOCIAL LINKS
        ========================================= */}

        <div className="grid grid-cols-1 border-b border-neutral-800 sm:grid-cols-2">

          {socialLinks.map((social, index) => (

            <div
              key={social.name}
              className={
                index === 0
                  ? "border-b border-neutral-800 sm:border-b-0 sm:border-r"
                  : ""
              }
            >

              <Reveal
                delay={100 + index * 50}
                className="h-full"
              >

                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden p-6 transition-colors duration-300 hover:bg-[#0d0d0d] sm:min-h-[220px] sm:p-8"
                >

                  {/* NUMBER */}
                  <span className="pointer-events-none absolute -bottom-6 -right-2 select-none font-mono text-[130px] font-bold tracking-[-0.08em] text-neutral-950 transition-colors duration-300 group-hover:text-[#FFD400]/5 sm:text-[160px]">
                    {social.number}
                  </span>

                  <div className="relative z-10 flex items-start justify-between">

                    <div>

                      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                        {social.label}
                      </p>

                      <p className="mt-2 font-mono text-[9px] text-[#FFD400]">
                        {social.number}
                      </p>

                    </div>

                    <span className="text-xl text-neutral-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FFD400]">
                      ↗
                    </span>

                  </div>

                  <div className="relative z-10">

                    <p className="text-4xl font-bold uppercase tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#FFD400] sm:text-5xl lg:text-6xl">
                      {social.name}
                    </p>

                    <div className="mt-4 flex items-center gap-3">

                      <span className="h-px w-8 bg-neutral-800 transition-all duration-300 group-hover:w-14 group-hover:bg-[#FFD400]" />

                      <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-700">
                        Open Profile
                      </p>

                    </div>

                  </div>

                </a>

              </Reveal>

            </div>

          ))}

        </div>

        {/* =========================================
            FINAL CTA
        ========================================= */}

        <div className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-[1fr_auto] lg:items-center lg:py-14">

          <Reveal delay={100}>

            <div>

              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                Next Step
              </p>

              <p className="mt-3 max-w-2xl text-xl font-medium leading-8 text-neutral-300 sm:text-2xl">
                Got an idea, opportunity or something interesting to discuss?
              </p>

            </div>

          </Reveal>

          <Reveal delay={150}>

            <a
              href="mailto:sohan1592003@gmail.com"
              className="group flex w-full items-center justify-between gap-8 bg-[#FFD400] px-6 py-5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-black transition-transform duration-300 hover:-translate-y-1 sm:w-auto sm:px-8 sm:py-6 sm:text-xs"
            >
              Start A Conversation

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>

            </a>

          </Reveal>

        </div>

        {/* END */}
        <div className="flex items-center gap-4 border-t border-neutral-800 pt-6">

          <span className="h-1.5 w-1.5 rounded-full bg-[#FFD400]" />

          <span className="h-px flex-1 bg-neutral-800" />

          <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-neutral-700 sm:text-[9px]">
            End / Portfolio 2026
          </p>

        </div>

      </div>
    </section>
  );
}