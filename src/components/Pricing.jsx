// Pricing plans with full 8-item feature matrix for visual parity
const plans = [
  {
    key: 'starter-block',
    title: 'FREE',
    price: '$0',
    highlighted: false,
    features: [
      { label: '3 Core Components', included: true },
      { label: 'Raw Source Code', included: true },
      { label: 'Personal License', included: true },
      { label: 'Standard README', included: true },
      { label: 'No Full Assembly', included: false },
      { label: 'No Obsidian Mode', included: false },
      { label: 'No Native Motion', included: false },
      { label: 'No Priority Support', included: false },
    ],
    goal: 'High-quality lead magnet for email capture.',
    cta: 'Get Starter Block',
  },
  {
    key: 'pro-assembly',
    title: 'PRO',
    price: '$39',
    highlighted: true,
    features: [
      { label: 'All 8 Premium Blocks', included: true },
      { label: 'Complete App.jsx Layout', included: true },
      { label: 'Obsidian (Dark) Mode', included: true },
      { label: 'Native Motion Pack', included: true },
      { label: 'Design Tokens', included: true },
      { label: 'Priority Support', included: true },
      { label: 'Lifetime Updates', included: true },
      { label: 'Commercial License', included: true },
    ],
    goal: 'The complete engineered UI kit. Ready to launch.',
    cta: 'Buy Pro Assembly',
  },
]

function Pricing() {
  return (
    <section id="pricing" className="bg-(--lithos-bg) py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-center text-(--lithos-text) md:text-5xl">
          Invest Once. Build Forever
        </h2>
        <p className="mt-4 text-lg font-bold leading-none text-center text-(--lithos-text) md:text-xl">
          Zero recurring fees. Just raw, portable components engineered for production.
        </p>

        {/* parent negative margin to align child margins with surrounding headers */}
        <div className="mt-20 -m-4 flex flex-col lg:flex-row items-stretch justify-center">
          {plans.map((tier) => {
            const highlighted = tier.highlighted === true

            return (
              <article
                key={tier.key}
                className={
                  highlighted
                    ? 'm-4 flex w-[calc(100%-2rem)] lg:flex-1 flex-col h-full border-4 border-(--lithos-border) bg-(--lithos-accent) p-6 sm:p-8 shadow-[10px_10px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:shadow-[14px_14px_0px_0px_var(--lithos-shadow)] active:shadow-[4px_4px_0px_0px_var(--lithos-shadow)] motion-safe:animate-[brutalist-pop_400ms_cubic-bezier(0.175,0.885,0.32,1.275)] cursor-pointer'
                    : 'm-4 flex w-[calc(100%-2rem)] lg:flex-1 flex-col h-full border-4 border-(--lithos-border) bg-(--lithos-surface) p-6 sm:p-8 shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:shadow-[10px_10px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] motion-safe:animate-[slide-up_400ms_cubic-bezier(0.175,0.885,0.32,1.275)] cursor-pointer'
                }
              >
                <h3 className={`text-3xl font-black uppercase tracking-tighter leading-none ${highlighted ? 'text-(--lithos-accent-text)' : 'text-(--lithos-text)'}`}>{tier.title}</h3>
                <p className={`mt-4 text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none ${highlighted ? 'text-(--lithos-accent-text)' : 'text-(--lithos-text)'}`}>{tier.price}</p>
                <p className={`mt-4 text-base font-medium leading-snug ${highlighted ? 'text-(--lithos-accent-text)' : 'text-(--lithos-text)'}`}>{tier.goal}</p>

                <div className="mt-8">
                  <ul>
                    {tier.features && tier.features.map((feature, i) => (
                      <li
                        key={`${tier.key}-f-${i}`}
                        className={
                          'leading-snug font-black uppercase tracking-tighter' +
                          (feature.included ? (highlighted ? ' text-(--lithos-accent-text)' : ' text-(--lithos-text)') : (highlighted ? ' line-through opacity-30 text-(--lithos-accent-text)' : ' line-through opacity-30 text-(--lithos-text)')) +
                          (i < tier.features.length - 1 ? ' mb-3' : '')
                        }
                      >
                        {feature.included ? '✓ ' : '✕ '}
                        {feature.label}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href="#top"
                    className={
                      highlighted
                        ? 'inline-flex border-4 border-(--lithos-accent-text) bg-(--lithos-accent-text) px-4 py-3 sm:px-6 sm:py-4 font-black uppercase tracking-tighter leading-none text-(--lithos-accent) transition-opacity duration-150 ease-out hover:opacity-80 cursor-pointer'
                        : 'inline-flex border-4 border-(--lithos-border) bg-(--lithos-surface) px-4 py-3 sm:px-6 sm:py-4 font-black uppercase tracking-tighter leading-none text-(--lithos-text) shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:shadow-[10px_10px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer'
                    }
                  >
                    {tier.cta}
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Branching guidance (developer note):
// - `free` branch: include only the files listed in Starter Block
// - `starter` branch: include the raw components (Starter Kit)
// - `pro` branch: include the full project with `App.jsx` assembled (Pro Assembly)

export default Pricing
