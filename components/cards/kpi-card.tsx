interface KpiCardProps {
  title: string;
  value: string | number;
  description?: string;
}

export function KpiCard({
  title,
  value,
  description,
}: KpiCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="space-y-2">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <p className="text-3xl font-bold text-slate-900">
          {value}
        </p>

        {description && (
          <p className="text-xs text-slate-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}