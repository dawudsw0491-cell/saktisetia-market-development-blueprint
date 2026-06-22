import { territories } from "../../data/territories";

export function TerritoryRankingChart() {
  const ranking = [...territories]
    .sort(
      (a, b) =>
        b.territoryScore - a.territoryScore
    )
    .slice(0, 5);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Top Territory Ranking
      </h3>

      <div className="space-y-3">
        {ranking.map((territory, index) => (
          <div
            key={territory.id}
            className="flex items-center justify-between rounded-lg bg-slate-50 p-3"
          >
            <div>
              <p className="font-medium">
                #{index + 1} {territory.areaName}
              </p>

              <p className="text-sm text-slate-500">
                {territory.region}
              </p>
            </div>

            <span className="font-bold text-blue-600">
              {territory.territoryScore}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}