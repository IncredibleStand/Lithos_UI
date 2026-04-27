const plans = [
  {
    name: 'Starter',
    price: '$49',
    description: 'For sharp landing pages and lightweight product launches.',
    perks: ['10 core components', 'Production-ready sections', 'Email support'],
    cta: 'Choose Starter',
  },
  {
    name: 'Pro',
    price: '$99',
    description: 'For teams shipping a complete neo-brutalist system.',
    perks: ['Everything in Starter', 'Priority component requests', 'Usage updates'],
    cta: 'Choose Pro',
  },
  {
    name: 'Studio',
    price: '$149',
    description: 'For ambitious product pages and larger design systems.',
    perks: ['Everything in Pro', 'Advanced layout templates', 'Team handoff support'],
    cta: 'Choose Studio',
  },
]

function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-black md:text-5xl">
          Pricing That Hits Hard.
        </h2>

        <div className="mt-12 flex flex-col lg:flex-row">
          {plans.map((plan, index) => {
            const highlighted = index === 1

            return (
              <article
                key={plan.name}
                className={
                  highlighted
                    ? 'mt-8 border-4 border-black bg-[#00FF00] p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-out lg:mt-0 lg:ml-8 lg:-translate-y-6 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : index === 0
                      ? 'border-4 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-out hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                      : 'mt-8 border-4 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-out lg:mt-0 lg:ml-8 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                }
              >
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-none text-black">{plan.name}</h3>
                <p className="mt-4 text-5xl font-black uppercase tracking-tighter leading-none text-black">{plan.price}</p>
                <p className="mt-4 text-base font-medium leading-none text-black">{plan.description}</p>

                <ul className="mt-8">
                  {plan.perks.map((perk, perkIndex) => (
                    <li key={perk} className={perkIndex === 0 ? 'font-bold uppercase tracking-tighter leading-none text-black' : 'mt-4 font-bold uppercase tracking-tighter leading-none text-black'}>
                      ✓ {perk}
                    </li>
                  ))}
                </ul>

                <a
                  href="#top"
                  className={
                    highlighted
                      ? 'mt-10 inline-flex border-4 border-black bg-black px-6 py-4 font-black uppercase tracking-tighter leading-none text-[#00FF00] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-out hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                      : 'mt-10 inline-flex border-4 border-black bg-white px-6 py-4 font-black uppercase tracking-tighter leading-none text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-out hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  }
                >
                  {plan.cta}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PricingSection