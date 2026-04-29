const testimonials = [
  {
    quote: 'Lithos UI gave our launch page a spine. It looks aggressive and stays readable.',
    name: 'Maya Chen',
    title: 'Design Lead',
  },
  {
    quote: 'The components feel like they were engineered, not skinned. That matters.',
    name: 'Jordan Lee',
    title: 'Frontend Director',
  },
  {
    quote: 'Fast to assemble, hard to break, and impossible to confuse with generic UI kits.',
    name: 'Ari Patel',
    title: 'Product Builder',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="bg-(--lithos-surface) py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-center text-(--lithos-text) md:text-5xl">
          Proof From the Front Lines
        </h2>

        <div className="mt-20 -m-4 flex flex-wrap justify-center">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="m-4 flex w-full max-w-md flex-col border-4 border-(--lithos-border) bg-(--lithos-surface) p-6 shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-all duration-150 ease-out hover:shadow-[10px_10px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)]"
            >
              <p className="text-lg font-black uppercase tracking-tighter leading-none text-(--lithos-text)">★★★★★</p>
              <p className="mt-4 text-2xl font-black uppercase tracking-tighter leading-none text-(--lithos-text)">
                {testimonial.quote}
              </p>

              <div className="mt-8 flex items-center">
                <div className="h-12 w-12 rounded-full border-4 border-(--lithos-border) bg-(--lithos-accent)" aria-hidden="true" />
                <div className="ml-4">
                  <p className="font-black uppercase tracking-tighter leading-none text-(--lithos-text)">{testimonial.name}</p>
                  <p className="mt-2 font-bold uppercase tracking-tighter leading-none text-(--lithos-text)">{testimonial.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials