/**
 * @fileoverview Lithos UI hero slab.
 * - Opens the page with a zero-gap vertical anchor and a heavy terminal-style showcase.
 * - Uses hard borders and offset shadows to read as a built object, not a soft banner.
 * - Keeps the opening rhythm controlled by explicit spacing math and centered containment.
 */
import { Link } from 'react-router-dom'
import CodeViewer from '../ui/CodeViewer'

function Hero() {
  const appShowcaseCode = `import { 
  ThemeEngine, 
  Hero, 
  FeatureGrid, 
  Pricing, 
  FAQ 
} from './components';

export default function App() {
  return (
    <main className="obsidian">
      <ThemeEngine />
      <Hero
        heading="SHIP FASTER"
        motion="spring"
      />
      <FeatureGrid
        columns={3}
        icons="heavy-glyphs"
      />
      <Pricing
        tier="pro"
        highlight="accent"
      />
      <FAQ
        mode="single-active"
      />
    </main>
  );
}`;
  return (
    <section id="top" className="bg-(--lithos-surface) py-24">
      {/* - 96px shell: 24 * 4px = the opening rhythm unit. */}
      {/* - Centered lane: keeps the slab width inside the page’s vertical cadence. */}
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-balance text-5xl font-black uppercase tracking-tighter leading-none md:text-7xl lg:text-8xl">
          BUILD FRONTENDS THAT REFUSE TO BREAK
        </h1>

        {/* - Copy stays inside the hero mass; 24px top margin preserves the outer shell. */}
        <p className="mt-6 text-2xl leading-none text-(--lithos-text) md:text-3xl font-body">
          Lithos UI is a neo-brutalist React component library engineered with absolute
          structural integrity.
        </p>

        {/* - Wrap is intentional: spacing stays explicit when the CTA pair collapses on small screens. */}
        <div className="mt-10 flex flex-col items-center justify-center md:flex-row flex-wrap">
          <Link
            to="/docs"
            className="border-2 border-(--lithos-border) bg-(--lithos-accent) px-8 py-4 font-black uppercase tracking-tighter leading-none text-(--lithos-accent-text) shadow-[2px_2px_0px_0px_var(--lithos-shadow)] lithos-click cursor-pointer mb-4 md:mb-0 md:mr-6"
          >
            Documentation
          </Link>

          <a
            href="https://github.com/IncredibleStand/Lithos_UI"
            target="_blank"
            rel="noopener noreferrer"
            className="border-4 border-(--lithos-border) bg-(--lithos-surface) px-8 py-4 font-black uppercase tracking-tighter leading-none text-(--lithos-text) shadow-[4px_4px_0px_0px_var(--lithos-shadow)] hover:shadow-[4px_4px_0px_0px_var(--lithos-shadow)] lithos-click cursor-pointer mb-4 md:mb-0 md:mr-6"
          >
            View on GitHub
          </a>
          
        </div>

        {/* - Single mass showcase: CodeViewer is the only structural object here. */}
        <div className="mt-20 mx-auto w-full max-w-4xl shadow-[6px_6px_0px_0px_var(--lithos-accent)]">
          <CodeViewer code={appShowcaseCode} showControls={true} />
        </div>
      </div>
    </section>
  )
}

export default Hero
