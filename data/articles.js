/**
 * ARTICLES DATA
 * ─────────────────────────────────────────────────────────────────
 * Articles bridge psychology, brands, campaigns, and frameworks.
 * Each article should be discoverable from multiple entry points.
 * content.zh / content.en can be longer text (paragraphs).
 * ─────────────────────────────────────────────────────────────────
 */

export const articles = [
  {
    id: "art-001",
    title: {
      zh: "身份即产品：Apple如何把手机卖成自我宣言",
      en: "Identity as Product: How Apple Sells Phones as Self-Declarations",
    },
    subtitle: {
      zh: "当一部手机变成社交护照，技术规格就不再重要",
      en: "When a phone becomes a social passport, technical specs no longer matter",
    },
    summary: {
      zh: "Apple最强大的产品不是iPhone，而是\"Apple用户\"这个身份。本文拆解Apple如何将消费电子品转化为身份标签，以及这一机制为何在中美两个市场都行之有效。",
      en: "Apple's most powerful product isn't the iPhone — it's the 'Apple user' identity. This piece deconstructs how Apple converts consumer electronics into identity labels, and why this mechanism works in both Chinese and American markets.",
    },
    content: {
      zh: `身份消费的核心悖论是：消费者购买的是一个\"我应该是谁\"的愿景，而非一个\"我现在是谁\"的现实。

Apple最聪明的地方在于它从未销售功能。1997年\"Think Different\"广告没有提到任何产品规格，却把Apple用户定义为\"那些疯狂到以为能改变世界的人\"。这句话做到了所有营销最难做到的事：它让目标消费者感到被理解，被看见，被选中。

从心理学角度看，Apple触发了\"延伸自我\"（Extended Self）机制——消费者将品牌和产品视为自我的一部分。当有人说\"我是Mac用户\"，他们说的不只是一个技术选择，而是整个生活方式的宣告。

这一机制在中国和北美都有效，但驱动力略有不同。在北美，iPhone代表创意阶层的工具；在中国，iPhone更强烈地与社会阶层挂钩——绿色气泡的社交焦虑在中国市场几乎不存在，但iPhone的售价本身就是一种阶层信号。

Apple的生态系统使这个身份难以退出：一旦你是\"Apple人\"，AirPods、Apple Watch、iCloud、MacBook会一件件把你锁在这个身份里。切换品牌不只是换一部手机，而是放弃一个关于自己的叙事。`,
      en: `The core paradox of identity consumption is that consumers are buying a vision of 'who I should be,' not a reality of 'who I am now.'

Apple's greatest intelligence has never been selling features. The 1997 'Think Different' campaign mentioned no product specifications, yet defined Apple users as 'the crazy ones who think they can change the world.' This achieved what is hardest in marketing: it made target consumers feel understood, seen, and chosen.

Psychologically, Apple triggers the 'Extended Self' mechanism — consumers treat the brand and product as part of themselves. When someone says 'I'm a Mac user,' they're not just stating a technical choice — they're declaring an entire lifestyle.

This mechanism works in both China and North America, but with slightly different drivers. In North America, the iPhone represents a creative class tool. In China, it more strongly correlates with social class — the social anxiety of 'green bubbles' barely exists in China, but the iPhone's price point alone is a class signal.

Apple's ecosystem makes this identity hard to exit: once you're an 'Apple person,' AirPods, Apple Watch, iCloud, and MacBook lock you in one piece at a time. Switching brands isn't just changing a phone — it's abandoning a narrative about yourself.`,
    },
    articleType: "brand",
    market: ["global", "china", "northAmerica"],
    psychologyIds: ["identity", "status", "habit", "trust", "innovation"],
    brandIds: ["apple"],
    campaignIds: ["apple-wwdc-2025", "shot-on-iphone"],
    frameworkIds: ["brand-equity", "mental-availability"],
    tags: ["Apple", "identity", "ecosystem", "premium", "extended-self"],
    publishedAt: "2025-05-10",
    readingTime: { zh: "8分钟", en: "8 min" },
    languageAvailability: { zh: true, en: true },
    featured: true,
  },
  {
    id: "art-002",
    title: {
      zh: "City Walk背后的消费心理：当散步变成生活方式",
      en: "The Consumer Psychology Behind City Walk: When Walking Becomes a Lifestyle",
    },
    subtitle: {
      zh: "中国年轻人的「低消费高体验」如何重塑品牌的场景营销逻辑",
      en: "How China's 'low consumption, high experience' trend is reshaping brand scenario marketing",
    },
    summary: {
      zh: "City Walk不是一种体育活动，而是一种消费态度的表达。它揭示了消费降级背景下，年轻人如何用最小的经济成本最大化体验价值——以及品牌如何搭上这趟车。",
      en: "City Walk isn't a sport — it's an expression of a consumption attitude. It reveals how young people maximize experiential value with minimal economic cost in a consumption downgrade context, and how brands can board this train.",
    },
    content: {
      zh: `City Walk的关键不是\"走路\"，而是\"仪式化\"。

同样是在城市里走路，通勤和City Walk的区别不是路线，而是叙事框架。通勤是任务，City Walk是体验。小红书上的City Walk内容把这种区别可视化了：精心挑选的穿搭、咖啡馆打卡、光影构图的街拍——这一切共同建构了\"一个有品质的人在享受城市\"的故事。

这是归属感消费最典型的形式：通过参与某种被群体认可的实践，获得对某个圈层的归属感。City Walk族群有自己的视觉语言（特定的穿搭风格）、行为仪式（特定的打卡方式）和内容形式（小红书笔记的固定结构）。

对品牌来说，City Walk的价值在于它打开了一个\"低消费高意愿\"的接触场景。消费者在这种状态下对品牌的植入接受度极高，因为品牌成为了他们叙事的一部分，而非广告打断。

Lululemon和Alo Yoga在这个场景里的渗透是教科书式的：它们不是在\"打广告\"，而是成为了City Walk穿搭的默认选项。当KOL发布City Walk内容，品牌标志自然出现，这是最高效的场景营销。`,
      en: `The key to City Walk isn't 'walking' — it's 'ritualization.'

The difference between commuting and City Walking in the same city isn't the route — it's the narrative frame. Commuting is a task; City Walk is an experience. City Walk content on Xiaohongshu makes this distinction visible: carefully curated outfits, café check-ins, light-and-shadow street photography — all co-constructing the story of 'a person of quality enjoying the city.'

This is the most typical form of belonging consumption: by participating in a practice recognized by the group, gaining belonging to a social circle. The City Walk tribe has its own visual language (specific outfit styles), behavioral rituals (specific check-in methods), and content forms (fixed structures for Xiaohongshu notes).

For brands, City Walk's value lies in opening a 'low consumption, high intent' contact scenario. Consumers in this state have high receptivity to brand integration, because the brand becomes part of their narrative rather than an advertising interruption.

Lululemon and Alo Yoga's penetration of this scenario is textbook: they're not 'running ads' — they've become the default option for City Walk outfits. When KOLs publish City Walk content, brand logos appear naturally — this is the most efficient scenario marketing.`,
    },
    articleType: "campaign",
    market: ["china"],
    psychologyIds: ["belonging", "self-expression", "emotion", "community", "achievement"],
    brandIds: ["lululemon", "alo-yoga"],
    campaignIds: ["city-walk"],
    frameworkIds: ["jobs-to-be-done", "customer-journey"],
    tags: ["City-Walk", "Gen-Z", "lifestyle", "China", "scenario-marketing"],
    publishedAt: "2025-05-18",
    readingTime: { zh: "7分钟", en: "7 min" },
    languageAvailability: { zh: true, en: true },
    featured: true,
  },
  {
    id: "art-003",
    title: {
      zh: "Labubu为什么让人上头：盲盒机制的消费心理学",
      en: "Why Labubu Is Addictive: The Consumer Psychology of Blind Box Mechanics",
    },
    subtitle: {
      zh: "变比率强化、稀缺感与社交信号的三重共振",
      en: "The triple resonance of variable ratio reinforcement, scarcity, and social signaling",
    },
    summary: {
      zh: "Labubu现象的本质是一场精心设计的心理实验。它将老虎机的随机奖励机制、奢侈品的稀缺逻辑和社交媒体的展示欲望结合在一个19厘米的毛绒玩具身上。",
      en: "The Labubu phenomenon is essentially a carefully designed psychological experiment. It combines the random reward mechanism of slot machines, the scarcity logic of luxury goods, and social media display desire — all packed into a 19cm plush toy.",
    },
    content: {
      zh: `理解Labubu，必须先理解变比率强化（Variable Ratio Reinforcement）。

这是行为心理学中已知的最强成瘾机制——比固定奖励更难抵抗，因为\"下一次可能更好\"的期待使行为持续。老虎机、抽卡游戏、盲盒，都基于同一个心理原理。Pop Mart把这个机制放进了一个有品位、有艺术感的容器里，使它在消费者眼中不再是\"赌博\"，而是\"收藏\"。

第二个机制是损失厌恶（Loss Aversion）。限量款一旦售罄，就永远消失了。收藏集合中那个缺失的角落会持续制造焦虑——这个焦虑比得到的喜悦更持久，更驱动行动。Pop Mart的系列设计确保总有一个槽位是空的。

第三个机制是社会信号。Labubu从圈子内的收藏品变成全球文化现象，Lisa的那条帖子起到了加速器作用。当一个产品被\"她们\"使用，它就携带了\"她们\"的身份信号——购买者不只是在收藏，而是在加入一种文化场域。

这三个机制的叠加，使Labubu成为一个消费心理学的完美案例。没有任何一个单独有效，但三者叠加产生了几何级数的效果。`,
      en: `To understand Labubu, you must first understand Variable Ratio Reinforcement.

This is the strongest known addiction mechanism in behavioral psychology — harder to resist than fixed rewards because the expectation that 'the next one might be better' keeps behavior going. Slot machines, card games, and blind boxes all operate on the same psychological principle. Pop Mart placed this mechanism in an aesthetically tasteful, artistically credible container, making it feel like 'collecting' rather than 'gambling' to consumers.

The second mechanism is Loss Aversion. Once a limited edition sells out, it's gone forever. The missing slot in a collection continuously generates anxiety — this anxiety is more persistent and more action-driving than the joy of obtaining. Pop Mart's series design ensures there's always an empty slot.

The third mechanism is social signaling. Labubu's transformation from a niche collectible to a global cultural phenomenon was accelerated by Lisa's post. When a product is used by 'people like them,' it carries those people's identity signals — buyers aren't just collecting, they're joining a cultural field.

The combination of these three mechanisms makes Labubu a perfect case study in consumer psychology. None works powerfully alone, but the three together produce geometric effects.`,
    },
    articleType: "psychology",
    market: ["china", "global"],
    psychologyIds: ["scarcity", "fomo", "curiosity", "emotion", "social-proof", "belonging"],
    brandIds: ["pop-mart"],
    campaignIds: ["labubu-phenomenon"],
    frameworkIds: ["retention-loop", "aarrr", "purchase-funnel"],
    tags: ["Labubu", "blind-box", "psychology", "variable-ratio", "scarcity"],
    publishedAt: "2025-05-05",
    readingTime: { zh: "9分钟", en: "9 min" },
    languageAvailability: { zh: true, en: true },
    featured: true,
  },
  {
    id: "art-004",
    title: {
      zh: "Costco的反营销学：为什么\"不打广告\"是最聪明的品牌策略",
      en: "Costco's Anti-Marketing: Why 'No Advertising' Is the Smartest Brand Strategy",
    },
    subtitle: {
      zh: "性价比如何成为最难被模仿的品牌资产",
      en: "How extreme value becomes the hardest-to-replicate brand asset",
    },
    summary: {
      zh: "Costco几乎不做品牌广告，却拥有北美最高的会员续费率之一。这篇文章拆解Costco如何把\"省钱\"变成一种身份认同，以及为什么这套逻辑正在中国产生奇妙的化学反应。",
      en: "Costco barely advertises, yet has one of North America's highest membership renewal rates. This piece deconstructs how Costco turned 'saving money' into an identity, and why this logic is generating fascinating chemistry in China.",
    },
    content: {
      zh: `Costco的核心商业秘密只有一个：它的真正产品不是商品，而是会员资格。

Costco把自己定义为\"为会员服务\"，而非\"向消费者销售\"。这一字之差，改变了整个品牌逻辑。传统零售商的动机是\"卖出更多\"，Costco的动机是\"让会员觉得这个年费花得值\"。这两个动机产生的行为和文化完全不同。

会员制的另一个妙处在于身份化：\"Costco会员\"是一种消费者主动认领的标签。它意味着\"我足够聪明，知道在哪里花钱\"。当消费者把Costco会员卡放在钱包里，他们放的是一张智识身份证，而非一张打折卡。

在中国市场，Costco的进入产生了一个独特现象：消费者把去Costco本身变成了一种社交活动，等候排队和样品试吃变成了体验的一部分。这证明了心智可及性的跨文化迁移——当消费者主动把购物变为\"值得记录的体验\"，品牌已经超越了零售的范畴。

Costco的模式对中国本土零售的启示：性价比不必与\"低端\"绑定，品质把关+会员机制+极简SKU策略可以在任何市场建立高溢价的\"省钱感\"品牌。`,
      en: `Costco has only one core business secret: its real product is not merchandise — it's membership.

Costco defines itself as 'serving members' rather than 'selling to consumers.' This slight difference in framing changes the entire brand logic. A traditional retailer's motivation is 'sell more'; Costco's motivation is 'make members feel the annual fee was worth it.' These two motivations produce completely different behaviors and cultures.

Another genius of the membership model is identity-formation: 'Costco member' is a label consumers actively claim. It means 'I am smart enough to know where to spend money.' When consumers put their Costco card in their wallet, they're placing an intellectual identity card there, not a discount card.

In the Chinese market, Costco's entry produced a unique phenomenon: consumers turned going to Costco into a social activity, with queuing and free samples becoming part of the experience. This proves the cross-cultural portability of mental availability — when consumers actively turn shopping into 'an experience worth recording,' the brand has transcended the retail category.

Costco's model's lesson for Chinese retail: value doesn't need to be tied to 'low-end.' Quality control + membership mechanics + minimal SKU strategy can build a high-prestige 'saving money' brand in any market.`,
    },
    articleType: "brand",
    market: ["northAmerica", "china"],
    psychologyIds: ["value", "trust", "security", "convenience", "habit", "belonging"],
    brandIds: ["costco"],
    campaignIds: [],
    frameworkIds: ["brand-equity", "mental-availability", "retention-loop"],
    tags: ["Costco", "membership", "value-brand", "retail", "China-expansion"],
    publishedAt: "2025-05-08",
    readingTime: { zh: "7分钟", en: "7 min" },
    languageAvailability: { zh: true, en: true },
    featured: false,
  },
  {
    id: "art-005",
    title: {
      zh: "稀缺感的设计：从限量版到社交货币",
      en: "Designing Scarcity: From Limited Editions to Social Currency",
    },
    subtitle: {
      zh: "为什么人们愿意为\"得不到\"付更多",
      en: "Why people pay more for what they cannot easily have",
    },
    summary: {
      zh: "稀缺感是现代消费中最被刻意设计的心理体验之一。本文从行为经济学出发，分析稀缺如何被产品化，以及中美两个市场对稀缺逻辑的不同反应。",
      en: "Scarcity is one of the most deliberately engineered psychological experiences in modern consumption. Starting from behavioral economics, this piece analyzes how scarcity has been productized, and how Chinese and American markets respond differently to scarcity logic.",
    },
    content: {
      zh: `稀缺感的核心是损失厌恶，而非欲望本身。

Kahneman和Tversky的研究证明：失去某物的痛苦，是得到同等价值事物的愉悦的2倍。这意味着\"你可能得不到\"比\"你可以拥有\"更有力量。限量版的设计本质是把一个普通产品包裹进\"有可能错过\"的叙事框架中。

中国市场对稀缺逻辑的接受度极高，原因是多维的：竞争性强的社会文化使\"得到别人得不到的东西\"成为一种社会资本；社交媒体的可见性使稀缺品的拥有可以被展示；二级市场的繁荣使稀缺品有了保值乃至增值的预期。

北美的稀缺逻辑更多集中在文化圈层：球鞋文化的限量发售创造了一个具有流动性的文化资产市场。Supreme的限量策略使每周四的发售成为全球同步的文化事件。但与中国不同，北美的稀缺消费更强调\"圈内人\"认知——普通人不懂的东西，才是真正的稀缺。

为品牌设计稀缺感的三个原则：一，稀缺必须是真实的（虚假稀缺会摧毁信任）；二，稀缺需要有社交可见性（没人看到的稀缺没有价值）；三，稀缺必须配合对应的文化叙事（稀缺本身不能是目的，而是某种\"更大价值\"的证明）。`,
      en: `The core of scarcity is loss aversion, not desire itself.

Kahneman and Tversky's research proved that the pain of losing something is twice the pleasure of gaining an equivalent value. This means 'you might not get it' is more powerful than 'you can have it.' The design of limited editions is essentially wrapping an ordinary product in the narrative frame of 'you might miss out.'

China's market is highly receptive to scarcity logic for multiple reasons: competitive social culture makes 'getting what others cannot' a form of social capital; social media visibility allows scarce item ownership to be displayed; a thriving secondary market creates expectations of value preservation or appreciation.

North America's scarcity logic focuses more on cultural tribe membership: sneaker culture's limited releases created a liquid cultural asset market. Supreme's limited release strategy made Thursday drops a globally synchronized cultural event. But unlike China, North American scarcity consumption emphasizes 'insider' recognition — things that ordinary people don't understand are the truly scarce.

Three principles for designing scarcity for brands: First, scarcity must be real (false scarcity destroys trust); second, scarcity needs social visibility (scarcity no one can see has no value); third, scarcity must be paired with a corresponding cultural narrative (scarcity itself cannot be the purpose — it must be proof of some 'greater value').`,
    },
    articleType: "psychology",
    market: ["china", "northAmerica", "global"],
    psychologyIds: ["scarcity", "fomo", "status", "social-proof", "nostalgia"],
    brandIds: ["pop-mart", "nike"],
    campaignIds: ["labubu-phenomenon", "mixue-ipo"],
    frameworkIds: ["purchase-funnel", "retention-loop"],
    tags: ["scarcity", "loss-aversion", "limited-edition", "behavioral-economics"],
    publishedAt: "2025-05-01",
    readingTime: { zh: "8分钟", en: "8 min" },
    languageAvailability: { zh: true, en: true },
    featured: false,
  },
  {
    id: "art-006",
    title: {
      zh: "从兴趣到身份：Z世代的消费新逻辑",
      en: "From Interest to Identity: The New Consumption Logic of Gen Z",
    },
    subtitle: {
      zh: "当消费变成自我表达，品牌必须成为信仰体系的一部分",
      en: "When consumption becomes self-expression, brands must become part of a belief system",
    },
    summary: {
      zh: "Z世代不是在\"买东西\"，而是在\"成为某种人\"。这一代消费者对品牌的真实性、立场和圈层认同要求极高，他们可以是最忠诚的粉丝，也可以是最彻底的反对者。",
      en: "Gen Z isn't 'buying things' — they're 'becoming someone.' This generation of consumers has extremely high expectations for brand authenticity, stance, and tribe recognition. They can be the most loyal fans or the most complete opponents.",
    },
    content: {
      zh: `Z世代和千禧一代最根本的消费差异在于：千禧一代是为\"拥有\"而购买，Z世代是为\"成为\"而购买。

这一转变有深刻的社会背景。Z世代成长于信息过载的时代，他们从小学会了过滤噪音、识别真伪、选择与自己价值观一致的品牌。对他们来说，购买一个品牌是一次\"价值观投票\"，不只是一次消费决策。

这意味着品牌必须有\"立场\"。不是政治立场（这会分裂受众），而是对某种生活哲学的坚守。Lululemon的立场是\"成为更好的自己\"，Nike的立场是\"每个人都是运动员\"，Alo Yoga的立场是\"wellness不是奢侈，是必需\"。这些立场不是广告语，而是品牌的道德核心。

Z世代对\"表演性真实\"的免疫能力极强。他们能很快识别一个品牌是真的在实践这些立场，还是在进行立场消费。品牌一旦被贴上\"虚伪\"的标签，Z世代会用取消（Cancel）而非投诉来表达。

中美Z世代的差异：中国Z世代的消费圈层化程度更高（二次元、国风、骑行圈各自独立），北美Z世代的品牌立场政治化程度更高（LGBTQ+支持、可持续性等议题更显性）。但两者的共同点是：他们都不想为\"普通\"买单。`,
      en: `The fundamental consumption difference between Gen Z and Millennials is: Millennials buy to 'own,' Gen Z buys to 'become.'

This shift has deep social background. Gen Z grew up in an era of information overload, learning from childhood to filter noise, identify authenticity, and choose brands aligned with their values. For them, buying a brand is a 'values vote,' not just a consumption decision.

This means brands must have a 'stance.' Not a political stance (which would split audiences), but a commitment to a certain life philosophy. Lululemon's stance is 'become a better version of yourself,' Nike's is 'everyone is an athlete,' Alo Yoga's is 'wellness is not a luxury, it's a necessity.' These stances aren't taglines — they're the moral core of the brand.

Gen Z's immunity to 'performed authenticity' is extremely strong. They can quickly identify whether a brand is genuinely practicing these stances or engaging in stance consumption. Once a brand gets labeled 'hypocritical,' Gen Z responds with cancellation, not complaints.

China vs North America Gen Z differences: Chinese Gen Z has higher consumption tribalization (ACG, guofeng, cycling communities are more separate); North American Gen Z's brand stance politicization is more pronounced (LGBTQ+ support, sustainability issues are more visible). But both share a common point: neither wants to pay for 'ordinary.'`,
    },
    articleType: "research",
    market: ["china", "northAmerica", "global"],
    psychologyIds: ["identity", "self-expression", "authenticity", "belonging", "community", "achievement"],
    brandIds: ["lululemon", "alo-yoga", "nike"],
    campaignIds: ["city-walk"],
    frameworkIds: ["jobs-to-be-done", "brand-equity", "customer-journey"],
    tags: ["Gen-Z", "identity", "values", "authenticity", "China-vs-NA"],
    publishedAt: "2025-05-12",
    readingTime: { zh: "9分钟", en: "9 min" },
    languageAvailability: { zh: true, en: true },
    featured: true,
  },
];
