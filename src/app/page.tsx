import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroMedha — AI-Powered Vedic Astrology & Numerology Guidance",
  description:
    "Get personalized daily guidance through Chaldean Numerology, Vedic Astrology, Nakshatras, and Vimshottari Dasha analysis. Free birth chart calculator, compatibility checker, and numerology tools powered by AI.",
  alternates: { canonical: "https://astromedha.in" },
};

const zodiacSigns = [
  { slug: "mesha", name: "Mesha", english: "Aries", symbol: "♈" },
  { slug: "vrishabha", name: "Vrishabha", english: "Taurus", symbol: "♉" },
  { slug: "mithuna", name: "Mithuna", english: "Gemini", symbol: "♊" },
  { slug: "karka", name: "Karka", english: "Cancer", symbol: "♋" },
  { slug: "simha", name: "Simha", english: "Leo", symbol: "♌" },
  { slug: "kanya", name: "Kanya", english: "Virgo", symbol: "♍" },
  { slug: "tula", name: "Tula", english: "Libra", symbol: "♎" },
  { slug: "vrishchika", name: "Vrishchika", english: "Scorpio", symbol: "♏" },
  { slug: "dhanu", name: "Dhanu", english: "Sagittarius", symbol: "♐" },
  { slug: "makara", name: "Makara", english: "Capricorn", symbol: "♑" },
  { slug: "kumbha", name: "Kumbha", english: "Aquarius", symbol: "♒" },
  { slug: "meena", name: "Meena", english: "Pisces", symbol: "♓" },
];

const features = [
  {
    title: "Vedic Birth Chart Analysis",
    description:
      "Complete Lagna, Rashi, and Navamsha chart computation using Swiss Ephemeris. Precise planetary positions, house placements, and aspects.",
    icon: "✧",
  },
  {
    title: "Chaldean Numerology",
    description:
      "Life Path, Destiny, Soul Urge, and Personal Year numbers computed using the authentic Chaldean system — the oldest numerological tradition.",
    icon: "☰",
  },
  {
    title: "Vimshottari Dasha Timeline",
    description:
      "Know your current Mahadasha, Antardasha, and Pratyantardasha periods. Understand the planetary influences shaping your life right now.",
    icon: "◎",
  },
  {
    title: "AI-Powered Daily Guidance",
    description:
      "AI synthesizes your numerology, dasha periods, and planetary transits into actionable daily guidance — energy scores, mantras, do’s and don’ts.",
    icon: "✦",
  },
  {
    title: "27 Nakshatra Insights",
    description:
      "Deep analysis of your birth Nakshatra — personality traits, compatible Nakshatras, career guidance, and spiritual path from the Lunar mansion system.",
    icon: "☽",
  },
  {
    title: "5 Personal Power Tools",
    description:
      "Decision Advisor, Compatibility Checker, Muhurta Finder, Name Analysis, and Finance Calendar — all personalized to your birth chart.",
    icon: "⚡",
  },
];

const freeTools = [
  {
    href: "/free/numerology",
    title: "Numerology Calculator",
    description:
      "Compute your Life Path, Destiny, and Soul Urge numbers using authentic Chaldean numerology",
  },
  {
    href: "/free/compatibility",
    title: "Compatibility Checker",
    description:
      "Check Vedic zodiac compatibility between two signs — elemental harmony and Guna analysis",
  },
  {
    href: "/free/personal-year",
    title: "Personal Year Calculator",
    description:
      "Find your Chaldean Personal Year number and understand the theme of your current year",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-purple-400">Vedic Astrology</span> &{" "}
            <span className="text-purple-400">Numerology</span>
            <br />
            <span className="text-gray-100">Powered by AI</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Personalized daily guidance through Chaldean Numerology, Vimshottari
            Dasha analysis, and Vedic birth chart interpretation — synthesized
            by AI into actionable insights.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://astromedha.streamlit.app"
              className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Get Your Guidance — Free
            </Link>
            <Link
              href="/free/numerology"
              className="px-8 py-3.5 border border-purple-500/50 text-purple-300 hover:bg-purple-600/10 font-semibold rounded-lg transition-colors text-lg"
            >
              Try Free Tools
            </Link>
          </div>
        </div>
      </section>

      {/* What is AstroMedha */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-6">
          What is AstroMedha?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          AstroMedha combines three ancient wisdom systems —{" "}
          <strong>Vedic Astrology</strong> (Jyotish),{" "}
          <strong>Chaldean Numerology</strong>, and the{" "}
          <strong>Vimshottari Dasha</strong> system — with modern AI to deliver
          personalized guidance. Every insight is computed from your exact birth
          data using Swiss Ephemeris precision, then interpreted by AI to provide
          specific, actionable daily guidance.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
          Comprehensive Vedic Guidance
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-600/40 transition-colors"
            >
              <div className="text-2xl text-purple-400 mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Zodiac Signs */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-4">
          Explore Vedic Zodiac Signs (Rashis)
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Discover the characteristics, strengths, and guidance for each of the
          12 Vedic zodiac signs.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {zodiacSigns.map((sign) => (
            <Link
              key={sign.slug}
              href={`/zodiac/${sign.slug}`}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-purple-600/50 hover:bg-purple-950/20 transition-all group"
            >
              <div className="text-3xl mb-2">{sign.symbol}</div>
              <div className="font-semibold text-gray-100 group-hover:text-purple-300 transition-colors">
                {sign.name}
              </div>
              <div className="text-xs text-gray-500">{sign.english}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Numerology */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-4">
          Chaldean Numerology
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          The Chaldean system is the oldest and most accurate form of
          numerology. Discover what your Life Path number reveals.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <Link
              key={n}
              href={`/numerology/${n}`}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-purple-600/50 hover:bg-purple-950/20 transition-all"
            >
              <div className="text-2xl font-bold text-purple-400">{n}</div>
              <div className="text-xs text-gray-500 mt-1">Life Path</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Dasha */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-4">
          Vimshottari Dasha System
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          The Vimshottari Dasha is a 120-year planetary period system that
          reveals which planet governs your life at any given time.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
          {[
            { slug: "ketu", name: "Ketu", years: 7 },
            { slug: "venus", name: "Venus", years: 20 },
            { slug: "sun", name: "Sun", years: 6 },
            { slug: "moon", name: "Moon", years: 10 },
            { slug: "mars", name: "Mars", years: 7 },
            { slug: "rahu", name: "Rahu", years: 18 },
            { slug: "jupiter", name: "Jupiter", years: 16 },
            { slug: "saturn", name: "Saturn", years: 19 },
            { slug: "mercury", name: "Mercury", years: 17 },
          ].map((d) => (
            <Link
              key={d.slug}
              href={`/dasha/${d.slug}`}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-purple-600/50 hover:bg-purple-950/20 transition-all"
            >
              <div className="text-sm font-semibold text-purple-300">
                {d.name}
              </div>
              <div className="text-xs text-gray-500">{d.years} yrs</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Compatibility */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-4">
          Vedic Zodiac Compatibility
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Explore compatibility between every pair of Vedic zodiac signs — elemental
          harmony, planetary lordship, and relationship dynamics.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            { pair: "mesha-simha", label: "Mesha & Simha" },
            { pair: "vrishabha-kanya", label: "Vrishabha & Kanya" },
            { pair: "mithuna-tula", label: "Mithuna & Tula" },
            { pair: "karka-meena", label: "Karka & Meena" },
            { pair: "simha-dhanu", label: "Simha & Dhanu" },
            { pair: "kanya-makara", label: "Kanya & Makara" },
            { pair: "tula-kumbha", label: "Tula & Kumbha" },
            { pair: "vrishchika-meena", label: "Vrishchika & Meena" },
          ].map((c) => (
            <Link
              key={c.pair}
              href={`/compatibility/${c.pair}`}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 text-center hover:border-purple-600/50 hover:bg-purple-950/20 transition-all text-sm text-gray-300 hover:text-purple-300"
            >
              {c.label}
            </Link>
          ))}
        </div>
        <p className="text-center mt-4">
          <Link href="/free/compatibility" className="text-sm text-purple-400 hover:text-purple-300">
            View all 78 compatibility pairs →
          </Link>
        </p>
      </section>

      {/* Name Analysis */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-4">
          Name Numerology Analysis
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Every letter carries a Chaldean number vibration. Discover what your
          name's first letter reveals about your personality and destiny.
        </p>
        <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-13 gap-2">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
            <Link
              key={letter}
              href={`/name-analysis/${letter.toLowerCase()}`}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-2 text-center hover:border-purple-600/50 hover:bg-purple-950/20 transition-all"
            >
              <div className="text-lg font-bold text-purple-400">{letter}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Free Tools */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-4">
          Free Vedic Astrology & Numerology Tools
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Try our free calculators — no sign-up required.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {freeTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-600/50 hover:bg-purple-950/20 transition-all group"
            >
              <h3 className="text-lg font-semibold text-gray-100 group-hover:text-purple-300 transition-colors mb-2">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <span className="inline-block mt-4 text-purple-400 text-sm font-medium">
                Try Free →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
          How AstroMedha Works
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              n: 1,
              title: "Enter Birth Details",
              text: "Your name, date of birth, and birth time are all we need to compute your complete Vedic profile.",
            },
            {
              n: 2,
              title: "AI Computes Your Chart",
              text: "We calculate your Vedic birth chart, Chaldean numerology profile, current Dasha period, and planetary transits.",
            },
            {
              n: 3,
              title: "Get Daily Guidance",
              text: "Receive personalized daily energy scores, mantras, do’s and don’ts, and proactive alerts for planetary shifts.",
            },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {s.n}
              </div>
              <h3 className="font-semibold text-gray-100 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group bg-gray-900/50 border border-gray-800 rounded-lg"
            >
              <summary className="flex justify-between items-center cursor-pointer p-5 text-gray-100 font-medium">
                {f.q}
                <span className="text-purple-400 group-open:rotate-45 transition-transform text-xl ml-4">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-gray-400 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-3">
            Get Your Personalized Vedic Guidance
          </h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Enter your birth details for AI-powered daily guidance based on your
            unique Vedic birth chart and numerology profile.
          </p>
          <Link
            href="https://astromedha.streamlit.app"
            className="inline-block px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Start Free →
          </Link>
        </div>
      </section>

      {/* Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "AstroMedha",
            url: "https://astromedha.in",
            description:
              "AI-powered Vedic Astrology and Chaldean Numerology guidance platform",
            applicationCategory: "LifestyleApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
          }),
        }}
      />
    </main>
  );
}

const faqs = [
  {
    q: "What is Vedic Astrology (Jyotish)?",
    a: "Vedic Astrology, or Jyotish Shastra, is an ancient Indian system of astrology that uses the sidereal zodiac — tracking the actual positions of planets against the stars. Unlike Western astrology which uses the tropical zodiac, Vedic astrology accounts for the precession of equinoxes, giving more astronomically accurate planetary positions.",
  },
  {
    q: "What is Chaldean Numerology?",
    a: "Chaldean Numerology is the oldest numerological system, originating from ancient Babylon. Unlike the more common Pythagorean system, Chaldean numerology assigns number values based on the vibrational frequency of each letter, making it more nuanced and accurate for personality and life path analysis.",
  },
  {
    q: "What is the Vimshottari Dasha system?",
    a: "The Vimshottari Dasha is a 120-year predictive system unique to Vedic astrology. It divides your life into planetary periods (Mahadasha), sub-periods (Antardasha), and sub-sub-periods (Pratyantardasha). Each period is governed by a specific planet, influencing different areas of your life based on that planet’s placement in your birth chart.",
  },
  {
    q: "How is AstroMedha different from other astrology sites?",
    a: "AstroMedha computes your chart using Swiss Ephemeris (the gold standard in astronomical calculation) and combines Vedic Astrology, Chaldean Numerology, and Vimshottari Dasha into a single unified analysis. Then AI synthesizes all three into specific daily guidance, rather than generic sun-sign horoscopes.",
  },
  {
    q: "Do I need my exact birth time?",
    a: "Birth time improves accuracy significantly — it determines your Ascendant (Lagna), house placements, and Nakshatra pada. Without it, AstroMedha still provides numerology analysis and approximate planetary positions, but guidance will be more precise with an accurate birth time.",
  },
];
