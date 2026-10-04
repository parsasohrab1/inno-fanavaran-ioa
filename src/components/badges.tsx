import type { AlertSeverity, EquipmentStatus } from "@/lib/types";

const statusStyles: Record<EquipmentStatus, { label: string; className: string }> = {
  running: { label: "Running", className: "bg-emerald-50 text-emerald-700" },
  idle: { label: "Idle", className: "bg-slate-100 text-slate-600" },
  maintenance: { label: "Under maintenance", className: "bg-amber-50 text-amber-700" },
  fault: { label: "Fault", className: "bg-rose-50 text-rose-700" },
};

export function StatusBadge({ status }: { status: EquipmentStatus }) {
  const style = statusStyles[status];
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${style.className}`}>
      {style.label}
    </span>
  );
}

const severityStyles: Record<AlertSeverity, { label: string; className: string }> = {
  critical: { label: "Critical", className: "bg-rose-50 text-rose-700" },
  warning: { label: "Warning", className: "bg-amber-50 text-amber-700" },
  info: { label: "Information", className: "bg-sky-50 text-sky-700" },
};

export function SeverityBadge({ severity }: { severity: AlertSeverity }) {
  const style = severityStyles[severity];
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${style.className}`}>
      {style.label}
    </span>
  );
}
