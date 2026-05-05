/**
 * @fileoverview Lithos UI feature matrix.
 * - Presents the system as a rigid card field with explicit margins and hard edges.
 * - Uses scale-on-hover and shadow steps to imply physical lift without layout drift.
 * - Keeps the grid readable by controlling wrap math instead of relying on soft spacing.
 */

const features = [
  {
    title: 'Structural Cards',
    icon: '✦',
    description:
      'Every card is built to stay legible, rigid, and visually loud under pressure.',
  },
  {
    title: 'Brutal Buttons',
    icon: '▲',
    description:
      'CTA styles that punch through the layout with hard borders and sharp shadow offsets.',
  },
  {
    title: 'Native Obsidian Mode',
    icon: '◐',
    description:
      'A complete dark-mode implementation with swappable CSS tokens for instant theme switching.',
  },
  {
    title: 'Staggered Motion Pack',
    icon: '⬣',
    description:
      'Pre-built keyframes and easing curves for brutalist animation without external motion libraries.',
  },
  {
    title: 'Responsive Rhythm',
    icon: '■',
    description:
      'Layouts snap cleanly from mobile stacks to desktop rows without losing structural integrity.',
  },
  {
    title: 'Reusable Blocks',
    icon: '✱',
    description:
      'Eight modular sections designed to assemble landing pages with zero visual compromise.',
  },
]

function FeatureGrid() {
  // - 24px shell keeps the block aligned with the page rhythm above and below.
  return (
    <section id="features" className="bg-(--lithos-surface) py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-center text-(--lithos-text) md:text-5xl">
          No Fluff. Just Features
        </h2>

        {/* - Negative outer margin cancels the card margin so the field stays centered. */}
        <div className="mt-20 -m-4 flex flex-wrap justify-center">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden m-4 w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] border-4 border-(--lithos-border) bg-(--lithos-surface) p-6 shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-all duration-150 ease-out hover:shadow-[10px_10px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer"
            >
              {/* - The scale wipe is a hard plane, not a fade; the card stays geometrically intact. */}
              <div className="absolute inset-0 z-0 origin-top-left scale-0 bg-(--lithos-accent) transition-transform duration-300 ease-out group-hover:scale-100" aria-hidden="true" />
              <div className="relative z-10 flex flex-col">
                {/* - 56px icon tile: enough mass to anchor the card without crowding copy. */}
                <div className="flex h-14 w-14 items-center justify-center border-4 border-(--lithos-border) bg-(--lithos-accent) text-3xl text-(--lithos-accent-text) group-hover:bg-(--lithos-text) group-hover:text-(--lithos-surface) transition-colors duration-300 z-10" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-2xl font-black uppercase tracking-tighter leading-none text-(--lithos-text) group-hover:text-(--lithos-accent-text) transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base font-medium leading-none text-(--lithos-text) group-hover:text-(--lithos-accent-text) transition-colors duration-300">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* - Footer link is centered to keep the card field visually sealed. */}
        <div className="mt-12 flex justify-center">
          <a href="#pricing" className="font-black uppercase tracking-tighter text-(--lithos-text) transition-colors hover:text-(--lithos-accent) cursor-pointer">
            Explore the full library →
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid