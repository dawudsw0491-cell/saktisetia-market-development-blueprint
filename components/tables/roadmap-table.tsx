import {
  growthRoadmap,
} from "../../data/roadmap";

export function RoadmapTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Strategic Roadmap Matrix
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">
                Phase
              </th>

              <th className="p-2 text-left">
                Focus Area
              </th>

              <th className="p-2 text-left">
                Strategic Objective
              </th>

              <th className="p-2 text-left">
                Expected Outcome
              </th>
            </tr>
          </thead>

          <tbody>
            {growthRoadmap.map((item) => (
              <tr
                key={item.phase}
                className="border-b"
              >
                <td className="p-2 font-medium">
                  {item.phase}
                </td>

                <td className="p-2">
                  {item.focusArea}
                </td>

                <td className="p-2">
                  {item.strategicObjective}
                </td>

                <td className="p-2">
                  {item.expectedOutcome}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}