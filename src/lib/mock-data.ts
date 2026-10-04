import type { Equipment, KpiSummary, PlantAlert, ProductionLine } from "./types";

export const kpiSummaries: KpiSummary[] = [
  { label: "Today's output", value: "4,820 tons", delta: "+3.2%", trend: "up" },
  { label: "Overall line efficiency", value: "91%", delta: "+1.1%", trend: "up" },
  { label: "Unplanned shutdowns", value: "2 cases", delta: "-1", trend: "down" },
  { label: "Open alerts", value: "5 cases", trend: "flat" },
];

export const productionLines: ProductionLine[] = [
  { id: "line-1", name: "Production line 1", outputToday: 1820, target: 2000, unit: "tons", efficiencyPercent: 91 },
  { id: "line-2", name: "Production line 2", outputToday: 1450, target: 1600, unit: "tons", efficiencyPercent: 90 },
  { id: "line-3", name: "Production line 3", outputToday: 1550, target: 1500, unit: "tons", efficiencyPercent: 103 },
];

export const equipmentList: Equipment[] = [
  { id: "eq-1", name: "Compressor A1", line: "Production line 1", status: "running", uptimePercent: 98, lastMaintenance: "1404/04/10" },
  { id: "eq-2", name: "Transfer pump B2", line: "Production line 2", status: "maintenance", uptimePercent: 76, lastMaintenance: "1404/05/01" },
  { id: "eq-3", name: "Furnace C1", line: "Production line 3", status: "fault", uptimePercent: 54, lastMaintenance: "1404/03/22" },
  { id: "eq-4", name: "Conveyor D3", line: "Production line 1", status: "idle", uptimePercent: 88, lastMaintenance: "1404/04/28" },
];

export const plantAlerts: PlantAlert[] = [
  { id: "al-1", title: "Furnace C1 temperature above the allowed limit", source: "Furnace C1", severity: "critical", createdAt: "10 minutes ago", acknowledged: false },
  { id: "al-2", title: "Pressure drop in transfer line B2", source: "Transfer pump B2", severity: "warning", createdAt: "45 minutes ago", acknowledged: false },
  { id: "al-3", title: "Periodic service of conveyor D3 is approaching", source: "Conveyor D3", severity: "info", createdAt: "2 hours ago", acknowledged: true },
];
