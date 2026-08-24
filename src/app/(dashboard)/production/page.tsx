import { Topbar } from "@/components/topbar";
import { productionLines } from "@/lib/mock-data";

export default function ProductionPage() {
  return (
    <>
      <Topbar title="تولید" />
      <main className="flex-1 p-6">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-right text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">خط تولید</th>
                <th className="px-4 py-3 font-medium">تولید امروز</th>
                <th className="px-4 py-3 font-medium">هدف</th>
                <th className="px-4 py-3 font-medium">راندمان</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {productionLines.map((line) => (
                <tr key={line.id}>
                  <td className="px-4 py-3 text-slate-800">{line.name}</td>
                  <td className="px-4 py-3 text-slate-600">{line.outputToday.toLocaleString("fa-IR")} {line.unit}</td>
                  <td className="px-4 py-3 text-slate-600">{line.target.toLocaleString("fa-IR")} {line.unit}</td>
                  <td className="px-4 py-3 text-slate-600">{line.efficiencyPercent}٪</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
