import { DashboardLayout } from "../../components/layout/dashboard-layout";

import { PageHeader } from "../../components/shared/page-header";
import { BusinessGlossary } from "../../components/shared/business-glossary";

import { KpiCard } from "../../components/cards/kpi-card";
import { SummaryCard } from "../../components/cards/summary-card";

import {
  communitySummary,
  communityOpportunities,
} from "../../data/communities";

import {
  CommunityOpportunityChart,
} from "../../components/charts/community-opportunity-chart";

import {
  CommunityOpportunityTable,
} from "../../components/tables/community-opportunity-table";

export default function CommunityMarketPage() {
  const topCommunity =
    communityOpportunities[0];

  return (
    <DashboardLayout>
      <PageHeader
        title="Community Market"
        subtitle="Analisis komunitas, engagement, dan peluang aktivasi market berbasis komunitas."
      />

      <section className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <KpiCard
          title="Communities"
          value={communitySummary.totalCommunity}
        />

        <KpiCard
          title="UMKM"
          value={communitySummary.totalUmkm}
        />

        <KpiCard
          title="Organization"
          value={communitySummary.totalOrganization}
        />

        <KpiCard
          title="Association"
          value={communitySummary.totalAssociation}
        />

        <KpiCard
          title="Business"
          value={communitySummary.totalBusinessCommunity}
        />

        <KpiCard
          title="Event Partner"
          value={communitySummary.totalEventPartner}
        />
      </section>

      <section className="mt-8">
        <CommunityOpportunityChart />
      </section>

      <section className="mt-8">
        <CommunityOpportunityTable />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Top Community Territory"
          content={`${topCommunity.territoryName} memiliki peluang komunitas tertinggi dengan score ${topCommunity.opportunityScore}.`}
        />

        <SummaryCard
          title="Community Strategy"
          content="Fokus pada UMKM, organisasi, asosiasi bisnis, dan komunitas edukasi untuk memperkuat market engagement."
        />
      </section>

      <section className="mt-8">
        <BusinessGlossary category="community" />
      </section>
    </DashboardLayout>
  );
}