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

import { tocMetrics } from "../../data/toc";

export function TocBarChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        TOC Opportunity Comparison
      </h3>

      <div
        className="h-[320px] w-full"
        style={{ minWidth: 300 }}
      >
        <ResponsiveContainer>
          <BarChart data={tocMetrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="territoryName" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="tocPercentage"
              fill="#16a34a"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}