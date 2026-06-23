import { outletGapAnalysis } from "../../data/outlets";

export function OutletGapTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Outlet Gap Analysis
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">
                Territory
              </th>

              <th className="p-2 text-right">
                Existing
              </th>

              <th className="p-2 text-right">
                Target
              </th>

              <th className="p-2 text-right">
                Gap
              </th>

              <th className="p-2 text-right">
                Opportunity %
              </th>
            </tr>
          </thead>

          <tbody>
            {outletGapAnalysis.map((item) => (
              <tr
                key={item.territoryId}
                className="border-b"
              >
                <td className="p-2">
                  {item.territoryName}
                </td>

                <td className="p-2 text-right">
                  {item.existingOutlet}
                </td>

                <td className="p-2 text-right">
                  {item.targetOutlet}
                </td>

                <td className="p-2 text-right font-semibold text-red-600">
                  {item.gapOutlet}
                </td>

                <td className="p-2 text-right">
                  {item.opportunityPercentage}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}