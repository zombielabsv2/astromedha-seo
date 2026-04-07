export interface ZodiacSign {
  slug: string;
  name: string;
  englishName: string;
  sanskritName: string;
  symbol: string;
  element: string;
  quality: string;
  rulingPlanet: string;
  rulingPlanetSanskrit: string;
  dateRange: string;
  luckyNumbers: number[];
  luckyColors: string[];
  luckyDay: string;
  compatibleSigns: string[];
  bodyPart: string;
  mantra: string;
  deity: string;
  overview: string;
  personality: string;
  career: string;
  love: string;
  health: string;
  strengths: string[];
  weaknesses: string[];
  famousPersonalities: string[];
}

export const zodiacSigns: ZodiacSign[] = [
  {
    slug: "mesha",
    name: "Mesha (Aries)",
    englishName: "Aries",
    sanskritName: "Mesha",
    symbol: "\u2648",
    element: "Fire",
    quality: "Cardinal",
    rulingPlanet: "Mars",
    rulingPlanetSanskrit: "Mangal",
    dateRange: "Apr 14 \u2013 May 14",
    luckyNumbers: [9, 18, 27],
    luckyColors: ["Red", "Scarlet", "Coral"],
    luckyDay: "Tuesday",
    compatibleSigns: ["simha", "dhanu", "mithuna"],
    bodyPart: "Head and brain",
    mantra: "Om Kraam Kreem Kraum Sah Bhaumaya Namah",
    deity: "Lord Kartikeya (Subramanya)",
    overview:
      "Mesha is the first sign of the Vedic zodiac, ruled by the fiery planet Mars (Mangal). Natives born under this sign are natural pioneers who thrive on initiative and action. In Jyotish, Mesha represents the head of the Kaala Purusha, symbolizing new beginnings and raw willpower. This cardinal fire sign bestows courage, assertiveness, and an innate drive to lead.",
    personality:
      "Mesha natives are bold, energetic, and fiercely independent. They possess a natural warrior spirit that makes them first movers in every situation. Their enthusiasm is contagious but can sometimes manifest as impatience or impulsiveness. When channeled well, their Martian energy produces remarkable leadership and the courage to forge new paths where none exist.",
    career:
      "Mesha natives excel in roles demanding quick decisions and bold action \u2014 military, surgery, sports, entrepreneurship, and engineering. Their competitive drive and ability to take initiative make them effective leaders, especially in startup environments or crisis management.",
    love:
      "In relationships, Mesha natives are passionate and protective partners who love intensely. They need a partner who matches their energy and respects their independence. Compatibility is strongest with fellow fire signs (Simha, Dhanu) and the intellectually stimulating Mithuna.",
    health:
      "The head, brain, and blood are the primary areas of concern for Mesha natives. They are prone to headaches, migraines, fevers, and injuries to the head or face. Regular physical activity is essential to channel their abundant Mars energy constructively.",
    strengths: [
      "Courageous and fearless in adversity",
      "Natural leadership ability",
      "Quick decision-making",
      "High energy and stamina",
      "Pioneer spirit and initiative",
    ],
    weaknesses: [
      "Impulsive and short-tempered",
      "Can be aggressive or domineering",
      "Difficulty with patience and long-term planning",
      "Tendency to start projects without finishing them",
    ],
    famousPersonalities: [
      "Ajay Devgn",
      "Sachin Tendulkar",
      "Mukesh Ambani",
      "Akshay Kumar",
    ],
  },
  {
    slug: "vrishabha",
    name: "Vrishabha (Taurus)",
    englishName: "Taurus",
    sanskritName: "Vrishabha",
    symbol: "\u2649",
    element: "Earth",
    quality: "Fixed",
    rulingPlanet: "Venus",
    rulingPlanetSanskrit: "Shukra",
    dateRange: "May 15 \u2013 Jun 14",
    luckyNumbers: [6, 15, 24],
    luckyColors: ["White", "Pink", "Light Blue"],
    luckyDay: "Friday",
    compatibleSigns: ["kanya", "makara", "karka"],
    bodyPart: "Throat, neck, and face",
    mantra: "Om Draam Dreem Draum Sah Shukraya Namah",
    deity: "Goddess Lakshmi",
    overview:
      "Vrishabha is the second sign of the Vedic zodiac, governed by Venus (Shukra), the planet of beauty, wealth, and sensual pleasures. As a fixed earth sign, Vrishabha represents stability, material abundance, and the power of sustained effort. In the Kaala Purusha, it rules the face and throat, connecting this sign to speech, food, and accumulated wealth. Vrishabha natives are the builders of the zodiac, creating lasting value through patience and persistence.",
    personality:
      "Vrishabha natives are grounded, dependable, and deeply sensual. They have a refined aesthetic sense and a strong attachment to comfort, beauty, and material security. Their fixed nature gives them extraordinary perseverance but can also make them resistant to change. They are loyal friends and partners who value trust and consistency above all else.",
    career:
      "Vrishabha natives thrive in finance, banking, agriculture, luxury goods, food industry, music, and the arts. Their Venus-ruled nature gives them an eye for beauty and value, making them excellent in real estate, interior design, and wealth management.",
    love:
      "In love, Vrishabha natives are devoted, romantic, and deeply affectionate partners who express love through material comfort and physical touch. They seek long-term stability and can be possessive when they feel insecure. Best compatibility lies with fellow earth signs and the nurturing Karka.",
    health:
      "The throat, thyroid, neck, and lower jaw are vulnerable areas. Vrishabha natives tend toward weight gain due to their love of food and comfort. Throat infections, thyroid imbalances, and neck stiffness are common concerns that benefit from regular exercise and dietary discipline.",
    strengths: [
      "Unwavering patience and persistence",
      "Strong financial acumen",
      "Loyal and dependable nature",
      "Refined aesthetic sensibility",
      "Practical and grounded approach",
    ],
    weaknesses: [
      "Stubbornness and resistance to change",
      "Possessiveness in relationships",
      "Tendency toward materialism and indulgence",
      "Slow to forgive perceived betrayals",
    ],
    famousPersonalities: [
      "Rabindranath Tagore",
      "Madhuri Dixit",
      "Virat Kohli",
      "Adele",
    ],
  },
  {
    slug: "mithuna",
    name: "Mithuna (Gemini)",
    englishName: "Gemini",
    sanskritName: "Mithuna",
    symbol: "\u264A",
    element: "Air",
    quality: "Mutable",
    rulingPlanet: "Mercury",
    rulingPlanetSanskrit: "Budha",
    dateRange: "Jun 15 \u2013 Jul 15",
    luckyNumbers: [5, 14, 23],
    luckyColors: ["Green", "Yellow", "Light Green"],
    luckyDay: "Wednesday",
    compatibleSigns: ["tula", "kumbha", "mesha"],
    bodyPart: "Arms, shoulders, and lungs",
    mantra: "Om Braam Breem Braum Sah Budhaya Namah",
    deity: "Lord Vishnu",
    overview:
      "Mithuna is the third sign of the Vedic zodiac, ruled by Mercury (Budha), the planet of intellect, communication, and commerce. As a mutable air sign, Mithuna represents duality, adaptability, and the restless pursuit of knowledge. In the Kaala Purusha, it governs the arms and shoulders, symbolizing dexterity and the capacity to handle multiple tasks. Mithuna natives are the communicators and networkers of the zodiac, bridging ideas and people with remarkable versatility.",
    personality:
      "Mithuna natives are intellectually curious, witty, and extraordinarily versatile. They possess a quick mind that can process information rapidly and communicate ideas with charm and clarity. Their dual nature means they can see multiple perspectives simultaneously, though this can sometimes manifest as inconsistency. They thrive on variety and mental stimulation, becoming restless in monotonous environments.",
    career:
      "Mithuna natives excel in journalism, writing, teaching, trading, marketing, and technology. Their Mercury-ruled intellect and communication skills make them natural mediators, translators, and public speakers. Careers involving travel, networking, or information exchange suit them best.",
    love:
      "In relationships, Mithuna natives need intellectual connection above all else. They are playful, communicative partners who keep relationships lively with conversation and new experiences. They pair best with air signs (Tula, Kumbha) who match their mental agility and with Mesha whose boldness intrigues them.",
    health:
      "The respiratory system, arms, shoulders, and nervous system are areas of concern. Mithuna natives are prone to anxiety, respiratory issues, and nervous exhaustion from mental overactivity. Regular breathing exercises (pranayama) and adequate rest are essential for their wellbeing.",
    strengths: [
      "Exceptional communication skills",
      "Quick learner and adaptable",
      "Versatile and multi-talented",
      "Charming and sociable",
      "Intellectually sharp and curious",
    ],
    weaknesses: [
      "Inconsistent and easily distracted",
      "Superficial in commitments",
      "Nervous energy and anxiety prone",
      "Difficulty with emotional depth",
    ],
    famousPersonalities: [
      "Amitabh Bachchan",
      "Sonam Kapoor",
      "Rahul Gandhi",
      "Novak Djokovic",
    ],
  },
  {
    slug: "karka",
    name: "Karka (Cancer)",
    englishName: "Cancer",
    sanskritName: "Karka",
    symbol: "\u264B",
    element: "Water",
    quality: "Cardinal",
    rulingPlanet: "Moon",
    rulingPlanetSanskrit: "Chandra",
    dateRange: "Jul 16 \u2013 Aug 16",
    luckyNumbers: [2, 11, 20],
    luckyColors: ["White", "Silver", "Cream"],
    luckyDay: "Monday",
    compatibleSigns: ["vrishchika", "meena", "vrishabha"],
    bodyPart: "Chest, breasts, and stomach",
    mantra: "Om Shraam Shreem Shraum Sah Chandraya Namah",
    deity: "Goddess Parvati",
    overview:
      "Karka is the fourth sign of the Vedic zodiac, ruled by the Moon (Chandra), the planet of mind, emotions, and nurturing. As a cardinal water sign, Karka represents the home, mother, emotional security, and the protective instinct. In the Kaala Purusha, it governs the chest and stomach, symbolizing nourishment and emotional sustenance. Karka natives are the caretakers of the zodiac, creating safe havens for those they love through deep emotional intelligence.",
    personality:
      "Karka natives are deeply intuitive, emotionally sensitive, and profoundly nurturing. They possess an almost psychic ability to read the emotional undercurrents in any situation. Their moods wax and wane like their ruling luminary, the Moon, making them deeply empathetic but also vulnerable to emotional turbulence. At their best, they create warmth and emotional security that others find irresistibly comforting.",
    career:
      "Karka natives thrive in caregiving professions \u2014 healthcare, counseling, hospitality, real estate, food and beverage, and education. Their strong intuition and emotional intelligence also make them effective in human resources, psychology, and any role requiring empathetic leadership.",
    love:
      "In love, Karka natives are devoted, deeply emotional partners who seek security and emotional depth. They express love through nurturing and domestic comfort. Their ideal partners are fellow water signs (Vrishchika, Meena) who understand emotional complexity, and the loyal Vrishabha who provides the stability they crave.",
    health:
      "The stomach, digestive system, chest, and breasts are vulnerable areas. Karka natives often experience digestive issues triggered by emotional stress. They are prone to water retention, chest congestion, and anxiety-related stomach problems. Emotional wellbeing directly impacts their physical health.",
    strengths: [
      "Deep emotional intelligence and empathy",
      "Strong nurturing and protective instinct",
      "Excellent memory and intuition",
      "Loyal and devoted to family",
      "Creative and imaginative mind",
    ],
    weaknesses: [
      "Mood swings and emotional volatility",
      "Overly clingy or possessive",
      "Tendency to hold grudges",
      "Can be manipulative when insecure",
    ],
    famousPersonalities: [
      "Priyanka Chopra",
      "Mahendra Singh Dhoni",
      "Elon Musk",
      "Princess Diana",
    ],
  },
  {
    slug: "simha",
    name: "Simha (Leo)",
    englishName: "Leo",
    sanskritName: "Simha",
    symbol: "\u264C",
    element: "Fire",
    quality: "Fixed",
    rulingPlanet: "Sun",
    rulingPlanetSanskrit: "Surya",
    dateRange: "Aug 17 \u2013 Sep 16",
    luckyNumbers: [1, 10, 19],
    luckyColors: ["Gold", "Orange", "Ruby Red"],
    luckyDay: "Sunday",
    compatibleSigns: ["mesha", "dhanu", "mithuna"],
    bodyPart: "Heart, spine, and upper back",
    mantra: "Om Hraam Hreem Hraum Sah Suryaya Namah",
    deity: "Lord Shiva (as Rudra)",
    overview:
      "Simha is the fifth sign of the Vedic zodiac, ruled by the Sun (Surya), the king of planets and the significator of soul, authority, and vitality. As a fixed fire sign, Simha represents royalty, creative self-expression, and the power of will. In the Kaala Purusha, it governs the heart and spine, symbolizing courage, dignity, and life force. Simha natives carry a natural regality that commands respect and attention wherever they go.",
    personality:
      "Simha natives are charismatic, confident, and generous with a natural flair for the dramatic. They possess a magnetic presence that draws people to them and a warm heart that genuinely wants to uplift those around them. Their fixed fire nature gives them tremendous willpower and creative force, though it can also manifest as ego, pride, and a need to be the center of attention. At their best, they are magnanimous leaders who inspire through example.",
    career:
      "Simha natives excel in leadership, politics, entertainment, performing arts, government service, and any role in the public eye. Their Sun-ruled nature gives them authority and administrative ability. They thrive as CEOs, directors, actors, and in positions where their vision and charisma can shine.",
    love:
      "In love, Simha natives are grand romantics who shower their partners with attention, gifts, and dramatic expressions of affection. They need admiration and appreciation in return. They are most compatible with fellow fire signs (Mesha, Dhanu) who match their passion and with Mithuna whose wit keeps them entertained.",
    health:
      "The heart, spine, upper back, and eyes are areas of concern. Simha natives should be vigilant about cardiac health, blood pressure, and spinal issues. Their intense drive can lead to burnout and heart strain. Regular cardiovascular exercise and stress management are vital.",
    strengths: [
      "Natural charisma and leadership",
      "Generous and warm-hearted",
      "Strong willpower and determination",
      "Creative and expressive",
      "Courageous and protective of loved ones",
    ],
    weaknesses: [
      "Ego-driven and attention-seeking",
      "Stubborn pride that resists compromise",
      "Can be domineering or authoritarian",
      "Sensitive to perceived disrespect",
    ],
    famousPersonalities: [
      "Narendra Modi",
      "Barack Obama",
      "Sadhguru",
      "Kajol",
    ],
  },
  {
    slug: "kanya",
    name: "Kanya (Virgo)",
    englishName: "Virgo",
    sanskritName: "Kanya",
    symbol: "\u264D",
    element: "Earth",
    quality: "Mutable",
    rulingPlanet: "Mercury",
    rulingPlanetSanskrit: "Budha",
    dateRange: "Sep 17 \u2013 Oct 16",
    luckyNumbers: [5, 14, 23],
    luckyColors: ["Green", "Dark Green", "Earthy Brown"],
    luckyDay: "Wednesday",
    compatibleSigns: ["vrishabha", "makara", "karka"],
    bodyPart: "Intestines, digestive system, and nervous system",
    mantra: "Om Braam Breem Braum Sah Budhaya Namah",
    deity: "Lord Vishnu (as the Preserver)",
    overview:
      "Kanya is the sixth sign of the Vedic zodiac, ruled by Mercury (Budha) in its earthy, analytical expression. As a mutable earth sign, Kanya represents service, health, precision, and the pursuit of perfection. In the Kaala Purusha, it governs the intestines and digestive system, symbolizing discrimination, assimilation, and purification. Kanya natives are the healers and analysts of the zodiac, bringing order to chaos through meticulous attention to detail.",
    personality:
      "Kanya natives are analytical, methodical, and deeply service-oriented. They possess a sharp discriminating intellect that notices what others miss and a genuine desire to be useful and helpful. Their Mercury-ruled mind combined with earthy practicality makes them excellent problem-solvers. However, their perfectionist tendencies can lead to excessive self-criticism and anxiety about falling short of their own exacting standards.",
    career:
      "Kanya natives excel in healthcare, research, accounting, editing, quality control, data analysis, and service industries. Their meticulous nature makes them invaluable in roles requiring precision \u2014 auditing, pharmacy, nutrition science, and software testing.",
    love:
      "In relationships, Kanya natives show love through acts of service and practical support rather than grand romantic gestures. They need a partner who appreciates their thoughtfulness and doesn't judge their need for order. Earth signs (Vrishabha, Makara) provide the stability they value, while Karka offers the emotional warmth they secretly crave.",
    health:
      "The digestive system, intestines, and nervous system are primary areas of vulnerability. Kanya natives are prone to digestive disorders, irritable bowel syndrome, and stress-related ailments. Their tendency to worry excessively can manifest as physical symptoms. A clean diet and mindfulness practices are particularly beneficial.",
    strengths: [
      "Exceptional analytical and organizational skills",
      "Dedicated and service-oriented",
      "Health-conscious and disciplined",
      "Reliable and detail-focused",
      "Practical problem-solver",
    ],
    weaknesses: [
      "Overly critical of self and others",
      "Perfectionism that leads to paralysis",
      "Excessive worry and anxiety",
      "Difficulty relaxing and trusting the process",
    ],
    famousPersonalities: [
      "Warren Buffett",
      "Kareena Kapoor",
      "Radhakrishnan",
      "Mother Teresa",
    ],
  },
  {
    slug: "tula",
    name: "Tula (Libra)",
    englishName: "Libra",
    sanskritName: "Tula",
    symbol: "\u264E",
    element: "Air",
    quality: "Cardinal",
    rulingPlanet: "Venus",
    rulingPlanetSanskrit: "Shukra",
    dateRange: "Oct 17 \u2013 Nov 15",
    luckyNumbers: [6, 15, 24],
    luckyColors: ["White", "Light Blue", "Pastel Pink"],
    luckyDay: "Friday",
    compatibleSigns: ["mithuna", "kumbha", "dhanu"],
    bodyPart: "Kidneys, lower back, and bladder",
    mantra: "Om Draam Dreem Draum Sah Shukraya Namah",
    deity: "Lord Indra",
    overview:
      "Tula is the seventh sign of the Vedic zodiac, ruled by Venus (Shukra) in its airy, social expression. As a cardinal air sign, Tula represents balance, partnership, justice, and aesthetic harmony. In the Kaala Purusha, it governs the kidneys and lower back, symbolizing the body\u2019s internal balance. Tula is the sign of the scales, and its natives are the diplomats and peacemakers of the zodiac, constantly seeking equilibrium in all areas of life.",
    personality:
      "Tula natives are charming, diplomatic, and deeply oriented toward fairness and harmony. They possess a refined aesthetic sense and a natural ability to see all sides of any situation. Their Venus-ruled nature gives them grace, social intelligence, and a love of beauty. However, their desire to maintain balance can lead to indecisiveness, people-pleasing, and avoidance of necessary confrontation.",
    career:
      "Tula natives thrive in law, diplomacy, mediation, fashion, interior design, public relations, and the arts. Their ability to weigh different perspectives makes them natural judges, counselors, and negotiators. Careers in luxury brands, event management, and aesthetic fields also suit them well.",
    love:
      "In love, Tula natives are romantic idealists who seek partnership as their fundamental life goal. They are attentive, considerate partners who strive to create harmony. Fellow air signs (Mithuna, Kumbha) provide the intellectual stimulation they need, while Dhanu brings the adventurous optimism that balances their contemplative nature.",
    health:
      "The kidneys, lower back, bladder, and skin are vulnerable areas. Tula natives may experience kidney issues, lower back pain, and skin sensitivities. Their tendency to suppress emotions for the sake of harmony can lead to internal imbalances. Adequate water intake and maintaining acid-alkaline balance are important.",
    strengths: [
      "Natural diplomatic and social skills",
      "Strong sense of justice and fairness",
      "Refined aesthetic sensibility",
      "Excellent at building partnerships",
      "Graceful and charming demeanor",
    ],
    weaknesses: [
      "Chronic indecisiveness",
      "People-pleasing at the cost of authenticity",
      "Avoidance of conflict and confrontation",
      "Can be superficial or image-conscious",
    ],
    famousPersonalities: [
      "Mahatma Gandhi",
      "Amitabh Bachchan",
      "Shah Rukh Khan",
      "Hema Malini",
    ],
  },
  {
    slug: "vrishchika",
    name: "Vrishchika (Scorpio)",
    englishName: "Scorpio",
    sanskritName: "Vrishchika",
    symbol: "\u264F",
    element: "Water",
    quality: "Fixed",
    rulingPlanet: "Mars",
    rulingPlanetSanskrit: "Mangal",
    dateRange: "Nov 16 \u2013 Dec 15",
    luckyNumbers: [9, 18, 27],
    luckyColors: ["Maroon", "Dark Red", "Black"],
    luckyDay: "Tuesday",
    compatibleSigns: ["karka", "meena", "kanya"],
    bodyPart: "Reproductive organs and excretory system",
    mantra: "Om Kraam Kreem Kraum Sah Bhaumaya Namah",
    deity: "Lord Hanuman",
    overview:
      "Vrishchika is the eighth sign of the Vedic zodiac, ruled by Mars (Mangal) in its watery, transformative expression. As a fixed water sign, Vrishchika represents transformation, hidden knowledge, occult sciences, and the mysteries of life and death. In the Kaala Purusha, it governs the reproductive and excretory organs, symbolizing creation, destruction, and regeneration. Vrishchika natives possess an intensity and depth that sets them apart from all other signs.",
    personality:
      "Vrishchika natives are intense, deeply perceptive, and magnetically powerful. They possess an uncanny ability to see through facades and understand hidden motivations. Their fixed water nature gives them immense emotional depth and the capacity for profound transformation. They are fiercely loyal to those they trust but can be formidable adversaries when crossed. Their journey is one of perpetual transformation \u2014 death and rebirth of the ego.",
    career:
      "Vrishchika natives excel in research, investigation, psychology, surgery, occult sciences, intelligence agencies, and crisis management. Their penetrating insight makes them outstanding detectives, forensic scientists, and psychotherapists. They also thrive in fields involving transformation \u2014 rehabilitation, recycling, and investment banking.",
    love:
      "In love, Vrishchika natives are all-or-nothing partners who demand complete emotional honesty and deep intimacy. They are fiercely loyal but can be intensely jealous and possessive. Fellow water signs (Karka, Meena) understand their emotional depth, while the practical Kanya provides the grounding stability they need.",
    health:
      "The reproductive organs, urinary tract, and excretory system are primary concerns. Vrishchika natives may be prone to urinary tract infections, hormonal imbalances, and issues related to the reproductive system. Their intense emotional nature can also manifest as psychosomatic ailments. Regular detoxification and emotional release practices are beneficial.",
    strengths: [
      "Extraordinary determination and willpower",
      "Deep intuition and perceptive insight",
      "Capacity for profound transformation",
      "Fierce loyalty and protective nature",
      "Resourceful and strategic thinking",
    ],
    weaknesses: [
      "Jealousy and possessiveness",
      "Tendency toward secrecy and manipulation",
      "Difficulty forgiving and letting go",
      "Can be vengeful when betrayed",
    ],
    famousPersonalities: [
      "Indira Gandhi",
      "Aishwarya Rai Bachchan",
      "Viswanathan Anand",
      "Bill Gates",
    ],
  },
  {
    slug: "dhanu",
    name: "Dhanu (Sagittarius)",
    englishName: "Sagittarius",
    sanskritName: "Dhanu",
    symbol: "\u2650",
    element: "Fire",
    quality: "Mutable",
    rulingPlanet: "Jupiter",
    rulingPlanetSanskrit: "Guru/Brihaspati",
    dateRange: "Dec 16 \u2013 Jan 13",
    luckyNumbers: [3, 12, 21],
    luckyColors: ["Yellow", "Saffron", "Golden"],
    luckyDay: "Thursday",
    compatibleSigns: ["mesha", "simha", "tula"],
    bodyPart: "Thighs and hips",
    mantra: "Om Graam Greem Graum Sah Gurave Namah",
    deity: "Lord Dattatreya",
    overview:
      "Dhanu is the ninth sign of the Vedic zodiac, ruled by Jupiter (Guru/Brihaspati), the great benefic and planet of wisdom, expansion, and dharma. As a mutable fire sign, Dhanu represents higher knowledge, philosophy, long journeys, and spiritual seeking. In the Kaala Purusha, it governs the thighs and hips, symbolizing forward movement and the quest for truth. Dhanu natives are the philosophers and seekers of the zodiac, always reaching for a higher understanding of life\u2019s purpose.",
    personality:
      "Dhanu natives are optimistic, philosophical, and adventurous with an insatiable hunger for knowledge and experience. They possess a natural wisdom and a broad-minded perspective that sees the big picture even when others are lost in details. Their Jupiter-ruled nature makes them generous, ethical, and inspirational. However, their expansive tendencies can lead to overcommitment, bluntness, and a restless inability to settle down.",
    career:
      "Dhanu natives thrive in education, law, publishing, international business, travel, spirituality, and philosophy. Their Jupiter-ruled wisdom makes them natural professors, judges, religious leaders, and motivational speakers. Careers involving cross-cultural exchange and higher learning suit them perfectly.",
    love:
      "In love, Dhanu natives are enthusiastic, honest, and freedom-loving partners who need a companion for their adventures. They value intellectual and spiritual compatibility over mere physical attraction. Fellow fire signs (Mesha, Simha) share their passion and energy, while Tula brings the balance and social grace they appreciate.",
    health:
      "The thighs, hips, liver, and sciatic nerve are areas of vulnerability. Dhanu natives are prone to hip injuries, sciatica, liver issues (from overindulgence), and weight gain around the thighs. Their love of excess \u2014 food, drink, adventure \u2014 can strain the liver. Moderation and regular hip-opening exercises are recommended.",
    strengths: [
      "Philosophical wisdom and broad vision",
      "Natural optimism and enthusiasm",
      "Generous and ethical nature",
      "Love of learning and growth",
      "Inspiring and motivational presence",
    ],
    weaknesses: [
      "Blunt and tactless in communication",
      "Overcommitment and scattered energy",
      "Restlessness and fear of commitment",
      "Tendency toward excess and overindulgence",
    ],
    famousPersonalities: [
      "Rajinikanth",
      "Dhirubhai Ambani",
      "Brad Pitt",
      "Neeraj Chopra",
    ],
  },
  {
    slug: "makara",
    name: "Makara (Capricorn)",
    englishName: "Capricorn",
    sanskritName: "Makara",
    symbol: "\u2651",
    element: "Earth",
    quality: "Cardinal",
    rulingPlanet: "Saturn",
    rulingPlanetSanskrit: "Shani",
    dateRange: "Jan 14 \u2013 Feb 12",
    luckyNumbers: [8, 17, 26],
    luckyColors: ["Black", "Dark Blue", "Grey"],
    luckyDay: "Saturday",
    compatibleSigns: ["vrishabha", "kanya", "meena"],
    bodyPart: "Knees, joints, and skeletal system",
    mantra: "Om Praam Preem Praum Sah Shanaischaraya Namah",
    deity: "Lord Hanuman (as Saturn\u2019s devotee)",
    overview:
      "Makara is the tenth sign of the Vedic zodiac, ruled by Saturn (Shani), the planet of discipline, karma, hard work, and time. As a cardinal earth sign, Makara represents ambition, structure, authority, and the slow but steady ascent to the summit. In the Kaala Purusha, it governs the knees and joints, symbolizing the capacity to bear weight and climb. Makara natives are the architects of the zodiac, building empires through patience, discipline, and unwavering persistence.",
    personality:
      "Makara natives are ambitious, disciplined, and deeply responsible with a mature outlook that often belies their age. They possess an innate understanding of structure, hierarchy, and the value of sustained effort over time. Their Saturn-ruled nature gives them remarkable endurance and the ability to delay gratification for long-term goals. However, they can become overly serious, pessimistic, and emotionally distant when Saturn\u2019s restrictive influence dominates.",
    career:
      "Makara natives excel in government, administration, corporate leadership, engineering, mining, agriculture, and construction. Their Saturn-ruled discipline makes them outstanding managers, bureaucrats, and institutional builders. They rise slowly but surely to positions of authority and are natural CEOs and strategists.",
    love:
      "In love, Makara natives are loyal, committed, and deeply traditional partners who take relationships as seriously as their careers. They express love through stability, provision, and long-term commitment rather than grand romantic gestures. Fellow earth signs (Vrishabha, Kanya) share their practical values, while Meena brings the emotional warmth and imagination that softens their serious exterior.",
    health:
      "The knees, joints, bones, teeth, and skin are primary areas of concern. Makara natives are prone to arthritis, knee injuries, dental issues, and dry skin conditions. Their tendency to carry heavy responsibilities can manifest as chronic stress and bone-related ailments. Regular joint care, calcium-rich diet, and stress management are essential.",
    strengths: [
      "Exceptional discipline and perseverance",
      "Strategic long-term planning",
      "Strong sense of responsibility and duty",
      "Practical and realistic worldview",
      "Patient and steady in pursuit of goals",
    ],
    weaknesses: [
      "Overly serious and pessimistic",
      "Emotionally reserved and distant",
      "Workaholic tendencies at the cost of relationships",
      "Rigid adherence to convention and tradition",
    ],
    famousPersonalities: [
      "Swami Vivekananda",
      "Hrithik Roshan",
      "A.R. Rahman",
      "Jeff Bezos",
    ],
  },
  {
    slug: "kumbha",
    name: "Kumbha (Aquarius)",
    englishName: "Aquarius",
    sanskritName: "Kumbha",
    symbol: "\u2652",
    element: "Air",
    quality: "Fixed",
    rulingPlanet: "Saturn",
    rulingPlanetSanskrit: "Shani",
    dateRange: "Feb 13 \u2013 Mar 13",
    luckyNumbers: [8, 17, 26],
    luckyColors: ["Electric Blue", "Violet", "Dark Cyan"],
    luckyDay: "Saturday",
    compatibleSigns: ["mithuna", "tula", "mesha"],
    bodyPart: "Ankles, calves, and circulatory system",
    mantra: "Om Praam Preem Praum Sah Shanaischaraya Namah",
    deity: "Lord Shiva (as Mahadeva)",
    overview:
      "Kumbha is the eleventh sign of the Vedic zodiac, ruled by Saturn (Shani) in its airy, humanitarian expression. As a fixed air sign, Kumbha represents innovation, social reform, universal brotherhood, and unconventional thinking. In the Kaala Purusha, it governs the ankles, calves, and circulatory system, symbolizing the network of connections that sustain the body. Kumbha natives are the visionaries and reformers of the zodiac, dedicated to creating a better future for humanity.",
    personality:
      "Kumbha natives are intellectual, independent, and profoundly humanitarian with a vision that extends far beyond personal gain. They possess an innovative mind that thinks in systems and networks, often decades ahead of their time. Their Saturn-ruled discipline combined with airy idealism makes them effective social architects. However, they can appear emotionally detached, eccentric, and stubbornly fixed in their unconventional views.",
    career:
      "Kumbha natives excel in technology, scientific research, social work, non-profit leadership, aviation, and humanitarian causes. Their innovative Saturn-Air nature makes them outstanding engineers, programmers, inventors, and social entrepreneurs. Careers in networking, telecommunications, and future-oriented industries suit them well.",
    love:
      "In love, Kumbha natives value intellectual connection and shared ideals over emotional intensity. They need a partner who respects their independence and shares their vision for a better world. Fellow air signs (Mithuna, Tula) provide the mental stimulation they crave, while Mesha\u2019s boldness and action orientation complement their idealism.",
    health:
      "The ankles, calves, circulatory system, and nervous system are areas of concern. Kumbha natives may experience poor circulation, varicose veins, ankle injuries, and nervous system irregularities. Their tendency to live in their heads can disconnect them from bodily needs. Regular walking, leg exercises, and grounding practices are important.",
    strengths: [
      "Visionary and innovative thinking",
      "Strong humanitarian values",
      "Independent and original perspective",
      "Excellent at building networks and communities",
      "Progressive and open-minded",
    ],
    weaknesses: [
      "Emotionally detached and aloof",
      "Stubbornly fixed in opinions despite evidence",
      "Can be eccentric to the point of alienation",
      "Difficulty with emotional intimacy",
    ],
    famousPersonalities: [
      "Oprah Winfrey",
      "Abhishek Bachchan",
      "Subhash Chandra Bose",
      "Cristiano Ronaldo",
    ],
  },
  {
    slug: "meena",
    name: "Meena (Pisces)",
    englishName: "Pisces",
    sanskritName: "Meena",
    symbol: "\u2653",
    element: "Water",
    quality: "Mutable",
    rulingPlanet: "Jupiter",
    rulingPlanetSanskrit: "Guru/Brihaspati",
    dateRange: "Mar 14 \u2013 Apr 13",
    luckyNumbers: [3, 12, 21],
    luckyColors: ["Yellow", "Sea Green", "Lavender"],
    luckyDay: "Thursday",
    compatibleSigns: ["karka", "vrishchika", "makara"],
    bodyPart: "Feet and lymphatic system",
    mantra: "Om Graam Greem Graum Sah Gurave Namah",
    deity: "Lord Vishnu (as the cosmic dreamer)",
    overview:
      "Meena is the twelfth and final sign of the Vedic zodiac, ruled by Jupiter (Guru/Brihaspati) in its most spiritual and transcendent expression. As a mutable water sign, Meena represents moksha (liberation), compassion, imagination, and dissolution of the ego. In the Kaala Purusha, it governs the feet and lymphatic system, symbolizing the end of the journey and surrender to the divine. Meena natives are the mystics and dreamers of the zodiac, possessing a spiritual depth and creative imagination that connects them to realms beyond the material.",
    personality:
      "Meena natives are compassionate, intuitive, and deeply spiritual with an almost otherworldly sensitivity to the suffering and joy of those around them. They possess a rich inner world of imagination, dreams, and artistic vision that makes them extraordinarily creative. Their Jupiter-ruled wisdom manifests as universal compassion rather than intellectual knowledge. However, their porous emotional boundaries can make them vulnerable to escapism, confusion, and absorbing others\u2019 negativity.",
    career:
      "Meena natives thrive in creative arts, music, film, spiritual counseling, healing professions, charity work, and any role requiring imagination and empathy. Their Jupiter-ruled compassion makes them gifted counselors, nurses, and spiritual teachers. Careers in photography, marine sciences, and the pharmaceutical industry also suit them.",
    love:
      "In love, Meena natives are deeply romantic, selfless partners who idealize their beloved and seek a soul-level connection. They can be self-sacrificing to a fault, sometimes losing themselves in their partner\u2019s identity. Fellow water signs (Karka, Vrishchika) understand their emotional depths, while Makara provides the grounding structure and discipline that helps them manifest their dreams into reality.",
    health:
      "The feet, lymphatic system, and immune system are primary areas of vulnerability. Meena natives are prone to foot problems, lymphatic congestion, allergies, and immune deficiencies. Their sensitivity to environmental toxins and emotional energy makes them susceptible to psychosomatic illness. Adequate sleep, foot care, and spiritual practices that strengthen their aura are especially important.",
    strengths: [
      "Extraordinary compassion and empathy",
      "Rich creative imagination",
      "Deep spiritual intuition",
      "Selfless and healing presence",
      "Adaptable and accepting nature",
    ],
    weaknesses: [
      "Escapism through fantasy, substances, or avoidance",
      "Weak personal boundaries",
      "Tendency toward self-pity and victimhood",
      "Difficulty with practical matters and discipline",
    ],
    famousPersonalities: [
      "Albert Einstein",
      "Aamir Khan",
      "Saina Nehwal",
      "Rihanna",
    ],
  },
];

export function getZodiacBySlug(slug: string): ZodiacSign | undefined {
  return zodiacSigns.find((sign) => sign.slug === slug);
}
