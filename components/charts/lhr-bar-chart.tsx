"use client";

import {
  ResponsiveContainer,
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

      <div
        className="h-[320px] w-full"
        style={{ minWidth: 300 }}
      >
        <ResponsiveContainer>
          <BarChart data={lhrMetrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="territoryName" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="lhrPercentage"
              fill="#2563eb"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}