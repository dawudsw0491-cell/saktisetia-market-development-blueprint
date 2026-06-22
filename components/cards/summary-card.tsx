interface SummaryCardProps {
  title: string;
  content: string;
}

export function SummaryCard({
  title,
  content,
}: SummaryCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {content}
      </p>
    </div>
  );
}