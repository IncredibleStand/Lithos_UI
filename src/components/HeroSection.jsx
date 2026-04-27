function HeroSection() {
  return (
    <section id="top" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-balance text-5xl font-black uppercase tracking-tighter leading-none md:text-7xl">
          BUILD FRONTENDS THAT REFUSE TO BREAK.
        </h1>

        <p className="mt-6 text-2xl font-bold leading-none text-black md:text-3xl">
          Lithos UI is a neo-brutalist React component kit engineered with absolute
          structural integrity.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center md:flex-row">
          <a
            href="#pricing"
            className="border-4 border-black bg-[#00FF00] px-8 py-4 font-black uppercase tracking-tighter leading-none text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-out hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Start Building
          </a>

          <a
            href="#features"
            className="mt-6 border-4 border-black bg-white px-8 py-4 font-black uppercase tracking-tighter leading-none text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-out hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:mt-0 md:ml-6"
          >
            See Components
          </a>
        </div>

        <div className="mt-20 aspect-video w-full border-8 border-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex h-full items-center justify-center px-6 text-center">
            <span className="text-3xl font-black uppercase tracking-tighter leading-none md:text-5xl">
              LITHOS UI PREVIEW
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection