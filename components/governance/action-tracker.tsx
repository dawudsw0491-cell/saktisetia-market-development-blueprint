export function ActionTracker() {
  const actions = [
    {
      action:
        "Expand NOO Program Kertosono",
      status: "IN_PROGRESS"
    },
    {
      action:
        "Institution Activation Pare",
      status: "PLANNED"
    },
    {
      action:
        "Community Engagement Kediri Kota",
      status: "PLANNED"
    }
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Action Tracker
      </h3>

      <div className="space-y-3">
        {actions.map((item) => (
          <div
            key={item.action}
            className="rounded-lg border border-slate-200 p-3"
          >
            <p className="font-medium">
              {item.action}
            </p>

            <p className="text-sm text-slate-500">
              Status: {item.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}