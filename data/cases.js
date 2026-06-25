/**
 * CASE STUDY DATA
 * ─────────────────────────────────────────────────────────────────
 * Each case study lives here. To add a new one, copy the shape of
 * any existing entry, give it a unique `slug`, and it will
 * automatically appear in the case library and navigation.
 * ─────────────────────────────────────────────────────────────────
 */

export const cases = [
  // ─────────────────────────────────────
  // APPLE
  // ─────────────────────────────────────
  {
    slug: "apple",
    brand: "Apple",
    category: "Consumer Electronics",
    thesis: "Apple does not sell phones. Apple sells identity.",
    tagline: "Identity as a product",
    insight: "Status signaling through minimalist hardware.",
    tags: ["Identity", "Ecosystem Lock-in", "Premium Pricing"],
    readingTime: "8 min read",
    featured: true,
    color: "#000000", // used for accent on the case page

    snapshot: {
      industry: "Consumer Electronics",
      targetAudience:
        "Aspirational consumers, creative professionals, status-conscious millennials and Gen Z",
      businessModel:
        "Hardware premium + services ecosystem (App Store, iCloud, Apple Music, Apple TV+)",
      positioning:
        "The luxury brand of technology — premium, closed, aspirational",
    },

    // Scores out of 100 — edit to adjust the radar chart shape
    dnaScores: [
      { dimension: "Identity", score: 98 },
      { dimension: "Community", score: 85 },
      { dimension: "Scarcity", score: 70 },
      { dimension: "Utility", score: 88 },
      { dimension: "Habit", score: 95 },
      { dimension: "Status", score: 97 },
      { dimension: "Emotion", score: 90 },
      { dimension: "Innovation", score: 80 },
    ],

    psychology: {
      whyBuy:
        "Apple buyers are not purchasing technology — they are purchasing membership to a tribe of taste, intelligence, and aspiration. The decision is rarely rational; it is an act of self-definition.",
      emotionalNeed:
        "The need to be seen as sophisticated, creative, and successful. Apple makes its users feel like they belong to an elite class of people who value design and depth over specs and price.",
      cognitiveBias:
        "Social proof, status signaling, loss aversion (once inside the ecosystem, leaving feels deeply painful), and the halo effect — Apple's beautiful hardware primes users to believe everything else they make is equally excellent.",
      socialIdentity:
        "The iPhone is a social passport. It signals aesthetic taste, purchasing power, and alignment with a certain cultural cool. 'Think Different' was never really about computers.",
    },

    strategy: {
      positioning:
        "Apple occupies the premium end of every category it enters. It never competes on price — it redefines what premium means. The white earbuds, the unboxing experience, the retail stores — every touchpoint reinforces the message: this is the best.",
      channels:
        "Product launches as media events, word-of-mouth among status-seeking consumers, owned retail as a brand experience, and an ecosystem that makes switching painful.",
      growthEngine:
        "The growth engine is ecosystem lock-in. Once a user has an iPhone, iCloud, AirPods, and a MacBook, the switching cost becomes enormous. Services revenue then compounds annually without requiring new hardware purchases.",
      retention:
        "Retention is engineered through product interdependence. Every Apple product works better with another Apple product. iMessage exclusivity alone retains millions of US users who fear the social stigma of the green bubble.",
    },

    cmo: {
      keep: [
        "The hardware-software-services integration that creates a competitive moat no rival has replicated",
        "The premium retail experience — Apple Stores remain among the highest-revenue-per-sqft retail operations globally",
        "The ecosystem flywheel — each new product category strengthens loyalty across all others",
      ],
      improve: [
        "AI integration feels reactive and behind — Siri has stagnated while competitors accelerate rapidly",
        "Services pricing is becoming aggressive in ways misaligned with the brand's value proposition",
        "'Courage' messaging around removed features has worn thin — users want visible progress, not calculated subtraction",
      ],
      opportunity:
        "Apple's next frontier is health. The Watch already captures biometric data at scale. A deeper push into preventive health, insurance integration, and medical-grade monitoring could redefine what a consumer electronics company even means.",
    },
  },

  // ─────────────────────────────────────
  // ALO YOGA
  // ─────────────────────────────────────
  {
    slug: "alo-yoga",
    brand: "Alo Yoga",
    category: "Lifestyle & Apparel",
    thesis: "Alo Yoga does not sell leggings. Alo Yoga sells the person you want to become.",
    tagline: "Selling lifestyle, not leggings",
    insight: "Aspirational identity compressed into activewear.",
    tags: ["Lifestyle Branding", "Influencer Marketing", "DTC"],
    readingTime: "7 min read",
    featured: true,
    color: "#1a1a1a",

    snapshot: {
      industry: "Activewear & Lifestyle Apparel",
      targetAudience:
        "Millennial and Gen Z women, health-conscious urban professionals, yoga practitioners and aspirants",
      businessModel:
        "DTC premium apparel + studio experiences + digital subscription (Alo Moves)",
      positioning:
        "The aspirational intersection of yoga, high fashion, and celebrity wellness culture",
    },

    dnaScores: [
      { dimension: "Identity", score: 92 },
      { dimension: "Community", score: 88 },
      { dimension: "Scarcity", score: 65 },
      { dimension: "Utility", score: 72 },
      { dimension: "Habit", score: 80 },
      { dimension: "Status", score: 90 },
      { dimension: "Emotion", score: 94 },
      { dimension: "Innovation", score: 68 },
    ],

    psychology: {
      whyBuy:
        "Alo buyers are purchasing a projected identity — the disciplined, healthy, beautiful version of themselves. The product is functional, but the decision is emotional. It is aspiration compressed into fabric.",
      emotionalNeed:
        "The desire to belong to a community of people who have 'figured it out' — the wellness-obsessed, the spiritually grounded, the aesthetically intentional. Wearing Alo signals you are that person, or actively on your way.",
      cognitiveBias:
        "Celebrity halo effect (Kendall Jenner, Bella Hadid spotted in Alo as everyday wear), aspirational consumption bias, and social proof through a dense network of micro-influencers who make Alo feel simultaneously elite and accessible.",
      socialIdentity:
        "The Alo customer is not buying sportswear. She is broadcasting a social signal: I practice yoga, I take care of my body, I have taste, and I can afford $130 leggings. This identity is reinforced every time she wears it outside the studio.",
    },

    strategy: {
      positioning:
        "Alo carved white space between performance activewear (Nike, Adidas) and luxury fashion. It is 'studio-to-street' — functional enough for yoga, beautiful enough for brunch. This dual utility creates a reason to wear the brand everywhere, all day.",
      channels:
        "Instagram and TikTok are core acquisition channels. Alo dominates through aspirational visual content, A-list to micro influencer partnerships, and studio presence in premium yoga spaces. Their flagship stores are Instagram moments, not just retail.",
      growthEngine:
        "Alo's growth engine is cultural. Every celebrity spotted in Alo is free marketing to millions. Every influencer post extends reach without proportional cost. The brand's content strategy positions it as the visual language of wellness culture.",
      retention:
        "Alo retains customers through genuine product quality, consistent aesthetic identity, and Alo Moves — a digital subscription platform that keeps users in the ecosystem between purchases.",
    },

    cmo: {
      keep: [
        "The celebrity and influencer strategy — aspirational pull that paid advertising simply cannot replicate",
        "Studio-to-street positioning — it maximizes occasions to wear (and be seen wearing) the product",
        "Alo Moves as a retention mechanism — digital content builds habit and loyalty beyond the purchase transaction",
      ],
      improve: [
        "Product line expansion (skincare, accessories, home) risks diluting the core brand identity significantly",
        "Sustainability narrative is underdeveloped — the target customer increasingly demands visible environmental accountability",
        "Men's line is underpenetrated — the men's wellness market is growing rapidly and Alo's aesthetic translates well",
      ],
      opportunity:
        "Alo has the ingredients to become the Nike of the wellness generation — but only if it builds a genuine community platform, not just a content channel. An Alo membership integrating studios, content, events, and products could create a moat that apparel alone never will.",
    },
  },

  // ─────────────────────────────────────
  // LABUBU
  // ─────────────────────────────────────
  {
    slug: "labubu",
    brand: "Labubu",
    category: "Collectibles & Pop Culture",
    thesis: "Labubu does not sell toys. Labubu sells the thrill of not knowing what you'll get.",
    tagline: "Scarcity, emotion, and collectible desire",
    insight: "Variable reward mechanics meet aesthetic identity.",
    tags: ["Scarcity", "Blind Box", "Gen Z", "FOMO"],
    readingTime: "6 min read",
    featured: true,
    color: "#2d2d2d",

    snapshot: {
      industry: "Designer Toys & Collectibles",
      targetAudience:
        "Gen Z and millennials, K-pop adjacent culture, streetwear enthusiasts, collectors, and impulse gift buyers",
      businessModel:
        "Blind box collectibles (Pop Mart) + limited edition drops + IP collaborations + secondary market speculation",
      positioning:
        "The intersection of art toy culture, emotional gifting, and gamified consumption",
    },

    dnaScores: [
      { dimension: "Identity", score: 78 },
      { dimension: "Community", score: 90 },
      { dimension: "Scarcity", score: 98 },
      { dimension: "Utility", score: 20 },
      { dimension: "Habit", score: 88 },
      { dimension: "Status", score: 82 },
      { dimension: "Emotion", score: 96 },
      { dimension: "Innovation", score: 85 },
    ],

    psychology: {
      whyBuy:
        "Labubu buyers are purchasing a feeling — the anticipatory excitement of a blind box, the joy of the reveal, the social moment of sharing what they got. The toy itself is almost secondary to the experience of acquiring it.",
      emotionalNeed:
        "The need for surprise, delight, and tribal belonging. In an era of algorithmic predictability, randomness feels genuinely exciting. Combined with the social sharing ritual, each purchase is also a content moment.",
      cognitiveBias:
        "Variable ratio reinforcement (the same mechanism as slot machines and loot boxes), loss aversion among collectors fearing incomplete sets, social proof through viral unboxing culture, and FOMO created by limited editions that sell out in minutes.",
      socialIdentity:
        "Owning Labubu — especially rare variants — is a cultural credential within Gen Z communities. Lisa from BLACKPINK posting her collection accelerated this from niche to mainstream. The core identity: I appreciate art, play, and intentional whimsy.",
    },

    strategy: {
      positioning:
        "Pop Mart positioned Labubu in the gap between children's toys and adult luxury goods. Too design-forward for children, too cute for purely adult art. This deliberate ambiguity expands the addressable market enormously.",
      channels:
        "Pop Mart's physical retail stores and vending machines drive impulse purchase. App-based limited drops generate queue culture and urgency. Celebrity co-signs (Lisa's posts generated hundreds of millions of impressions) act as cultural accelerators.",
      growthEngine:
        "The growth engine is the secondary market. When certain figures sell for 10–40x retail on StockX and Dewu, it creates speculative interest from non-collectors and cultural legitimacy among streetwear audiences. The secondary market makes Labubu feel like sneaker culture.",
      retention:
        "Series drops create a collect-them-all compulsion. Once a buyer has one Labubu, completing the series becomes a behavioral drive. New series with retired variants keep long-term collectors engaged without cannibalizing existing inventory value.",
    },

    cmo: {
      keep: [
        "The blind box mechanic — the core psychological engine and differentiator no competitor has replicated at scale",
        "The limited drop strategy — scarcity is not a bug, it is the product",
        "Celebrity and cultural seeding — organic posts remain the single most powerful acquisition channel",
      ],
      improve: [
        "Quality consistency has been flagged in reviews — at premium price points, production issues erode collector trust rapidly",
        "Over-expansion into non-collectible categories risks confusing Labubu's core identity as an art toy IP",
        "Western market localization needs work — character design and cultural references skew heavily Asian, creating a growth ceiling in Europe and North America",
      ],
      opportunity:
        "Labubu is positioned to become the Pokémon of Gen Z — a collectible universe with genuine cultural longevity. The path requires deepening IP lore, collaborating with Western artists and brands, and building digital ownership layers without overcorrecting into clumsy NFT territory.",
    },
  },
];

/**
 * Helper: get a single case by slug
 * Usage: getCaseBySlug("apple")
 */
export function getCaseBySlug(slug) {
  return cases.find((c) => c.slug === slug) || null;
}

/**
 * Helper: get related cases (excludes the current one)
 */
export function getRelatedCases(currentSlug, limit = 2) {
  return cases.filter((c) => c.slug !== currentSlug).slice(0, limit);
}
