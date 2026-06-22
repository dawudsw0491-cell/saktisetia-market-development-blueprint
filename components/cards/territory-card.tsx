interface TerritoryCardProps {
  territoryName: string;
  score: number;
  priority: string;
}

export function TerritoryCard({
  territoryName,
  score,
  priority,
}: TerritoryCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">
        {territoryName}
      </h3>

      <div className="mt-3 space-y-1">
        <p className="text-sm text-slate-600">
          Score: {score}
        </p>

        <p className="text-sm text-slate-600">
          Priority: {priority}
        </p>
      </div>
    </div>
  );
}