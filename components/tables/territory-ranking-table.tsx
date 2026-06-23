import { territories } from "../../data/territories";

export function TerritoryRankingTable() {
  const ranking = [...territories].sort(
    (a, b) => b.territoryScore - a.territoryScore
  );

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">
        Territory Ranking Detail
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Rank
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold">
                Area
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold">
                Region
              </th>

              <th className="px-4 py-3 text-right text-sm font-semibold">
                Score
              </th>
            </tr>
          </thead>

          <tbody>
            {ranking.map((territory, index) => (
              <tr
                key={territory.id}
                className="border-b border-slate-100"
              >
                <td className="px-4 py-3 text-sm">
                  #{index + 1}
                </td>

                <td className="px-4 py-3 text-sm font-medium">
                  {territory.areaName}
                </td>

                <td className="px-4 py-3 text-sm text-slate-600">
                  {territory.region}
                </td>

                <td className="px-4 py-3 text-right text-sm font-bold text-blue-600">
                  {territory.territoryScore}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}