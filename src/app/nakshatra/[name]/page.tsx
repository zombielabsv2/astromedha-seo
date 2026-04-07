import Link from "next/link";
import type { Metadata } from "next";
import { nakshatras, getNakshatraBySlug } from "@/data/nakshatras";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return nakshatras.map((n) => ({ name: n.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ name: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const data = getNakshatraBySlug(name);
  if (!data) return {};
  return {
    title: `${data.name} Nakshatra — Characteristics, Deity, Compatibility & Remedies`,
    description: `Complete guide to ${data.name} Nakshatra (#${data.number}). Ruling planet ${data.rulingPlanet}, deity ${data.deity}, symbol ${data.symbol}. Personality, career, compatibility, and Vedic remedies.`,
    alternates: { canonical: `https://astromedha.in/nakshatra/${name}` },
    openGraph: {
      title: `${data.name} Nakshatra — Vedic Lunar Mansion Guide`,
      description: data.overview,
      type: "article",
    },
  };
}

export default async function NakshatraPage({ params }: Props) {
  const { name } = await params;
  const data = getNakshatraBySlug(name);
  if (!data) notFound();

  const others = nakshatras.filter((n) => n.slug !== name);
  const sameSign = nakshatras.filter(
    (n) => n.zodiacSign === data.zodiacSign && n.slug !== name
  );

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-400">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/#nakshatras" className="hover:text-purple-400">Nakshatras</Link>
        <span className="mx-2">/</span>
        <span className="text-purple-400">{data.name}</span>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://astromedha.in" },
              { "@type": "ListItem", position: 2, name: "Nakshatras", item: "https://astromedha.in/#nakshatras" },
              { "@type": "ListItem", position: 3, name: data.name, item: `https://astromedha.in/nakshatra/${name}` },
            ],
          }),
        }}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="text-sm text-purple-400 mb-2">Nakshatra #{data.number} of 27</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
          {data.name} Nakshatra
        </h1>
        <p className="text-gray-400">
          {data.degreeRange} • Ruled by {data.rulingPlanet} • Deity: {data.deity}
        </p>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {[
          { label: "Ruling Planet", value: data.rulingPlanet },
          { label: "Deity", value: data.deity },
          { label: "Symbol", value: data.symbol },
          { label: "Nature", value: `${data.nature} (${data.gana})` },
          { label: "Gender", value: data.gender },
          { label: "Element", value: data.element },
          { label: "Animal Symbol", value: data.animalSymbol },
          { label: "Zodiac Sign", value: data.zodiacSign },
        ].map((fact) => (
          <div key={fact.label} className="bg-gray-900/50 border border-gray-800 rounded-lg p-3">
            <div className="text-xs text-gray-500 uppercase tracking-wide">{fact.label}</div>
            <div className="text-sm font-medium text-gray-200 mt-1">{fact.value}</div>
          </div>
        ))}
      </div>

      {/* Qualities */}
      <div className="flex flex-wrap gap-2 mb-10">
        {data.qualities.map((q) => (
          <span key={q} className="px-3 py-1 bg-purple-600/15 border border-purple-500/20 rounded-full text-xs text-purple-300">
            {q}
          </span>
        ))}
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          About {data.name} Nakshatra
        </h2>
        <p className="text-gray-300 leading-relaxed">{data.overview}</p>
      </section>

      {/* Personality */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          {data.name} Nakshatra Personality
        </h2>
        <p className="text-gray-300 leading-relaxed">{data.personality}</p>
      </section>

      {/* Career */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          Career & Professional Inclinations
        </h2>
        <p className="text-gray-300 leading-relaxed">{data.career}</p>
      </section>

      {/* Compatibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          Compatibility & Relationships
        </h2>
        <p className="text-gray-300 leading-relaxed">{data.compatibility}</p>
      </section>

      {/* Remedies */}
      <section className="mb-10">
        <div className="bg-purple-950/30 border border-purple-800/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-purple-300 mb-4">Remedies & Mantras</h2>
          <ul className="space-y-2">
            {data.remedies.map((r) => (
              <li key={r} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">•</span> {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nakshatras in Same Sign */}
      {sameSign.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-100 mb-4">
            Other Nakshatras in {data.zodiacSign}
          </h2>
          <div className="flex flex-wrap gap-3">
            {sameSign.map((n) => (
              <Link
                key={n.slug}
                href={`/nakshatra/${n.slug}`}
                className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-sm text-gray-300 hover:border-purple-600/50 hover:text-purple-300 transition-all"
              >
                {n.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Zodiac Link */}
      <section className="mb-10">
        <Link
          href={`/zodiac/${data.zodiacSign}`}
          className="text-sm text-purple-400 hover:text-purple-300 underline"
        >
          Read full {data.zodiacSign} zodiac sign profile →
        </Link>
      </section>

      {/* All Nakshatras */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-100 mb-4">All 27 Nakshatras</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
          {others.slice(0, 27).map((n) => (
            <Link
              key={n.slug}
              href={`/nakshatra/${n.slug}`}
              className="bg-gray-900/30 border border-gray-800 rounded-lg p-2 text-center hover:border-purple-600/50 transition-all"
            >
              <div className="text-xs font-medium text-gray-400 hover:text-purple-300">{n.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          Discover Your Birth Nakshatra
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          Enter your exact birth details to find your Moon Nakshatra and get daily guidance based
          on your Nakshatra lord, Dasha periods, and current transits.
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          Find My Nakshatra →
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${data.name} Nakshatra — Complete Vedic Guide`,
            description: data.overview,
            author: { "@type": "Organization", name: "AstroMedha" },
            publisher: { "@type": "Organization", name: "AstroMedha", url: "https://astromedha.in" },
            mainEntityOfPage: `https://astromedha.in/nakshatra/${name}`,
          }),
        }}
      />
    </main>
  );
}
