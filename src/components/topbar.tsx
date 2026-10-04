export function Topbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <h1 className="text-xl font-bold text-slate-800">{title}</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-500">Operations unit</span>
        <div className="h-9 w-9 rounded-full bg-slate-200" />
      </div>
    </header>
  );
}
