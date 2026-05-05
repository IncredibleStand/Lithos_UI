/**
 * @fileoverview Lithos UI kinetic toggle.
 * - Zero-gap: fixed track and thumb dimensions make the motion arithmetic exact.
 * - Neo-brutalist physics: shadow steps move; the parent never translates.
 * - Binary contrast: thumb and track invert as one hard state change.
 */
function Toggle({ checked, onToggle, label = 'Theme Changed' }) {
  // - Stationary shell: only the shadow changes, so surrounding layout never shifts.
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={checked}
      aria-label={label}
      className="inline-flex cursor-pointer items-center border-4 border-black bg-white px-2 py-2 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-200 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
    >
      {/* Track math: 80x40 with 4px borders and 4px padding leaves exact travel room. */}
      <span
        className={`flex h-10 w-20 items-center border-4 border-black p-1 transition-colors duration-150 ease-out ${
          checked ? 'bg-black' : 'bg-white'
        }`}
      >
        {/* Thumb math: 24px block + 4px track padding = exact 40px travel on toggle. */}
        <span
          className={`block h-6 w-6 border-4 transition-transform duration-150 ease-out ${
            checked
              ? 'translate-x-10 border-white bg-white'
              : 'translate-x-0 border-black bg-black'
          }`}
        />
      </span>
      
      {/* Screen-reader label stays outside the visual math. */}
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default Toggle;