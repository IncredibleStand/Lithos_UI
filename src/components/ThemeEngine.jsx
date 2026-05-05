/**
 * @fileoverview Lithos UI token laboratory.
 * - Rebinds accent and contrast tokens at the cascade root so the whole system moves together.
 * - Uses YIQ contrast selection to keep the swatches legible across bright and dark colors.
 * - Treats the palette as a physical control board with hard tiles and explicit offsets.
 */

import { useEffect, useState } from 'react'
import { getContrastText } from '../utils/yiq';

const themes = [
  { name: 'Cyan', hex: '#00FFFF' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Orange', hex: '#FF4500' },
  { name: 'Pink', hex: '#FFC0CB' },
]

function ThemeEngine() {
  // - Persisted accent seed keeps the system deterministic across reloads.
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('lithos-theme-color') || '#00FF00'
  })

  const injectGlobalStyles = (accent, text) => {
    // - One style tag rewires the cascade so every token inherits the same accent axis.
    let styleTag = document.getElementById('lithos-theme-overrides')

    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.id = 'lithos-theme-overrides'
      document.head.appendChild(styleTag)
    }

    styleTag.innerHTML = `
      *, :root, .obsidian, body.obsidian, .dark {
        --lithos-accent: ${accent} !important;
        --lithos-accent-text: ${text} !important;
      }
      ::selection {
        background-color: var(--lithos-accent) !important;
        color: var(--lithos-accent-text) !important;
      }
    `
  }

  useEffect(() => {
    injectGlobalStyles(activeTheme, getContrastText(activeTheme))
  }, [activeTheme])

  const handleThemeChange = (hex) => {
    // - YIQ keeps accent text readable; the UI never guesses at contrast.
    const textColor = getContrastText(hex)
    setActiveTheme(hex)
    injectGlobalStyles(hex, textColor)
    localStorage.setItem('lithos-theme-color', hex)
  }

  const handleReset = () => {
    // - Reset returns to the canonical seed token.
    const defaultHex = '#00FF00'
    setActiveTheme(defaultHex)
    injectGlobalStyles(defaultHex, getContrastText(defaultHex))
    localStorage.removeItem('lithos-theme-color')
  }

  // - 8px border + 8px shadow keep the control board heavy and explicit.
  return (
    <section id="theme-engine" className="bg-(--lithos-surface) py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-(--lithos-text) md:text-5xl">
          Dynamic Theme Engine
        </h2>
        <p className="mt-4 text-lg font-bold leading-none text-(--lithos-text)">
          Test drive the global design tokens. One variable changes everything.
        </p>

        <div className="mt-12 w-full border-8 border-(--lithos-border) bg-(--lithos-bg) p-6 sm:p-10 shadow-[8px_8px_0px_0px_var(--lithos-shadow)] mb-12">
          <div className="flex flex-wrap justify-center -m-2 sm:-m-4">
          {themes.map((theme) => {
            const isActive = activeTheme === theme.hex

            return (
              // - Each swatch is a 64/96px tile with a hard edge; active state only changes shadow depth.
              <button
                key={theme.hex}
                type="button"
                onClick={() => handleThemeChange(theme.hex)}
                aria-label={`Activate ${theme.name} theme`}
                title={theme.name}
                className={`m-2 h-16 w-[calc(50%-1rem)] sm:m-4 sm:h-24 sm:w-24 shrink-0 border-4 border-(--lithos-border) flex items-center justify-center transition-shadow duration-150 ease-out cursor-pointer ${isActive ? 'shadow-[2px_2px_0px_0px_var(--lithos-shadow)]' : 'shadow-[4px_4px_0px_0px_var(--lithos-shadow)] hover:shadow-[6px_6px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)]'}`}
                style={{
                  backgroundColor: theme.hex,
                }}
              >
                <span className="sr-only">{theme.name}</span>
              </button>
            )
          })}

          {/* - Custom picker keeps the tile geometry fixed while the input floats invisibly on top. */}
          <div
            className={`relative m-2 h-16 w-[calc(50%-1rem)] sm:m-4 sm:h-24 sm:w-24 shrink-0 border-4 border-(--lithos-border) bg-(--lithos-surface) transition-all duration-150 ease-out cursor-pointer group ${!themes.some((t) => t.hex === activeTheme) ? 'shadow-[2px_2px_0px_0px_var(--lithos-shadow)]' : 'shadow-[6px_6px_0px_0px_var(--lithos-shadow)] hover:shadow-[10px_10px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)]'}`}
            style={{
              backgroundColor: !themes.some((t) => t.hex === activeTheme)
                ? activeTheme
                : 'var(--lithos-surface)',
            }}
          >
            <input
              type="color"
              value={activeTheme}
              onChange={(e) => handleThemeChange(e.target.value)}
              className="absolute inset-0 h-full w-full opacity-0 cursor-pointer z-10"
              aria-label="Choose custom theme color"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div
                className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-[3px] sm:border-4 border-black"
                style={{
                  background:
                    'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)',
                }}
              />
              <span
                className={`mt-2 text-xs font-black uppercase tracking-tighter ${!themes.some((t) => t.hex === activeTheme) ? 'text-(--lithos-accent-text)' : 'text-(--lithos-text)'}`}
              >
                Custom
              </span>
            </div>
          </div>

          </div>

          {/* - Reset sits below a hard divider so the board reads as one rooted module. */}
          <div className="mt-10 sm:mt-12 flex w-full justify-center border-t-4 border-(--lithos-border) pt-10 sm:pt-12">
            <button
              type="button"
              onClick={handleReset}
              className="border-4 border-(--lithos-border) bg-(--lithos-surface) px-4 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-black uppercase tracking-tighter leading-none text-(--lithos-text) shadow-[6px_6px_0px_0px_var(--lithos-shadow)] transition-all duration-150 ease-out hover:shadow-[10px_10px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer"
            >
              Reset to Default Theme
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThemeEngine
