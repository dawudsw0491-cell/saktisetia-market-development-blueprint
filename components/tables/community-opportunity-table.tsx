import {
  communityOpportunities,
} from "../../data/communities";

export function CommunityOpportunityTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Community Opportunity Ranking
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">
                Territory
              </th>

              <th className="p-2 text-right">
                Communities
              </th>

              <th className="p-2 text-right">
                Opportunity Score
              </th>

              <th className="p-2 text-right">
                Priority
              </th>
            </tr>
          </thead>

          <tbody>
            {communityOpportunities.map(
              (item) => (
                <tr
                  key={item.territoryId}
                  className="border-b"
                >
                  <td className="p-2">
                    {item.territoryName}
                  </td>

                  <td className="p-2 text-right">
                    {item.communityCount}
                  </td>

                  <td className="p-2 text-right">
                    {item.opportunityScore}
                  </td>

                  <td className="p-2 text-right font-semibold text-cyan-700">
                    {item.priority}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}