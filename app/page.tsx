import { DashboardLayout } from "../components/layout/dashboard-layout";

import { PageHeader } from "../components/shared/page-header";
import { BusinessGlossary } from "../components/shared/business-glossary";

import { KpiCard } from "../components/cards/kpi-card";
import { SummaryCard } from "../components/cards/summary-card";

import { ExecutiveScorecard } from "../components/executive/executive-scorecard";
import { RiskDashboard } from "../components/executive/risk-dashboard";
import { OpportunityDashboard } from "../components/executive/opportunity-dashboard";
import { StrategicRecommendation } from "../components/executive/strategic-recommendation";

import { ExecutiveSummarySection } from "../components/analytics/executive-summary-section";

import { ExecutiveReport } from "../components/reports/executive-report";
import { ManagementSummary } from "../components/reports/management-summary";
import { StrategicReport } from "../components/reports/strategic-report";
import { RecommendationReport } from "../components/reports/recommendation-report";

import { LhrBarChart } from "../components/charts/lhr-bar-chart";
import { TocBarChart } from "../components/charts/toc-bar-chart";
import { TerritoryRankingChart } from "../components/charts/territory-ranking-chart";

import { territories } from "../data/territories";
import { outletSummary } from "../data/outlets";
import { institutionSummary } from "../data/institutions";
import { communitySummary } from "../data/communities";

export default function HomePage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Market Development Executive Dashboard"
        subtitle="Territory Intelligence, Outlet Development, Institutional Market, Community Market, Event Strategy, Growth Roadmap, dan Executive Decision Support System."
      />

      <section className="mt-8">
        <ExecutiveScorecard />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <KpiCard
          title="Territories"
          value={territories.length}
        />

        <KpiCard
          title="RO"
          value={outletSummary.totalRO}
        />

        <KpiCard
          title="AO"
          value={outletSummary.totalAO}
        />

        <KpiCard
          title="NOO"
          value={outletSummary.totalNOO}
        />

        <KpiCard
          title="Institutions"
          value={institutionSummary.totalInstitution}
        />

        <KpiCard
          title="Communities"
          value={communitySummary.totalCommunity}
        />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <RiskDashboard />
        <OpportunityDashboard />
      </section>

      <section className="mt-8">
        <StrategicRecommendation />
      </section>

      <section className="mt-8">
        <ExecutiveSummarySection />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <LhrBarChart />
        <TocBarChart />
      </section>

      <section className="mt-8">
        <TerritoryRankingChart />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Top Opportunity Area"
          content="Kertosono menjadi wilayah dengan kombinasi LHR, TOC, Institution, Community, dan Outlet Opportunity tertinggi."
        />

        <SummaryCard
          title="Top Institutional Market"
          content="Pare memiliki konsentrasi institusi pendidikan terbesar dan menjadi prioritas institutional activation."
        />

        <SummaryCard
          title="Top Community Market"
          content="Kediri Kota dan Pare memiliki basis komunitas paling aktif untuk program engagement."
        />

        <SummaryCard
          title="Strategic Focus"
          content="Prioritas utama adalah Kertosono, Pare, Kediri Kota, dan Nganjuk Kota untuk akselerasi market development."
        />
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">
          Management Reporting Layer
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <ExecutiveReport />
          <ManagementSummary />
          <StrategicReport />
          <RecommendationReport />
        </div>
      </section>

      <section className="mt-8">
        <BusinessGlossary category="executive" />
      </section>
    </DashboardLayout>
  );
}