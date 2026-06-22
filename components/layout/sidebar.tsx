const menuItems = [
  "Executive Dashboard",
  "Territory Intelligence",
  "Outlet Development",
  "Institutional Market",
  "Community Market",
  "Event Strategy",
  "Growth Roadmap",
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-200 bg-white p-4">
      <h2 className="mb-6 text-lg font-bold text-slate-900">
        Market Development
      </h2>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item}
              className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}