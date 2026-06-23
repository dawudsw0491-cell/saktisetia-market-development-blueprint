"use client";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  eventPerformance,
} from "../../data/events";

export function EventPerformanceChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Event Performance Analysis
      </h3>

      <div className="overflow-x-auto">
        <BarChart
          width={900}
          height={320}
          data={eventPerformance}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="eventName" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="participantAchievement"
            fill="#2563eb"
          />
        </BarChart>
      </div>
    </div>
  );
}