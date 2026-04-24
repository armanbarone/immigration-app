export interface ImmigrationClient {
  // Core identity
  slug: string;
  firmName: string;
  leadAttorney: string;
  leadAttorneyFirst: string;
  leadAttorneyInitial: string;

  // Location
  city: string;
  state: string;
  zip: string;
  address: string;

  // Contact
  phone: string;
  email: string;

  // Content
  yearsExp: number;
  casesWon: number;
  reviewCount: number;
  languages: string;
  foundedYear: number;
  attorneyPersonalStatement: string;

  // Media
  photoAttorney1: string;
  photoClient1: string;
  photoClient2: string;
  photoClient3: string;
  photoClient4: string;

  // SEO / meta
  metaDescription?: string;

  // Theme override (optional)
  accentColor?: string;
}
