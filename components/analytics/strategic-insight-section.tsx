import { territories } from "../../data/territories";

export function StrategicInsightSection() {
  const ranking = [...territories].sort(
    (a, b) => b.territoryScore - a.territoryScore
  );

  const topThree = ranking.slice(0, 3);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">
        Strategic Insight
      </h3>

      <div className="space-y-4">
        <div className="rounded-lg bg-blue-50 p-4">
          <h4 className="font-semibold text-blue-900">
            Priority Expansion Territory
          </h4>

          <p className="mt-2 text-sm text-slate-700">
            Fokus ekspansi pada wilayah:
            {" "}
            {topThree
              .map((territory) => territory.areaName)
              .join(", ")}
            .
          </p>
        </div>

        <div className="rounded-lg bg-green-50 p-4">
          <h4 className="font-semibold text-green-900">
            Market Penetration Strategy
          </h4>

          <p className="mt-2 text-sm text-slate-700">
            Optimalkan outlet development,
            institutional activation,
            dan community engagement
            pada territory dengan skor di atas 80.
          </p>
        </div>

        <div className="rounded-lg bg-yellow-50 p-4">
          <h4 className="font-semibold text-yellow-900">
            Institutional Activation
          </h4>

          <p className="mt-2 text-sm text-slate-700">
            Prioritaskan sekolah,
            kampus,
            komunitas belajar,
            dan event lokal untuk
            meningkatkan awareness.
          </p>
        </div>

        <div className="rounded-lg bg-red-50 p-4">
          <h4 className="font-semibold text-red-900">
            Risk Area
          </h4>

          <p className="mt-2 text-sm text-slate-700">
            Territory dengan skor rendah
            memerlukan demand creation
            sebelum dilakukan ekspansi outlet.
          </p>
        </div>
      </div>
    </div>
  );
}