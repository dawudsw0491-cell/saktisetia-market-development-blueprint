export function CapabilityBasedPlanning() {
  const capabilities = [
    {
      capability: "Territory Intelligence",
      current: "Implemented",
      target: "Predictive Analytics"
    },
    {
      capability: "Outlet Development",
      current: "Implemented",
      target: "AI Opportunity Scoring"
    },
    {
      capability: "Institutional Market",
      current: "Implemented",
      target: "Partnership Lifecycle Management"
    },
    {
      capability: "Community Market",
      current: "Implemented",
      target: "Community Ecosystem Platform"
    }
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Capability Based Planning
      </h3>

      <div className="space-y-3">
        {capabilities.map((item) => (
          <div
            key={item.capability}
            className="rounded-lg border border-slate-200 p-3"
          >
            <p className="font-medium">
              {item.capability}
            </p>

            <p className="text-sm text-slate-500">
              Current: {item.current}
            </p>

            <p className="text-sm text-blue-600">
              Target: {item.target}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}