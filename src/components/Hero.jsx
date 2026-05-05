/**
 * @fileoverview Lithos UI hero slab.
 * - Opens the page with a zero-gap vertical anchor and a heavy terminal-style showcase.
 * - Uses hard borders and offset shadows to read as a built object, not a soft banner.
 * - Keeps the opening rhythm controlled by explicit spacing math and centered containment.
 */
function Hero() {
  return (
    <section id="top" className="bg-(--lithos-surface) py-24">
      {/* - 96px shell: 24 * 4px = the opening rhythm unit. */}
      {/* - Centered lane: keeps the slab width inside the page’s vertical cadence. */}
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-balance text-5xl font-black uppercase tracking-tighter leading-none md:text-7xl lg:text-8xl">
          BUILD FRONTENDS THAT REFUSE TO BREAK
        </h1>

        {/* - Copy stays inside the hero mass; 24px top margin preserves the outer shell. */}
        <p className="mt-6 text-2xl font-bold leading-none text-(--lithos-text) md:text-3xl">
          Lithos UI is a neo-brutalist React component kit engineered with absolute
          structural integrity.
        </p>

        {/* - Wrap is intentional: spacing stays explicit when the CTA pair collapses on small screens. */}
        <div className="mt-10 flex flex-col items-center justify-center md:flex-row flex-wrap">
          <a
            href="https://github.com/IncredibleStand/Lithos_UI#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="border-4 border-(--lithos-border) bg-(--lithos-accent) px-8 py-4 font-black uppercase tracking-tighter leading-none text-(--lithos-accent-text) shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:shadow-[8px_8px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer mb-4 md:mb-0 md:mr-6"
          >
            Documentation
          </a>

          <a
            href="https://github.com/IncredibleStand/Lithos_UI"
            target="_blank"
            rel="noopener noreferrer"
            className="border-4 border-(--lithos-border) bg-(--lithos-surface) px-8 py-4 font-black uppercase tracking-tighter leading-none text-(--lithos-text) shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:shadow-[8px_8px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer mb-4 md:mb-0 md:mr-6"
          >
            View on GitHub
          </a>
          
        </div>

        {/* - One slab: the panel reads as a single block of weight. */}
        <div className="mt-20 mx-auto w-full max-w-full flex flex-col border-4 sm:border-8 border-(--lithos-border) shadow-[8px_8px_0px_0px_var(--lithos-accent)] text-left">
          {/* - 4px / 8px borders and an 8px offset shadow create a hard lift, not blur. */}
          <div className="flex items-center justify-between border-b-4 sm:border-b-8 border-(--lithos-border) bg-(--lithos-text) p-2 sm:p-4">
            <div className="flex items-center">
              {/* - Repeated 20px squares act like control mass, not decoration. */}
              <div className="mr-3 h-5 w-5 border-4 border-(--lithos-surface) bg-(--lithos-surface)" aria-hidden="true" />
              <div className="mr-3 h-5 w-5 border-4 border-(--lithos-surface) bg-(--lithos-surface)" aria-hidden="true" />
              <div className="h-5 w-5 border-4 border-(--lithos-surface) bg-(--lithos-surface)" aria-hidden="true" />
            </div>
          </div>

          {/* - The shadow stays exposed so the panel reads as a lifted object. */}
          <div className="bg-(--lithos-accent) p-4 sm:p-8 overflow-x-auto max-w-full">
            {/* - Monospace block is part of the structure, not a narrative aside. */}
            <pre className="max-w-full overflow-x-auto text-[10px] min-[375px]:text-xs sm:text-sm md:text-base font-mono leading-relaxed text-(--lithos-accent-text)">
              <span className="bg-(--lithos-accent-text) text-(--lithos-accent) px-1 mx-1 font-black">import</span>
              <span className="text-(--lithos-accent-text) font-bold"> {' {ThemeEngine, Hero, FeatureGrid, Pricing, FAQ} '}</span>
              <span className="bg-(--lithos-accent-text) text-(--lithos-accent) px-1 mx-1 font-black">from</span>
              <span className="text-(--lithos-accent-text) border-(--lithos-accent-text) italic font-black"> './components'</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n\n`}</span>

              <span className="bg-(--lithos-accent-text) text-(--lithos-accent) px-1 mx-1 font-black">export</span>
              <span className="bg-(--lithos-accent-text) text-(--lithos-accent) px-1 mx-1 font-black">default</span>
              <span className="text-(--lithos-accent-text) font-bold"> </span>
              <span className="bg-(--lithos-accent-text) text-(--lithos-accent) px-1 mx-1 font-black">function</span>
              <span className="text-(--lithos-accent-text) font-bold"> App() {'\n'}</span>

              <span className="text-(--lithos-accent-text) font-bold">  </span>
              <span className="bg-(--lithos-accent-text) text-(--lithos-accent) px-1 mx-1 font-black">return</span>
              <span className="text-(--lithos-accent-text) font-bold"> ({'(\n    '}</span>
              <span className="text-(--lithos-accent-text) font-black tracking-widest uppercase">&lt;main</span>
              <span className="text-(--lithos-accent-text) font-bold"> className</span>
              <span className="text-(--lithos-accent-text) font-bold">=</span>
              <span className="text-(--lithos-accent-text) border-b-4 border-(--lithos-accent-text) italic font-black">"obsidian"</span>
              <span className="text-(--lithos-accent-text) font-bold">&gt;</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n      `}</span>

              <span className="text-(--lithos-accent-text) font-black tracking-widest uppercase">&lt;ThemeEngine</span>
              <span className="text-(--lithos-accent-text) font-bold"> /&gt;</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n      `}</span>

              <span className="text-(--lithos-accent-text) font-black tracking-widest uppercase">&lt;Hero</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n        `}</span>
              <span className="text-(--lithos-accent-text) font-bold">heading</span>
              <span className="text-(--lithos-accent-text) font-bold">=</span>
              <span className="text-(--lithos-accent-text) border-b-4 border-(--lithos-accent-text) italic font-black">"SHIP FASTER"</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n        `}</span>
              <span className="text-(--lithos-accent-text) font-bold">motion</span>
              <span className="text-(--lithos-accent-text) font-bold">=</span>
              <span className="text-(--lithos-accent-text) border-b-4 border-(--lithos-accent-text) italic font-black">"spring"</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n      `}</span>
              <span className="text-(--lithos-accent-text) font-bold">/&gt;</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n      `}</span>

              <span className="text-(--lithos-accent-text) font-black tracking-widest uppercase">&lt;FeatureGrid</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n        `}</span>
              <span className="text-(--lithos-accent-text) font-bold">columns</span>
              <span className="text-(--lithos-accent-text) font-bold">=</span>
              <span className="text-(--lithos-accent-text) font-bold">{'{3}'}</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n        `}</span>
              <span className="text-(--lithos-accent-text) font-bold">icons</span>
              <span className="text-(--lithos-accent-text) font-bold">=</span>
              <span className="text-(--lithos-accent-text) border-b-4 border-(--lithos-accent-text) italic font-black">"heavy-glyphs"</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n      `}</span>
              <span className="text-(--lithos-accent-text) font-bold">/&gt;</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n      `}</span>

              <span className="text-(--lithos-accent-text) font-black tracking-widest uppercase">&lt;Pricing</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n        `}</span>
              <span className="text-(--lithos-accent-text) font-bold">tier</span>
              <span className="text-(--lithos-accent-text) font-bold">=</span>
              <span className="text-(--lithos-accent-text) border-b-4 border-(--lithos-accent-text) italic font-black">"pro"</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n        `}</span>
              <span className="text-(--lithos-accent-text) font-bold">highlight</span>
              <span className="text-(--lithos-accent-text) font-bold">=</span>
              <span className="text-(--lithos-accent-text) border-b-4 border-(--lithos-accent-text) italic font-black">"accent"</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n      `}</span>
              <span className="text-(--lithos-accent-text) font-bold">/&gt;</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n      `}</span>

              <span className="text-(--lithos-accent-text) font-black tracking-widest uppercase">&lt;FAQ</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n        `}</span>
              <span className="text-(--lithos-accent-text) font-bold">mode</span>
              <span className="text-(--lithos-accent-text) font-bold">=</span>
              <span className="text-(--lithos-accent-text) border-b-4 border-(--lithos-accent-text) italic font-black">"single-active"</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n      `}</span>
              <span className="text-(--lithos-accent-text) font-bold">/&gt;</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n    `}</span>
              <span className="text-(--lithos-accent-text) font-bold">&lt;/main&gt;</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n  `}</span>
              <span className="text-(--lithos-accent-text) font-bold">)</span>
              <span className="text-(--lithos-accent-text) font-bold">{`\n}`}</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
