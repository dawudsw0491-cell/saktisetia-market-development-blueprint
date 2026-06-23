export function IssueLog() {
  const issues = [
    {
      id: "ISS-001",
      issue:
        "Institution partnership belum aktif.",
      owner: "Institution Team"
    },
    {
      id: "ISS-002",
      issue:
        "NOO development belum mencapai target.",
      owner: "Outlet Team"
    }
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Issue Log
      </h3>

      <div className="space-y-3">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="rounded-lg border border-slate-200 p-3"
          >
            <p className="font-medium">
              {issue.id}
            </p>

            <p className="text-sm text-slate-600">
              {issue.issue}
            </p>

            <p className="text-sm text-slate-500">
              Owner: {issue.owner}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}