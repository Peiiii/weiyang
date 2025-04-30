import type { Poem, Concept, RecommendationItem, Exercise, Article } from "@/types/message"

// 诗词数据
export const poems: Record<string, Poem> = {
  静夜思: {
    id: "jingyesi",
    title: "静夜思",
    author: "李白",
    dynasty: "唐代",
    content: "床前明月光，\n疑是地上霜。\n举头望明月，\n低头思故乡。",
    translation: "床前明亮的月光，好像地上的一层霜。抬头望着那轮明月，低头想念我的故乡。",
    analysis:
      "《静夜思》是唐代诗人李白所作的一首五言古诗，是中国最为著名的古诗之一。这首诗以独特的意境和朴素的语言，抒发了作者客居他乡的思乡之情。\n\n诗的前两句写眼前所见：床前的月光如同地上的霜。后两句写诗人的动作和心理：抬头看明月，低头思故乡。全诗语言朴素自然，意境优美，情感真挚，表达了游子思乡的普遍情感，因此千百年来广为传诵。",
    imageUrl: "/moonlit-mountain-river.png",
    tags: ["思乡", "月亮", "唐诗", "五言绝句"],
  },
  登鹳雀楼: {
    id: "dengguanquelou",
    title: "登鹳雀楼",
    author: "王之涣",
    dynasty: "唐代",
    content: "白日依山尽，\n黄河入海流。\n欲穷千里目，\n更上一层楼。",
    translation: "夕阳依傍着山峦慢慢地沉没，滔滔黄河朝着东海奔流。如果想要看得更远，那就再登上一层楼。",
    analysis:
      '《登鹳雀楼》是唐代诗人王之涣创作的一首七言绝句。诗人通过描绘登楼所见的壮丽景色，表达了豁达开朗的胸襟和积极向上的人生态度。\n\n前两句描绘了诗人登楼所见的自然景观：夕阳西下，黄河东流。后两句则表达了诗人的思想感悟：要想看得更远，就要登得更高。全诗气势磅礴，意境开阔，寓意深远, 被誉为"登楼诗"的典范。',
    imageUrl: "/yellow-river-vista.png",
    tags: ["山水", "黄河", "唐诗", "五言绝句"],
  },
  春晓: {
    id: "chunxiao",
    title: "春晓",
    author: "孟浩然",
    dynasty: "唐代",
    content: "春眠不觉晓，\n处处闻啼鸟。\n夜来风雨声，\n花落知多少。",
    translation: "春天里睡觉不知不觉天就亮了，四处都能听到鸟儿在鸣叫。想起昨夜里刮风下雨的声音，不知道落了多少花瓣。",
    analysis:
      "《春晓》是唐代诗人孟浩然创作的一首五言绝句。这首诗描绘了一个春天早晨的宁静景象和诗人的所思所感。\n\n首句写诗人春日酣睡，不知不觉天已破晓；次句写起床后听到四处鸟鸣；三、四句写诗人联想到昨夜的风雨，担心花朵凋零的情景。全诗语言清新自然，意境优美，表达了诗人对春天美好事物的珍惜和惋惜之情。",
    imageUrl: "/spring-dawn.png",
    tags: ["春天", "自然", "唐诗", "五言绝句"],
  },
  望庐山瀑布: {
    id: "wanglushanpubu",
    title: "望庐山瀑布",
    author: "李白",
    dynasty: "唐代",
    content: "日照香炉生紫烟，\n遥看瀑布挂前川。\n飞流直下三千尺，\n疑是银河落九天。",
    translation:
      "阳光照耀着香炉峰，升起一阵紫色的烟云。远远望去，瀑布像一条白练挂在山前的溪川上。那飞腾的水流从高处直泻下来，有三千尺之高，就像是银河从九天之上倾泻而下。",
    analysis:
      "《望庐山瀑布》是唐代诗人李白创作的一首七言绝句。这首诗生动地描绘了庐山瀑布的壮丽景象。\n\n首句写香炉峰在阳光照射下升起的紫烟；次句写远望瀑布如白练悬挂；三、四句用夸张的手法描绘瀑布的高度和气势，将其比作从九天落下的银河。全诗气势磅礴，想象丰富，体现了李白豪放的诗风和对自然的热爱。",
    imageUrl: "/lushan-waterfall.png",
    tags: ["山水", "瀑布", "唐诗", "七言绝句"],
  },
  山行: {
    id: "shanxing",
    title: "山行",
    author: "杜牧",
    dynasty: "唐代",
    content: "远上寒山石径斜，\n白云生处有人家。\n停车坐爱枫林晚，\n霜叶红于二月花。",
    translation:
      "远远地登上寒山，石头小路蜿蜒曲折，在白云生起的地方有人家。停下路旅，坐下来观赏傍晚枫树林的景色，霜染的枫叶比春天二月的花朵还要红艳。",
    analysis:
      "《山行》是唐代诗人杜牧创作的一首五言绝句。这首诗描绘了诗人在秋天出游山林的所见所感。\n\n首句写诗人沿着曲折的石径远登寒山；次句写山中有人家的景象；三、四句写诗人被晚秋枫林美景所吸引，停下来观赏霜染红叶。全诗通过对秋天山林景色的描绘，表达了诗人对大自然美景的赞美和热爱。特别是末句“霜叶红于二月花”，以秋景胜春景，点出了秋景的独特魅力。",
    imageUrl: "/autumn-mountain-path.png",
    tags: ["秋天", "山水", "唐诗", "五言绝句"],
  },
}

// 文学概念数据
export const concepts: Record<string, Concept> = {
  意象: {
    id: "yixiang",
    title: "意象",
    content:
      "意象是文学创作中具有特定情感色彩和象征意义的形象，是客观物象与主观情思的结合体。中国古典诗词中常见的意象包括月亮、梅花、松树等。",
    details:
      "意象是中国古典诗词的重要表现手法，通过具体可感的物象来表达抽象的情感和思想。在中国古典诗词中，意象不仅是描写的对象，更是情感的载体。诗人通过选择特定的意象，赋予其特定的情感色彩，从而表达自己的情感和思想。\n\n常见的意象有：\n1. 月亮：象征思乡、离别、孤独等情感\n2. 梅花：象征坚韧、高洁、傲霜斗雪的品格\n3. 松树：象征坚贞不屈、傲然挺立的精神\n4. 流水：象征时光流逝、生命短暂",
    imageUrl: "/misty-mountain-river.png",
    relatedLinks: [
      { id: "biyu", title: "比喻", type: "concept" },
      { id: "niren", title: "拟人", type: "concept" },
      { id: "jingyesi", title: "静夜思", type: "poem" },
    ],
    tags: ["文学手法", "诗歌创作", "古典文学"],
  },
  比喻: {
    id: "biyu",
    title: "比喻",
    content: "比喻是修辞手法的一种，通过把甲事物比作乙事物，以便更形象生动地表达甲事物的特征。",
    details:
      '比喻是常用的修辞手法，通过把一个事物比作另一个事物，借助人们熟悉的事物来说明不熟悉的事物，或者使抽象的事物具体化，从而使表达更加生动形象。\n\n比喻通常由本体、喻体和比喻词三部分组成。根据比喻词的有无，比喻可分为明喻、暗喻和借喻。\n\n例如：\n1. 明喻：她的眼睛像星星一样明亮。（有比喻词"像"）\n2. 暗喻：她星星般的眼睛。（无比喻词）\n3. 借喻：那两颗星星一直注视着我。（直接用喻体"星星"代替本体"眼睛"）',
    imageUrl: "/metaphor-illustration.png",
    relatedLinks: [
      { id: "yixiang", title: "意象", type: "concept" },
      { id: "niren", title: "拟人", type: "concept" },
      { id: "wanglushanpubu", title: "望庐山瀑布", type: "poem" },
    ],
    tags: ["修辞手法", "写作技巧", "语言表达"],
  },
  拟人: {
    id: "niren",
    title: "拟人",
    content: "拟人是一种修辞手法，把事物或抽象概念人格化，赋予其人的思想、情感、行为等特征。",
    details:
      '拟人是将自然物或抽象概念当作人来描写，赋予其人的特征、情感或行为，使表达更加生动形象。拟人可以使读者产生亲切感，增强文章的感染力。\n\n拟人的表现形式多样，可以是直接赋予事物人的行为，如"小草从地下钻出来"；也可以是赋予事物人的情感，如"花儿笑了"；还可以是赋予事物人的思想，如"树木在思考"。\n\n在古典诗词中，拟人手法常与其他修辞手法结合使用，创造出丰富的艺术效果。例如，"小荷才露尖尖角，早有蜻蜓立上头"中，将荷叶描写得如同一个害羞的少女，刚刚露出小脸，就有蜻蜓停在上面。',
    imageUrl: "/personification-illustration.png",
    relatedLinks: [
      { id: "biyu", title: "比喻", type: "concept" },
      { id: "yixiang", title: "意象", type: "concept" },
      { id: "chunxiao", title: "春晓", type: "poem" },
    ],
    tags: ["修辞手法", "写作技巧", "语言表达"],
  },
  意境: {
    id: "yijing",
    title: "意境",
    content: "意境是文学艺术作品中所创造的艺术境界，是情与景的融合，是主观情感与客观景物的统一。",
    details:
      '意境是中国古典美学的重要概念，是文学艺术作品中所创造的艺术境界。它是作者的情感与所描绘的景物融为一体，形成的一种特殊的艺术效果。\n\n意境的特点是含蓄深远，耐人寻味。它不是简单的景物描写，也不是直白的情感表达，而是通过景物的描绘，寄托作者的情感，使读者在欣赏作品时，能够感受到作者的情感，并产生共鸣。\n\n例如，王维的"空山新雨后，天气晚来秋。明月松间照，清泉石上流。"描绘了一幅空山新雨、明月松间、清泉石上的画面，营造出一种清新、宁静、幽远的意境，表达了诗人对自然的热爱和对隐居生活的向往。',
    imageUrl: "/artistic-conception.png",
    relatedLinks: [
      { id: "yixiang", title: "意象", type: "concept" },
      { id: "jingyesi", title: "静夜思", type: "poem" },
      { id: "dengguanquelou", title: "登鹳雀楼", type: "poem" },
    ],
    tags: ["文学理论", "美学概念", "诗歌鉴赏"],
  },
  对偶: {
    id: "duiou",
    title: "对偶",
    content: "对偶是汉语诗词常用的一种修辞格式，指两个结构相同、词性相对、意义相关的句子并列使用，形成工整对称的格式。",
    details:
      '对偶是中国古典诗词中常用的一种表达方式，特别在律诗和骈文中广泛应用。对偶讲究句式整齐、字数相等、声调相谐、意义相关。\n\n对偶可以分为几种类型：\n\n1. 正对：词性完全对应，如"海上生明月，天涯共此时"（张九龄《望月怀远》）\n\n2. 反对：词性相反，如"花间一壶酒，独酌无相亲"（李白《月下独酌》）\n\n3. 串对：多句连续对应，如"朱门酒肉臭，路有冻死骨"（杜甫《自京赴奉先县》）\n\n对偶能够使文句音律和谐、结构严谨、内容丰富，加强语言的表现力和艺术感染力。',
    imageUrl: "/antithetical-couplet.png",
    relatedLinks: [
      { id: "yixiang", title: "意象", type: "concept" },
      { id: "jingyesi", title: "静夜思", type: "poem" },
      { id: "shanxing", title: "山行", type: "poem" },
    ],
    tags: ["修辞手法", "诗歌创作", "古典文学"],
  },
}

// 练习数据
export const exercises: Record<string, Exercise> = {
  "poem-analysis": {
    id: "poem-analysis",
    title: "古诗鉴赏练习",
    type: "multiplechoice",
    difficulty: "medium",
    content:
      "阅读下面这首诗：\n\n《静夜思》\n李白\n\n床前明月光，\n疑是地上霜。\n举头望明月，\n低头思故乡。\n\n请问：这首诗主要表达了作者什么样的情感？",
    options: ["思念亲人的情感", "对月亮美丽的赞美", "对故乡的思念之情", "对霜雪美景的赞叹"],
    answer: "对故乡的思念之情",
    explanation:
      "这首诗通过描绘月夜思乡的情景，表达了诗人客居他乡对故乡的思念之情。诗中'低头思故乡'直接点明了主题，表达了作者浓烈的乡愁。",
    imageUrl: "/moonlit-mountain-river.png",
    tags: ["古诗鉴赏", "李白", "思乡"],
  },
  "metaphor-identification": {
    id: "metaphor-identification",
    title: "比喻修辞手法识别",
    type: "multiplechoice",
    difficulty: "easy",
    content: "以下诗句中，使用了比喻修辞手法的是：",
    options: [
      "日出江花红胜火，春来江水绿如蓝",
      "床前明月光，疑是地上霜",
      "野火烧不尽，春风吹又生",
      "落霞与孤鹜齐飞，秋水共长天一色",
    ],
    answer: ["日出江花红胜火，春来江水绿如蓝", "床前明月光，疑是地上霜"],
    explanation:
      "选项A中'红胜火'和'绿如蓝'都是比喻，分别将江花的红比作火的颜色，将江水的绿比作蓝草的颜色；选项B中'疑是地上霜'是将月光比作霜。而选项C和D没有使用比喻修辞。",
    tags: ["修辞手法", "比喻"],
  },
  "poem-recitation": {
    id: "poem-recitation",
    title: "古诗填空",
    type: "fillblank",
    difficulty: "easy",
    content: "请填写《登鹳雀楼》中的空缺句子：\n\n白日依山尽，\n黄河入海流。\n欲穷千里目，\n________。",
    answer: "更上一层楼",
    explanation:
      "《登鹳雀楼》是唐代诗人王之涣的作品，全诗为'白日依山尽，黄河入海流。欲穷千里目，更上一层楼。'最后一句表达了要看得更远就要登得更高的哲理。",
    tags: ["古诗填空", "王之涣"],
  },
  "writing-prompt": {
    id: "writing-prompt",
    title: "以'春天'为主题的作文",
    type: "essay",
    difficulty: "medium",
    content:
      "请以'春天的记忆'为题，写一篇400字左右的记叙文，描述你对春天的印象或者某个春天的特殊记忆。\n\n要求：\n1. 紧扣主题\n2. 描写生动具体\n3. 感情真挚\n4. 语言流畅",
    tags: ["写作练习", "记叙文", "春天"],
  },
}

// 文章数据
export const articles: Record<string, Article> = {
  "writing-skills": {
    id: "writing-skills",
    title: "如何提高写作水平：从日常积累开始",
    author: "王语文",
    source: "语文教学月刊",
    content:
      '写作能力的提升不是一蹴而就的，它需要持续的积累和练习。本文将从日常积累、阅读习惯、写作技巧等方面，为大家提供一些实用的建议。\n\n首先，日常积累是写作的基础。俗话说"读书破万卷，下笔如有神"，丰富的阅读经历可以为我们提供充足的素材和灵感。建议大家养成随时记录的习惯，可以使用笔记本或手机APP记录下生活中的所见所闻、所思所想。这些零散的记录可能在未来的某一天成为你写作的珍贵素材。\n\n其次，广泛阅读是提高写作能力的捷径。阅读不同类型的文章可以让我们接触到不同的写作风格和表达方式。建议大家除了阅读文学作品外，也可以尝试阅读一些优秀的新闻报道、科普文章或者学术论文，从中学习不同的写作技巧。\n\n再次，定期练习是提高写作能力的必经之路。可以给自己设定一个写作计划，如每周写一篇短文或日记。开始时可能会感到困难，但随着坚持，你会发现自己的写作越来越流畅。\n\n此外，学习一些基本的写作技巧也是很有必要的。例如，如何开篇引人入胜，如何使用修辞手法丰富文章，如何组织文章结构等。这些技巧可以通过阅读相关书籍或参加写作课程来学习。\n\n最后，不要害怕分享和接受批评。将自己的作品分享给他人，听取他们的反馈和建议，可以帮助我们发现自己的不足并加以改进。\n\n总之，提高写作水平需要持之以恒的努力，但只要坚持日常积累、广泛阅读、定期练习、学习技巧并勇于接受批评，相信你的写作能力一定会有显著的提升。',
    summary:
      "本文从日常积累、阅读习惯、写作技巧等角度，提供提高写作水平的实用建议。强调了持续积累、广泛阅读、定期练习、学习技巧和接受反馈的重要性。",
    imageUrl: "/writing-desk.png",
    relatedContent: [
      { id: "biyu", title: "比喻修辞手法", type: "concept" },
      { id: "composition-guide", title: "中学生作文指导", type: "article" },
      { id: "reading-strategies", title: "高效阅读策略", type: "article" },
    ],
    tags: ["写作技巧", "学习方法", "语文学习"],
  },
  "composition-guide": {
    id: "composition-guide",
    title: "中学生作文指导：如何写好记叙文",
    author: "李教授",
    source: "中学语文教学资源",
    content:
      "记叙文是中学生最常接触的文体之一，它主要用来叙述事件、描写景物、刻画人物，表达作者的思想感情。一篇好的记叙文应该具备清晰的结构、生动的描写和深刻的情感。本文将从这几个方面为大家提供写好记叙文的建议。\n\n首先，记叙文的结构应当清晰。一般来说，记叙文包括开头、主体和结尾三个部分。开头要简明扼要，点明文章的主题或引起读者的兴趣；主体部分是文章的核心，要详细叙述事件的经过，可以按照时间顺序或空间顺序来组织；结尾则要照应开头，升华主题，给读者留下深刻的印象。\n\n其次，生动的描写能够增强文章的表现力。在记叙文中，我们可以运用各种修辞手法和描写方法来使内容更加生动形象。例如，运用比喻、拟人等修辞手法可以使抽象的概念具体化；运用细节描写可以增强文章的真实感；运用心理描写可以展示人物的内心世界。\n\n再次，深刻的情感是记叙文的灵魂。记叙文不仅仅是简单地叙述事件，更重要的是通过事件表达作者的思想感情。因此，在写作过程中要注意情感的表达，使读者能够感受到你的喜怒哀乐，产生共鸣。\n\n此外，语言表达也是记叙文的重要组成部分。好的记叙文应该语言流畅，表达准确，避免使用过于口语化或过于书面化的表达。同时，要注意语言的多样性，避免重复使用相同的词语或句式。\n\n最后，写作前的准备工作也很重要。在动笔之前，可以先列一个提纲，明确文章的主题和结构，这样在写作过程中才不会偏离主题。同时，也可以准备一些素材，如名言警句、典型事例等，以丰富文章内容。\n\n总之，写好记叙文需要我们注意结构安排、描写方法、情感表达和语言运用等多个方面。",
    summary:
      "本文从中学生作文的角度，详细阐述了如何写好记叙文，包括清晰的结构、生动的描写、深刻的情感和准确的语言表达。",
    imageUrl: "/composition-guide.png",
    relatedContent: [
      { id: "writing-skills", title: "如何提高写作水平", type: "article" },
      { id: "biyu", title: "比喻修辞手法", type: "concept" },
      { id: "niren", title: "拟人修辞手法", type: "concept" },
    ],
    tags: ["写作指导", "记叙文", "语文学习"],
  },
  "reading-strategies": {
    id: "reading-strategies",
    title: "高效阅读策略：提升阅读理解能力",
    author: "张阅读",
    source: "教育科学研究",
    content:
      "阅读理解能力是学习和生活中至关重要的能力。本文将介绍一些高效的阅读策略，帮助读者提升阅读理解能力。\n\n首先，明确阅读目的。在开始阅读之前，要明确自己阅读的目的，是为了获取信息、学习知识，还是为了娱乐消遣。不同的阅读目的会影响阅读的方式和重点。\n\n其次，快速浏览全文。在精读之前，可以先快速浏览全文，了解文章的整体结构和主要内容。这有助于在后续的精读过程中更好地把握文章的重点。\n\n再次，精读重点段落。在快速浏览的基础上，可以选择文章中的重点段落进行精读。精读时要注意理解段落的主题句和支撑句，把握段落的中心思想。\n\n此外，做好阅读笔记。在阅读过程中，可以随时记录下自己的想法和疑问，或者摘录文章中的重要信息。这有助于加深对文章的理解和记忆。\n\n同时，积极思考和提问。在阅读过程中，要积极思考文章的内容，尝试回答自己提出的问题。这有助于激发阅读兴趣，提高阅读效果。\n\n最后，进行总结和反思。在阅读结束后，要对文章进行总结和反思，梳理文章的逻辑结构和主要观点。这有助于巩固阅读成果，提升阅读理解能力。\n\n总之，提升阅读理解能力需要掌握一些高效的阅读策略，包括明确阅读目的、快速浏览全文、精读重点段落、做好阅读笔记、积极思考和提问、进行总结和反思等。",
    summary:
      "本文介绍了高效阅读策略，包括明确阅读目的、快速浏览全文、精读重点段落、做好阅读笔记、积极思考和提问、进行总结和反思等，旨在帮助读者提升阅读理解能力。",
    imageUrl: "/reading-glasses.png",
    relatedContent: [
      { id: "writing-skills", title: "如何提高写作水平", type: "article" },
      { id: "composition-guide", title: "中学生作文指导", type: "article" },
    ],
    tags: ["阅读方法", "学习策略", "语文学习"],
  },
}

const aiResponses = [
  "这是一个有趣的问题！",
  "让我想想...",
  "我不太确定，但我可以帮你查找一下。",
  "根据我的知识...",
  "这取决于...",
  "我建议你...",
  "这是一个很好的问题，我需要更多信息。",
  "我正在努力学习和进步。",
  "很高兴能帮助你！",
  "这个问题很有深度。",
]

export const getAiResponse = (query: string): string => {
  const randomIndex = Math.floor(Math.random() * aiResponses.length)
  return aiResponses[randomIndex] + " " + generateAdditionalContent(query)
}

const generateAdditionalContent = (query: string): string => {
  if (query.includes("诗")) {
    return "古诗词是中国文化的瑰宝，多读多背诵有助于提高文学素养。"
  } else if (query.includes("写作")) {
    return "写作需要多加练习，可以从模仿开始，逐渐形成自己的风格。"
  } else if (query.includes("阅读")) {
    return "阅读是提高语文水平的关键，建议选择自己感兴趣的书籍开始阅读。"
  } else {
    return "我会尽力帮助你找到答案。"
  }
}

export const getRecommendations = (): RecommendationItem[] => {
  return [
    {
      id: "writing-skills",
      title: "如何提高写作水平",
      description: "掌握写作技巧，提升表达能力",
      link: "/learning/writing-skills",
      type: "article",
    },
    {
      id: "yixiang",
      title: "什么是意象",
      description: "了解中国古典诗词中的意象",
      link: "/learning/imagery",
      type: "concept",
    },
    {
      id: "chunxiao",
      title: "春晓",
      description: "学习孟浩然的经典诗歌",
      link: "/reading/poems/chunxiao",
      type: "poem",
    },
  ]
}

export const searchContent = (query: string): { poems: Poem[]; concepts: Concept[] } => {
  const searchTerm = query.toLowerCase()
  const matchedPoems = Object.values(poems).filter(
    (poem) =>
      poem.title.toLowerCase().includes(searchTerm) ||
      poem.author.toLowerCase().includes(searchTerm) ||
      poem.content.toLowerCase().includes(searchTerm),
  )

  const matchedConcepts = Object.values(concepts).filter(
    (concept) =>
      concept.title.toLowerCase().includes(searchTerm) ||
      concept.content.toLowerCase().includes(searchTerm) ||
      concept.details.toLowerCase().includes(searchTerm),
  )

  return { poems: matchedPoems, concepts: matchedConcepts }
}
