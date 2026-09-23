export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-[#050505] px-6 pt-16 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold">
              SOHAN CHANDRA PANI
              <span className="text-[#FFD400]">.</span>
            </h3>

            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-[#FFD400]">
              Web Developer × IT Student
            </p>

            <p className="mt-5 max-w-sm leading-7 text-neutral-400">
              Building digital experiences with code,
              creativity and curiosity.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
              Navigate
            </p>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="#about"
                className="text-sm text-neutral-300 transition-colors duration-300 hover:text-[#FFD400]"
              >
                About
              </a>

              <a
                href="#services"
                className="text-sm text-neutral-300 transition-colors duration-300 hover:text-[#FFD400]"
              >
                Services
              </a>

              <a
                href="#projects"
                className="text-sm text-neutral-300 transition-colors duration-300 hover:text-[#FFD400]"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-sm text-neutral-300 transition-colors duration-300 hover:text-[#FFD400]"
              >
                Contact
              </a>

            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
              Connect
            </p>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="https://github.com/BUZZ1592003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-300 transition-colors duration-300 hover:text-[#FFD400]"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/sohan-chandra-pani-83b796265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-300 transition-colors duration-300 hover:text-[#FFD400]"
              >
                LinkedIn ↗
              </a>

            </div>
          </div>

          {/* AVAILABILITY */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
              Available For
            </p>

            <div className="mt-5 flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-[#FFD400]" />

              <p className="text-sm leading-6 text-neutral-300">
                Freelance &amp;
                <br />
                Opportunities
              </p>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-3 border-t border-neutral-800 py-6 font-mono text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Sohan Chandra Pani. All rights reserved.
          </p>

          <p>
            Built with Next.js
            <span className="text-[#FFD400]"> × </span>
            TypeScript
            <span className="text-[#FFD400]"> × </span>
            Three.js
          </p>

        </div>

      </div>
    </footer>
  );
}