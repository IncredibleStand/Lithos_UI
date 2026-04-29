function Hero() {
  return (
    <section id="top" className="bg-(--lithos-surface) py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-balance text-5xl font-black uppercase tracking-tighter leading-none md:text-7xl">
          BUILD FRONTENDS THAT REFUSE TO BREAK
        </h1>

        <p className="mt-6 text-2xl font-bold leading-none text-(--lithos-text) md:text-3xl">
          Lithos UI is a neo-brutalist React component kit engineered with absolute
          structural integrity.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center md:flex-row">
          <a
            href="#pricing"
            className="border-4 border-(--lithos-border) bg-(--lithos-accent) px-8 py-4 font-black uppercase tracking-tighter leading-none text-black shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:shadow-[10px_10px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer"
          >
            Start Building
          </a>

          <a
            href="#features"
            className="mt-6 border-4 border-(--lithos-border) bg-(--lithos-surface) px-8 py-4 font-black uppercase tracking-tighter leading-none text-(--lithos-text) shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:shadow-[10px_10px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:mt-0 md:ml-6 cursor-pointer"
          >
            See Components
          </a>
        </div>

        {/* Monolithic Terminal Showcase */}
        <div className="mt-20 mx-auto max-w-4xl flex flex-col border-8 border-(--lithos-border) shadow-[8px_8px_0px_0px_var(--lithos-accent)] text-left">
          {/* Terminal Header */}
          <div className="flex items-center justify-start border-b-8 border-(--lithos-border) bg-(--lithos-surface) p-4">
            <div className="mr-3 h-5 w-5 rounded-full border-4 border-(--lithos-border) bg-(--lithos-text)" aria-hidden="true" />
            <div className="mr-3 h-5 w-5 rounded-full border-4 border-(--lithos-border) bg-(--lithos-text)" aria-hidden="true" />
            <div className="h-5 w-5 rounded-full border-4 border-(--lithos-border) bg-(--lithos-text)" aria-hidden="true" />
          </div>

          {/* Terminal Body */}
          <div className="bg-(--lithos-text) p-8 overflow-x-auto">
            <pre className="text-sm md:text-base font-mono leading-relaxed text-(--lithos-surface)">
              <span className="text-(--lithos-accent)">import</span>
              <span className="text-(--lithos-surface)"> {' {Hero, FeatureGrid, Pricing, FAQ} '}</span>
              <span className="text-(--lithos-accent)">from</span>
              <span className="text-(--lithos-accent)"> 'lithos-ui'</span>
              <span className="text-(--lithos-surface)">{`\n\n`}</span>

              <span className="text-(--lithos-accent)">export default</span>
              <span className="text-(--lithos-surface)"> </span>
              <span className="text-(--lithos-accent)">function</span>
              <span className="text-(--lithos-surface)"> LandingPage() {'\n'}</span>

              <span className="text-(--lithos-surface)">  </span>
              <span className="text-(--lithos-accent)">return</span>
              <span className="text-(--lithos-surface)"> ({'(\n    '}</span>
              <span className="text-(--lithos-accent)">&lt;main</span>
              <span className="text-(--lithos-accent)"> className</span>
              <span className="text-(--lithos-surface)">=</span>
              <span className="text-(--lithos-accent)">"theme-obsidian"</span>
              <span className="text-(--lithos-accent)">&gt;</span>
              <span className="text-(--lithos-surface)">{`\n      `}</span>

              <span className="text-(--lithos-accent)">&lt;Hero</span>
              <span className="text-(--lithos-surface)">{`\n        `}</span>
              <span className="text-(--lithos-accent)">heading</span>
              <span className="text-(--lithos-surface)">=</span>
              <span className="text-(--lithos-accent)">"SHIP FASTER"</span>
              <span className="text-(--lithos-surface)">{`\n        `}</span>
              <span className="text-(--lithos-accent)">motion</span>
              <span className="text-(--lithos-surface)">=</span>
              <span className="text-(--lithos-accent)">"spring"</span>
              <span className="text-(--lithos-surface)">{`\n      `}</span>
              <span className="text-(--lithos-accent)">/&gt;</span>
              <span className="text-(--lithos-surface)">{`\n      `}</span>

              <span className="text-(--lithos-accent)">&lt;FeatureGrid</span>
              <span className="text-(--lithos-surface)">{`\n        `}</span>
              <span className="text-(--lithos-accent)">columns</span>
              <span className="text-(--lithos-surface)">=</span>
              <span className="text-(--lithos-accent)">{'{3}'}</span>
              <span className="text-(--lithos-surface)">{`\n        `}</span>
              <span className="text-(--lithos-accent)">icons</span>
              <span className="text-(--lithos-surface)">=</span>
              <span className="text-(--lithos-accent)">"heavy-glyphs"</span>
              <span className="text-(--lithos-surface)">{`\n      `}</span>
              <span className="text-(--lithos-accent)">/&gt;</span>
              <span className="text-(--lithos-surface)">{`\n      `}</span>

              <span className="text-(--lithos-accent)">&lt;Pricing</span>
              <span className="text-(--lithos-surface)">{`\n        `}</span>
              <span className="text-(--lithos-accent)">tier</span>
              <span className="text-(--lithos-surface)">=</span>
              <span className="text-(--lithos-accent)">"pro"</span>
              <span className="text-(--lithos-surface)">{`\n        `}</span>
              <span className="text-(--lithos-accent)">highlight</span>
              <span className="text-(--lithos-surface)">=</span>
              <span className="text-(--lithos-accent)">"accent"</span>
              <span className="text-(--lithos-surface)">{`\n      `}</span>
              <span className="text-(--lithos-accent)">/&gt;</span>
              <span className="text-(--lithos-surface)">{`\n      `}</span>

              <span className="text-(--lithos-accent)">&lt;FAQ</span>
              <span className="text-(--lithos-surface)">{`\n        `}</span>
              <span className="text-(--lithos-accent)">mode</span>
              <span className="text-(--lithos-surface)">=</span>
              <span className="text-(--lithos-accent)">"single-active"</span>
              <span className="text-(--lithos-surface)">{`\n      `}</span>
              <span className="text-(--lithos-accent)">/&gt;</span>
              <span className="text-(--lithos-surface)">{`\n    `}</span>
              <span className="text-(--lithos-accent)">&lt;/main&gt;</span>
              <span className="text-(--lithos-surface)">{`\n  `}</span>
              <span className="text-(--lithos-accent)">)</span>
              <span className="text-(--lithos-surface)">{`\n}`}</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
