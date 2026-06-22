import { LhrMetric } from "../types/lhr";

export const lhrMetrics: LhrMetric[] = [
  {
    id: "LHR-001",
    territoryId: "KD-KOTA",
    territoryName: "Kediri Kota",
    lhrPercentage: 90,
    averageDailyTraffic: 18000,
    peakTrafficEstimate: 24000,
    score: 90,
    category: "VERY_HIGH",
    notes: "Pusat aktivitas perdagangan."
  },
  {
    id: "LHR-002",
    territoryId: "KD-MOJOROTO",
    territoryName: "Mojoroto",
    lhrPercentage: 80,
    averageDailyTraffic: 15000,
    peakTrafficEstimate: 20000,
    score: 80,
    category: "HIGH",
    notes: "Pertumbuhan kawasan perumahan."
  },
  {
    id: "LHR-003",
    territoryId: "KD-PESANTREN",
    territoryName: "Pesantren",
    lhrPercentage: 75,
    averageDailyTraffic: 14000,
    peakTrafficEstimate: 18000,
    score: 75,
    category: "HIGH",
    notes: "Aktivitas pendidikan dan perdagangan lokal."
  },
  {
    id: "LHR-004",
    territoryId: "KD-PARE",
    territoryName: "Pare",
    lhrPercentage: 88,
    averageDailyTraffic: 17000,
    peakTrafficEstimate: 22000,
    score: 88,
    category: "VERY_HIGH",
    notes: "Mobilitas pelajar dan UMKM."
  },
  {
    id: "LHR-005",
    territoryId: "KD-NGASEM",
    territoryName: "Ngasem",
    lhrPercentage: 75,
    averageDailyTraffic: 13500,
    peakTrafficEstimate: 17500,
    score: 75,
    category: "HIGH",
    notes: "Koridor perdagangan."
  },
  {
    id: "LHR-006",
    territoryId: "KD-GAMPENGREJO",
    territoryName: "Gampengrejo",
    lhrPercentage: 70,
    averageDailyTraffic: 12500,
    peakTrafficEstimate: 16500,
    score: 70,
    category: "MEDIUM",
    notes: "Jalur distribusi lokal."
  },
  {
    id: "LHR-007",
    territoryId: "NG-KOTA",
    territoryName: "Nganjuk Kota",
    lhrPercentage: 85,
    averageDailyTraffic: 16500,
    peakTrafficEstimate: 21500,
    score: 85,
    category: "HIGH",
    notes: "Pusat pemerintahan dan ekonomi."
  },
  {
    id: "LHR-008",
    territoryId: "NG-BAGOR",
    territoryName: "Bagor",
    lhrPercentage: 72,
    averageDailyTraffic: 13000,
    peakTrafficEstimate: 17000,
    score: 72,
    category: "MEDIUM",
    notes: "Koridor transportasi."
  },
  {
    id: "LHR-009",
    territoryId: "NG-KERTOSONO",
    territoryName: "Kertosono",
    lhrPercentage: 95,
    averageDailyTraffic: 20000,
    peakTrafficEstimate: 26000,
    score: 95,
    category: "VERY_HIGH",
    notes: "Simpul logistik utama."
  },
  {
    id: "LHR-010",
    territoryId: "NG-TANJUNGANOM",
    territoryName: "Tanjunganom",
    lhrPercentage: 68,
    averageDailyTraffic: 12000,
    peakTrafficEstimate: 16000,
    score: 68,
    category: "MEDIUM",
    notes: "Aktivitas UMKM lokal."
  }
];

export const lhrSummary = {
  totalTerritory: 10,
  averageLhrPercentage: 79.8,
  highestLhrArea: "Kertosono",
  lowestLhrArea: "Tanjunganom"
};