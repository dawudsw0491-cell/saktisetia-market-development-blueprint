import {
  Event,
  EventPerformance,
  EventSummary,
} from "../types/event";

export const events: Event[] = [
  {
    id: "EVT-001",
    eventName: "Kediri Retail Partner Gathering",
    territoryId: "KD-KOTA",
    territoryName: "Kediri Kota",
    eventType: "B2B",
    status: "PLANNED",
    targetParticipant: 100,
    actualParticipant: 0,
    estimatedLead: 30,
    actualLead: 0,
    estimatedConversion: 10,
    actualConversion: 0,
    eventDate: "2026-08-15",
    notes: "Gathering owner outlet dan distributor."
  },
  {
    id: "EVT-002",
    eventName: "Pare Education Activation",
    territoryId: "KD-PARE",
    territoryName: "Pare",
    eventType: "INSTITUTIONAL",
    status: "PLANNED",
    targetParticipant: 500,
    actualParticipant: 0,
    estimatedLead: 120,
    actualLead: 0,
    estimatedConversion: 35,
    actualConversion: 0,
    eventDate: "2026-09-01",
    notes: "Aktivasi area pendidikan dan kursus."
  },
  {
    id: "EVT-003",
    eventName: "Nganjuk UMKM Festival",
    territoryId: "NG-KOTA",
    territoryName: "Nganjuk Kota",
    eventType: "COMMUNITY",
    status: "PLANNED",
    targetParticipant: 800,
    actualParticipant: 0,
    estimatedLead: 150,
    actualLead: 0,
    estimatedConversion: 40,
    actualConversion: 0,
    eventDate: "2026-09-20",
    notes: "Kolaborasi dengan komunitas UMKM."
  },
  {
    id: "EVT-004",
    eventName: "Kertosono Logistics Expo",
    territoryId: "NG-KERTOSONO",
    territoryName: "Kertosono",
    eventType: "B2B",
    status: "PLANNED",
    targetParticipant: 200,
    actualParticipant: 0,
    estimatedLead: 60,
    actualLead: 0,
    estimatedConversion: 18,
    actualConversion: 0,
    eventDate: "2026-10-10",
    notes: "Kolaborasi dengan pelaku logistik."
  },
  {
    id: "EVT-005",
    eventName: "Brand Activation Car Free Day",
    territoryId: "KD-KOTA",
    territoryName: "Kediri Kota",
    eventType: "BRAND_ACTIVATION",
    status: "PLANNED",
    targetParticipant: 1500,
    actualParticipant: 0,
    estimatedLead: 250,
    actualLead: 0,
    estimatedConversion: 50,
    actualConversion: 0,
    eventDate: "2026-10-25",
    notes: "Peningkatan brand awareness masyarakat."
  }
];

export const eventSummary: EventSummary = {
  totalEvent: 5,
  totalB2B: 2,
  totalB2C: 0,
  totalInstitutional: 1,
  totalCommunity: 1,
  totalBrandActivation: 1
};

export const eventPerformance: EventPerformance[] = [
  {
    eventId: "EVT-001",
    eventName: "Kediri Retail Partner Gathering",
    participantAchievement: 0,
    leadAchievement: 0,
    conversionAchievement: 0
  },
  {
    eventId: "EVT-002",
    eventName: "Pare Education Activation",
    participantAchievement: 0,
    leadAchievement: 0,
    conversionAchievement: 0
  },
  {
    eventId: "EVT-003",
    eventName: "Nganjuk UMKM Festival",
    participantAchievement: 0,
    leadAchievement: 0,
    conversionAchievement: 0
  }
];