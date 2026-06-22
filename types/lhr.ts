export type LhrCategory =
  | "VERY_HIGH"
  | "HIGH"
  | "MEDIUM"
  | "LOW"
  | "VERY_LOW";

export interface LhrMetric {
  id: string;

  territoryId: string;

  territoryName: string;

  lhrPercentage: number;

  averageDailyTraffic: number;

  peakTrafficEstimate: number;

  score: number;

  category: LhrCategory;

  notes: string;
}

export interface LhrSummary {
  totalTerritory: number;

  averageLhrPercentage: number;

  highestLhrArea: string;

  lowestLhrArea: string;
}