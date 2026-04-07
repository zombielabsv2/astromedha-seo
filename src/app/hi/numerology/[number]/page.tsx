import Link from "next/link";
import type { Metadata } from "next";
import { numerologyNumbers, getNumerologyByNumber } from "@/data/numerology";
import { hindiNumerologyNumbers, getHindiNumerology } from "@/data/numerology-hi";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return hindiNumerologyNumbers.map((n) => ({ number: n.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ number: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { number } = await params;
  const hi = getHindiNumerology(Number(number));
  if (!hi) return {};
  return {
    title: `${hi.hindiName} — चाल्डीयन अंक ज्योतिष में व्यक्तित्व, करियर और प्रेम`,
    description: `चाल्डीयन अंक ज्योतिष में ${hi.hindiName} की संपूर्ण जानकारी। स्वामी ग्रह ${hi.rulingPlanet}। व्यक्तित्व, करियर, प्रेम अनुकूलता, स्वास्थ्य, चुनौतियां और प्रसिद्ध हस्तियां।`,
    alternates: { canonical: `https://astromedha.in/hi/numerology/${number}` },
    openGraph: {
      title: `${hi.hindiName} — चाल्डीयन अंक ज्योतिष गाइड`,
      description: hi.overview,
      type: "article",
    },
  };
}

export default async function HindiNumerologyPage({ params }: Props) {
  const { number } = await params;
  const num = Number(number);
  const hi = getHindiNumerology(num);
  const en = getNumerologyByNumber(num);
  if (!hi || !en) notFound();

  const others = hindiNumerologyNumbers.filter((n) => n.number !== num);
  const compatible = numerologyNumbers.filter((n) =>
    en.compatibleNumbers.includes(n.number)
  );

  const HINDI_FACTS_LABELS: Record<string, string> = {
    "स्वामी ग्रह": hi.rulingPlanet,
    "तत्व": en.element === "Fire" ? "अग्नि" : en.element === "Water" ? "जल" : en.element === "Earth" ? "पृथ्वी" : "वायु",
    "रंग": en.color,
    "शुभ दिन": en.day === "Sunday" ? "रविवार" : en.day === "Monday" ? "सोमवार" : en.day === "Tuesday" ? "मंगलवार" : en.day === "Wednesday" ? "बुधवार" : en.day === "Thursday" ? "गुरुवार" : en.day === "Friday" ? "शुक्रवार" : "शनिवार",
    "रत्न": en.gemstone,
    "टैरो कार्ड": en.tarotCard,
    "अनुकूल अंक": en.compatibleNumbers.join(", "),
    "मंत्र": en.mantra,
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-400">होम</Link>
        <span className="mx-2">/</span>
        <Link href="/#numerology" className="hover:text-purple-400">अंक ज्योतिष</Link>
        <span className="mx-2">/</span>
        <span className="text-purple-400">{hi.hindiName}</span>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "होम", item: "https://astromedha.in" },
              { "@type": "ListItem", position: 2, name: "अंक ज्योतिष", item: "https://astromedha.in/#numerology" },
              { "@type": "ListItem", position: 3, name: hi.hindiName, item: `https://astromedha.in/hi/numerology/${number}` },
            ],
          }),
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-5 mb-8">
        <div className="w-20 h-20 flex-shrink-0 rounded-full bg-purple-600/20 border-2 border-purple-500/30 flex items-center justify-center">
          <span className="text-4xl font-bold text-purple-400">{hi.number}</span>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
            {hi.hindiName}
          </h1>
          <p className="text-gray-400 mt-1">
            स्वामी ग्रह: {hi.rulingPlanet} ({en.rulingPlanet}) — {en.element === "Fire" ? "अग्नि" : en.element === "Water" ? "जल" : en.element === "Earth" ? "पृथ्वी" : "वायु"} तत्व
          </p>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {Object.entries(HINDI_FACTS_LABELS).map(([label, value]) => (
          <div key={label} className="bg-gray-900/50 border border-gray-800 rounded-lg p-3">
            <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
            <div className="text-sm font-medium text-gray-200 mt-1">{value}</div>
          </div>
        ))}
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap gap-2 mb-10">
        {hi.keywords.map((k) => (
          <span key={k} className="px-3 py-1 bg-purple-600/15 border border-purple-500/20 rounded-full text-xs text-purple-300">
            {k}
          </span>
        ))}
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          चाल्डीयन अंक ज्योतिष में अंक {hi.number}
        </h2>
        <p className="text-gray-300 leading-relaxed">{hi.overview}</p>
      </section>

      {/* Personality */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">व्यक्तित्व लक्षण</h2>
        <p className="text-gray-300 leading-relaxed">{hi.personality}</p>
      </section>

      {/* Career */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">करियर और पेशेवर जीवन</h2>
        <p className="text-gray-300 leading-relaxed">{hi.career}</p>
      </section>

      {/* Love */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">प्रेम और रिश्ते</h2>
        <p className="text-gray-300 leading-relaxed">{hi.love}</p>
      </section>

      {/* Health */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">स्वास्थ्य प्रवृत्तियां</h2>
        <p className="text-gray-300 leading-relaxed">{hi.health}</p>
      </section>

      {/* Challenges */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">चुनौतियां और विकास क्षेत्र</h2>
        <p className="text-gray-300 leading-relaxed">{hi.challenges}</p>
      </section>

      {/* Personal Year */}
      <section className="mb-10">
        <div className="bg-purple-950/30 border border-purple-800/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-purple-300 mb-3">
            जब {hi.number} आपका व्यक्तिगत वर्ष हो
          </h2>
          <p className="text-gray-300 leading-relaxed">{hi.yearMeaning}</p>
          <Link href="/hi/free/personal-year" className="inline-block mt-3 text-sm text-purple-400 hover:text-purple-300">
            अपना व्यक्तिगत वर्ष जानें →
          </Link>
        </div>
      </section>

      {/* Compatible Numbers */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">सबसे अनुकूल अंक</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {compatible.map((c) => {
            const cHi = getHindiNumerology(c.number);
            return (
              <Link
                key={c.number}
                href={`/hi/numerology/${c.number}`}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-purple-600/50 transition-all group"
              >
                <div className="text-2xl font-bold text-purple-400">{c.number}</div>
                <div className="text-xs text-gray-500 group-hover:text-purple-300">{cHi?.rulingPlanet || c.rulingPlanet}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Famous Personalities */}
      {en.famousPersonalities.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">प्रसिद्ध अंक {hi.number} हस्तियां</h2>
          <div className="flex flex-wrap gap-2">
            {en.famousPersonalities.map((p) => (
              <span key={p} className="px-3 py-1.5 bg-gray-900/50 border border-gray-800 rounded-full text-sm text-gray-300">
                {p}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Explore All Numbers */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">सभी अंक देखें</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
          {others.map((n) => (
            <Link
              key={n.number}
              href={`/hi/numerology/${n.number}`}
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
        <Link href="/hi/free/numerology" className="text-sm text-purple-400 hover:text-purple-300 underline">
          मुफ्त अंक ज्योतिष कैलकुलेटर
        </Link>
        <Link href="/hi/free/personal-year" className="text-sm text-purple-400 hover:text-purple-300 underline">
          व्यक्तिगत वर्ष कैलकुलेटर
        </Link>
        <Link href="/hi/free/compatibility" className="text-sm text-purple-400 hover:text-purple-300 underline">
          राशि अनुकूलता जांच
        </Link>
        <Link href={`/numerology/${number}`} className="text-sm text-gray-400 hover:text-purple-300 underline">
          Read in English →
        </Link>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          अपना संपूर्ण अंक ज्योतिष प्रोफाइल खोलें
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          चाल्डीयन अंक ज्योतिष को वैदिक ज्योतिष और विमशोत्तरी दशा के साथ मिलाकर
          AI-संचालित दैनिक मार्गदर्शन प्राप्त करें।
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          पूर्ण मार्गदर्शन प्राप्त करें →
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${hi.hindiName} — संपूर्ण चाल्डीयन अंक ज्योतिष गाइड`,
            description: hi.overview,
            inLanguage: "hi",
            author: { "@type": "Organization", name: "AstroMedha" },
            publisher: { "@type": "Organization", name: "AstroMedha", url: "https://astromedha.in" },
            mainEntityOfPage: `https://astromedha.in/hi/numerology/${number}`,
          }),
        }}
      />
    </main>
  );
}
