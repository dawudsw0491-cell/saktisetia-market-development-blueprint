export function TargetOperatingModel() {
  const domains = [
    "Strategy",
    "People",
    "Process",
    "Data",
    "Technology",
    "Governance"
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Target Operating Model
      </h3>

      <div className="grid gap-3 md:grid-cols-2">
        {domains.map((domain) => (
          <div
            key={domain}
            className="rounded-lg border border-slate-200 p-3"
          >
            {domain}
          </div>
        ))}
      </div>
    </div>
  );
}