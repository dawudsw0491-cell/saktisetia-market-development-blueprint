export function CapabilityMap() {
  const capabilities = [
    "Territory Intelligence",
    "Outlet Development",
    "Institutional Market",
    "Community Market",
    "Event Strategy",
    "Growth Roadmap",
    "Executive Intelligence",
    "Governance Management"
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Business Capability Map
      </h3>

      <div className="grid gap-3 md:grid-cols-2">
        {capabilities.map((capability) => (
          <div
            key={capability}
            className="rounded-lg border border-slate-200 p-3"
          >
            {capability}
          </div>
        ))}
      </div>
    </div>
  );
}