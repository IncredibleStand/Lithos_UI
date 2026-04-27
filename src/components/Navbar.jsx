const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b-4 border-black bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-black text-2xl uppercase tracking-tighter leading-none text-black">
          LITHOS
        </a>

        <nav className="hidden items-center md:flex">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={
                index === 0
                  ? 'font-black uppercase tracking-tighter leading-none text-black transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'ml-8 font-black uppercase tracking-tighter leading-none text-black transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="border-4 border-black bg-[#00FF00] px-5 py-3 font-black uppercase tracking-tighter leading-none text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-out hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          Get the Kit
        </a>
      </div>
    </header>
  )
}

export default Navbar