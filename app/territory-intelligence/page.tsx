import { DashboardLayout } from "../../components/layout/dashboard-layout";
import { PageHeader } from "../../components/shared/page-header";
import { TerritoryCard } from "../../components/cards/territory-card";

import { territories } from "../../data/territories";

export default function TerritoryIntelligencePage() {
  const sortedTerritories = [...territories].sort(
    (a, b) => b.territoryScore - a.territoryScore
  );

  return (
    <DashboardLayout>
      <PageHeader
        title="Territory Intelligence"
        subtitle="Analisis potensi wilayah berdasarkan territory scoring model."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedTerritories.map((territory) => (
          <TerritoryCard
            key={territory.id}
            territoryName={territory.areaName}
            score={territory.territoryScore}
            priority={territory.priority}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}