import {
  GrowthRoadmap,
  RoadmapMilestone,
  RoadmapSummary,
} from "../types/roadmap";

export const roadmapMilestones: RoadmapMilestone[] = [
  {
    id: "RM-001",
    phase: "DAY_30",
    title: "Territory Assessment & Mapping",
    objective: "Melakukan pemetaan wilayah, outlet, institusi, dan komunitas.",
    deliverables: [
      "Territory Mapping",
      "Outlet Mapping",
      "Institution Mapping",
      "Community Mapping"
    ],
    successIndicator: "100% area prioritas teridentifikasi",
    status: "PLANNED"
  },
  {
    id: "RM-002",
    phase: "DAY_90",
    title: "Activation & Penetration",
    objective: "Mengaktifkan wilayah prioritas dan program NOO.",
    deliverables: [
      "NOO Program",
      "Institution Activation",
      "Community Activation"
    ],
    successIndicator: "80% wilayah prioritas aktif",
    status: "PLANNED"
  },
  {
    id: "RM-003",
    phase: "DAY_180",
    title: "Expansion & Optimization",
    objective: "Meningkatkan coverage dan efektivitas program.",
    deliverables: [
      "Coverage Expansion",
      "Event Program",
      "Brand Activation"
    ],
    successIndicator: "Coverage meningkat minimal 10%",
    status: "PLANNED"
  },
  {
    id: "RM-004",
    phase: "DAY_365",
    title: "Sustainable Growth",
    objective: "Menciptakan pertumbuhan berkelanjutan.",
    deliverables: [
      "Market Expansion",
      "Institution Partnership",
      "Community Ecosystem"
    ],
    successIndicator: "Target KPI tahunan tercapai",
    status: "PLANNED"
  }
];

export const roadmapSummary: RoadmapSummary = {
  totalMilestone: 4,
  plannedMilestone: 4,
  inProgressMilestone: 0,
  completedMilestone: 0
};

export const growthRoadmap: GrowthRoadmap[] = [
  {
    phase: "DAY_30",
    focusArea: "Assessment",
    strategicObjective: "Memahami potensi pasar dan wilayah",
    keyActivities: [
      "LHR Analysis",
      "TOC Analysis",
      "Outlet Mapping"
    ],
    expectedOutcome: "Blueprint wilayah prioritas"
  },
  {
    phase: "DAY_90",
    focusArea: "Activation",
    strategicObjective: "Mengaktifkan peluang pasar",
    keyActivities: [
      "NOO Development",
      "Institution Activation",
      "Community Engagement"
    ],
    expectedOutcome: "Peningkatan coverage"
  },
  {
    phase: "DAY_180",
    focusArea: "Expansion",
    strategicObjective: "Memperluas penetrasi pasar",
    keyActivities: [
      "Event Strategy",
      "Brand Awareness",
      "AO Development"
    ],
    expectedOutcome: "Pertumbuhan outlet dan awareness"
  },
  {
    phase: "DAY_365",
    focusArea: "Growth",
    strategicObjective: "Menciptakan pertumbuhan berkelanjutan",
    keyActivities: [
      "Strategic Partnership",
      "Market Expansion",
      "Performance Optimization"
    ],
    expectedOutcome: "Sustainable Growth"
  }
];