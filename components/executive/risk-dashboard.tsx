export function RiskDashboard() {
  const risks = [
    {
      category: "Outlet Coverage Risk",
      level: "MEDIUM",
      description:
        "Masih terdapat gap outlet pada beberapa area prioritas market development."
    },
    {
      category: "Institution Partnership Risk",
      level: "HIGH",
      description:
        "Sebagian besar institusi target belum memiliki kerja sama aktif."
    },
    {
      category: "Community Activation Risk",
      level: "MEDIUM",
      description:
        "Program aktivasi komunitas masih dalam tahap pengembangan."
    },
    {
      category: "Event Conversion Risk",
      level: "HIGH",
      description:
        "Mayoritas event masih berstatus planned sehingga hasil konversi belum dapat diukur."
    }
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Strategic Risk Dashboard
      </h3>

      <div className="space-y-4">
        {risks.map((risk) => (
          <div
            key={risk.category}
            className="rounded-lg border border-slate-200 p-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">
                {risk.category}
              </h4>

              <span
                className={
                  risk.level === "HIGH"
                    ? "font-semibold text-red-600"
                    : "font-semibold text-amber-600"
                }
              >
                {risk.level}
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-600">
              {risk.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}