const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b-4 border-(--lithos-border) bg-(--lithos-surface)">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-5">
        <div className="flex w-1/3 justify-start">
          <a href="#top" className="font-black text-2xl uppercase tracking-tighter leading-none text-(--lithos-text) cursor-pointer">
            LITHOS UI
          </a>
        </div>

        <nav className="hidden w-1/3 items-center justify-center md:flex">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={
                index === 0
                  ? 'font-black uppercase tracking-tighter leading-none text-(--lithos-text) transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer'
                  : 'ml-8 font-black uppercase tracking-tighter leading-none text-(--lithos-text) transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex w-1/3 items-center justify-end">
          <a
            href="#pricing"
            className="border-4 border-(--lithos-border) bg-(--lithos-accent) px-5 py-3 font-black uppercase tracking-tighter leading-none text-black shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:shadow-[10px_10px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer"
          >
            Get the Kit
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar