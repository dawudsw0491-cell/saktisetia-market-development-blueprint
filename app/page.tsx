import { DashboardLayout } from "../components/layout/dashboard-layout";

import { PageHeader } from "../components/shared/page-header";

import { KpiCard } from "../components/cards/kpi-card";
import { SummaryCard } from "../components/cards/summary-card";

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
        subtitle="Territory Intelligence, Outlet Development, Institutional Market, Community Market, Event Strategy, dan Growth Roadmap."
      />

      <section className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
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
        <LhrBarChart />
        <TocBarChart />
      </section>

      <section className="mt-8">
        <TerritoryRankingChart />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Top Opportunity Area"
          content="Kertosono menjadi wilayah dengan kombinasi LHR, TOC, dan outlet opportunity tertinggi."
        />

        <SummaryCard
          title="Top Institutional Market"
          content="Pare memiliki konsentrasi institusi pendidikan dan komunitas belajar terbesar."
        />

        <SummaryCard
          title="Top Community Market"
          content="Kediri Kota dan Pare memiliki komunitas paling aktif untuk aktivasi market."
        />

        <SummaryCard
          title="Strategic Focus"
          content="Fokus utama pada NOO Development, Institutional Activation, dan Community Engagement."
        />
      </section>
    </DashboardLayout>
  );
}