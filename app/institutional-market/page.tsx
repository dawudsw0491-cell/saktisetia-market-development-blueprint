import { DashboardLayout } from "../../components/layout/dashboard-layout";

import { PageHeader } from "../../components/shared/page-header";
import { BusinessGlossary } from "../../components/shared/business-glossary";

import { KpiCard } from "../../components/cards/kpi-card";
import { SummaryCard } from "../../components/cards/summary-card";

import {
  institutionSummary,
  institutionOpportunities,
} from "../../data/institutions";

import {
  InstitutionOpportunityChart,
} from "../../components/charts/institution-opportunity-chart";

import {
  InstitutionOpportunityTable,
} from "../../components/tables/institution-opportunity-table";

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
        <InstitutionOpportunityChart />
      </section>

      <section className="mt-8">
        <InstitutionOpportunityTable />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Top Opportunity Territory"
          content={`${topOpportunity.territoryName} memiliki peluang institusi tertinggi dengan skor ${topOpportunity.opportunityScore}.`}
        />

        <SummaryCard
          title="Institution Strategy"
          content="Fokus pada universitas, sekolah, pesantren, instansi pemerintah, dan perusahaan swasta."
        />
      </section>

      <section className="mt-8">
        <BusinessGlossary category="institution" />
      </section>
    </DashboardLayout>
  );
}