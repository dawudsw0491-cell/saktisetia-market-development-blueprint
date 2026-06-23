"use client";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { outletGapAnalysis } from "../../data/outlets";

export function OutletOpportunityChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Outlet Opportunity Analysis
      </h3>

      <div className="overflow-x-auto">
        <BarChart
          width={800}
          height={320}
          data={outletGapAnalysis}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="territoryName" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="gapOutlet"
            fill="#2563eb"
          />
        </BarChart>
      </div>
    </div>
  );
}