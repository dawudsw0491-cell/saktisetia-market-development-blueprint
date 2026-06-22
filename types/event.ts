export type EventType =
  | "B2B"
  | "B2C"
  | "INSTITUTIONAL"
  | "COMMUNITY"
  | "BRAND_ACTIVATION";

export type EventStatus =
  | "PLANNED"
  | "ONGOING"
  | "COMPLETED"
  | "CANCELLED";

export interface Event {
  id: string;

  eventName: string;

  territoryId: string;

  territoryName: string;

  eventType: EventType;

  status: EventStatus;

  targetParticipant: number;

  actualParticipant: number;

  estimatedLead: number;

  actualLead: number;

  estimatedConversion: number;

  actualConversion: number;

  eventDate: string;

  notes: string;
}

export interface EventSummary {
  totalEvent: number;

  totalB2B: number;

  totalB2C: number;

  totalInstitutional: number;

  totalCommunity: number;

  totalBrandActivation: number;
}

export interface EventPerformance {
  eventId: string;

  eventName: string;

  participantAchievement: number;

  leadAchievement: number;

  conversionAchievement: number;
}