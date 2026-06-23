import { KpiCard } from "../cards/kpi-card";

export function ExecutiveScorecard() {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <KpiCard
        title="Market Health Score"
        value="83%"
        description="Kesehatan pasar berdasarkan LHR, TOC, dan coverage."
      />

      <KpiCard
        title="Opportunity Score"
        value="88%"
        description="Potensi pengembangan outlet, institusi, dan komunitas."
      />

      <KpiCard
        title="Risk Score"
        value="72%"
        description="Evaluasi risiko market development."
      />

      <KpiCard
        title="Growth Readiness"
        value="81%"
        description="Kesiapan organisasi menjalankan roadmap pertumbuhan."
      />
    </section>
  );
}