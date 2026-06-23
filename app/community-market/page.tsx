import { DashboardLayout } from "../../components/layout/dashboard-layout";

import { PageHeader } from "../../components/shared/page-header";
import { BusinessGlossary } from "../../components/shared/business-glossary";

import { KpiCard } from "../../components/cards/kpi-card";
import { SummaryCard } from "../../components/cards/summary-card";

export default function CommunityMarketPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Community Market"
        subtitle="Analisis komunitas, engagement, dan peluang aktivasi market berbasis komunitas."
      />

      <section className="grid gap-4 md:grid-cols-4">
        <KpiCard
          title="Communities"
          value="125"
        />

        <KpiCard
          title="Community Leaders"
          value="78"
        />

        <KpiCard
          title="Active Communities"
          value="94"
        />

        <KpiCard
          title="Activation Programs"
          value="36"
        />
      </section>

      <section className="mt-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">
            Executive Summary
          </h3>

          <p className="text-sm text-slate-600">
            Community Market menjadi penggerak utama
            awareness, engagement, dan word of mouth
            marketing melalui komunitas lokal,
            organisasi sosial, komunitas pendidikan,
            komunitas olahraga, dan komunitas hobi.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Top Community Area"
          content="Kediri Kota dan Pare memiliki konsentrasi komunitas paling aktif untuk market activation."
        />

        <SummaryCard
          title="Community Engagement"
          content="Fokus meningkatkan hubungan dengan community leader dan key opinion leader."
        />

        <SummaryCard
          title="Activation Strategy"
          content="Mengintegrasikan event, sponsorship, dan edukasi produk pada komunitas prioritas."
        />

        <SummaryCard
          title="Growth Opportunity"
          content="Komunitas menjadi sumber lead generation dan customer advocacy yang berkelanjutan."
        />
      </section>

      <section className="mt-8">
        <BusinessGlossary category="community" />
      </section>
    </DashboardLayout>
  );
}