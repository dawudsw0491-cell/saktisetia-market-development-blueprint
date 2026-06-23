"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { lhrMetrics } from "../../data/lhr";

export function LhrBarChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        LHR Territory Comparison
      </h3>

      <div className="overflow-x-auto">
        <BarChart
          width={700}
          height={320}
          data={lhrMetrics}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="territoryName" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="lhrPercentage"
            fill="#2563eb"
          />
        </BarChart>
      </div>
    </div>
  );
}