export function RiskRegister() {
  const risks = [
    {
      id: "RISK-001",
      category: "Market Expansion",
      level: "HIGH",
      mitigation:
        "Percepat validasi wilayah prioritas."
    },
    {
      id: "RISK-002",
      category: "Institution Partnership",
      level: "MEDIUM",
      mitigation:
        "Bangun MoU dan strategic partnership."
    },
    {
      id: "RISK-003",
      category: "Community Engagement",
      level: "MEDIUM",
      mitigation:
        "Tingkatkan program aktivasi komunitas."
    }
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Risk Register
      </h3>

      <div className="space-y-3">
        {risks.map((risk) => (
          <div
            key={risk.id}
            className="rounded-lg border border-slate-200 p-3"
          >
            <p className="font-medium">
              {risk.id} - {risk.category}
            </p>

            <p className="text-sm text-slate-500">
              Risk Level: {risk.level}
            </p>

            <p className="text-sm text-slate-600">
              Mitigation: {risk.mitigation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}