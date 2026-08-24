export type EquipmentStatus = "running" | "idle" | "maintenance" | "fault";

export type Equipment = {
  id: string;
  name: string;
  line: string;
  status: EquipmentStatus;
  uptimePercent: number;
  lastMaintenance: string;
};

export type ProductionLine = {
  id: string;
  name: string;
  outputToday: number;
  target: number;
  unit: string;
  efficiencyPercent: number;
};

export type AlertSeverity = "critical" | "warning" | "info";

export type PlantAlert = {
  id: string;
  title: string;
  source: string;
  severity: AlertSeverity;
  createdAt: string;
  acknowledged: boolean;
};

export type KpiSummary = {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "flat";
};
