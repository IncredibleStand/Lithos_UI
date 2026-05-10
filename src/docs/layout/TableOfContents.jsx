export default function TableOfContents({ links = [] }) {
  return (
    <aside className="py-8 pl-6">
      <h3 className="text-xs font-black opacity-50 uppercase mb-4 px-4">On This Page</h3>
      <nav>
        {links.map((link) => (
          <a
            key={link.id}
            href={link.id}
            className="block px-4 py-1.5 text-xs font-bold transition-colors duration-150 ease-out border-2 border-transparent hover:text-(--lithos-accent)"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
