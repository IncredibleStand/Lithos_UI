import { useState } from 'react'
import { Button } from '../../ui/Button'
import { IconMenu } from '../../ui/icons/IconMenu'
import { IconClose } from '../../ui/icons/IconClose'

const defaultLinks = [
  { label: 'Products', to: '#' },
  { label: 'Features', to: '#' },
  { label: 'Pricing', to: '#' },
  { label: 'Resources', to: '#' },
  { label: 'Company', to: '#' },
]

export interface Navbar1Props {
  links?: { label: string; to: string }[]
}

export const Navbar1 = ({ links = defaultLinks }: Navbar1Props = {}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const ActionToggle = isMenuOpen ? IconClose : IconMenu

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b-2 border-(--lithos-border) bg-(--lithos-surface)">
        {/* - Fixed rail: the 4px bottom border marks the top boundary of the app. */}
        {/* - 24px vertical padding gives the bar enough mass to read as a slab, not a strip. */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* - Brand block flex-1 balances the center lane. */}
          <div className="flex items-center justify-start lg:flex-1">
            <a href="#" className="bg-(--lithos-accent) text-(--lithos-accent-text) lithos-click">
              Logo
            </a>
          </div>

          {/* - Center lane is reserved for wayfinding and sized exactly to its content. */}
          <nav className="hidden items-center justify-center lg:flex lg:flex-none">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.to}
                className="mx-4 font-black uppercase tracking-tighter leading-none text-(--lithos-text) transition-all duration-150 ease-out hover:text-(--lithos-accent) cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* - Action block balances the brand block and keeps the header geometry stable. */}
          <div className="hidden items-center justify-end lg:flex lg:flex-1">
            <Button variant="secondary" className="mr-3">
              Log In
            </Button>
            <Button variant="primary">Sign Up</Button>
          </div>

          {/* - Mobile Action Toggle (Hamburger / X) */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-(--lithos-accent) text-(--lithos-accent-text) lithos-click"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <ActionToggle className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      {/* - Full-Screen Mobile Overlay */}
      {isMenuOpen && (
        <nav className="fixed inset-0 z-40 pt-32 pb-6 px-6 bg-(--lithos-surface) overflow-y-auto flex flex-col justify-start lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left text-4xl sm:text-5xl font-black uppercase tracking-tighter text-(--lithos-text) opacity-80 hover:opacity-100 hover:text-(--lithos-text) hover:translate-x-2 mb-8 cursor-pointer transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-auto self-start flex flex-col w-full">
            <Button variant="secondary" fullWidth className="mb-4">
              Log In
            </Button>
            <Button variant="primary" fullWidth>
              Sign Up
            </Button>
          </div>
        </nav>
      )}
    </>
  )
}
