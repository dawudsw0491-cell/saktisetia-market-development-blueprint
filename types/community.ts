export type CommunityType =
  | "UMKM"
  | "ORGANIZATION"
  | "ASSOCIATION"
  | "HOBBY_COMMUNITY"
  | "BUSINESS_COMMUNITY"
  | "EVENT_PARTNER";

export type CommunityPriority =
  | "VERY_HIGH"
  | "HIGH"
  | "MEDIUM"
  | "LOW";

export interface Community {
  id: string;

  communityName: string;

  territoryId: string;

  territoryName: string;

  type: CommunityType;

  memberEstimate: number;

  opportunityScore: number;

  priority: CommunityPriority;

  isPartnershipActive: boolean;

  notes: string;
}

export interface CommunitySummary {
  totalCommunity: number;

  totalUmkm: number;

  totalOrganization: number;

  totalAssociation: number;

  totalHobbyCommunity: number;

  totalBusinessCommunity: number;

  totalEventPartner: number;
}

export interface CommunityOpportunity {
  territoryId: string;

  territoryName: string;

  communityCount: number;

  opportunityScore: number;

  priority: CommunityPriority;
}