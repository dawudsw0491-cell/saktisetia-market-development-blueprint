import {
  eventPerformance,
} from "../../data/events";

export function EventPerformanceTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Event Performance Table
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">
                Event
              </th>

              <th className="p-2 text-right">
                Participant %
              </th>

              <th className="p-2 text-right">
                Lead %
              </th>

              <th className="p-2 text-right">
                Conversion %
              </th>
            </tr>
          </thead>

          <tbody>
            {eventPerformance.map((item) => (
              <tr
                key={item.eventId}
                className="border-b"
              >
                <td className="p-2">
                  {item.eventName}
                </td>

                <td className="p-2 text-right">
                  {item.participantAchievement}%
                </td>

                <td className="p-2 text-right">
                  {item.leadAchievement}%
                </td>

                <td className="p-2 text-right">
                  {item.conversionAchievement}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}