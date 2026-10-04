import Link from "next/link";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/production", label: "Production" },
  { href: "/equipment", label: "Equipment" },
  { href: "/alerts", label: "Alerts" },
  { href: "/reports", label: "Reports" },
  { href: "/settings", label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 border-l border-slate-200 bg-white p-4 md:block">
      <div className="mb-6 px-2 text-lg font-bold text-slate-800">
        Industrial Dashboard
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
