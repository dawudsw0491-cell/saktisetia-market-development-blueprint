import { TocMetric, TocSummary } from "../types/toc";

export const tocMetrics: TocMetric[] = [
  {
    id: "TOC-001",
    territoryId: "KD-KOTA",
    territoryName: "Kediri Kota",
    tocPercentage: 88,
    institutionalScore: 85,
    communityScore: 80,
    outletOpportunityScore: 65,
    score: 84,
    category: "VERY_HIGH",
    notes: "Pusat aktivitas ekonomi dan retail."
  },
  {
    id: "TOC-002",
    territoryId: "KD-MOJOROTO",
    territoryName: "Mojoroto",
    tocPercentage: 82,
    institutionalScore: 75,
    communityScore: 78,
    outletOpportunityScore: 70,
    score: 79,
    category: "HIGH",
    notes: "Pertumbuhan perumahan dan UMKM."
  },
  {
    id: "TOC-003",
    territoryId: "KD-PESANTREN",
    territoryName: "Pesantren",
    tocPercentage: 78,
    institutionalScore: 82,
    communityScore: 72,
    outletOpportunityScore: 60,
    score: 76,
    category: "HIGH",
    notes: "Konsentrasi pendidikan dan pesantren."
  },
  {
    id: "TOC-004",
    territoryId: "KD-PARE",
    territoryName: "Pare",
    tocPercentage: 90,
    institutionalScore: 90,
    communityScore: 85,
    outletOpportunityScore: 75,
    score: 88,
    category: "VERY_HIGH",
    notes: "Kampung Inggris dan pusat pendidikan."
  },
  {
    id: "TOC-005",
    territoryId: "KD-NGASEM",
    territoryName: "Ngasem",
    tocPercentage: 74,
    institutionalScore: 68,
    communityScore: 70,
    outletOpportunityScore: 72,
    score: 73,
    category: "HIGH",
    notes: "Koridor perdagangan."
  },
  {
    id: "TOC-006",
    territoryId: "KD-GAMPENGREJO",
    territoryName: "Gampengrejo",
    tocPercentage: 72,
    institutionalScore: 65,
    communityScore: 68,
    outletOpportunityScore: 70,
    score: 70,
    category: "MEDIUM",
    notes: "Distribusi dan perdagangan lokal."
  },
  {
    id: "TOC-007",
    territoryId: "NG-KOTA",
    territoryName: "Nganjuk Kota",
    tocPercentage: 84,
    institutionalScore: 82,
    communityScore: 80,
    outletOpportunityScore: 68,
    score: 82,
    category: "HIGH",
    notes: "Pusat pemerintahan dan ekonomi."
  },
  {
    id: "TOC-008",
    territoryId: "NG-BAGOR",
    territoryName: "Bagor",
    tocPercentage: 75,
    institutionalScore: 65,
    communityScore: 72,
    outletOpportunityScore: 74,
    score: 72,
    category: "MEDIUM",
    notes: "Koridor transportasi."
  },
  {
    id: "TOC-009",
    territoryId: "NG-KERTOSONO",
    territoryName: "Kertosono",
    tocPercentage: 92,
    institutionalScore: 88,
    communityScore: 86,
    outletOpportunityScore: 80,
    score: 91,
    category: "VERY_HIGH",
    notes: "Simpul logistik dan transportasi."
  },
  {
    id: "TOC-010",
    territoryId: "NG-TANJUNGANOM",
    territoryName: "Tanjunganom",
    tocPercentage: 70,
    institutionalScore: 62,
    communityScore: 70,
    outletOpportunityScore: 72,
    score: 69,
    category: "MEDIUM",
    notes: "Pertumbuhan UMKM lokal."
  }
];

export const tocSummary: TocSummary = {
  totalTerritory: 10,
  averageTocPercentage: 80.5,
  highestOpportunityArea: "Kertosono",
  lowestOpportunityArea: "Tanjunganom"
};