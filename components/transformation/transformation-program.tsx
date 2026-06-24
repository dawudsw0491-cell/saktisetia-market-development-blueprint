export function TransformationProgram() {
  const programs = [
    "Data Foundation",
    "Analytics Platform",
    "Decision Support System",
    "Governance Platform",
    "Enterprise Architecture",
    "Transformation Office"
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Transformation Program
      </h3>

      <ol className="list-decimal pl-5 text-sm">
        {programs.map((program) => (
          <li key={program}>
            {program}
          </li>
        ))}
      </ol>
    </div>
  );
}