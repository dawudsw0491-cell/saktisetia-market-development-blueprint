import { KpiCard } from "../cards/kpi-card";

import { territories } from "../../data/territories";
import { lhrMetrics } from "../../data/lhr";
import { tocMetrics } from "../../data/toc";

export function TerritoryKpiSection() {
  const averageScore = Math.round(
    territories.reduce(
      (sum, territory) => sum + territory.territoryScore,
      0
    ) / territories.length
  );

  const highestScore = Math.max(
    ...territories.map(
      (territory) => territory.territoryScore
    )
  );

  const averageLhr = Math.round(
    lhrMetrics.reduce(
      (sum, item) => sum + item.lhrPercentage,
      0
    ) / lhrMetrics.length
  );

  const averageToc = Math.round(
    tocMetrics.reduce(
      (sum, item) => sum + item.tocPercentage,
      0
    ) / tocMetrics.length
  );

  const priorityTerritories =
    territories.filter(
      (territory) => territory.territoryScore >= 80
    ).length;

  return (
    <section className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
      <KpiCard
        title="Territories"
        value={territories.length}
      />

      <KpiCard
        title="Avg Score"
        value={averageScore}
      />

      <KpiCard
        title="Top Score"
        value={highestScore}
      />

      <KpiCard
        title="Avg LHR"
        value={`${averageLhr}%`}
      />

      <KpiCard
        title="Avg TOC"
        value={`${averageToc}%`}
      />

      <KpiCard
        title="Priority"
        value={priorityTerritories}
      />
    </section>
  );
}