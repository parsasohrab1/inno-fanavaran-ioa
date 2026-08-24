import type { KpiSummary } from "@/lib/types";

const trendColor: Record<NonNullable<KpiSummary["trend"]>, string> = {
  up: "text-emerald-600",
  down: "text-rose-600",
  flat: "text-slate-500",
};

export function KpiCard({ kpi }: { kpi: KpiSummary }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{kpi.label}</p>
      <p className="mt-2 text-2xl font-bold text-slate-900">{kpi.value}</p>
      {kpi.delta && (
        <p className={`mt-1 text-sm font-medium ${trendColor[kpi.trend ?? "flat"]}`}>
          {kpi.delta}
        </p>
      )}
    </div>
  );
}
