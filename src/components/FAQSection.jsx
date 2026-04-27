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

function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState([0])

  const toggleItem = (index) => {
    setOpenIndexes((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    )
  }

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-black md:text-5xl">
          Frequently Asked Questions.
        </h2>

        <div className="mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index)

            return (
              <div
                key={faq.question}
                className={index === 0 ? 'border-4 border-black bg-white transition-all duration-150 ease-out' : 'mt-6 border-4 border-black bg-white transition-all duration-150 ease-out'}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className={
                    isOpen
                      ? 'flex w-full items-center justify-between bg-[#00FF00] px-6 py-6 text-left transition-all duration-150 ease-out hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                      : 'flex w-full items-center justify-between bg-white px-6 py-6 text-left transition-all duration-150 ease-out hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  }
                >
                  <span className="pr-6 text-2xl font-black uppercase tracking-tighter leading-none text-black md:text-3xl">
                    {faq.question}
                  </span>
                  <span className="text-5xl font-black uppercase tracking-tighter leading-none text-black" aria-hidden="true">
                    {isOpen ? '-' : '+'}
                  </span>
                </button>

                {isOpen ? (
                  <div className="border-t-4 border-black bg-[#00FF00] px-6 py-6">
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

export default FAQSection