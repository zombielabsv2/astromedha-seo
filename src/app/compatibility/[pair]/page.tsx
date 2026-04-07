import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  allCompatibilityPairs,
  getCompatibilityBySlug,
  getOtherPairsForSign,
} from "@/data/compatibility";

export function generateStaticParams() {
  return allCompatibilityPairs.map((pair) => ({ pair: pair.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ pair: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pair } = await params;
  const data = getCompatibilityBySlug(pair);
  if (!data) return {};
  return {
    title: `${data.sign1.name} & ${data.sign2.name} Compatibility — Vedic Astrology`,
    description: `${data.sign1.sanskritName} and ${data.sign2.sanskritName} compatibility analysis: ${data.scores.overall}% match. Element harmony, planetary lordship, house aspects, strengths, challenges, and relationship advice based on Vedic astrology.`,
    alternates: { canonical: `https://astromedha.in/compatibility/${pair}` },
    openGraph: {
      title: `${data.sign1.name} & ${data.sign2.name} Compatibility`,
      description: data.overview.slice(0, 200),
      type: "article",
    },
  };
}

export default async function CompatibilityPairPage({ params }: Props) {
  const { pair } = await params;
  const data = getCompatibilityBySlug(pair);
  if (!data) notFound();

  const { sign1, sign2, scores, verdict, verdictColor, overview, strengths, challenges, advice } = data;
  const isSame = sign1.slug === sign2.slug;
  const pairTitle = isSame
    ? `${sign1.name} with ${sign2.name}`
    : `${sign1.name} & ${sign2.name}`;

  const sign1OtherPairs = getOtherPairsForSign(sign1.slug, pair).slice(0, 6);
  const sign2OtherPairs = isSame ? [] : getOtherPairsForSign(sign2.slug, pair).slice(0, 6);

  // Pick a small selection of other pairs for "Explore More"
  const explorePairs = allCompatibilityPairs
    .filter((p) => p.slug !== pair)
    .sort((a, b) => b.scores.overall - a.scores.overall)
    .slice(0, 12);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-400">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/free/compatibility" className="hover:text-purple-400">Compatibility</Link>
        <span className="mx-2">/</span>
        <span className="text-purple-400">{sign1.sanskritName} & {sign2.sanskritName}</span>
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
              { "@type": "ListItem", position: 2, name: "Compatibility", item: "https://astromedha.in/free/compatibility" },
              { "@type": "ListItem", position: 3, name: `${sign1.sanskritName} & ${sign2.sanskritName}`, item: `https://astromedha.in/compatibility/${pair}` },
            ],
          }),
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="text-4xl flex gap-2">
          <span>{sign1.symbol}</span>
          {!isSame && <span>{sign2.symbol}</span>}
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
            {pairTitle} Compatibility
          </h1>
          <p className="text-gray-400 mt-1">
            {sign1.element} ({sign1.rulingPlanet}) {isSame ? "with itself" : `+ ${sign2.element} (${sign2.rulingPlanet})`} — Vedic Astrology Analysis
          </p>
        </div>
      </div>

      {/* Overall Score */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center mb-10">
        <div className="text-6xl font-bold text-purple-400 mb-2">{scores.overall}%</div>
        <div className={`text-xl font-semibold ${verdictColor} mb-3`}>{verdict}</div>
        <p className="text-gray-500 text-sm">
          Based on elemental harmony, planetary lordship friendship, house distance, and quality matching
        </p>
      </div>

      {/* Score Breakdown */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Compatibility Breakdown</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <ScoreCard
            title="Elemental Harmony"
            score={scores.element}
            max={10}
            detail={isSame ? `${sign1.element} + ${sign1.element}` : `${sign1.element} + ${sign2.element}`}
            description={getElementDescription(sign1.element, sign2.element)}
          />
          <ScoreCard
            title="Planetary Lordship"
            score={scores.lordship}
            max={10}
            detail={isSame ? `${sign1.rulingPlanet} with itself` : `${sign1.rulingPlanet} + ${sign2.rulingPlanet}`}
            description={getLordshipDescription(sign1.rulingPlanet, sign2.rulingPlanet, scores.lordship)}
          />
          <ScoreCard
            title="House Aspect"
            score={scores.aspect}
            max={10}
            detail={isSame ? "Same sign (0 houses)" : `${getHouseDistance(sign1.slug, sign2.slug)} houses apart`}
            description={getAspectDescription(scores.aspect)}
          />
          <ScoreCard
            title="Quality Match"
            score={scores.quality}
            max={10}
            detail={isSame ? `${sign1.quality} + ${sign1.quality}` : `${sign1.quality} + ${sign2.quality}`}
            description={getQualityDescription(sign1.quality, sign2.quality)}
          />
        </div>
      </section>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          {sign1.englishName} and {sign2.englishName} — Relationship Overview
        </h2>
        <p className="text-gray-300 leading-relaxed">{overview}</p>
      </section>

      {/* Strengths */}
      <section className="mb-10">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-green-400 mb-4">Relationship Strengths</h2>
          <ul className="space-y-3">
            {strengths.map((s, i) => (
              <li key={i} className="text-gray-300 flex items-start gap-3">
                <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Challenges */}
      <section className="mb-10">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-orange-400 mb-4">Key Challenges</h2>
          <ul className="space-y-3">
            {challenges.map((c, i) => (
              <li key={i} className="text-gray-300 flex items-start gap-3">
                <span className="text-orange-400 mt-0.5 flex-shrink-0">○</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to Make It Work */}
      <section className="mb-10">
        <div className="bg-purple-950/30 border border-purple-800/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-purple-300 mb-4">How to Make This Relationship Work</h2>
          <ul className="space-y-3">
            {advice.map((a, i) => (
              <li key={i} className="text-gray-300 flex items-start gap-3">
                <span className="text-purple-400 mt-0.5 flex-shrink-0">→</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sign Profile Links */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Explore Each Sign</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href={`/zodiac/${sign1.slug}`}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-purple-600/50 transition-all group"
          >
            <div className="text-2xl mb-2">{sign1.symbol}</div>
            <div className="text-lg font-semibold text-gray-200 group-hover:text-purple-300 mb-1">
              {sign1.name}
            </div>
            <p className="text-sm text-gray-500">
              {sign1.element} sign ruled by {sign1.rulingPlanet} ({sign1.rulingPlanetSanskrit})
            </p>
            <span className="text-sm text-purple-400 mt-2 inline-block">Read full profile →</span>
          </Link>
          {!isSame && (
            <Link
              href={`/zodiac/${sign2.slug}`}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-purple-600/50 transition-all group"
            >
              <div className="text-2xl mb-2">{sign2.symbol}</div>
              <div className="text-lg font-semibold text-gray-200 group-hover:text-purple-300 mb-1">
                {sign2.name}
              </div>
              <p className="text-sm text-gray-500">
                {sign2.element} sign ruled by {sign2.rulingPlanet} ({sign2.rulingPlanetSanskrit})
              </p>
              <span className="text-sm text-purple-400 mt-2 inline-block">Read full profile →</span>
            </Link>
          )}
        </div>
      </section>

      {/* Free Compatibility Checker */}
      <section className="mb-10">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <h2 className="text-lg font-bold text-gray-200 mb-2">Check Any Pair Instantly</h2>
          <p className="text-gray-400 text-sm mb-4">
            Use our free compatibility checker to analyze any two Vedic zodiac signs.
          </p>
          <Link
            href="/free/compatibility"
            className="inline-block px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-purple-400 font-medium rounded-lg transition-colors border border-gray-700"
          >
            Open Compatibility Checker →
          </Link>
        </div>
      </section>

      {/* Other compatibility pairs for sign1 */}
      {sign1OtherPairs.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            Other {sign1.englishName} Compatibility Pairs
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {sign1OtherPairs.map((p) => {
              const other = p.sign1.slug === sign1.slug ? p.sign2 : p.sign1;
              return (
                <Link
                  key={p.slug}
                  href={`/compatibility/${p.slug}`}
                  className="bg-gray-900/30 border border-gray-800 rounded-lg p-3 hover:border-purple-600/50 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span>{sign1.symbol}</span>
                    <span className="text-gray-600">+</span>
                    <span>{other.symbol}</span>
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-purple-300">
                    {sign1.sanskritName} & {other.sanskritName}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{p.scores.overall}% match</div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Other compatibility pairs for sign2 */}
      {sign2OtherPairs.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            Other {sign2.englishName} Compatibility Pairs
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {sign2OtherPairs.map((p) => {
              const other = p.sign1.slug === sign2.slug ? p.sign2 : p.sign1;
              return (
                <Link
                  key={p.slug}
                  href={`/compatibility/${p.slug}`}
                  className="bg-gray-900/30 border border-gray-800 rounded-lg p-3 hover:border-purple-600/50 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span>{sign2.symbol}</span>
                    <span className="text-gray-600">+</span>
                    <span>{other.symbol}</span>
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-purple-300">
                    {sign2.sanskritName} & {other.sanskritName}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{p.scores.overall}% match</div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Explore More Pairs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Explore More Compatibility Pairs</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {explorePairs.map((p) => (
            <Link
              key={p.slug}
              href={`/compatibility/${p.slug}`}
              className="bg-gray-900/30 border border-gray-800 rounded-lg p-3 hover:border-purple-600/50 transition-all group text-center"
            >
              <div className="text-lg mb-1">
                {p.sign1.symbol} {p.sign2.symbol}
              </div>
              <div className="text-xs text-gray-400 group-hover:text-purple-300">
                {p.sign1.sanskritName} & {p.sign2.sanskritName}
              </div>
              <div className="text-xs text-gray-500 mt-1">{p.scores.overall}%</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          Get Your Full Compatibility Reading
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          Sun sign compatibility is just the beginning. Enter both birth details for a complete
          analysis including Nakshatra matching, Dasha compatibility, and AI-powered relationship guidance.
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
            headline: `${sign1.name} & ${sign2.name} Compatibility — Vedic Astrology`,
            description: overview.slice(0, 300),
            author: { "@type": "Organization", name: "AstroMedha" },
            publisher: { "@type": "Organization", name: "AstroMedha", url: "https://astromedha.in" },
            mainEntityOfPage: `https://astromedha.in/compatibility/${pair}`,
          }),
        }}
      />
    </main>
  );
}

/* --- Helper components --- */

function ScoreCard({
  title,
  score,
  max,
  detail,
  description,
}: {
  title: string;
  score: number;
  max: number;
  detail: string;
  description: string;
}) {
  const pct = (score / max) * 100;
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-300">{title}</h3>
        <span className="text-sm font-bold text-purple-400">
          {score}/{max}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full mb-2">
        <div
          className="h-2 bg-purple-500 rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mb-1">{detail}</p>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
}

/* --- Helper functions for descriptions --- */

function getElementDescription(e1: string, e2: string): string {
  if (e1 === e2) {
    const descs: Record<string, string> = {
      Fire: "Shared Fire creates intense passion, ambition, and mutual inspiration.",
      Earth: "Double Earth ensures stability, reliability, and shared practical values.",
      Air: "Fellow Air signs enjoy endless intellectual exchange and social harmony.",
      Water: "Shared Water creates deep emotional understanding and intuitive bonding.",
    };
    return descs[e1] || "";
  }
  const key = [e1, e2].sort().join("+");
  const descs: Record<string, string> = {
    "Air+Fire": "Air fans Fire's flames, creating a naturally energizing and creative bond.",
    "Earth+Water": "Water nourishes Earth, forming a deeply supportive and fertile connection.",
    "Earth+Fire": "Fire's passion meets Earth's caution, requiring mutual adjustment.",
    "Air+Water": "Logic meets emotion, creating a stimulating but sometimes confusing dynamic.",
    "Air+Earth": "Abstract meets practical, requiring effort to find common ground.",
    "Fire+Water": "Passion meets sensitivity, creating tension that can fuel growth or conflict.",
  };
  return descs[key] || "A unique combination that offers distinct learning opportunities.";
}

function getLordshipDescription(lord1: string, lord2: string, score: number): string {
  if (lord1 === lord2) return `Shared ${lord1} rulership creates a deep energetic resonance between both signs.`;
  if (score >= 9) return `${lord1} and ${lord2} are great friends in Vedic astrology, supporting mutual growth.`;
  if (score >= 7) return `${lord1} and ${lord2} share a friendly relationship, easing natural compatibility.`;
  if (score >= 6) return `${lord1} and ${lord2} have a neutral relationship, neither helping nor hindering.`;
  return `${lord1} and ${lord2} have a tense relationship that requires conscious effort to harmonize.`;
}

function getHouseDistance(slug1: string, slug2: string): number {
  const slugs = ["mesha", "vrishabha", "mithuna", "karka", "simha", "kanya", "tula", "vrishchika", "dhanu", "makara", "kumbha", "meena"];
  const i1 = slugs.indexOf(slug1);
  const i2 = slugs.indexOf(slug2);
  const dist = Math.abs(i1 - i2);
  return Math.min(dist, 12 - dist);
}

function getAspectDescription(score: number): string {
  if (score >= 9) return "Trine aspect (5th/9th house) — one of the most auspicious connections in Jyotish.";
  if (score >= 8) return "Favorable angular relationship creating natural support and mutual benefit.";
  if (score >= 7) return "Supportive house distance that encourages growth and cooperation.";
  if (score >= 6) return "Conjunction (same sign) — deep familiarity but risk of blind spots.";
  if (score >= 5) return "Adjacent signs have different energies, requiring adjustment.";
  if (score >= 4) return "Moderate tension that can be channeled into productive growth.";
  return "Opposition aspect — maximum polarity that demands conscious effort to balance.";
}

function getQualityDescription(q1: string, q2: string): string {
  if (q1 === q2) {
    const descs: Record<string, string> = {
      Cardinal: "Both partners are initiators and leaders — dynamic but prone to power struggles.",
      Fixed: "Double determination and loyalty, but stubborn standoffs may occur.",
      Mutable: "Both are adaptable and flexible, but may lack follow-through on shared goals.",
    };
    return descs[q1] || "";
  }
  const key = [q1, q2].sort().join("+");
  const descs: Record<string, string> = {
    "Cardinal+Fixed": "Cardinal initiates what Fixed sustains — a productive division of energy.",
    "Cardinal+Mutable": "Cardinal leads and Mutable adapts — a naturally flowing dynamic.",
    "Fixed+Mutable": "Fixed provides stability while Mutable adds flexibility and variety.",
  };
  return descs[key] || "A balanced blend of different approaches to action and change.";
}
