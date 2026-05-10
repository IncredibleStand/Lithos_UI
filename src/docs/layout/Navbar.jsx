/**
 * Docs navbar — physical shell cloned from the main marketing navbar.
 * This file preserves the exact outer wrapper classes, inner max-width
 * container, and logo markup so the docs header lines up perfectly.
 */

import { Link } from 'react-router-dom'
import { useToast } from '../../core/hooks/useToast'
import Toggle from '../../components/ui/Toggle'

function DocsNavbar({ isDarkMode, toggleObsidian }) {
  const { addToast } = useToast()

  const handleToggleObsidian = () => {
    const nextMode = !isDarkMode

    toggleObsidian()

    addToast({
      title: 'THEME CHANGED',
      message: nextMode ? 'Obsidian Mode Activated.' : 'Light Mode Activated.',
      type: 'default',
      color: nextMode ? '#000000' : '#FFFFFF',
    })
  }

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

        <div className="hidden lg:flex lg:w-1/3 items-center justify-end">
          <a
            href="https://github.com/IncredibleStand/Lithos_UI"
            target="_blank"
            rel="noopener noreferrer"
            className="border-4 border-(--lithos-border) bg-(--lithos-accent) px-5 py-3 font-black uppercase tracking-tighter leading-none text-(--lithos-accent-text) shadow-[4px_4px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:shadow-[6px_6px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer"
          >
            GitHub
          </a>

          <div className="ml-6">
            <Toggle checked={isDarkMode} onToggle={handleToggleObsidian} label="Toggle Obsidian Mode" />
          </div>
        </div>

        {/* Mobile actions: show GitHub + Toggle on small screens without center links */}
        <div className="flex lg:hidden items-center">
          <a
            href="https://github.com/IncredibleStand/Lithos_UI"
            target="_blank"
            rel="noopener noreferrer"
            className="border-4 border-(--lithos-border) bg-(--lithos-accent) p-2 text-sm font-black uppercase leading-none text-(--lithos-accent-text) shadow-[4px_4px_0px_0px_var(--lithos-shadow)] cursor-pointer"
          >
            GH
          </a>
          <div className="ml-4">
            <Toggle checked={isDarkMode} onToggle={handleToggleObsidian} label="Toggle Obsidian Mode" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default DocsNavbar
