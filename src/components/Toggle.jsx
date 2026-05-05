/**
 * Lithos UI: Kinetic Toggle Component
 * 
 * Architectural Directives:
 * 1. Zero-Gap: Internal alignment relies entirely on explicit dimensions and padding.
 * 2. Neo-Brutalist Physics: The parent remains stationary. Hover state is achieved 
 *    solely by increasing the bottom-right solid block shadow offset.
 * 3. Binary Contrast: The inner thumb dynamically inverts its solid color opposite 
 *    to the track to maintain high-contrast visibility.
 */
function Toggle({ checked, onToggle, label = 'Theme Changed' }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={checked}
      aria-label={label}
      // THE WRAPPER (Stationary Element)
      // cursor-pointer is enforced. 
      // NO transform/translate properties are used here to prevent the entire block from shifting.
      // We solely transition the box-shadow from 4px to 6px to create the physical hover press.
      className="inline-flex cursor-pointer items-center border-4 border-black bg-white px-2 py-2 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-200 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
    >
      {/* 
        THE TRACK
        w-20 (80px) and h-10 (40px) define the absolute boundaries for the sliding thumb.
        The background completely inverts (white -> black) based on the active state.
      */}
      <span
        className={`flex h-10 w-20 items-center border-4 border-black p-1 transition-colors duration-150 ease-out ${
          checked ? 'bg-black' : 'bg-white'
        }`}
      >
        {/* 
          THE THUMB (Solid Block)
          w-6 h-6 (24px) fits perfectly inside the track's h-10 minus the p-1 padding.
          When clicked, it translates exactly 40px (translate-x-10) across the X-axis.
          The border AND background colors invert simultaneously to ensure it remains a solid block.
        */}
        <span
          className={`block h-6 w-6 border-4 transition-transform duration-150 ease-out ${
            checked
              ? 'translate-x-10 border-white bg-white'
              : 'translate-x-0 border-black bg-black'
          }`}
        />
      </span>
      
      {/* Screen reader only text for accessibility */}
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default Toggle;