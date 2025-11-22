export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  createdAt: Date; // Firestore Timestamp converted to Date
}

export type LeadStatus = 'Lead' | 'Qualified' | 'Follow-up' | 'Closed';
export type LeadSource = 'WhatsApp' | 'Web';

export interface Contact {
  id: string;
  userId: string; // Owner of the contact
  name: string;
  phone: string;
  email?: string;
  source: LeadSource;
  status: LeadStatus;
  aiScore: number; // 0-100
  notes: string[];
  lastInteraction: Date; // Firestore Timestamp converted to Date
  createdAt: Date;
}
