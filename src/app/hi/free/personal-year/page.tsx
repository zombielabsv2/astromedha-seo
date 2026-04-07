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
    theme: "नई शुरुआत और स्वतंत्रता",
    keywords: ["ताजा शुरुआत", "नेतृत्व", "पहल", "आत्मनिर्भरता"],
    description: "यह नई शुरुआत और बीज बोने का वर्ष है। अंक 1 (सूर्य द्वारा शासित) की ऊर्जा नई परियोजनाएं शुरू करने, स्वतंत्रता स्थापित करने और साहसिक कदम उठाने के अवसर लाती है। यह एक नए 9-वर्षीय चक्र का पहला वर्ष है, जो इसे उन उद्यमों को शुरू करने के लिए आदर्श बनाता है जिन्हें आप आने वाले दशक में विकसित करना चाहते हैं।",
    advice: "पहल करें। वह परियोजना शुरू करें, वह कदम उठाएं, अपनी दृष्टि स्थापित करें। अतीत से चिपके न रहें — यह वर्ष आगे बढ़ने और साहस को पुरस्कृत करता है।",
  },
  2: {
    theme: "धैर्य, साझेदारी और कूटनीति",
    keywords: ["सहयोग", "रिश्ते", "धैर्य", "अंतर्ज्ञान"],
    description: "वर्ष 2 (चंद्रमा द्वारा शासित) धैर्य, साझेदारी और भावनात्मक बुद्धिमत्ता का है। वर्ष 1 में बोए गए बीजों को पोषण की आवश्यकता है। यह गठबंधन बनाने, रिश्तों को गहरा करने और ग्रहणशीलता की शांत शक्ति विकसित करने का वर्ष है। परिणामों को जबरदस्ती लाने की कोशिश उल्टा पड़ेगी।",
    advice: "प्रतिस्पर्धा नहीं, सहयोग करें। बोलने से ज्यादा सुनें। इस वर्ष प्रेम संबंध और घनिष्ठ मित्रता गहरी होती है। प्रक्रिया पर भरोसा रखें भले ही प्रगति धीमी लगे।",
  },
  3: {
    theme: "रचनात्मकता, अभिव्यक्ति और आनंद",
    keywords: ["संवाद", "रचनात्मकता", "सामाजिक जीवन", "आशावाद"],
    description: "वर्ष 3 (बृहस्पति द्वारा शासित) विस्तार, आनंद और रचनात्मक अभिव्यक्ति लाता है। सामाजिक संबंध फलते-फूलते हैं, और अवसर संवाद के माध्यम से आते हैं — लेखन, बोलना, नेटवर्किंग। यह जीवन का आनंद लेने और अपने व्यक्तित्व को चमकने देने का वर्ष है।",
    advice: "स्वतंत्र रूप से अभिव्यक्त हों। सामाजिक कार्यक्रमों में भाग लें, कला बनाएं, लिखें, प्रदर्शन करें। अपनी ऊर्जा बहुत सी परियोजनाओं में बिखेरने से बचें। अधिकतम प्रभाव के लिए अपनी रचनात्मकता को केंद्रित करें।",
  },
  4: {
    theme: "संरचना, अनुशासन और नींव",
    keywords: ["कड़ी मेहनत", "संगठन", "स्थिरता", "अनुशासन"],
    description: "वर्ष 4 (राहु द्वारा शासित) कड़ी मेहनत और अनुशासन की मांग करता है। अपने लक्ष्यों के लिए ठोस नींव बनाने का समय है। ऐसी चुनौतियों की अपेक्षा करें जो आपके संकल्प की परीक्षा लें — वे आपकी संरचना को मजबूत कर रही हैं। यह वर्ष शॉर्टकट की बजाय व्यवस्थित प्रयास को पुरस्कृत करता है।",
    advice: "अपने जीवन को व्यवस्थित करें। प्रणालियां बनाएं, टाली गई मरम्मत करें, प्रक्रियाएं बनाएं। कठिन परिश्रम से न बचें — इस वर्ष जो आप बनाते हैं वह भविष्य के विकास का मंच बनता है।",
  },
  5: {
    theme: "बदलाव, स्वतंत्रता और साहसिकता",
    keywords: ["यात्रा", "बदलाव", "स्वतंत्रता", "बहुमुखी प्रतिभा"],
    description: "वर्ष 5 (बुध द्वारा शासित) गतिशील बदलाव, यात्रा और नए अनुभव लाता है। वर्ष 4 के अनुशासन के बाद, यह वर्ष आपको मुक्त करता है। अप्रत्याशित अवसरों, दिनचर्या में बदलाव और स्वतंत्रता तथा विविधता की तीव्र इच्छा की अपेक्षा करें।",
    advice: "बदलाव का विरोध करने की बजाय उसे अपनाएं। यात्रा करें, नए कौशल सीखें, विविध लोगों से मिलें। अनुकूलनीय रहें लेकिन प्रतिबद्धताओं को लापरवाही से न छोड़ें। बुध की ऊर्जा को सीखने में लगाएं।",
  },
  6: {
    theme: "प्रेम, परिवार और जिम्मेदारी",
    keywords: ["परिवार", "प्रेम", "जिम्मेदारी", "सामंजस्य"],
    description: "वर्ष 6 (शुक्र द्वारा शासित) प्रेम, परिवार, घर और जिम्मेदारी पर केंद्रित है। रिश्ते प्राथमिकता बनते हैं — विवाह, पारिवारिक मामले, घरेलू निर्णय। आप देखभाल की भूमिकाएं ले सकते हैं या अपने रहने की जगह को सजा सकते हैं।",
    advice: "रिश्तों और गृह जीवन में निवेश करें। टाले गए पारिवारिक मामलों को संबोधित करें। अपने वातावरण में सुंदरता बनाएं। जिम्मेदारी को सहर्ष स्वीकार करें — यह गहरी संतुष्टि देती है।",
  },
  7: {
    theme: "चिंतन, आध्यात्मिकता और आंतरिक विकास",
    keywords: ["आत्मनिरीक्षण", "आध्यात्मिकता", "अध्ययन", "एकांत"],
    description: "वर्ष 7 (केतु द्वारा शासित) आपका ध्यान भीतर की ओर मोड़ता है। यह चक्र का सबसे आध्यात्मिक वर्ष है — चिंतन, अध्ययन, शोध और जीवन के रहस्यों की अपनी समझ को गहरा करने का समय। बाहरी उपलब्धियां धीमी हो सकती हैं क्योंकि आंतरिक विकास तेज होता है।",
    advice: "एकांत और शांत चिंतन की तलाश करें। आध्यात्मिक या दार्शनिक विषयों का अध्ययन करें। भौतिक प्रगति को जबरदस्ती न करें — इस वर्ष का खजाना ज्ञान और आत्म-ज्ञान है।",
  },
  8: {
    theme: "शक्ति, समृद्धि और भौतिक महारत",
    keywords: ["व्यापार", "वित्त", "अधिकार", "उपलब्धि"],
    description: "वर्ष 8 (शनि द्वारा शासित) कर्म फल लाता है — सकारात्मक और चुनौतीपूर्ण दोनों। यह वित्तीय और करियर उपलब्धि का सबसे शक्तिशाली वर्ष है। पिछले प्रयासों का फल मिलता है, और अधिकारी व्यक्ति महत्वपूर्ण भूमिका निभा सकते हैं। पिछले वर्षों में जो बोया था, अब काटें।",
    advice: "साहसिक वित्तीय और करियर कदम उठाएं। जो आपका हक है उसके लिए बातचीत करें। कर्म पाठों पर ध्यान दें — सत्यनिष्ठा पहले से कहीं अधिक महत्वपूर्ण है। बड़ी रकम आ-जा सकती है, इसलिए धन का बुद्धिमानी से प्रबंधन करें।",
  },
  9: {
    theme: "पूर्णता, विमोचन और परिवर्तन",
    keywords: ["समापन", "त्याग", "करुणा", "परिवर्तन"],
    description: "वर्ष 9 (मंगल द्वारा शासित) 9-वर्षीय चक्र को बंद करता है। यह पूर्णता, विमोचन और परिवर्तन का वर्ष है। जो रिश्ते, परियोजनाएं या चरण अब आपकी सेवा नहीं करते, वे स्वाभाविक रूप से समाप्त होंगे। यह सफाई अगले वर्ष शुरू होने वाले नए चक्र के लिए जगह बनाती है।",
    advice: "शालीनता से जाने दें। बड़े नए उद्यम शुरू न करें — बल्कि जो चल रहा है उसे पूरा करें। उदारता और करुणा का अभ्यास करें। आगे आने वाले वर्ष 1 की ताजा शुरुआत की तैयारी करें।",
  },
};

export default function HindiPersonalYearCalculator() {
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
        <Link href="/" className="hover:text-purple-400">होम</Link>
        <span className="mx-2">/</span>
        <Link href="/hi/free/personal-year" className="text-purple-400">व्यक्तिगत वर्ष कैलकुलेटर</Link>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
        मुफ्त व्यक्तिगत वर्ष अंक कैलकुलेटर
      </h1>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
        आपका <strong className="text-gray-200">व्यक्तिगत वर्ष अंक</strong> आपके वर्तमान
        वर्ष का विषय, ऊर्जा और अवसर प्रकट करता है।{" "}
        <strong className="text-gray-200">चाल्डीयन अंक ज्योतिष</strong> का उपयोग करके
        इसकी गणना की जाती है, जो आपके जन्म दिन, जन्म माह और वर्तमान कैलेंडर वर्ष को
        एक ऐसे अंक में बदलता है जो एक विशिष्ट ग्रह कंपन से जुड़ा होता है।
      </p>

      {/* Calculator */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-10">
        <div className="max-w-sm">
          <label className="block text-sm text-gray-400 mb-2">जन्म तिथि</label>
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
          मेरा व्यक्तिगत वर्ष जानें
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
                  व्यक्तिगत वर्ष {result.year} ({result.currentYear})
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
              <h3 className="text-sm font-semibold text-purple-300 mb-2">इस वर्ष के लिए मार्गदर्शन</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{meaning.advice}</p>
            </div>

            <Link
              href={`/hi/numerology/${result.year}`}
              className="inline-block mt-4 text-sm text-purple-400 hover:text-purple-300"
            >
              अंक {result.year} का पूरा विश्लेषण पढ़ें →
            </Link>
          </div>
        </div>
      )}

      {/* SEO Content */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          व्यक्तिगत वर्ष अंक को समझें
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          चाल्डीयन अंक ज्योतिष में जीवन 9-वर्षीय चक्रों में चलता है। चक्र के भीतर
          प्रत्येक वर्ष एक विशिष्ट अंक (1 से 9) की ऊर्जा वहन करता है, और प्रत्येक
          अंक एक ग्रह द्वारा शासित होता है। आपका व्यक्तिगत वर्ष अंक आपके वर्तमान
          वर्ष का व्यापक विषय बताता है और आपको प्रचलित ब्रह्मांडीय ऊर्जा के साथ
          अपने कार्यों को संरेखित करने में मदद करता है।
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          गणना सरल है: अपने जन्म दिन, जन्म माह और वर्तमान कैलेंडर वर्ष प्रत्येक
          को एकल अंक में घटाएं, फिर उन्हें जोड़ें और पुनः घटाएं। उदाहरण: 23 जुलाई
          को जन्म, वर्तमान वर्ष 2026 — दिन = 2+3 = 5, माह = 7, वर्ष = 2+0+2+6 = 10
          = 1। व्यक्तिगत वर्ष = 5+7+1 = 13 = 1+3 = 4 (संरचना का वर्ष)।
        </p>

        <h2 className="text-2xl font-bold text-gray-100 mb-4 mt-8">
          9-वर्षीय चक्र
        </h2>
        <div className="space-y-3">
          {Object.entries(YEAR_MEANINGS).map(([num, info]) => (
            <div key={num} className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-100 mb-1">
                वर्ष {num}: {info.theme}
              </h3>
              <p className="text-sm text-gray-400">{info.advice}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Language switch */}
      <div className="mt-8 text-center">
        <Link href="/free/personal-year" className="text-sm text-gray-400 hover:text-purple-300 underline">
          Switch to English version →
        </Link>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          क्या आप महीने-दर-महीने मार्गदर्शन चाहते हैं?
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          AstroMedha आपके व्यक्तिगत वर्ष को वैदिक दशा अवधि और दैनिक ग्रह गोचर
          के साथ जोड़कर सटीक, कार्रवाई योग्य दैनिक मार्गदर्शन प्रदान करता है।
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          दैनिक मार्गदर्शन प्राप्त करें →
        </Link>
      </div>
    </main>
  );
}
