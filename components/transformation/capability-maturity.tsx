export function CapabilityMaturity() {
  const maturity = [
    {
      capability: "Analytics",
      level: "Level 4"
    },
    {
      capability: "Governance",
      level: "Level 3"
    },
    {
      capability: "Architecture",
      level: "Level 4"
    },
    {
      capability: "Transformation",
      level: "Level 2"
    }
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Capability Maturity
      </h3>

      <div className="space-y-3">
        {maturity.map((item) => (
          <div
            key={item.capability}
            className="rounded-lg border border-slate-200 p-3"
          >
            <p className="font-medium">
              {item.capability}
            </p>

            <p className="text-sm text-blue-600">
              {item.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}