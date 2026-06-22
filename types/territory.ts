export type TerritoryPriority =
  | "VERY_HIGH"
  | "HIGH"
  | "MEDIUM"
  | "LOW";

export type TerritoryCategory =
  | "KOTA"
  | "KABUPATEN";

export interface Territory {
  id: string;

  areaName: string;

  region: string;

  category: TerritoryCategory;

  populationEstimate: number;

  lhrPercentage: number;

  tocPercentage: number;

  institutionScore: number;

  communityScore: number;

  outletGapScore: number;

  territoryScore: number;

  priority: TerritoryPriority;

  notes: string;
}