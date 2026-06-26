/**
 * FRAMEWORKS DATA
 * ─────────────────────────────────────────────────────────────────
 * Marketing models, funnels, consumer behavior frameworks.
 * Each should explain theory AND show how it applies in practice.
 * ─────────────────────────────────────────────────────────────────
 */

export const frameworks = [
  {
    id: "aarrr",
    name: { zh: "AARRR增长模型", en: "AARRR Growth Framework" },
    category: { zh: "增长营销", en: "Growth Marketing" },
    description: {
      zh: "AARRR（海盗指标）是最经典的增长框架，追踪用户从获取到推荐的完整生命周期。它帮助团队识别增长瓶颈所在的具体阶段。",
      en: "AARRR (Pirate Metrics) is the classic growth framework tracking the complete user lifecycle from acquisition to referral. It helps teams pinpoint exactly which stage is the growth bottleneck.",
    },
    coreIdeas: {
      zh: "Acquisition（获取）→ Activation（激活）→ Retention（留存）→ Revenue（营收）→ Referral（推荐）。每个阶段都有独立的指标和优化逻辑，问题往往不在你以为的地方。",
      en: "Acquisition → Activation → Retention → Revenue → Referral. Each stage has independent metrics and optimization logic. The problem is rarely where you think it is.",
    },
    howToUse: {
      zh: "首先确定每个阶段的核心指标（如：获取=CAC，激活=首次核心行为完成率，留存=30日回访率），然后计算各阶段转化率，找到最大漏损点，将资源集中在漏损最大的阶段进行优化。",
      en: "First define the core metric for each stage (e.g., Acquisition = CAC, Activation = first core action completion rate, Retention = 30-day return rate), then calculate conversion rates at each stage, identify the largest leakage point, and concentrate resources on optimizing that stage.",
    },
    practiceExample: {
      zh: "Pop Mart：Acquisition（门店曝光+KOL）→ Activation（第一次开盲盒体验）→ Retention（收集完整系列的冲动）→ Revenue（复购+限定款溢价）→ Referral（社媒开箱分享）。漏损最大点通常在Activation：第一次体验必须\"上头\"。",
      en: "Pop Mart: Acquisition (store exposure + KOL) → Activation (first blind box opening experience) → Retention (impulse to complete the series) → Revenue (repeat purchase + limited edition premium) → Referral (social media unboxing shares). The biggest leakage is usually at Activation: the first experience must be 'addictive.'",
    },
    relatedPsychologyIds: ["habit", "curiosity", "community", "fomo"],
    relatedBrandIds: ["pop-mart", "apple", "tesla"],
    relatedCampaignIds: ["labubu-phenomenon", "mixue-ipo", "shot-on-iphone"],
    relatedArticleIds: ["art-003"],
    tags: ["growth-hacking", "funnel", "metrics", "SaaS", "startup"],
    featured: true,
  },
  {
    id: "jobs-to-be-done",
    name: { zh: "待完成任务理论", en: "Jobs To Be Done (JTBD)" },
    category: { zh: "消费者行为", en: "Consumer Behavior" },
    description: {
      zh: "JTBD认为消费者不是在\"购买产品\"，而是在\"雇佣\"产品完成某个任务。理解真正的\"任务\"（尤其是情感任务），是打造真正有竞争力产品的前提。",
      en: "JTBD holds that consumers aren't 'buying products' — they're 'hiring' products to complete a job. Understanding the real 'job' (especially the emotional job) is the prerequisite for building truly competitive products.",
    },
    coreIdeas: {
      zh: "每个购买决策背后都有一个待完成的任务，分为：功能任务（我需要能喝的东西）、情感任务（我需要感到被关怀）、社会任务（我需要看起来像一个健康的人）。最好的产品同时完成三种任务。",
      en: "Every purchase decision has a job to be done behind it, categorized as: Functional job (I need something to drink), Emotional job (I need to feel cared for), Social job (I need to appear as a healthy person). The best products complete all three jobs simultaneously.",
    },
    howToUse: {
      zh: "进行消费者访谈时，不问\"你为什么买这个产品\"，而问\"你在什么情况下做的购买决定？当时还有什么其他选择？你想通过这个产品完成什么？\"。挖掘情境和动机，而非表面理由。",
      en: "In consumer interviews, don't ask 'why did you buy this product?' Ask: 'What circumstances led to your purchase decision? What other options did you consider? What were you trying to accomplish?' Mine context and motivation, not surface reasons.",
    },
    practiceExample: {
      zh: "Lululemon的功能任务是\"瑜伽时舒适且活动自由\"；情感任务是\"感觉自己正在成为更好的自己\"；社会任务是\"被看见为一个重视健康、有品味的人\"。Lululemon的成功在于三种任务都完成得比竞品更好。",
      en: "Lululemon's functional job is 'comfortable and free movement during yoga'; emotional job is 'feeling like I'm becoming a better version of myself'; social job is 'being seen as a person who values health and has taste.' Lululemon succeeds by completing all three jobs better than competitors.",
    },
    relatedPsychologyIds: ["identity", "achievement", "self-expression", "freedom", "emotion"],
    relatedBrandIds: ["lululemon", "alo-yoga", "sony"],
    relatedCampaignIds: ["city-walk", "shot-on-iphone"],
    relatedArticleIds: ["art-002", "art-006"],
    tags: ["consumer-insight", "product-strategy", "innovation", "research"],
    featured: true,
  },
  {
    id: "brand-equity",
    name: { zh: "品牌资产模型", en: "Brand Equity Model" },
    category: { zh: "品牌策略", en: "Brand Strategy" },
    description: {
      zh: "品牌资产是消费者对品牌的知识、情感和联想的总和，它决定了品牌能够收取的溢价和消费者的忠诚度。Keller的CBBE模型是最常用的分析框架。",
      en: "Brand equity is the sum of consumer knowledge, emotions, and associations about a brand. It determines the premium a brand can charge and the loyalty it earns. Keller's CBBE model is the most widely used analytical framework.",
    },
    coreIdeas: {
      zh: "品牌资产由四个层次构成：品牌显著性（Brand Salience，消费者是否知道你）→ 品牌表现与形象（Performance & Imagery，消费者如何感知你）→ 品牌判断与感受（Judgments & Feelings，消费者如何评价你）→ 品牌共鸣（Resonance，消费者与你的深层联结）。",
      en: "Brand equity is built in four layers: Brand Salience (do consumers know you?) → Brand Performance & Imagery (how do consumers perceive you?) → Brand Judgments & Feelings (how do consumers evaluate you?) → Brand Resonance (the deep connection consumers have with you).",
    },
    howToUse: {
      zh: "用这四个层次审计任何品牌：它在目标受众中的认知度（Salience），它的核心产品联想和品牌个性（Performance/Imagery），消费者对它的质量判断和情感反应（Judgments/Feelings），以及活跃粉丝群体的存在程度（Resonance）。",
      en: "Audit any brand using these four layers: recognition rate among target audience (Salience), core product associations and brand personality (Performance/Imagery), consumer quality judgments and emotional responses (Judgments/Feelings), and the degree of active fan community (Resonance).",
    },
    practiceExample: {
      zh: "Apple在四个层次都达到极致：Salience（全球最高辨识度之一）、Performance（性能与设计的双重标杆）、Imagery（创意、精英、品味的文化形象）、Judgments（消费者愿意支付高溢价且主动捍卫品牌）、Resonance（Apple粉丝社群的活跃程度在科技行业无可匹敌）。",
      en: "Apple reaches the extreme in all four layers: Salience (one of the world's highest recognition rates), Performance (benchmark for both performance and design), Imagery (cultural image of creativity, elite, taste), Judgments (consumers pay high premiums and actively defend the brand), Resonance (Apple fan community activity is unmatched in the tech industry).",
    },
    relatedPsychologyIds: ["identity", "trust", "status", "belonging", "innovation"],
    relatedBrandIds: ["apple", "nike", "lululemon", "pop-mart", "alo-yoga", "costco"],
    relatedCampaignIds: ["apple-wwdc-2025", "shot-on-iphone", "mixue-ipo"],
    relatedArticleIds: ["art-001", "art-004"],
    tags: ["Keller", "CBBE", "brand-management", "equity", "positioning"],
    featured: true,
  },
  {
    id: "mental-availability",
    name: { zh: "心智可及性", en: "Mental Availability" },
    category: { zh: "品牌策略", en: "Brand Strategy" },
    description: {
      zh: "Byron Sharp的心智可及性理论认为：品牌的核心任务不是建立深度情感忠诚，而是在购买场景中第一个出现在消费者脑海中。触及范围比情感深度更重要。",
      en: "Byron Sharp's mental availability theory holds that a brand's core task is not building deep emotional loyalty — it's being the first to appear in a consumer's mind in a buying situation. Reach matters more than emotional depth.",
    },
    coreIdeas: {
      zh: "消费者在购买决策时会触发一系列\"品类入口线索\"（Category Entry Points），心智可及性强的品牌会在更多线索下被联想到。品牌建设的本质是在消费者大脑中建立\"购买情境→品牌\"的反射路径。",
      en: "In purchase decisions, consumers activate a series of 'Category Entry Points' (CEPs). Brands with strong mental availability are associated with more CEPs. Brand building is essentially constructing 'buying context → brand' reflex pathways in the consumer's brain.",
    },
    howToUse: {
      zh: "列出你的品类中所有可能的购买触发情境（如：\"我今天需要咖啡\"、\"我要送礼\"、\"我在健身后需要补充蛋白质\"），然后评估你的品牌在每个情境下的心智占有率。找到心智空白，用持续的品牌接触填补。",
      en: "List all possible purchase trigger situations in your category (e.g., 'I need coffee today,' 'I need to give a gift,' 'I need protein after the gym'), then assess your brand's mental share in each situation. Find mental gaps and fill them with consistent brand touchpoints.",
    },
    practiceExample: {
      zh: "Costco的心智可及性极强：\"我要买大量零食\"、\"我需要高性价比的肉类\"、\"我要买Kirkland\"——在所有这些场景下，Costco几乎是唯一联想。蜜雪冰城在\"我想喝便宜但好喝的饮料\"场景下已在中国建立了接近垄断的心智占有率。",
      en: "Costco has extremely strong mental availability: 'I need to buy snacks in bulk,' 'I need good-value meat,' 'I want to buy Kirkland' — in all these situations, Costco is almost the only association. Mixue has established near-monopoly mental share in China for 'I want an affordable but tasty drink.'",
    },
    relatedPsychologyIds: ["habit", "trust", "convenience", "social-proof"],
    relatedBrandIds: ["apple", "nike", "costco"],
    relatedCampaignIds: ["apple-wwdc-2025", "mixue-ipo"],
    relatedArticleIds: ["art-004"],
    tags: ["Byron-Sharp", "salience", "distinctiveness", "reach", "mass-marketing"],
    featured: false,
  },
  {
    id: "customer-journey",
    name: { zh: "消费者决策旅程", en: "Consumer Decision Journey" },
    category: { zh: "消费者行为", en: "Consumer Behavior" },
    description: {
      zh: "McKinsey的消费者决策旅程（CDJ）用非线性模型取代了传统漏斗，揭示消费者在购买决策中的真实路径——包括考虑、评估、购买和忠诚度循环。",
      en: "McKinsey's Consumer Decision Journey (CDJ) replaces the traditional funnel with a non-linear model, revealing consumers' actual paths in purchase decisions — including consideration, evaluation, purchase, and the loyalty loop.",
    },
    coreIdeas: {
      zh: "消费者不是从\"认知\"线性走向\"购买\"，而是在考虑集中进出品牌、主动评估时进行大量信息搜集、购后体验决定是否进入忠诚度循环。忠诚度循环（直接跳过考虑阶段）是品牌的终极目标。",
      en: "Consumers don't linearly move from 'awareness' to 'purchase.' Instead, they enter and exit brands from the consideration set, actively research during evaluation, and post-purchase experience determines whether they enter the loyalty loop. The loyalty loop (bypassing the consideration stage entirely) is a brand's ultimate goal.",
    },
    howToUse: {
      zh: "为你的品牌绘制CDJ：目标消费者从哪里开始考虑（触发点）？他们如何评估（什么平台、什么内容）？购买在哪里发生（线上/线下）？购后满意度如何影响二次购买？在哪个阶段你的品牌最脆弱（如：进入不了初始考虑集）？",
      en: "Map the CDJ for your brand: Where do target consumers start considering (trigger)? How do they evaluate (what platforms, what content)? Where does purchase happen (online/offline)? How does post-purchase satisfaction affect repurchase? At which stage is your brand most vulnerable (e.g., failing to enter the initial consideration set)?",
    },
    practiceExample: {
      zh: "Alo Yoga的CDJ：触发点（Instagram看到名人穿搭）→ 考虑集进入（\"这个品牌是什么\"）→ 主动评估（小红书种草、官网浏览）→ 购买（DTC官网）→ 体验（质量验证）→ 忠诚度循环（Alo Moves订阅强化习惯）或流失（价格/竞品吸引）。",
      en: "Alo Yoga's CDJ: Trigger (seeing celebrity outfit on Instagram) → Consideration set entry ('what is this brand') → Active evaluation (Xiaohongshu research, website browsing) → Purchase (DTC website) → Experience (quality verification) → Loyalty loop (Alo Moves subscription reinforces habit) or churn (price/competitor attraction).",
    },
    relatedPsychologyIds: ["trust", "social-proof", "habit", "security", "emotion"],
    relatedBrandIds: ["alo-yoga", "lululemon", "apple"],
    relatedCampaignIds: ["city-walk", "apple-wwdc-2025"],
    relatedArticleIds: ["art-002", "art-006"],
    tags: ["McKinsey", "non-linear", "touchpoints", "loyalty-loop", "omnichannel"],
    featured: false,
  },
  {
    id: "purchase-funnel",
    name: { zh: "购买漏斗", en: "Purchase Funnel (AIDA)" },
    category: { zh: "营销基础", en: "Marketing Fundamentals" },
    description: {
      zh: "AIDA（注意-兴趣-欲望-行动）是最经典的营销漏斗模型。尽管现实消费路径更复杂，它仍是理解消费者决策阶段和对应营销策略的最简洁框架。",
      en: "AIDA (Attention-Interest-Desire-Action) is the most classic marketing funnel model. Though real consumer journeys are more complex, it remains the most concise framework for understanding consumer decision stages and corresponding marketing strategies.",
    },
    coreIdeas: {
      zh: "Attention（让消费者注意到你）→ Interest（激发了解欲望）→ Desire（建立情感/功能需求）→ Action（促成购买行为）。每个阶段需要不同的内容形式和渠道策略。漏斗越往下，信息越具体，号召越明确。",
      en: "Attention (make consumers notice you) → Interest (spark the desire to learn more) → Desire (build emotional/functional need) → Action (drive purchase behavior). Each stage requires different content formats and channel strategies. The deeper into the funnel, the more specific the information and the clearer the call to action.",
    },
    howToUse: {
      zh: "审计你在每个阶段的内容和渠道覆盖。Attention阶段：你的触达有多广？Interest阶段：你的内容是否有足够的信息深度？Desire阶段：你有没有真正解答消费者的购买顾虑？Action阶段：转化路径是否足够顺畅？找到最薄弱的阶段，优先加强。",
      en: "Audit your content and channel coverage at each stage. Attention: How broad is your reach? Interest: Does your content have sufficient informational depth? Desire: Have you genuinely addressed consumer purchase hesitations? Action: Is the conversion path smooth enough? Identify the weakest stage and prioritize strengthening it.",
    },
    practiceExample: {
      zh: "蜜雪冰城的AIDA：Attention（洗脑神曲+雪王IP刷屏）→ Interest（\"这个品牌怎么这么便宜\"的好奇）→ Desire（\"2元就能喝，为什么不买\"的理性诉求）→ Action（门店遍布街头，购买摩擦极低）。蜜雪的D→A转化是行业最高效之一，因为价格门槛极低。",
      en: "Mixue's AIDA: Attention (earworm jingle + Snow King IP saturation) → Interest ('how is this brand so cheap' curiosity) → Desire ('2 RMB to drink, why not' rational appeal) → Action (stores everywhere, minimal purchase friction). Mixue's D→A conversion is one of the most efficient in the industry because the price barrier is extremely low.",
    },
    relatedPsychologyIds: ["scarcity", "social-proof", "fomo", "value", "convenience"],
    relatedBrandIds: ["pop-mart", "costco"],
    relatedCampaignIds: ["mixue-ipo", "labubu-phenomenon", "luckin-moutai"],
    relatedArticleIds: ["art-003", "art-004", "art-005"],
    tags: ["AIDA", "classic", "funnel", "conversion", "advertising"],
    featured: true,
  },
  {
    id: "retention-loop",
    name: { zh: "留存循环", en: "Retention Loop" },
    category: { zh: "增长营销", en: "Growth Marketing" },
    description: {
      zh: "留存循环描述品牌如何通过产品、内容、社群或机制持续将用户拉回，避免流失。在用户获取成本持续上涨的时代，留存的ROI远高于新客获取。",
      en: "The Retention Loop describes how brands continuously pull users back through product, content, community, or mechanics to prevent churn. In an era of rising acquisition costs, the ROI of retention far exceeds that of new customer acquisition.",
    },
    coreIdeas: {
      zh: "留存循环的核心结构：触发器（让用户想起来）→ 行动（用户回来了）→ 奖励（给用户一个值得回来的理由）→ 投入（用户付出了时间/金钱/社交资本）→ 触发器再次激活。循环越短、奖励越强，留存率越高。",
      en: "The core structure of the Retention Loop: Trigger (make user remember) → Action (user returns) → Reward (give user a reason worth returning for) → Investment (user commits time/money/social capital) → Trigger reactivated. The shorter the loop and the stronger the reward, the higher the retention rate.",
    },
    howToUse: {
      zh: "识别你产品的自然触发器（通知、习惯、社交）。设计清晰的行动路径（越简单越好）。强化奖励的可感知性（即时反馈、进度感、稀缺内容）。鼓励用户投入（创建内容、建立收藏、积累会员权益）——投入越多，流失成本越高。",
      en: "Identify your product's natural triggers (notifications, habits, social). Design clear action pathways (simpler is better). Strengthen the perceivability of rewards (immediate feedback, sense of progress, exclusive content). Encourage user investment (content creation, building collections, accumulating membership benefits) — the more invested, the higher the churn cost.",
    },
    practiceExample: {
      zh: "Pop Mart的留存循环：触发器（新系列发售通知）→ 行动（购买/开盲盒）→ 奖励（开盒惊喜+稀有款获取感）→ 投入（收藏价值积累+对完整系列的渴望）→ 触发器（下一系列预告）。这个循环几乎没有天然的终止点。",
      en: "Pop Mart's retention loop: Trigger (new series release notification) → Action (purchase/open blind box) → Reward (unboxing surprise + sense of obtaining a rare item) → Investment (collection value accumulation + desire for complete series) → Trigger (teaser for next series). This loop has almost no natural termination point.",
    },
    relatedPsychologyIds: ["habit", "fomo", "scarcity", "community", "curiosity"],
    relatedBrandIds: ["pop-mart", "apple", "lululemon", "costco"],
    relatedCampaignIds: ["labubu-phenomenon", "apple-wwdc-2025", "shot-on-iphone"],
    relatedArticleIds: ["art-003", "art-005"],
    tags: ["retention", "churn", "engagement", "loyalty", "product-design"],
    featured: false,
  },
];
