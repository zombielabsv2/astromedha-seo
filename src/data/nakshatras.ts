export interface Nakshatra {
  slug: string;
  name: string;
  number: number;
  zodiacSign: string;
  rulingPlanet: string;
  deity: string;
  symbol: string;
  nature: string;
  gana: string;
  gender: string;
  element: string;
  degreeRange: string;
  animalSymbol: string;
  qualities: string[];
  overview: string;
  personality: string;
  career: string;
  compatibility: string;
  remedies: string[];
}

export const nakshatras: Nakshatra[] = [
  {
    slug: "ashwini",
    name: "Ashwini",
    number: 1,
    zodiacSign: "mesha",
    rulingPlanet: "Ketu",
    deity: "Ashwini Kumaras (Divine Physicians)",
    symbol: "Horse's head",
    nature: "Deva",
    gana: "Deva",
    gender: "Male",
    element: "Earth",
    degreeRange: "0° - 13°20' Aries",
    animalSymbol: "Male Horse",
    qualities: ["Healing ability", "Swift action", "Pioneering spirit", "Adventurous", "Independent"],
    overview:
      "Ashwini is the first nakshatra in Vedic astrology, spanning the initial degrees of Aries. Ruled by Ketu and governed by the Ashwini Kumaras, the celestial twin physicians, this nakshatra embodies healing, speed, and new beginnings. People born under Ashwini are natural healers and initiators who act with remarkable swiftness and courage. This nakshatra marks the very start of the zodiac cycle, symbolizing the dawn of creation and fresh starts.",
    personality:
      "Ashwini natives are energetic, enthusiastic, and always ready to take the lead. They possess a magnetic charm and an instinctive desire to help others, often drawn to healing professions. Their impulsive nature can sometimes lead to hasty decisions, but their innate optimism helps them recover quickly.",
    career:
      "Careers in medicine, emergency services, sports, and alternative healing suit Ashwini natives well. Their pioneering spirit makes them excellent entrepreneurs and trailblazers in any field. They thrive in fast-paced environments that reward quick thinking and decisive action.",
    compatibility:
      "Ashwini is most compatible with Bharani and Pushya nakshatras due to complementary energies. They share a natural affinity with other Ketu-ruled nakshatras like Magha and Moola. Relationships work best when their partner appreciates their need for independence and spontaneity.",
    remedies: [
      "Chant the Ketu beej mantra: 'Om Sraam Sreem Sraum Sah Ketave Namah' 108 times",
      "Worship the Ashwini Kumaras on Tuesdays for health and vitality",
      "Donate medicines or sponsor medical treatment for the underprivileged",
    ],
  },
  {
    slug: "bharani",
    name: "Bharani",
    number: 2,
    zodiacSign: "mesha",
    rulingPlanet: "Venus",
    deity: "Yama (God of Death and Dharma)",
    symbol: "Yoni (female reproductive organ)",
    nature: "Manushya",
    gana: "Manushya",
    gender: "Female",
    element: "Earth",
    degreeRange: "13°20' - 26°40' Aries",
    animalSymbol: "Male Elephant",
    qualities: ["Creative power", "Endurance", "Sense of duty", "Transformative", "Nurturing"],
    overview:
      "Bharani is the second nakshatra, representing the power of creation, transformation, and restraint. Ruled by Venus and presided over by Yama, the god of death and dharma, Bharani embodies the cycle of birth, life, and death. This nakshatra carries immense creative and transformative energy, making its natives powerful agents of change. Bharani teaches the profound lesson that creation and destruction are two sides of the same coin.",
    personality:
      "Bharani natives are deeply creative, passionate, and possess tremendous willpower. They have an innate understanding of life's dualities and can endure extreme hardships with grace. Their Venusian influence gives them artistic sensibility and a love for beauty, while Yama's governance instills a strong moral compass.",
    career:
      "Bharani natives excel in creative arts, publishing, entertainment, and anything involving birth or transformation such as midwifery and psychology. Their strong sense of duty makes them effective in judicial, legal, and administrative roles. They can also thrive in hospitality, luxury goods, and the beauty industry.",
    compatibility:
      "Bharani is highly compatible with Revati and Pushya nakshatras. The creative Venus energy pairs well with nakshatras that appreciate beauty and emotional depth. Partners who can match Bharani's intensity and respect their need for creative expression make the best matches.",
    remedies: [
      "Chant the Venus beej mantra: 'Om Draam Dreem Draum Sah Shukraya Namah' 108 times on Fridays",
      "Offer white flowers to Yama Dharmaraja and practice ethical living",
      "Fast on Fridays and donate food or clothing to those in need",
    ],
  },
  {
    slug: "krittika",
    name: "Krittika",
    number: 3,
    zodiacSign: "mesha",
    rulingPlanet: "Sun",
    deity: "Agni (God of Fire)",
    symbol: "Razor or flame",
    nature: "Rakshasa",
    gana: "Rakshasa",
    gender: "Female",
    element: "Fire",
    degreeRange: "26°40' Aries - 10° Taurus",
    animalSymbol: "Female Sheep",
    qualities: ["Sharp intellect", "Purifying nature", "Courage", "Determination", "Critical thinking"],
    overview:
      "Krittika spans the cusp of Aries and Taurus, making it one of the nakshatras that bridges two zodiac signs. Ruled by the Sun and governed by Agni, the fire god, Krittika represents the purifying flame that burns away impurities. The six stars of the Pleiades cluster form this nakshatra, symbolizing the six mothers who nurtured Kartikeya (Murugan). Krittika natives possess a sharp, discerning mind and the ability to cut through illusion to reach truth.",
    personality:
      "Krittika natives are direct, honest, and sometimes blunt in their communication. They have a strong sense of right and wrong and are not afraid to stand up for their beliefs, even at personal cost. Their fiery nature makes them passionate and determined, though they must guard against being overly critical or harsh.",
    career:
      "Krittika natives thrive in roles that require precision and authority -- military, surgery, law enforcement, cooking, and spiritual leadership. Their Sun-ruled nature makes them natural leaders and administrators. They also excel in fields related to fire, metals, and sharp instruments.",
    compatibility:
      "Krittika is most compatible with Vishakha and Uttara Phalguni nakshatras. The solar energy pairs well with nakshatras that value honesty and integrity. Relationships flourish when partners appreciate Krittika's directness and share their commitment to truth.",
    remedies: [
      "Chant the Surya beej mantra: 'Om Hraam Hreem Hraum Sah Suryaya Namah' at sunrise",
      "Perform Agni homa (fire ritual) or light a ghee lamp daily",
      "Offer water to the Sun every morning (Surya Arghya) facing east",
    ],
  },
  {
    slug: "rohini",
    name: "Rohini",
    number: 4,
    zodiacSign: "vrishabha",
    rulingPlanet: "Moon",
    deity: "Brahma (Creator God)",
    symbol: "Chariot or ox cart",
    nature: "Manushya",
    gana: "Manushya",
    gender: "Female",
    element: "Earth",
    degreeRange: "10° - 23°20' Taurus",
    animalSymbol: "Male Serpent",
    qualities: ["Artistic talent", "Fertility", "Material abundance", "Charm", "Sensuality"],
    overview:
      "Rohini is considered one of the most auspicious nakshatras in Vedic astrology, known for its fertile, creative, and abundant nature. Ruled by the Moon and presided over by Brahma the creator, Rohini embodies growth, beauty, and material prosperity. The bright star Aldebaran marks this nakshatra, one of the brightest in the night sky. Rohini was said to be the Moon's favorite wife among the 27 nakshatra sisters, reflecting its magnetic allure.",
    personality:
      "Rohini natives are naturally attractive, charming, and possess a refined aesthetic sense. They are grounded, practical, and deeply connected to the material world, often accumulating wealth and beautiful possessions. Their emotional sensitivity and nurturing nature make them beloved by those around them.",
    career:
      "Rohini natives excel in agriculture, fashion, beauty, luxury goods, real estate, and the arts. Their creative talents shine in music, film, and design. They are also successful in banking, food production, and any field that involves cultivating growth and abundance.",
    compatibility:
      "Rohini is highly compatible with Mrigashira and Hasta nakshatras. The Moon's influence creates deep emotional bonds with water-element nakshatras. Partners who appreciate beauty, stability, and sensory pleasures make the most harmonious matches.",
    remedies: [
      "Chant the Chandra beej mantra: 'Om Shraam Shreem Shraum Sah Chandraya Namah' on Mondays",
      "Offer milk and white flowers to Lord Brahma or perform Brahma puja",
      "Wear pearl or moonstone set in silver on the little finger",
    ],
  },
  {
    slug: "mrigashira",
    name: "Mrigashira",
    number: 5,
    zodiacSign: "vrishabha",
    rulingPlanet: "Mars",
    deity: "Soma (Moon God / God of Nectar)",
    symbol: "Deer's head",
    nature: "Deva",
    gana: "Deva",
    gender: "Male",
    element: "Earth",
    degreeRange: "23°20' Taurus - 6°40' Gemini",
    animalSymbol: "Female Serpent",
    qualities: ["Curiosity", "Seeking nature", "Gentle temperament", "Research ability", "Versatility"],
    overview:
      "Mrigashira, meaning 'deer's head,' spans the junction of Taurus and Gemini, combining earthy stability with airy intellect. Ruled by Mars and governed by Soma, the celestial nectar, this nakshatra represents the eternal search for truth and fulfillment. The deer symbolizes the gentle, curious nature of Mrigashira natives who are always seeking something beyond the material. This nakshatra imparts a restless yet gentle energy that drives its natives toward discovery and exploration.",
    personality:
      "Mrigashira natives are curious, gentle, and perpetually in search of knowledge and new experiences. They possess a dual nature -- grounded yet intellectual, strong yet tender. Their Martian energy gives them initiative and courage, while Soma's influence adds sensitivity, creativity, and a love for the finer things.",
    career:
      "Mrigashira natives thrive in research, academia, travel, writing, and exploration. Their seeking nature makes them excellent scientists, journalists, and detectives. They also do well in textiles, music, real estate, and any profession that involves travel or discovery.",
    compatibility:
      "Mrigashira is most compatible with Chitra and Dhanishta nakshatras, sharing Mars rulership. The gentle seeking nature pairs well with intellectually stimulating partners. Relationships work best when there is mutual respect for each other's quest for knowledge and personal growth.",
    remedies: [
      "Chant the Mars beej mantra: 'Om Kraam Kreem Kraum Sah Bhaumaya Namah' on Tuesdays",
      "Worship Lord Soma or Chandra (Moon) by offering white sandalwood paste",
      "Feed green grass to cows and practice compassion toward animals",
    ],
  },
  {
    slug: "ardra",
    name: "Ardra",
    number: 6,
    zodiacSign: "mithuna",
    rulingPlanet: "Rahu",
    deity: "Rudra (Storm form of Shiva)",
    symbol: "Teardrop or diamond",
    nature: "Manushya",
    gana: "Manushya",
    gender: "Female",
    element: "Water",
    degreeRange: "6°40' - 20° Gemini",
    animalSymbol: "Female Dog",
    qualities: ["Intellectual depth", "Emotional intensity", "Transformative power", "Research ability", "Persistence"],
    overview:
      "Ardra, meaning 'the moist one,' is associated with the bright star Betelgeuse in Orion. Ruled by Rahu and governed by Rudra, the fierce storm form of Shiva, this nakshatra represents destruction that leads to renewal. Ardra brings the storms that clear the air and make way for fresh growth. This is a nakshatra of profound transformation, where suffering becomes the catalyst for deep intellectual and spiritual breakthroughs.",
    personality:
      "Ardra natives are intellectually brilliant, emotionally intense, and possess a sharp analytical mind. They often undergo significant hardships early in life, which forge their resilient character. Their Rahu-driven nature gives them an unconventional outlook and the ability to think outside established norms.",
    career:
      "Ardra natives excel in technology, software engineering, electrical work, research, and pharmaceutical sciences. Their analytical minds make them outstanding in data science, psychology, and investigative journalism. They also thrive in humanitarian work, as their own suffering deepens their empathy.",
    compatibility:
      "Ardra is most compatible with Swati and Shatabhisha nakshatras, sharing Rahu's innovative energy. Partners who can handle emotional intensity and appreciate intellectual depth make ideal matches. Relationships deepen through shared experiences of transformation and growth.",
    remedies: [
      "Chant the Rahu beej mantra: 'Om Bhraam Bhreem Bhraum Sah Rahave Namah' 108 times",
      "Worship Lord Shiva in his Rudra form, especially during Shivaratri",
      "Donate dark blue or black clothing on Saturdays to alleviate Rahu's malefic effects",
    ],
  },
  {
    slug: "punarvasu",
    name: "Punarvasu",
    number: 7,
    zodiacSign: "mithuna",
    rulingPlanet: "Jupiter",
    deity: "Aditi (Mother of the Gods)",
    symbol: "Bow and quiver of arrows",
    nature: "Deva",
    gana: "Deva",
    gender: "Male",
    element: "Water",
    degreeRange: "20° Gemini - 3°20' Cancer",
    animalSymbol: "Female Cat",
    qualities: ["Renewal", "Optimism", "Wisdom", "Adaptability", "Generosity"],
    overview:
      "Punarvasu, meaning 'return of the light,' is one of the most benevolent nakshatras in Vedic astrology. Ruled by Jupiter and governed by Aditi, the boundless mother goddess, this nakshatra embodies renewal, restoration, and the return to goodness. Spanning the cusp of Gemini and Cancer, Punarvasu combines intellectual versatility with emotional nurturing. Lord Rama was born under this nakshatra, underscoring its association with dharma, righteousness, and the triumph of good.",
    personality:
      "Punarvasu natives are optimistic, wise, and possess a remarkable ability to bounce back from adversity. They are naturally philosophical and generous, often serving as counselors and guides to those around them. Their Jupiter-ruled nature gives them an expansive worldview and genuine concern for the welfare of others.",
    career:
      "Punarvasu natives thrive in teaching, counseling, spirituality, publishing, and law. Their wisdom and communication skills make them excellent philosophers, writers, and spiritual teachers. They also succeed in travel, import-export, and any field that involves connecting diverse ideas or cultures.",
    compatibility:
      "Punarvasu is most compatible with Pushya and Ashlesha nakshatras due to their proximity and complementary energies. Jupiter's expansive nature pairs well with emotionally nurturing partners. Relationships flourish with those who share their optimistic outlook and commitment to growth.",
    remedies: [
      "Chant the Jupiter beej mantra: 'Om Graam Greem Graum Sah Gurave Namah' on Thursdays",
      "Worship Goddess Aditi and offer yellow flowers and turmeric",
      "Donate yellow items (clothes, food, gold) on Thursdays to Brahmins or the needy",
    ],
  },
  {
    slug: "pushya",
    name: "Pushya",
    number: 8,
    zodiacSign: "karka",
    rulingPlanet: "Saturn",
    deity: "Brihaspati (Guru of the Devas)",
    symbol: "Cow's udder or lotus",
    nature: "Deva",
    gana: "Deva",
    gender: "Male",
    element: "Water",
    degreeRange: "3°20' - 16°40' Cancer",
    animalSymbol: "Male Sheep",
    qualities: ["Nourishing", "Spiritual wisdom", "Prosperity", "Discipline", "Devotion"],
    overview:
      "Pushya is widely regarded as the most auspicious nakshatra for initiating any endeavor. Ruled by Saturn and governed by Brihaspati, the guru of the gods, this nakshatra uniquely combines discipline with divine wisdom. Located in the heart of Cancer, Pushya represents nourishment, protection, and spiritual sustenance. The 'Pushya nakshatra day' is considered the best day for beginning new ventures, purchases, and spiritual practices in the Hindu calendar.",
    personality:
      "Pushya natives are deeply caring, responsible, and spiritually inclined individuals. They possess a unique blend of Saturnian discipline and Jupiterian wisdom, making them reliable pillars of their community. Their nurturing Cancer placement gives them strong family values and an instinct to protect and provide for those they love.",
    career:
      "Pushya natives excel in government service, banking, dairy farming, food industries, and religious institutions. Their disciplined nature and spiritual wisdom make them outstanding teachers, administrators, and counselors. They also thrive in healthcare, social work, and any role that involves nurturing others.",
    compatibility:
      "Pushya is most compatible with Ashwini and Bharani nakshatras. The nourishing energy pairs beautifully with dynamic, action-oriented partners. Relationships are strongest with those who value stability, family, and spiritual growth.",
    remedies: [
      "Chant the Saturn beej mantra: 'Om Praam Preem Praum Sah Shanaye Namah' on Saturdays",
      "Worship Lord Brihaspati (Jupiter) with yellow flowers and chana dal",
      "Feed cows and donate milk or dairy products to temples or the needy",
    ],
  },
  {
    slug: "ashlesha",
    name: "Ashlesha",
    number: 9,
    zodiacSign: "karka",
    rulingPlanet: "Mercury",
    deity: "Naga (Serpent Gods)",
    symbol: "Coiled serpent",
    nature: "Rakshasa",
    gana: "Rakshasa",
    gender: "Female",
    element: "Water",
    degreeRange: "16°40' - 30° Cancer",
    animalSymbol: "Male Cat",
    qualities: ["Mystical insight", "Hypnotic presence", "Strategic mind", "Intuition", "Kundalini energy"],
    overview:
      "Ashlesha, meaning 'the entwiner,' is the nakshatra of the serpent energy (Kundalini) and mystical power. Ruled by Mercury and governed by the Nagas (serpent deities), Ashlesha embodies the coiled serpent's wisdom, cunning, and transformative potential. Located at the end of Cancer, this nakshatra represents deep psychological insight and the ability to penetrate hidden truths. Ashlesha is associated with occult knowledge, medicine, and the awakening of primal spiritual energy.",
    personality:
      "Ashlesha natives possess magnetic, hypnotic personalities with penetrating intelligence. They are naturally intuitive, perceptive, and can read people and situations with uncanny accuracy. Their serpentine nature gives them strategic brilliance, though they must guard against manipulation and suspicion.",
    career:
      "Ashlesha natives excel in psychology, occult sciences, pharmaceuticals, toxicology, and espionage. Their Mercury rulership makes them skilled in communication, writing, and research. They thrive in roles requiring deep analysis, such as forensic science, astrology, and investigative work.",
    compatibility:
      "Ashlesha is most compatible with Punarvasu and Jyeshtha nakshatras. The serpent energy pairs well with partners who appreciate depth and mystery. Relationships require trust-building, as Ashlesha natives can be guarded; partners who are patient and emotionally secure create the best bonds.",
    remedies: [
      "Chant the Mercury beej mantra: 'Om Braam Breem Braum Sah Budhaya Namah' on Wednesdays",
      "Worship Naga deities, especially on Nag Panchami, with milk and turmeric offerings",
      "Practice Kundalini meditation and donate to snake conservation or anti-venom programs",
    ],
  },
  {
    slug: "magha",
    name: "Magha",
    number: 10,
    zodiacSign: "simha",
    rulingPlanet: "Ketu",
    deity: "Pitris (Ancestral Spirits)",
    symbol: "Royal throne or palanquin",
    nature: "Rakshasa",
    gana: "Rakshasa",
    gender: "Female",
    element: "Fire",
    degreeRange: "0° - 13°20' Leo",
    animalSymbol: "Male Rat",
    qualities: ["Regal authority", "Ancestral connection", "Leadership", "Tradition", "Dignity"],
    overview:
      "Magha, meaning 'the mighty one,' occupies the royal sign of Leo and is associated with the star Regulus, one of the brightest stars in the sky. Ruled by Ketu and governed by the Pitris (ancestral spirits), Magha connects its natives to their lineage, heritage, and past-life karma. This nakshatra embodies authority, power, and regal bearing. Magha natives carry the weight of their ancestry and often feel a deep calling to honor tradition while forging their own legacy.",
    personality:
      "Magha natives are dignified, authoritative, and carry a natural air of nobility. They command respect effortlessly and are deeply connected to family traditions and ancestral wisdom. Their Ketu rulership gives them spiritual depth and detachment, while Leo's influence ensures they never shy away from the spotlight.",
    career:
      "Magha natives thrive in government, politics, management, and heritage preservation. Their regal nature makes them natural CEOs, judges, and administrators. They also excel in history, archaeology, genealogy, and any field that honors tradition and legacy.",
    compatibility:
      "Magha is most compatible with Ashwini and Moola nakshatras, sharing Ketu's spiritual and karmic influence. Partners who respect tradition, family values, and personal dignity create the strongest unions. Relationships deepen through shared reverence for heritage and spiritual growth.",
    remedies: [
      "Chant the Ketu beej mantra: 'Om Sraam Sreem Sraum Sah Ketave Namah' and perform Pitru Tarpan",
      "Honor ancestors through Shraddha ceremonies and offer food to Brahmins on Amavasya",
      "Donate blankets or warm clothing to the elderly as an act of ancestral merit",
    ],
  },
  {
    slug: "purva-phalguni",
    name: "Purva Phalguni",
    number: 11,
    zodiacSign: "simha",
    rulingPlanet: "Venus",
    deity: "Bhaga (God of Marital Bliss and Prosperity)",
    symbol: "Front legs of a bed or hammock",
    nature: "Manushya",
    gana: "Manushya",
    gender: "Female",
    element: "Fire",
    degreeRange: "13°20' - 26°40' Leo",
    animalSymbol: "Female Rat",
    qualities: ["Enjoyment of life", "Creativity", "Romance", "Charisma", "Artistic expression"],
    overview:
      "Purva Phalguni, meaning 'the former reddish one,' represents the zenith of creative self-expression and enjoyment in Vedic astrology. Ruled by Venus and governed by Bhaga, the god of marital bliss and good fortune, this nakshatra embodies love, pleasure, and artistic creativity. Located in the heart of Leo, Purva Phalguni combines solar confidence with Venusian charm. This nakshatra is considered highly auspicious for marriage, celebration, and creative endeavors.",
    personality:
      "Purva Phalguni natives are warm, generous, and possess a magnetic personality that draws others in. They have a natural talent for making life beautiful and enjoyable, both for themselves and those around them. Their Leo-Venus combination creates charismatic individuals who love luxury, romance, and social gatherings.",
    career:
      "Purva Phalguni natives excel in entertainment, performing arts, event management, and luxury industries. Their creative flair makes them outstanding actors, musicians, designers, and photographers. They also thrive in hospitality, wedding planning, and any field that involves creating beautiful experiences.",
    compatibility:
      "Purva Phalguni is most compatible with Uttara Phalguni and Bharani nakshatras. Venus-ruled nakshatras create harmonious partnerships based on shared love of beauty and pleasure. Relationships are at their best when filled with romance, creativity, and mutual appreciation.",
    remedies: [
      "Chant the Venus beej mantra: 'Om Draam Dreem Draum Sah Shukraya Namah' on Fridays",
      "Worship Lord Bhaga by offering red flowers, sweets, and performing Lakshmi puja",
      "Donate silk clothes or jewelry to newly married couples or women in need",
    ],
  },
  {
    slug: "uttara-phalguni",
    name: "Uttara Phalguni",
    number: 12,
    zodiacSign: "simha",
    rulingPlanet: "Sun",
    deity: "Aryaman (God of Patronage and Contracts)",
    symbol: "Back legs of a bed",
    nature: "Manushya",
    gana: "Manushya",
    gender: "Female",
    element: "Fire",
    degreeRange: "26°40' Leo - 10° Virgo",
    animalSymbol: "Male Cow (Bull)",
    qualities: ["Generosity", "Reliability", "Social service", "Leadership", "Commitment"],
    overview:
      "Uttara Phalguni spans the cusp of Leo and Virgo, blending regal leadership with practical service. Ruled by the Sun and governed by Aryaman, the god of patronage, honor, and social contracts, this nakshatra represents the responsible use of power and resources for the benefit of society. While Purva Phalguni enjoys the fruits of life, Uttara Phalguni channels that energy into service and commitment. This nakshatra is strongly associated with marriage, contracts, and lasting partnerships.",
    personality:
      "Uttara Phalguni natives are generous, dependable, and deeply committed to their responsibilities. They possess natural leadership qualities combined with a genuine desire to serve and uplift others. Their Sun-ruled nature gives them confidence and warmth, while the Virgo influence adds practicality and attention to detail.",
    career:
      "Uttara Phalguni natives thrive in social welfare, HR, diplomacy, and organizational leadership. Their patronage-oriented nature makes them excellent managers, philanthropists, and counselors. They excel in government administration, NGO leadership, and any role that involves creating structured support for others.",
    compatibility:
      "Uttara Phalguni is most compatible with Purva Phalguni and Krittika nakshatras. The Sun's warmth creates deep bonds with nakshatras that value loyalty and commitment. Relationships are strongest when built on mutual respect, shared responsibilities, and common social goals.",
    remedies: [
      "Chant the Surya beej mantra: 'Om Hraam Hreem Hraum Sah Suryaya Namah' at sunrise daily",
      "Worship Aryaman by honoring contracts, keeping promises, and supporting social causes",
      "Donate food and resources to charitable organizations on Sundays",
    ],
  },
  {
    slug: "hasta",
    name: "Hasta",
    number: 13,
    zodiacSign: "kanya",
    rulingPlanet: "Moon",
    deity: "Savitar (Sun God of Inspiration)",
    symbol: "Open hand or fist",
    nature: "Deva",
    gana: "Deva",
    gender: "Male",
    element: "Fire",
    degreeRange: "10° - 23°20' Virgo",
    animalSymbol: "Female Buffalo",
    qualities: ["Manual dexterity", "Craftsmanship", "Wit and humor", "Healing hands", "Resourcefulness"],
    overview:
      "Hasta, meaning 'the hand,' is a nakshatra of remarkable skill, dexterity, and craftsmanship. Ruled by the Moon and governed by Savitar, the solar deity who inspires creative action, Hasta combines lunar intuition with practical Virgoan skill. This nakshatra is associated with the magical power of the hands -- healing, creating, and manifesting through touch. Hasta natives are often gifted artisans, healers, and craftspeople who can create extraordinary things with their bare hands.",
    personality:
      "Hasta natives are clever, resourceful, and possess exceptional manual skills. They have a sharp wit and entertaining sense of humor that endears them to others. Their Moon-Virgo combination creates emotionally intelligent individuals who are both analytical and intuitively perceptive.",
    career:
      "Hasta natives excel in handicrafts, surgery, jewelry making, massage therapy, and all hand-related professions. Their analytical minds and dexterous hands make them outstanding surgeons, artists, and engineers. They also thrive in comedy, writing, counseling, and astrology.",
    compatibility:
      "Hasta is most compatible with Rohini and Shravana nakshatras, sharing Moon's intuitive and nurturing energy. Partners who appreciate skillfulness, humor, and emotional sensitivity create the best matches. Relationships flourish when there is mutual creative stimulation and emotional safety.",
    remedies: [
      "Chant the Chandra beej mantra: 'Om Shraam Shreem Shraum Sah Chandraya Namah' on Mondays",
      "Worship Savitar by performing Gayatri mantra japa at dawn and dusk",
      "Practice mudras (hand gestures) during meditation to channel Hasta's energy",
    ],
  },
  {
    slug: "chitra",
    name: "Chitra",
    number: 14,
    zodiacSign: "kanya",
    rulingPlanet: "Mars",
    deity: "Vishvakarma (Divine Architect)",
    symbol: "Bright jewel or pearl",
    nature: "Rakshasa",
    gana: "Rakshasa",
    gender: "Female",
    element: "Fire",
    degreeRange: "23°20' Virgo - 6°40' Libra",
    animalSymbol: "Female Tiger",
    qualities: ["Artistic brilliance", "Architectural vision", "Beauty", "Charisma", "Innovation"],
    overview:
      "Chitra, meaning 'the brilliant one,' is associated with the dazzling star Spica and represents the pinnacle of creative artistry and beauty in Vedic astrology. Ruled by Mars and governed by Vishvakarma, the divine architect of the cosmos, Chitra embodies the power to create magnificent forms from raw materials. Spanning the cusp of Virgo and Libra, this nakshatra combines analytical precision with aesthetic harmony. Chitra natives are born artists and designers who see beauty as a fundamental force of the universe.",
    personality:
      "Chitra natives are strikingly attractive, creative, and possess an innate sense of aesthetics and design. They have a charismatic presence that commands attention and an ability to envision and create beauty in all its forms. Their Mars energy gives them the drive and courage to bring bold creative visions to life.",
    career:
      "Chitra natives excel in architecture, interior design, fashion, graphic design, and visual arts. Their Vishvakarma influence makes them outstanding engineers, builders, and technologists. They also thrive in photography, filmmaking, jewelry design, and any field that combines aesthetics with technical precision.",
    compatibility:
      "Chitra is most compatible with Mrigashira and Dhanishta nakshatras, sharing Mars rulership and creative energy. Partners who appreciate beauty, artistry, and bold self-expression make ideal matches. Relationships work best when both partners support each other's creative ambitions.",
    remedies: [
      "Chant the Mars beej mantra: 'Om Kraam Kreem Kraum Sah Bhaumaya Namah' on Tuesdays",
      "Worship Lord Vishvakarma, especially on Vishvakarma Puja day, with tools and creative instruments",
      "Create or donate art, and support artisans and craftspeople in your community",
    ],
  },
  {
    slug: "swati",
    name: "Swati",
    number: 15,
    zodiacSign: "tula",
    rulingPlanet: "Rahu",
    deity: "Vayu (God of Wind)",
    symbol: "Young plant swaying in the wind or coral",
    nature: "Deva",
    gana: "Deva",
    gender: "Female",
    element: "Fire",
    degreeRange: "6°40' - 20° Libra",
    animalSymbol: "Male Buffalo",
    qualities: ["Independence", "Flexibility", "Diplomacy", "Business acumen", "Self-reliance"],
    overview:
      "Swati, meaning 'the self-going one' or 'independent,' is associated with the bright star Arcturus and represents the power of independent movement and self-determination. Ruled by Rahu and governed by Vayu, the wind god, Swati embodies the flexibility of a young plant that bends with the wind but never breaks. Located in Libra, this nakshatra combines social grace with fierce independence. Swati natives are natural diplomats and entrepreneurs who thrive through adaptability and self-reliance.",
    personality:
      "Swati natives are diplomatic, independent, and possess a natural talent for business and social navigation. They are flexible and adaptable, able to adjust to changing circumstances while maintaining their core identity. Their Rahu-Vayu combination creates restless, ambitious individuals who are constantly seeking freedom and growth.",
    career:
      "Swati natives excel in business, trade, diplomacy, law, and stock markets. Their Rahu-driven ambition and Vayu-like flexibility make them successful entrepreneurs and negotiators. They thrive in travel, aviation, sports, and any field that offers freedom, movement, and opportunities for independent achievement.",
    compatibility:
      "Swati is most compatible with Ardra and Shatabhisha nakshatras, sharing Rahu's unconventional energy. Partners who respect independence and enjoy intellectual stimulation create the best bonds. Relationships flourish when there is mutual freedom, trust, and shared ambition.",
    remedies: [
      "Chant the Rahu beej mantra: 'Om Bhraam Bhreem Bhraum Sah Rahave Namah' on Saturdays",
      "Worship Lord Vayu through pranayama (breathing exercises) and outdoor meditation",
      "Donate to environmental causes and plant trees to honor Vayu's element",
    ],
  },
  {
    slug: "vishakha",
    name: "Vishakha",
    number: 16,
    zodiacSign: "tula",
    rulingPlanet: "Jupiter",
    deity: "Indra and Agni (King of Gods and Fire God)",
    symbol: "Triumphal archway or potter's wheel",
    nature: "Rakshasa",
    gana: "Rakshasa",
    gender: "Female",
    element: "Fire",
    degreeRange: "20° Libra - 3°20' Scorpio",
    animalSymbol: "Male Tiger",
    qualities: ["Determination", "Goal-oriented focus", "Courage", "Ambition", "Transformative power"],
    overview:
      "Vishakha, meaning 'forked branch' or 'two-branched,' spans the cusp of Libra and Scorpio and represents the relentless pursuit of goals and purpose. Ruled by Jupiter and governed jointly by Indra and Agni, this nakshatra combines divine authority with purifying fire. Vishakha is the nakshatra of the focused achiever who will not rest until the goal is reached. The triumphal archway symbolizes the victory that awaits those who persevere through Vishakha's demanding but ultimately rewarding energy.",
    personality:
      "Vishakha natives are intensely focused, ambitious, and possess an unwavering determination to achieve their goals. They have the charisma to inspire and lead others, combined with the patience to wait for the right moment to act. Their Jupiter-influenced nature gives them wisdom and optimism, while the Scorpio influence adds depth and transformative power.",
    career:
      "Vishakha natives excel in politics, military leadership, corporate management, and religious or spiritual leadership. Their goal-oriented nature makes them outstanding strategists, researchers, and reformers. They thrive in any field that requires sustained effort, strategic thinking, and the courage to challenge the status quo.",
    compatibility:
      "Vishakha is most compatible with Krittika and Anuradha nakshatras. The fire-and-focus energy pairs well with partners who share their intensity and ambition. Relationships are strongest when both partners have clear goals and support each other's growth toward those objectives.",
    remedies: [
      "Chant the Jupiter beej mantra: 'Om Graam Greem Graum Sah Gurave Namah' on Thursdays",
      "Perform Indra puja or Agni homa to invoke the blessings of both presiding deities",
      "Donate yellow or orange items and support educational institutions or temples",
    ],
  },
  {
    slug: "anuradha",
    name: "Anuradha",
    number: 17,
    zodiacSign: "vrishchika",
    rulingPlanet: "Saturn",
    deity: "Mitra (God of Friendship and Partnership)",
    symbol: "Lotus flower or triumphal archway",
    nature: "Deva",
    gana: "Deva",
    gender: "Male",
    element: "Fire",
    degreeRange: "3°20' - 16°40' Scorpio",
    animalSymbol: "Female Deer (Hare)",
    qualities: ["Devotion", "Friendship", "Organization", "Spiritual depth", "Resilience"],
    overview:
      "Anuradha, meaning 'following Radha' or 'subsequent success,' is a nakshatra of devotion, friendship, and the ability to flourish even in difficult circumstances. Ruled by Saturn and governed by Mitra, the god of friendship and cosmic order, Anuradha combines discipline with warmth. Located in the intense sign of Scorpio, this nakshatra represents the lotus that blooms beautifully in muddy waters. Anuradha teaches that true success comes through devotion, loyalty, and the strength to endure adversity.",
    personality:
      "Anuradha natives are warm, loyal, and possess a rare ability to maintain friendships and build meaningful connections. They are emotionally deep yet disciplined, combining Scorpio's intensity with Saturn's patience and endurance. Their devotional nature makes them steadfast in love, friendship, and spiritual practice.",
    career:
      "Anuradha natives excel in organizational leadership, diplomacy, counseling, and spiritual teaching. Their ability to build networks makes them outstanding in public relations, team management, and international relations. They also thrive in mining, research, occult sciences, and any field requiring both depth and social skills.",
    compatibility:
      "Anuradha is most compatible with Vishakha and Jyeshtha nakshatras due to Scorpio proximity and shared intensity. The friendship-oriented energy pairs well with partners who value loyalty and emotional depth. Relationships are most fulfilling when built on mutual devotion and honest communication.",
    remedies: [
      "Chant the Saturn beej mantra: 'Om Praam Preem Praum Sah Shanaye Namah' on Saturdays",
      "Worship Mitra through acts of friendship -- reconcile estranged relationships and build community",
      "Offer blue or purple flowers at a Shiva temple and practice daily meditation",
    ],
  },
  {
    slug: "jyeshtha",
    name: "Jyeshtha",
    number: 18,
    zodiacSign: "vrishchika",
    rulingPlanet: "Mercury",
    deity: "Indra (King of the Gods)",
    symbol: "Circular amulet or earring",
    nature: "Rakshasa",
    gana: "Rakshasa",
    gender: "Female",
    element: "Air",
    degreeRange: "16°40' - 30° Scorpio",
    animalSymbol: "Male Deer (Hare)",
    qualities: ["Seniority and authority", "Protective instinct", "Strategic mind", "Valor", "Occult knowledge"],
    overview:
      "Jyeshtha, meaning 'the eldest' or 'the chief,' represents the pinnacle of power, authority, and worldly achievement in the zodiac. Ruled by Mercury and governed by Indra, the king of the gods, this nakshatra embodies supreme leadership and the burdens that come with it. Located at the end of Scorpio, Jyeshtha marks the transition from material power to spiritual transformation. This is the nakshatra of elder statesmen, experienced leaders, and those who wield authority with both intelligence and responsibility.",
    personality:
      "Jyeshtha natives are authoritative, intelligent, and carry themselves with the gravitas of natural leaders. They have a protective instinct toward those they consider under their care, sometimes bordering on possessiveness. Their Mercury-Scorpio combination creates sharp minds with deep psychological insight and strategic brilliance.",
    career:
      "Jyeshtha natives excel in government, military command, intelligence services, and corporate leadership. Their Mercury rulership adds communication prowess, making them effective politicians, spokespersons, and media personalities. They thrive in positions of power and responsibility where their protective and strategic natures are valued.",
    compatibility:
      "Jyeshtha is most compatible with Ashlesha and Anuradha nakshatras. The protective leadership energy pairs well with partners who appreciate strength tempered by intelligence. Relationships work best when there is clear mutual respect and both partners honor each other's authority and autonomy.",
    remedies: [
      "Chant the Mercury beej mantra: 'Om Braam Breem Braum Sah Budhaya Namah' on Wednesdays",
      "Worship Lord Indra through Vedic rituals and offer green items on Wednesdays",
      "Practice humility and mentorship -- guide younger people as an expression of Jyeshtha's highest potential",
    ],
  },
  {
    slug: "moola",
    name: "Moola",
    number: 19,
    zodiacSign: "dhanu",
    rulingPlanet: "Ketu",
    deity: "Nirriti (Goddess of Dissolution and Destruction)",
    symbol: "Bunch of roots tied together or elephant goad",
    nature: "Rakshasa",
    gana: "Rakshasa",
    gender: "Male",
    element: "Air",
    degreeRange: "0° - 13°20' Sagittarius",
    animalSymbol: "Male Dog",
    qualities: ["Root-seeking nature", "Spiritual transformation", "Investigation", "Destruction of illusion", "Philosophical depth"],
    overview:
      "Moola, meaning 'the root,' occupies the galactic center of our Milky Way galaxy, making it one of the most powerful and transformative nakshatras. Ruled by Ketu and governed by Nirriti, the goddess of dissolution, Moola represents the uprooting of everything superficial to reach the fundamental truth. Located at the start of Sagittarius, this nakshatra initiates the journey from material dissolution to philosophical and spiritual wisdom. Moola's energy is intense and can bring sudden, dramatic changes that ultimately lead to profound spiritual growth.",
    personality:
      "Moola natives are intense investigators who are driven to get to the root of every matter. They possess a philosophical bent and are not afraid to question established beliefs and structures. Their Ketu-Sagittarius combination creates spiritual seekers who must often undergo significant destruction of the old before they can build something truly meaningful.",
    career:
      "Moola natives excel in research, medicine (especially root causes of disease), herbalism, archaeology, and philosophy. Their investigative nature makes them outstanding scientists, detectives, and spiritual teachers. They thrive in alternative medicine, astrology, and any field that involves uncovering hidden truths.",
    compatibility:
      "Moola is most compatible with Ashwini and Magha nakshatras, sharing Ketu's spiritual and karmic energy. Partners who can handle intensity and appreciate spiritual depth create the strongest connections. Relationships mature through shared transformative experiences and spiritual growth.",
    remedies: [
      "Chant the Ketu beej mantra: 'Om Sraam Sreem Sraum Sah Ketave Namah' 108 times daily",
      "Worship Goddess Nirriti or Goddess Kali for protection and transformation",
      "Donate roots, herbs, and Ayurvedic medicines to those in need; practice grounding meditation",
    ],
  },
  {
    slug: "purva-ashadha",
    name: "Purva Ashadha",
    number: 20,
    zodiacSign: "dhanu",
    rulingPlanet: "Venus",
    deity: "Apas (Water Goddess / Cosmic Waters)",
    symbol: "Elephant tusk or fan",
    nature: "Manushya",
    gana: "Manushya",
    gender: "Female",
    element: "Air",
    degreeRange: "13°20' - 26°40' Sagittarius",
    animalSymbol: "Male Monkey",
    qualities: ["Invincibility", "Purification", "Eloquence", "Optimism", "Philosophical vision"],
    overview:
      "Purva Ashadha, meaning 'the former invincible one' or 'early victory,' represents the undefeatable spirit and the purifying power of cosmic waters. Ruled by Venus and governed by Apas, the deity of cosmic waters, this nakshatra combines Venusian beauty and charm with Sagittarian philosophical vision. Located in the heart of Sagittarius, Purva Ashadha embodies the confidence that comes from knowing one's truth. This nakshatra grants its natives an almost prophetic ability to declare victory before the battle has even begun.",
    personality:
      "Purva Ashadha natives are confident, eloquent, and possess a deep philosophical understanding of life. They have a gift for persuasion and can inspire others with their vision and optimism. Their Venus-Sagittarius blend creates charismatic individuals who combine sensual appreciation with spiritual wisdom.",
    career:
      "Purva Ashadha natives excel in law, public speaking, writing, philosophy, and water-related industries. Their persuasive abilities make them outstanding lawyers, motivational speakers, and spiritual teachers. They thrive in media, publishing, maritime industries, and any field that involves inspiring others through words and vision.",
    compatibility:
      "Purva Ashadha is most compatible with Uttara Ashadha and Bharani nakshatras. Venus-ruled nakshatras create partnerships built on shared aesthetic values and optimism. Relationships flourish when both partners share a philosophical outlook and support each other's vision of victory.",
    remedies: [
      "Chant the Venus beej mantra: 'Om Draam Dreem Draum Sah Shukraya Namah' on Fridays",
      "Offer water to sacred rivers or perform Varuna puja (water deity worship)",
      "Donate to water purification projects or provide clean drinking water to communities in need",
    ],
  },
  {
    slug: "uttara-ashadha",
    name: "Uttara Ashadha",
    number: 21,
    zodiacSign: "dhanu",
    rulingPlanet: "Sun",
    deity: "Vishvadevas (Universal Gods / Ten Deities)",
    symbol: "Elephant tusk or small bed",
    nature: "Manushya",
    gana: "Manushya",
    gender: "Female",
    element: "Air",
    degreeRange: "26°40' Sagittarius - 10° Capricorn",
    animalSymbol: "Male Mongoose",
    qualities: ["Universal principles", "Lasting achievement", "Integrity", "Righteousness", "Leadership"],
    overview:
      "Uttara Ashadha, meaning 'the latter invincible one' or 'final victory,' represents the definitive, lasting victory that comes through righteousness and universal principles. Ruled by the Sun and governed by the Vishvadevas (ten universal gods), this nakshatra embodies the highest ideals of dharma, truth, and cosmic order. Spanning the cusp of Sagittarius and Capricorn, Uttara Ashadha combines philosophical vision with practical achievement. Many great leaders and reformers throughout history have had strong Uttara Ashadha placements.",
    personality:
      "Uttara Ashadha natives are principled, determined, and deeply committed to universal values and lasting achievement. They possess natural authority and earn respect through their integrity and unwavering commitment to what is right. Their Sun-ruled nature gives them confidence and clarity of purpose that inspires others to follow.",
    career:
      "Uttara Ashadha natives excel in government leadership, law, social reform, and institutional management. Their commitment to universal principles makes them outstanding judges, diplomats, and policy makers. They thrive in defense, education, and any field that involves upholding standards and creating lasting positive change.",
    compatibility:
      "Uttara Ashadha is most compatible with Purva Ashadha and Krittika nakshatras. Sun-ruled nakshatras create powerful partnerships built on shared values and mutual respect. Relationships are strongest when both partners share a commitment to integrity and making a positive impact.",
    remedies: [
      "Chant the Surya beej mantra: 'Om Hraam Hreem Hraum Sah Suryaya Namah' at sunrise",
      "Worship the Vishvadevas by supporting universal causes and practicing dharma in daily life",
      "Perform Surya Namaskar (Sun Salutation) daily and donate to social welfare organizations",
    ],
  },
  {
    slug: "shravana",
    name: "Shravana",
    number: 22,
    zodiacSign: "makara",
    rulingPlanet: "Moon",
    deity: "Vishnu (The Preserver)",
    symbol: "Three footprints or ear",
    nature: "Deva",
    gana: "Deva",
    gender: "Male",
    element: "Air",
    degreeRange: "10° - 23°20' Capricorn",
    animalSymbol: "Female Monkey",
    qualities: ["Deep listening", "Learning", "Connection", "Perseverance", "Wisdom through hearing"],
    overview:
      "Shravana, meaning 'hearing' or 'listening,' is one of the most spiritually significant nakshatras, associated with the power of learning through listening and divine connection. Ruled by the Moon and governed by Lord Vishnu, the preserver of the universe, Shravana represents the sacred act of receiving knowledge. The three footprints symbolize Vishnu's Vamana avatar, who covered the three worlds in three steps. Located in Capricorn, this nakshatra combines spiritual receptivity with practical worldly achievement.",
    personality:
      "Shravana natives are excellent listeners, wise counselors, and lifelong learners who absorb knowledge from every experience. They possess remarkable intuition and an ability to understand complex situations through careful observation. Their Moon-Capricorn combination creates emotionally sensitive yet pragmatic individuals who achieve through patience and persistence.",
    career:
      "Shravana natives excel in teaching, counseling, music, media, and communications. Their listening ability makes them outstanding therapists, mediators, and journalists. They thrive in telecommunications, languages, broadcasting, and any field that involves transmitting knowledge and connecting people.",
    compatibility:
      "Shravana is most compatible with Hasta and Rohini nakshatras, sharing Moon's receptive and nurturing energy. Partners who value communication, knowledge-sharing, and emotional depth create the best bonds. Relationships flourish through meaningful conversations and mutual growth.",
    remedies: [
      "Chant the Chandra beej mantra: 'Om Shraam Shreem Shraum Sah Chandraya Namah' on Mondays",
      "Worship Lord Vishnu by chanting the Vishnu Sahasranama or reciting Vishnu mantras",
      "Practice active listening meditation and donate to educational causes or libraries",
    ],
  },
  {
    slug: "dhanishta",
    name: "Dhanishta",
    number: 23,
    zodiacSign: "makara",
    rulingPlanet: "Mars",
    deity: "Eight Vasus (Elemental Gods of Nature)",
    symbol: "Drum (mridanga) or flute",
    nature: "Rakshasa",
    gana: "Rakshasa",
    gender: "Female",
    element: "Ether",
    degreeRange: "23°20' Capricorn - 6°40' Aquarius",
    animalSymbol: "Female Lion",
    qualities: ["Musical talent", "Wealth and abundance", "Rhythm", "Adaptability", "Group consciousness"],
    overview:
      "Dhanishta, meaning 'the most famous' or 'the wealthiest,' is the nakshatra of abundance, music, and rhythm. Ruled by Mars and governed by the eight Vasus (elemental nature gods), Dhanishta combines martial energy with the harmony of natural forces. Spanning the cusp of Capricorn and Aquarius, this nakshatra bridges material achievement with humanitarian vision. The drum symbol represents the rhythm of the cosmos and the musical talent that is a hallmark of Dhanishta natives.",
    personality:
      "Dhanishta natives are talented, ambitious, and possess a natural sense of rhythm in all aspects of life. They are socially adept and often surrounded by friends and admirers due to their generous and entertaining nature. Their Mars-Vasu combination creates dynamic individuals who channel elemental energy into creative and material abundance.",
    career:
      "Dhanishta natives excel in music, dance, performing arts, real estate, and property management. Their connection to the Vasus makes them successful in mining, engineering, and natural resource management. They also thrive in sports, military, group leadership, and any field that involves rhythm, timing, and coordinated action.",
    compatibility:
      "Dhanishta is most compatible with Chitra and Mrigashira nakshatras, sharing Mars rulership and creative energy. Partners who appreciate music, abundance, and social engagement make ideal matches. Relationships are enriched through shared creative pursuits and a love for life's pleasures.",
    remedies: [
      "Chant the Mars beej mantra: 'Om Kraam Kreem Kraum Sah Bhaumaya Namah' on Tuesdays",
      "Worship the eight Vasus through Vedic fire rituals or elemental meditation",
      "Learn and practice a musical instrument, and donate to music education programs",
    ],
  },
  {
    slug: "shatabhisha",
    name: "Shatabhisha",
    number: 24,
    zodiacSign: "kumbha",
    rulingPlanet: "Rahu",
    deity: "Varuna (God of Cosmic Waters and Order)",
    symbol: "Empty circle or 100 flowers/physicians",
    nature: "Rakshasa",
    gana: "Rakshasa",
    gender: "Male",
    element: "Ether",
    degreeRange: "6°40' - 20° Aquarius",
    animalSymbol: "Female Horse",
    qualities: ["Healing power", "Mystical knowledge", "Independence", "Veiling and secrecy", "Scientific mind"],
    overview:
      "Shatabhisha, meaning 'hundred physicians' or 'hundred healers,' is a nakshatra of profound healing power, mystical knowledge, and cosmic truth. Ruled by Rahu and governed by Varuna, the god of cosmic waters and celestial order, Shatabhisha represents the ability to penetrate the veil of illusion and access hidden healing knowledge. Located in Aquarius, this nakshatra combines humanitarian vision with occult wisdom. The empty circle symbolizes the void of creation and the mystery that lies beyond ordinary perception.",
    personality:
      "Shatabhisha natives are independent, secretive, and possess deep healing abilities that may manifest through conventional or alternative medicine. They have a scientific yet mystical approach to life, often interested in areas where science meets spirituality. Their Rahu-Aquarius combination creates unconventional thinkers who challenge norms and seek truth beyond appearances.",
    career:
      "Shatabhisha natives excel in medicine, pharmaceuticals, space science, astrology, and alternative healing. Their Varuna connection makes them successful in marine sciences, hydrology, and water treatment. They thrive in technology, research, and any field that involves uncovering hidden truths or healing through unconventional methods.",
    compatibility:
      "Shatabhisha is most compatible with Ardra and Swati nakshatras, sharing Rahu's innovative and unconventional energy. Partners who appreciate independence, intellectual depth, and the mystical side of life create the strongest bonds. Relationships work best when both partners respect each other's need for space and individual pursuits.",
    remedies: [
      "Chant the Rahu beej mantra: 'Om Bhraam Bhreem Bhraum Sah Rahave Namah' 108 times",
      "Worship Lord Varuna by offering water and coconuts at rivers or the ocean",
      "Study and practice healing arts; donate to hospitals or medical research programs",
    ],
  },
  {
    slug: "purva-bhadrapada",
    name: "Purva Bhadrapada",
    number: 25,
    zodiacSign: "kumbha",
    rulingPlanet: "Jupiter",
    deity: "Aja Ekapada (One-footed Serpent of the Cosmic Fire)",
    symbol: "Front of a funeral cot or two-faced man",
    nature: "Manushya",
    gana: "Manushya",
    gender: "Male",
    element: "Ether",
    degreeRange: "20° Aquarius - 3°20' Pisces",
    animalSymbol: "Male Lion",
    qualities: ["Spiritual fire", "Penance and austerity", "Dual nature", "Transformative vision", "Philosophical intensity"],
    overview:
      "Purva Bhadrapada, meaning 'the former blessed feet,' is one of the most intense and spiritually powerful nakshatras in the zodiac. Ruled by Jupiter and governed by Aja Ekapada, the one-footed cosmic serpent associated with Shiva's fierce form, this nakshatra represents the burning fire of spiritual transformation. Spanning the cusp of Aquarius and Pisces, it bridges humanitarian idealism with mystical transcendence. Purva Bhadrapada natives often undergo dramatic spiritual transformations that fundamentally alter their life path.",
    personality:
      "Purva Bhadrapada natives are intense, passionate, and driven by a fierce inner fire that can manifest as spiritual fervor or worldly ambition. They possess a dual nature that can swing between extreme asceticism and material indulgence. Their Jupiter-influenced expansion combined with the fierce energy of Aja Ekapada creates powerful personalities who are agents of radical transformation.",
    career:
      "Purva Bhadrapada natives excel in spiritual leadership, social reform, research, and transformative therapies. Their intensity makes them outstanding in mortuary sciences, astrology, and occult practices. They thrive in humanitarian work, psychology, and any field that involves radical transformation and challenging conventional thinking.",
    compatibility:
      "Purva Bhadrapada is most compatible with Uttara Bhadrapada and Vishakha nakshatras. The spiritually intense energy pairs well with partners who appreciate depth and are not afraid of transformation. Relationships are most fulfilling when both partners share a commitment to spiritual growth and social change.",
    remedies: [
      "Chant the Jupiter beej mantra: 'Om Graam Greem Graum Sah Gurave Namah' on Thursdays",
      "Worship Lord Shiva in his Rudra form and perform Maha Mrityunjaya mantra japa",
      "Practice tapas (austerities) such as fasting and meditation, and donate to spiritual organizations",
    ],
  },
  {
    slug: "uttara-bhadrapada",
    name: "Uttara Bhadrapada",
    number: 26,
    zodiacSign: "meena",
    rulingPlanet: "Saturn",
    deity: "Ahir Budhnya (Serpent of the Deep Ocean)",
    symbol: "Back of a funeral cot or twins",
    nature: "Manushya",
    gana: "Manushya",
    gender: "Male",
    element: "Ether",
    degreeRange: "3°20' - 16°40' Pisces",
    animalSymbol: "Female Cow",
    qualities: ["Deep wisdom", "Spiritual discipline", "Compassion", "Endurance", "Kundalini mastery"],
    overview:
      "Uttara Bhadrapada, meaning 'the latter blessed feet,' represents the culmination of spiritual wisdom and the deep ocean of cosmic consciousness. Ruled by Saturn and governed by Ahir Budhnya, the serpent of the cosmic deep, this nakshatra embodies the controlled power of kundalini energy and the profound wisdom that comes from deep meditation. Located fully in Pisces, this is one of the most spiritually evolved nakshatras, representing the sage who has mastered both worldly discipline and mystical knowledge.",
    personality:
      "Uttara Bhadrapada natives are wise, compassionate, and possess a depth of spiritual understanding that is rare. They are patient, disciplined, and have mastered the art of emotional control. Their Saturn-Pisces combination creates deeply empathetic individuals who combine practical wisdom with mystical insight.",
    career:
      "Uttara Bhadrapada natives excel in spiritual counseling, charity work, yoga instruction, and philosophical teaching. Their discipline and compassion make them outstanding healers, monks, and nonprofit leaders. They thrive in charitable organizations, hospice care, meditation teaching, and any field that serves humanity with wisdom and compassion.",
    compatibility:
      "Uttara Bhadrapada is most compatible with Purva Bhadrapada and Anuradha nakshatras. The deep spiritual energy pairs well with partners who value compassion, discipline, and inner growth. Relationships are most fulfilling when there is a shared spiritual practice and mutual respect for solitude.",
    remedies: [
      "Chant the Saturn beej mantra: 'Om Praam Preem Praum Sah Shanaye Namah' on Saturdays",
      "Worship the cosmic serpent Ahir Budhnya through Kundalini yoga and deep meditation",
      "Serve the elderly, perform charity on Saturdays, and donate to hospice or elder care organizations",
    ],
  },
  {
    slug: "revati",
    name: "Revati",
    number: 27,
    zodiacSign: "meena",
    rulingPlanet: "Mercury",
    deity: "Pushan (Nourisher God, Protector of Travelers)",
    symbol: "Fish swimming in the sea or drum",
    nature: "Deva",
    gana: "Deva",
    gender: "Female",
    element: "Ether",
    degreeRange: "16°40' - 30° Pisces",
    animalSymbol: "Female Elephant",
    qualities: ["Nurturing spirit", "Safe passage", "Prosperity", "Creativity", "Completion"],
    overview:
      "Revati, meaning 'the wealthy one' or 'the prosperous,' is the final nakshatra of the zodiac, completing the cosmic cycle of 27 lunar mansions. Ruled by Mercury and governed by Pushan, the nourishing god who guides travelers and souls on their journeys, Revati represents safe arrival, abundance, and the completion of a great cycle. Located at the end of Pisces, this nakshatra embodies the wisdom gained from the entire zodiacal journey. Revati is considered highly auspicious for journeys, creative endeavors, and new beginnings that arise from completion.",
    personality:
      "Revati natives are gentle, creative, and possess a deeply nurturing nature that makes others feel safe and cared for. They have an intuitive understanding of life's cyclical nature and carry a quiet wisdom that comes from being the final nakshatra. Their Mercury-Pisces combination creates imaginative, articulate individuals with strong psychic abilities.",
    career:
      "Revati natives excel in creative arts, entertainment, travel industry, animal care, and spiritual counseling. Their Pushan-guided nature makes them outstanding guides, teachers, and protectors. They thrive in fostering, orphanage work, long-distance travel, marine biology, and any field that involves nurturing, guiding, or creative expression.",
    compatibility:
      "Revati is most compatible with Bharani and Ashlesha nakshatras. The nurturing completion energy pairs well with partners who appreciate gentleness and creativity. Relationships are most harmonious when filled with mutual care, creative collaboration, and a shared appreciation for life's spiritual dimensions.",
    remedies: [
      "Chant the Mercury beej mantra: 'Om Braam Breem Braum Sah Budhaya Namah' on Wednesdays",
      "Worship Lord Pushan by offering food to travelers and caring for animals, especially cows",
      "Perform charity on the last day of the lunar month and support orphanages or animal shelters",
    ],
  },
];

export function getNakshatraBySlug(slug: string): Nakshatra | undefined {
  return nakshatras.find((n) => n.slug === slug);
}
