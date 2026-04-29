import { useState } from 'react'

const faqs = [
  {
    question: 'Is Lithos UI production ready?',
    answer:
      'Yes. The kit is structured for reliable composition, predictable spacing, and resilient visual contrast.',
  },
  {
    question: 'Does it work with Tailwind?',
    answer:
      'Yes. Every component is written as a Tailwind-first React section with no dependency on custom config.',
  },
  {
    question: 'Can I mix these sections with my own UI?',
    answer:
      'Absolutely. The system is intentionally modular so individual blocks can be dropped into existing products.',
  },
  {
    question: 'Why no soft shadows or rounded defaults?',
    answer:
      'Because Lithos UI is built around neo-brutalist clarity: hard edges, high contrast, and explicit structure.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex((current) => current === index ? null : index)
  }

  return (
    <section id="faq" className="bg-(--lithos-surface) py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-center text-(--lithos-text) md:text-5xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className={index === 0 ? 'border-4 border-(--lithos-border) bg-(--lithos-surface) transition-all duration-150 ease-out' : 'mt-6 border-4 border-(--lithos-border) bg-(--lithos-surface) transition-all duration-150 ease-out'}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className={
                    isOpen
                      ? 'flex w-full items-center justify-between bg-(--lithos-accent) px-6 py-6 text-left shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-all duration-150 ease-out cursor-pointer'
                      : 'flex w-full items-center justify-between bg-(--lithos-surface) px-6 py-6 text-left shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-all duration-150 ease-out hover:shadow-[10px_10px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer'
                  }
                >
                  <span className={`pr-6 text-2xl font-black uppercase tracking-tighter leading-none md:text-3xl ${isOpen ? 'text-black' : 'text-(--lithos-text)'}`}>
                    {faq.question}
                  </span>
                  <span className={`text-5xl font-black uppercase tracking-tighter leading-none ${isOpen ? 'text-black' : 'text-(--lithos-text)'}`} aria-hidden="true">
                    {isOpen ? '-' : '+'}
                  </span>
                </button>

                {isOpen ? (
                  <div className="border-t-4 border-(--lithos-border) bg-(--lithos-accent) px-6 py-6">
                    <p className="text-lg font-bold uppercase tracking-tighter leading-none text-black">{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
