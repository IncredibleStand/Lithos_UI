/**
 * Docs navbar — physical shell cloned from the main marketing navbar.
 * This file preserves the exact outer wrapper classes, inner max-width
 * container, and logo markup so the docs header lines up perfectly.
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getContrastText as getContrastYIQ } from '../../utils/yiq'
import { useTheme } from '../../core/useTheme'

function DocsNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { accentColor } = useTheme()
  const activeColor = accentColor

  const [expandedCategory, setExpandedCategory] = useState('Getting Started')

  const groupedLinks = [
    {
      category: 'Getting Started',
      links: [
        { label: 'Introduction', href: '/docs' },
        { label: 'Installation', href: '/docs/installation' }
      ]
    },
    {
      category: 'Components',
      links: [
        { label: 'Hero Block', href: '/docs/hero' },
        { label: 'Feature Grid', href: '/docs/feature-grid' },
        { label: 'Pricing Slab', href: '/docs/pricing' },
        { label: 'Testimonials', href: '/docs/testimonials' },
        { label: 'FAQ Accordion', href: '/docs/faq' },
        { label: 'Kinetic Toggle', href: '/docs/toggle' }
      ]
    }
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b-2 border-(--lithos-border) bg-(--lithos-surface)">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center justify-start lg:w-1/3">
          <Link
            to="/"
            className="border-4 border-(--lithos-border) bg-(--lithos-accent) px-5 py-3 font-black tracking-tighter leading-none text-(--lithos-accent-text) shadow-[4px_4px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:shadow-[6px_6px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer"
          >
            Lithos UI
          </Link>
        </div>

        {/* - Desktop GitHub CTA */}
        <a
          href="https://github.com/IncredibleStand/Lithos_UI"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block ml-auto border-4 border-(--lithos-border) bg-(--lithos-accent) px-5 py-2 text-lg font-black uppercase text-(--lithos-accent-text) shadow-[4px_4px_0px_0px_var(--lithos-shadow)] hover:shadow-[6px_6px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] transition-shadow"
        >
          GitHub
        </a>

        {/* - Mobile Action Toggle (Hamburger / X) */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center h-10 w-10 border-2 border-(--lithos-border) bg-(--lithos-accent) shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer transition-all duration-75 active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke={getContrastYIQ(activeColor)} 
              strokeWidth="3" 
              strokeLinecap="square" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* - Full-Screen Scrollable Mobile Accordion Overlay */}
      {isMenuOpen && (
        <nav className="fixed inset-0 z-[-1] pt-32 pb-12 px-6 bg-(--lithos-surface) overflow-y-auto flex flex-col justify-start lg:hidden">
          
          {/* Grouped Accordion Links */}
          <div className="flex-1">
            {groupedLinks.map((group) => (
              <div key={group.category} className="mb-8">
                <button
                  onClick={() => setExpandedCategory(expandedCategory === group.category ? null : group.category)}
                  className="flex w-full items-center justify-between border-b-4 border-(--lithos-border) pb-2 mb-4 text-left text-3xl sm:text-4xl font-black uppercase tracking-tighter text-(--lithos-text) cursor-pointer hover:text-(--lithos-accent) transition-colors"
                >
                  {group.category}
                  <span className="text-3xl text-(--lithos-accent)">{expandedCategory === group.category ? '-' : '+'}</span>
                </button>
                
                {/* Accordion Content */}
                {expandedCategory === group.category && (
                  <div className="pl-2 flex flex-col mt-4">
                    {group.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full text-left text-xl sm:text-2xl font-bold uppercase tracking-tight text-(--lithos-text) opacity-80 hover:opacity-100 hover:text-(--lithos-accent) mb-4 cursor-pointer transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <a
            href="https://github.com/IncredibleStand/Lithos_UI"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 self-start inline-block border-4 border-(--lithos-border) bg-(--lithos-accent) px-6 py-4 text-left text-2xl font-black uppercase text-(--lithos-accent-text) shadow-[4px_4px_0px_0px_var(--lithos-shadow)] hover:shadow-[6px_6px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] transition-shadow"
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  )
}

export default DocsNavbar
