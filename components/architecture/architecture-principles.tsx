export function ArchitecturePrinciples() {
  const principles = [
    "Business First",
    "Data Driven Decision",
    "Single Source of Truth",
    "Scalable Architecture",
    "Security by Design",
    "Continuous Improvement"
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Architecture Principles
      </h3>

      <ul className="list-disc pl-5 text-sm">
        {principles.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}