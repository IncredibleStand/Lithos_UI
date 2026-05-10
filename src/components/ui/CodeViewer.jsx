/**
 * @fileoverview Lithos UI code viewer atom.
 * - Displays raw React code inside a hard-shelled container.
 * - Copies the current code block to the clipboard with toast feedback.
 * - Uses explicit spacing only; no gap utilities are allowed.
 *
 * @param {Object} props
 * @param {string} props.code - Raw code string to display
 * @param {string} [props.language='jsx'] - Language label for the header
 * @returns {React.ReactElement}
 */

import { useToast } from '../../core/hooks/useToast'
import { useTheme } from '../../core/useTheme'

export default function CodeViewer({ code, language = 'jsx' }) {
  const toast = useToast()
  const { accentColor } = useTheme()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)

      if (typeof toast?.success === 'function') {
        toast.success('Copied to clipboard')
        return
      }

      if (typeof toast?.addToast === 'function') {
        toast.addToast({
          title: 'SUCCESS',
          message: 'Copied to clipboard',
          type: 'success',
          color: accentColor,
        })
      }
    } catch {
      if (typeof toast?.addToast === 'function') {
        toast.addToast({
          title: 'ERROR',
          message: 'Failed to copy code to clipboard',
          type: 'error',
        })
      }
    }
  }

  return (
    <div className="border-4 border-(--lithos-border) bg-(--lithos-bg) mb-8 relative">
      <div className="border-b-4 border-(--lithos-border) bg-(--lithos-surface) px-4 py-2 flex justify-between items-center">
        <p className="font-mono text-xs font-black uppercase tracking-widest text-(--lithos-text)">
          {language}
        </p>

        <button
          type="button"
          onClick={handleCopy}
          className="border-4 border-(--lithos-border) bg-(--lithos-surface) px-4 py-2 font-black uppercase tracking-tighter leading-none text-(--lithos-text) shadow-[4px_4px_0px_0px_var(--lithos-shadow)] transition-shadow duration-150 ease-out hover:bg-(--lithos-accent) hover:text-(--lithos-accent-text) hover:shadow-[6px_6px_0px_0px_var(--lithos-shadow)] active:shadow-[2px_2px_0px_0px_var(--lithos-shadow)] cursor-pointer"
          aria-label="Copy code"
          title="Copy code"
        >
          Copy
        </button>
      </div>

      <pre className="overflow-x-auto p-4 md:p-6 text-sm font-mono text-(--lithos-text) m-0">
        <code>{code}</code>
      </pre>
    </div>
  )
}
