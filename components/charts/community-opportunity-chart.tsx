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
  communityOpportunities,
} from "../../data/communities";

export function CommunityOpportunityChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Community Opportunity Analysis
      </h3>

      <div className="overflow-x-auto">
        <BarChart
          width={800}
          height={320}
          data={communityOpportunities}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="territoryName" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="communityCount"
            fill="#0891b2"
          />
        </BarChart>
      </div>
    </div>
  );
}