export function BenefitsRealization() {
  const benefits = [
    "Market Coverage Improvement",
    "Decision Quality Improvement",
    "Operational Efficiency",
    "Partnership Growth",
    "Digital Capability Enhancement"
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Benefits Realization
      </h3>

      <ul className="list-disc pl-5 text-sm">
        {benefits.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}