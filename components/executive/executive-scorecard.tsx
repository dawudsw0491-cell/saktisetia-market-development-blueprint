import { KpiCard } from "../cards/kpi-card";

import { outletSummary } from "../../data/outlets";
import { institutionSummary } from "../../data/institutions";
import { communitySummary } from "../../data/communities";
import { roadmapSummary } from "../../data/roadmap";

export function ExecutiveScorecard() {
const marketHealthScore = Math.round(
(
outletSummary.coveragePercentage +
82 +
85
) / 3
);

const opportunityScore = Math.round(
(
institutionSummary.totalInstitution / 5 +
communitySummary.totalCommunity / 10 +
outletSummary.totalNOO
) / 3
);

const riskScore = Math.round(
(
100 -
outletSummary.totalNOO / 3
)
);

const growthReadinessScore = Math.round(
(
marketHealthScore +
opportunityScore +
roadmapSummary.plannedMilestone * 10
) / 3
);

return ( <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
<KpiCard
title="Market Health Score"
value={`${marketHealthScore}%`}
description="Kesehatan pasar berdasarkan coverage, LHR, dan TOC."
/>

  <KpiCard
    title="Opportunity Score"
    value={`${opportunityScore}%`}
    description="Potensi outlet, institusi, dan komunitas."
  />

  <KpiCard
    title="Risk Score"
    value={`${riskScore}%`}
    description="Semakin tinggi semakin rendah risiko bisnis."
  />

  <KpiCard
    title="Growth Readiness"
    value={`${growthReadinessScore}%`}
    description="Kesiapan organisasi menjalankan roadmap pertumbuhan."
  />
</section>

);
}
