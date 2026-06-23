import Link from "next/link";

const menuItems = [
  {
    label: "Executive Dashboard",
    href: "/",
  },
  {
    label: "Territory Intelligence",
    href: "/territory-intelligence",
  },
  {
    label: "Outlet Development",
    href: "/outlet-development",
  },
  {
    label: "Institutional Market",
    href: "/institutional-market",
  },
  {
    label: "Community Market",
    href: "/community-market",
  },
  {
    label: "Event Strategy",
    href: "/event-strategy",
  },
  {
    label: "Growth Roadmap",
    href: "/growth-roadmap",
  },
];

export function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-8">
        <h2 className="text-lg font-bold text-slate-900">
          Market Development
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Executive Intelligence Dashboard
        </p>
      </div>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}