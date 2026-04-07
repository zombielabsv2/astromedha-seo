export interface NumerologyNumber {
  number: number;
  slug: string;
  name: string;
  rulingPlanet: string;
  rulingPlanetSanskrit: string;
  element: string;
  color: string;
  colors: string[];
  day: string;
  gemstone: string;
  mantra: string;
  tarotCard: string;
  keywords: string[];
  overview: string;
  personality: string;
  career: string;
  love: string;
  health: string;
  challenges: string;
  compatibleNumbers: number[];
  incompatibleNumbers: number[];
  famousPersonalities: string[];
  yearMeaning: string;
}

export const numerologyNumbers: NumerologyNumber[] = [
  {
    number: 1,
    slug: "1",
    name: "Number 1 — The Leader",
    rulingPlanet: "Sun",
    rulingPlanetSanskrit: "Surya",
    element: "Fire",
    color: "Gold",
    colors: ["Gold", "Orange", "Yellow", "Copper"],
    day: "Sunday",
    gemstone: "Ruby",
    mantra: "Om Suryaya Namaha",
    tarotCard: "The Magician",
    keywords: ["Leadership", "Independence", "Ambition", "Originality", "Willpower", "Pioneer"],
    overview:
      "Number 1 in Chaldean numerology represents the primal creative force, governed by the Sun. People born under this number are natural-born leaders who radiate confidence, authority, and an unwavering drive to forge their own path. The Sun's influence bestows vitality, clarity of purpose, and a magnetic personality that draws others into their orbit. In Vedic tradition, Surya is the soul (Atma Karaka), making Number 1 individuals deeply connected to their sense of self and life purpose.",
    personality:
      "Number 1 personalities are fiercely independent, original thinkers who prefer to lead rather than follow. They possess strong willpower, a pioneering spirit, and the courage to take risks that others avoid. Their self-confidence can be inspiring, though it sometimes tips into stubbornness or an unwillingness to accept advice.",
    career:
      "Number 1 individuals excel in positions of authority — CEOs, entrepreneurs, directors, and political leaders. They thrive when they can set the vision and make independent decisions. Government roles, creative direction, and any field requiring bold initiative suit them well.",
    love:
      "In relationships, Number 1 people are loyal, protective, and generous partners who take the lead in romance. They need a partner who respects their independence while offering emotional warmth. Their best compatibility is with Numbers 2, 3, and 9, who complement their dominant energy.",
    health:
      "The Sun rules the heart, eyes, and circulatory system, so Number 1 individuals should pay attention to cardiovascular health and vision. They tend to push themselves hard, making stress management and adequate rest essential for long-term vitality.",
    challenges:
      "The primary challenge for Number 1 is ego — the same confidence that drives success can create isolation if unchecked. Learning to collaborate, accept feedback, and share the spotlight are critical growth areas. Impatience with slower-moving people can strain both personal and professional relationships.",
    compatibleNumbers: [2, 3, 9],
    incompatibleNumbers: [4, 8],
    famousPersonalities: ["Steve Jobs", "Martin Luther King Jr.", "Nikola Tesla", "Lady Gaga", "Dhirubhai Ambani"],
    yearMeaning:
      "A Personal Year 1 marks the start of a brand-new nine-year cycle — a year of fresh beginnings, new ventures, and planting seeds. This is the time to take bold initiative, launch projects, and assert your independence rather than waiting for permission.",
  },
  {
    number: 2,
    slug: "2",
    name: "Number 2 — The Diplomat",
    rulingPlanet: "Moon",
    rulingPlanetSanskrit: "Chandra",
    element: "Water",
    color: "Silver",
    colors: ["Silver", "White", "Cream", "Light Green"],
    day: "Monday",
    gemstone: "Pearl",
    mantra: "Om Chandraya Namaha",
    tarotCard: "The High Priestess",
    keywords: ["Diplomacy", "Sensitivity", "Cooperation", "Intuition", "Balance", "Peacemaker"],
    overview:
      "Number 2 in Chaldean numerology is governed by the Moon, the celestial body of emotions, intuition, and the subconscious mind. People with this number possess a rare gift for understanding unspoken feelings and navigating complex interpersonal dynamics. The Moon's influence makes them deeply empathetic, nurturing, and naturally diplomatic. In Vedic astrology, Chandra represents the mind (Manas), giving Number 2 individuals extraordinary emotional intelligence and psychic sensitivity.",
    personality:
      "Number 2 personalities are gentle, tactful, and highly perceptive — they read rooms better than anyone. They are natural mediators who seek harmony and avoid confrontation, preferring to achieve goals through cooperation rather than force. Their sensitivity is their superpower, though it can also make them vulnerable to mood swings and emotional overwhelm.",
    career:
      "Number 2 individuals shine in roles requiring mediation, counseling, diplomacy, and teamwork. They make excellent therapists, HR professionals, artists, and collaborators in any creative field. Their attention to detail and patience suit careers in music, writing, and healthcare.",
    love:
      "In love, Number 2 people are devoted, romantic, and deeply caring partners who prioritize emotional connection above all else. They need a partner who provides stability and appreciates their nurturing nature. Their best matches are Numbers 1, 7, and 9, who offer the strength and depth they crave.",
    health:
      "The Moon governs the stomach, fluids, and lymphatic system, so Number 2 individuals are prone to digestive issues and water retention. Emotional stress directly impacts their physical health, making mindfulness practices, adequate hydration, and a calm living environment essential.",
    challenges:
      "Number 2's biggest challenge is over-sensitivity — absorbing others' emotions can lead to anxiety, indecisiveness, and codependency. Learning to set boundaries, make firm decisions, and prioritize self-care over people-pleasing is their key growth path.",
    compatibleNumbers: [1, 7, 9],
    incompatibleNumbers: [5, 8],
    famousPersonalities: ["Mahatma Gandhi", "Barack Obama", "Shakira", "Amitabh Bachchan", "Emma Watson"],
    yearMeaning:
      "A Personal Year 2 is about patience, partnerships, and laying the groundwork planted in Year 1. This is not the year for aggressive action — instead, focus on building alliances, refining plans, and trusting that slow and steady progress will yield results.",
  },
  {
    number: 3,
    slug: "3",
    name: "Number 3 — The Creative",
    rulingPlanet: "Jupiter",
    rulingPlanetSanskrit: "Guru",
    element: "Fire",
    color: "Yellow",
    colors: ["Yellow", "Purple", "Mauve", "Violet"],
    day: "Thursday",
    gemstone: "Yellow Sapphire",
    mantra: "Om Gurave Namaha",
    tarotCard: "The Empress",
    keywords: ["Creativity", "Expression", "Optimism", "Joy", "Communication", "Expansion"],
    overview:
      "Number 3 in Chaldean numerology is ruled by Jupiter, the great benefic planet of wisdom, expansion, and abundance. People with this number are gifted communicators, creative visionaries, and natural entertainers who light up every room they enter. Jupiter's influence brings luck, generosity, and an expansive worldview that attracts opportunity. In Vedic tradition, Guru (Jupiter) is the teacher of the gods, making Number 3 individuals natural mentors, storytellers, and wisdom-sharers.",
    personality:
      "Number 3 personalities are charismatic, expressive, and irresistibly optimistic — they see possibility where others see obstacles. They have a natural talent for words, art, and performance, combined with a magnetic warmth that draws people in. Their enthusiasm is contagious, though they can sometimes scatter their energy across too many pursuits.",
    career:
      "Number 3 individuals thrive in creative and communication-driven fields — writing, acting, teaching, advertising, and public speaking. They make excellent consultants, coaches, and spiritual teachers. Any career that allows self-expression and audience engagement brings out their best.",
    love:
      "In relationships, Number 3 people are fun-loving, generous, and expressive partners who keep romance alive with their creativity. They need intellectual stimulation and emotional freedom in a relationship. Their best compatibility is with Numbers 1, 5, and 6, who match their vibrancy.",
    health:
      "Jupiter governs the liver, hips, and fat metabolism, so Number 3 individuals should watch for overindulgence in food and drink. Their naturally optimistic disposition supports good mental health, but they must guard against weight gain and liver-related issues through moderation.",
    challenges:
      "The primary challenge for Number 3 is lack of focus — their abundance of ideas and interests can lead to superficiality and unfinished projects. Learning discipline, follow-through, and the art of saying no to distractions is essential for converting their enormous potential into tangible results.",
    compatibleNumbers: [1, 5, 6],
    incompatibleNumbers: [4, 8],
    famousPersonalities: ["Abraham Lincoln", "Swami Vivekananda", "Jim Carrey", "Jaya Bachchan", "Mark Twain"],
    yearMeaning:
      "A Personal Year 3 is a year of creative expression, social expansion, and joy. Communication projects flourish — writing, speaking, performing, and networking all receive Jupiter's blessing. Focus on expressing your authentic voice and enjoying life after the patience of Year 2.",
  },
  {
    number: 4,
    slug: "4",
    name: "Number 4 — The Rebel",
    rulingPlanet: "Rahu",
    rulingPlanetSanskrit: "Rahu",
    element: "Air",
    color: "Blue",
    colors: ["Blue", "Grey", "Khaki", "Electric Blue"],
    day: "Saturday",
    gemstone: "Hessonite (Gomed)",
    mantra: "Om Rahave Namaha",
    tarotCard: "The Emperor",
    keywords: ["Unconventional", "Sudden Change", "Innovation", "Rebellion", "Obsession", "Karmic"],
    overview:
      "Number 4 in Chaldean numerology is governed by Rahu, the north node of the Moon — a shadowy, karmic force that represents obsession, innovation, and breaking conventions. Unlike Western numerology where 4 is stable and structured, the Chaldean 4 is restless, unpredictable, and magnetically drawn to the unconventional. Rahu's influence creates intense ambition, sudden ups and downs, and a life path that rarely follows the beaten track. This is the number of reformers, disruptors, and those who challenge the status quo.",
    personality:
      "Number 4 personalities are fiercely independent, unconventional thinkers who feel like outsiders even in familiar settings. They possess an intense, almost obsessive drive to achieve their goals, often through unorthodox methods. Their sharp intellect and willingness to defy norms makes them both fascinating and unpredictable — they attract controversy as naturally as they attract followers.",
    career:
      "Number 4 individuals excel in technology, research, politics, and any field that rewards disruption and innovation. They make excellent engineers, scientists, investigative journalists, and tech entrepreneurs. Careers involving foreign connections, cutting-edge technology, or social reform particularly suit Rahu's energy.",
    love:
      "In relationships, Number 4 people are intense, passionate, and deeply loyal once committed, but getting there takes time. They struggle with conventional relationship expectations and need a partner who embraces their unpredictable nature. Their best compatibility is with Numbers 5, 6, and 7, who appreciate complexity.",
    health:
      "Rahu governs the nervous system and creates susceptibility to mysterious or hard-to-diagnose ailments. Number 4 individuals are prone to anxiety, insomnia, and stress-related disorders. Regular grounding practices — nature walks, meditation, and consistent sleep routines — are essential for their wellbeing.",
    challenges:
      "The core challenge for Number 4 is instability — Rahu's energy creates dramatic highs and lows that can feel like riding a rollercoaster without a seatbelt. Restlessness, dissatisfaction, and a tendency to chase illusions rather than substance can derail even the most talented Number 4. Developing patience and discernment is their life lesson.",
    compatibleNumbers: [5, 6, 7],
    incompatibleNumbers: [1, 2, 9],
    famousPersonalities: ["Elon Musk", "Albert Einstein", "Ratan Tata", "Oprah Winfrey", "Paul McCartney"],
    yearMeaning:
      "A Personal Year 4 under Rahu brings unexpected twists, karmic lessons, and a strong pull toward change. This is a year of breaking free from stale patterns and embracing new directions, but it requires careful discernment — not every shiny opportunity is real. Ground yourself before making major decisions.",
  },
  {
    number: 5,
    slug: "5",
    name: "Number 5 — The Communicator",
    rulingPlanet: "Mercury",
    rulingPlanetSanskrit: "Budha",
    element: "Earth",
    color: "Green",
    colors: ["Green", "Turquoise", "Light Brown", "White"],
    day: "Wednesday",
    gemstone: "Emerald",
    mantra: "Om Budhaya Namaha",
    tarotCard: "The Hierophant",
    keywords: ["Communication", "Versatility", "Freedom", "Intellect", "Adaptability", "Commerce"],
    overview:
      "Number 5 in Chaldean numerology is ruled by Mercury, the planet of intellect, communication, and commerce. People with this number are quick-witted, versatile, and perpetually curious — they are the Renaissance souls of the numerological spectrum. Mercury's influence grants exceptional analytical ability, linguistic talent, and an almost supernatural adaptability to changing circumstances. In Vedic tradition, Budha represents discrimination (Viveka), giving Number 5 individuals the ability to process information faster than almost any other number.",
    personality:
      "Number 5 personalities are restless, curious, and endlessly adaptable — they can hold a conversation with anyone about anything. They possess razor-sharp mental agility, a gift for languages and numbers, and an infectious enthusiasm for learning new things. Their charm lies in their wit and versatility, though their need for constant stimulation can make them seem flighty or unreliable.",
    career:
      "Number 5 individuals are natural-born businesspeople, writers, traders, and media professionals. They excel in sales, marketing, journalism, finance, and any field requiring quick thinking and persuasive communication. Entrepreneurship, travel-related careers, and consulting particularly suit Mercury's dynamic energy.",
    love:
      "In relationships, Number 5 people are witty, playful, and intellectually stimulating partners who need mental connection as much as emotional bonding. They value freedom and variety, which can make commitment challenging until they find the right match. Their best compatibility is with Numbers 3, 6, and 9, who provide both depth and excitement.",
    health:
      "Mercury governs the nervous system, lungs, and skin, making Number 5 individuals susceptible to respiratory issues, allergies, and nervous tension. Their fast-paced lifestyle can lead to burnout if not balanced with adequate rest. Breathing exercises and mindfulness practices are particularly beneficial.",
    challenges:
      "The main challenge for Number 5 is restlessness — their desire for variety and stimulation can prevent them from going deep on any one thing. Inconsistency, nervousness, and a tendency to take shortcuts can undermine their considerable talents. The lesson is learning that depth, not breadth, creates mastery.",
    compatibleNumbers: [3, 6, 9],
    incompatibleNumbers: [2, 4],
    famousPersonalities: ["Will Smith", "Sachin Tendulkar", "Angelina Jolie", "David Beckham", "Virat Kohli"],
    yearMeaning:
      "A Personal Year 5 is the year of change, travel, and freedom — the midpoint pivot of the nine-year cycle. Expect significant shifts in routine, new adventures, and an irresistible urge to break free from anything that feels stale. Embrace the change but avoid impulsive decisions that you cannot reverse.",
  },
  {
    number: 6,
    slug: "6",
    name: "Number 6 — The Nurturer",
    rulingPlanet: "Venus",
    rulingPlanetSanskrit: "Shukra",
    element: "Earth",
    color: "Pink",
    colors: ["Pink", "Rose", "White", "Pastel Blue"],
    day: "Friday",
    gemstone: "Diamond",
    mantra: "Om Shukraya Namaha",
    tarotCard: "The Lovers",
    keywords: ["Love", "Harmony", "Beauty", "Responsibility", "Nurturing", "Domesticity"],
    overview:
      "Number 6 in Chaldean numerology is governed by Venus, the planet of love, beauty, luxury, and harmony. People with this number are the caretakers and aesthetes of the numerological world — they create beauty wherever they go and hold families and communities together with their warmth. Venus's influence bestows artistic talent, romantic sensibility, and a deep need for harmony in all relationships. In Vedic tradition, Shukra is the guru of the Asuras, representing worldly wisdom, material comfort, and the refinement of the senses.",
    personality:
      "Number 6 personalities are warm, responsible, and deeply devoted to the people they love. They have an innate sense of aesthetics — their homes, workspaces, and personal style reflect refined taste and attention to beauty. Their nurturing nature makes them the person everyone turns to for comfort and advice, though this can sometimes lead to self-neglect.",
    career:
      "Number 6 individuals thrive in creative and service-oriented fields — interior design, fashion, hospitality, healthcare, and the arts. They make excellent teachers, counselors, chefs, and luxury brand managers. Any career that combines beauty with service to others aligns perfectly with Venus's energy.",
    love:
      "In relationships, Number 6 people are the ultimate romantics — devoted, affectionate, and willing to go above and beyond for their partner's happiness. They seek long-term, stable partnerships built on mutual respect and shared beauty. Their best compatibility is with Numbers 3, 5, and 9, who appreciate their depth of feeling.",
    health:
      "Venus governs the kidneys, throat, and reproductive system, so Number 6 individuals should watch for issues in these areas. Their love of good food and luxury can lead to weight gain and lifestyle-related health issues. Balance indulgence with discipline — Venus rewards beauty in all forms, including a well-maintained body.",
    challenges:
      "The primary challenge for Number 6 is over-responsibility — they take on everyone else's burdens until they collapse under the weight. Perfectionism in relationships and an inability to say no can lead to resentment and emotional exhaustion. Learning that caring for yourself is not selfish is their essential life lesson.",
    compatibleNumbers: [3, 5, 9],
    incompatibleNumbers: [1, 8],
    famousPersonalities: ["Mother Teresa", "Michael Jackson", "Salman Khan", "Victoria Beckham", "Deepika Padukone"],
    yearMeaning:
      "A Personal Year 6 centers on love, family, home, and responsibility. This is a year for strengthening relationships, beautifying your living space, and stepping up to domestic duties. Creative projects flourish under Venus's patronage, and matters of the heart take center stage.",
  },
  {
    number: 7,
    slug: "7",
    name: "Number 7 — The Seeker",
    rulingPlanet: "Ketu",
    rulingPlanetSanskrit: "Ketu",
    element: "Water",
    color: "Violet",
    colors: ["Violet", "Grey", "Smoky White", "Lavender"],
    day: "Monday",
    gemstone: "Cat's Eye (Lehsunia)",
    mantra: "Om Ketave Namaha",
    tarotCard: "The Chariot",
    keywords: ["Spirituality", "Mysticism", "Introspection", "Intuition", "Research", "Detachment"],
    overview:
      "Number 7 in Chaldean numerology is ruled by Ketu, the south node of the Moon — the most mystical and spiritually evolved force in Vedic astrology. People with this number are the seekers, philosophers, and spiritual investigators of the numerological spectrum. Ketu's influence creates a profound inner world, extraordinary intuition, and a natural detachment from material pursuits that often bewilders those around them. In Vedic tradition, Ketu represents Moksha (liberation), giving Number 7 individuals an innate pull toward transcendence and deeper truth.",
    personality:
      "Number 7 personalities are introspective, analytical, and profoundly intuitive — they perceive layers of reality that others miss entirely. They are natural researchers and truth-seekers who prefer depth over breadth and solitude over superficial socializing. Their quiet exterior conceals a rich inner world of insight and spiritual awareness, though this detachment can make them seem aloof or eccentric.",
    career:
      "Number 7 individuals excel in research, philosophy, technology, healing, and any field requiring deep analytical thinking. They make outstanding scientists, spiritual teachers, psychologists, data analysts, and investigators. Careers in alternative medicine, metaphysics, and academic research particularly resonate with Ketu's energy.",
    love:
      "In relationships, Number 7 people are deeply loyal but emotionally reserved — they need a partner who understands their need for solitude and inner space. Superficial connections drain them; they seek soul-level bonds with intellectual and spiritual depth. Their best compatibility is with Numbers 2, 4, and 9, who respect their introspective nature.",
    health:
      "Ketu governs the nervous system, skin, and subtle energy body, making Number 7 individuals prone to mysterious ailments, skin conditions, and psychosomatic issues. They benefit enormously from meditation, yoga, and energy healing practices. Grounding through physical activity counterbalances their tendency to live in the mind.",
    challenges:
      "The core challenge for Number 7 is isolation — their natural detachment and preference for solitude can become loneliness if taken too far. Overthinking, suspicion, and difficulty trusting others can prevent them from forming the deep connections they actually crave. Balancing spiritual seeking with worldly engagement is their life lesson.",
    compatibleNumbers: [2, 4, 9],
    incompatibleNumbers: [1, 5, 8],
    famousPersonalities: ["Nikola Tesla", "Princess Diana", "Bruce Lee", "A.R. Rahman", "Stephen Hawking"],
    yearMeaning:
      "A Personal Year 7 is a year of introspection, spiritual growth, and inner wisdom. This is not the time for aggressive external action — instead, focus on self-reflection, study, research, and deepening your understanding of life's bigger questions. Answers come through stillness, not striving.",
  },
  {
    number: 8,
    slug: "8",
    name: "Number 8 — The Powerhouse",
    rulingPlanet: "Saturn",
    rulingPlanetSanskrit: "Shani",
    element: "Earth",
    color: "Dark Blue",
    colors: ["Dark Blue", "Black", "Dark Grey", "Indigo"],
    day: "Saturday",
    gemstone: "Blue Sapphire (Neelam)",
    mantra: "Om Shanaischaraya Namaha",
    tarotCard: "Strength",
    keywords: ["Authority", "Karma", "Discipline", "Wealth", "Power", "Endurance"],
    overview:
      "Number 8 in Chaldean numerology is governed by Saturn, the planet of karma, discipline, and structured power. This is arguably the most powerful and most misunderstood number in the Chaldean system — it carries the weight of karmic lessons but also the potential for extraordinary material success. Saturn's influence demands hard work, patience, and ethical conduct; those who meet the challenge are rewarded with lasting authority and wealth. In Vedic tradition, Shani is the great teacher who delivers justice — Number 8 individuals live by the law of cause and effect more visibly than any other number.",
    personality:
      "Number 8 personalities are ambitious, disciplined, and built for endurance — they play the long game while others chase quick wins. They have a natural understanding of power, money, and organizational structures that gives them an edge in the material world. Their exterior can seem cold or intimidating, but beneath the surface lies a deeply responsible individual who takes their duties with utmost seriousness.",
    career:
      "Number 8 individuals are born for positions of power — corporate leadership, finance, law, real estate, and large-scale management. They make exceptional bankers, judges, administrators, and industrialists. Saturn rewards structure and scale, so careers involving large organizations, government, and institutional authority suit them best.",
    love:
      "In relationships, Number 8 people are loyal, protective, and deeply committed, but they express love through actions rather than words. They need a partner who understands that their dedication to work is also a form of providing for loved ones. Their best compatibility is with Numbers 4, 5, and 6, who appreciate stability and ambition.",
    health:
      "Saturn governs bones, joints, teeth, and the skeletal system, making Number 8 individuals prone to arthritis, dental issues, and chronic conditions that develop slowly over time. Discipline in health mirrors their success in career — regular exercise, calcium-rich diets, and preventive check-ups are essential. Saturn rewards those who invest in long-term wellbeing.",
    challenges:
      "The primary challenge for Number 8 is the karmic pendulum — Saturn can deliver dramatic reversals of fortune to those who cut corners or act unethically. Workaholism, emotional suppression, and a tendency to prioritize status over genuine happiness are recurring pitfalls. The lesson is that true power comes from integrity, not just ambition.",
    compatibleNumbers: [4, 5, 6],
    incompatibleNumbers: [1, 2, 9],
    famousPersonalities: ["Narendra Modi", "Warren Buffett", "Indira Gandhi", "Pablo Picasso", "Mukesh Ambani"],
    yearMeaning:
      "A Personal Year 8 is the harvest year — the culmination of everything you have built over the past seven years. This is the year for financial gains, career advancement, recognition, and stepping into positions of greater authority. Saturn rewards effort and discipline; reap what you have sown.",
  },
  {
    number: 9,
    slug: "9",
    name: "Number 9 — The Humanitarian",
    rulingPlanet: "Mars",
    rulingPlanetSanskrit: "Mangal",
    element: "Fire",
    color: "Red",
    colors: ["Red", "Crimson", "Scarlet", "Coral"],
    day: "Tuesday",
    gemstone: "Red Coral (Moonga)",
    mantra: "Om Mangalaya Namaha",
    tarotCard: "The Hermit",
    keywords: ["Courage", "Compassion", "Completion", "Idealism", "Warrior Spirit", "Universal Love"],
    overview:
      "Number 9 in Chaldean numerology is ruled by Mars, the planet of courage, energy, and warrior spirit. As the final single digit, Number 9 carries the wisdom and experience of all preceding numbers — it represents completion, universal love, and the courage to fight for a cause greater than oneself. Mars's influence gives these individuals tremendous physical energy, fearlessness, and a burning desire to make the world better. In Vedic tradition, Mangal represents both the warrior and the protector, making Number 9 individuals natural champions of justice and humanitarian causes.",
    personality:
      "Number 9 personalities are courageous, compassionate, and driven by ideals — they are the warriors with a heart. They possess a rare combination of physical energy, emotional depth, and intellectual vision that makes them natural leaders of movements and causes. Their generosity is boundless, sometimes to a fault, and they inspire others through the sheer force of their conviction and sacrifice.",
    career:
      "Number 9 individuals excel in military, law enforcement, surgery, sports, social activism, and humanitarian work. They make outstanding doctors, lawyers, nonprofit leaders, and motivational speakers. Any career that combines action with purpose — fighting for justice, healing the sick, protecting the vulnerable — aligns with Mars's noble energy.",
    love:
      "In relationships, Number 9 people are passionate, loyal, and intensely protective of their loved ones. They love deeply and expect the same level of commitment in return — half-hearted relationships do not satisfy them. Their best compatibility is with Numbers 1, 2, and 3, who match their intensity and idealism.",
    health:
      "Mars governs the blood, muscles, and head, making Number 9 individuals prone to fevers, inflammations, headaches, and sports injuries. Their high energy levels need constructive physical outlets — martial arts, running, and competitive sports keep Mars energy balanced. Anger management is important, as suppressed Mars energy manifests as inflammation.",
    challenges:
      "The core challenge for Number 9 is controlling the fire within — Mars's aggressive energy can manifest as anger, impatience, and a tendency to burn bridges. Their idealism can lead to disappointment when the world fails to meet their high standards. Learning to channel passion into sustained action rather than explosive reactions is their essential growth path.",
    compatibleNumbers: [1, 2, 3],
    incompatibleNumbers: [4, 8],
    famousPersonalities: ["Mahatma Gandhi", "Swami Vivekananda", "Carl Sagan", "Akshay Kumar", "Mother Teresa"],
    yearMeaning:
      "A Personal Year 9 is the year of completion, release, and preparation for transformation. This is the time to let go of what no longer serves you — relationships, jobs, habits, and beliefs that have run their course. Closure and forgiveness are the themes. What you release now creates space for the powerful new beginning of Year 1.",
  },
];

export function getNumerologyByNumber(num: number): NumerologyNumber | undefined {
  return numerologyNumbers.find((n) => n.number === num);
}
