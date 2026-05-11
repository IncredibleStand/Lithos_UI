import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()

  const getLinkClass = (path) => {
    const isActive = location.pathname === path
    const baseClass = "block px-3 py-1.5 text-xs font-bold transition-colors duration-150 ease-out"

  return isActive
      ? `${baseClass} border-(--lithos-accent) bg-(--lithos-accent) text-(--lithos-accent-text)`
      : `${baseClass} border-transparent text-(--lithos-text) hover:bg-[color-mix(in_srgb,var(--lithos-text)_5%,transparent)] hover:text-(--lithos-text)`
  }

  return (
    <aside className="py-8 pr-6">
      {/* Getting Started Category */}
      <div className="mb-8">
        <h3 className="text-xs font-black opacity-50 mb-3 px-4 uppercase">Getting Started</h3>
        <nav className="flex flex-col pl-4 ">
          <Link
            to="/docs"
            className={getLinkClass('/docs')}
          >
            Introduction
          </Link>
          <Link
            to="/docs/installation"
            className={getLinkClass('/docs/installation')}
          >
            Installation
          </Link>
        </nav>
      </div>

      {/* Components Category */}
      <div>
        <h3 className="text-xs font-black opacity-50 mb-3 px-4 uppercase">Components</h3>
        <nav className="flex flex-col pl-4 ">
          <Link
            to="/docs/hero"
            className={getLinkClass('/docs/hero')}
          >
            Hero
          </Link>
          <Link
            to="/docs/feature-grid"
            className={getLinkClass('/docs/feature-grid')}
          >
            Feature Grid
          </Link>
          <Link
            to="/docs/pricing"
            className={getLinkClass('/docs/pricing')}
          >
            Pricing
          </Link>
          <Link
            to="/docs/testimonials"
            className={getLinkClass('/docs/testimonials')}
          >
            Testimonials
          </Link>
          <Link
            to="/docs/faq"
            className={getLinkClass('/docs/faq')}
          >
            FAQ
          </Link>
          <Link
            to="/docs/toggle"
            className={getLinkClass('/docs/toggle')}
          >
            Toggle
          </Link>
          <Link
            to="/docs/code-viewer"
            className={getLinkClass('/docs/code-viewer')}
          >
            Code Viewer
          </Link>
        </nav>
      </div>
    </aside>
  )
}
