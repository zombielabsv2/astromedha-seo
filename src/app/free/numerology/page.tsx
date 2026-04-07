"use client";

import { useState } from "react";
import Link from "next/link";

const CHALDEAN_MAP: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 8, G: 3, H: 5, I: 1,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 7, P: 8, Q: 1, R: 2,
  S: 3, T: 4, U: 6, V: 6, W: 6, X: 5, Y: 1, Z: 7,
};

function reduceToSingle(n: number): number {
  while (n > 9) {
    n = String(n).split("").reduce((s, d) => s + Number(d), 0);
  }
  return n;
}

function chaldeanName(name: string): number {
  const total = name
    .toUpperCase()
    .split("")
    .filter((c) => CHALDEAN_MAP[c])
    .reduce((s, c) => s + CHALDEAN_MAP[c], 0);
  return reduceToSingle(total);
}

function lifePath(day: number, month: number, year: number): number {
  const sum = reduceToSingle(day) + reduceToSingle(month) + reduceToSingle(year);
  return reduceToSingle(sum);
}

function destinyNumber(fullName: string): number {
  return chaldeanName(fullName);
}

function soulUrge(fullName: string): number {
  const vowels = "AEIOU";
  const total = fullName
    .toUpperCase()
    .split("")
    .filter((c) => vowels.includes(c) && CHALDEAN_MAP[c])
    .reduce((s, c) => s + CHALDEAN_MAP[c], 0);
  return reduceToSingle(total);
}

function personalYear(day: number, month: number, currentYear: number): number {
  const sum = reduceToSingle(day) + reduceToSingle(month) + reduceToSingle(currentYear);
  return reduceToSingle(sum);
}

const NUMBER_MEANINGS: Record<number, { title: string; planet: string; traits: string; career: string }> = {
  1: { title: "The Leader", planet: "Sun", traits: "Independent, ambitious, pioneering, creative. Natural leaders who forge their own path.", career: "Entrepreneurship, management, innovation, politics" },
  2: { title: "The Diplomat", planet: "Moon", traits: "Intuitive, cooperative, sensitive, balanced. Natural peacemakers who excel in partnerships.", career: "Counseling, diplomacy, arts, healthcare" },
  3: { title: "The Communicator", planet: "Jupiter", traits: "Expressive, optimistic, social, creative. Natural entertainers with magnetic personalities.", career: "Writing, teaching, media, performing arts" },
  4: { title: "The Builder", planet: "Rahu", traits: "Disciplined, practical, reliable, systematic. Natural organizers who create lasting structures.", career: "Engineering, architecture, finance, project management" },
  5: { title: "The Explorer", planet: "Mercury", traits: "Versatile, adventurous, curious, dynamic. Natural communicators who thrive on change.", career: "Travel, sales, journalism, technology" },
  6: { title: "The Nurturer", planet: "Venus", traits: "Loving, responsible, harmonious, artistic. Natural caregivers who create beauty.", career: "Design, hospitality, medicine, counseling" },
  7: { title: "The Seeker", planet: "Ketu", traits: "Analytical, spiritual, introspective, wise. Natural researchers who seek deeper truth.", career: "Research, spirituality, science, philosophy" },
  8: { title: "The Powerhouse", planet: "Saturn", traits: "Ambitious, authoritative, strategic, material mastery. Natural executives who build empires.", career: "Business, law, banking, real estate" },
  9: { title: "The Humanitarian", planet: "Mars", traits: "Compassionate, generous, courageous, visionary. Natural warriors who fight for a cause.", career: "Social work, military, medicine, philanthropy" },
};

export default function NumerologyCalculator() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [results, setResults] = useState<{
    lifePath: number;
    destiny: number;
    soulUrge: number;
    personalYear: number;
  } | null>(null);

  function calculate() {
    if (!name.trim() || !dob) return;
    const [year, month, day] = dob.split("-").map(Number);
    const currentYear = new Date().getFullYear();
    setResults({
      lifePath: lifePath(day, month, year),
      destiny: destinyNumber(name),
      soulUrge: soulUrge(name),
      personalYear: personalYear(day, month, currentYear),
    });
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-400">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/free/numerology" className="text-purple-400">Free Numerology Calculator</Link>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
        Free Chaldean Numerology Calculator
      </h1>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
        Calculate your <strong className="text-gray-200">Life Path Number</strong>,{" "}
        <strong className="text-gray-200">Destiny Number</strong>,{" "}
        <strong className="text-gray-200">Soul Urge Number</strong>, and{" "}
        <strong className="text-gray-200">Personal Year Number</strong> using the
        authentic Chaldean numerology system — the oldest and most accurate
        numerological tradition from ancient Babylon.
      </p>

      {/* Calculator */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-10">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Full Name (as commonly used)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
        <button
          onClick={calculate}
          disabled={!name.trim() || !dob}
          className="w-full sm:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
        >
          Calculate My Numbers
        </button>
      </div>

      {/* Results */}
      {results && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Your Numerology Profile</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Life Path Number", value: results.lifePath, desc: "Your life’s purpose and core identity" },
              { label: "Destiny Number", value: results.destiny, desc: "Your talents and what you’re here to achieve" },
              { label: "Soul Urge Number", value: results.soulUrge, desc: "Your inner desires and deepest motivations" },
              { label: "Personal Year (" + new Date().getFullYear() + ")", value: results.personalYear, desc: "The theme and energy of your current year" },
            ].map((r) => {
              const meaning = NUMBER_MEANINGS[r.value];
              return (
                <div key={r.label} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 flex-shrink-0 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-400">{r.value}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-100">{r.label}</h3>
                      <p className="text-xs text-gray-500 mb-2">{r.desc}</p>
                      {meaning && (
                        <>
                          <p className="text-sm text-purple-300 font-medium">{meaning.title} • Ruled by {meaning.planet}</p>
                          <p className="text-sm text-gray-400 mt-1">{meaning.traits}</p>
                        </>
                      )}
                    </div>
                  </div>
                  <Link
                    href={`/numerology/${r.value}`}
                    className="inline-block mt-3 text-sm text-purple-400 hover:text-purple-300"
                  >
                    Read full Number {r.value} analysis →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SEO Content */}
      <section className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          What is Chaldean Numerology?
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Chaldean Numerology is the oldest known numerological system, developed by the ancient
          Chaldeans of Babylon over 4,000 years ago. Unlike the more popular Pythagorean system,
          Chaldean numerology assigns number values (1-8) to letters based on their vibrational
          frequency rather than their sequential position in the alphabet. The number 9 is considered
          sacred and is not assigned to any letter.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          In the Chaldean system, each number carries the energy of its ruling planet: 1 (Sun), 2
          (Moon), 3 (Jupiter), 4 (Rahu/Uranus), 5 (Mercury), 6 (Venus), 7 (Ketu/Neptune), 8
          (Saturn), and 9 (Mars). This planetary correspondence connects Chaldean numerology
          directly to Vedic astrology, making them powerful companion systems.
        </p>

        <h2 className="text-2xl font-bold text-gray-100 mb-4 mt-8">
          How to Calculate Your Life Path Number
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Your Life Path Number is calculated from your date of birth. Each component (day, month,
          year) is reduced to a single digit, then the three digits are added and reduced again.
          For example, if born on March 15, 1990: Day = 1+5 = 6, Month = 3, Year = 1+9+9+0 = 19 =
          1+0 = 1. Life Path = 6+3+1 = 10 = 1+0 = 1.
        </p>

        <h2 className="text-2xl font-bold text-gray-100 mb-4 mt-8">
          Explore Each Number in Depth
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3 not-prose">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <Link
              key={n}
              href={`/numerology/${n}`}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 text-center hover:border-purple-600/50 transition-all"
            >
              <div className="text-xl font-bold text-purple-400">{n}</div>
              <div className="text-xs text-gray-500">{NUMBER_MEANINGS[n].title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          Want Daily Personalized Guidance?
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          Get your numerology combined with Vedic astrology and Vimshottari Dasha
          for AI-powered daily insights.
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          Get Full Guidance →
        </Link>
      </div>
    </main>
  );
}
