import { Topbar } from "@/components/topbar";
import { productionLines } from "@/lib/mock-data";

export default function ProductionPage() {
  return (
    <>
      <Topbar title="Production" />
      <main className="flex-1 p-6">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-right text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">Production line</th>
                <th className="px-4 py-3 font-medium">Today's output</th>
                <th className="px-4 py-3 font-medium">Target</th>
                <th className="px-4 py-3 font-medium">Efficiency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {productionLines.map((line) => (
                <tr key={line.id}>
                  <td className="px-4 py-3 text-slate-800">{line.name}</td>
                  <td className="px-4 py-3 text-slate-600">{line.outputToday.toLocaleString("fa-IR")} {line.unit}</td>
                  <td className="px-4 py-3 text-slate-600">{line.target.toLocaleString("fa-IR")} {line.unit}</td>
                  <td className="px-4 py-3 text-slate-600">{line.efficiencyPercent}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
