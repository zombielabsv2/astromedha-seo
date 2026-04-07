import Link from "next/link";
import type { Metadata } from "next";
import { numerologyNumbers, getNumerologyByNumber } from "@/data/numerology";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return numerologyNumbers.map((n) => ({ number: n.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ number: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { number } = await params;
  const data = getNumerologyByNumber(Number(number));
  if (!data) return {};
  return {
    title: `${data.name} in Chaldean Numerology \u2014 Personality, Career, Love & Compatibility`,
    description: `Complete Chaldean numerology guide for ${data.name}. Ruled by ${data.rulingPlanet}. Personality traits, career paths, love compatibility, health, challenges, and famous personalities.`,
    alternates: { canonical: `https://astromedha.in/numerology/${number}` },
    openGraph: {
      title: `${data.name} \u2014 Chaldean Numerology Guide`,
      description: data.overview,
      type: "article",
    },
  };
}

export default async function NumerologyPage({ params }: Props) {
  const { number } = await params;
  const num = Number(number);
  const data = getNumerologyByNumber(num);
  if (!data) notFound();

  const others = numerologyNumbers.filter((n) => n.number !== num);
  const compatible = numerologyNumbers.filter((n) =>
    data.compatibleNumbers.includes(n.number)
  );

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-400">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/#numerology" className="hover:text-purple-400">Numerology</Link>
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
              { "@type": "ListItem", position: 2, name: "Numerology", item: "https://astromedha.in/#numerology" },
              { "@type": "ListItem", position: 3, name: data.name, item: `https://astromedha.in/numerology/${number}` },
            ],
          }),
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-5 mb-8">
        <div className="w-20 h-20 flex-shrink-0 rounded-full bg-purple-600/20 border-2 border-purple-500/30 flex items-center justify-center">
          <span className="text-4xl font-bold text-purple-400">{data.number}</span>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
            {data.name}
          </h1>
          <p className="text-gray-400 mt-1">
            Ruled by {data.rulingPlanet} ({data.rulingPlanetSanskrit}) \u2022 {data.element} Element
          </p>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {[
          { label: "Ruling Planet", value: data.rulingPlanet },
          { label: "Element", value: data.element },
          { label: "Color", value: data.color },
          { label: "Lucky Day", value: data.day },
          { label: "Gemstone", value: data.gemstone },
          { label: "Tarot Card", value: data.tarotCard },
          { label: "Compatible", value: data.compatibleNumbers.join(", ") },
          { label: "Mantra", value: data.mantra },
        ].map((fact) => (
          <div key={fact.label} className="bg-gray-900/50 border border-gray-800 rounded-lg p-3">
            <div className="text-xs text-gray-500 uppercase tracking-wide">{fact.label}</div>
            <div className="text-sm font-medium text-gray-200 mt-1">{fact.value}</div>
          </div>
        ))}
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap gap-2 mb-10">
        {data.keywords.map((k) => (
          <span key={k} className="px-3 py-1 bg-purple-600/15 border border-purple-500/20 rounded-full text-xs text-purple-300">
            {k}
          </span>
        ))}
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          Number {data.number} in Chaldean Numerology
        </h2>
        <p className="text-gray-300 leading-relaxed">{data.overview}</p>
      </section>

      {/* Personality */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Personality Traits</h2>
        <p className="text-gray-300 leading-relaxed">{data.personality}</p>
      </section>

      {/* Career */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Career & Professional Life</h2>
        <p className="text-gray-300 leading-relaxed">{data.career}</p>
      </section>

      {/* Love */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Love & Relationships</h2>
        <p className="text-gray-300 leading-relaxed">{data.love}</p>
      </section>

      {/* Health */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Health Tendencies</h2>
        <p className="text-gray-300 leading-relaxed">{data.health}</p>
      </section>

      {/* Challenges */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Challenges & Growth Areas</h2>
        <p className="text-gray-300 leading-relaxed">{data.challenges}</p>
      </section>

      {/* Personal Year */}
      <section className="mb-10">
        <div className="bg-purple-950/30 border border-purple-800/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-purple-300 mb-3">
            When {data.number} is Your Personal Year
          </h2>
          <p className="text-gray-300 leading-relaxed">{data.yearMeaning}</p>
          <Link href="/free/personal-year" className="inline-block mt-3 text-sm text-purple-400 hover:text-purple-300">
            Calculate your Personal Year \u2192
          </Link>
        </div>
      </section>

      {/* Compatible Numbers */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Most Compatible Numbers</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {compatible.map((c) => (
            <Link
              key={c.number}
              href={`/numerology/${c.number}`}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-purple-600/50 transition-all group"
            >
              <div className="text-2xl font-bold text-purple-400">{c.number}</div>
              <div className="text-xs text-gray-500 group-hover:text-purple-300">{c.rulingPlanet}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Famous Personalities */}
      {data.famousPersonalities.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Famous Number {data.number} Personalities</h2>
          <div className="flex flex-wrap gap-2">
            {data.famousPersonalities.map((p) => (
              <span key={p} className="px-3 py-1.5 bg-gray-900/50 border border-gray-800 rounded-full text-sm text-gray-300">
                {p}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Explore All Numbers */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Explore All Numbers</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
          {others.map((n) => (
            <Link
              key={n.number}
              href={`/numerology/${n.number}`}
              className="bg-gray-900/30 border border-gray-800 rounded-lg p-3 text-center hover:border-purple-600/50 transition-all"
            >
              <div className="text-lg font-bold text-purple-400">{n.number}</div>
              <div className="text-xs text-gray-500">{n.rulingPlanet}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Links */}
      <section className="mb-10 flex flex-wrap gap-3">
        <Link href="/free/numerology" className="text-sm text-purple-400 hover:text-purple-300 underline">
          Free Numerology Calculator
        </Link>
        <Link href="/free/personal-year" className="text-sm text-purple-400 hover:text-purple-300 underline">
          Personal Year Calculator
        </Link>
        <Link href="/free/compatibility" className="text-sm text-purple-400 hover:text-purple-300 underline">
          Compatibility Checker
        </Link>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          Unlock Your Full Numerology Profile
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          Get your complete profile combining Chaldean numerology with Vedic astrology and
          Vimshottari Dasha for AI-powered daily guidance.
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          Get Full Guidance \u2192
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${data.name} \u2014 Complete Chaldean Numerology Guide`,
            description: data.overview,
            author: { "@type": "Organization", name: "AstroMedha" },
            publisher: { "@type": "Organization", name: "AstroMedha", url: "https://astromedha.in" },
            mainEntityOfPage: `https://astromedha.in/numerology/${number}`,
          }),
        }}
      />
    </main>
  );
}
