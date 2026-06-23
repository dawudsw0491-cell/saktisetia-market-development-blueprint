import { territories } from "../../data/territories";

export function StrategicRecommendation() {
  const priorities = [...territories]
    .sort(
      (a, b) =>
        b.territoryScore - a.territoryScore
    )
    .slice(0, 3);

  const recommendationMap: Record<
    string,
    string[]
  > = {
    Kertosono: [
      "NOO Expansion",
      "Logistics Partnership",
      "Event Acceleration",
    ],
    Pare: [
      "Education Activation",
      "Institution Partnership",
      "Community Engagement",
    ],
    "Kediri Kota": [
      "Retail Optimization",
      "Brand Activation",
      "Outlet Productivity Program",
    ],
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Strategic Recommendation Engine
      </h3>

      <div className="space-y-4">
        {priorities.map(
          (territory, index) => (
            <div
              key={territory.id}
              className="rounded-lg border border-slate-200 p-4"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">
                  Priority #{index + 1}
                </h4>

                <span className="font-bold text-blue-600">
                  Score {territory.territoryScore}
                </span>
              </div>

              <p className="mt-2 font-medium">
                {territory.areaName}
              </p>

              <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
                {(
                  recommendationMap[
                    territory.areaName
                  ] ?? [
                    "Market Expansion",
                    "Community Engagement",
                    "Outlet Development",
                  ]
                ).map((action) => (
                  <li key={action}>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}