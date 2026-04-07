export interface Antardasha {
  planet: string;
  slug: string;
  duration: string;
  overview: string;
  keyThemes: string[];
}

export interface Dasha {
  slug: string;
  planet: string;
  planetSanskrit: string;
  duration: number;
  order: number;
  nature: string;
  signifies: string[];
  overview: string;
  positiveEffects: string[];
  negativeEffects: string[];
  career: string;
  relationships: string;
  health: string;
  spirituality: string;
  remedies: string[];
  antardasha: Antardasha[];
}

export const dashas: Dasha[] = [
  // ─── 1. KETU MAHADASHA (7 years) ─────────────────────────────────────
  {
    slug: "ketu",
    planet: "Ketu",
    planetSanskrit: "Ketu (केतु)",
    duration: 7,
    order: 1,
    nature: "Malefic",
    signifies: [
      "Spiritual awakening and moksha",
      "Detachment from material pursuits",
      "Past-life karmic resolution",
      "Sudden and unexpected changes",
      "Mystical experiences and intuition",
      "Isolation and introspection",
    ],
    overview:
      "Ketu Mahadasha is a powerful 7-year period that initiates deep spiritual transformation and detachment from worldly attachments. As the south node of the Moon, Ketu strips away material comforts to redirect the soul toward its higher purpose and past-life karmic resolution. This period often brings sudden, unexpected events that force introspection and a reevaluation of life priorities. While challenging on the material plane, Ketu Mahadasha can be profoundly liberating for those who embrace its spiritual lessons and surrender to the process of inner purification.",
    positiveEffects: [
      "Profound spiritual growth and heightened intuitive abilities",
      "Liberation from unhealthy attachments and toxic patterns",
      "Success in occult sciences, astrology, and metaphysical pursuits",
      "Sudden gains through unexpected sources or inheritance",
      "Deep meditative experiences and expanded consciousness",
    ],
    negativeEffects: [
      "Feelings of confusion, aimlessness, and identity crisis",
      "Unexpected losses in finances, relationships, or career",
      "Health issues related to mysterious or hard-to-diagnose conditions",
      "Social isolation and difficulty maintaining relationships",
      "Mental restlessness and anxiety without clear cause",
    ],
    career:
      "Career during Ketu Mahadasha often takes unconventional turns, with sudden job changes or a pull toward spiritual, research, or healing professions. Traditional career paths may feel unfulfilling, pushing individuals toward roles in astrology, alternative medicine, technology, or investigative work. Success comes through specialized, niche expertise rather than mainstream corporate advancement.",
    relationships:
      "Relationships undergo significant testing during Ketu Mahadasha, as the native develops a strong sense of detachment and may struggle to maintain emotional intimacy. Existing partnerships may dissolve if they lack spiritual depth or genuine connection. Those who navigate this period well often form bonds based on shared spiritual values rather than material compatibility.",
    health:
      "Health concerns during Ketu Mahadasha tend to be mysterious, hard to diagnose, or related to the nervous system, skin, and digestive tract. Psychosomatic illnesses and unexplained ailments are common. Maintaining a disciplined routine with meditation and yoga can significantly mitigate health challenges.",
    spirituality:
      "This is one of the most spiritually potent periods in Vedic astrology. Ketu Mahadasha can trigger spontaneous kundalini awakening, past-life memories, and profound shifts in consciousness. Meditation, pilgrimage, and study of ancient scriptures yield exceptional results during this phase.",
    remedies: [
      "Worship Lord Ganesha and recite Ganesha Atharvashirsha daily",
      "Donate blankets, sesame seeds, and grey/brown-colored items on Tuesdays",
      "Wear a Cat's Eye (Lehsunia) gemstone after proper astrological consultation",
      "Practice regular meditation and mindfulness to channel Ketu's introspective energy",
      "Feed stray dogs and care for animals as acts of karmic service",
    ],
    antardasha: [
      {
        planet: "Ketu",
        slug: "ketu",
        duration: "4 months 27 days",
        overview:
          "Ketu-Ketu is the opening sub-period that sets the tone for the entire Mahadasha. This intensely introspective phase brings heightened spiritual sensitivity and a strong pull toward solitude and self-reflection. It can feel disorienting as old attachments begin dissolving rapidly.",
        keyThemes: [
          "Intense introspection and self-questioning",
          "Sudden shifts in perspective or lifestyle",
          "Heightened psychic sensitivity",
          "Initial detachment from material comforts",
        ],
      },
      {
        planet: "Venus",
        slug: "venus",
        duration: "1 year 2 months",
        overview:
          "Ketu-Venus creates tension between spiritual detachment and material desires. Relationships may form or dissolve unexpectedly, and there can be a peculiar attraction to luxury alongside a growing disinterest in it. Creative and artistic talents may surface in unconventional ways.",
        keyThemes: [
          "Conflict between spirituality and sensual pleasures",
          "Unconventional romantic experiences",
          "Artistic inspiration from mystical sources",
          "Financial fluctuations related to luxury items",
        ],
      },
      {
        planet: "Sun",
        slug: "sun",
        duration: "4 months 6 days",
        overview:
          "Ketu-Sun brings ego dissolution and challenges to authority and self-identity. Conflicts with father figures or government authorities may arise. However, this period can strengthen inner conviction and spiritual willpower when navigated with awareness.",
        keyThemes: [
          "Identity crisis and ego challenges",
          "Conflicts with authority figures",
          "Strengthening of inner spiritual fire",
          "Health concerns related to vitality and bones",
        ],
      },
      {
        planet: "Moon",
        slug: "moon",
        duration: "7 months",
        overview:
          "Ketu-Moon is emotionally turbulent, as Ketu's detaching influence disrupts the Moon's need for emotional security. Anxiety, restless thoughts, and mood swings are common. Meditation and pranayama become essential tools for maintaining mental equilibrium during this sub-period.",
        keyThemes: [
          "Emotional instability and anxiety",
          "Disruption to domestic peace",
          "Heightened psychic dreams and intuition",
          "Need for mental health awareness",
        ],
      },
      {
        planet: "Mars",
        slug: "mars",
        duration: "4 months 27 days",
        overview:
          "Ketu-Mars is an intense, fiery sub-period that can bring accidents, surgeries, or sudden conflicts. The combination amplifies impulsive energy and can lead to rash decisions. Channeled positively, it provides extraordinary courage for spiritual practices like tapas and intense sadhana.",
        keyThemes: [
          "Heightened aggression and impulsiveness",
          "Risk of accidents or surgical procedures",
          "Exceptional courage and determination",
          "Disputes over property or inheritance",
        ],
      },
      {
        planet: "Rahu",
        slug: "rahu",
        duration: "1 year 18 days",
        overview:
          "Ketu-Rahu activates the full nodal axis, creating a period of intense karmic reckoning. This is one of the most challenging sub-periods, bringing confusion, deception, and unexpected reversals. Past-life karmas surface forcefully, demanding resolution and conscious processing.",
        keyThemes: [
          "Intense karmic events and revelations",
          "Confusion between illusion and reality",
          "Potential for fraud or deception",
          "Deep past-life karmic clearing",
        ],
      },
      {
        planet: "Jupiter",
        slug: "jupiter",
        duration: "11 months 6 days",
        overview:
          "Ketu-Jupiter offers welcome relief as Jupiter's benefic wisdom helps channel Ketu's spiritual energy constructively. Interest in philosophy, scripture, and higher learning deepens. Guidance from a spiritual teacher or guru often manifests during this period.",
        keyThemes: [
          "Spiritual wisdom and philosophical growth",
          "Connection with a spiritual guide or guru",
          "Interest in scriptures and higher knowledge",
          "Improvement in overall well-being",
        ],
      },
      {
        planet: "Saturn",
        slug: "saturn",
        duration: "1 year 1 month 9 days",
        overview:
          "Ketu-Saturn is a demanding sub-period that tests endurance, patience, and resilience. Chronic health issues, delays in projects, and feelings of isolation may intensify. However, disciplined spiritual practice during this time builds deep inner strength and karmic purification.",
        keyThemes: [
          "Tests of patience and endurance",
          "Chronic health concerns surfacing",
          "Feelings of loneliness and restriction",
          "Karmic debts requiring disciplined resolution",
        ],
      },
      {
        planet: "Mercury",
        slug: "mercury",
        duration: "11 months 27 days",
        overview:
          "Ketu-Mercury closes the Ketu Mahadasha with intellectual restlessness and communication challenges. Analytical thinking may conflict with intuitive knowing. This period favors research, writing, and study of esoteric subjects, though practical business decisions may suffer from lack of clarity.",
        keyThemes: [
          "Intellectual restlessness and scattered focus",
          "Interest in esoteric or occult research",
          "Communication misunderstandings",
          "Nervous system sensitivity",
        ],
      },
    ],
  },

  // ─── 2. VENUS MAHADASHA (20 years) ───────────────────────────────────
  {
    slug: "venus",
    planet: "Venus/Shukra",
    planetSanskrit: "Shukra (शुक्र)",
    duration: 20,
    order: 2,
    nature: "Benefic",
    signifies: [
      "Love, romance, and marriage",
      "Wealth, luxury, and material comforts",
      "Art, music, and creative expression",
      "Beauty, fashion, and aesthetics",
      "Vehicles, property, and sensual pleasures",
      "Diplomacy and harmonious relationships",
    ],
    overview:
      "Venus Mahadasha is the longest planetary period at 20 years, bringing an extended phase of material prosperity, artistic fulfillment, and romantic experiences. As the guru of the Asuras and the planet of love and luxury, Venus bestows refined tastes, financial growth, and harmonious relationships when well-placed in the birth chart. This Mahadasha often marks the most materially comfortable period of one's life, with opportunities for acquiring property, vehicles, and luxury items. However, an afflicted Venus can bring overindulgence, relationship complications, and excessive attachment to sensory pleasures that ultimately create suffering.",
    positiveEffects: [
      "Significant wealth accumulation and financial prosperity",
      "Happy marriage, deep romantic connections, and social popularity",
      "Success in arts, entertainment, fashion, and creative industries",
      "Acquisition of luxury items, vehicles, and beautiful properties",
      "Enhanced charisma, charm, and diplomatic abilities",
    ],
    negativeEffects: [
      "Overindulgence in sensual pleasures and materialism",
      "Extramarital affairs or complicated romantic entanglements",
      "Health issues related to kidneys, reproductive system, and diabetes",
      "Financial losses through excessive spending on luxuries",
      "Vanity, laziness, and avoidance of spiritual growth",
    ],
    career:
      "Venus Mahadasha is exceptionally favorable for careers in arts, entertainment, fashion, hospitality, luxury goods, beauty, and creative industries. Financial advisory, real estate, and diplomacy also flourish under Venus's influence. Promotions, business partnerships, and client relationships thrive due to enhanced interpersonal skills and natural charm.",
    relationships:
      "This is the prime period for marriage, deepening romantic bonds, and building a harmonious family life. Social circles expand significantly, and the native attracts admirers effortlessly. However, the abundance of romantic attention can also test fidelity and create complications if boundaries are not maintained.",
    health:
      "Venus governs the reproductive system, kidneys, throat, and skin. Health issues during this period may include diabetes, urinary tract infections, hormonal imbalances, and skin conditions. Overindulgence in rich food and drink is a common pitfall that needs conscious management.",
    spirituality:
      "While Venus is primarily material in nature, its higher octave connects to Bhakti Yoga and devotional practices. Worship of Goddess Lakshmi and engagement with sacred music, kirtan, and devotional arts can elevate Venus's energy from mere sensuality to divine love and beauty.",
    remedies: [
      "Worship Goddess Lakshmi on Fridays and recite Sri Suktam",
      "Wear a Diamond or White Sapphire after astrological consultation",
      "Donate white clothes, rice, sugar, and perfumes on Fridays",
      "Maintain integrity in romantic relationships and avoid overindulgence",
      "Practice Bhakti Yoga through devotional music and artistic offerings",
    ],
    antardasha: [
      {
        planet: "Venus",
        slug: "venus",
        duration: "3 years 4 months",
        overview:
          "Venus-Venus inaugurates the Mahadasha with full Venusian energy, bringing peak romantic and material experiences. This is often the most luxurious and pleasurable sub-period, with new relationships, financial gains, and artistic accomplishments flowing abundantly.",
        keyThemes: [
          "Peak romantic and social experiences",
          "Major financial gains and luxury acquisitions",
          "Artistic creativity at its highest",
          "Marriage or deepening of partnerships",
        ],
      },
      {
        planet: "Sun",
        slug: "sun",
        duration: "1 year",
        overview:
          "Venus-Sun blends material elegance with leadership ambition. Government connections and authority figures may provide career advancement. The native gains recognition and status, though ego conflicts in relationships can create friction between personal desires and partnership harmony.",
        keyThemes: [
          "Recognition and status elevation",
          "Government or authority-related gains",
          "Ego clashes in personal relationships",
          "Creative leadership opportunities",
        ],
      },
      {
        planet: "Moon",
        slug: "moon",
        duration: "1 year 8 months",
        overview:
          "Venus-Moon is a beautiful, emotionally nurturing sub-period that enhances domestic happiness, emotional bonds, and creative imagination. Mother figures and feminine energy play important roles. This period is excellent for real estate purchases and home beautification.",
        keyThemes: [
          "Emotional fulfillment and domestic happiness",
          "Strong maternal and feminine influences",
          "Real estate and home-related gains",
          "Enhanced creative imagination",
        ],
      },
      {
        planet: "Mars",
        slug: "mars",
        duration: "1 year 2 months",
        overview:
          "Venus-Mars ignites passionate energy in both romance and ambition. Physical attraction intensifies, and bold creative projects gain momentum. Property purchases and vehicle acquisitions are favored, though impulsive spending and heated romantic disputes need careful management.",
        keyThemes: [
          "Intense romantic passion and attraction",
          "Property and vehicle acquisitions",
          "Bold creative or business ventures",
          "Potential for passionate disputes",
        ],
      },
      {
        planet: "Rahu",
        slug: "rahu",
        duration: "3 years",
        overview:
          "Venus-Rahu amplifies desires and material ambitions to extraordinary levels. Foreign connections, unconventional relationships, and rapid wealth accumulation are possible. However, this combination can also bring deception in love, addiction to pleasures, and financial schemes that promise more than they deliver.",
        keyThemes: [
          "Amplified material desires and ambitions",
          "Foreign connections and unconventional relationships",
          "Risk of deception or unrealistic expectations",
          "Rapid but potentially unstable financial growth",
        ],
      },
      {
        planet: "Jupiter",
        slug: "jupiter",
        duration: "2 years 8 months",
        overview:
          "Venus-Jupiter is one of the most auspicious combinations, blending material abundance with wisdom and righteousness. Marriage, childbirth, higher education, and spiritual growth are all favored. Financial prosperity comes through ethical means, and social reputation reaches new heights.",
        keyThemes: [
          "Auspicious events like marriage or childbirth",
          "Wealth through ethical and wise investments",
          "Expansion of social and spiritual circles",
          "Higher education and philosophical growth",
        ],
      },
      {
        planet: "Saturn",
        slug: "saturn",
        duration: "3 years 2 months",
        overview:
          "Venus-Saturn brings a sobering influence to Venusian pleasures, demanding discipline in relationships and finances. This sub-period favors long-term investments, property acquisition through hard work, and mature, committed partnerships. Delays and responsibilities test the native's patience and commitment.",
        keyThemes: [
          "Disciplined approach to finances and relationships",
          "Long-term property and investment gains",
          "Relationship maturity through challenges",
          "Delays requiring patience and persistence",
        ],
      },
      {
        planet: "Mercury",
        slug: "mercury",
        duration: "2 years 10 months",
        overview:
          "Venus-Mercury combines beauty with intellect, making this an excellent period for creative writing, business negotiations, and commercial ventures. Communication skills are enhanced with charm and diplomacy. Trade, media, and marketing ventures flourish under this articulate combination.",
        keyThemes: [
          "Success in creative writing and media",
          "Profitable business negotiations",
          "Enhanced communication and charm",
          "Commercial ventures and trade prosperity",
        ],
      },
      {
        planet: "Ketu",
        slug: "ketu",
        duration: "1 year 2 months",
        overview:
          "Venus-Ketu closes the Mahadasha by introducing spiritual detachment into material life. Relationships may face unexpected endings or transformations. The native begins questioning purely material pursuits and may develop interest in mystical arts, tantric practices, or spiritual forms of beauty.",
        keyThemes: [
          "Spiritual questioning of material attachments",
          "Unexpected relationship transformations",
          "Interest in mystical or tantric arts",
          "Transition toward deeper inner values",
        ],
      },
    ],
  },

  // ─── 3. SUN MAHADASHA (6 years) ──────────────────────────────────────
  {
    slug: "sun",
    planet: "Sun/Surya",
    planetSanskrit: "Surya (सूर्य)",
    duration: 6,
    order: 3,
    nature: "Malefic",
    signifies: [
      "Authority, leadership, and government",
      "Father, soul, and self-identity",
      "Vitality, health, and physical strength",
      "Fame, recognition, and public status",
      "Willpower and noble character",
      "Government positions and political power",
    ],
    overview:
      "Sun Mahadasha spans 6 years and activates themes of authority, self-expression, and personal power in Vedic astrology. The Sun, known as Surya or the Atmakaraka (significator of the soul), illuminates one's true purpose and drives ambition toward leadership and recognition. During this period, relationships with father figures and government authorities become central, and the native's sense of identity and ego undergoes significant development. A well-placed Sun brings fame, government favor, and robust health, while an afflicted Sun can create conflicts with authority, excessive pride, and health issues related to the heart and bones.",
    positiveEffects: [
      "Rise in career authority, leadership positions, and public recognition",
      "Strong government connections and favorable dealings with authorities",
      "Enhanced vitality, confidence, and decisive willpower",
      "Father figures provide support and guidance",
      "Success in politics, administration, and executive roles",
    ],
    negativeEffects: [
      "Ego conflicts with colleagues, partners, and authority figures",
      "Strained relationship with father or paternal figures",
      "Health issues related to heart, eyes, bones, and blood pressure",
      "Arrogance and dictatorial tendencies alienating others",
      "Government penalties, tax issues, or legal complications",
    ],
    career:
      "Sun Mahadasha is excellent for careers in government, administration, politics, medicine, and senior leadership roles. Promotions to positions of authority and public recognition are common when the Sun is well-placed. Independent ventures and entrepreneurship gain momentum, as the native's leadership qualities shine brightest during this period.",
    relationships:
      "Relationships during Sun Mahadasha are influenced by the native's growing sense of authority and self-importance. The partner may feel overshadowed if the native becomes too ego-driven. Strong, supportive bonds form with those who respect the native's leadership, while relationships based on equality may face strain.",
    health:
      "The Sun governs the heart, eyes, bones, and overall vitality. Pitta-related health issues such as high blood pressure, heart conditions, eye problems, and bile disorders may surface. Regular outdoor activity, sun exposure in moderation, and a cooling diet help maintain balance.",
    spirituality:
      "Sun Mahadasha connects the native to Atma Vidya, the knowledge of the soul. Surya Namaskar, Gayatri Mantra chanting, and dawn meditation are particularly powerful practices. This period strengthens the connection between individual consciousness and universal divine light.",
    remedies: [
      "Chant the Gayatri Mantra or Aditya Hridayam daily at sunrise",
      "Offer water (arghya) to the Sun every morning",
      "Wear a Ruby gemstone after proper astrological consultation",
      "Donate wheat, jaggery, and copper items on Sundays",
      "Respect and serve father figures and authority figures",
    ],
    antardasha: [
      {
        planet: "Sun",
        slug: "sun",
        duration: "3 months 18 days",
        overview:
          "Sun-Sun is a brief but intense opening that amplifies self-confidence, authority, and vitality. The native feels a surge of personal power and clarity of purpose. Government dealings, father-related matters, and career recognition are in sharp focus.",
        keyThemes: [
          "Peak self-confidence and personal authority",
          "Government recognition or career milestone",
          "Father-related events or developments",
          "Strong vitality and decisiveness",
        ],
      },
      {
        planet: "Moon",
        slug: "moon",
        duration: "6 months",
        overview:
          "Sun-Moon blends royal authority with emotional sensitivity. Public reputation and popularity increase as the native combines leadership with empathy. Mother-father dynamics may surface, and emotional well-being becomes intertwined with career success and public image.",
        keyThemes: [
          "Enhanced public popularity and emotional intelligence",
          "Parental relationship dynamics",
          "Mental peace supporting career growth",
          "Balancing authority with emotional needs",
        ],
      },
      {
        planet: "Mars",
        slug: "mars",
        duration: "4 months 6 days",
        overview:
          "Sun-Mars creates a powerful, assertive energy combining leadership with warrior spirit. This sub-period favors bold initiatives, competitive victories, and decisive action. However, the fiery combination can also trigger conflicts with authority, accidents, and aggressive confrontations.",
        keyThemes: [
          "Bold leadership and competitive success",
          "Risk of conflicts and aggressive encounters",
          "Property or land-related developments",
          "Surgical or medical interventions possible",
        ],
      },
      {
        planet: "Rahu",
        slug: "rahu",
        duration: "10 months 24 days",
        overview:
          "Sun-Rahu brings ambitious desires for power and recognition, often through unconventional or foreign channels. Political intrigue, unexpected career shifts, and dealing with smoke-screen situations are common. The native must guard against deceptive alliances that promise power but deliver complications.",
        keyThemes: [
          "Ambitious pursuit of power through unusual means",
          "Foreign connections and unconventional opportunities",
          "Political intrigue and power dynamics",
          "Need to guard against deception",
        ],
      },
      {
        planet: "Jupiter",
        slug: "jupiter",
        duration: "9 months 18 days",
        overview:
          "Sun-Jupiter is a highly auspicious combination bringing wisdom to authority and righteousness to leadership. Government favor, promotions, and academic recognition flow naturally. Spiritual growth accompanies material success, and mentorship from wise elders strengthens the native's path.",
        keyThemes: [
          "Auspicious career growth and promotions",
          "Wisdom and ethics in leadership",
          "Mentorship and guru guidance",
          "Academic or spiritual recognition",
        ],
      },
      {
        planet: "Saturn",
        slug: "saturn",
        duration: "11 months 12 days",
        overview:
          "Sun-Saturn creates friction between the desire for recognition and Saturn's delays and restrictions. This challenging sub-period tests the native's patience with authority structures, government bureaucracy, and career obstacles. Health issues related to bones and vitality may surface.",
        keyThemes: [
          "Career delays and authority conflicts",
          "Government bureaucracy and legal hurdles",
          "Health concerns related to bones and joints",
          "Lessons in humility and patience",
        ],
      },
      {
        planet: "Mercury",
        slug: "mercury",
        duration: "10 months 6 days",
        overview:
          "Sun-Mercury enhances intellectual leadership and communication skills. Success comes through writing, public speaking, and administrative intelligence. Business acumen sharpens, and the native gains recognition for analytical and strategic thinking in professional settings.",
        keyThemes: [
          "Intellectual leadership and strategic thinking",
          "Success through communication and writing",
          "Business and administrative prowess",
          "Education-related achievements",
        ],
      },
      {
        planet: "Ketu",
        slug: "ketu",
        duration: "4 months 6 days",
        overview:
          "Sun-Ketu challenges the ego and self-identity, bringing spiritual questioning into the realm of authority and power. The native may experience disillusionment with worldly success or face sudden reversals in status. This period favors turning leadership skills toward spiritual or humanitarian service.",
        keyThemes: [
          "Ego dissolution and identity questioning",
          "Sudden changes in status or authority",
          "Spiritual turn in leadership approach",
          "Detachment from worldly recognition",
        ],
      },
      {
        planet: "Venus",
        slug: "venus",
        duration: "1 year",
        overview:
          "Sun-Venus closes the Mahadasha by blending authority with artistic refinement and social grace. Government support for creative ventures, recognition in arts, and harmonious professional relationships mark this period. Luxury, comfort, and aesthetic appreciation increase alongside career achievements.",
        keyThemes: [
          "Artistic recognition and creative success",
          "Harmonious professional relationships",
          "Luxury and comfort in lifestyle",
          "Government support for creative ventures",
        ],
      },
    ],
  },

  // ─── 4. MOON MAHADASHA (10 years) ────────────────────────────────────
  {
    slug: "moon",
    planet: "Moon/Chandra",
    planetSanskrit: "Chandra (चन्द्र)",
    duration: 10,
    order: 4,
    nature: "Benefic",
    signifies: [
      "Mind, emotions, and mental peace",
      "Mother, nurturing, and caregiving",
      "Public image and popularity",
      "Intuition, imagination, and creativity",
      "Home, domestic life, and comfort",
      "Water, travel, and liquid assets",
    ],
    overview:
      "Moon Mahadasha is a 10-year period governed by Chandra, the significator of the mind, emotions, and mother in Vedic astrology. This period brings the native's emotional world into sharp focus, amplifying sensitivity, intuition, and the desire for security and nurturing. A strong, well-placed Moon bestows mental peace, public popularity, prosperity through liquid assets, and deep emotional fulfillment. The native's relationship with the mother and maternal figures becomes particularly significant. However, an afflicted Moon can bring emotional instability, anxiety, depression, and fluctuating fortunes that mirror the Moon's own waxing and waning phases.",
    positiveEffects: [
      "Enhanced emotional intelligence and deep intuitive abilities",
      "Strong public popularity and positive social reputation",
      "Prosperity in real estate, agriculture, and water-related businesses",
      "Nurturing domestic environment and close family bonds",
      "Creative imagination fueling artistic and literary success",
    ],
    negativeEffects: [
      "Emotional volatility, mood swings, and mental health challenges",
      "Anxiety, depression, and psychosomatic health issues",
      "Codependency in relationships and fear of abandonment",
      "Financial fluctuations and difficulty with long-term planning",
      "Health issues related to lungs, chest, and fluid retention",
    ],
    career:
      "Moon Mahadasha favors careers that involve public interaction, nurturing, and emotional intelligence. Success comes in hospitality, healthcare, counseling, real estate, agriculture, shipping, and creative arts. Public-facing roles and businesses catering to women or domestic needs see particular growth during this period.",
    relationships:
      "Emotional bonds deepen significantly during Moon Mahadasha, with the native seeking genuine emotional security and nurturing partnerships. The relationship with the mother becomes central, and maternal influences shape many decisions. Romantic relationships are emotionally intense, with the native craving deep emotional understanding from partners.",
    health:
      "Moon governs the mind, chest, lungs, blood, and bodily fluids. Mental health deserves special attention during this period, as anxiety, insomnia, and depression can manifest. Physical concerns may include cold-related ailments, water retention, respiratory issues, and digestive problems related to emotional eating.",
    spirituality:
      "Moon Mahadasha enhances receptivity to meditation, particularly practices involving visualization, mantra, and devotional worship. The native is drawn to compassionate, nurturing forms of spirituality. Worship of the Divine Mother in any form, moonlight meditation, and water-based purification rituals are especially powerful.",
    remedies: [
      "Worship Goddess Parvati or any form of the Divine Mother on Mondays",
      "Wear a natural Pearl or Moonstone after astrological consultation",
      "Donate white items like rice, milk, silver, and white cloth on Mondays",
      "Practice Chandra Namaskar (Moon Salutation) and moonlight meditation",
      "Maintain emotional hygiene through journaling and counseling when needed",
    ],
    antardasha: [
      {
        planet: "Moon",
        slug: "moon",
        duration: "10 months",
        overview:
          "Moon-Moon inaugurates the Mahadasha with pure lunar energy, bringing heightened emotional sensitivity and intuition. Domestic matters, mother-related events, and mental well-being take center stage. This period sets the emotional tone for the decade ahead.",
        keyThemes: [
          "Peak emotional sensitivity and intuition",
          "Mother-related events and domestic focus",
          "Mental health awareness becomes crucial",
          "Public image and popularity enhancement",
        ],
      },
      {
        planet: "Mars",
        slug: "mars",
        duration: "7 months",
        overview:
          "Moon-Mars creates emotional volatility as Mars's aggressive energy disrupts the Moon's peace. Property matters, sibling dynamics, and emotional courage are activated. The native must manage anger and impulsiveness while channeling Mars's energy into protective, constructive action.",
        keyThemes: [
          "Emotional volatility and quick temper",
          "Property purchases or disputes",
          "Courage in emotional confrontations",
          "Sibling and mother-related dynamics",
        ],
      },
      {
        planet: "Rahu",
        slug: "rahu",
        duration: "1 year 6 months",
        overview:
          "Moon-Rahu is one of the more challenging sub-periods, amplifying mental anxiety, obsessive thoughts, and irrational fears. Foreign travel or relocation may occur. The mind becomes restless with unfulfilled desires, and the native must guard against deception and emotional manipulation.",
        keyThemes: [
          "Mental anxiety and obsessive thinking",
          "Foreign travel or relocation possibilities",
          "Emotional manipulation from others",
          "Need for mental health support and grounding",
        ],
      },
      {
        planet: "Jupiter",
        slug: "jupiter",
        duration: "1 year 4 months",
        overview:
          "Moon-Jupiter is a beautifully auspicious combination bringing emotional wisdom, spiritual growth, and material prosperity. Children, education, and religious activities bring joy. The mind finds peace through higher learning, and financial stability improves through wise decisions.",
        keyThemes: [
          "Emotional wisdom and spiritual peace",
          "Children and education-related happiness",
          "Financial prosperity through wise choices",
          "Religious and philosophical fulfillment",
        ],
      },
      {
        planet: "Saturn",
        slug: "saturn",
        duration: "1 year 7 months",
        overview:
          "Moon-Saturn brings emotional heaviness, loneliness, and a sense of duty that feels burdensome. The native may experience depression, grief, or separation from loved ones. Responsibilities toward mother or elders increase. Patience and disciplined emotional management are essential.",
        keyThemes: [
          "Emotional heaviness and possible depression",
          "Increased responsibilities and duties",
          "Separation from comfort or loved ones",
          "Building emotional resilience through adversity",
        ],
      },
      {
        planet: "Mercury",
        slug: "mercury",
        duration: "1 year 5 months",
        overview:
          "Moon-Mercury combines emotional intelligence with analytical thinking, favoring communication, writing, and commercial activities. Business instincts are sharp, and the native can articulate emotions effectively. Education, short travels, and intellectual pursuits bring satisfaction.",
        keyThemes: [
          "Sharp business instincts and commercial success",
          "Effective emotional communication",
          "Educational and intellectual growth",
          "Short travels and networking opportunities",
        ],
      },
      {
        planet: "Ketu",
        slug: "ketu",
        duration: "7 months",
        overview:
          "Moon-Ketu brings emotional detachment and spiritual introspection. The native may feel disconnected from familiar emotional patterns and relationships. Psychic experiences and intuitive insights intensify, but so does the risk of anxiety and unexplained emotional disturbance.",
        keyThemes: [
          "Emotional detachment and spiritual seeking",
          "Heightened psychic experiences",
          "Anxiety from unexplained emotional shifts",
          "Letting go of emotional attachments",
        ],
      },
      {
        planet: "Venus",
        slug: "venus",
        duration: "1 year 8 months",
        overview:
          "Moon-Venus creates a harmonious, pleasure-oriented period emphasizing domestic beauty, romantic fulfillment, and creative expression. This is one of the most comfortable sub-periods, with emotional needs being met through loving relationships, artistic pursuits, and material comforts.",
        keyThemes: [
          "Romantic fulfillment and emotional harmony",
          "Domestic beautification and comfort",
          "Creative and artistic expression",
          "Material comforts and luxury",
        ],
      },
      {
        planet: "Sun",
        slug: "sun",
        duration: "6 months",
        overview:
          "Moon-Sun closes the Mahadasha by integrating emotional intelligence with personal authority. The native gains recognition for emotional leadership and public-facing roles. Parental dynamics between father (Sun) and mother (Moon) may reach resolution.",
        keyThemes: [
          "Integration of emotion and authority",
          "Public recognition for leadership",
          "Resolution of parental dynamics",
          "Clarity of emotional purpose",
        ],
      },
    ],
  },

  // ─── 5. MARS MAHADASHA (7 years) ─────────────────────────────────────
  {
    slug: "mars",
    planet: "Mars/Mangal",
    planetSanskrit: "Mangal (मंगल)",
    duration: 7,
    order: 5,
    nature: "Malefic",
    signifies: [
      "Courage, strength, and warrior energy",
      "Brothers, siblings, and allies",
      "Property, land, and real estate",
      "Surgery, accidents, and physical injury",
      "Technical skills and engineering",
      "Ambition, competition, and victory",
    ],
    overview:
      "Mars Mahadasha is a dynamic 7-year period that activates courage, ambition, physical energy, and the warrior spirit in Vedic astrology. Known as Mangal or Kuja, Mars is the commander-in-chief of the planetary cabinet, bringing assertiveness, competitive drive, and the determination to conquer challenges. This period favors bold initiatives in career, property acquisition, and physical achievement. A well-placed Mars delivers success through courage, technical expertise, and decisive action. However, an afflicted Mars can bring accidents, surgeries, legal disputes, aggression, and conflicts with siblings and authority figures that demand careful management.",
    positiveEffects: [
      "Exceptional courage, physical vitality, and competitive success",
      "Property acquisition and real estate gains",
      "Success in technical, engineering, and military fields",
      "Strong willpower to overcome obstacles and adversaries",
      "Leadership through bold action and decisive management",
    ],
    negativeEffects: [
      "Accidents, injuries, and surgical interventions",
      "Aggressive behavior, conflicts, and legal disputes",
      "Strained relationships with siblings and business partners",
      "Blood-related health issues, fevers, and inflammatory conditions",
      "Impulsive financial decisions and risky investments",
    ],
    career:
      "Mars Mahadasha propels careers in engineering, technology, military, police, surgery, sports, and real estate. The native gains recognition through bold, decisive action and competitive achievement. Entrepreneurial ventures and technical projects thrive, though the native must guard against burning bridges through excessive aggression or impatience.",
    relationships:
      "Relationships during Mars Mahadasha are passionate and intense but can become contentious. The native's increased assertiveness may overwhelm partners who prefer a gentler approach. Sibling relationships are activated and may bring both support and conflict. Manglik effects on marriage are particularly relevant during this period.",
    health:
      "Mars governs blood, muscles, bone marrow, and the adrenal system. Health concerns include fevers, inflammation, accidents, surgical needs, blood disorders, and skin eruptions. The native benefits from regular physical exercise and martial arts, which channel Mars's abundant energy constructively.",
    spirituality:
      "Mars's spiritual expression manifests through tapas (austerities), seva (selfless service), and protection of dharma. Hanuman worship, martial arts as moving meditation, and cultivation of righteous courage form the spiritual path during this period. The native learns that true strength comes from discipline and selfless action.",
    remedies: [
      "Worship Lord Hanuman and recite Hanuman Chalisa on Tuesdays",
      "Wear a Red Coral gemstone after proper astrological consultation",
      "Donate red lentils, jaggery, and copper items on Tuesdays",
      "Channel aggressive energy through sports, martial arts, and physical exercise",
      "Practice patience and anger management through pranayama and meditation",
    ],
    antardasha: [
      {
        planet: "Mars",
        slug: "mars",
        duration: "4 months 27 days",
        overview:
          "Mars-Mars launches the Mahadasha with maximum Martian intensity. Physical energy, courage, and combativeness reach peak levels. Property matters, sibling dynamics, and bold professional moves are activated. The risk of accidents and conflicts is highest during this initial burst.",
        keyThemes: [
          "Peak physical energy and assertiveness",
          "Property and land-related developments",
          "Highest risk of accidents and conflicts",
          "Bold career moves and competitive victories",
        ],
      },
      {
        planet: "Rahu",
        slug: "rahu",
        duration: "1 year 18 days",
        overview:
          "Mars-Rahu is an intense combination that amplifies ambition through unconventional or risky means. Foreign connections, technology ventures, and aggressive pursuit of goals characterize this period. The native must guard against fraud, illegal activities, and reckless adventures that promise quick gains.",
        keyThemes: [
          "Amplified ambition through unconventional means",
          "Foreign opportunities and technology ventures",
          "Risk of fraud and reckless behavior",
          "Intense desire for power and control",
        ],
      },
      {
        planet: "Jupiter",
        slug: "jupiter",
        duration: "11 months 6 days",
        overview:
          "Mars-Jupiter is an auspicious combination known as a Guru-Mangal Yoga when well-placed. Righteous courage, wise action, and success through ethical competition mark this period. Real estate investments, academic achievements, and spiritual warrior energy are positively activated.",
        keyThemes: [
          "Righteous courage and ethical success",
          "Favorable for real estate investments",
          "Academic and spiritual growth",
          "Protection through divine grace",
        ],
      },
      {
        planet: "Saturn",
        slug: "saturn",
        duration: "1 year 1 month 9 days",
        overview:
          "Mars-Saturn creates significant tension between impulsive action and enforced restriction. This is one of the most difficult sub-periods, potentially bringing legal troubles, chronic health issues, accidents, and bitter conflicts. Patience and disciplined effort are the only paths through this challenging combination.",
        keyThemes: [
          "Severe tests of patience and endurance",
          "Legal troubles and authority conflicts",
          "Chronic health issues or injuries",
          "Hard-won achievements through discipline",
        ],
      },
      {
        planet: "Mercury",
        slug: "mercury",
        duration: "11 months 27 days",
        overview:
          "Mars-Mercury combines warrior energy with intellectual agility, favoring technical problem-solving, strategic planning, and competitive intelligence. Success in technology, engineering, and analytical fields is likely. Communication becomes more direct and assertive, which aids negotiations but can also cause verbal conflicts.",
        keyThemes: [
          "Technical and analytical problem-solving",
          "Success in technology and engineering",
          "Direct, assertive communication",
          "Strategic competitive advantage",
        ],
      },
      {
        planet: "Ketu",
        slug: "ketu",
        duration: "4 months 27 days",
        overview:
          "Mars-Ketu produces intense, explosive energy that is difficult to control. Accidents, surgeries, and sudden conflicts can erupt without warning. However, this combination is powerful for spiritual austerities, martial arts mastery, and burning away accumulated karmic debts through intense discipline.",
        keyThemes: [
          "Explosive, hard-to-control energy",
          "Risk of accidents and sudden events",
          "Powerful spiritual austerities",
          "Karmic debt resolution through discipline",
        ],
      },
      {
        planet: "Venus",
        slug: "venus",
        duration: "1 year 2 months",
        overview:
          "Mars-Venus brings passionate romantic energy and material acquisition. Property, vehicles, and luxury items may be acquired through bold action. Romantic relationships intensify with both passion and potential conflict. Creative projects combining technical skill with aesthetic beauty flourish.",
        keyThemes: [
          "Passionate romantic experiences",
          "Property and luxury acquisitions",
          "Creative projects with technical beauty",
          "Balancing aggression with harmony",
        ],
      },
      {
        planet: "Sun",
        slug: "sun",
        duration: "4 months 6 days",
        overview:
          "Mars-Sun creates a powerful, authoritative energy combining warrior courage with royal leadership. Government and military connections strengthen, and the native gains recognition through bold, decisive action. Father-brother dynamics may come into focus.",
        keyThemes: [
          "Authoritative leadership and recognition",
          "Government and military connections",
          "Father-sibling relationship dynamics",
          "Bold decisive action rewarded",
        ],
      },
      {
        planet: "Moon",
        slug: "moon",
        duration: "7 months",
        overview:
          "Mars-Moon closes the Mahadasha by integrating physical courage with emotional intelligence. The native learns to balance assertiveness with sensitivity. Mother-brother relationships, property matters, and emotional bravery in protecting loved ones define this transitional sub-period.",
        keyThemes: [
          "Balancing courage with emotional sensitivity",
          "Mother and family protective instincts",
          "Property matters reaching resolution",
          "Emotional courage and protective action",
        ],
      },
    ],
  },

  // ─── 6. RAHU MAHADASHA (18 years) ────────────────────────────────────
  {
    slug: "rahu",
    planet: "Rahu",
    planetSanskrit: "Rahu (राहु)",
    duration: 18,
    order: 6,
    nature: "Malefic",
    signifies: [
      "Obsession, ambition, and worldly desires",
      "Foreign lands, travel, and immigration",
      "Technology, innovation, and unconventional paths",
      "Illusion, deception, and hidden agendas",
      "Sudden rise and fall in fortune",
      "Karmic lessons from future-life patterns",
    ],
    overview:
      "Rahu Mahadasha spans 18 years and is one of the most transformative and unpredictable periods in the Vimshottari Dasha system. Rahu, the north node of the Moon, represents insatiable worldly desires, material ambition, and the soul's unfulfilled karmic agenda from future incarnations. This period catapults the native into new territories, both literally through foreign travel and figuratively through unconventional career paths, groundbreaking innovation, and boundary-pushing experiences. While Rahu can bestow extraordinary material success, fame, and technological prowess, it operates through illusion, and its gains can be as sudden in their disappearance as in their arrival. Navigating this Mahadasha requires discernment between genuine opportunity and deceptive mirages.",
    positiveEffects: [
      "Rapid, extraordinary rise in career, wealth, and social status",
      "Success in foreign lands, international business, and immigration",
      "Breakthroughs in technology, innovation, and unconventional fields",
      "Powerful political connections and influential networking",
      "Ability to break through traditional barriers and social limitations",
    ],
    negativeEffects: [
      "Obsessive behavior, addiction, and compulsive desires",
      "Deception from others or self-delusion about achievements",
      "Sudden reversals of fortune and unexpected downfalls",
      "Chronic health issues that are difficult to diagnose",
      "Legal complications, scandals, and reputation damage",
    ],
    career:
      "Rahu Mahadasha is exceptionally powerful for careers in technology, international business, politics, entertainment, media, and any unconventional or boundary-breaking field. The native may achieve unprecedented heights of success, particularly in foreign markets or through innovative approaches. However, career gains may be accompanied by ethical dilemmas, and the native must ensure achievements are built on genuine competence rather than mere illusion.",
    relationships:
      "Relationships during Rahu Mahadasha are intense, unconventional, and often involve cross-cultural or taboo-breaking elements. Inter-caste, inter-religious, or inter-national partnerships are common. The native may be attracted to mysterious, foreign, or unconventional partners. Trust issues and deception can plague relationships if Rahu is poorly placed.",
    health:
      "Rahu-related health issues are notoriously difficult to diagnose and treat through conventional medicine. Conditions may include mysterious ailments, phobias, psychological disorders, poisoning, allergies, and chronic fatigue. Substance abuse risk increases significantly during this period. Alternative healing modalities often prove more effective than allopathic approaches.",
    spirituality:
      "Rahu's spiritual path is through transcending material illusion by first fully experiencing it. Tantric practices, advanced meditation techniques, and study of occult sciences can transform Rahu's obsessive energy into powerful spiritual attainment. The native must eventually realize that no amount of material acquisition can fulfill the soul's true hunger.",
    remedies: [
      "Worship Goddess Durga and recite Durga Saptashati or Rahu Kavach",
      "Wear a Hessonite Garnet (Gomed) after proper astrological consultation",
      "Donate black sesame seeds, dark blue cloth, and mustard oil on Saturdays",
      "Practice mindfulness to distinguish genuine opportunities from illusions",
      "Avoid intoxicants and maintain ethical integrity in all dealings",
    ],
    antardasha: [
      {
        planet: "Rahu",
        slug: "rahu",
        duration: "2 years 8 months 12 days",
        overview:
          "Rahu-Rahu amplifies all Rahu significations to maximum intensity. Obsessive ambition, foreign connections, and unconventional pursuits dominate. This opening period often brings dramatic life changes including relocation, career shifts, or sudden elevation in status, but clarity about long-term direction may be lacking.",
        keyThemes: [
          "Maximum amplification of worldly ambitions",
          "Dramatic life changes and relocations",
          "Foreign connections and unconventional opportunities",
          "Confusion about long-term direction despite activity",
        ],
      },
      {
        planet: "Jupiter",
        slug: "jupiter",
        duration: "2 years 4 months 24 days",
        overview:
          "Rahu-Jupiter blends material ambition with wisdom and expansion. This is one of the more favorable Rahu sub-periods, as Jupiter's benefic influence channels Rahu's energy toward legitimate growth, higher education, and ethical advancement. Foreign educational opportunities and wise mentors may appear.",
        keyThemes: [
          "Wisdom channeling ambitious energy",
          "Higher education and foreign learning",
          "Ethical expansion of influence",
          "Beneficial mentors and spiritual guidance",
        ],
      },
      {
        planet: "Saturn",
        slug: "saturn",
        duration: "2 years 10 months 6 days",
        overview:
          "Rahu-Saturn is a demanding sub-period combining Rahu's relentless ambition with Saturn's harsh discipline. Hard work, delays, and systemic obstacles test the native's perseverance. Legal issues, chronic health problems, and encounters with institutional bureaucracy are common. Success comes only through sustained, honest effort.",
        keyThemes: [
          "Harsh tests of perseverance and discipline",
          "Legal complications and bureaucratic obstacles",
          "Chronic health issues requiring attention",
          "Hard-won success through sustained effort",
        ],
      },
      {
        planet: "Mercury",
        slug: "mercury",
        duration: "2 years 6 months 18 days",
        overview:
          "Rahu-Mercury activates intellectual ambition, strategic thinking, and communication prowess. Success in technology, media, writing, and business strategy is likely. The native's analytical abilities combine with Rahu's unconventional approach to produce innovative solutions. Guard against overthinking and nervous anxiety.",
        keyThemes: [
          "Intellectual innovation and strategic success",
          "Technology and media breakthroughs",
          "Business strategy and communication",
          "Risk of nervous anxiety and overthinking",
        ],
      },
      {
        planet: "Ketu",
        slug: "ketu",
        duration: "1 year 18 days",
        overview:
          "Rahu-Ketu activates the full karmic axis, creating intense spiritual and material upheaval. Past-life karmas collide with future-life desires, producing confusion, sudden reversals, and existential questioning. This is one of the most transformative sub-periods, often triggering major life direction changes.",
        keyThemes: [
          "Full karmic axis activation",
          "Existential crisis and spiritual upheaval",
          "Sudden reversals forcing re-evaluation",
          "Deep past-life karmic clearing",
        ],
      },
      {
        planet: "Venus",
        slug: "venus",
        duration: "3 years",
        overview:
          "Rahu-Venus is a materially abundant sub-period combining desire amplification with Venusian luxury and romance. Foreign romantic connections, luxury acquisitions, and creative success in entertainment or media are common. The native must guard against excessive indulgence and deceptive romantic situations.",
        keyThemes: [
          "Luxury, romance, and material abundance",
          "Foreign romantic connections",
          "Creative success in entertainment and media",
          "Risk of overindulgence and romantic deception",
        ],
      },
      {
        planet: "Sun",
        slug: "sun",
        duration: "10 months 24 days",
        overview:
          "Rahu-Sun creates tension between authentic self-expression and the desire to project a powerful image. Government dealings, authority conflicts, and ego-driven power plays characterize this period. Success is possible through political savvy, but the native must avoid compromising integrity for status.",
        keyThemes: [
          "Power projection and authority seeking",
          "Government dealings and political maneuvering",
          "Ego-driven conflicts and image management",
          "Tension between authenticity and ambition",
        ],
      },
      {
        planet: "Moon",
        slug: "moon",
        duration: "1 year 6 months",
        overview:
          "Rahu-Moon amplifies emotional turbulence, anxiety, and mental restlessness. The mind becomes consumed with desires and fears, often losing clarity. Foreign travel, public popularity, and connections with women may increase, but emotional stability requires conscious maintenance through meditation and grounding practices.",
        keyThemes: [
          "Emotional turbulence and mental anxiety",
          "Public popularity and foreign travel",
          "Need for emotional grounding practices",
          "Amplified fears and desire-driven thinking",
        ],
      },
      {
        planet: "Mars",
        slug: "mars",
        duration: "1 year 18 days",
        overview:
          "Rahu-Mars closes the Mahadasha with aggressive, boundary-pushing energy. Conflicts, legal battles, and competitive challenges intensify. The combination can bring success in technology and engineering but also risk of accidents, violence, and explosive confrontations. Channel this energy into disciplined competitive achievement.",
        keyThemes: [
          "Aggressive ambition and competitive intensity",
          "Risk of accidents and explosive conflicts",
          "Technology and engineering achievements",
          "Need for disciplined energy management",
        ],
      },
    ],
  },

  // ─── 7. JUPITER MAHADASHA (16 years) ─────────────────────────────────
  {
    slug: "jupiter",
    planet: "Jupiter/Guru",
    planetSanskrit: "Guru/Brihaspati (गुरु/बृहस्पति)",
    duration: 16,
    order: 7,
    nature: "Benefic",
    signifies: [
      "Wisdom, knowledge, and higher learning",
      "Children, progeny, and fertility",
      "Dharma, ethics, and righteous conduct",
      "Wealth, prosperity, and expansion",
      "Teachers, gurus, and spiritual mentors",
      "Law, justice, and philosophical understanding",
    ],
    overview:
      "Jupiter Mahadasha is a 16-year period governed by Guru or Brihaspati, the greatest benefic planet in Vedic astrology and the teacher of the Devas. This period brings expansion, wisdom, prosperity, and spiritual growth to virtually every area of life. Jupiter represents Dharma, the cosmic law of righteousness, and its Mahadasha elevates the native through higher education, philosophical understanding, ethical conduct, and generous, expansive thinking. Children, wealth, and spiritual progress all flourish under Jupiter's benevolent gaze. Even when Jupiter is somewhat afflicted, its innate benefic nature ensures that challenges come with learning opportunities and eventual resolution through wisdom.",
    positiveEffects: [
      "Significant wealth accumulation and financial prosperity",
      "Success in higher education, law, teaching, and advisory roles",
      "Birth of children or joy through existing children",
      "Spiritual growth, guru connections, and philosophical depth",
      "Social expansion, respect, and honored reputation",
    ],
    negativeEffects: [
      "Over-optimism leading to poor financial judgments",
      "Weight gain, liver issues, and excess-related health problems",
      "Complacency and lack of discipline due to easy circumstances",
      "Over-promising and under-delivering in professional commitments",
      "Dogmatism or self-righteousness in beliefs and opinions",
    ],
    career:
      "Jupiter Mahadasha is highly favorable for careers in education, law, finance, consulting, spiritual leadership, and advisory roles. The native gains recognition as a wise, knowledgeable authority in their field. Academic achievements, professional certifications, and teaching opportunities abound. Business expansion through ethical practices yields sustainable, long-term success.",
    relationships:
      "Relationships during Jupiter Mahadasha are characterized by generosity, mutual respect, and shared growth. Marriage prospects are excellent, and existing partnerships deepen through philosophical and spiritual alignment. Children bring immense joy and become a source of pride. The native naturally attracts relationships with wise, supportive, and morally grounded individuals.",
    health:
      "Jupiter governs the liver, fat tissue, and overall body growth. Health concerns during this period often relate to excess: weight gain, fatty liver, high cholesterol, diabetes, and conditions caused by overindulgence. A balanced diet with moderation in rich foods and regular exercise prevent most Jupiter-related health issues.",
    spirituality:
      "Jupiter Mahadasha is arguably the most spiritually rewarding period for those inclined toward wisdom traditions. The native may find a genuine guru, deepen Vedantic study, or embark on pilgrimages that transform their worldview. Jnana Yoga (path of knowledge), mantra japa, and scriptural study yield profound results during this exceptionally auspicious period.",
    remedies: [
      "Worship Lord Vishnu or Dakshinamurthy and recite Vishnu Sahasranama on Thursdays",
      "Wear a Yellow Sapphire (Pukhraj) after proper astrological consultation",
      "Donate yellow items, turmeric, chickpeas, and books on Thursdays",
      "Serve and respect teachers, gurus, and elders in your life",
      "Engage in charitable activities, especially supporting education and spiritual institutions",
    ],
    antardasha: [
      {
        planet: "Jupiter",
        slug: "jupiter",
        duration: "2 years 1 month 18 days",
        overview:
          "Jupiter-Jupiter opens the Mahadasha with maximum Jupiterian blessings of wisdom, expansion, and prosperity. This is an extremely favorable period for education, spiritual growth, financial gains, and family happiness. Children-related positive events and guru connections are particularly highlighted.",
        keyThemes: [
          "Maximum wisdom and prosperity blessings",
          "Education and spiritual growth peak",
          "Children-related auspicious events",
          "Guru connections and philosophical depth",
        ],
      },
      {
        planet: "Saturn",
        slug: "saturn",
        duration: "2 years 6 months 12 days",
        overview:
          "Jupiter-Saturn combines expansion with discipline, creating a productive sub-period for building lasting structures and institutions. Career advancement through systematic, hard work is favored. The native may take on significant responsibilities that, while demanding, lead to enduring accomplishment and respected authority.",
        keyThemes: [
          "Building lasting structures and institutions",
          "Career advancement through disciplined effort",
          "Balancing expansion with practical limitations",
          "Long-term investments yielding results",
        ],
      },
      {
        planet: "Mercury",
        slug: "mercury",
        duration: "2 years 3 months 6 days",
        overview:
          "Jupiter-Mercury creates a brilliant combination of wisdom and intellect, favoring education, writing, teaching, and business strategy. Communication skills are elevated with depth and eloquence. Success in publishing, consulting, financial advisory, and intellectual commerce is likely.",
        keyThemes: [
          "Intellectual brilliance and eloquent communication",
          "Success in education, writing, and publishing",
          "Business strategy and financial advisory success",
          "Teaching and knowledge dissemination",
        ],
      },
      {
        planet: "Ketu",
        slug: "ketu",
        duration: "11 months 6 days",
        overview:
          "Jupiter-Ketu channels Jupiter's wisdom toward spiritual liberation and occult knowledge. Material expansion may slow as the native's focus shifts inward. This sub-period is excellent for deep meditation retreats, spiritual study, and developing intuitive wisdom that transcends intellectual understanding.",
        keyThemes: [
          "Spiritual liberation and occult wisdom",
          "Meditation retreats and inner growth",
          "Possible slowdown in material expansion",
          "Intuitive wisdom transcending intellect",
        ],
      },
      {
        planet: "Venus",
        slug: "venus",
        duration: "2 years 8 months",
        overview:
          "Jupiter-Venus is one of the most auspicious planetary combinations, bringing wealth, happiness, romantic fulfillment, and artistic success. Marriage, luxury acquisitions, and social celebrations are common. The native experiences a harmonious blend of material comfort and ethical prosperity.",
        keyThemes: [
          "Peak wealth and romantic happiness",
          "Marriage and social celebrations",
          "Artistic success and aesthetic refinement",
          "Harmonious blend of ethics and prosperity",
        ],
      },
      {
        planet: "Sun",
        slug: "sun",
        duration: "9 months 18 days",
        overview:
          "Jupiter-Sun combines wisdom with authority, creating excellent conditions for leadership, government recognition, and career advancement. The native's moral authority and ethical leadership earn respect and promotion. Father-guru relationships strengthen and provide support.",
        keyThemes: [
          "Moral authority and ethical leadership",
          "Government recognition and career advancement",
          "Father-guru relationship strengthening",
          "Wisdom applied to positions of power",
        ],
      },
      {
        planet: "Moon",
        slug: "moon",
        duration: "1 year 4 months",
        overview:
          "Jupiter-Moon is Gaja Kesari Yoga in action, bringing public popularity, emotional wisdom, and material prosperity. The mother-guru axis is activated, and the native's generous, nurturing qualities earn widespread admiration. Real estate, emotional well-being, and family harmony flourish.",
        keyThemes: [
          "Public popularity and emotional wisdom",
          "Gaja Kesari Yoga blessings manifesting",
          "Family harmony and maternal happiness",
          "Real estate and domestic prosperity",
        ],
      },
      {
        planet: "Mars",
        slug: "mars",
        duration: "11 months 6 days",
        overview:
          "Jupiter-Mars activates Guru-Mangal Yoga energy, combining wisdom with courage for righteous action. Property acquisition, competitive success, and bold ethical initiatives are favored. The native acts as a moral warrior, fighting for justice and protecting the weak with both strength and wisdom.",
        keyThemes: [
          "Righteous action and moral courage",
          "Property acquisition and investment success",
          "Competitive victories through ethical means",
          "Protective, warrior-sage energy",
        ],
      },
      {
        planet: "Rahu",
        slug: "rahu",
        duration: "2 years 4 months 24 days",
        overview:
          "Jupiter-Rahu closes the Mahadasha by introducing expansive, unconventional opportunities that test the native's ethical framework. Foreign connections, innovative ventures, and ambitious projects may tempt the native to compromise principles for growth. Wisdom lies in pursuing expansion while maintaining Jupiter's moral compass.",
        keyThemes: [
          "Unconventional expansion and foreign opportunities",
          "Ethical tests in pursuit of growth",
          "Innovation meets wisdom",
          "Maintaining moral compass amid temptation",
        ],
      },
    ],
  },

  // ─── 8. SATURN MAHADASHA (19 years) ──────────────────────────────────
  {
    slug: "saturn",
    planet: "Saturn/Shani",
    planetSanskrit: "Shani (शनि)",
    duration: 19,
    order: 8,
    nature: "Malefic",
    signifies: [
      "Discipline, hard work, and perseverance",
      "Karma, justice, and life lessons",
      "Delays, restrictions, and obstacles",
      "Longevity, chronic conditions, and aging",
      "Service, humility, and duty",
      "Structure, organization, and long-term achievement",
    ],
    overview:
      "Saturn Mahadasha spans 19 years and is often regarded as the most consequential period in the Vimshottari Dasha system. Shani Dev, the great taskmaster and lord of karma, demands discipline, patience, and honest effort throughout this extended period. Saturn does not punish — it teaches through the natural consequences of one's past actions, stripping away what is unearned and reinforcing what is genuinely deserved. For those who have lived with integrity and built solid foundations, Saturn Mahadasha can bring remarkable, lasting achievements, respected authority, and deep wisdom born of experience. For those who have cut corners or avoided their responsibilities, this period enforces correction through delays, losses, and hard lessons.",
    positiveEffects: [
      "Lasting career achievements and institutional authority",
      "Deep wisdom and maturity gained through experience",
      "Mastery of discipline, organization, and systematic thinking",
      "Respect and recognition for sustained, honest effort",
      "Long-term wealth building through conservative, patient strategies",
    ],
    negativeEffects: [
      "Chronic health issues, especially joints, bones, and nervous system",
      "Career delays, demotions, and professional setbacks",
      "Depression, loneliness, and feelings of being burdened by responsibilities",
      "Strained relationships due to emotional distance and heavy duty focus",
      "Financial losses through slow economic conditions or bad timing",
    ],
    career:
      "Saturn Mahadasha rewards sustained, disciplined effort in structured fields like engineering, law, civil service, mining, agriculture, and manufacturing. Career progress may be slow but tends to be permanent and respected. The native may take on heavy responsibilities or manage large organizations. Success comes through expertise, reliability, and systematic approach rather than charm or innovation.",
    relationships:
      "Relationships during Saturn Mahadasha tend to be serious, duty-bound, and tested by external pressures. The native may feel emotionally distant or overwhelmed by responsibilities, straining personal bonds. However, partnerships that survive Saturn's tests become unshakeable foundations. Age-gap relationships and connections with mature, practical individuals are common.",
    health:
      "Saturn governs bones, joints, teeth, skin, and the overall aging process. Chronic conditions including arthritis, knee problems, dental issues, skin disorders, and depression are common during this period. Preventive healthcare, regular exercise, calcium supplementation, and attention to mental health are essential throughout these 19 years.",
    spirituality:
      "Saturn's spiritual lesson is the development of genuine humility, surrender to divine will, and acceptance of karma. The native learns that suffering is not punishment but purification. Selfless service (seva), disciplined meditation, and worship of Lord Shiva or Hanuman help transmute Saturn's heavy energy into spiritual liberation through detachment from ego.",
    remedies: [
      "Worship Lord Shani Dev and recite Shani Stotra or Shani Chalisa on Saturdays",
      "Wear a Blue Sapphire (Neelam) only after thorough astrological analysis",
      "Donate black sesame seeds, mustard oil, iron items, and dark blue cloth on Saturdays",
      "Serve the elderly, disabled, and underprivileged as acts of karmic service",
      "Practice patience, discipline, and accept life's lessons with grace and humility",
    ],
    antardasha: [
      {
        planet: "Saturn",
        slug: "saturn",
        duration: "3 years 3 days",
        overview:
          "Saturn-Saturn opens the Mahadasha with triple Saturnine intensity, bringing maximum karmic reckoning and the heaviest tests of discipline. This can be an extremely challenging period with career obstacles, health issues, and emotional heaviness. However, it also builds the deepest resilience and lays foundations for the 19-year journey ahead.",
        keyThemes: [
          "Maximum karmic reckoning and discipline tests",
          "Career obstacles requiring patience",
          "Health vigilance especially joints and bones",
          "Building deep resilience and character",
        ],
      },
      {
        planet: "Mercury",
        slug: "mercury",
        duration: "2 years 8 months 9 days",
        overview:
          "Saturn-Mercury combines systematic thinking with intellectual precision. Success comes through detailed analysis, careful planning, and methodical communication. Careers in accounting, law, research, and technical writing are favored. The native's ability to organize complex information into structured systems earns professional respect.",
        keyThemes: [
          "Systematic thinking and meticulous planning",
          "Success in analytical and technical fields",
          "Structured communication and documentation",
          "Professional respect through intellectual rigor",
        ],
      },
      {
        planet: "Ketu",
        slug: "ketu",
        duration: "1 year 1 month 9 days",
        overview:
          "Saturn-Ketu brings detachment from material structures that Saturn has been building. Spiritual questioning of worldly achievements, sudden losses, or unexpected endings of long-standing commitments may occur. This sub-period can trigger deep spiritual transformation through forced surrender of control.",
        keyThemes: [
          "Detachment from material structures",
          "Sudden endings of long-standing commitments",
          "Spiritual transformation through surrender",
          "Questioning the value of worldly achievement",
        ],
      },
      {
        planet: "Venus",
        slug: "venus",
        duration: "3 years 2 months",
        overview:
          "Saturn-Venus brings welcome material comforts and relationship warmth into Saturn's austere landscape. Property acquisitions, luxury items earned through hard work, and stable romantic partnerships develop. The native learns to appreciate beauty and comfort as legitimate rewards for disciplined effort.",
        keyThemes: [
          "Material comforts earned through hard work",
          "Stable romantic partnerships and marriage",
          "Property and luxury acquisitions",
          "Appreciating beauty as reward for discipline",
        ],
      },
      {
        planet: "Sun",
        slug: "sun",
        duration: "11 months 12 days",
        overview:
          "Saturn-Sun creates tension between established authority and bureaucratic restriction. Conflicts with government, authority figures, and institutional power structures may arise. The native's ego is tested by delays and lack of recognition. Father-related health concerns or responsibilities may demand attention.",
        keyThemes: [
          "Authority conflicts and ego challenges",
          "Government and bureaucratic friction",
          "Father-related responsibilities",
          "Learning humility in positions of power",
        ],
      },
      {
        planet: "Moon",
        slug: "moon",
        duration: "1 year 7 months",
        overview:
          "Saturn-Moon is emotionally demanding, as Saturn's heaviness weighs on the sensitive Moon. Depression, loneliness, and emotional exhaustion are common. The native must actively maintain mental health through social connection, counseling, and creative expression. Mother-related health concerns may arise.",
        keyThemes: [
          "Emotional heaviness and possible depression",
          "Need for active mental health maintenance",
          "Mother-related health or relationship concerns",
          "Finding emotional strength through adversity",
        ],
      },
      {
        planet: "Mars",
        slug: "mars",
        duration: "1 year 1 month 9 days",
        overview:
          "Saturn-Mars is one of the most challenging combinations, as the natural enmity between these planets creates friction between disciplined restraint and impulsive action. Accidents, legal battles, property disputes, and health crises related to bones and blood are possible. Extreme patience and caution are essential.",
        keyThemes: [
          "Intense friction between restraint and impulsiveness",
          "Risk of accidents, injuries, and legal battles",
          "Property disputes and financial stress",
          "Extreme patience required for survival",
        ],
      },
      {
        planet: "Rahu",
        slug: "rahu",
        duration: "2 years 10 months 6 days",
        overview:
          "Saturn-Rahu combines structural authority with unconventional ambition, creating opportunities in foreign lands, technology, and large-scale organizational work. This sub-period can bring significant career advancement through persistent effort in innovative or international settings. Guard against chronic stress and ethical shortcuts.",
        keyThemes: [
          "Foreign and technological career opportunities",
          "Large-scale organizational achievement",
          "Chronic stress requiring management",
          "Balancing ambition with ethical integrity",
        ],
      },
      {
        planet: "Jupiter",
        slug: "jupiter",
        duration: "2 years 6 months 12 days",
        overview:
          "Saturn-Jupiter closes the Mahadasha with a powerful combination of discipline and wisdom. This sub-period often brings the most meaningful achievements of the entire Saturn period, as patient effort is finally blessed with Jupiterian expansion and recognition. Spiritual maturity, institutional leadership, and lasting legacy building define this transitional phase.",
        keyThemes: [
          "Meaningful achievements after patient effort",
          "Spiritual maturity and institutional leadership",
          "Legacy building and lasting recognition",
          "Wisdom earned through sustained discipline",
        ],
      },
    ],
  },

  // ─── 9. MERCURY MAHADASHA (17 years) ─────────────────────────────────
  {
    slug: "mercury",
    planet: "Mercury/Budha",
    planetSanskrit: "Budha (बुध)",
    duration: 17,
    order: 9,
    nature: "Neutral",
    signifies: [
      "Intelligence, communication, and analytical thinking",
      "Business, trade, and commercial success",
      "Education, writing, and media",
      "Adaptability, versatility, and quick learning",
      "Nervous system, skin, and speech",
      "Mathematics, astrology, and technical sciences",
    ],
    overview:
      "Mercury Mahadasha spans 17 years and activates the intellect, communication abilities, and commercial instincts in Vedic astrology. Budha, the prince among planets, governs all forms of exchange — information, commerce, and ideas. This period brings sharp analytical thinking, business acumen, literary talent, and exceptional communication skills to the forefront. Mercury is uniquely adaptive, taking on the qualities of planets it associates with, making the sub-period lords particularly influential during this Mahadasha. A well-placed Mercury brings academic success, profitable business ventures, eloquent speech, and mastery of multiple skills. An afflicted Mercury can create nervous disorders, communication breakdowns, financial miscalculations, and scattered, unfocused mental energy.",
    positiveEffects: [
      "Academic excellence, certifications, and intellectual achievements",
      "Business prosperity through trade, technology, and commerce",
      "Exceptional communication, writing, and public speaking skills",
      "Success in media, journalism, publishing, and digital platforms",
      "Versatility and ability to master multiple skills and domains",
    ],
    negativeEffects: [
      "Nervous anxiety, overthinking, and mental restlessness",
      "Communication misunderstandings and verbal conflicts",
      "Scattered focus and inability to complete projects",
      "Financial losses through bad calculations or fraudulent deals",
      "Skin disorders, allergies, and nervous system imbalances",
    ],
    career:
      "Mercury Mahadasha is outstanding for careers in technology, finance, accounting, writing, journalism, teaching, astrology, and all forms of commerce and trade. The native's communication skills and analytical abilities open doors to consulting, advisory, and knowledge-based professions. Digital businesses, e-commerce, and technology startups particularly thrive during this intellectually vibrant period.",
    relationships:
      "Communication becomes the cornerstone of relationships during Mercury Mahadasha. The native values intellectual compatibility, witty conversation, and mental stimulation in partnerships. Friendships based on shared interests and learning flourish. Romantic relationships may prioritize mental connection over emotional depth, which can create issues with more emotionally oriented partners.",
    health:
      "Mercury governs the nervous system, skin, lungs, and intestines. Health concerns during this period include anxiety disorders, skin conditions like eczema and allergies, respiratory issues, and digestive problems related to stress. Maintaining nervous system health through adequate sleep, stress management, and regular breaks from intellectual work is essential.",
    spirituality:
      "Mercury's spiritual expression is through Jnana Yoga — the path of knowledge and discriminative wisdom. Study of sacred texts, mantra repetition, and development of buddhi (higher intellect that discriminates between real and unreal) are the spiritual practices most aligned with this period. The native may develop interest in astrology, Vedic mathematics, and the sacred sciences.",
    remedies: [
      "Worship Lord Vishnu and recite Vishnu Sahasranama or Budha Stotra on Wednesdays",
      "Wear an Emerald (Panna) gemstone after proper astrological consultation",
      "Donate green items, moong dal, and green vegetables on Wednesdays",
      "Practice calming pranayama like Nadi Shodhana to balance the nervous system",
      "Engage in lifelong learning and share knowledge generously with others",
    ],
    antardasha: [
      {
        planet: "Mercury",
        slug: "mercury",
        duration: "2 years 4 months 27 days",
        overview:
          "Mercury-Mercury opens the Mahadasha with pure Mercurial energy, activating peak intellectual abilities, business instincts, and communication prowess. New educational pursuits, business ventures, and writing projects launch with exceptional mental clarity. Networking and social connections expand rapidly.",
        keyThemes: [
          "Peak intellectual and analytical abilities",
          "New business and educational ventures",
          "Exceptional communication and networking",
          "Writing, publishing, and media opportunities",
        ],
      },
      {
        planet: "Ketu",
        slug: "ketu",
        duration: "11 months 27 days",
        overview:
          "Mercury-Ketu creates tension between analytical intellect and intuitive knowing. The native may question purely logical approaches and develop interest in metaphysical or occult studies. Research into hidden knowledge, astrology, and alternative sciences is favored, though practical business decisions may suffer from confusion.",
        keyThemes: [
          "Tension between logic and intuition",
          "Interest in occult and metaphysical research",
          "Practical decision-making challenges",
          "Esoteric studies and hidden knowledge",
        ],
      },
      {
        planet: "Venus",
        slug: "venus",
        duration: "2 years 10 months",
        overview:
          "Mercury-Venus is a highly favorable combination for creative communication, artistic writing, and commercial success in beauty, fashion, and entertainment. Business partnerships thrive through charming negotiation, and the native produces work that combines intellectual depth with aesthetic appeal.",
        keyThemes: [
          "Creative communication and artistic writing",
          "Commercial success in beauty and entertainment",
          "Charming business negotiations",
          "Intellectual depth meets aesthetic beauty",
        ],
      },
      {
        planet: "Sun",
        slug: "sun",
        duration: "10 months 6 days",
        overview:
          "Mercury-Sun combines intellectual ability with authoritative communication. Government and administrative roles benefit from the native's analytical leadership. Success in competitive examinations, official communications, and advisory roles to authority figures is likely. The native gains recognition for intellectual contributions to leadership.",
        keyThemes: [
          "Intellectual leadership and authority",
          "Government examination and administrative success",
          "Advisory roles to power figures",
          "Recognition for analytical contributions",
        ],
      },
      {
        planet: "Moon",
        slug: "moon",
        duration: "1 year 5 months",
        overview:
          "Mercury-Moon enhances emotional intelligence and intuitive communication. The native can articulate feelings with precision and connect with audiences through emotionally resonant messaging. Success in counseling, public relations, creative writing, and customer-facing businesses is favored.",
        keyThemes: [
          "Emotional intelligence in communication",
          "Success in counseling and public relations",
          "Creative and emotionally resonant writing",
          "Public popularity through articulate expression",
        ],
      },
      {
        planet: "Mars",
        slug: "mars",
        duration: "11 months 27 days",
        overview:
          "Mercury-Mars sharpens the intellect with assertive, competitive energy. Technical skills, engineering problem-solving, and strategic debate are enhanced. The native communicates with directness and force, which aids in negotiations and competitive situations but may create verbal conflicts and arguments.",
        keyThemes: [
          "Sharp technical and analytical skills",
          "Assertive, competitive communication",
          "Engineering and strategic problem-solving",
          "Risk of verbal conflicts and arguments",
        ],
      },
      {
        planet: "Rahu",
        slug: "rahu",
        duration: "2 years 6 months 18 days",
        overview:
          "Mercury-Rahu amplifies intellectual ambition and technological innovation. Success in digital technology, foreign commerce, and unconventional business models is likely. The native's communication skills are enhanced by Rahu's ability to influence masses, favoring careers in media, technology, and international trade.",
        keyThemes: [
          "Technological innovation and digital success",
          "Foreign commerce and international trade",
          "Mass communication and media influence",
          "Unconventional business model breakthroughs",
        ],
      },
      {
        planet: "Jupiter",
        slug: "jupiter",
        duration: "2 years 3 months 6 days",
        overview:
          "Mercury-Jupiter is an auspicious combination known as a powerful Saraswati Yoga influence, blending intellect with wisdom. Higher education, teaching, publishing, and advisory roles flourish. The native's knowledge deepens from information-level to wisdom-level understanding. Academic honors and professional certifications are common.",
        keyThemes: [
          "Higher education and academic honors",
          "Teaching, publishing, and advisory success",
          "Wisdom deepening intellectual knowledge",
          "Professional certifications and recognition",
        ],
      },
      {
        planet: "Saturn",
        slug: "saturn",
        duration: "2 years 8 months 9 days",
        overview:
          "Mercury-Saturn closes the Mahadasha by grounding intellectual abilities in practical, systematic application. Success comes through detailed, long-term analytical work rather than quick, clever solutions. Careers in law, accounting, research, and technical documentation are favored. The native must manage nervous tension and avoid mental exhaustion from sustained analytical demands.",
        keyThemes: [
          "Practical, systematic intellectual application",
          "Success in law, accounting, and research",
          "Long-term analytical projects and documentation",
          "Managing nervous tension and mental fatigue",
        ],
      },
    ],
  },
];

export function getDashaBySlug(slug: string): Dasha | undefined {
  return dashas.find((d) => d.slug === slug);
}
