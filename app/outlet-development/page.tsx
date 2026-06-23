import { DashboardLayout } from "../../components/layout/dashboard-layout";

import { PageHeader } from "../../components/shared/page-header";
import { BusinessGlossary } from "../../components/shared/business-glossary";

import { KpiCard } from "../../components/cards/kpi-card";
import { SummaryCard } from "../../components/cards/summary-card";

import { outletSummary } from "../../data/outlets";

export default function OutletDevelopmentPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Outlet Development"
        subtitle="Monitoring outlet performance, outlet expansion, dan market coverage."
      />

      <section className="grid gap-4 md:grid-cols-3">
        <KpiCard
          title="Registered Outlet (RO)"
          value={outletSummary.totalRO}
        />

        <KpiCard
          title="Active Outlet (AO)"
          value={outletSummary.totalAO}
        />

        <KpiCard
          title="New Outlet Opening (NOO)"
          value={outletSummary.totalNOO}
        />
      </section>

      <section className="mt-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">
            Executive Summary
          </h3>

          <p className="text-sm text-slate-600">
            Outlet Development berfokus pada
            peningkatan jumlah outlet aktif,
            perluasan distribusi pasar,
            serta akuisisi outlet baru pada
            wilayah prioritas.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Outlet Expansion"
          content="Fokus ekspansi outlet pada wilayah dengan Territory Score tinggi dan TOC tinggi."
        />

        <SummaryCard
          title="Outlet Activation"
          content="Meningkatkan produktivitas outlet aktif melalui program aktivasi dan engagement."
        />

        <SummaryCard
          title="Outlet Coverage"
          content="Memastikan cakupan distribusi merata pada seluruh territory prioritas."
        />

        <SummaryCard
          title="Growth Strategy"
          content="Menggabungkan NOO Development dengan Community Activation dan Institutional Market."
        />
      </section>

      <section className="mt-8">
        <BusinessGlossary category="outlet" />
      </section>
    </DashboardLayout>
  );
}