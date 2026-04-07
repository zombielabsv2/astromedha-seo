import Link from "next/link";
import type { Metadata } from "next";
import { dashas, getDashaBySlug } from "@/data/dashas";
import { hindiDashas, getHindiDasha } from "@/data/dashas-hi";
import { notFound } from "next/navigation";

const planetHindiNames: Record<string, string> = {
  ketu: "केतु",
  venus: "शुक्र",
  sun: "सूर्य",
  moon: "चंद्र",
  mars: "मंगल",
  rahu: "राहु",
  jupiter: "बृहस्पति",
  saturn: "शनि",
  mercury: "बुध",
};

export function generateStaticParams() {
  return hindiDashas.map((d) => ({ planet: d.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ planet: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { planet } = await params;
  const hi = getHindiDasha(planet);
  if (!hi) return {};
  return {
    title: hi.title,
    description: `${hi.hindiName} महादशा की सम्पूर्ण जानकारी -- प्रभाव, करियर, संबंध, स्वास्थ्य, उपाय और सभी 9 अंतर्दशा काल। विमशोत्तरी दशा पद्धति।`,
    alternates: { canonical: `https://astromedha.in/hi/dasha/${planet}` },
    openGraph: {
      title: `${hi.hindiName} महादशा -- वैदिक ज्योतिष`,
      description: hi.overview,
      type: "article",
      locale: "hi_IN",
    },
  };
}

export default async function HindiDashaPage({ params }: Props) {
  const { planet } = await params;
  const hi = getHindiDasha(planet);
  const en = getDashaBySlug(planet);
  if (!hi || !en) notFound();

  const otherDashas = hindiDashas.filter((d) => d.slug !== planet);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-400">होम</Link>
        <span className="mx-2">/</span>
        <Link href="/#dasha" className="hover:text-purple-400">विमशोत्तरी दशा</Link>
        <span className="mx-2">/</span>
        <span className="text-purple-400">{hi.hindiName} महादशा</span>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "होम", item: "https://astromedha.in" },
              { "@type": "ListItem", position: 2, name: "विमशोत्तरी दशा", item: "https://astromedha.in/#dasha" },
              { "@type": "ListItem", position: 3, name: `${hi.hindiName} महादशा`, item: `https://astromedha.in/hi/dasha/${planet}` },
            ],
          }),
        }}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-purple-600/15 border border-purple-500/20 rounded-full text-xs text-purple-300 mb-3">
          {en.nature === "Benefic" ? "शुभ" : en.nature === "Malefic" ? "पापी" : en.nature} ग्रह | विमशोत्तरी क्रम #{en.order}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
          {hi.hindiName} महादशा
        </h1>
        <p className="text-gray-400">
          {en.planetSanskrit} | अवधि: {en.duration} वर्ष
        </p>
      </div>

      {/* Language toggle */}
      <div className="flex gap-2 mb-8">
        <Link
          href={`/dasha/${planet}`}
          className="text-xs px-3 py-1 border border-gray-700 rounded-full text-gray-400 hover:text-purple-300 hover:border-purple-500 transition-colors"
        >
          English Version
        </Link>
      </div>

      {/* Signifies (from English data) */}
      <div className="flex flex-wrap gap-2 mb-10">
        {en.signifies.map((s) => (
          <span key={s} className="px-3 py-1 bg-gray-900/50 border border-gray-800 rounded-full text-xs text-gray-300">
            {s}
          </span>
        ))}
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          {hi.hindiName} महादशा को समझें
        </h2>
        <p className="text-gray-300 leading-relaxed">{hi.overview}</p>
      </section>

      {/* Effects */}
      <section className="mb-10">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-green-400 mb-3">शुभ प्रभाव</h3>
            <p className="text-xs text-gray-500 mb-3">जब {hi.hindiName} जन्मकुंडली में बलवान हो</p>
            <ul className="space-y-2">
              {hi.positiveEffects.map((e) => (
                <li key={e} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span> {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-orange-400 mb-3">चुनौतीपूर्ण प्रभाव</h3>
            <p className="text-xs text-gray-500 mb-3">जब {hi.hindiName} पीड़ित या कमजोर हो</p>
            <ul className="space-y-2">
              {hi.negativeEffects.map((e) => (
                <li key={e} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">○</span> {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Life Areas */}
      <section className="mb-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-4">{hi.hindiName} महादशा में करियर</h2>
          <p className="text-gray-300 leading-relaxed">{hi.career}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-4">{hi.hindiName} महादशा में संबंध</h2>
          <p className="text-gray-300 leading-relaxed">{hi.relationships}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-4">{hi.hindiName} महादशा में स्वास्थ्य</h2>
          <p className="text-gray-300 leading-relaxed">{hi.health}</p>
        </div>
      </section>

      {/* Remedies */}
      <section className="mb-10">
        <div className="bg-purple-950/30 border border-purple-800/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-purple-300 mb-4">{hi.hindiName} महादशा के उपाय</h2>
          <ul className="space-y-2">
            {hi.remedies.map((r) => (
              <li key={r} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">•</span> {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Antardasha Periods (using English data with Hindi headers) */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">
          {hi.hindiName} महादशा -- सभी 9 अंतर्दशा काल
        </h2>
        <div className="space-y-4">
          {en.antardasha.map((ad) => {
            const adHindiName = planetHindiNames[ad.slug] || ad.planet;
            return (
              <div key={ad.slug} className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-100">
                    {hi.hindiName}/{adHindiName} अंतर्दशा
                  </h3>
                  <span className="text-xs text-gray-500">{ad.duration}</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-3">{ad.overview}</p>
                <div className="flex flex-wrap gap-2">
                  {ad.keyThemes.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-purple-600/10 border border-purple-500/15 rounded text-xs text-purple-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dasha Sequence */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-100 mb-4">
          विमशोत्तरी दशा क्रम
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
          {dashas.map((d) => {
            const dHindiName = planetHindiNames[d.slug] || d.planet;
            return (
              <Link
                key={d.slug}
                href={`/hi/dasha/${d.slug}`}
                className={`border rounded-xl p-3 text-center transition-all ${
                  d.slug === planet
                    ? "bg-purple-600/20 border-purple-500/40"
                    : "bg-gray-900/30 border-gray-800 hover:border-purple-600/50"
                }`}
              >
                <div className={`text-sm font-semibold ${d.slug === planet ? "text-purple-300" : "text-gray-400"}`}>
                  {dHindiName}
                </div>
                <div className="text-xs text-gray-500">{d.duration} वर्ष</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Related */}
      <section className="mb-10 flex flex-wrap gap-3">
        <Link href="/free/numerology" className="text-sm text-purple-400 hover:text-purple-300 underline">
          अंकशास्त्र गणना
        </Link>
        {otherDashas.slice(0, 3).map((d) => (
          <Link key={d.slug} href={`/hi/dasha/${d.slug}`} className="text-sm text-purple-400 hover:text-purple-300 underline">
            {d.hindiName} महादशा
          </Link>
        ))}
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          अपना वर्तमान दशा काल जानें
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          अपना जन्म विवरण दर्ज करें और अपनी सटीक महादशा, अंतर्दशा और
          प्रत्यंतर्दशा अवधि की AI-संचालित व्याख्या प्राप्त करें।
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          मेरी दशा गणना करें →
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${hi.hindiName} महादशा -- सम्पूर्ण विमशोत्तरी दशा मार्गदर्शिका`,
            description: hi.overview,
            inLanguage: "hi",
            author: { "@type": "Organization", name: "AstroMedha" },
            publisher: { "@type": "Organization", name: "AstroMedha", url: "https://astromedha.in" },
            mainEntityOfPage: `https://astromedha.in/hi/dasha/${planet}`,
          }),
        }}
      />
    </main>
  );
}
