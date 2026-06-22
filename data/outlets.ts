import { Outlet, OutletGapAnalysis, OutletSummary } from "../types/outlet";

export const outlets: Outlet[] = [
  {
    id: "OUT-001",
    outletCode: "KD001",
    outletName: "Kediri Retail Cluster",
    territoryId: "KD-KOTA",
    territoryName: "Kediri Kota",
    category: "MODERN",
    status: "RO",
    isActive: true,
    estimatedMonthlySales: 120000000,
    visitFrequency: 8,
    potentialScore: 85,
    notes: "Outlet eksisting dengan performa stabil."
  },
  {
    id: "OUT-002",
    outletCode: "KD002",
    outletName: "Mojoroto Growth Cluster",
    territoryId: "KD-MOJOROTO",
    territoryName: "Mojoroto",
    category: "TRADITIONAL",
    status: "AO",
    isActive: true,
    estimatedMonthlySales: 85000000,
    visitFrequency: 6,
    potentialScore: 82,
    notes: "Potensi aktivasi tinggi."
  },
  {
    id: "OUT-003",
    outletCode: "KD003",
    outletName: "Pare Education Cluster",
    territoryId: "KD-PARE",
    territoryName: "Pare",
    category: "INSTITUTIONAL",
    status: "NOO",
    isActive: false,
    estimatedMonthlySales: 95000000,
    visitFrequency: 4,
    potentialScore: 92,
    notes: "Target outlet baru area pendidikan."
  },
  {
    id: "OUT-004",
    outletCode: "NG001",
    outletName: "Nganjuk City Cluster",
    territoryId: "NG-KOTA",
    territoryName: "Nganjuk Kota",
    category: "MODERN",
    status: "RO",
    isActive: true,
    estimatedMonthlySales: 105000000,
    visitFrequency: 8,
    potentialScore: 84,
    notes: "Coverage utama area kota."
  },
  {
    id: "OUT-005",
    outletCode: "NG002",
    outletName: "Kertosono Logistic Cluster",
    territoryId: "NG-KERTOSONO",
    territoryName: "Kertosono",
    category: "WHOLESALE",
    status: "NOO",
    isActive: false,
    estimatedMonthlySales: 135000000,
    visitFrequency: 4,
    potentialScore: 95,
    notes: "Prioritas NOO tertinggi."
  }
];

export const outletSummary: OutletSummary = {
  totalOutlet: 1250,
  totalRO: 720,
  totalAO: 380,
  totalNOO: 150,
  coveragePercentage: 82
};

export const outletGapAnalysis: OutletGapAnalysis[] = [
  {
    territoryId: "KD-PARE",
    territoryName: "Pare",
    existingOutlet: 120,
    targetOutlet: 180,
    gapOutlet: 60,
    opportunityPercentage: 50
  },
  {
    territoryId: "NG-KERTOSONO",
    territoryName: "Kertosono",
    existingOutlet: 110,
    targetOutlet: 190,
    gapOutlet: 80,
    opportunityPercentage: 73
  },
  {
    territoryId: "KD-MOJOROTO",
    territoryName: "Mojoroto",
    existingOutlet: 140,
    targetOutlet: 190,
    gapOutlet: 50,
    opportunityPercentage: 36
  },
  {
    territoryId: "NG-BAGOR",
    territoryName: "Bagor",
    existingOutlet: 90,
    targetOutlet: 140,
    gapOutlet: 50,
    opportunityPercentage: 55
  }
];