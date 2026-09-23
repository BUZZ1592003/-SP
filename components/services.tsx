"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    title: "Personal & Portfolio Websites",
    shortTitle: "PERSONAL / PORTFOLIO",
    description:
      "Modern, responsive websites for developers, creators, students and personal brands.",
    type: "Portfolio",
  },
  {
    number: "02",
    title: "Business Websites",
    shortTitle: "BUSINESS WEBSITES",
    description:
      "Clean and responsive websites for small businesses, organizations and startups looking to establish their presence online.",
    type: "Business",
  },
  {
    number: "03",
    title: "Web Applications",
    shortTitle: "WEB APPLICATIONS",
    description:
      "Interactive web applications built around specific ideas, workflows and functionality.",
    type: "Application",
  },
  {
    number: "04",
    title: "UI Implementation",
    shortTitle: "UI IMPLEMENTATION",
    description:
      "Turning designs, layouts and ideas into responsive, functional interfaces using modern web technologies.",
    type: "Interface",
  },
];

/* =========================================
   PORTFOLIO PREVIEW
========================================= */

function PortfolioPreview() {
  return (
    <div className="relative h-full overflow-hidden bg-[#080808]">

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #525252 1px, transparent 1px),
            linear-gradient(to bottom, #525252 1px, transparent 1px)
          `,
          backgroundSize: "35px 35px",
        }}
      />

      {/* NAV */}
      <div className="relative z-10 flex items-center justify-between border-b border-neutral-800 px-5 py-4 sm:px-7">

        <p className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white">
          NAME<span className="text-[#FFD400]">.</span>
        </p>

        <div className="flex gap-4">
          <span className="h-1 w-8 bg-neutral-700" />
          <span className="h-1 w-8 bg-neutral-800" />
          <span className="h-1 w-5 bg-[#FFD400]" />
        </div>

      </div>

      {/* HERO */}
      <div className="relative z-10 px-5 py-10 sm:px-8 sm:py-14">

        <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#FFD400]">
          Creative Developer
        </p>

        <p className="mt-4 text-[12vw] font-bold uppercase leading-[0.78] tracking-[-0.06em] sm:text-[8vw] lg:text-[4vw]">
          Build
          <br />
          <span className="text-[#FFD400]">
            Digital.
          </span>
        </p>

        <div className="mt-7 h-1.5 w-20 bg-[#FFD400]" />

      </div>

      {/* PROJECT CARDS */}
      <div className="absolute bottom-5 left-5 right-5 z-10 grid grid-cols-3 gap-2 sm:bottom-7 sm:left-8 sm:right-8">

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="group relative h-16 overflow-hidden border border-neutral-800 bg-[#0d0d0d] sm:h-20"
          >
            <span className="absolute left-2 top-2 font-mono text-[6px] text-neutral-700">
              0{item}
            </span>

            <span className="absolute bottom-2 left-2 h-1 w-8 bg-neutral-700 transition-all duration-300 group-hover:w-12 group-hover:bg-[#FFD400]" />
          </div>
        ))}

      </div>

      {/* DECORATION */}
      <div className="services-preview-float absolute right-[10%] top-[25%] h-16 w-16 rotate-12 border border-[#FFD400]/40 sm:h-20 sm:w-20" />

    </div>
  );
}

/* =========================================
   BUSINESS PREVIEW
========================================= */

function BusinessPreview() {
  return (
    <div className="relative h-full overflow-hidden bg-[#f2f2ed] text-black">

      {/* NAV */}
      <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 sm:px-7">

        <div>
          <p className="text-[10px] font-black uppercase tracking-tight">
            NORTH
          </p>

          <p className="font-mono text-[5px] uppercase tracking-[0.2em] text-black/40">
            Business Solutions
          </p>
        </div>

        <div className="flex items-center gap-4">

          <span className="hidden font-mono text-[6px] uppercase tracking-[0.15em] text-black/50 sm:block">
            About
          </span>

          <span className="hidden font-mono text-[6px] uppercase tracking-[0.15em] text-black/50 sm:block">
            Services
          </span>

          <div className="bg-black px-3 py-2 font-mono text-[6px] uppercase text-white">
            Contact
          </div>

        </div>

      </div>

      {/* BUSINESS HERO */}
      <div className="grid h-[65%] grid-cols-[1.15fr_0.85fr]">

        <div className="flex flex-col justify-center px-5 sm:px-8">

          <p className="font-mono text-[6px] uppercase tracking-[0.25em] text-black/40">
            Strategy / Growth / Digital
          </p>

          <p className="mt-4 max-w-md text-3xl font-black leading-[0.9] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            MOVE YOUR
            <br />
            BUSINESS
            <br />
            <span className="text-black/30">
              FORWARD.
            </span>
          </p>

          <div className="mt-6 flex items-center gap-3">

            <div className="bg-[#FFD400] px-4 py-2 font-mono text-[6px] font-bold uppercase">
              Get Started
            </div>

            <span className="font-mono text-[6px] uppercase text-black/40">
              Learn More →
            </span>

          </div>

        </div>

        {/* ABSTRACT IMAGE AREA */}
        <div className="relative overflow-hidden bg-black">

          <div className="services-business-circle absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFD400] sm:h-52 sm:w-52" />

          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#FFD400] sm:h-28 sm:w-28" />

          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />

        </div>

      </div>

      {/* METRICS */}
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-black/10">

        <div className="p-3 sm:p-4">
          <p className="text-lg font-black sm:text-2xl">01</p>
          <p className="font-mono text-[5px] uppercase text-black/40">
            Strategy
          </p>
        </div>

        <div className="border-x border-black/10 p-3 sm:p-4">
          <p className="text-lg font-black sm:text-2xl">02</p>
          <p className="font-mono text-[5px] uppercase text-black/40">
            Presence
          </p>
        </div>

        <div className="p-3 sm:p-4">
          <p className="text-lg font-black sm:text-2xl">03</p>
          <p className="font-mono text-[5px] uppercase text-black/40">
            Growth
          </p>
        </div>

      </div>

    </div>
  );
}

/* =========================================
   WEB APPLICATION PREVIEW
========================================= */

function ApplicationPreview() {
  return (
    <div className="relative flex h-full overflow-hidden bg-[#090909]">

      {/* SIDEBAR */}
      <div className="w-[52px] shrink-0 border-r border-neutral-800 bg-[#070707] py-4 sm:w-[70px]">

        <div className="mx-auto flex h-7 w-7 items-center justify-center bg-[#FFD400] font-mono text-[8px] font-bold text-black">
          A
        </div>

        <div className="mt-8 flex flex-col items-center gap-5">

          {[1, 2, 3, 4].map((item) => (
            <span
              key={item}
              className={`
                h-2
                w-2
                rounded-full
                ${item === 1 ? "bg-[#FFD400]" : "bg-neutral-800"}
              `}
            />
          ))}

        </div>

      </div>

      {/* DASHBOARD */}
      <div className="min-w-0 flex-1">

        {/* TOP BAR */}
        <div className="flex h-14 items-center justify-between border-b border-neutral-800 px-4 sm:px-6">

          <div>
            <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-600">
              Dashboard
            </p>

            <p className="mt-1 text-xs font-semibold">
              Overview
            </p>
          </div>

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-[#FFD400]" />

            <span className="font-mono text-[6px] uppercase text-neutral-600">
              Live
            </span>

          </div>

        </div>

        {/* DASHBOARD CONTENT */}
        <div className="p-4 sm:p-6">

          {/* STAT CARDS */}
          <div className="grid grid-cols-3 gap-2">

            {[72, 48, 91].map((value, index) => (
              <div
                key={value}
                className="border border-neutral-800 bg-[#0d0d0d] p-3"
              >
                <p className="font-mono text-[6px] uppercase text-neutral-600">
                  Metric 0{index + 1}
                </p>

                <p className="mt-2 text-xl font-bold sm:text-2xl">
                  {value}
                </p>

                <div className="mt-3 h-1 bg-neutral-900">
                  <div
                    className="h-full bg-[#FFD400]"
                    style={{ width: `${value}%` }}
                  />
                </div>

              </div>
            ))}

          </div>

          {/* CHART */}
          <div className="relative mt-3 h-[145px] overflow-hidden border border-neutral-800 bg-[#0b0b0b] p-4 sm:h-[180px]">

            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #525252 1px, transparent 1px),
                  linear-gradient(to bottom, #525252 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            />

            <p className="relative z-10 font-mono text-[6px] uppercase tracking-[0.2em] text-neutral-600">
              Activity / Performance
            </p>

            {/* FAKE GRAPH */}
            <svg
              viewBox="0 0 500 120"
              className="absolute bottom-3 left-3 right-3 h-[90px]]"
            >
              <path
                d="M0 100 C70 90 80 45 145 65 C220 90 250 15 315 45 C370 65 405 20 500 12"
                fill="none"
                stroke="#FFD400"
                strokeWidth="3"
                className="services-chart-line"
              />

              <path
                d="M0 100 C70 90 80 45 145 65 C220 90 250 15 315 45 C370 65 405 20 500 12"
                fill="none"
                stroke="#FFD400"
                strokeOpacity="0.08"
                strokeWidth="16"
              />
            </svg>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================
   UI IMPLEMENTATION PREVIEW
========================================= */

function InterfacePreview() {
  return (
    <div className="relative h-full overflow-hidden bg-[#e8e8e3] text-black">

      {/* DESIGN GRID */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* COORDINATES */}
      <p className="absolute left-4 top-4 font-mono text-[6px] uppercase tracking-[0.2em] text-black/40">
        X / 124
      </p>

      <p className="absolute right-4 top-4 font-mono text-[6px] uppercase tracking-[0.2em] text-black/40">
        Y / 086
      </p>

      {/* MAIN UI CARD */}
      <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 border-2 border-black bg-white shadow-[12px_12px_0_#FFD400]">

        {/* WINDOW HEADER */}
        <div className="flex items-center justify-between border-b-2 border-black px-4 py-3">

          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-black" />
            <span className="h-2 w-2 rounded-full border border-black" />
            <span className="h-2 w-2 rounded-full border border-black" />
          </div>

          <p className="font-mono text-[6px] uppercase tracking-[0.2em]">
            Component / 04
          </p>

        </div>

        {/* UI */}
        <div className="grid grid-cols-[0.8fr_1.2fr]">

          <div className="border-r-2 border-black p-4 sm:p-6">

            <p className="font-mono text-[6px] uppercase tracking-[0.2em] text-black/40">
              Interface
            </p>

            <p className="mt-3 text-2xl font-black uppercase leading-[0.9] sm:text-4xl">
              Design
              <br />
              Into
              <br />
              <span className="bg-[#FFD400] px-1">
                Code.
              </span>
            </p>

          </div>

          <div className="p-4 sm:p-6">

            <div className="h-2 w-3/4 bg-black" />
            <div className="mt-2 h-2 w-1/2 bg-black/20" />

            <div className="mt-6 grid grid-cols-2 gap-2">

              <div className="h-16 border-2 border-black bg-[#FFD400]" />

              <div className="h-16 border-2 border-black" />

            </div>

            <div className="mt-3 flex items-center justify-between border-t border-black/20 pt-3">

              <span className="font-mono text-[6px] uppercase">
                Responsive
              </span>

              <span className="font-mono text-[6px] uppercase">
                Functional
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* MEASUREMENT LINES */}
      <div className="absolute bottom-[10%] left-[11%] h-px w-[78%] bg-black/20" />

      <div className="absolute bottom-[8%] left-[11%] font-mono text-[6px] uppercase text-black/40">
        Width / Responsive
      </div>

    </div>
  );
}

/* =========================================
   PREVIEW SWITCHER
========================================= */

function ServicePreview({
  activeService,
}: {
  activeService: number;
}) {
  if (activeService === 0) {
    return <PortfolioPreview />;
  }

  if (activeService === 1) {
    return <BusinessPreview />;
  }

  if (activeService === 2) {
    return <ApplicationPreview />;
  }

  return <InterfacePreview />;
}

/* =========================================
   SERVICES
========================================= */

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const service = services[activeService];

  function previousService() {
    setActiveService((current) =>
      current === 0 ? services.length - 1 : current - 1
    );
  }

  function nextService() {
    setActiveService((current) =>
      current === services.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-neutral-800 bg-[#050505] px-6 py-20 text-white lg:px-12 lg:py-32"
    >
      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #737373 1px, transparent 1px),
            linear-gradient(to bottom, #737373 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* TOP LABEL */}
        <div className="flex items-center justify-between">

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD400] sm:text-xs">
            04 — What I Can Build
          </p>

          <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 md:block">
            Websites / Interfaces / Applications
          </p>

        </div>

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mt-10 grid grid-cols-1 gap-8 border-b border-neutral-800 pb-10 lg:mt-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10 lg:pb-14">

          <Reveal>

            <h2 className="text-[17vw] font-bold uppercase leading-[0.78] tracking-[-0.06em] sm:text-[10vw] lg:text-[7vw]">
              From
              <br />
              Idea To
              <br />

              <span className="text-[#FFD400]">
                Reality.
              </span>
            </h2>

          </Reveal>

          <div className="flex items-end">

            <Reveal delay={100}>

              <div>

                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  Development Capabilities
                </p>

                <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7 lg:text-lg">
                  I work on websites and web experiences that combine
                  clean interfaces, useful functionality and modern web
                  technologies.
                </p>

              </div>

            </Reveal>

          </div>

        </div>

        {/* =========================================
            MOBILE VISUAL SHOWCASE
        ========================================= */}

        <div className="lg:hidden">

          <Reveal delay={100}>

            <div className="py-8">

              {/* ACTIVE SERVICE INFO */}
              <div className="mb-5 flex items-end justify-between">

                <div>

                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-neutral-600">
                    Live Preview
                  </p>

                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#FFD400]">
                    {service.type} / {service.number}
                  </p>

                </div>

                <div className="flex gap-2">

                  <button
                    type="button"
                    onClick={previousService}
                    aria-label="Previous service"
                    className="flex h-10 w-10 items-center justify-center border border-neutral-800 font-mono text-xs transition-colors active:border-[#FFD400] active:text-[#FFD400]"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={nextService}
                    aria-label="Next service"
                    className="flex h-10 w-10 items-center justify-center bg-[#FFD400] font-mono text-xs text-black active:scale-95"
                  >
                    →
                  </button>

                </div>

              </div>

              {/* PREVIEW */}
              <div className="h-[390px] overflow-hidden border border-neutral-800 sm:h-[470px]">

                <ServicePreview
                  activeService={activeService}
                />

              </div>

              {/* SELECTOR */}
              <div className="mt-3 grid grid-cols-4 border border-neutral-800">

                {services.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveService(index)}
                    className={`
                      border-r
                      border-neutral-800
                      py-3
                      font-mono
                      text-[9px]
                      last:border-r-0
                      ${
                        activeService === index
                          ? "bg-[#FFD400] text-black"
                          : "text-neutral-600"
                      }
                    `}
                  >
                    {item.number}
                  </button>
                ))}

              </div>

              {/* SERVICE INFORMATION */}
              <div className="border-b border-neutral-800 py-7">

                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-600">
                  {service.shortTitle}
                </p>

                <h3 className="mt-3 text-3xl font-bold leading-[1] tracking-[-0.03em]">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
                  {service.description}
                </p>

              </div>

            </div>

          </Reveal>

        </div>

        {/* =========================================
            DESKTOP INTERACTIVE SYSTEM
        ========================================= */}

        <div className="hidden border-b border-neutral-800 lg:grid lg:grid-cols-[0.8fr_1.2fr]">

          {/* SERVICE SELECTOR */}
          <div className="border-r border-neutral-800">

            <Reveal delay={100}>

              <div>

                {services.map((item, index) => {
                  const isActive = activeService === index;

                  return (
                    <button
                      key={item.number}
                      type="button"
                      onMouseEnter={() => setActiveService(index)}
                      onFocus={() => setActiveService(index)}
                      onClick={() => setActiveService(index)}
                      className={`
                        group
                        relative
                        w-full
                        overflow-hidden
                        border-b
                        border-neutral-800
                        px-7
                        py-8
                        text-left
                        transition-colors
                        duration-300
                        last:border-b-0
                        ${
                          isActive
                            ? "bg-[#FFD400] text-black"
                            : "hover:bg-[#0d0d0d]"
                        }
                      `}
                    >

                      {/* BACKGROUND NUMBER */}
                      <span
                        className={`
                          pointer-events-none
                          absolute
                          -right-2
                          top-1/2
                          -translate-y-1/2
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

                      <div className="relative z-10">

                        <div className="flex items-center justify-between">

                          <p
                            className={`
                              font-mono
                              text-[9px]
                              uppercase
                              tracking-[0.2em]
                              ${
                                isActive
                                  ? "text-black/50"
                                  : "text-neutral-600"
                              }
                            `}
                          >
                            {item.shortTitle}
                          </p>

                          <span
                            className={`
                              font-mono
                              text-[9px]
                              ${
                                isActive
                                  ? "text-black"
                                  : "text-[#FFD400]"
                              }
                            `}
                          >
                            {item.number}
                          </span>

                        </div>

                        <h3 className="mt-4 max-w-lg text-3xl font-bold leading-[1] tracking-[-0.035em] xl:text-4xl">
                          {item.title}
                        </h3>

                        <p
                          className={`
                            mt-4
                            max-w-lg
                            text-sm
                            leading-6
                            ${
                              isActive
                                ? "text-black/65"
                                : "text-neutral-500"
                            }
                          `}
                        >
                          {item.description}
                        </p>

                      </div>

                    </button>
                  );
                })}

              </div>

            </Reveal>

          </div>

          {/* VISUAL PREVIEW */}
          <div className="p-8">

            <Reveal delay={180}>

              <div>

                {/* PREVIEW HEADER */}
                <div className="mb-4 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <span className="relative flex h-2 w-2">

                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD400] opacity-30" />

                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFD400]" />

                    </span>

                    <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-neutral-600">
                      Live Interface Preview
                    </p>

                  </div>

                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#FFD400]">
                    {service.number} / {service.type}
                  </p>

                </div>

                {/* BROWSER FRAME */}
                <div className="overflow-hidden border border-neutral-800 bg-[#080808]">

                  {/* BROWSER BAR */}
                  <div className="flex h-10 items-center justify-between border-b border-neutral-800 px-4">

                    <div className="flex gap-1.5">

                      <span className="h-2 w-2 rounded-full bg-neutral-700" />
                      <span className="h-2 w-2 rounded-full bg-neutral-800" />
                      <span className="h-2 w-2 rounded-full bg-neutral-800" />

                    </div>

                    <div className="flex h-5 w-[45%] items-center border border-neutral-800 px-3">

                      <span className="font-mono text-[6px] uppercase tracking-[0.15em] text-neutral-700">
                        preview.local/{service.type.toLowerCase()}
                      </span>

                    </div>

                    <span className="font-mono text-[7px] text-neutral-700">
                      ↗
                    </span>

                  </div>

                  {/* ACTIVE PREVIEW */}
                  <div className="h-[500px] xl:h-[540px]">

                    <ServicePreview
                      activeService={activeService}
                    />

                  </div>

                </div>

                {/* PREVIEW FOOTER */}
                <div className="mt-4 flex items-center justify-between">

                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-700">
                    Responsive / Functional / Modern
                  </p>

                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-600">
                    Hover Services To Explore
                  </p>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="flex flex-col gap-5 pt-8 md:flex-row md:items-center md:justify-between lg:pt-10">

          <Reveal delay={100}>

            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600 sm:text-xs">
              Have something different in mind?
            </p>

          </Reveal>

          <Reveal delay={150}>

            <a
              href="#contact"
              className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:text-[#FFD400] sm:text-sm"
            >
              Let&apos;s Talk

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </a>

          </Reveal>

        </div>

      </div>
    </section>
  );
}