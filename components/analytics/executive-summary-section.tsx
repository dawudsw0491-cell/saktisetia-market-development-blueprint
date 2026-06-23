import { territories } from "../../data/territories";

export function ExecutiveSummarySection() {
  const sortedTerritories = [...territories].sort(
    (a, b) => b.territoryScore - a.territoryScore
  );

  const topTerritory = sortedTerritories[0];

  const averageScore = Math.round(
    territories.reduce(
      (total, territory) =>
        total + territory.territoryScore,
      0
    ) / territories.length
  );

  const priorityTerritoryCount =
    territories.filter(
      (territory) => territory.territoryScore >= 80
    ).length;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">
        Executive Summary
      </h3>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-blue-50 p-4">
          <h4 className="font-semibold text-blue-900">
            Top Territory
          </h4>

          <p className="mt-2 text-xl font-bold text-slate-900">
            {topTerritory.areaName}
          </p>

          <p className="text-sm text-slate-600">
            Territory Score:
            {" "}
            {topTerritory.territoryScore}
          </p>
        </div>

        <div className="rounded-lg bg-green-50 p-4">
          <h4 className="font-semibold text-green-900">
            Average Territory Score
          </h4>

          <p className="mt-2 text-xl font-bold text-slate-900">
            {averageScore}
          </p>
        </div>

        <div className="rounded-lg bg-yellow-50 p-4">
          <h4 className="font-semibold text-yellow-900">
            Priority Territory
          </h4>

          <p className="mt-2 text-xl font-bold text-slate-900">
            {priorityTerritoryCount}
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-lg bg-slate-50 p-4">
        <p className="text-sm text-slate-700">
          Fokus utama pengembangan pasar
          direkomendasikan pada territory
          dengan skor di atas 80 yang memiliki
          kombinasi peluang outlet, institusi,
          komunitas, dan potensi pertumbuhan
          tertinggi.
        </p>
      </div>
    </div>
  );
}