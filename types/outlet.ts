export type OutletStatus =
  | "RO"
  | "AO"
  | "NOO";

export type OutletCategory =
  | "TRADITIONAL"
  | "MODERN"
  | "HORECA"
  | "WHOLESALE"
  | "INSTITUTIONAL";

export interface Outlet {
  id: string;

  outletCode: string;

  outletName: string;

  territoryId: string;

  territoryName: string;

  category: OutletCategory;

  status: OutletStatus;

  isActive: boolean;

  estimatedMonthlySales: number;

  visitFrequency: number;

  potentialScore: number;

  notes: string;
}

export interface OutletSummary {
  totalOutlet: number;

  totalRO: number;

  totalAO: number;

  totalNOO: number;

  coveragePercentage: number;
}

export interface OutletGapAnalysis {
  territoryId: string;

  territoryName: string;

  existingOutlet: number;

  targetOutlet: number;

  gapOutlet: number;

  opportunityPercentage: number;
}