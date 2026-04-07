import Link from "next/link";
import type { Metadata } from "next";
import { letterAnalyses, getLetterAnalysis } from "@/data/name-analysis";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return letterAnalyses.map((l) => ({ letter: l.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ letter: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { letter } = await params;
  const data = getLetterAnalysis(letter);
  if (!data) return {};
  return {
    title: `Names Starting with ${data.letter} — Chaldean Numerology Analysis`,
    description: `Discover what names starting with ${data.letter} mean in Chaldean numerology. Ruled by ${data.rulingPlanet} (Number ${data.chaldeanNumber}). Personality traits, career guidance, relationship tendencies, and famous ${data.letter}-names.`,
    alternates: { canonical: `https://astromedha.in/name-analysis/${letter}` },
    openGraph: {
      title: `Names Starting with ${data.letter} — Chaldean Numerology Meaning`,
      description: data.overview,
      type: "article",
    },
  };
}

export default async function NameAnalysisPage({ params }: Props) {
  const { letter } = await params;
  const data = getLetterAnalysis(letter);
  if (!data) notFound();

  const allLetters = letterAnalyses;
  const sameNumberLetters = allLetters.filter(
    (l) => l.chaldeanNumber === data.chaldeanNumber && l.slug !== data.slug
  );

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-400">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/#numerology" className="hover:text-purple-400">Numerology</Link>
        <span className="mx-2">/</span>
        <span className="text-purple-400">Letter {data.letter}</span>
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
              { "@type": "ListItem", position: 3, name: `Letter ${data.letter}`, item: `https://astromedha.in/name-analysis/${letter}` },
            ],
          }),
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-5 mb-8">
        <div className="w-20 h-20 flex-shrink-0 rounded-full bg-purple-600/20 border-2 border-purple-500/30 flex items-center justify-center">
          <span className="text-4xl font-bold text-purple-400">{data.letter}</span>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
            Names Starting with {data.letter}
          </h1>
          <p className="text-gray-400 mt-1">
            Chaldean Number {data.chaldeanNumber} — Ruled by {data.rulingPlanet} — {data.element} Element
          </p>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {[
          { label: "Chaldean Number", value: String(data.chaldeanNumber) },
          { label: "Ruling Planet", value: data.rulingPlanet },
          { label: "Element", value: data.element },
          { label: "Same Vibration", value: sameNumberLetters.map((l) => l.letter).join(", ") || "None" },
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
          Letter {data.letter} in Chaldean Numerology
        </h2>
        <p className="text-gray-300 leading-relaxed">{data.overview}</p>
      </section>

      {/* Personality Traits */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Personality Traits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.traits.map((trait) => (
            <div key={trait} className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-lg p-3">
              <span className="text-purple-400 mt-0.5">&#x2713;</span>
              <span className="text-gray-300 text-sm">{trait}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Career */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Career & Professional Life</h2>
        <p className="text-gray-300 leading-relaxed">{data.career}</p>
      </section>

      {/* Relationships */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Love & Relationships</h2>
        <p className="text-gray-300 leading-relaxed">{data.relationships}</p>
      </section>

      {/* Numerology Number Link */}
      <section className="mb-10">
        <div className="bg-purple-950/30 border border-purple-800/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-purple-300 mb-3">
            Number {data.chaldeanNumber} — The Deeper Connection
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The letter {data.letter} carries the vibration of Chaldean number {data.chaldeanNumber}, ruled by {data.rulingPlanet}. This connects all {data.letter}-names to the core energy of the {data.element} element. Understanding your number reveals deeper patterns in personality, life path, and destiny.
          </p>
          <Link href={`/numerology/${data.chaldeanNumber}`} className="inline-block mt-3 text-sm text-purple-400 hover:text-purple-300">
            Explore Number {data.chaldeanNumber} in detail &#x2192;
          </Link>
        </div>
      </section>

      {/* Letters with Same Number */}
      {sameNumberLetters.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            Letters with the Same Vibration (Number {data.chaldeanNumber})
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            These letters share the same Chaldean number and carry similar energetic qualities.
          </p>
          <div className="flex flex-wrap gap-3">
            {sameNumberLetters.map((l) => (
              <Link
                key={l.slug}
                href={`/name-analysis/${l.slug}`}
                className="w-14 h-14 flex items-center justify-center bg-gray-900/50 border border-gray-800 rounded-xl text-xl font-bold text-purple-400 hover:border-purple-600/50 transition-all"
              >
                {l.letter}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Famous Names */}
      {data.famousNames.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Famous Personalities with {data.letter}-Names</h2>
          <div className="flex flex-wrap gap-2">
            {data.famousNames.map((name) => (
              <span key={name} className="px-3 py-1.5 bg-gray-900/50 border border-gray-800 rounded-full text-sm text-gray-300">
                {name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Explore All Letters */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Explore All Letters</h2>
        <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-13 gap-2">
          {allLetters.map((l) => (
            <Link
              key={l.slug}
              href={`/name-analysis/${l.slug}`}
              className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${
                l.slug === data.slug
                  ? "bg-purple-600 text-white border border-purple-500"
                  : "bg-gray-900/30 border border-gray-800 text-purple-400 hover:border-purple-600/50"
              }`}
            >
              {l.letter}
            </Link>
          ))}
        </div>
      </section>

      {/* Related Links */}
      <section className="mb-10 flex flex-wrap gap-3">
        <Link href="/free/numerology" className="text-sm text-purple-400 hover:text-purple-300 underline">
          Free Numerology Calculator
        </Link>
        <Link href="/free/compatibility" className="text-sm text-purple-400 hover:text-purple-300 underline">
          Compatibility Checker
        </Link>
        <Link href="/free/personal-year" className="text-sm text-purple-400 hover:text-purple-300 underline">
          Personal Year Calculator
        </Link>
        <Link href={`/numerology/${data.chaldeanNumber}`} className="text-sm text-purple-400 hover:text-purple-300 underline">
          Number {data.chaldeanNumber} Guide
        </Link>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          Get Your Complete Name Analysis
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          Discover how your full name vibration combines with your birth chart. Get personalized
          Chaldean numerology analysis with Vedic astrology and AI-powered daily guidance.
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          Get Full Guidance &#x2192;
        </Link>
      </div>

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `Names Starting with ${data.letter} — Chaldean Numerology Analysis`,
            description: data.overview,
            author: { "@type": "Organization", name: "AstroMedha" },
            publisher: { "@type": "Organization", name: "AstroMedha", url: "https://astromedha.in" },
            mainEntityOfPage: `https://astromedha.in/name-analysis/${letter}`,
          }),
        }}
      />
    </main>
  );
}
