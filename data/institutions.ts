import {
  Institution,
  InstitutionOpportunity,
  InstitutionSummary,
} from "../types/institution";

export const institutions: Institution[] = [
  {
    id: "INS-001",
    institutionName: "Universitas Kediri Cluster",
    territoryId: "KD-KOTA",
    territoryName: "Kediri Kota",
    type: "UNIVERSITY",
    estimatedPopulation: 12000,
    opportunityScore: 90,
    priority: "VERY_HIGH",
    isPartnershipActive: false,
    notes: "Potensi aktivasi mahasiswa dan event kampus."
  },
  {
    id: "INS-002",
    institutionName: "Pesantren Education Cluster",
    territoryId: "KD-PESANTREN",
    territoryName: "Pesantren",
    type: "PESANTREN",
    estimatedPopulation: 15000,
    opportunityScore: 88,
    priority: "HIGH",
    isPartnershipActive: false,
    notes: "Potensi distribusi dan sponsorship."
  },
  {
    id: "INS-003",
    institutionName: "Pare Education Network",
    territoryId: "KD-PARE",
    territoryName: "Pare",
    type: "SCHOOL",
    estimatedPopulation: 18000,
    opportunityScore: 92,
    priority: "VERY_HIGH",
    isPartnershipActive: false,
    notes: "Kampung Inggris dan pusat pendidikan."
  },
  {
    id: "INS-004",
    institutionName: "Nganjuk Government Cluster",
    territoryId: "NG-KOTA",
    territoryName: "Nganjuk Kota",
    type: "GOVERNMENT",
    estimatedPopulation: 5000,
    opportunityScore: 82,
    priority: "HIGH",
    isPartnershipActive: false,
    notes: "Instansi pemerintahan dan ASN."
  },
  {
    id: "INS-005",
    institutionName: "Kertosono Industrial Cluster",
    territoryId: "NG-KERTOSONO",
    territoryName: "Kertosono",
    type: "PRIVATE_COMPANY",
    estimatedPopulation: 7000,
    opportunityScore: 89,
    priority: "VERY_HIGH",
    isPartnershipActive: false,
    notes: "Potensi perusahaan dan distribusi."
  }
];

export const institutionSummary: InstitutionSummary = {
  totalInstitution: 245,
  totalUniversity: 12,
  totalSchool: 140,
  totalPesantren: 48,
  totalGovernment: 25,
  totalBumn: 8,
  totalPrivateCompany: 12
};

export const institutionOpportunities: InstitutionOpportunity[] = [
  {
    territoryId: "KD-PARE",
    territoryName: "Pare",
    institutionCount: 75,
    opportunityScore: 92,
    priority: "VERY_HIGH"
  },
  {
    territoryId: "KD-KOTA",
    territoryName: "Kediri Kota",
    institutionCount: 68,
    opportunityScore: 88,
    priority: "VERY_HIGH"
  },
  {
    territoryId: "NG-KERTOSONO",
    territoryName: "Kertosono",
    institutionCount: 35,
    opportunityScore: 89,
    priority: "VERY_HIGH"
  },
  {
    territoryId: "NG-KOTA",
    territoryName: "Nganjuk Kota",
    institutionCount: 42,
    opportunityScore: 82,
    priority: "HIGH"
  }
];