import { ImmigrationClient } from "@/types/client";

export const clients: Record<string, ImmigrationClient> = {
  "reyes-law-dallas": {
    slug: "reyes-law-dallas",
    firmName: "Reyes Immigration Law",
    leadAttorney: "Elena Reyes",
    leadAttorneyFirst: "Elena",
    leadAttorneyInitial: "E",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    address: "2100 Ross Avenue, Suite 1850",
    phone: "(214) 555-0192",
    email: "elena@reyeslawdallas.com",
    yearsExp: 14,
    casesWon: 2400,
    reviewCount: 312,
    languages: "English & Spanish",
    foundedYear: 2011,
    attorneyPersonalStatement:
      "I built this firm because I watched my own family navigate immigration courts without proper representation. That experience drives everything I do.",
    photoAttorney1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    photoClient1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    photoClient2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    photoClient3: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    photoClient4: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    metaDescription:
      "Elena Reyes — immigration attorney in Dallas, TX. Family visas, green cards, deportation defense. Free consultation: (214) 555-0192.",
  },
  "chen-immigration-nyc": {
    slug: "chen-immigration-nyc",
    firmName: "Chen Immigration Group",
    leadAttorney: "David Chen",
    leadAttorneyFirst: "David",
    leadAttorneyInitial: "D",
    city: "New York",
    state: "NY",
    zip: "10007",
    address: "40 Wall Street, 28th Floor",
    phone: "(212) 555-0841",
    email: "david@chenimmigrationnyc.com",
    yearsExp: 19,
    casesWon: 4100,
    reviewCount: 567,
    languages: "English, Mandarin & Cantonese",
    foundedYear: 2006,
    attorneyPersonalStatement:
      "Immigration law is not just paperwork — it is the story of people pursuing the life they were promised. I am here to make sure that promise is kept.",
    photoAttorney1: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    photoClient1: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    photoClient2: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    photoClient3: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
    photoClient4: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    metaDescription:
      "David Chen — immigration attorney in New York, NY. Family visas, green cards, deportation defense. Free consultation: (212) 555-0841.",
  },
  "garcia-law-miami": {
    slug: "garcia-law-miami",
    firmName: "García Law Firm",
    leadAttorney: "Carlos García",
    leadAttorneyFirst: "Carlos",
    leadAttorneyInitial: "C",
    city: "Miami",
    state: "FL",
    zip: "33131",
    address: "1221 Brickell Avenue, Suite 900",
    phone: "(305) 555-0374",
    email: "carlos@garcialawmiami.com",
    yearsExp: 11,
    casesWon: 1800,
    reviewCount: 241,
    languages: "English, Spanish & Portuguese",
    foundedYear: 2014,
    attorneyPersonalStatement:
      "Miami is a city built by immigrants. I am proud to serve this community every single day, one case at a time.",
    photoAttorney1: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    photoClient1: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80",
    photoClient2: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=200&q=80",
    photoClient3: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&q=80",
    photoClient4: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80",
    metaDescription:
      "Carlos García — immigration attorney in Miami, FL. Family visas, green cards, deportation defense. Free consultation: (305) 555-0374.",
  },
};

export function getClient(slug: string): ImmigrationClient | null {
  return clients[slug] ?? null;
}

export function getAllSlugs(): string[] {
  return Object.keys(clients);
}
