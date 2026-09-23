"use client";

import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-neutral-800 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 lg:px-12">

          {/* LOGO */}
          <a
            href="#home"
            className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-[#FFD400]"
          >
            SOHAN
            <span className="text-[#FFD400]">.</span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-7 lg:flex">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#FFD400] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <a
              href="#contact"
              className="ml-2 bg-[#FFD400] px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              Let&apos;s Talk ↗
            </a>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={`h-px w-6 bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-px w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505] transition-all duration-500 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col justify-between px-6 pb-10 pt-28">

          {/* LINKS */}
          <div>
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between border-b border-neutral-800 py-5"
              >
                <span className="text-4xl font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-[#FFD400]">
                  {link.name}
                </span>

                <span className="font-mono text-xs text-neutral-600">
                  0{index + 2}
                </span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between border-b border-neutral-800 py-5"
            >
              <span className="text-4xl font-bold uppercase tracking-tight text-[#FFD400]">
                Contact
              </span>

              <span className="font-mono text-xs text-[#FFD400]">
                08
              </span>
            </a>
          </div>

          {/* MOBILE FOOTER */}
          <div className="flex items-center justify-between pt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
              Web Developer
            </p>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FFD400]" />

              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                Available
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}