import { glossary } from "../../data/glossary";

interface BusinessGlossaryProps {
  category:
    | "executive"
    | "territory"
    | "outlet"
    | "institution"
    | "community"
    | "event"
    | "roadmap";
}

export function BusinessGlossary({
  category,
}: BusinessGlossaryProps) {
  const items = glossary.filter(
    (item) => item.category === category
  );

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Business Glossary
      </h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.term}
            className="rounded-lg border border-slate-100 p-4"
          >
            <h4 className="font-semibold">
              {item.term} — {item.fullName}
            </h4>

            <p className="mt-2 text-sm text-slate-600">
              {item.description}
            </p>

            <p className="mt-2 text-sm text-blue-700">
              <strong>Business Meaning:</strong>{" "}
              {item.businessMeaning}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}