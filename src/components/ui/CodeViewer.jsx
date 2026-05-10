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
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function CodeViewer({ code, language = 'jsx', showControls = false }) {
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
        <div className="flex items-center">
          {showControls ? (
            <div className="flex items-center">
              <div className="mr-2 h-4 w-4 border-2 border-(--lithos-border) bg-(--lithos-accent)" aria-hidden="true" />
              <div className="mr-2 h-4 w-4 border-2 border-(--lithos-border) bg-(--lithos-accent)" aria-hidden="true" />
              <div className="h-4 w-4 border-2 border-(--lithos-border) bg-(--lithos-accent)" aria-hidden="true" />
            </div>
          ) : (
            <p className="text-xs font-black uppercase tracking-widest text-(--lithos-text) font-code">
              {language}
            </p>
          )}
        </div>

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

      <div className="overflow-x-auto p-4 text-sm bg-[#0a0a0a]">
        <SyntaxHighlighter
          language="jsx"
          style={okaidia}
          customStyle={{
            background: 'transparent',
            padding: '0',
            margin: '0',
            fontFamily: 'var(--font-code)',
          }}
          codeTagProps={{
            style: { fontFamily: 'inherit' },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
