function Footer({ isDarkMode, onToggleObsidian }) {
  return (
    <footer className="relative overflow-hidden border-t-8 border-(--lithos-border) bg-(--lithos-accent) px-6 py-20 text-black">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row justify-between items-start">
        <div>
          <p className="text-4xl font-black uppercase tracking-tighter leading-none md:text-6xl">LITHOS UI</p>
          <p className="mt-4 max-w-md text-lg font-bold uppercase tracking-tighter leading-none">
            Stop wrestling with fragile layouts. Drop in production-ready, zero-gap React blocks and ship your next product today.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:mt-0 md:flex-row md:ml-auto">
          <div className="flex flex-col">
            <a href="#features" className="text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:text-4xl cursor-pointer">
              Features
            </a>
            <a href="#pricing" className="mt-4 text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:text-4xl cursor-pointer">
              Pricing
            </a>
          </div>

          <div className="mt-12 flex flex-col md:mt-0 md:ml-12">
            <a href="#testimonials" className="text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:text-4xl cursor-pointer">
              Testimonials
            </a>
            <a href="#faq" className="mt-4 text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:text-4xl cursor-pointer">
              FAQ
            </a>
          </div>

          <div className="mt-12 flex flex-col md:mt-0 md:ml-16">
            <p className="mb-4 text-sm font-black uppercase tracking-tighter opacity-70">Theme</p>
            <button
              type="button"
              onClick={onToggleObsidian}
              className="text-left text-2xl font-black uppercase tracking-tighter leading-none transition-colors duration-150 ease-out hover:bg-black hover:text-(--lithos-accent) cursor-pointer md:text-4xl text-black px-2 py-1 -ml-2"
            >
              {isDarkMode ? 'Light Mode' : 'Obsidian Mode'}
            </button>
          </div>
        </div>
      </div>

      <p className="absolute bottom-6 left-6 right-6 text-sm font-bold uppercase tracking-tighter leading-none">
        Copyright {new Date().getFullYear()} Lithos UI. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer