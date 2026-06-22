export type RoadmapPhase =
  | "DAY_30"
  | "DAY_90"
  | "DAY_180"
  | "DAY_365";

export type RoadmapStatus =
  | "PLANNED"
  | "IN_PROGRESS"
  | "COMPLETED";

export interface RoadmapMilestone {
  id: string;

  phase: RoadmapPhase;

  title: string;

  objective: string;

  deliverables: string[];

  successIndicator: string;

  status: RoadmapStatus;
}

export interface RoadmapSummary {
  totalMilestone: number;

  plannedMilestone: number;

  inProgressMilestone: number;

  completedMilestone: number;
}

export interface GrowthRoadmap {
  phase: RoadmapPhase;

  focusArea: string;

  strategicObjective: string;

  keyActivities: string[];

  expectedOutcome: string;
}