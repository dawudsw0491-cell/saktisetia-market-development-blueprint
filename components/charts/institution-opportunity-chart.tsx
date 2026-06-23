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
  institutionOpportunities,
} from "../../data/institutions";

export function InstitutionOpportunityChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Institution Opportunity Analysis
      </h3>

      <div className="overflow-x-auto">
        <BarChart
          width={800}
          height={320}
          data={institutionOpportunities}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="territoryName" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="institutionCount"
            fill="#7c3aed"
          />
        </BarChart>
      </div>
    </div>
  );
}