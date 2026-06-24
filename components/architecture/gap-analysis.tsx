export function GapAnalysis() {
  const gaps = [
    {
      area: "Data Integration",
      current: "Partial",
      target: "Integrated"
    },
    {
      area: "Decision Support",
      current: "Manual",
      target: "Automated"
    },
    {
      area: "Governance",
      current: "Ad Hoc",
      target: "Structured"
    },
    {
      area: "Architecture Management",
      current: "Limited",
      target: "Enterprise Wide"
    }
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Gap Analysis
      </h3>

      <div className="space-y-3">
        {gaps.map((gap) => (
          <div
            key={gap.area}
            className="rounded-lg border border-slate-200 p-3"
          >
            <p className="font-medium">
              {gap.area}
            </p>

            <p className="text-sm text-slate-500">
              Current: {gap.current}
            </p>

            <p className="text-sm text-blue-600">
              Target: {gap.target}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}