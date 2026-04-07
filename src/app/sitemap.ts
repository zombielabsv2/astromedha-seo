import type { MetadataRoute } from "next";

const BASE_URL = "https://astromedha.in";

const zodiacSlugs = [
  "mesha", "vrishabha", "mithuna", "karka", "simha", "kanya",
  "tula", "vrishchika", "dhanu", "makara", "kumbha", "meena",
];

const nakshatraSlugs = [
  "ashwini", "bharani", "krittika", "rohini", "mrigashira", "ardra",
  "punarvasu", "pushya", "ashlesha", "magha", "purva-phalguni", "uttara-phalguni",
  "hasta", "chitra", "swati", "vishakha", "anuradha", "jyeshtha",
  "moola", "purva-ashadha", "uttara-ashadha", "shravana", "dhanishta",
  "shatabhisha", "purva-bhadrapada", "uttara-bhadrapada", "revati",
];

const dashaSlugs = [
  "ketu", "venus", "sun", "moon", "mars", "rahu", "jupiter", "saturn", "mercury",
];

const numerologySlugs = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/free/numerology`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/free/compatibility`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/free/personal-year`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const zodiacPages: MetadataRoute.Sitemap = zodiacSlugs.map((slug) => ({
    url: `${BASE_URL}/zodiac/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const nakshatraPages: MetadataRoute.Sitemap = nakshatraSlugs.map((slug) => ({
    url: `${BASE_URL}/nakshatra/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const dashaPages: MetadataRoute.Sitemap = dashaSlugs.map((slug) => ({
    url: `${BASE_URL}/dasha/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const numerologyPages: MetadataRoute.Sitemap = numerologySlugs.map((slug) => ({
    url: `${BASE_URL}/numerology/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...zodiacPages,
    ...nakshatraPages,
    ...dashaPages,
    ...numerologyPages,
  ];
}
