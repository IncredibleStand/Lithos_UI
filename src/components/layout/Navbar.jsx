/**
 * @fileoverview Lithos UI top rail.
 * - Holds the brand, primary anchors, and mobile escape hatch in one fixed slab.
 * - Uses hard borders and a pinned edge to keep the header visually immovable.
 * - Preserves the page rhythm by reserving a predictable top strip for navigation.
 */

import { useState } from 'react'
import { getContrastText as getContrastYIQ } from '../../utils/yiq'
import { useTheme } from '../../core/useTheme'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { accentColor } = useTheme()
  const activeColor = accentColor

  return (
    <header className="fixed top-0 z-50 w-full border-b-2 border-(--lithos-border) bg-(--lithos-surface)">
      {/* - Fixed rail: the 4px bottom border marks the top boundary of the app. */}
      {/* - 24px vertical padding gives the bar enough mass to read as a slab, not a strip. */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* - Brand block takes the left third so the center lane stays visually neutral. */}
        <div className="flex items-center justify-start lg:w-1/3">
          <a
            href="#top"
            className="bg-(--lithos-accent) px-5 py-3 font-black tracking-tighter leading-none text-(--lithos-accent-text) lithos-click"
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
            className="bg-(--lithos-accent) px-5 py-3 font-black tracking-tighter leading-none text-(--lithos-accent-text) lithos-click"
          >
            GitHub
          </a>
        </div>

        {/* - Mobile Action Toggle (Hamburger / X) */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center h-10 w-10 border-2 border-(--lithos-border) bg-(--lithos-accent) shadow-[2px_2px_0px_0px_var(--lithos-shadow)] lithos-click cursor-pointer"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke={getContrastYIQ(activeColor)} strokeWidth="3" strokeLinecap="square" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* - Full-Screen Mobile Overlay */}
      {isMenuOpen && (
        <nav className="fixed inset-0 z-[-1] pt-32 pb-6 px-6 bg-(--lithos-surface) overflow-y-auto flex flex-col justify-start lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left text-4xl sm:text-5xl font-black uppercase tracking-tighter text-(--lithos-text) hover:text-(--lithos-accent) mb-8"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/IncredibleStand/Lithos_UI"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-auto self-start inline-block px-6 py-4 text-left text-2xl font-black uppercase text-(--lithos-accent-text) lithos-click"
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar