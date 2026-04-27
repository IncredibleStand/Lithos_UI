function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-8 border-black bg-[#00FF00] px-6 py-20 text-black">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
        <div>
          <p className="text-4xl font-black uppercase tracking-tighter leading-none md:text-6xl">LITHOS UI</p>
          <p className="mt-4 max-w-md text-lg font-bold uppercase tracking-tighter leading-none">
            Neo-brutalist React components built for teams that care about structural integrity.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:mt-0 md:ml-12">
          <a href="#features" className="text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:text-4xl">
            Features
          </a>
          <a href="#pricing" className="mt-4 text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:text-4xl">
            Pricing
          </a>
        </div>

        <div className="mt-12 flex flex-col md:mt-0 md:ml-12">
          <a href="#testimonials" className="text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:text-4xl">
            Testimonials
          </a>
          <a href="#faq" className="mt-4 text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:text-4xl">
            FAQ
          </a>
        </div>
      </div>

      <p className="absolute bottom-6 left-6 right-6 text-sm font-bold uppercase tracking-tighter leading-none text-black">
        Copyright 2026 Lithos UI. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer