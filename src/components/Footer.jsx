function Footer({ isDarkMode, onToggleObsidian }) {
  return (
    <footer className="relative overflow-hidden border-t-8 border-(--lithos-border) bg-(--lithos-accent) px-6 py-20 text-(--lithos-accent-text)">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-start lg:justify-between">
        <div className="mb-16 flex w-full flex-col lg:mb-0 lg:w-1/2">
          <p className="text-4xl font-black uppercase tracking-tighter leading-none md:text-6xl text-(--lithos-accent-text)">LITHOS UI</p>
          <p className="mt-4 max-w-md text-lg font-bold uppercase tracking-tighter leading-none text-(--lithos-accent-text)">
            Stop wrestling with fragile layouts. Drop in production-ready, zero-gap React blocks and ship your next product today.
          </p>
        </div>

        <div className="flex w-full flex-col lg:w-1/2">
          <a href="#features" className="text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:text-4xl cursor-pointer text-(--lithos-accent-text)">
            Features
          </a>
          <a href="#pricing" className="mt-4 text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:text-4xl cursor-pointer text-(--lithos-accent-text)">
            Pricing
          </a>
          <a href="#testimonials" className="mt-4 text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:text-4xl cursor-pointer text-(--lithos-accent-text)">
            Testimonials
          </a>
          <a href="#faq" className="mt-4 text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:text-4xl cursor-pointer text-(--lithos-accent-text)">
            FAQ
          </a>
          <button
            type="button"
            onClick={onToggleObsidian}
            className="mt-4 text-left text-2xl font-black uppercase tracking-tighter leading-none transition-colors duration-150 ease-out hover:bg-(--lithos-text) hover:text-(--lithos-accent) cursor-pointer md:text-4xl text-(--lithos-accent-text) px-2 py-1 -ml-2"
          >
            {isDarkMode ? 'Light Mode' : 'Obsidian Mode'}
          </button>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl flex w-full justify-start">
        <p className="text-sm font-bold uppercase tracking-tighter leading-none text-(--lithos-accent-text)">
          Copyright {new Date().getFullYear()} Lithos UI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer