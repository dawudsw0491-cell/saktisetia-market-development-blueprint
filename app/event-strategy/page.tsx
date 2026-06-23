import { DashboardLayout } from "../../components/layout/dashboard-layout";

import { PageHeader } from "../../components/shared/page-header";
import { BusinessGlossary } from "../../components/shared/business-glossary";

import { KpiCard } from "../../components/cards/kpi-card";
import { SummaryCard } from "../../components/cards/summary-card";

import {
  eventSummary,
  events,
} from "../../data/events";

import {
  EventPerformanceChart,
} from "../../components/charts/event-performance-chart";

import {
  EventPerformanceTable,
} from "../../components/tables/event-performance-table";

export default function EventStrategyPage() {
  const nextEvent = events[0];

  return (
    <DashboardLayout>
      <PageHeader
        title="Event Strategy"
        subtitle="Perencanaan event, market activation, lead generation, dan conversion strategy."
      />

      <section className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <KpiCard
          title="Events"
          value={eventSummary.totalEvent}
        />

        <KpiCard
          title="B2B"
          value={eventSummary.totalB2B}
        />

        <KpiCard
          title="B2C"
          value={eventSummary.totalB2C}
        />

        <KpiCard
          title="Institutional"
          value={eventSummary.totalInstitutional}
        />

        <KpiCard
          title="Community"
          value={eventSummary.totalCommunity}
        />

        <KpiCard
          title="Brand Activation"
          value={eventSummary.totalBrandActivation}
        />
      </section>

      <section className="mt-8">
        <EventPerformanceChart />
      </section>

      <section className="mt-8">
        <EventPerformanceTable />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Next Strategic Event"
          content={`${nextEvent.eventName} akan dilaksanakan pada ${nextEvent.eventDate}.`}
        />

        <SummaryCard
          title="Event Strategy"
          content="Mengintegrasikan event B2B, institutional activation, community engagement, dan brand activation untuk mempercepat market growth."
        />
      </section>

      <section className="mt-8">
        <BusinessGlossary category="event" />
      </section>
    </DashboardLayout>
  );
}