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
  1: { title: "नेता", planet: "सूर्य", traits: "स्वतंत्र, महत्वाकांक्षी, अग्रणी, सृजनात्मक। जन्मजात नेता जो अपना रास्ता स्वयं बनाते हैं।", career: "उद्यमिता, प्रबंधन, नवाचार, राजनीति" },
  2: { title: "कूटनीतिज्ञ", planet: "चंद्र", traits: "सहजज्ञ, सहयोगी, संवेदनशील, संतुलित। स्वाभाविक शांतिदूत जो साझेदारी में उत्कृष्ट हैं।", career: "परामर्श, कूटनीति, कला, स्वास्थ्य सेवा" },
  3: { title: "सृजनकर्ता", planet: "गुरु", traits: "अभिव्यक्तिशील, आशावादी, सामाजिक, रचनात्मक। चुंबकीय व्यक्तित्व वाले स्वाभाविक मनोरंजनकर्ता।", career: "लेखन, शिक्षण, मीडिया, प्रदर्शन कला" },
  4: { title: "विद्रोही", planet: "राहु", traits: "अपरंपरागत, नवप्रवर्तक, तीव्र, कर्मिक। स्थायी संरचनाएं बनाने वाले स्वाभाविक संगठनकर्ता।", career: "इंजीनियरिंग, प्रौद्योगिकी, वित्त, अनुसंधान" },
  5: { title: "संवादक", planet: "बुध", traits: "बहुमुखी, साहसी, जिज्ञासु, गतिशील। परिवर्तन पर फलने-फूलने वाले स्वाभाविक संवादक।", career: "यात्रा, बिक्री, पत्रकारिता, प्रौद्योगिकी" },
  6: { title: "पालनकर्ता", planet: "शुक्र", traits: "प्रेमी, जिम्मेदार, सामंजस्यपूर्ण, कलात्मक। सुंदरता बनाने वाले स्वाभाविक देखभालकर्ता।", career: "डिजाइन, आतिथ्य, चिकित्सा, परामर्श" },
  7: { title: "साधक", planet: "केतु", traits: "विश्लेषणात्मक, आध्यात्मिक, अंतर्मुखी, ज्ञानी। गहरे सत्य की खोज करने वाले स्वाभाविक शोधकर्ता।", career: "अनुसंधान, आध्यात्मिकता, विज्ञान, दर्शन" },
  8: { title: "शक्तिशाली", planet: "शनि", traits: "महत्वाकांक्षी, आधिकारिक, रणनीतिक, भौतिक महारत। साम्राज्य बनाने वाले स्वाभाविक कार्यकारी।", career: "व्यापार, कानून, बैंकिंग, रियल एस्टेट" },
  9: { title: "मानवतावादी", planet: "मंगल", traits: "करुणाशील, उदार, साहसी, दूरदर्शी। उद्देश्य के लिए लड़ने वाले स्वाभाविक योद्धा।", career: "समाज सेवा, सैन्य, चिकित्सा, परोपकार" },
};

export default function HindiNumerologyCalculator() {
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
        <Link href="/" className="hover:text-purple-400">होम</Link>
        <span className="mx-2">/</span>
        <Link href="/hi/free/numerology" className="text-purple-400">मुफ्त अंक ज्योतिष कैलकुलेटर</Link>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
        मुफ्त चाल्डीयन अंक ज्योतिष कैलकुलेटर
      </h1>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
        प्राचीन बेबीलोन की सबसे पुरानी और सबसे सटीक अंक ज्योतिष प्रणाली — चाल्डीयन
        अंक ज्योतिष का उपयोग करके अपना{" "}
        <strong className="text-gray-200">मूलांक (जीवन पथ अंक)</strong>,{" "}
        <strong className="text-gray-200">भाग्यांक</strong>,{" "}
        <strong className="text-gray-200">आत्मांक</strong> और{" "}
        <strong className="text-gray-200">व्यक्तिगत वर्ष अंक</strong> जानें।
      </p>

      {/* Calculator */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-10">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">पूरा नाम (जैसा आमतौर पर उपयोग होता है)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="अपना पूरा नाम लिखें"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">जन्म तिथि</label>
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
          मेरे अंक निकालें
        </button>
      </div>

      {/* Results */}
      {results && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">आपका अंक ज्योतिष प्रोफाइल</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "मूलांक (जीवन पथ अंक)", value: results.lifePath, desc: "आपके जीवन का उद्देश्य और मूल पहचान" },
              { label: "भाग्यांक", value: results.destiny, desc: "आपकी प्रतिभा और जीवन में आपका लक्ष्य" },
              { label: "आत्मांक", value: results.soulUrge, desc: "आपकी आंतरिक इच्छाएं और गहरी प्रेरणाएं" },
              { label: "व्यक्तिगत वर्ष (" + new Date().getFullYear() + ")", value: results.personalYear, desc: "आपके वर्तमान वर्ष का विषय और ऊर्जा" },
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
                          <p className="text-sm text-purple-300 font-medium">{meaning.title} — स्वामी ग्रह: {meaning.planet}</p>
                          <p className="text-sm text-gray-400 mt-1">{meaning.traits}</p>
                        </>
                      )}
                    </div>
                  </div>
                  <Link
                    href={`/hi/numerology/${r.value}`}
                    className="inline-block mt-3 text-sm text-purple-400 hover:text-purple-300"
                  >
                    अंक {r.value} का पूरा विश्लेषण पढ़ें →
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
          चाल्डीयन अंक ज्योतिष क्या है?
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          चाल्डीयन अंक ज्योतिष सबसे प्राचीन ज्ञात अंक ज्योतिष प्रणाली है, जिसे 4,000
          वर्ष से अधिक पहले प्राचीन बेबीलोन के चाल्डीयन लोगों ने विकसित किया था। अधिक
          लोकप्रिय पाइथागोरियन प्रणाली के विपरीत, चाल्डीयन अंक ज्योतिष अक्षरों को उनकी
          कंपन आवृत्ति के आधार पर संख्या मान (1-8) प्रदान करता है, न कि वर्णमाला में
          उनकी स्थिति के आधार पर। अंक 9 को पवित्र माना जाता है और किसी भी अक्षर को
          नहीं दिया जाता।
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          चाल्डीयन प्रणाली में प्रत्येक अंक अपने स्वामी ग्रह की ऊर्जा वहन करता है: 1
          (सूर्य), 2 (चंद्र), 3 (गुरु), 4 (राहु), 5 (बुध), 6 (शुक्र), 7 (केतु), 8
          (शनि), और 9 (मंगल)। यह ग्रह संबंध चाल्डीयन अंक ज्योतिष को सीधे वैदिक
          ज्योतिष से जोड़ता है, जिससे ये दोनों शक्तिशाली सहयोगी प्रणालियां बन जाती हैं।
        </p>

        <h2 className="text-2xl font-bold text-gray-100 mb-4 mt-8">
          मूलांक (जीवन पथ अंक) कैसे निकालें
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          आपका मूलांक आपकी जन्म तिथि से निकाला जाता है। प्रत्येक घटक (दिन, माह, वर्ष)
          को एकल अंक में घटाया जाता है, फिर तीनों अंकों को जोड़कर पुनः एकल अंक में
          घटाया जाता है। उदाहरण: 15 मार्च 1990 — दिन = 1+5 = 6, माह = 3, वर्ष =
          1+9+9+0 = 19 = 1+0 = 1। मूलांक = 6+3+1 = 10 = 1+0 = 1।
        </p>

        <h2 className="text-2xl font-bold text-gray-100 mb-4 mt-8">
          प्रत्येक अंक का गहन अध्ययन करें
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3 not-prose">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <Link
              key={n}
              href={`/hi/numerology/${n}`}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 text-center hover:border-purple-600/50 transition-all"
            >
              <div className="text-xl font-bold text-purple-400">{n}</div>
              <div className="text-xs text-gray-500">{NUMBER_MEANINGS[n].title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Language switch */}
      <div className="mt-8 text-center">
        <Link href="/free/numerology" className="text-sm text-gray-400 hover:text-purple-300 underline">
          Switch to English version →
        </Link>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          क्या आप दैनिक व्यक्तिगत मार्गदर्शन चाहते हैं?
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          अपने अंक ज्योतिष को वैदिक ज्योतिष और विमशोत्तरी दशा के साथ जोड़कर
          AI-संचालित दैनिक अंतर्दृष्टि प्राप्त करें।
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          पूर्ण मार्गदर्शन प्राप्त करें →
        </Link>
      </div>
    </main>
  );
}
