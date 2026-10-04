import { Topbar } from "@/components/topbar";
import { KpiCard } from "@/components/kpi-card";
import { StatusBadge, SeverityBadge } from "@/components/badges";
import { equipmentList, kpiSummaries, plantAlerts, productionLines } from "@/lib/mock-data";

export default function OverviewPage() {
  return (
    <>
      <Topbar title="Overview" />
      <main className="flex-1 space-y-6 p-6">
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpiSummaries.map((kpi) => (
            <KpiCard key={kpi.label} kpi={kpi} />
          ))}
        </section>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 font-bold text-slate-800">Production Line Status</h2>
            <div className="space-y-3">
              {productionLines.map((line) => (
                <div key={line.id} className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">{line.name}</span>
                  <span className="font-medium text-slate-900">
                    {line.outputToday.toLocaleString("fa-IR")} / {line.target.toLocaleString("fa-IR")} {line.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 font-bold text-slate-800">Latest Alerts</h2>
            <div className="space-y-3">
              {plantAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-slate-800">{alert.title}</p>
                    <p className="text-xs text-slate-500">{alert.source} · {alert.createdAt}</p>
                  </div>
                  <SeverityBadge severity={alert.severity} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 font-bold text-slate-800">Equipment Status</h2>
          <div className="space-y-3">
            {equipmentList.map((eq) => (
              <div key={eq.id} className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-slate-800">{eq.name}</p>
                  <p className="text-xs text-slate-500">{eq.line}</p>
                </div>
                <StatusBadge status={eq.status} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
