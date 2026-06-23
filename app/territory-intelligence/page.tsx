import { DashboardLayout } from "../../components/layout/dashboard-layout";

import { PageHeader } from "../../components/shared/page-header";
import { BusinessGlossary } from "../../components/shared/business-glossary";

import { TerritoryKpiSection } from "../../components/analytics/territory-kpi-section";
import { ExecutiveSummarySection } from "../../components/analytics/executive-summary-section";
import { OpportunityMatrix } from "../../components/analytics/opportunity-matrix";
import { StrategicInsightSection } from "../../components/analytics/strategic-insight-section";

import { LhrBarChart } from "../../components/charts/lhr-bar-chart";
import { TocBarChart } from "../../components/charts/toc-bar-chart";
import { TerritoryRankingChart } from "../../components/charts/territory-ranking-chart";

import { TerritoryRankingTable } from "../../components/tables/territory-ranking-table";

export default function TerritoryIntelligencePage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Territory Intelligence"
        subtitle="Territory performance, opportunity analysis, dan ranking wilayah."
      />

      <TerritoryKpiSection />

      <section className="mt-8">
        <ExecutiveSummarySection />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <LhrBarChart />
        <TocBarChart />
      </section>

      <section className="mt-8">
        <OpportunityMatrix />
      </section>

      <section className="mt-8">
        <StrategicInsightSection />
      </section>

      <section className="mt-8">
        <TerritoryRankingChart />
      </section>

      <section className="mt-8">
        <TerritoryRankingTable />
      </section>

      <section className="mt-8">
        <BusinessGlossary category="territory" />
      </section>
    </DashboardLayout>
  );
}