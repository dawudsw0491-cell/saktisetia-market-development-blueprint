import { territories } from "../../data/territories";

export function OpportunityDashboard() {
  const topOpportunities = [...territories]
    .sort(
      (a, b) =>
        b.territoryScore - a.territoryScore
    )
    .slice(0, 5);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Opportunity Intelligence Engine
      </h3>

      <div className="space-y-3">
        {topOpportunities.map(
          (territory, index) => (
            <div
              key={territory.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 p-4"
            >
              <div>
                <p className="font-semibold">
                  #{index + 1} {territory.areaName}
                </p>

                <p className="text-sm text-slate-500">
                  {territory.region}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Priority: {territory.priority}
                </p>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">
                  {territory.territoryScore}
                </p>

                <p className="text-xs text-slate-500">
                  Opportunity Score
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}