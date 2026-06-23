import { DashboardLayout } from "../../components/layout/dashboard-layout";

import { PageHeader } from "../../components/shared/page-header";
import { BusinessGlossary } from "../../components/shared/business-glossary";

import { KpiCard } from "../../components/cards/kpi-card";
import { SummaryCard } from "../../components/cards/summary-card";

import { OutletOpportunityChart } from "../../components/charts/outlet-opportunity-chart";
import { OutletGapTable } from "../../components/tables/outlet-gap-table";

import { outletSummary } from "../../data/outlets";

export default function OutletDevelopmentPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Outlet Development"
        subtitle="Monitoring outlet performance, expansion strategy, dan gap analysis."
      />

      <section className="grid gap-4 md:grid-cols-5">
        <KpiCard
          title="Total Outlet"
          value={outletSummary.totalOutlet}
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
          title="Coverage %"
          value={`${outletSummary.coveragePercentage}%`}
        />
      </section>

      <section className="mt-8">
        <OutletOpportunityChart />
      </section>

      <section className="mt-8">
        <OutletGapTable />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Priority Expansion"
          content="Kertosono dan Pare memiliki gap outlet terbesar dan menjadi prioritas ekspansi."
        />

        <SummaryCard
          title="Coverage Strategy"
          content="Meningkatkan outlet coverage pada wilayah dengan TOC tinggi."
        />
      </section>

      <section className="mt-8">
        <BusinessGlossary category="outlet" />
      </section>
    </DashboardLayout>
  );
}