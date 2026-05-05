/**
 * @fileoverview Lithos UI top rail.
 * - Holds the brand, primary anchors, and mobile escape hatch in one fixed slab.
 * - Uses hard borders and a pinned edge to keep the header visually immovable.
 * - Preserves the page rhythm by reserving a predictable top strip for navigation.
 */

import { useState } from 'react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b-4 border-(--lithos-border) bg-(--lithos-surface)">
      {/* - Fixed rail: the 4px bottom border marks the top boundary of the app. */}
      {/* - 24px vertical padding gives the bar enough mass to read as a slab, not a strip. */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* - Brand block takes the left third so the center lane stays visually neutral. */}
        <div className="flex items-center justify-start lg:w-1/3">
          <a
            href="#top"
            className="border-4 border-(--lithos-border) bg-(--lithos-accent) px-5 py-3 font-black tracking-tighter leading-none text-(--lithos-accent-text) shadow-[4px_4px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:shadow-[6px_6px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer"
          >
            Lithos UI
          </a>
        </div>

      {/* - Center lane is reserved for wayfinding; it only appears when width can support the symmetry. */}
      <nav className="hidden items-center justify-center lg:flex lg:w-1/3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mx-4 font-black uppercase tracking-tighter leading-none text-(--lithos-text) transition-all duration-150 ease-out hover:text-(--lithos-accent) cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </nav>

        {/* - Action block balances the brand block and keeps the header geometry stable. */}
        <div className="hidden items-center justify-end lg:flex lg:w-1/3">
          <a
            href="https://github.com/IncredibleStand/Lithos_UI"
            target="_blank"
            rel="noopener noreferrer"
            className="border-4 border-(--lithos-border) bg-(--lithos-accent) px-5 py-3 font-black uppercase tracking-tighter leading-none text-(--lithos-accent-text) shadow-[4px_4px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:shadow-[6px_6px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer"
          >
            GitHub
          </a>
        </div>

        {/* - Mobile collapses to one control so the header keeps a predictable width and height. */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="border-4 border-(--lithos-border) bg-(--lithos-accent) p-2 text-xl font-black uppercase leading-none text-(--lithos-accent-text) shadow-[4px_4px_0px_0px_var(--lithos-shadow)] cursor-pointer"
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      {/* - The mobile sheet drops under the rail with a hard border and an 8px shadow step. */}
      {isMenuOpen && (
        <nav className="flex flex-col border-t-4 border-(--lithos-border) bg-(--lithos-surface) p-6 shadow-[0px_8px_0px_0px_var(--lithos-shadow)] lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="mb-6 text-3xl font-black uppercase tracking-tighter text-(--lithos-text) cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/IncredibleStand/Lithos_UI"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 border-4 border-(--lithos-border) bg-(--lithos-accent) p-4 text-center text-xl font-black uppercase text-(--lithos-accent-text) shadow-[4px_4px_0px_0px_var(--lithos-shadow)] cursor-pointer"
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar