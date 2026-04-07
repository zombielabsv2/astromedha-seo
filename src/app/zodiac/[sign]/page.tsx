import Link from "next/link";
import type { Metadata } from "next";
import { zodiacSigns, getZodiacBySlug } from "@/data/zodiac";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return zodiacSigns.map((sign) => ({ sign: sign.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ sign: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sign } = await params;
  const data = getZodiacBySlug(sign);
  if (!data) return {};
  return {
    title: `${data.name} — Vedic Astrology Profile, Traits & Compatibility`,
    description: `Complete Vedic astrology profile for ${data.name}. Personality traits, career guidance, love compatibility, health, ruling planet ${data.rulingPlanet}, element ${data.element}, and remedies.`,
    alternates: { canonical: `https://astromedha.in/zodiac/${sign}` },
    openGraph: {
      title: `${data.name} — Vedic Zodiac Sign Profile`,
      description: data.overview,
      type: "article",
    },
  };
}

export default async function ZodiacPage({ params }: Props) {
  const { sign } = await params;
  const data = getZodiacBySlug(sign);
  if (!data) notFound();

  const otherSigns = zodiacSigns.filter((s) => s.slug !== sign);
  const compatibleData = zodiacSigns.filter((s) =>
    data.compatibleSigns.includes(s.slug)
  );

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-400">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/#zodiac" className="hover:text-purple-400">Zodiac Signs</Link>
        <span className="mx-2">/</span>
        <span className="text-purple-400">{data.name}</span>
      </nav>

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://astromedha.in" },
              { "@type": "ListItem", position: 2, name: "Zodiac Signs", item: "https://astromedha.in/#zodiac" },
              { "@type": "ListItem", position: 3, name: data.name, item: `https://astromedha.in/zodiac/${sign}` },
            ],
          }),
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="text-5xl">{data.symbol}</div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
            {data.name}
          </h1>
          <p className="text-gray-400 mt-1">
            {data.element} Sign • {data.quality} • Ruled by {data.rulingPlanet} ({data.rulingPlanetSanskrit})
          </p>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {[
          { label: "Element", value: data.element },
          { label: "Quality", value: data.quality },
          { label: "Ruling Planet", value: data.rulingPlanet },
          { label: "Date Range", value: data.dateRange },
          { label: "Lucky Colors", value: data.luckyColors.join(", ") },
          { label: "Lucky Numbers", value: data.luckyNumbers.join(", ") },
          { label: "Lucky Day", value: data.luckyDay },
          { label: "Body Part", value: data.bodyPart },
        ].map((fact) => (
          <div key={fact.label} className="bg-gray-900/50 border border-gray-800 rounded-lg p-3">
            <div className="text-xs text-gray-500 uppercase tracking-wide">{fact.label}</div>
            <div className="text-sm font-medium text-gray-200 mt-1">{fact.value}</div>
          </div>
        ))}
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          {data.englishName} ({data.sanskritName}) in Vedic Astrology
        </h2>
        <p className="text-gray-300 leading-relaxed">{data.overview}</p>
      </section>

      {/* Personality */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          {data.englishName} Personality Traits
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">{data.personality}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-green-400 mb-2">Strengths</h3>
            <ul className="space-y-1">
              {data.strengths.map((s) => (
                <li key={s} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="text-green-400 text-xs">✓</span> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-orange-400 mb-2">Growth Areas</h3>
            <ul className="space-y-1">
              {data.weaknesses.map((w) => (
                <li key={w} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="text-orange-400 text-xs">○</span> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          {data.englishName} Career & Professional Life
        </h2>
        <p className="text-gray-300 leading-relaxed">{data.career}</p>
      </section>

      {/* Love */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          {data.englishName} Love & Relationships
        </h2>
        <p className="text-gray-300 leading-relaxed">{data.love}</p>
      </section>

      {/* Health */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          {data.englishName} Health Tendencies
        </h2>
        <p className="text-gray-300 leading-relaxed">{data.health}</p>
      </section>

      {/* Deity & Mantra */}
      <section className="mb-10">
        <div className="bg-purple-950/30 border border-purple-800/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-purple-300 mb-3">Spiritual Guidance</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Presiding Deity</div>
              <div className="text-gray-200 font-medium mt-1">{data.deity}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Recommended Mantra</div>
              <div className="text-gray-200 font-medium mt-1">{data.mantra}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Signs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          Most Compatible Signs
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {compatibleData.map((cs) => (
            <Link
              key={cs.slug}
              href={`/zodiac/${cs.slug}`}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-purple-600/50 transition-all group"
            >
              <div className="text-2xl mb-1">{cs.symbol}</div>
              <div className="text-sm font-medium text-gray-200 group-hover:text-purple-300">{cs.name}</div>
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-3">
          <Link href="/free/compatibility" className="text-purple-400 hover:text-purple-300">
            Try our free compatibility checker →
          </Link>
        </p>
      </section>

      {/* Famous Personalities */}
      {data.famousPersonalities.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            Famous {data.englishName} Personalities
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.famousPersonalities.map((p) => (
              <span key={p} className="px-3 py-1.5 bg-gray-900/50 border border-gray-800 rounded-full text-sm text-gray-300">
                {p}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Explore Other Signs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          Explore Other Zodiac Signs
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {otherSigns.map((s) => (
            <Link
              key={s.slug}
              href={`/zodiac/${s.slug}`}
              className="bg-gray-900/30 border border-gray-800 rounded-lg p-3 text-center hover:border-purple-600/50 transition-all group"
            >
              <div className="text-xl mb-1">{s.symbol}</div>
              <div className="text-xs text-gray-400 group-hover:text-purple-300">{s.englishName}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Links */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-100 mb-4">Related Readings</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/free/numerology" className="text-sm text-purple-400 hover:text-purple-300 underline">
            Free Numerology Calculator
          </Link>
          <Link href="/free/compatibility" className="text-sm text-purple-400 hover:text-purple-300 underline">
            Compatibility Checker
          </Link>
          <Link href={`/dasha/${data.rulingPlanetSanskrit.toLowerCase().split("/")[0]}`} className="text-sm text-purple-400 hover:text-purple-300 underline">
            {data.rulingPlanet} Mahadasha
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          Get Your Personalized {data.englishName} Guidance
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          Your Sun sign is just the beginning. Enter your exact birth details for daily
          guidance based on your complete Vedic chart, Dasha periods, and numerology profile.
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          Get Full Guidance →
        </Link>
      </div>

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${data.name} — Complete Vedic Astrology Profile`,
            description: data.overview,
            author: { "@type": "Organization", name: "AstroMedha" },
            publisher: { "@type": "Organization", name: "AstroMedha", url: "https://astromedha.in" },
            mainEntityOfPage: `https://astromedha.in/zodiac/${sign}`,
          }),
        }}
      />
    </main>
  );
}
