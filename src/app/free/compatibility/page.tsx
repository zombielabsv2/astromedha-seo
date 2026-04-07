"use client";

import { useState } from "react";
import Link from "next/link";

const SIGNS = [
  { slug: "mesha", name: "Mesha (Aries)", element: "Fire", quality: "Cardinal", lord: "Mars" },
  { slug: "vrishabha", name: "Vrishabha (Taurus)", element: "Earth", quality: "Fixed", lord: "Venus" },
  { slug: "mithuna", name: "Mithuna (Gemini)", element: "Air", quality: "Mutable", lord: "Mercury" },
  { slug: "karka", name: "Karka (Cancer)", element: "Water", quality: "Cardinal", lord: "Moon" },
  { slug: "simha", name: "Simha (Leo)", element: "Fire", quality: "Fixed", lord: "Sun" },
  { slug: "kanya", name: "Kanya (Virgo)", element: "Earth", quality: "Mutable", lord: "Mercury" },
  { slug: "tula", name: "Tula (Libra)", element: "Air", quality: "Cardinal", lord: "Venus" },
  { slug: "vrishchika", name: "Vrishchika (Scorpio)", element: "Water", quality: "Fixed", lord: "Mars" },
  { slug: "dhanu", name: "Dhanu (Sagittarius)", element: "Fire", quality: "Mutable", lord: "Jupiter" },
  { slug: "makara", name: "Makara (Capricorn)", element: "Earth", quality: "Cardinal", lord: "Saturn" },
  { slug: "kumbha", name: "Kumbha (Aquarius)", element: "Air", quality: "Fixed", lord: "Saturn" },
  { slug: "meena", name: "Meena (Pisces)", element: "Water", quality: "Mutable", lord: "Jupiter" },
];

const ELEMENT_COMPAT: Record<string, Record<string, number>> = {
  Fire: { Fire: 7, Earth: 4, Air: 9, Water: 3 },
  Earth: { Fire: 4, Earth: 7, Air: 5, Water: 8 },
  Air: { Fire: 9, Earth: 5, Air: 6, Water: 4 },
  Water: { Fire: 3, Earth: 8, Air: 4, Water: 7 },
};

const PLANET_FRIENDS: Record<string, string[]> = {
  Sun: ["Moon", "Mars", "Jupiter"],
  Moon: ["Sun", "Mercury", "Jupiter"],
  Mars: ["Sun", "Moon", "Jupiter"],
  Mercury: ["Sun", "Venus", "Saturn"],
  Jupiter: ["Sun", "Moon", "Mars"],
  Venus: ["Mercury", "Saturn"],
  Saturn: ["Mercury", "Venus"],
};

function computeCompatibility(sign1Idx: number, sign2Idx: number) {
  const s1 = SIGNS[sign1Idx];
  const s2 = SIGNS[sign2Idx];

  // Element compatibility (0-10)
  const elementScore = ELEMENT_COMPAT[s1.element][s2.element];

  // Lord friendship (0-10)
  const friends1 = PLANET_FRIENDS[s1.lord] || [];
  const friends2 = PLANET_FRIENDS[s2.lord] || [];
  let lordScore = 5;
  if (friends1.includes(s2.lord) && friends2.includes(s1.lord)) lordScore = 9;
  else if (friends1.includes(s2.lord) || friends2.includes(s1.lord)) lordScore = 7;
  else if (s1.lord === s2.lord) lordScore = 8;

  // Aspect compatibility based on house distance
  const distance = Math.abs(sign1Idx - sign2Idx);
  const normalizedDist = Math.min(distance, 12 - distance);
  const aspectScores: Record<number, number> = { 0: 6, 1: 5, 2: 4, 3: 7, 4: 8, 5: 9, 6: 3 };
  const aspectScore = aspectScores[normalizedDist] ?? 5;

  // Quality compatibility
  let qualityScore = 5;
  if (s1.quality === s2.quality) qualityScore = 6;
  if (s1.quality !== s2.quality && s1.element === s2.element) qualityScore = 7;

  const total = Math.round(((elementScore + lordScore + aspectScore + qualityScore) / 40) * 100);

  return {
    overall: Math.min(total, 95),
    element: { score: elementScore, s1Element: s1.element, s2Element: s2.element },
    lordship: { score: lordScore, s1Lord: s1.lord, s2Lord: s2.lord },
    aspect: { score: aspectScore, houses: normalizedDist },
    quality: { score: qualityScore },
  };
}

function getVerdict(score: number): { text: string; color: string } {
  if (score >= 80) return { text: "Excellent Match", color: "text-green-400" };
  if (score >= 65) return { text: "Good Compatibility", color: "text-emerald-400" };
  if (score >= 50) return { text: "Moderate Match", color: "text-yellow-400" };
  if (score >= 35) return { text: "Challenging but Growth-Oriented", color: "text-orange-400" };
  return { text: "Requires Conscious Effort", color: "text-red-400" };
}

export default function CompatibilityChecker() {
  const [sign1, setSign1] = useState(-1);
  const [sign2, setSign2] = useState(-1);
  const [result, setResult] = useState<ReturnType<typeof computeCompatibility> | null>(null);

  function check() {
    if (sign1 < 0 || sign2 < 0) return;
    setResult(computeCompatibility(sign1, sign2));
  }

  const verdict = result ? getVerdict(result.overall) : null;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-400">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/free/compatibility" className="text-purple-400">Compatibility Checker</Link>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
        Free Vedic Compatibility Checker
      </h1>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
        Check the <strong className="text-gray-200">Vedic zodiac compatibility</strong> between
        two signs based on elemental harmony, planetary lordship friendship, house aspects, and
        quality matching — key factors in Jyotish compatibility analysis.
      </p>

      {/* Checker */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-10">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Person 1 — Moon Sign (Rashi)</label>
            <select
              value={sign1}
              onChange={(e) => setSign1(Number(e.target.value))}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-purple-500"
            >
              <option value={-1}>Select sign...</option>
              {SIGNS.map((s, i) => (
                <option key={s.slug} value={i}>{s.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Person 2 — Moon Sign (Rashi)</label>
            <select
              value={sign2}
              onChange={(e) => setSign2(Number(e.target.value))}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-purple-500"
            >
              <option value={-1}>Select sign...</option>
              {SIGNS.map((s, i) => (
                <option key={s.slug} value={i}>{s.name}</option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={check}
          disabled={sign1 < 0 || sign2 < 0}
          className="w-full sm:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
        >
          Check Compatibility
        </button>
      </div>

      {/* Results */}
      {result && verdict && (
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-purple-400 mb-2">{result.overall}%</div>
            <div className={`text-lg font-semibold ${verdict.color}`}>{verdict.text}</div>
            <p className="text-gray-500 text-sm mt-1">
              {SIGNS[sign1].name} & {SIGNS[sign2].name}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <ScoreCard
              title="Elemental Harmony"
              score={result.element.score}
              max={10}
              detail={`${result.element.s1Element} + ${result.element.s2Element}`}
            />
            <ScoreCard
              title="Planetary Lordship"
              score={result.lordship.score}
              max={10}
              detail={`${result.lordship.s1Lord} + ${result.lordship.s2Lord}`}
            />
            <ScoreCard
              title="House Aspect"
              score={result.aspect.score}
              max={10}
              detail={`${result.aspect.houses} houses apart`}
            />
            <ScoreCard
              title="Quality Match"
              score={result.quality.score}
              max={10}
              detail={`${SIGNS[sign1].quality} + ${SIGNS[sign2].quality}`}
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/zodiac/${SIGNS[sign1].slug}`}
              className="text-sm text-purple-400 hover:text-purple-300 text-center"
            >
              Read full {SIGNS[sign1].name.split(" ")[0]} profile →
            </Link>
            <Link
              href={`/zodiac/${SIGNS[sign2].slug}`}
              className="text-sm text-purple-400 hover:text-purple-300 text-center"
            >
              Read full {SIGNS[sign2].name.split(" ")[0]} profile →
            </Link>
          </div>
        </div>
      )}

      {/* SEO Content */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          How Vedic Compatibility Works
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          In Vedic astrology, compatibility (or Kundli matching) goes far beyond sun sign matching.
          The traditional system evaluates multiple factors including the Moon sign (Rashi), birth
          Nakshatra, and planetary positions. Our free checker evaluates four key dimensions:
          elemental harmony, planetary lordship friendship, house aspects, and quality matching.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          <strong className="text-gray-200">Elemental Harmony:</strong> The five elements (Fire,
          Earth, Air, Water) have natural affinities. Fire and Air signs energize each other, while
          Earth and Water signs ground and nourish each other. Opposing elements (Fire-Water,
          Earth-Air) can create tension but also powerful complementary energy.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          <strong className="text-gray-200">Planetary Lordship:</strong> Each sign is ruled by a
          planet, and these planets have natural friendships and enmities in Vedic astrology. When
          the ruling planets of two signs are friends (like Sun and Moon, or Jupiter and Mars), the
          compatibility is naturally stronger.
        </p>
        <p className="text-gray-400 leading-relaxed">
          For a complete compatibility analysis including Nakshatra matching (Ashtakoot/Guna Milan),
          Manglik Dosha check, and Dasha compatibility, sign up for the full AstroMedha experience.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          Get Full Kundli Matching
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          Our full compatibility analysis includes Ashtakoot Guna Milan, Manglik Dosha, Dasha
          compatibility, and AI-powered relationship insights.
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          Get Full Analysis →
        </Link>
      </div>
    </main>
  );
}

function ScoreCard({
  title,
  score,
  max,
  detail,
}: {
  title: string;
  score: number;
  max: number;
  detail: string;
}) {
  const pct = (score / max) * 100;
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-300">{title}</h3>
        <span className="text-sm font-bold text-purple-400">{score}/{max}</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full mb-2">
        <div
          className="h-2 bg-purple-500 rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-gray-500">{detail}</p>
    </div>
  );
}
