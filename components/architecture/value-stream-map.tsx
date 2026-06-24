export function ValueStreamMap() {
  const streams = [
    "Market Assessment",
    "Opportunity Analysis",
    "Activation Program",
    "Partnership Development",
    "Growth Execution",
    "Performance Review"
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Value Stream Map
      </h3>

      <ol className="list-decimal pl-5 text-sm">
        {streams.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}