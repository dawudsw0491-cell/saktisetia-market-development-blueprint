import { outletSummary } from "../../data/outlets";
import { institutionSummary } from "../../data/institutions";
import { communitySummary } from "../../data/communities";

export function ManagementSummary() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">
        Management Summary
      </h3>

      <div className="mt-4 space-y-2 text-sm">
        <p>
          Total Outlet :
          {" "}
          {outletSummary.totalOutlet}
        </p>

        <p>
          Total Institution :
          {" "}
          {institutionSummary.totalInstitution}
        </p>

        <p>
          Total Community :
          {" "}
          {communitySummary.totalCommunity}
        </p>

        <p>
          Coverage :
          {" "}
          {outletSummary.coveragePercentage}%
        </p>
      </div>
    </div>
  );
}