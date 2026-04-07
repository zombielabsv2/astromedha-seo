import Link from "next/link";
import type { Metadata } from "next";
import { zodiacSigns, getZodiacBySlug } from "@/data/zodiac";
import { hindiZodiacSigns, getHindiZodiac } from "@/data/zodiac-hi";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return hindiZodiacSigns.map((sign) => ({ sign: sign.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ sign: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sign } = await params;
  const hi = getHindiZodiac(sign);
  if (!hi) return {};
  return {
    title: hi.title,
    description: `${hi.hindiName} राशि की सम्पूर्ण जानकारी -- व्यक्तित्व, करियर, प्रेम, स्वास्थ्य, शक्तियां और उपाय। स्वामी ग्रह ${hi.rulingPlanet}, तत्व ${hi.element}।`,
    alternates: { canonical: `https://astromedha.in/hi/zodiac/${sign}` },
    openGraph: {
      title: `${hi.hindiName} राशि -- वैदिक ज्योतिष`,
      description: hi.overview,
      type: "article",
      locale: "hi_IN",
    },
  };
}

export default async function HindiZodiacPage({ params }: Props) {
  const { sign } = await params;
  const hi = getHindiZodiac(sign);
  const en = getZodiacBySlug(sign);
  if (!hi || !en) notFound();

  const otherSigns = hindiZodiacSigns.filter((s) => s.slug !== sign);
  const compatibleData = zodiacSigns
    .filter((s) => en.compatibleSigns.includes(s.slug))
    .map((s) => {
      const hiData = getHindiZodiac(s.slug);
      return { ...s, hindiName: hiData?.hindiName || s.name };
    });

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-400">होम</Link>
        <span className="mx-2">/</span>
        <Link href="/#zodiac" className="hover:text-purple-400">राशिफल</Link>
        <span className="mx-2">/</span>
        <span className="text-purple-400">{hi.hindiName}</span>
      </nav>

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "होम", item: "https://astromedha.in" },
              { "@type": "ListItem", position: 2, name: "राशिफल", item: "https://astromedha.in/#zodiac" },
              { "@type": "ListItem", position: 3, name: hi.hindiName, item: `https://astromedha.in/hi/zodiac/${sign}` },
            ],
          }),
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="text-5xl">{en.symbol}</div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
            {hi.hindiName} राशि
          </h1>
          <p className="text-gray-400 mt-1">
            {hi.element} तत्व | {hi.quality} | स्वामी ग्रह: {hi.rulingPlanet}
          </p>
        </div>
      </div>

      {/* Language toggle */}
      <div className="flex gap-2 mb-8">
        <Link
          href={`/zodiac/${sign}`}
          className="text-xs px-3 py-1 border border-gray-700 rounded-full text-gray-400 hover:text-purple-300 hover:border-purple-500 transition-colors"
        >
          English Version
        </Link>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {[
          { label: "तत्व", value: hi.element },
          { label: "गुण", value: hi.quality },
          { label: "स्वामी ग्रह", value: hi.rulingPlanet },
          { label: "तिथि सीमा", value: en.dateRange },
          { label: "शुभ रंग", value: en.luckyColors.join(", ") },
          { label: "शुभ अंक", value: en.luckyNumbers.join(", ") },
          { label: "शुभ दिन", value: en.luckyDay },
          { label: "शरीर अंग", value: en.bodyPart },
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
          {hi.hindiName} राशि -- वैदिक ज्योतिष में परिचय
        </h2>
        <p className="text-gray-300 leading-relaxed">{hi.overview}</p>
      </section>

      {/* Personality */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          {hi.hindiName} राशि का व्यक्तित्व
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">{hi.personality}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-green-400 mb-2">शक्तियां</h3>
            <ul className="space-y-1">
              {hi.strengths.map((s) => (
                <li key={s} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="text-green-400 text-xs">✓</span> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-orange-400 mb-2">विकास के क्षेत्र</h3>
            <ul className="space-y-1">
              {hi.weaknesses.map((w) => (
                <li key={w} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="text-orange-400 text-xs">○</span> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          {hi.hindiName} राशि -- करियर और व्यवसाय
        </h2>
        <p className="text-gray-300 leading-relaxed">{hi.career}</p>
      </section>

      {/* Love */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          {hi.hindiName} राशि -- प्रेम और संबंध
        </h2>
        <p className="text-gray-300 leading-relaxed">{hi.love}</p>
      </section>

      {/* Health */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          {hi.hindiName} राशि -- स्वास्थ्य
        </h2>
        <p className="text-gray-300 leading-relaxed">{hi.health}</p>
      </section>

      {/* Deity & Mantra */}
      <section className="mb-10">
        <div className="bg-purple-950/30 border border-purple-800/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-purple-300 mb-3">आध्यात्मिक मार्गदर्शन</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">अधिष्ठाता देवता</div>
              <div className="text-gray-200 font-medium mt-1">{en.deity}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">अनुशंसित मंत्र</div>
              <div className="text-gray-200 font-medium mt-1">{en.mantra}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Signs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          सर्वाधिक अनुकूल राशियां
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {compatibleData.map((cs) => (
            <Link
              key={cs.slug}
              href={`/hi/zodiac/${cs.slug}`}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-purple-600/50 transition-all group"
            >
              <div className="text-2xl mb-1">{cs.symbol}</div>
              <div className="text-sm font-medium text-gray-200 group-hover:text-purple-300">{cs.hindiName}</div>
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-3">
          <Link href="/free/compatibility" className="text-purple-400 hover:text-purple-300">
            निःशुल्क अनुकूलता जांच करें →
          </Link>
        </p>
      </section>

      {/* Explore Other Signs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          अन्य राशियां देखें
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {otherSigns.map((s) => {
            const enSign = getZodiacBySlug(s.slug);
            return (
              <Link
                key={s.slug}
                href={`/hi/zodiac/${s.slug}`}
                className="bg-gray-900/30 border border-gray-800 rounded-lg p-3 text-center hover:border-purple-600/50 transition-all group"
              >
                <div className="text-xl mb-1">{enSign?.symbol}</div>
                <div className="text-xs text-gray-400 group-hover:text-purple-300">{s.hindiName}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Related Links */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-100 mb-4">संबंधित पृष्ठ</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/free/numerology" className="text-sm text-purple-400 hover:text-purple-300 underline">
            निःशुल्क अंकशास्त्र गणना
          </Link>
          <Link href="/free/compatibility" className="text-sm text-purple-400 hover:text-purple-300 underline">
            अनुकूलता जांच
          </Link>
          <Link href={`/hi/dasha/${en.rulingPlanetSanskrit.toLowerCase().split("/")[0]}`} className="text-sm text-purple-400 hover:text-purple-300 underline">
            {hi.rulingPlanet} महादशा
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          अपना व्यक्तिगत {hi.hindiName} राशि मार्गदर्शन प्राप्त करें
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          आपकी सूर्य राशि केवल शुरुआत है। अपनी सम्पूर्ण वैदिक कुंडली, दशा काल
          और अंकशास्त्र प्रोफ़ाइल पर आधारित दैनिक मार्गदर्शन के लिए अपना जन्म
          विवरण दर्ज करें।
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          सम्पूर्ण मार्गदर्शन प्राप्त करें →
        </Link>
      </div>

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${hi.hindiName} राशि -- सम्पूर्ण वैदिक ज्योतिष विश्लेषण`,
            description: hi.overview,
            inLanguage: "hi",
            author: { "@type": "Organization", name: "AstroMedha" },
            publisher: { "@type": "Organization", name: "AstroMedha", url: "https://astromedha.in" },
            mainEntityOfPage: `https://astromedha.in/hi/zodiac/${sign}`,
          }),
        }}
      />
    </main>
  );
}
