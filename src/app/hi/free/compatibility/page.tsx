"use client";

import { useState } from "react";
import Link from "next/link";

const SIGNS = [
  { slug: "mesha", name: "मेष (Aries)", element: "Fire", quality: "Cardinal", lord: "Mars" },
  { slug: "vrishabha", name: "वृषभ (Taurus)", element: "Earth", quality: "Fixed", lord: "Venus" },
  { slug: "mithuna", name: "मिथुन (Gemini)", element: "Air", quality: "Mutable", lord: "Mercury" },
  { slug: "karka", name: "कर्क (Cancer)", element: "Water", quality: "Cardinal", lord: "Moon" },
  { slug: "simha", name: "सिंह (Leo)", element: "Fire", quality: "Fixed", lord: "Sun" },
  { slug: "kanya", name: "कन्या (Virgo)", element: "Earth", quality: "Mutable", lord: "Mercury" },
  { slug: "tula", name: "तुला (Libra)", element: "Air", quality: "Cardinal", lord: "Venus" },
  { slug: "vrishchika", name: "वृश्चिक (Scorpio)", element: "Water", quality: "Fixed", lord: "Mars" },
  { slug: "dhanu", name: "धनु (Sagittarius)", element: "Fire", quality: "Mutable", lord: "Jupiter" },
  { slug: "makara", name: "मकर (Capricorn)", element: "Earth", quality: "Cardinal", lord: "Saturn" },
  { slug: "kumbha", name: "कुंभ (Aquarius)", element: "Air", quality: "Fixed", lord: "Saturn" },
  { slug: "meena", name: "मीन (Pisces)", element: "Water", quality: "Mutable", lord: "Jupiter" },
];

const ELEMENT_HINDI: Record<string, string> = {
  Fire: "अग्नि", Earth: "पृथ्वी", Air: "वायु", Water: "जल",
};

const LORD_HINDI: Record<string, string> = {
  Sun: "सूर्य", Moon: "चंद्र", Mars: "मंगल", Mercury: "बुध",
  Jupiter: "गुरु", Venus: "शुक्र", Saturn: "शनि",
};

const QUALITY_HINDI: Record<string, string> = {
  Cardinal: "चर", Fixed: "स्थिर", Mutable: "द्विस्वभाव",
};

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

  const elementScore = ELEMENT_COMPAT[s1.element][s2.element];

  const friends1 = PLANET_FRIENDS[s1.lord] || [];
  const friends2 = PLANET_FRIENDS[s2.lord] || [];
  let lordScore = 5;
  if (friends1.includes(s2.lord) && friends2.includes(s1.lord)) lordScore = 9;
  else if (friends1.includes(s2.lord) || friends2.includes(s1.lord)) lordScore = 7;
  else if (s1.lord === s2.lord) lordScore = 8;

  const distance = Math.abs(sign1Idx - sign2Idx);
  const normalizedDist = Math.min(distance, 12 - distance);
  const aspectScores: Record<number, number> = { 0: 6, 1: 5, 2: 4, 3: 7, 4: 8, 5: 9, 6: 3 };
  const aspectScore = aspectScores[normalizedDist] ?? 5;

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
  if (score >= 80) return { text: "उत्कृष्ट जोड़ी", color: "text-green-400" };
  if (score >= 65) return { text: "अच्छी अनुकूलता", color: "text-emerald-400" };
  if (score >= 50) return { text: "मध्यम अनुकूलता", color: "text-yellow-400" };
  if (score >= 35) return { text: "चुनौतीपूर्ण लेकिन विकासोन्मुख", color: "text-orange-400" };
  return { text: "सचेत प्रयास आवश्यक", color: "text-red-400" };
}

export default function HindiCompatibilityChecker() {
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
        <Link href="/" className="hover:text-purple-400">होम</Link>
        <span className="mx-2">/</span>
        <Link href="/hi/free/compatibility" className="text-purple-400">राशि अनुकूलता जांच</Link>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
        मुफ्त वैदिक राशि अनुकूलता जांच
      </h1>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
        ज्योतिष की अनुकूलता विश्लेषण के चार प्रमुख कारकों — तत्व सामंजस्य, ग्रह
        स्वामित्व मित्रता, भाव दृष्टि और गुण मिलान के आधार पर दो राशियों के बीच{" "}
        <strong className="text-gray-200">वैदिक राशि अनुकूलता</strong> की जांच करें।
      </p>

      {/* Checker */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-10">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">व्यक्ति 1 — चंद्र राशि</label>
            <select
              value={sign1}
              onChange={(e) => setSign1(Number(e.target.value))}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-purple-500"
            >
              <option value={-1}>राशि चुनें...</option>
              {SIGNS.map((s, i) => (
                <option key={s.slug} value={i}>{s.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">व्यक्ति 2 — चंद्र राशि</label>
            <select
              value={sign2}
              onChange={(e) => setSign2(Number(e.target.value))}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-purple-500"
            >
              <option value={-1}>राशि चुनें...</option>
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
          अनुकूलता जांचें
        </button>
      </div>

      {/* Results */}
      {result && verdict && (
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-purple-400 mb-2">{result.overall}%</div>
            <div className={`text-lg font-semibold ${verdict.color}`}>{verdict.text}</div>
            <p className="text-gray-500 text-sm mt-1">
              {SIGNS[sign1].name} और {SIGNS[sign2].name}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <ScoreCard
              title="तत्व सामंजस्य"
              score={result.element.score}
              max={10}
              detail={`${ELEMENT_HINDI[result.element.s1Element]} + ${ELEMENT_HINDI[result.element.s2Element]}`}
            />
            <ScoreCard
              title="ग्रह स्वामित्व"
              score={result.lordship.score}
              max={10}
              detail={`${LORD_HINDI[result.lordship.s1Lord]} + ${LORD_HINDI[result.lordship.s2Lord]}`}
            />
            <ScoreCard
              title="भाव दृष्टि"
              score={result.aspect.score}
              max={10}
              detail={`${result.aspect.houses} भाव अंतर`}
            />
            <ScoreCard
              title="गुण मिलान"
              score={result.quality.score}
              max={10}
              detail={`${QUALITY_HINDI[SIGNS[sign1].quality]} + ${QUALITY_HINDI[SIGNS[sign2].quality]}`}
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/zodiac/${SIGNS[sign1].slug}`}
              className="text-sm text-purple-400 hover:text-purple-300 text-center"
            >
              {SIGNS[sign1].name.split(" ")[0]} का पूरा विवरण पढ़ें →
            </Link>
            <Link
              href={`/zodiac/${SIGNS[sign2].slug}`}
              className="text-sm text-purple-400 hover:text-purple-300 text-center"
            >
              {SIGNS[sign2].name.split(" ")[0]} का पूरा विवरण पढ़ें →
            </Link>
          </div>
        </div>
      )}

      {/* SEO Content */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          वैदिक अनुकूलता कैसे काम करती है
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          वैदिक ज्योतिष में अनुकूलता (या कुंडली मिलान) सूर्य राशि मिलान से कहीं
          आगे जाती है। पारंपरिक प्रणाली कई कारकों का मूल्यांकन करती है जिसमें
          चंद्र राशि, जन्म नक्षत्र और ग्रह स्थितियां शामिल हैं। हमारी मुफ्त जांच
          चार प्रमुख आयामों का मूल्यांकन करती है: तत्व सामंजस्य, ग्रह स्वामित्व
          मित्रता, भाव दृष्टि और गुण मिलान।
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          <strong className="text-gray-200">तत्व सामंजस्य:</strong> पांच तत्वों (अग्नि,
          पृथ्वी, वायु, जल) में स्वाभाविक आकर्षण होता है। अग्नि और वायु राशियां
          एक-दूसरे को ऊर्जा देती हैं, जबकि पृथ्वी और जल राशियां एक-दूसरे को स्थिरता
          और पोषण प्रदान करती हैं। विरोधी तत्व (अग्नि-जल, पृथ्वी-वायु) तनाव पैदा कर
          सकते हैं लेकिन शक्तिशाली पूरक ऊर्जा भी।
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          <strong className="text-gray-200">ग्रह स्वामित्व:</strong> प्रत्येक राशि का
          एक स्वामी ग्रह होता है, और इन ग्रहों में वैदिक ज्योतिष में स्वाभाविक
          मित्रता और शत्रुता होती है। जब दो राशियों के स्वामी ग्रह मित्र होते हैं
          (जैसे सूर्य और चंद्र, या गुरु और मंगल), तो अनुकूलता स्वाभाविक रूप से
          मजबूत होती है।
        </p>
        <p className="text-gray-400 leading-relaxed">
          नक्षत्र मिलान (अष्टकूट/गुण मिलान), मांगलिक दोष जांच और दशा अनुकूलता
          सहित संपूर्ण अनुकूलता विश्लेषण के लिए AstroMedha के पूर्ण अनुभव में
          शामिल हों।
        </p>
      </section>

      {/* Language switch */}
      <div className="mt-8 text-center">
        <Link href="/free/compatibility" className="text-sm text-gray-400 hover:text-purple-300 underline">
          Switch to English version →
        </Link>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          पूर्ण कुंडली मिलान प्राप्त करें
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          हमारे पूर्ण अनुकूलता विश्लेषण में अष्टकूट गुण मिलान, मांगलिक दोष, दशा
          अनुकूलता और AI-संचालित संबंध अंतर्दृष्टि शामिल हैं।
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          पूर्ण विश्लेषण प्राप्त करें →
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
