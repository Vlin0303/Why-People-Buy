/**
 * BRAND DATA
 * ─────────────────────────────────────────────────────────────────
 * Each brand focuses on the brand and its core products.
 * Campaign-specific analysis lives in campaigns.js.
 * ─────────────────────────────────────────────────────────────────
 */

export const brands = [
  {
    id: "apple",
    name: "Apple",
    market: ["northAmerica", "china", "global"],
    industry: { zh: "消费电子", en: "Consumer Electronics" },
    coreProducts: { zh: "iPhone、Mac、AirPods、Apple Watch", en: "iPhone, Mac, AirPods, Apple Watch" },
    thesis: {
      zh: "Apple不卖手机，Apple卖身份。",
      en: "Apple doesn't sell phones. Apple sells identity.",
    },
    description: {
      zh: "Apple是历史上最成功的身份品牌之一。它的护城河不是技术领先，而是生态系统锁定加上强烈的文化归属感。购买Apple是一种宣言，不是一次采购决策。",
      en: "Apple is one of the most successful identity brands in history. Its moat is not technological leadership but ecosystem lock-in plus a powerful sense of cultural belonging. Buying Apple is a declaration, not a procurement decision.",
    },
    snapshot: {
      targetAudience: {
        zh: "追求品味的城市专业人士、创意工作者、渴望阶层跃升的年轻消费者",
        en: "Urban professionals seeking taste, creative workers, young consumers aspiring to class mobility",
      },
      businessModel: {
        zh: "硬件溢价 + 服务生态（App Store、iCloud、Apple Music、Apple TV+）",
        en: "Hardware premium + services ecosystem (App Store, iCloud, Apple Music, Apple TV+)",
      },
      positioning: {
        zh: "科技行业的奢侈品牌——封闭、精品、身份导向",
        en: "The luxury brand of the technology industry — closed, premium, identity-driven",
      },
    },
    whyPeopleBuy: {
      zh: "消费者购买Apple不是因为它的参数最好，而是因为拥有它意味着某种身份。iPhone是一张社交护照，AirPods是圈层入场券，Mac是创意人士的标配。生态系统的高切换成本将情感忠诚转化为行为锁定。",
      en: "Consumers buy Apple not because it has the best specs, but because owning it signals a certain identity. The iPhone is a social passport, AirPods are a tribe membership badge, the Mac is a creative professional's default. The high switching cost of the ecosystem converts emotional loyalty into behavioral lock-in.",
    },
    relatedPsychologyIds: ["identity", "status", "trust", "habit", "innovation", "security"],
    relatedCampaignIds: ["apple-wwdc-2025", "shot-on-iphone"],
    relatedFrameworkIds: ["brand-equity", "mental-availability", "retention-loop"],
    relatedArticleIds: ["art-001", "art-004"],
    tags: ["ecosystem", "premium", "identity-brand", "hardware", "services"],
    featured: true,
  },
  {
    id: "nike",
    name: "Nike",
    market: ["northAmerica", "china", "global"],
    industry: { zh: "运动服饰", en: "Athletic Apparel & Footwear" },
    coreProducts: { zh: "跑鞋、篮球鞋、运动服、Air系列、Jordan品牌", en: "Running shoes, basketball shoes, sportswear, Air series, Jordan brand" },
    thesis: {
      zh: "Nike不卖运动装备，Nike卖\"你能做到\"的信念。",
      en: "Nike doesn't sell athletic gear. Nike sells the belief that you can.",
    },
    description: {
      zh: "Nike是品牌叙事的教科书案例。'Just Do It'不是广告语，而是哲学宣言。Nike将运动员精神注入大众消费，让任何一个穿上它的人都感觉自己是运动员。",
      en: "Nike is a textbook case of brand storytelling. 'Just Do It' is not a tagline — it's a philosophical declaration. Nike transfers athletic spirit to mass consumption, making anyone who wears it feel like an athlete.",
    },
    snapshot: {
      targetAudience: {
        zh: "专业运动员、运动爱好者、追求运动美学的年轻消费者、球鞋收藏文化圈",
        en: "Professional athletes, sports enthusiasts, young consumers pursuing athletic aesthetics, sneaker culture collectors",
      },
      businessModel: {
        zh: "全球品牌溢价 + DTC转型 + 联名限定（Jordan、Off-White等）",
        en: "Global brand premium + DTC transformation + limited collabs (Jordan, Off-White, etc.)",
      },
      positioning: {
        zh: "运动表现与街头文化的交叉地带——专业与潮流并存",
        en: "The intersection of athletic performance and street culture — professional and cool coexist",
      },
    },
    whyPeopleBuy: {
      zh: "Nike的消费者分两类：真正的运动员买性能，其余人买身份和故事。Jordan品牌证明了一双鞋可以成为文化资产，而不只是运动装备。Nike的联名策略将稀缺性与文化信用叠加，使每次限定发售都成为社交事件。",
      en: "Nike's consumers fall into two groups: real athletes buy performance, everyone else buys identity and story. The Jordan brand proved that a shoe can be a cultural asset, not just athletic equipment. Nike's collaboration strategy layers scarcity on top of cultural credibility, making every limited release a social event.",
    },
    relatedPsychologyIds: ["identity", "achievement", "self-expression", "scarcity", "status", "freedom"],
    relatedCampaignIds: ["shot-on-iphone"],
    relatedFrameworkIds: ["brand-equity", "mental-availability"],
    relatedArticleIds: ["art-001", "art-006"],
    tags: ["athletic", "streetwear", "storytelling", "Jordan", "sneaker-culture"],
    featured: true,
  },
  {
    id: "lululemon",
    name: "Lululemon",
    market: ["northAmerica", "china"],
    industry: { zh: "运动生活方式", en: "Athletic Lifestyle" },
    coreProducts: { zh: "瑜伽裤、运动文胸、跑步装备、休闲服饰", en: "Yoga pants, sports bras, running gear, athleisure" },
    thesis: {
      zh: "Lululemon不卖瑜伽裤，它卖一种对生活方式的承诺。",
      en: "Lululemon doesn't sell yoga pants. It sells a commitment to a lifestyle.",
    },
    description: {
      zh: "Lululemon创造了\"运动生活方式\"这个品类，在瑜伽文化尚未主流时就建立了品牌资产。它的社群策略和实体门店体验让它成为会员制品牌的先行者。",
      en: "Lululemon created the 'athletic lifestyle' category, building brand equity before yoga culture went mainstream. Its community strategy and in-store experience made it a pioneer of membership-style branding.",
    },
    snapshot: {
      targetAudience: {
        zh: "健康意识强的城市女性、yoga和pilates爱好者、追求\"运动即生活\"的专业人士",
        en: "Health-conscious urban women, yoga and pilates practitioners, professionals who treat movement as lifestyle",
      },
      businessModel: {
        zh: "DTC溢价 + 社区店策略 + 内容与课程（Mirror收购）",
        en: "DTC premium + community store strategy + content and classes (Mirror acquisition)",
      },
      positioning: {
        zh: "运动与时尚的交叉地带，以技术面料和社群文化建立壁垒",
        en: "The intersection of sport and fashion, with technical fabric and community culture as moats",
      },
    },
    whyPeopleBuy: {
      zh: "购买Lululemon是加入一个圈子的仪式。它的消费者不只是在买裤子，而是在支持一种生活方式叙事：我是那种重视身体、关注内心、对品质有要求的人。这种叙事通过门店大使、瑜伽课和社群活动持续强化。",
      en: "Buying Lululemon is a ritual of joining a circle. Its consumers aren't just buying pants — they're endorsing a lifestyle narrative: I am the kind of person who values the body, attends to the mind, and demands quality. This narrative is continuously reinforced through store ambassadors, yoga classes, and community events.",
    },
    relatedPsychologyIds: ["belonging", "community", "achievement", "identity", "authenticity", "habit"],
    relatedCampaignIds: ["city-walk"],
    relatedFrameworkIds: ["brand-equity", "retention-loop", "customer-journey"],
    relatedArticleIds: ["art-002", "art-006"],
    tags: ["athleisure", "community", "yoga", "lifestyle-brand", "DTC"],
    featured: true,
  },
  {
    id: "pop-mart",
    name: "Pop Mart",
    market: ["china", "global"],
    industry: { zh: "潮玩与收藏品", en: "Designer Toys & Collectibles" },
    coreProducts: { zh: "Labubu系列、Molly系列、盲盒产品、限定联名款", en: "Labubu series, Molly series, blind box products, limited collaboration editions" },
    thesis: {
      zh: "Pop Mart不卖玩具，它卖开盒前那一刻的期待。",
      en: "Pop Mart doesn't sell toys. It sells the anticipation of the moment before opening.",
    },
    description: {
      zh: "Pop Mart将盲盒机制与艺术家IP结合，创造了一个全新的消费品类。它的产品在功能上没有实用价值，却能驱动反复购买和高溢价——这是消费心理驱动产品设计的极致案例。",
      en: "Pop Mart combined the blind box mechanic with artist IP to create an entirely new consumer category. Its products have no functional utility yet drive repeat purchase and significant premiums — the ultimate case of consumer psychology driving product design.",
    },
    snapshot: {
      targetAudience: {
        zh: "Z世代收藏爱好者、潮流文化消费者、K-pop周边受众、礼品购买者",
        en: "Gen Z collectors, trend culture consumers, K-pop merchandise audiences, gift buyers",
      },
      businessModel: {
        zh: "盲盒零售 + IP授权 + 限定发售 + 二级市场溢价（Dewu、StockX）",
        en: "Blind box retail + IP licensing + limited drops + secondary market premium (Dewu, StockX)",
      },
      positioning: {
        zh: "成人玩具与艺术品之间的灰色地带——太贵不是玩具，太可爱不是艺术",
        en: "The grey zone between adult toy and art object — too expensive to be a toy, too cute to be art",
      },
    },
    whyPeopleBuy: {
      zh: "Pop Mart的购买行为很大程度上是对\"获得不确定结果\"这一体验本身付费，而非对具体产品付费。变比率强化机制（同老虎机）驱动重复购买；收藏完整性的渴望驱动持续消费；二级市场溢价将消费品转化为金融资产，吸引了超出传统玩具受众的消费者群体。",
      en: "Pop Mart purchasing is largely paying for the experience of 'getting an uncertain outcome,' not for a specific product. Variable ratio reinforcement (like slot machines) drives repeat purchase; the desire for collection completeness drives sustained spending; secondary market premiums convert consumer goods into financial assets, attracting consumers beyond the traditional toy audience.",
    },
    relatedPsychologyIds: ["curiosity", "scarcity", "fomo", "emotion", "social-proof", "belonging"],
    relatedCampaignIds: ["labubu-phenomenon"],
    relatedFrameworkIds: ["retention-loop", "aarrr", "purchase-funnel"],
    relatedArticleIds: ["art-003", "art-005"],
    tags: ["blind-box", "IP", "collectible", "Gen-Z", "secondary-market"],
    featured: true,
  },
  {
    id: "alo-yoga",
    name: "Alo Yoga",
    market: ["northAmerica", "china"],
    industry: { zh: "高端运动服饰", en: "Premium Athletic Apparel" },
    coreProducts: { zh: "瑜伽裤、运动上衣、运动外套、休闲配饰", en: "Yoga pants, sports tops, athletic outerwear, leisurewear accessories" },
    thesis: {
      zh: "Alo Yoga卖的不是运动服，而是你渴望成为的那个人。",
      en: "Alo Yoga doesn't sell sportswear. It sells the person you want to become.",
    },
    description: {
      zh: "Alo Yoga将名人效应与wellness文化结合，在Lululemon与奢侈时尚之间开辟了新赛道。它的营销核心是身份投射——穿上它，你就已经接近那个更好的自己。",
      en: "Alo Yoga combines celebrity influence with wellness culture to carve a new lane between Lululemon and luxury fashion. Its marketing core is identity projection — wear it, and you're already closer to a better version of yourself.",
    },
    snapshot: {
      targetAudience: {
        zh: "高收入城市女性、wellness文化追随者、Instagram生活方式消费群体",
        en: "High-income urban women, wellness culture followers, Instagram lifestyle consumers",
      },
      businessModel: {
        zh: "DTC高溢价 + 名人/顶级KOL营销 + Alo Moves数字订阅",
        en: "DTC premium + celebrity/top KOL marketing + Alo Moves digital subscription",
      },
      positioning: {
        zh: "\"运动室到街头\"的白领wellness美学——比Lululemon更时尚，比奢侈品更亲民",
        en: "\"Studio-to-street\" white-collar wellness aesthetic — more fashionable than Lululemon, more accessible than luxury",
      },
    },
    whyPeopleBuy: {
      zh: "Alo的消费者购买的是一个投射身份——健康、自律、有品味、买得起$130瑜伽裤的那种人。名人穿同款的可见性将渴望转化为社交信号。Alo Moves则提供内容粘性，确保品牌不只是一次购买，而是一种持续订阅的生活方式。",
      en: "Alo consumers are purchasing a projected identity — the kind of person who is healthy, disciplined, tasteful, and can afford $130 yoga pants. The visibility of celebrities wearing the same product converts aspiration into social signal. Alo Moves provides content stickiness, ensuring the brand is not just a purchase but a continuously subscribed lifestyle.",
    },
    relatedPsychologyIds: ["identity", "status", "self-expression", "achievement", "belonging"],
    relatedCampaignIds: ["city-walk"],
    relatedFrameworkIds: ["brand-equity", "customer-journey"],
    relatedArticleIds: ["art-002", "art-006"],
    tags: ["wellness", "celebrity-marketing", "DTC", "lifestyle", "aspirational"],
    featured: false,
  },
  {
    id: "costco",
    name: "Costco",
    market: ["northAmerica", "china"],
    industry: { zh: "会员制仓储零售", en: "Membership Warehouse Retail" },
    coreProducts: { zh: "会员服务、散装商品、自有品牌Kirkland、食品与生活用品", en: "Membership services, bulk goods, Kirkland private label, food and household essentials" },
    thesis: {
      zh: "Costco把\"省钱\"变成了身份认同。",
      en: "Costco turned 'saving money' into a form of identity.",
    },
    description: {
      zh: "Costco是极少数以性价比为核心品牌资产的成功案例。它的会员制不只是商业模式，更是一种归属感机制。",
      en: "Costco is one of the rare cases of a brand that has made value its core brand asset. Its membership model is not just a business mechanism — it's a belonging system.",
    },
    snapshot: {
      targetAudience: {
        zh: "中产家庭、理性消费者、注重品质与价格比的精明买家",
        en: "Middle-class families, rational consumers, value-conscious buyers who care about quality",
      },
      businessModel: {
        zh: "会员费为主要利润来源 + 极低商品毛利 + 高周转库存",
        en: "Membership fees as primary profit source + extremely low product margins + high-inventory turnover",
      },
      positioning: {
        zh: "\"为会员服务的批发商\"——极致性价比与严格质控并存",
        en: "\"A wholesaler that serves members\" — extreme value coexists with strict quality control",
      },
    },
    whyPeopleBuy: {
      zh: "Costco会员身份本身成为一种消费者身份标签——\"我是那种足够聪明、知道在哪里买东西的人\"。Kirkland的品质背书使低价不等于低端。在中国，Costco的进入带来了文化冲击，样品试吃和秒空货架将购物变成了社会事件。",
      en: "Costco membership itself becomes a consumer identity marker — 'I am the kind of person smart enough to know where to shop.' Kirkland's quality endorsement ensures low price doesn't equal low end. In China, Costco's entry created a cultural shock — free samples and instantly cleared shelves turned shopping into a social event.",
    },
    relatedPsychologyIds: ["value", "security", "trust", "convenience", "habit", "belonging"],
    relatedCampaignIds: [],
    relatedFrameworkIds: ["brand-equity", "purchase-funnel", "retention-loop"],
    relatedArticleIds: ["art-004"],
    tags: ["membership", "value", "private-label", "bulk", "warehouse"],
    featured: false,
  },
  {
    id: "tesla",
    name: "Tesla",
    market: ["northAmerica", "china", "global"],
    industry: { zh: "电动汽车与能源", en: "Electric Vehicles & Energy" },
    coreProducts: { zh: "Model 3、Model Y、Model S、Autopilot、能源存储", en: "Model 3, Model Y, Model S, Autopilot, energy storage" },
    thesis: {
      zh: "Tesla不卖汽车，它卖\"加入未来\"的门票。",
      en: "Tesla doesn't sell cars. It sells a ticket to join the future.",
    },
    description: {
      zh: "Tesla将电动车从\"环保妥协\"重新定义为\"科技优越\"。它的消费者购买的不只是交通工具，而是对某种世界观的认同和对技术前沿的接入权。",
      en: "Tesla redefined electric vehicles from 'environmental compromise' to 'technological superiority.' Its consumers are buying not just transportation, but alignment with a worldview and access to the technological frontier.",
    },
    snapshot: {
      targetAudience: {
        zh: "技术早期采用者、环保意识强的高收入群体、汽车科技爱好者",
        en: "Technology early adopters, environmentally conscious high-income consumers, automotive tech enthusiasts",
      },
      businessModel: {
        zh: "直营模式 + 软件升级（OTA）+ 能源业务 + Autopilot/FSD订阅",
        en: "Direct sales model + software upgrades (OTA) + energy business + Autopilot/FSD subscription",
      },
      positioning: {
        zh: "\"科技公司做的车\"——以软件思维颠覆传统汽车行业",
        en: "\"A car made by a tech company\" — disrupting traditional auto with software-first thinking",
      },
    },
    whyPeopleBuy: {
      zh: "Tesla的早期购买者是真正的技术信仰者；中期购买者是被Elon Musk的个人叙事感召的；现在的购买者更多是被性价比和充电网络的便利性驱动。在中国，Model Y成为中产阶级的\"聪明选择\"符号，兼具技术认可与品质背书。",
      en: "Tesla's early buyers were true technology believers; mid-period buyers were drawn by Elon Musk's personal narrative; current buyers are more driven by value and the convenience of the charging network. In China, the Model Y has become a symbol of 'smart choice' for the middle class, combining technological credibility with quality endorsement.",
    },
    relatedPsychologyIds: ["innovation", "identity", "status", "freedom", "achievement"],
    relatedCampaignIds: [],
    relatedFrameworkIds: ["brand-equity", "mental-availability", "aarrr"],
    relatedArticleIds: [],
    tags: ["EV", "tech-brand", "direct-sales", "Elon-Musk", "early-adopter"],
    featured: false,
  },
  {
    id: "sony",
    name: "Sony",
    market: ["global", "china", "northAmerica"],
    industry: { zh: "消费电子与娱乐", en: "Consumer Electronics & Entertainment" },
    coreProducts: { zh: "PlayStation、WH-1000XM系列耳机、Alpha相机、Walkman传承", en: "PlayStation, WH-1000XM headphones, Alpha cameras, Walkman heritage" },
    thesis: {
      zh: "Sony的产品是手段，体验是目的——它卖的是感官沉浸。",
      en: "Sony's products are the means; experience is the end. It sells sensory immersion.",
    },
    description: {
      zh: "Sony是少有的在多个品类都建立了\"体验标准\"的品牌。PlayStation定义了游戏，Alpha定义了无反相机，WH-1000XM定义了消噪耳机。这种品类定义能力是其核心资产。",
      en: "Sony is one of the few brands that has established the 'experience standard' across multiple categories. PlayStation defined gaming, Alpha defined mirrorless cameras, WH-1000XM defined noise-canceling headphones. This category-defining capability is its core asset.",
    },
    snapshot: {
      targetAudience: {
        zh: "游戏玩家、摄影爱好者、音乐发烧友、创意专业人士",
        en: "Gamers, photography enthusiasts, audiophiles, creative professionals",
      },
      businessModel: {
        zh: "硬件销售 + 游戏软件与服务（PlayStation Plus）+ 内容娱乐（Sony Music、Sony Pictures）",
        en: "Hardware sales + game software and services (PlayStation Plus) + content entertainment (Sony Music, Sony Pictures)",
      },
      positioning: {
        zh: "感官体验的设计师——每个品类都追求\"感受上的最好\"",
        en: "The designer of sensory experience — each category pursues 'the best in how it feels'",
      },
    },
    whyPeopleBuy: {
      zh: "Sony消费者购买的是一种感官承诺。WH-1000XM的消噪让世界安静；Alpha的色彩还原让图像更真实；PlayStation的独占游戏让玩家别无选择。Sony理解\"沉浸感\"是消费者愿意支付最高溢价的体验维度。",
      en: "Sony consumers are buying a sensory promise. WH-1000XM's noise cancellation makes the world quiet; Alpha's color rendering makes images more true; PlayStation's exclusives leave gamers with no alternative. Sony understands that 'immersion' is the experience dimension for which consumers will pay the highest premium.",
    },
    relatedPsychologyIds: ["innovation", "curiosity", "nostalgia", "security", "emotion"],
    relatedCampaignIds: [],
    relatedFrameworkIds: ["brand-equity", "jobs-to-be-done", "mental-availability"],
    relatedArticleIds: [],
    tags: ["PlayStation", "audio", "camera", "experience", "heritage"],
    featured: false,
  },
];
