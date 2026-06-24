export function ArchitectureWorkPackages() {
  const packages = [
    "Territory Intelligence Enhancement",
    "Outlet Optimization Program",
    "Institution Partnership Platform",
    "Community Engagement Platform",
    "Governance Framework",
    "Enterprise Architecture Repository"
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Architecture Work Packages
      </h3>

      <ul className="list-disc pl-5 text-sm">
        {packages.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}