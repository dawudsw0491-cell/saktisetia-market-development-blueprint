export type InstitutionType =
  | "UNIVERSITY"
  | "SCHOOL"
  | "PESANTREN"
  | "GOVERNMENT"
  | "BUMN"
  | "PRIVATE_COMPANY";

export type InstitutionPriority =
  | "VERY_HIGH"
  | "HIGH"
  | "MEDIUM"
  | "LOW";

export interface Institution {
  id: string;

  institutionName: string;

  territoryId: string;

  territoryName: string;

  type: InstitutionType;

  estimatedPopulation: number;

  opportunityScore: number;

  priority: InstitutionPriority;

  isPartnershipActive: boolean;

  notes: string;
}

export interface InstitutionSummary {
  totalInstitution: number;

  totalUniversity: number;

  totalSchool: number;

  totalPesantren: number;

  totalGovernment: number;

  totalBumn: number;

  totalPrivateCompany: number;
}

export interface InstitutionOpportunity {
  territoryId: string;

  territoryName: string;

  institutionCount: number;

  opportunityScore: number;

  priority: InstitutionPriority;
}