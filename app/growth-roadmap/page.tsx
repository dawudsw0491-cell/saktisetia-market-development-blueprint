import { DashboardLayout } from "../../components/layout/dashboard-layout";

import { PageHeader } from "../../components/shared/page-header";
import { BusinessGlossary } from "../../components/shared/business-glossary";

import { KpiCard } from "../../components/cards/kpi-card";
import { SummaryCard } from "../../components/cards/summary-card";

export default function GrowthRoadmapPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Growth Roadmap"
        subtitle="Strategic initiatives, milestones, KPI targets, dan roadmap pengembangan market."
      />

      <section className="grid gap-4 md:grid-cols-4">
        <KpiCard
          title="Strategic Programs"
          value="12"
        />

        <KpiCard
          title="Milestones"
          value="36"
        />

        <KpiCard
          title="KPI Targets"
          value="24"
        />

        <KpiCard
          title="Priority Initiatives"
          value="8"
        />
      </section>

      <section className="mt-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">
            Executive Summary
          </h3>

          <p className="text-sm text-slate-600">
            Growth Roadmap digunakan sebagai panduan
            implementasi strategi market development
            melalui program ekspansi outlet,
            institutional activation, community engagement,
            dan event activation yang terukur.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Phase 1 - Market Foundation"
          content="Memperkuat territory intelligence, outlet mapping, dan market segmentation."
        />

        <SummaryCard
          title="Phase 2 - Market Expansion"
          content="Percepatan outlet acquisition dan institutional partnership."
        />

        <SummaryCard
          title="Phase 3 - Market Activation"
          content="Peningkatan community engagement dan event activation."
        />

        <SummaryCard
          title="Phase 4 - Sustainable Growth"
          content="Optimalisasi KPI, customer retention, dan market leadership."
        />
      </section>

      <section className="mt-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-5 text-lg font-semibold">
            Strategic Roadmap Timeline
          </h3>

          <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 p-4">
              <h4 className="font-semibold">
                Q1 - Territory & Outlet Assessment
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Validasi territory score, outlet coverage,
                dan market opportunity.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <h4 className="font-semibold">
                Q2 - Institutional Expansion
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Pengembangan kerja sama institusi dan
                program aktivasi pendidikan.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <h4 className="font-semibold">
                Q3 - Community & Event Activation
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Aktivasi komunitas dan event untuk
                meningkatkan engagement dan awareness.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <h4 className="font-semibold">
                Q4 - Performance Optimization
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Evaluasi KPI, ROI program, dan
                penyusunan roadmap tahun berikutnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <BusinessGlossary category="roadmap" />
      </section>
    </DashboardLayout>
  );
}