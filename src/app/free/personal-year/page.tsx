"use client";

import { useState } from "react";
import Link from "next/link";

function reduceToSingle(n: number): number {
  while (n > 9) {
    n = String(n).split("").reduce((s, d) => s + Number(d), 0);
  }
  return n;
}

function personalYear(day: number, month: number, year: number): number {
  return reduceToSingle(reduceToSingle(day) + reduceToSingle(month) + reduceToSingle(year));
}

const YEAR_MEANINGS: Record<number, { theme: string; keywords: string[]; description: string; advice: string }> = {
  1: {
    theme: "New Beginnings & Independence",
    keywords: ["Fresh starts", "Leadership", "Initiative", "Self-reliance"],
    description: "This is a year of new beginnings and planting seeds. The energy of 1 (ruled by the Sun) brings opportunities to start fresh projects, assert independence, and take bold action. It’s the first year of a new 9-year cycle, making it ideal for launching ventures you want to nurture over the coming decade.",
    advice: "Take initiative. Start that project, make that move, assert your vision. Avoid clinging to the past — this year rewards forward motion and courage.",
  },
  2: {
    theme: "Patience, Partnerships & Diplomacy",
    keywords: ["Cooperation", "Relationships", "Patience", "Intuition"],
    description: "Year 2 (ruled by the Moon) is about patience, partnerships, and emotional intelligence. The seeds planted in Year 1 need nurturing. This is a year to build alliances, deepen relationships, and develop the quiet strength of receptivity. Forcing outcomes will backfire.",
    advice: "Collaborate, don’t compete. Listen more than you speak. Romantic relationships and close friendships deepen this year. Trust the process even when progress feels slow.",
  },
  3: {
    theme: "Creativity, Expression & Joy",
    keywords: ["Communication", "Creativity", "Social life", "Optimism"],
    description: "Year 3 (ruled by Jupiter) brings expansion, joy, and creative expression. Social connections flourish, and opportunities come through communication — writing, speaking, networking. It’s a year to enjoy life and let your personality shine.",
    advice: "Express yourself freely. Attend social events, create art, write, perform. Avoid scattering your energy across too many projects. Focus your creativity for maximum impact.",
  },
  4: {
    theme: "Structure, Discipline & Foundation",
    keywords: ["Hard work", "Organization", "Stability", "Discipline"],
    description: "Year 4 (ruled by Rahu) demands hard work and discipline. It’s time to build solid foundations for your goals. Expect challenges that test your resolve — they’re strengthening your structure. This year rewards methodical effort over shortcuts.",
    advice: "Organize your life. Create systems, tackle deferred maintenance, build processes. Don’t resist the grind — what you build this year becomes the platform for future growth.",
  },
  5: {
    theme: "Change, Freedom & Adventure",
    keywords: ["Travel", "Change", "Freedom", "Versatility"],
    description: "Year 5 (ruled by Mercury) brings dynamic change, travel, and new experiences. After the discipline of Year 4, this year liberates you. Expect unexpected opportunities, changes in routine, and a strong desire for freedom and variety.",
    advice: "Embrace change rather than resisting it. Travel, learn new skills, meet diverse people. Stay adaptable but don’t abandon commitments recklessly. Channel Mercury’s energy into learning.",
  },
  6: {
    theme: "Love, Family & Responsibility",
    keywords: ["Family", "Love", "Responsibility", "Harmony"],
    description: "Year 6 (ruled by Venus) centers on love, family, home, and responsibility. Relationships take priority — marriages, family matters, domestic decisions. You may take on caregiving roles or beautify your living space.",
    advice: "Invest in relationships and home life. Address family matters you’ve been postponing. Create beauty in your environment. Accept responsibility graciously — it builds deep fulfillment.",
  },
  7: {
    theme: "Reflection, Spirituality & Inner Growth",
    keywords: ["Introspection", "Spirituality", "Study", "Solitude"],
    description: "Year 7 (ruled by Ketu) turns your attention inward. This is the most spiritual year in the cycle — a time for reflection, study, research, and deepening your understanding of life’s mysteries. Outer achievements may slow as inner growth accelerates.",
    advice: "Seek solitude and quiet contemplation. Study spiritual or philosophical subjects. Don’t force material progress — this year’s treasure is wisdom and self-knowledge.",
  },
  8: {
    theme: "Power, Abundance & Material Mastery",
    keywords: ["Business", "Finance", "Authority", "Achievement"],
    description: "Year 8 (ruled by Saturn) brings karmic rewards — both positive and challenging. It’s the most powerful year for financial and career achievement. Past efforts bear fruit, and authority figures may play important roles. What you’ve sown in previous years, you now reap.",
    advice: "Make bold financial and career moves. Negotiate for what you deserve. Watch for karmic lessons — integrity matters more than ever. Manage money wisely as large sums may flow in and out.",
  },
  9: {
    theme: "Completion, Release & Transformation",
    keywords: ["Endings", "Letting go", "Compassion", "Transformation"],
    description: "Year 9 (ruled by Mars) closes the 9-year cycle. It’s a year of completion, release, and transformation. Relationships, projects, or phases that no longer serve you will naturally end. This clearing creates space for the new cycle beginning next year.",
    advice: "Let go gracefully. Don’t start major new ventures — instead, complete what’s in progress. Practice generosity and compassion. Prepare for the fresh start of Year 1 ahead.",
  },
};

export default function PersonalYearCalculator() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<{ year: number; currentYear: number } | null>(null);

  function calculate() {
    if (!dob) return;
    const [year, month, day] = dob.split("-").map(Number);
    const currentYear = new Date().getFullYear();
    setResult({
      year: personalYear(day, month, currentYear),
      currentYear,
    });
  }

  const meaning = result ? YEAR_MEANINGS[result.year] : null;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-400">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/free/personal-year" className="text-purple-400">Personal Year Calculator</Link>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
        Free Personal Year Number Calculator
      </h1>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
        Your <strong className="text-gray-200">Personal Year Number</strong> reveals the theme,
        energy, and opportunities of your current year. Calculated using <strong className="text-gray-200">Chaldean numerology</strong>,
        it combines your birth day, birth month, and the current calendar year into a single digit
        that maps to a specific planetary vibration.
      </p>

      {/* Calculator */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-10">
        <div className="max-w-sm">
          <label className="block text-sm text-gray-400 mb-2">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-purple-500 mb-4"
          />
        </div>
        <button
          onClick={calculate}
          disabled={!dob}
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
        >
          Calculate My Personal Year
        </button>
      </div>

      {/* Results */}
      {result && meaning && (
        <div className="mb-12">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 flex-shrink-0 rounded-full bg-purple-600/20 border-2 border-purple-500/30 flex items-center justify-center">
                <span className="text-4xl font-bold text-purple-400">{result.year}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-100">
                  Personal Year {result.year} ({result.currentYear})
                </h2>
                <p className="text-purple-300 font-medium">{meaning.theme}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {meaning.keywords.map((k) => (
                <span key={k} className="px-3 py-1 bg-purple-600/15 border border-purple-500/20 rounded-full text-xs text-purple-300">
                  {k}
                </span>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">{meaning.description}</p>

            <div className="bg-purple-950/30 border border-purple-800/30 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-purple-300 mb-2">Guidance for This Year</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{meaning.advice}</p>
            </div>

            <Link
              href={`/numerology/${result.year}`}
              className="inline-block mt-4 text-sm text-purple-400 hover:text-purple-300"
            >
              Read full Number {result.year} analysis →
            </Link>
          </div>
        </div>
      )}

      {/* SEO Content */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          Understanding Personal Year Numbers
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          In Chaldean numerology, life moves in 9-year cycles. Each year within the cycle carries
          the energy of a specific number (1 through 9), and each number is ruled by a planet.
          Your Personal Year number tells you the overarching theme of your current year and helps
          you align your actions with the prevailing cosmic energy.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          The calculation is simple: reduce your birth day, birth month, and the current calendar
          year each to a single digit, then add them together and reduce again. For example, if
          born on July 23 and the current year is 2026: Day = 2+3 = 5, Month = 7, Year = 2+0+2+6
          = 10 = 1. Personal Year = 5+7+1 = 13 = 1+3 = 4 (a Year of Structure).
        </p>

        <h2 className="text-2xl font-bold text-gray-100 mb-4 mt-8">
          The 9-Year Cycle
        </h2>
        <div className="space-y-3">
          {Object.entries(YEAR_MEANINGS).map(([num, info]) => (
            <div key={num} className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-100 mb-1">
                Year {num}: {info.theme}
              </h3>
              <p className="text-sm text-gray-400">{info.advice}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          Want Month-by-Month Guidance?
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          AstroMedha combines your Personal Year with Vedic dasha periods and daily transits for
          precise, actionable daily guidance.
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          Get Daily Guidance →
        </Link>
      </div>
    </main>
  );
}
