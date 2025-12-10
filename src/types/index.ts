// Profile Types
export type ProfileType = "USER" | "ORGANIZER" | "COMPANY";

export type OrganizationType = "COMPANY" | "ORGANIZER";

export type ExperienceType = "EVENT" | "EMPLOYMENT";

export type VerificationStatus = "PENDING" | "VERIFIED" | "REJECTED";

// Profile Interface
export interface Profile {
  id: string;
  userId: string;
  fullName: string;
  headline?: string;
  bio?: string;
  skills: string[];
  consentTalentPool: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Organization Interface
export interface Organization {
  id: string;
  userId: string;
  name: string;
  type: OrganizationType;
  ssmNumber?: string;
  industry?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Event Interface
export interface Event {
  id: string;
  organizationId: string;
  title: string;
  description?: string;
  location?: string;
  startsAt: Date;
  endsAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Job Interface
export interface Job {
  id: string;
  organizationId: string;
  title: string;
  description?: string;
  skills: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Check-in Interface
export interface CheckIn {
  id: string;
  userId: string;
  experienceType: ExperienceType;
  experienceId?: string;
  organizationId?: string;
  title?: string;
  startDate?: Date;
  endDate?: Date;
  note?: string;
  verificationStatus: VerificationStatus;
  verifiedAt?: Date;
  verifiedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Timeline Entry (could be a CheckIn or Experience)
export interface TimelineEntry extends CheckIn {
  event?: Event;
  organization?: Organization;
}

// Job Match
export interface JobMatch {
  job: Job;
  overlap: number; // Percentage or count of matching skills
}

// Event Match
export interface EventMatch {
  event: Event;
  overlap?: number;
}

// Candidate Match
export interface CandidateMatch {
  userId: string;
  userName: string;
  skills: string[];
  overlap: number;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface AuthResult {
  success: boolean;
  error?: string;
}
