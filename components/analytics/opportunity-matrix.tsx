import { lhrMetrics } from "../../data/lhr";
import { tocMetrics } from "../../data/toc";

export function OpportunityMatrix() {
  const threshold = 80;

  const territories = lhrMetrics.map((lhr) => {
    const toc = tocMetrics.find(
      (item) => item.territoryName === lhr.territoryName
    );

    return {
      territoryName: lhr.territoryName,
      lhr: lhr.lhrPercentage,
      toc: toc?.tocPercentage ?? 0,
    };
  });

  const highHigh = territories.filter(
    (item) =>
      item.lhr >= threshold &&
      item.toc >= threshold
  );

  const highLow = territories.filter(
    (item) =>
      item.lhr >= threshold &&
      item.toc < threshold
  );

  const lowHigh = territories.filter(
    (item) =>
      item.lhr < threshold &&
      item.toc >= threshold
  );

  const lowLow = territories.filter(
    (item) =>
      item.lhr < threshold &&
      item.toc < threshold
  );

  const quadrants = [
    {
      title: "High LHR + High TOC",
      items: highHigh,
      color: "bg-green-50",
    },
    {
      title: "High LHR + Low TOC",
      items: highLow,
      color: "bg-blue-50",
    },
    {
      title: "Low LHR + High TOC",
      items: lowHigh,
      color: "bg-yellow-50",
    },
    {
      title: "Low LHR + Low TOC",
      items: lowLow,
      color: "bg-red-50",
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-5 text-lg font-semibold">
        Territory Opportunity Matrix
      </h3>

      <div className="grid gap-4 md:grid-cols-2">
        {quadrants.map((quadrant) => (
          <div
            key={quadrant.title}
            className={`rounded-lg p-4 ${quadrant.color}`}
          >
            <h4 className="font-semibold">
              {quadrant.title}
            </h4>

            <ul className="mt-3 space-y-2">
              {quadrant.items.length === 0 ? (
                <li className="text-sm text-slate-500">
                  No territory
                </li>
              ) : (
                quadrant.items.map((item) => (
                  <li
                    key={item.territoryName}
                    className="text-sm"
                  >
                    {item.territoryName}
                    {" "}
                    (LHR {item.lhr}% | TOC {item.toc}%)
                  </li>
                ))
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}