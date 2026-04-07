import Link from "next/link";
import type { Metadata } from "next";
import { dashas, getDashaBySlug } from "@/data/dashas";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return dashas.map((d) => ({ planet: d.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ planet: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { planet } = await params;
  const data = getDashaBySlug(planet);
  if (!data) return {};
  return {
    title: `${data.planet} Mahadasha — Effects, Duration, Remedies & Antardasha Periods`,
    description: `Complete guide to ${data.planet} Mahadasha in the Vimshottari Dasha system. ${data.duration}-year period. Effects on career, relationships, health, spirituality. All 9 Antardasha sub-periods explained.`,
    alternates: { canonical: `https://astromedha.in/dasha/${planet}` },
    openGraph: {
      title: `${data.planet} Mahadasha — Vimshottari Dasha Guide`,
      description: data.overview,
      type: "article",
    },
  };
}

export default async function DashaPage({ params }: Props) {
  const { planet } = await params;
  const data = getDashaBySlug(planet);
  if (!data) notFound();

  const otherDashas = dashas.filter((d) => d.slug !== planet);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-400">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/#dasha" className="hover:text-purple-400">Vimshottari Dasha</Link>
        <span className="mx-2">/</span>
        <span className="text-purple-400">{data.planet} Mahadasha</span>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://astromedha.in" },
              { "@type": "ListItem", position: 2, name: "Vimshottari Dasha", item: "https://astromedha.in/#dasha" },
              { "@type": "ListItem", position: 3, name: `${data.planet} Mahadasha`, item: `https://astromedha.in/dasha/${planet}` },
            ],
          }),
        }}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-purple-600/15 border border-purple-500/20 rounded-full text-xs text-purple-300 mb-3">
          {data.nature} Planet • #{data.order} in Vimshottari Sequence
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
          {data.planet} Mahadasha
        </h1>
        <p className="text-gray-400">
          {data.planetSanskrit} • Duration: {data.duration} years • {data.nature}
        </p>
      </div>

      {/* Signifies */}
      <div className="flex flex-wrap gap-2 mb-10">
        {data.signifies.map((s) => (
          <span key={s} className="px-3 py-1 bg-gray-900/50 border border-gray-800 rounded-full text-xs text-gray-300">
            {s}
          </span>
        ))}
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          Understanding {data.planet} Mahadasha
        </h2>
        <p className="text-gray-300 leading-relaxed">{data.overview}</p>
      </section>

      {/* Effects */}
      <section className="mb-10">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-green-400 mb-3">Positive Effects</h3>
            <p className="text-xs text-gray-500 mb-3">When {data.planet} is well-placed in the birth chart</p>
            <ul className="space-y-2">
              {data.positiveEffects.map((e) => (
                <li key={e} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span> {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-orange-400 mb-3">Challenging Effects</h3>
            <p className="text-xs text-gray-500 mb-3">When {data.planet} is afflicted or poorly placed</p>
            <ul className="space-y-2">
              {data.negativeEffects.map((e) => (
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
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Career During {data.planet} Mahadasha</h2>
          <p className="text-gray-300 leading-relaxed">{data.career}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Relationships During {data.planet} Mahadasha</h2>
          <p className="text-gray-300 leading-relaxed">{data.relationships}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Health During {data.planet} Mahadasha</h2>
          <p className="text-gray-300 leading-relaxed">{data.health}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Spiritual Growth During {data.planet} Mahadasha</h2>
          <p className="text-gray-300 leading-relaxed">{data.spirituality}</p>
        </div>
      </section>

      {/* Remedies */}
      <section className="mb-10">
        <div className="bg-purple-950/30 border border-purple-800/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-purple-300 mb-4">Remedies for {data.planet} Mahadasha</h2>
          <ul className="space-y-2">
            {data.remedies.map((r) => (
              <li key={r} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">•</span> {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Antardasha Periods */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">
          {data.planet} Mahadasha — All 9 Antardasha Periods
        </h2>
        <div className="space-y-4">
          {data.antardasha.map((ad) => (
            <div key={ad.slug} className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-100">
                  {data.planet}/{ad.planet} Antardasha
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
          ))}
        </div>
      </section>

      {/* Dasha Sequence */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-100 mb-4">
          Vimshottari Dasha Sequence
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
          {dashas.map((d) => (
            <Link
              key={d.slug}
              href={`/dasha/${d.slug}`}
              className={`border rounded-xl p-3 text-center transition-all ${
                d.slug === planet
                  ? "bg-purple-600/20 border-purple-500/40"
                  : "bg-gray-900/30 border-gray-800 hover:border-purple-600/50"
              }`}
            >
              <div className={`text-sm font-semibold ${d.slug === planet ? "text-purple-300" : "text-gray-400"}`}>
                {d.planet.split("/")[0]}
              </div>
              <div className="text-xs text-gray-500">{d.duration} yrs</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="mb-10 flex flex-wrap gap-3">
        <Link href="/free/numerology" className="text-sm text-purple-400 hover:text-purple-300 underline">
          Numerology Calculator
        </Link>
        {otherDashas.slice(0, 3).map((d) => (
          <Link key={d.slug} href={`/dasha/${d.slug}`} className="text-sm text-purple-400 hover:text-purple-300 underline">
            {d.planet.split("/")[0]} Mahadasha
          </Link>
        ))}
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          Know Your Current Dasha Period
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
          Enter your birth details to calculate your exact Mahadasha, Antardasha, and
          Pratyantardasha periods — with AI-powered interpretation.
        </p>
        <Link
          href="https://astromedha.streamlit.app"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          Calculate My Dasha →
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${data.planet} Mahadasha — Complete Vimshottari Dasha Guide`,
            description: data.overview,
            author: { "@type": "Organization", name: "AstroMedha" },
            publisher: { "@type": "Organization", name: "AstroMedha", url: "https://astromedha.in" },
            mainEntityOfPage: `https://astromedha.in/dasha/${planet}`,
          }),
        }}
      />
    </main>
  );
}
