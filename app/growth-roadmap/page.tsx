import { DashboardLayout } from "../../components/layout/dashboard-layout";

import { PageHeader } from "../../components/shared/page-header";
import { BusinessGlossary } from "../../components/shared/business-glossary";

import { SummaryCard } from "../../components/cards/summary-card";

import {
  growthRoadmap,
  roadmapMilestones,
} from "../../data/roadmap";

import {
  RoadmapKpiSection,
} from "../../components/analytics/roadmap-kpi-section";

import {
  RoadmapTable,
} from "../../components/tables/roadmap-table";

export default function GrowthRoadmapPage() {
  const nextMilestone =
    roadmapMilestones[0];

  const finalTarget =
    growthRoadmap[growthRoadmap.length - 1];

  return (
    <DashboardLayout>
      <PageHeader
        title="Growth Roadmap"
        subtitle="Strategic initiatives, milestones, KPI targets, dan roadmap pengembangan market."
      />

      <RoadmapKpiSection />

      <section className="mt-8">
        <RoadmapTable />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Next Milestone"
          content={`${nextMilestone.title} (${nextMilestone.phase})`}
        />

        <SummaryCard
          title="Long Term Target"
          content={finalTarget.expectedOutcome}
        />
      </section>

      <section className="mt-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">
            Strategic Milestones
          </h3>

          <div className="space-y-4">
            {roadmapMilestones.map(
              (milestone) => (
                <div
                  key={milestone.id}
                  className="rounded-lg border border-slate-200 p-4"
                >
                  <h4 className="font-semibold">
                    {milestone.phase} - {milestone.title}
                  </h4>

                  <p className="mt-2 text-sm text-slate-600">
                    {milestone.objective}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    Success Indicator:
                    {" "}
                    {milestone.successIndicator}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <BusinessGlossary category="roadmap" />
      </section>
    </DashboardLayout>
  );
}