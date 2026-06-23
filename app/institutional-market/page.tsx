import { DashboardLayout } from "../../components/layout/dashboard-layout";

import { PageHeader } from "../../components/shared/page-header";
import { BusinessGlossary } from "../../components/shared/business-glossary";

import { KpiCard } from "../../components/cards/kpi-card";
import { SummaryCard } from "../../components/cards/summary-card";

import {
  institutionSummary,
  institutionOpportunities,
} from "../../data/institutions";

export default function InstitutionalMarketPage() {
  const topOpportunity =
    institutionOpportunities[0];

  return (
    <DashboardLayout>
      <PageHeader
        title="Institutional Market"
        subtitle="Analisis pasar institusi, peluang kerja sama, dan strategi penetrasi institusi."
      />

      <section className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <KpiCard
          title="Institutions"
          value={institutionSummary.totalInstitution}
        />

        <KpiCard
          title="University"
          value={institutionSummary.totalUniversity}
        />

        <KpiCard
          title="School"
          value={institutionSummary.totalSchool}
        />

        <KpiCard
          title="Pesantren"
          value={institutionSummary.totalPesantren}
        />

        <KpiCard
          title="Government"
          value={institutionSummary.totalGovernment}
        />

        <KpiCard
          title="Private Company"
          value={institutionSummary.totalPrivateCompany}
        />
      </section>

      <section className="mt-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">
            Executive Summary
          </h3>

          <p className="text-sm text-slate-600">
            Institutional Market merupakan salah satu
            sumber pertumbuhan utama melalui kerja sama
            dengan universitas, sekolah, pesantren,
            instansi pemerintah, BUMN, dan perusahaan
            swasta pada wilayah prioritas.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Top Opportunity Territory"
          content={`${topOpportunity.territoryName} memiliki ${topOpportunity.institutionCount} institusi dengan opportunity score ${topOpportunity.opportunityScore}.`}
        />

        <SummaryCard
          title="University Partnership"
          content="Pengembangan kerja sama universitas untuk aktivasi mahasiswa dan event kampus."
        />

        <SummaryCard
          title="School Activation"
          content="Peningkatan program edukasi dan engagement pada jaringan sekolah prioritas."
        />

        <SummaryCard
          title="Government & Corporate"
          content="Meningkatkan kerja sama instansi pemerintah, BUMN, dan perusahaan swasta."
        />
      </section>

      <section className="mt-8">
        <BusinessGlossary category="institution" />
      </section>
    </DashboardLayout>
  );
}