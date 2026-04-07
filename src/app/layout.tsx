import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://astromedha.in"),
  title: {
    default: "AstroMedha \u2014 AI-Powered Vedic Astrology & Numerology",
    template: "%s | AstroMedha",
  },
  description:
    "Personalized daily guidance through Chaldean Numerology, Vedic Astrology, and Vimshottari Dasha analysis. Free birth chart calculator, numerology tools, and AI-powered insights.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AstroMedha",
    title: "AstroMedha \u2014 AI-Powered Vedic Astrology & Numerology",
    description:
      "Personalized daily guidance through Vedic Astrology, Chaldean Numerology, and AI interpretation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AstroMedha \u2014 AI-Powered Vedic Astrology & Numerology",
    description:
      "Personalized daily guidance through Vedic Astrology, Chaldean Numerology, and AI interpretation.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-purple-400">\u2727</span>
          <span className="text-gray-100">AstroMedha</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/#zodiac" className="text-gray-400 hover:text-purple-300 transition-colors">
            Zodiac Signs
          </Link>
          <Link href="/#numerology" className="text-gray-400 hover:text-purple-300 transition-colors">
            Numerology
          </Link>
          <Link href="/#dasha" className="text-gray-400 hover:text-purple-300 transition-colors">
            Dashas
          </Link>
          <Link href="/free/numerology" className="text-gray-400 hover:text-purple-300 transition-colors">
            Free Tools
          </Link>
          <Link
            href="https://astromedha.streamlit.app"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Get Guidance
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  const zodiacLinks = [
    { slug: "mesha", name: "Mesha (Aries)" },
    { slug: "vrishabha", name: "Vrishabha (Taurus)" },
    { slug: "mithuna", name: "Mithuna (Gemini)" },
    { slug: "karka", name: "Karka (Cancer)" },
    { slug: "simha", name: "Simha (Leo)" },
    { slug: "kanya", name: "Kanya (Virgo)" },
    { slug: "tula", name: "Tula (Libra)" },
    { slug: "vrishchika", name: "Vrishchika (Scorpio)" },
    { slug: "dhanu", name: "Dhanu (Sagittarius)" },
    { slug: "makara", name: "Makara (Capricorn)" },
    { slug: "kumbha", name: "Kumbha (Aquarius)" },
    { slug: "meena", name: "Meena (Pisces)" },
  ];

  const dashaLinks = [
    { slug: "ketu", name: "Ketu (7 yrs)" },
    { slug: "venus", name: "Venus (20 yrs)" },
    { slug: "sun", name: "Sun (6 yrs)" },
    { slug: "moon", name: "Moon (10 yrs)" },
    { slug: "mars", name: "Mars (7 yrs)" },
    { slug: "rahu", name: "Rahu (18 yrs)" },
    { slug: "jupiter", name: "Jupiter (16 yrs)" },
    { slug: "saturn", name: "Saturn (19 yrs)" },
    { slug: "mercury", name: "Mercury (17 yrs)" },
  ];

  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Zodiac */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 mb-3">Zodiac Signs</h3>
            <ul className="space-y-1.5">
              {zodiacLinks.map((z) => (
                <li key={z.slug}>
                  <Link href={`/zodiac/${z.slug}`} className="text-xs text-gray-500 hover:text-purple-300 transition-colors">
                    {z.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dashas */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 mb-3">Mahadasha Periods</h3>
            <ul className="space-y-1.5">
              {dashaLinks.map((d) => (
                <li key={d.slug}>
                  <Link href={`/dasha/${d.slug}`} className="text-xs text-gray-500 hover:text-purple-300 transition-colors">
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Numerology */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 mb-3">Numerology</h3>
            <ul className="space-y-1.5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <li key={n}>
                  <Link href={`/numerology/${n}`} className="text-xs text-gray-500 hover:text-purple-300 transition-colors">
                    Life Path Number {n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 mb-3">Free Tools</h3>
            <ul className="space-y-1.5">
              <li>
                <Link href="/free/numerology" className="text-xs text-gray-500 hover:text-purple-300 transition-colors">
                  Numerology Calculator
                </Link>
              </li>
              <li>
                <Link href="/free/compatibility" className="text-xs text-gray-500 hover:text-purple-300 transition-colors">
                  Compatibility Checker
                </Link>
              </li>
              <li>
                <Link href="/free/personal-year" className="text-xs text-gray-500 hover:text-purple-300 transition-colors">
                  Personal Year Calculator
                </Link>
              </li>
            </ul>
            <h3 className="text-sm font-semibold text-gray-200 mt-6 mb-3">Resources</h3>
            <ul className="space-y-1.5">
              <li>
                <Link href="https://astromedha.streamlit.app" className="text-xs text-gray-500 hover:text-purple-300 transition-colors">
                  Get Full Guidance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800/50 text-center">
          <p className="text-xs text-gray-600">
            AstroMedha \u2014 AI-Powered Vedic Astrology & Numerology Guidance
          </p>
          <p className="text-xs text-gray-700 mt-1">
            Guidance is for personal reflection and self-development. Not a substitute for professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
