import { territories } from "../../data/territories";

export function ExecutiveReport() {
  const topTerritory = [...territories]
    .sort(
      (a, b) =>
        b.territoryScore - a.territoryScore
    )[0];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">
        Executive Report
      </h3>

      <div className="mt-4 space-y-4 text-sm">
        <p>
          Market Development Program menunjukkan
          potensi pertumbuhan yang tinggi pada
          wilayah prioritas.
        </p>

        <p>
          Wilayah dengan skor tertinggi saat ini
          adalah <strong>{topTerritory.areaName}</strong>
          dengan Territory Score sebesar{" "}
          <strong>
            {topTerritory.territoryScore}
          </strong>.
        </p>

        <p>
          Fokus utama organisasi adalah
          mempercepat outlet expansion,
          institutional activation,
          community engagement,
          dan strategic partnership.
        </p>
      </div>
    </div>
  );
}