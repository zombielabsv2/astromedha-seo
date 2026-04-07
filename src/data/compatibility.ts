import { zodiacSigns, type ZodiacSign } from "./zodiac";

export interface CompatibilityScore {
  element: number;
  lordship: number;
  aspect: number;
  quality: number;
  overall: number;
}

export interface CompatibilityPair {
  slug: string;
  sign1: ZodiacSign;
  sign2: ZodiacSign;
  scores: CompatibilityScore;
  verdict: string;
  verdictColor: string;
  overview: string;
  strengths: string[];
  challenges: string[];
  advice: string[];
}

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

function getSignIndex(slug: string): number {
  return zodiacSigns.findIndex((s) => s.slug === slug);
}

function computeScores(sign1: ZodiacSign, sign2: ZodiacSign): CompatibilityScore {
  const idx1 = getSignIndex(sign1.slug);
  const idx2 = getSignIndex(sign2.slug);

  const elementScore = ELEMENT_COMPAT[sign1.element][sign2.element];

  const friends1 = PLANET_FRIENDS[sign1.rulingPlanet] || [];
  const friends2 = PLANET_FRIENDS[sign2.rulingPlanet] || [];
  let lordScore = 5;
  if (friends1.includes(sign2.rulingPlanet) && friends2.includes(sign1.rulingPlanet)) lordScore = 9;
  else if (friends1.includes(sign2.rulingPlanet) || friends2.includes(sign1.rulingPlanet)) lordScore = 7;
  else if (sign1.rulingPlanet === sign2.rulingPlanet) lordScore = 8;

  const distance = Math.abs(idx1 - idx2);
  const normalizedDist = Math.min(distance, 12 - distance);
  const aspectScores: Record<number, number> = { 0: 6, 1: 5, 2: 4, 3: 7, 4: 8, 5: 9, 6: 3 };
  const aspectScore = aspectScores[normalizedDist] ?? 5;

  let qualityScore = 5;
  if (sign1.quality === sign2.quality) qualityScore = 6;
  if (sign1.quality !== sign2.quality && sign1.element === sign2.element) qualityScore = 7;

  const total = Math.min(
    Math.round(((elementScore + lordScore + aspectScore + qualityScore) / 40) * 100),
    95
  );

  return {
    element: elementScore,
    lordship: lordScore,
    aspect: aspectScore,
    quality: qualityScore,
    overall: total,
  };
}

function getVerdict(score: number): { text: string; color: string } {
  if (score >= 80) return { text: "Excellent Match", color: "text-green-400" };
  if (score >= 65) return { text: "Good Compatibility", color: "text-emerald-400" };
  if (score >= 50) return { text: "Moderate Match", color: "text-yellow-400" };
  if (score >= 35) return { text: "Challenging but Growth-Oriented", color: "text-orange-400" };
  return { text: "Requires Conscious Effort", color: "text-red-400" };
}

/* --- Overview generation --- */

const ELEMENT_DESCRIPTIONS: Record<string, string> = {
  "Fire+Fire": "Two Fire signs together create an intensely passionate and energetic bond. There is no shortage of enthusiasm, ambition, or excitement in this relationship. Both partners understand each other's need for action and adventure, creating a dynamic and stimulating connection.",
  "Fire+Earth": "Fire and Earth bring together passion and practicality. The Fire sign inspires and energizes, while the Earth sign grounds and stabilizes. This combination can be highly productive when both partners appreciate what the other brings to the table.",
  "Fire+Air": "Fire and Air form one of the most naturally compatible elemental pairings. Air fuels Fire, creating a relationship full of intellectual stimulation, creative energy, and shared enthusiasm. Communication flows easily and both partners feel energized by each other.",
  "Fire+Water": "Fire and Water represent opposite elemental forces, creating a relationship of both tension and transformation. Fire's directness can feel overwhelming to Water's sensitivity, while Water's emotional depth can dampen Fire's spontaneity. Yet this combination holds potential for profound growth.",
  "Earth+Earth": "Two Earth signs create a deeply stable and practical bond. Both partners value security, consistency, and tangible results. This relationship is built on a solid foundation of shared values around home, finances, and long-term planning.",
  "Earth+Air": "Earth and Air operate on different wavelengths, with Earth seeking tangible results and Air pursuing intellectual stimulation. This pairing requires effort to bridge the gap between practical and theoretical approaches to life.",
  "Earth+Water": "Earth and Water form a deeply nurturing and naturally compatible pairing. Water nourishes Earth, and Earth gives Water a stable container. This combination creates a relationship rich in emotional security and practical support.",
  "Air+Air": "Two Air signs share an extraordinary intellectual connection. Conversation never runs dry, ideas flow freely, and both partners respect each other's need for mental stimulation and social engagement. The bond is built on shared curiosity and communication.",
  "Air+Water": "Air and Water have fundamentally different approaches to life. Air processes through logic and communication, while Water navigates through feelings and intuition. Bridging this gap requires patience but can create a beautifully balanced partnership.",
  "Water+Water": "Two Water signs create one of the most emotionally deep and intuitive connections possible. Both partners understand the unspoken language of feelings, creating a bond that feels almost psychic in its depth and sensitivity.",
};

function getElementKey(e1: string, e2: string): string {
  const order = ["Fire", "Earth", "Air", "Water"];
  const i1 = order.indexOf(e1);
  const i2 = order.indexOf(e2);
  return i1 <= i2 ? `${e1}+${e2}` : `${e2}+${e1}`;
}

function generateOverview(sign1: ZodiacSign, sign2: ZodiacSign, scores: CompatibilityScore): string {
  const isSame = sign1.slug === sign2.slug;
  const elementKey = getElementKey(sign1.element, sign2.element);
  const elementDesc = ELEMENT_DESCRIPTIONS[elementKey] || "";

  if (isSame) {
    return `When two ${sign1.sanskritName} natives come together, the relationship is a mirror of shared traits, values, and tendencies. Both partners inherently understand each other's motivations, strengths, and vulnerabilities because they share the same ${sign1.element} element, ${sign1.quality} quality, and ${sign1.rulingPlanet} lordship. This creates a deep sense of familiarity and understanding, though it can also amplify shared weaknesses. With an overall compatibility of ${scores.overall}%, this pairing has a strong foundation of mutual understanding but must consciously work to balance the areas where both partners share the same blind spots.`;
  }

  return `The pairing of ${sign1.name} and ${sign2.name} brings together ${sign1.element} and ${sign2.element} energies, creating a relationship with an overall compatibility of ${scores.overall}%. ${elementDesc} As a ${sign1.quality} sign ruled by ${sign1.rulingPlanet} meeting a ${sign2.quality} sign ruled by ${sign2.rulingPlanet}, this combination carries unique dynamics that can either complement or challenge both partners.`;
}

/* --- Strengths generation --- */

function generateStrengths(sign1: ZodiacSign, sign2: ZodiacSign, scores: CompatibilityScore): string[] {
  const strengths: string[] = [];
  const isSame = sign1.slug === sign2.slug;

  if (isSame) {
    strengths.push(
      `Deep mutual understanding — both partners share the same ${sign1.element} temperament and ${sign1.quality} approach to life`,
      `Natural empathy for each other's emotional needs and communication style`,
      `Shared values and life priorities create a strong foundation of agreement`,
    );
    if (sign1.element === "Fire") strengths.push("Shared passion and drive create an exciting, action-oriented relationship");
    if (sign1.element === "Earth") strengths.push("Double Earth stability provides exceptional financial security and practical partnership");
    if (sign1.element === "Air") strengths.push("Intellectual synergy is extraordinary, with endless stimulating conversations");
    if (sign1.element === "Water") strengths.push("Emotional depth and intuitive connection reach levels other pairings rarely achieve");
    return strengths;
  }

  // Element-based strengths
  if (scores.element >= 7) {
    if (sign1.element === sign2.element) {
      strengths.push(`Shared ${sign1.element} element creates natural rapport and mutual understanding`);
    } else {
      strengths.push(`${sign1.element} and ${sign2.element} elements naturally energize and complement each other`);
    }
  }
  if (sign1.element === "Fire" && sign2.element === "Air") {
    strengths.push("Air fuels Fire's ambitions while Fire gives Air's ideas a direction and purpose");
  }
  if (sign1.element === "Earth" && sign2.element === "Water") {
    strengths.push("Water nourishes Earth's growth while Earth provides a stable container for Water's emotions");
  }
  if ((sign1.element === "Fire" && sign2.element === "Air") || (sign1.element === "Air" && sign2.element === "Fire")) {
    strengths.push("Communication flows easily with both partners contributing energy and ideas");
  }

  // Lordship-based
  if (scores.lordship >= 8) {
    strengths.push(`${sign1.rulingPlanet} and ${sign2.rulingPlanet} share a natural planetary friendship in Vedic astrology`);
  }
  if (sign1.rulingPlanet === sign2.rulingPlanet) {
    strengths.push(`Both signs share ${sign1.rulingPlanet} as ruling planet, creating a deep energetic resonance`);
  }

  // Aspect-based
  if (scores.aspect >= 8) {
    strengths.push("Favorable house distance creates natural harmony and supportive energy flow");
  }
  if (scores.aspect >= 9) {
    strengths.push("The trine aspect (5 houses apart) is one of the most auspicious connections in Vedic astrology");
  }

  // Quality-based
  if (sign1.quality === "Cardinal" && sign2.quality === "Mutable") {
    strengths.push(`${sign1.sanskritName}'s initiative pairs well with ${sign2.sanskritName}'s adaptability`);
  }
  if (sign1.quality === "Mutable" && sign2.quality === "Cardinal") {
    strengths.push(`${sign2.sanskritName}'s initiative pairs well with ${sign1.sanskritName}'s adaptability`);
  }
  if (sign1.quality === "Fixed" && sign2.quality === "Cardinal") {
    strengths.push(`${sign2.sanskritName} initiates projects that ${sign1.sanskritName} has the endurance to complete`);
  }
  if (sign1.quality === "Cardinal" && sign2.quality === "Fixed") {
    strengths.push(`${sign1.sanskritName} initiates projects that ${sign2.sanskritName} has the endurance to complete`);
  }

  // General strengths based on overall score
  if (scores.overall >= 70) {
    strengths.push("Both partners can naturally grow and evolve together through life's stages");
  }
  if (scores.overall >= 60) {
    strengths.push("Complementary traits allow each partner to learn from the other's approach");
  }

  // Ensure at least 3 strengths
  if (strengths.length < 3) {
    strengths.push("Both signs bring unique perspectives that can broaden each other's worldview");
  }
  if (strengths.length < 3) {
    strengths.push("Differences between these signs create opportunities for personal growth and deeper understanding");
  }

  return strengths.slice(0, 5);
}

/* --- Challenges generation --- */

function generateChallenges(sign1: ZodiacSign, sign2: ZodiacSign, scores: CompatibilityScore): string[] {
  const challenges: string[] = [];
  const isSame = sign1.slug === sign2.slug;

  if (isSame) {
    challenges.push(
      `Shared weaknesses get amplified — both partners may struggle with the same blind spots`,
      `Risk of stagnation when neither partner pushes the other outside their comfort zone`,
      `Power struggles can arise when both approach situations the same way`,
    );
    if (sign1.element === "Fire") challenges.push("Double Fire can lead to explosive arguments and ego clashes");
    if (sign1.element === "Water") challenges.push("Emotional intensity can become overwhelming with no grounding partner");
    return challenges;
  }

  // Element-based challenges
  if (scores.element <= 4) {
    if (sign1.element === "Fire" && sign2.element === "Water") {
      challenges.push("Fire's directness can scald Water's sensitivity, while Water can dampen Fire's enthusiasm");
    } else if (sign1.element === "Water" && sign2.element === "Fire") {
      challenges.push("Water's emotional depth can feel smothering to Fire, while Fire's bluntness can wound Water deeply");
    } else if (sign1.element === "Earth" && sign2.element === "Air") {
      challenges.push("Earth may find Air too abstract and uncommitted, while Air may feel Earth is too rigid and slow");
    } else if (sign1.element === "Air" && sign2.element === "Earth") {
      challenges.push("Air's need for mental freedom can clash with Earth's desire for concrete plans and stability");
    } else {
      challenges.push(`${sign1.element} and ${sign2.element} elements can create friction without conscious effort`);
    }
  }

  // Lordship challenges
  if (scores.lordship <= 5) {
    challenges.push(`${sign1.rulingPlanet} and ${sign2.rulingPlanet} are not natural allies in Vedic astrology, requiring extra effort in mutual understanding`);
  }

  // Aspect challenges
  if (scores.aspect <= 4) {
    challenges.push("The house distance creates natural tension that requires conscious navigation");
  }
  if (scores.aspect === 3) {
    challenges.push("The opposition aspect (6 houses apart) creates a pull-and-push dynamic that tests both partners");
  }

  // Quality challenges
  if (sign1.quality === "Fixed" && sign2.quality === "Fixed") {
    challenges.push("Both partners' fixed nature can lead to stubborn standoffs where neither is willing to compromise");
  }
  if (sign1.quality === "Cardinal" && sign2.quality === "Cardinal") {
    challenges.push("Both partners want to lead, which can create power struggles over direction and decision-making");
  }
  if (sign1.quality === "Mutable" && sign2.quality === "Mutable") {
    challenges.push("Double Mutable energy can lead to indecisiveness and lack of follow-through on shared goals");
  }

  // General challenges
  if (scores.overall < 50) {
    challenges.push("Fundamental differences in approach to life may require significant compromise from both sides");
  }
  if (scores.overall < 40) {
    challenges.push("Maintaining long-term harmony demands consistent effort and a willingness to grow beyond comfort zones");
  }

  if (challenges.length < 3) {
    challenges.push("Different communication styles may lead to occasional misunderstandings");
  }
  if (challenges.length < 3) {
    challenges.push("Balancing each partner's individual needs with relationship harmony requires ongoing attention");
  }

  return challenges.slice(0, 5);
}

/* --- Advice generation --- */

function generateAdvice(sign1: ZodiacSign, sign2: ZodiacSign, scores: CompatibilityScore): string[] {
  const advice: string[] = [];
  const isSame = sign1.slug === sign2.slug;

  if (isSame) {
    advice.push(
      "Consciously cultivate friendships and activities outside the relationship to bring in fresh perspectives and prevent an echo chamber",
      `Acknowledge your shared ${sign1.element} blind spots and actively work to develop the opposite quality — if you are both Fire, cultivate patience; if Water, develop detachment`,
      "Create a healthy dynamic around decision-making so both partners feel heard without defaulting to the same approach every time",
      "Celebrate your deep mutual understanding as a gift, but challenge each other to grow beyond your shared comfort zone",
    );
    return advice;
  }

  // Element-based advice
  if (sign1.element === "Fire" && sign2.element === "Water") {
    advice.push("Fire should practice slowing down and validating Water's emotions before jumping to solutions");
    advice.push("Water should express needs directly rather than expecting Fire to intuit them");
  } else if (sign1.element === "Water" && sign2.element === "Fire") {
    advice.push("Water should communicate feelings verbally rather than retreating into silence");
    advice.push("Fire should develop emotional patience and resist the urge to 'fix' everything immediately");
  } else if (sign1.element === "Earth" && sign2.element === "Air") {
    advice.push("Earth should remain open to Air's new ideas and resist dismissing them as impractical");
    advice.push("Air should follow through on commitments to earn Earth's trust and respect");
  } else if (sign1.element === "Air" && sign2.element === "Earth") {
    advice.push("Air should ground ideas into actionable plans that Earth can appreciate");
    advice.push("Earth should embrace change and experimentation to keep the relationship vibrant");
  } else if (sign1.element === sign2.element) {
    advice.push(`As fellow ${sign1.element} signs, consciously develop the qualities of other elements to create balance`);
  }

  // Lordship advice
  if (scores.lordship >= 7) {
    advice.push(`Honor the natural friendship between ${sign1.rulingPlanet} and ${sign2.rulingPlanet} by supporting each other's core drives`);
  } else {
    advice.push(`Study each other's ruling planet characteristics (${sign1.rulingPlanet} and ${sign2.rulingPlanet}) to understand your partner's fundamental motivations`);
  }

  // General relationship advice
  if (scores.overall >= 70) {
    advice.push("Your natural compatibility is high, but avoid taking the relationship for granted — continue investing in quality time together");
  } else if (scores.overall >= 50) {
    advice.push("Focus on building shared rituals and routines that honor both partners' needs");
    advice.push("Regular open conversations about expectations and boundaries will strengthen your bond over time");
  } else {
    advice.push("Invest heavily in understanding each other's love language — your differences mean you may express and receive love in fundamentally different ways");
    advice.push("Consider periodic relationship check-ins to address simmering issues before they become conflicts");
  }

  if (advice.length < 4) {
    advice.push("Practice gratitude for what your partner brings that you lack — complementary traits are a relationship's greatest asset");
  }

  return advice.slice(0, 5);
}

/* --- Generate all 78 pairs --- */

function makePairSlug(slug1: string, slug2: string): string {
  // Alphabetical order to ensure consistency
  return slug1 <= slug2 ? `${slug1}-${slug2}` : `${slug2}-${slug1}`;
}

function generateAllPairs(): CompatibilityPair[] {
  const pairs: CompatibilityPair[] = [];

  for (let i = 0; i < zodiacSigns.length; i++) {
    for (let j = i; j < zodiacSigns.length; j++) {
      const sign1 = zodiacSigns[i];
      const sign2 = zodiacSigns[j];
      const slug = makePairSlug(sign1.slug, sign2.slug);
      const scores = computeScores(sign1, sign2);
      const { text, color } = getVerdict(scores.overall);
      const overview = generateOverview(sign1, sign2, scores);
      const strengths = generateStrengths(sign1, sign2, scores);
      const challenges = generateChallenges(sign1, sign2, scores);
      const advice = generateAdvice(sign1, sign2, scores);

      pairs.push({
        slug,
        sign1,
        sign2,
        scores,
        verdict: text,
        verdictColor: color,
        overview,
        strengths,
        challenges,
        advice,
      });
    }
  }

  return pairs;
}

export const allCompatibilityPairs: CompatibilityPair[] = generateAllPairs();

export function getCompatibilityBySlug(slug: string): CompatibilityPair | undefined {
  return allCompatibilityPairs.find((p) => p.slug === slug);
}

export function getOtherPairsForSign(signSlug: string, excludeSlug: string): CompatibilityPair[] {
  return allCompatibilityPairs.filter(
    (p) =>
      p.slug !== excludeSlug &&
      (p.sign1.slug === signSlug || p.sign2.slug === signSlug)
  );
}
