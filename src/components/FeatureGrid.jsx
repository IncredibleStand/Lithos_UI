const features = [
  {
    title: 'Structural Cards',
    description:
      'Every card is built to stay legible, rigid, and visually loud under pressure.',
  },
  {
    title: 'Brutal Buttons',
    description:
      'CTA styles that punch through the layout with hard borders and sharp shadow offsets.',
  },
  {
    title: 'Responsive Composition',
    description:
      'Layouts snap cleanly from mobile stacks to desktop rows without collapsing rhythm.',
  },
  {
    title: 'Reusable Sections',
    description:
      'A full kit of sections designed to assemble landing pages without visual compromise.',
  },
]

function FeatureGrid() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-4xl font-black uppercase tracking-tighter leading-none text-black md:text-5xl">
          No Fluff. Just Features.
        </h2>

        <div className="flex flex-wrap justify-center">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="m-4 w-full max-w-sm border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-out hover:-translate-y-2 hover:bg-[#00FF00] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="h-14 w-14 border-4 border-black bg-black" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-black uppercase tracking-tighter leading-none text-black">
                {feature.title}
              </h3>
              <p className="mt-4 text-base font-medium leading-none text-black">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid