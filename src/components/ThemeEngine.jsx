import { useEffect, useState } from 'react'

const themes = [
  { name: 'Neon', hex: '#00FF00' },
  { name: 'Cyan', hex: '#00FFFF' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Orange', hex: '#FF4500' },
]

function ThemeEngine() {
  const [activeTheme, setActiveTheme] = useState(themes[0].hex)

  useEffect(() => {
    document.documentElement.style.setProperty('--lithos-accent', activeTheme)
  }, [activeTheme])

  const handleThemeChange = (hex) => {
    setActiveTheme(hex)
    document.documentElement.style.setProperty('--lithos-accent', hex)
  }

  return (
    <section id="theme-engine" className="bg-(--lithos-surface) py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-(--lithos-text) md:text-5xl">
          Dynamic Theme Engine
        </h2>
        <p className="mt-4 text-lg font-bold leading-none text-(--lithos-text)">
          Test drive the global design tokens. One variable changes everything.
        </p>

        <div className="mt-20 -m-4 flex flex-wrap justify-center border-8 border-(--lithos-border) bg-(--lithos-bg) p-8 shadow-[16px_16px_0px_0px_var(--lithos-shadow)]">
          {themes.map((theme) => {
            const isActive = activeTheme === theme.hex

            return (
              <button
                key={theme.hex}
                type="button"
                onClick={() => handleThemeChange(theme.hex)}
                aria-label={`Activate ${theme.name} theme`}
                title={theme.name}
                className={`m-4 h-24 w-24 border-4 border-(--lithos-border) transition-shadow duration-150 ease-out cursor-pointer shadow-[6px_6px_0px_0px_var(--lithos-shadow)] hover:shadow-[10px_10px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] ${isActive ? 'ring-8 ring-inset ring-black' : ''}`}
                style={{ backgroundColor: theme.hex }}
              >
                <span className="sr-only">{theme.name}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ThemeEngine
