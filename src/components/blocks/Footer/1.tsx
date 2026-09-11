export const Footer1 = () => (
  <section id="footer-block" className="bg-(--lithos-surface) pt-20 pb-10 px-6">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col lg:flex-row lg:justify-between mb-16">
        <div className="mb-12 lg:mb-0 lg:w-1/3">
          <p className="text-3xl font-black tracking-tighter leading-none text-(--lithos-text) uppercase">BRAND MARK</p>
          <p className="mt-4 font-body text-(--lithos-text) opacity-80 max-w-xs">
            Ship scalable products faster with a reliable architecture that never breaks.
          </p>
        </div>

        <div className="flex flex-wrap lg:w-2/3 lg:justify-end">
          <div className="w-1/2 sm:w-1/3 lg:w-auto mb-8 sm:mb-0 lg:ml-12">
            <h4 className="font-black uppercase tracking-widest text-sm mb-6 text-(--lithos-text)">Product</h4>
            <ul className="flex flex-col space-y-4 font-bold">
              <li>
                <a href="#" className="hover:text-(--lithos-accent) transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--lithos-accent) transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--lithos-accent) transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-auto mb-8 sm:mb-0 lg:ml-12">
            <h4 className="font-black uppercase tracking-widest text-sm mb-6 text-(--lithos-text)">Resources</h4>
            <ul className="flex flex-col space-y-4 font-bold">
              <li>
                <a href="#" className="hover:text-(--lithos-accent) transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--lithos-accent) transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--lithos-accent) transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-auto lg:ml-12">
            <h4 className="font-black uppercase tracking-widest text-sm mb-6 text-(--lithos-text)">Company</h4>
            <ul className="flex flex-col space-y-4 font-bold">
              <li>
                <a href="#" className="hover:text-(--lithos-accent) transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--lithos-accent) transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--lithos-accent) transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-(--lithos-border) pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="font-bold text-sm text-(--lithos-text) opacity-60 mb-4 md:mb-0">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex items-center space-x-6 text-sm font-bold opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">
            Privacy Policy
          </a>
          <a href="#" className="hover:opacity-100 transition-opacity">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </section>
)
