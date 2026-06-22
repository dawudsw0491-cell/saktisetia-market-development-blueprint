export type TocCategory =
  | "VERY_HIGH"
  | "HIGH"
  | "MEDIUM"
  | "LOW"
  | "VERY_LOW";

export interface TocMetric {
  id: string;

  territoryId: string;

  territoryName: string;

  tocPercentage: number;

  institutionalScore: number;

  communityScore: number;

  outletOpportunityScore: number;

  score: number;

  category: TocCategory;

  notes: string;
}

export interface TocRanking {
  rank: number;

  territoryId: string;

  territoryName: string;

  score: number;

  category: TocCategory;
}

export interface TocSummary {
  totalTerritory: number;

  averageTocPercentage: number;

  highestOpportunityArea: string;

  lowestOpportunityArea: string;
}