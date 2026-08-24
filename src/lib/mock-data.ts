import type { Equipment, KpiSummary, PlantAlert, ProductionLine } from "./types";

export const kpiSummaries: KpiSummary[] = [
  { label: "تولید امروز", value: "۴,۸۲۰ تن", delta: "+۳.۲٪", trend: "up" },
  { label: "راندمان کلی خط", value: "۹۱٪", delta: "+۱.۱٪", trend: "up" },
  { label: "توقفات برنامه‌ریزی نشده", value: "۲ مورد", delta: "-۱", trend: "down" },
  { label: "هشدارهای باز", value: "۵ مورد", trend: "flat" },
];

export const productionLines: ProductionLine[] = [
  { id: "line-1", name: "خط تولید ۱", outputToday: 1820, target: 2000, unit: "تن", efficiencyPercent: 91 },
  { id: "line-2", name: "خط تولید ۲", outputToday: 1450, target: 1600, unit: "تن", efficiencyPercent: 90 },
  { id: "line-3", name: "خط تولید ۳", outputToday: 1550, target: 1500, unit: "تن", efficiencyPercent: 103 },
];

export const equipmentList: Equipment[] = [
  { id: "eq-1", name: "کمپرسور A1", line: "خط تولید ۱", status: "running", uptimePercent: 98, lastMaintenance: "۱۴۰۴/۰۴/۱۰" },
  { id: "eq-2", name: "پمپ انتقال B2", line: "خط تولید ۲", status: "maintenance", uptimePercent: 76, lastMaintenance: "۱۴۰۴/۰۵/۰۱" },
  { id: "eq-3", name: "کوره C1", line: "خط تولید ۳", status: "fault", uptimePercent: 54, lastMaintenance: "۱۴۰۴/۰۳/۲۲" },
  { id: "eq-4", name: "نوار نقاله D3", line: "خط تولید ۱", status: "idle", uptimePercent: 88, lastMaintenance: "۱۴۰۴/۰۴/۲۸" },
];

export const plantAlerts: PlantAlert[] = [
  { id: "al-1", title: "افزایش دمای کوره C1 از حد مجاز", source: "کوره C1", severity: "critical", createdAt: "۱۰ دقیقه پیش", acknowledged: false },
  { id: "al-2", title: "افت فشار در خط انتقال B2", source: "پمپ انتقال B2", severity: "warning", createdAt: "۴۵ دقیقه پیش", acknowledged: false },
  { id: "al-3", title: "سرویس دوره‌ای نوار نقاله D3 نزدیک است", source: "نوار نقاله D3", severity: "info", createdAt: "۲ ساعت پیش", acknowledged: true },
];
