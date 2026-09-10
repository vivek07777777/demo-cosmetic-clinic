export interface ClinicConfig {
  name: string;
  tagline: string;
  subTagline: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  operatingHours: string;
  consultationFee: string;
  cancellationPolicy: string;
  instagram: string;
  facebook: string;
  linkedin: string;
}

export interface TrustItem {
  id: string;
  title: string;
  subtitle: string;
  metric?: string;
}

export interface TreatmentItem {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  downtime: string;
  startingPrice: string;
  suitableFor: string[];
  howItWorks: string[];
  protocolSteps: { step: string; title: string; desc: string }[];
  recoveryTimeline: { time: string; expectations: string }[];
  faqs: { question: string; answer: string }[];
  image: string;
  secondaryImage?: string;
  beforeAfterCaseId?: string;
  featured?: boolean;
}

export interface ApproachPillar {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface ComparisonCase {
  id: string;
  title: string;
  subtitle?: string;
  treatmentType: string;
  treatmentId?: string;
  area: string;
  timeframe: string;
  sessions: string;
  patientProfile: string;
  beforeImage: string;
  afterImage: string;
  clinicalNotes: string;
  note?: string;
}

export interface Practitioner {
  id: string;
  name: string;
  title: string;
  role?: string;
  placeholderTitle?: string;
  credentialsPlaceholder?: string;
  credentials: string[];
  degrees: string;
  experienceYears: number;
  boardCertifications: string[];
  affiliations: string[];
  bio: string;
  specialties?: string[];
  clinicalFocus: string[];
  image: string;
}

export interface ClinicSafetyStandard {
  id: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  clientType?: string;
  treatment: string;
  rating: number;
  verified: boolean;
  date: string;
  quote: string;
  practitionerSeen?: string;
}

export interface JournalArticle {
  id: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  image: string;
  content: string[];
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredPractitioner: string;
  treatmentInterest: string;
  preferredDate: string;
  preferredTime: string;
  previousAestheticHistory: string;
  notes: string;
}

