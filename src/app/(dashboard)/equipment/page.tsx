import { Topbar } from "@/components/topbar";
import { StatusBadge } from "@/components/badges";
import { equipmentList } from "@/lib/mock-data";

export default function EquipmentPage() {
  return (
    <>
      <Topbar title="Equipment" />
      <main className="flex-1 p-6">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-right text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">Equipment</th>
                <th className="px-4 py-3 font-medium">Line</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Uptime percentage</th>
                <th className="px-4 py-3 font-medium">Last service</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {equipmentList.map((eq) => (
                <tr key={eq.id}>
                  <td className="px-4 py-3 text-slate-800">{eq.name}</td>
                  <td className="px-4 py-3 text-slate-600">{eq.line}</td>
                  <td className="px-4 py-3"><StatusBadge status={eq.status} /></td>
                  <td className="px-4 py-3 text-slate-600">{eq.uptimePercent}%</td>
                  <td className="px-4 py-3 text-slate-600">{eq.lastMaintenance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
