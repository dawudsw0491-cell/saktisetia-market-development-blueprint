import {
  Community,
  CommunityOpportunity,
  CommunitySummary,
} from "../types/community";

export const communities: Community[] = [
  {
    id: "COM-001",
    communityName: "UMKM Kediri Raya",
    territoryId: "KD-KOTA",
    territoryName: "Kediri Kota",
    type: "UMKM",
    memberEstimate: 2500,
    opportunityScore: 88,
    priority: "VERY_HIGH",
    isPartnershipActive: false,
    notes: "Potensi aktivasi produk dan sponsorship."
  },
  {
    id: "COM-002",
    communityName: "Pare Student Community",
    territoryId: "KD-PARE",
    territoryName: "Pare",
    type: "BUSINESS_COMMUNITY",
    memberEstimate: 3200,
    opportunityScore: 92,
    priority: "VERY_HIGH",
    isPartnershipActive: false,
    notes: "Komunitas pelajar dan kursus."
  },
  {
    id: "COM-003",
    communityName: "Mojoroto Entrepreneur Hub",
    territoryId: "KD-MOJOROTO",
    territoryName: "Mojoroto",
    type: "ASSOCIATION",
    memberEstimate: 1200,
    opportunityScore: 82,
    priority: "HIGH",
    isPartnershipActive: false,
    notes: "Komunitas bisnis lokal."
  },
  {
    id: "COM-004",
    communityName: "Nganjuk UMKM Network",
    territoryId: "NG-KOTA",
    territoryName: "Nganjuk Kota",
    type: "UMKM",
    memberEstimate: 1800,
    opportunityScore: 85,
    priority: "HIGH",
    isPartnershipActive: false,
    notes: "Jaringan UMKM kota."
  },
  {
    id: "COM-005",
    communityName: "Kertosono Logistic Community",
    territoryId: "NG-KERTOSONO",
    territoryName: "Kertosono",
    type: "BUSINESS_COMMUNITY",
    memberEstimate: 950,
    opportunityScore: 90,
    priority: "VERY_HIGH",
    isPartnershipActive: false,
    notes: "Komunitas logistik dan distribusi."
  }
];

export const communitySummary: CommunitySummary = {
  totalCommunity: 320,
  totalUmkm: 180,
  totalOrganization: 45,
  totalAssociation: 35,
  totalHobbyCommunity: 40,
  totalBusinessCommunity: 15,
  totalEventPartner: 5
};

export const communityOpportunities: CommunityOpportunity[] = [
  {
    territoryId: "KD-PARE",
    territoryName: "Pare",
    communityCount: 65,
    opportunityScore: 92,
    priority: "VERY_HIGH"
  },
  {
    territoryId: "NG-KERTOSONO",
    territoryName: "Kertosono",
    communityCount: 38,
    opportunityScore: 90,
    priority: "VERY_HIGH"
  },
  {
    territoryId: "KD-KOTA",
    territoryName: "Kediri Kota",
    communityCount: 72,
    opportunityScore: 88,
    priority: "VERY_HIGH"
  },
  {
    territoryId: "NG-KOTA",
    territoryName: "Nganjuk Kota",
    communityCount: 54,
    opportunityScore: 85,
    priority: "HIGH"
  }
];