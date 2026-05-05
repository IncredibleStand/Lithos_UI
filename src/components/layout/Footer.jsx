/**
 * @fileoverview Lithos UI footer slab.
 * - Closes the page with a hard top border, a three-column balance, and a utility toggle.
 * - Uses explicit spacing to keep the exit block aligned with the zero-gap page rhythm.
 * - Couples the theme toggle with toast feedback so state changes are visible and immediate.
 */

import { useToast } from '../../core/hooks/useToast';
import Toggle from '../ui/Toggle'

function Footer({ isDarkMode, onToggleObsidian }) {
  const { addToast } = useToast()

  const handleToggleObsidian = () => {
    // - Toggle and toast are paired so the theme flip has an explicit confirmation signal.
    const nextMode = !isDarkMode

    onToggleObsidian()

    addToast({
      title: 'THEME CHANGED',
      message: nextMode ? 'Obsidian Mode Activated.' : 'Light Mode Activated.',
      type: 'default',
      color: nextMode ? '#000000' : '#FFFFFF',
    })
  }

  return (
    <footer className="relative overflow-hidden border-t-8 border-(--lithos-border) bg-(--lithos-accent) px-6 py-20 text-(--lithos-accent-text)">
      {/* - 8px top border makes the footer read as a closing slab, not a soft appendix. */}
      {/* - Three columns are balanced with width fractions, not gap, to preserve structural rhythm. */}
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-start lg:justify-between">
        {/* - Brand block carries the visual weight of the footer’s left side. */}
        <div className="mb-16 flex w-full flex-col justify-between lg:mb-0 lg:w-1/2">
          <div>
            <p className="text-4xl font-black tracking-tighter leading-none md:text-6xl text-(--lithos-accent-text)">Lithos UI</p>
            <p className="mt-4 mb-4 max-w-md text-lg font-bold uppercase tracking-tighter leading-none text-(--lithos-accent-text)">
              Stop wrestling with fragile layouts. Drop in production-ready, zero-gap React blocks and ship your next product today.
            </p>
          </div>
          <p className="mt-12 lg:mt-0 text-sm font-bold tracking-tighter leading-none text-(--lithos-accent-text)">
            Copyright {new Date().getFullYear()} Lithos UI. All rights reserved.
          </p>
        </div>

        {/* - Navigation stays vertical so the exit path reads as a stack, not a menu bar. */}
        <div className="mt-12 flex w-full flex-col lg:mt-0 lg:w-1/4">
          <a href="#features" className="text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:text-4xl cursor-pointer text-(--lithos-accent-text)">
            Features
          </a>
          <a href="#pricing" className="mt-4 text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:text-4xl cursor-pointer text-(--lithos-accent-text)">
            Pricing
          </a>
          <a href="#testimonials" className="mt-4 text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:text-4xl cursor-pointer text-(--lithos-accent-text)">
            Testimonials
          </a>
          <a href="#faq" className="mt-4 text-2xl font-black uppercase tracking-tighter leading-none transition-all duration-150 ease-out active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:text-4xl cursor-pointer text-(--lithos-accent-text)">
            FAQ
          </a>
          <div className="mt-4 flex items-center">
            <Toggle checked={isDarkMode} onToggle={handleToggleObsidian} label="Toggle Obsidian Mode" />
          </div>
        </div>

        {/* - Sponsor CTA uses the same hard-surface language so the support action matches the system physics. */}
        <div className="mt-12 flex w-full flex-col lg:mt-0 lg:w-1/4 lg:items-end">
          <a 
            href="https://www.patreon.com/IncredibleStand" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center border-4 border-(--lithos-border) bg-(--lithos-surface) p-4 text-2xl font-black uppercase tracking-tighter leading-none text-(--lithos-text) shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-all duration-150 ease-out hover:bg-(--lithos-accent) hover:text-(--lithos-accent-text) hover:shadow-[10px_10px_0px_0px_var(--lithos-shadow)] active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] md:text-3xl"
          >
            <span>Show Love</span>
            <svg 
              className="ml-3 h-8 w-8 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer