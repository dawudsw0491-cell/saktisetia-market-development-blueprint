export function DecisionLog() {
  const decisions = [
    {
      id: "DEC-001",
      decision:
        "Kertosono menjadi prioritas utama ekspansi."
    },
    {
      id: "DEC-002",
      decision:
        "Pare fokus institutional activation."
    }
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Decision Log
      </h3>

      <div className="space-y-3">
        {decisions.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-slate-200 p-3"
          >
            <p className="font-medium">
              {item.id}
            </p>

            <p className="text-sm text-slate-600">
              {item.decision}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}