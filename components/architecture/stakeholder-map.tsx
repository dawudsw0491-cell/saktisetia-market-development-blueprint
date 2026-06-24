export function StakeholderMap() {
  const stakeholders = [
    "Board of Directors",
    "Regional Manager",
    "Area Manager",
    "Sales Manager",
    "Market Development Manager",
    "Outlet Team",
    "Community Team"
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Stakeholder Map
      </h3>

      <ul className="list-disc pl-5 text-sm">
        {stakeholders.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}