import { Topbar } from "@/components/topbar";
import { SeverityBadge } from "@/components/badges";
import { plantAlerts } from "@/lib/mock-data";

export default function AlertsPage() {
  return (
    <>
      <Topbar title="هشدارها" />
      <main className="flex-1 space-y-3 p-6">
        {plantAlerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div>
              <p className="font-medium text-slate-800">{alert.title}</p>
              <p className="text-xs text-slate-500">
                {alert.source} · {alert.createdAt} · {alert.acknowledged ? "تایید شده" : "تایید نشده"}
              </p>
            </div>
            <SeverityBadge severity={alert.severity} />
          </div>
        ))}
      </main>
    </>
  );
}
