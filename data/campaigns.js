/**
 * CAMPAIGN DATA
 * ─────────────────────────────────────────────────────────────────
 * Campaigns = specific marketing events, cultural phenomena,
 * viral moments. Distinct from brand strategy (see brands.js).
 * Focus: what happened, why it worked, what psychology it triggered.
 * ─────────────────────────────────────────────────────────────────
 */

export const campaigns = [
  {
    id: "labubu-phenomenon",
    title: { zh: "Labubu现象", en: "The Labubu Phenomenon" },
    brandIds: ["pop-mart"],
    market: ["china", "global"],
    date: "2023–2025",
    description: {
      zh: "Labubu从小众潮玩成长为全球文化现象，核心驱动力是稀缺机制、名人背书和社交媒体传播的完美结合。Lisa（BLACKPINK）的公开展示将其从中国圈层文化推向全球视野。",
      en: "Labubu's growth from niche collectible to global cultural phenomenon was driven by the perfect combination of scarcity mechanics, celebrity endorsement, and social media virality. Lisa (BLACKPINK)'s public display pushed it from Chinese niche culture to global awareness.",
    },
    whatHappened: {
      zh: "2023年Labubu开始在中国潮玩社区引发关注，2024年Lisa在社交媒体展示其Labubu收藏后，全球曝光量暴增。二级市场溢价迅速飙升，某些限定款达到原价的十倍以上。Pop Mart股价随之创历史新高。",
      en: "Labubu began attracting attention in China's collectible community in 2023. After Lisa shared her Labubu collection on social media in 2024, global exposure exploded. Secondary market premiums quickly surged, with some limited editions exceeding ten times their retail price. Pop Mart's stock price reached all-time highs.",
    },
    whyItMattered: {
      zh: "Labubu证明了\"情绪价值商品化\"的可行性：一个没有实际功能的产品，可以通过心理机制驱动达到奢侈品级别的消费热情。它也是中国IP第一次真正意义上以消费品形式征服全球市场。",
      en: "Labubu proved the viability of 'commercializing emotional value': a product with no functional utility can achieve luxury-level consumer enthusiasm through psychological mechanics. It was also the first time Chinese IP genuinely conquered global markets in consumer goods form.",
    },
    psychologyTriggered: {
      zh: "变比率强化（盲盒开盒）、错失恐惧（限量款秒空）、社会认同（Lisa同款）、稀缺感（二级市场溢价）、情绪价值（开盒仪式感）",
      en: "Variable ratio reinforcement (blind box opening), FOMO (limited editions selling out instantly), social proof (same as Lisa), scarcity (secondary market premiums), emotional value (unboxing ritual)",
    },
    strategicImplications: {
      zh: "品牌不必追求功能差异化，情绪差异化同样可以建立强大护城河。但依赖名人效应的品牌需要警惕：当名人热度消退，品牌内生动力必须足够强。",
      en: "Brands don't need functional differentiation — emotional differentiation can equally build a strong moat. But brands dependent on celebrity effect must be cautious: when celebrity heat fades, the brand's internal momentum must be strong enough.",
    },
    relatedPsychologyIds: ["scarcity", "fomo", "curiosity", "emotion", "social-proof", "belonging", "identity"],
    relatedFrameworkIds: ["retention-loop", "purchase-funnel", "aarrr"],
    relatedArticleIds: ["art-003", "art-005"],
    tags: ["viral", "blind-box", "celebrity", "IP", "collectible", "Gen-Z"],
    featured: true,
  },
  {
    id: "mixue-ipo",
    title: { zh: "蜜雪冰城IPO与品牌现象", en: "Mixue Ice Cream & Tea IPO Phenomenon" },
    brandIds: [],
    market: ["china"],
    date: "2024–2025",
    description: {
      zh: "蜜雪冰城上市引发全民围观，其品牌形象的高辨识度（雪王IP、洗脑神曲）和极致性价比战略使其成为中国消费降级时代的最大赢家，也是品牌大众情感联结的教科书案例。",
      en: "Mixue's IPO generated nationwide attention. Its highly recognizable brand image (Snow King IP, earworm jingle) and extreme value strategy made it the biggest winner of China's consumption downgrade era — and a textbook case of mass emotional brand connection.",
    },
    whatHappened: {
      zh: "蜜雪冰城以2元柠檬水、4元冰淇淋打穿下沉市场，Snow King IP和病毒式主题曲在全平台刷屏。2024年港股上市引发全民关注，门口排队、社交媒体打卡将消费行为变为参与感事件。",
      en: "Mixue penetrated lower-tier markets with 2 RMB lemonade and 4 RMB ice cream. The Snow King IP and viral theme song spread across all platforms. The 2024 Hong Kong IPO generated nationwide attention — queues at stores and social media check-ins turned consumption into participatory events.",
    },
    whyItMattered: {
      zh: "蜜雪证明了：在消费降级环境下，极致性价比不是退而求其次，而可以成为独立的品牌资产。雪王IP的亲和力将\"便宜\"去污名化，使消费者以选择蜜雪为荣。",
      en: "Mixue proved that in a consumption downgrade environment, extreme value is not a compromise — it can become an independent brand asset. Snow King IP's approachability de-stigmatized 'cheap,' making consumers proud to choose Mixue.",
    },
    psychologyTriggered: {
      zh: "性价比心理（理性消费的骄傲）、社会认同（大规模同行效应）、怀旧情感（国民品牌亲切感）、归属感（\"我们都爱蜜雪\"）",
      en: "Value psychology (pride in rational consumption), social proof (mass bandwagon effect), nostalgia (national brand familiarity), belonging ('we all love Mixue')",
    },
    strategicImplications: {
      zh: "消费品牌不必追求高端溢价才能建立强大品牌认知。大众情感联结+极致运营效率+IP可爱化，可以在低价格带建立高情感壁垒。",
      en: "Consumer brands don't need premium positioning to build strong brand recognition. Mass emotional connection + operational efficiency excellence + cute IP can build high emotional barriers in the low-price segment.",
    },
    relatedPsychologyIds: ["value", "social-proof", "belonging", "nostalgia", "fomo"],
    relatedFrameworkIds: ["brand-equity", "mental-availability", "aarrr"],
    relatedArticleIds: ["art-004"],
    tags: ["IPO", "value-brand", "viral", "IP", "China", "mass-market"],
    featured: true,
  },
  {
    id: "apple-wwdc-2025",
    title: { zh: "Apple WWDC 2025", en: "Apple WWDC 2025" },
    brandIds: ["apple"],
    market: ["global", "northAmerica", "china"],
    date: "2025-06",
    description: {
      zh: "Apple年度开发者大会已演变为全球消费者的\"信仰仪式\"。每次发布不只是产品更新，而是Apple重申其技术叙事和品牌价值观的时刻。",
      en: "Apple's annual developer conference has evolved into a 'faith ritual' for global consumers. Each keynote is not just a product update — it's Apple reaffirming its technological narrative and brand values.",
    },
    whatHappened: {
      zh: "Apple Intelligence功能的推进、visionOS更新和新硬件发布引发全球媒体报道。发布会前后，Apple股价波动和消费者讨论热度均达到年度峰值。",
      en: "Apple Intelligence feature rollouts, visionOS updates, and new hardware announcements generated global media coverage. Before and after the keynote, Apple's stock movement and consumer discussion intensity both reached annual peaks.",
    },
    whyItMattered: {
      zh: "WWDC的真正价值不是发布产品，而是发布\"期待\"。它将消费者的注意力锁定在Apple的时间轴上，使竞争对手的发布相形见绌。这是品牌将发布会变为文化事件的最成功案例。",
      en: "WWDC's real value isn't releasing products — it's releasing expectations. It locks consumer attention onto Apple's timeline, making competitors' announcements seem diminished. This is the most successful case of a brand turning a product launch into a cultural event.",
    },
    psychologyTriggered: {
      zh: "创新期待（\"Apple又做了什么\"）、信任强化（熟悉的发布节奏）、身份认同（Apple用户的自我归属强化）、习惯固化（每年一度的关注仪式）",
      en: "Innovation anticipation ('what has Apple done now'), trust reinforcement (familiar release rhythm), identity confirmation (Apple users' self-belonging reinforced), habit solidification (the annual attention ritual)",
    },
    strategicImplications: {
      zh: "品牌可以将定期活动转化为受众期待的文化时刻。关键是保持节奏感和仪式感，而不只是产品性能的进步。",
      en: "Brands can transform periodic events into cultural moments that audiences anticipate. The key is maintaining rhythm and ritual, not just product performance improvements.",
    },
    relatedPsychologyIds: ["innovation", "trust", "identity", "habit", "security"],
    relatedFrameworkIds: ["brand-equity", "mental-availability", "retention-loop"],
    relatedArticleIds: ["art-001", "art-004"],
    tags: ["product-launch", "tech-event", "Apple", "AI", "ritual"],
    featured: true,
  },
  {
    id: "luckin-moutai",
    title: { zh: "瑞幸×茅台：酱香拿铁", en: "Luckin × Moutai: Sauce-Flavor Latte" },
    brandIds: [],
    market: ["china"],
    date: "2023-09",
    description: {
      zh: "瑞幸与茅台的联名将两个看似完全对立的品牌——平价咖啡与高端白酒——合并成一个文化事件，单日销售额超亿元，成为中国最成功的品牌联名案例之一。",
      en: "Luckin's collaboration with Moutai merged two seemingly opposite brands — affordable coffee and premium baijiu — into a cultural event with single-day sales exceeding 100 million RMB, becoming one of China's most successful brand collaboration cases.",
    },
    whatHappened: {
      zh: "2023年9月，瑞幸推出含茅台成分的\"酱香拿铁\"，定价19元。消费者蜂拥排队，首日售出542万杯，话题在微博和微信刷屏。购买行为本身成为社交货币。",
      en: "In September 2023, Luckin launched the 'Sauce-Flavor Latte' containing Moutai, priced at 19 RMB. Consumers flocked to buy it, selling 5.42 million cups on day one, with the topic flooding Weibo and WeChat. The purchase behavior itself became social currency.",
    },
    whyItMattered: {
      zh: "这次联名的妙处在于\"身份错位\"——茅台的高端气质附着在瑞幸的平价场景中，让消费者用19元购买了一种\"喝着茅台\"的身份体验。品牌张力制造了稀缺感和话题性。",
      en: "The genius of this collaboration was 'identity displacement' — Moutai's premium aura attached to Luckin's affordable context, allowing consumers to purchase a 'drinking Moutai' identity experience for 19 RMB. Brand tension created scarcity and discussion.",
    },
    psychologyTriggered: {
      zh: "身份错位（高端体验的平价获取）、社会认同（全民话题参与感）、错失恐惧（限时联名）、好奇心（两种品类的化学反应）",
      en: "Identity displacement (affordable access to premium experience), social proof (nationwide topic participation), FOMO (limited-time collaboration), curiosity (the chemistry of two categories)",
    },
    strategicImplications: {
      zh: "最好的品牌联名不是1+1的品牌曝光叠加，而是制造一种单独品牌无法提供的\"第三种体验\"。张力与对比感是联名成功的核心变量。",
      en: "The best brand collaborations don't simply add up brand exposures — they create a 'third experience' that neither brand alone could offer. Tension and contrast are the core variables of successful collaborations.",
    },
    relatedPsychologyIds: ["identity", "social-proof", "fomo", "curiosity", "status"],
    relatedFrameworkIds: ["brand-equity", "mental-availability", "purchase-funnel"],
    relatedArticleIds: [],
    tags: ["brand-collab", "viral", "China", "coffee", "baijiu", "social-currency"],
    featured: false,
  },
  {
    id: "shot-on-iphone",
    title: { zh: "Shot on iPhone", en: "Shot on iPhone" },
    brandIds: ["apple"],
    market: ["global", "northAmerica", "china"],
    date: "2015–至今",
    description: {
      zh: "\"用iPhone拍摄\"是Apple历史上持续时间最长、ROI最高的营销活动之一。它将用户生成内容转化为品牌资产，同时将普通消费者变成品牌传播者。",
      en: "\"Shot on iPhone\" is one of Apple's longest-running and highest-ROI marketing campaigns. It converts user-generated content into brand assets while turning ordinary consumers into brand ambassadors.",
    },
    whatHappened: {
      zh: "Apple从全球iPhone用户中征集照片和视频，将优质作品展示在户外广告牌、官方社媒和营销材料上。这一机制持续运转十年，产出了无数强有力的视觉内容。",
      en: "Apple solicited photos and videos from iPhone users globally, displaying outstanding works on outdoor billboards, official social media, and marketing materials. This mechanism has run for a decade, producing countless powerful visual pieces.",
    },
    whyItMattered: {
      zh: "这个活动同时解决了三个问题：证明了iPhone相机能力（产品信任）、激励用户创作（社群参与）、将用户行为转化为品牌故事（UGC变品牌资产）。而且它让消费者相信\"我也可以拍出这样的照片\"。",
      en: "This campaign simultaneously solved three problems: proving iPhone camera capability (product trust), motivating user creation (community engagement), and converting user behavior into brand stories (UGC becomes brand asset). It also made consumers believe 'I can take photos like this too.'",
    },
    psychologyTriggered: {
      zh: "自我表达（我的照片被品牌认可）、身份认同（摄影师与iPhone用户身份叠合）、社会认同（他人拍摄的精彩照片证明产品价值）、成就感（用手机拍出专业级照片）",
      en: "Self-expression (my photo validated by the brand), identity (photographer and iPhone user identities merge), social proof (others' great photos prove product value), achievement (professional-quality photos from a phone)",
    },
    strategicImplications: {
      zh: "最好的营销活动将消费者变成共创者，而非被动受众。UGC策略的核心不是\"省钱\"，而是将用户行为本身转化为品牌证明。",
      en: "The best marketing campaigns turn consumers into co-creators, not passive audiences. The core of UGC strategy isn't 'saving money' — it's converting user behavior itself into brand proof.",
    },
    relatedPsychologyIds: ["self-expression", "identity", "achievement", "social-proof", "freedom"],
    relatedFrameworkIds: ["brand-equity", "aarrr", "retention-loop"],
    relatedArticleIds: ["art-001"],
    tags: ["UGC", "long-term-campaign", "photography", "community", "Apple"],
    featured: false,
  },
  {
    id: "city-walk",
    title: { zh: "City Walk现象", en: "City Walk Phenomenon" },
    brandIds: ["lululemon", "alo-yoga"],
    market: ["china"],
    date: "2023–2024",
    description: {
      zh: "City Walk不只是一种活动，而是中国年轻人在消费降级背景下创造的\"低成本高体验感\"生活方式。它成为运动品牌、咖啡品牌和城市旅游的意外营销契机。",
      en: "City Walk is not just an activity — it is a 'low-cost, high-experience' lifestyle created by young Chinese people against the backdrop of consumption downgrading. It became an unexpected marketing opportunity for sportswear, coffee brands, and urban tourism.",
    },
    whatHappened: {
      zh: "2023年，\"City Walk\"在小红书和微信迅速走红，年轻人将\"随机漫步城市\"从消遣变为具有仪式感的生活方式实践。Lululemon、Alo Yoga等品牌迅速占据这一生活场景，户外穿搭成为City Walk的标配内容。",
      en: "In 2023, 'City Walk' spread rapidly on Xiaohongshu and WeChat, with young people converting 'randomly wandering the city' from leisure to a ritualized lifestyle practice. Brands like Lululemon and Alo Yoga quickly occupied this lifestyle scenario, with outdoor outfit content becoming City Walk's standard content type.",
    },
    whyItMattered: {
      zh: "City Walk揭示了一个重要趋势：在\"消费主义疲惫\"背景下，年轻消费者不是放弃消费，而是寻找\"消费感较低\"的体验表达方式。品牌如何嵌入这些微生活方式，成为新的营销课题。",
      en: "City Walk revealed an important trend: against a backdrop of 'consumerism fatigue,' young consumers aren't abandoning consumption — they're seeking experiential expressions with a lower 'consumption feeling.' How brands embed themselves in these micro-lifestyles has become a new marketing challenge.",
    },
    psychologyTriggered: {
      zh: "归属感（与同类城市漫游者的连接）、自我表达（穿搭内容的创作展示）、成就感（探索城市的积极自我叙事）、情绪价值（\"慢\"的反效率价值）",
      en: "Belonging (connection with fellow urban wanderers), self-expression (outfit content creation and display), achievement (positive self-narrative of exploring the city), emotional value ('slowness' as counter-efficiency value)",
    },
    strategicImplications: {
      zh: "消费现象的兴起为品牌提供了新的接入点。品牌不必制造趋势，而要学会判断趋势并迅速占据趋势内的品牌位置——内容先行，产品跟进。",
      en: "The rise of consumption phenomena provides brands with new entry points. Brands don't need to create trends — they need to identify trends and quickly occupy brand positions within them: content first, product follows.",
    },
    relatedPsychologyIds: ["belonging", "self-expression", "emotion", "community", "achievement"],
    relatedFrameworkIds: ["customer-journey", "brand-equity", "aarrr"],
    relatedArticleIds: ["art-002", "art-006"],
    tags: ["lifestyle", "Gen-Z", "China", "consumption-downgrade", "outdoor", "social-media"],
    featured: true,
  },
];
