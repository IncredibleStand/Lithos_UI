/**
 * @fileoverview The Void Coordinate - 404 Page
 * 
 * Neo-Brutalist 404 page component themed as "Structural Failure".
 * Renders a viewport-locked layout with massive engineered typography,
 * broken architectural elements, and a hard-shadowed return button.
 * 
 * ARCHITECTURAL NOTES:
 * - NO gap utilities (ZERO-GAP LAW)
 * - Spacing via explicit margins (mt-*, mb-*)
 * - Button shadow fixed (no translate on interaction)
 */

import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-(--lithos-bg) text-(--lithos-text) flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Structural failure grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content container */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Error code - massive and brutalist */}
        <h1 className="text-8xl md:text-[12rem] font-black leading-none tracking-tighter mb-10 select-none text-(--lithos-accent)">
          404
        </h1>

        {/* Primary error title */}
        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-widest mb-4">
          Structural Failure
        </h2>

        {/* Secondary description */}
        <p className="text-base md:text-lg font-medium opacity-70 mb-12 leading-relaxed">
          The coordinate you seek exists beyond the boundaries of this realm.
        </p>

        {/* Vertical spacer for button positioning */}
        <div className="mt-8">
          {/* Return to Base button - hard brutalist styling */}
          <Link
            to="/"
            className="border-4 border-(--lithos-border) bg-(--lithos-accent) px-8 py-4 font-black uppercase tracking-tighter leading-none text-(--lithos-accent-text) shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:shadow-[8px_8px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer inline-block mt-8"
          >
            Return to Base
          </Link>
        </div>
      </div>
    </div>
  )
}
