import { KpiCard } from "../cards/kpi-card";

import {
  roadmapSummary,
} from "../../data/roadmap";

export function RoadmapKpiSection() {
  return (
    <section className="grid gap-4 md:grid-cols-4">
      <KpiCard
        title="Milestones"
        value={roadmapSummary.totalMilestone}
      />

      <KpiCard
        title="Planned"
        value={roadmapSummary.plannedMilestone}
      />

      <KpiCard
        title="In Progress"
        value={roadmapSummary.inProgressMilestone}
      />

      <KpiCard
        title="Completed"
        value={roadmapSummary.completedMilestone}
      />
    </section>
  );
}