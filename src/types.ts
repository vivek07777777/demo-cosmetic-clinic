export interface ClinicConfig {
  name: string;
  tagline: string;
  subTagline: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  operatingHours: string;
  instagram: string;
  facebook: string;
  linkedin: string;
}

export interface TrustItem {
  id: string;
  title: string;
  subtitle: string;
}

export interface TreatmentItem {
  id: string;
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  downtime: string;
  suitableFor: string[];
  image: string;
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
  subtitle: string;
  area: string;
  timeframe: string;
  beforeImage: string;
  afterImage: string;
  note: string;
}

export interface Practitioner {
  id: string;
  role: string;
  placeholderTitle: string;
  credentialsPlaceholder: string;
  bio: string;
  specialties: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  clientType: string;
  quote: string;
  treatment: string;
  rating: number;
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
  treatmentInterest: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
