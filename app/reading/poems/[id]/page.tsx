import { ArrowLeft } from "lucide-react"
import { Link } from "@/components/ui/link"
import { Image } from "@/components/ui/image"
import { Button } from "@/components/ui/button"

interface Poem {
  id: string
  title: string
  author: string
  dynasty: string
  content: string
  translation: string
  analysis: string
  imageUrl: string
}

const poems: Record<string, Poem> = {
  "2": {
    id: "2",
    title: "静夜思",
    author: "李白",
    dynasty: "唐代",
    content: "床前明月光，\n疑是地上霜。\n举头望明月，\n低头思故乡。",
    translation: "床前明亮的月光，好像地上的一层霜。抬头望着那轮明月，低头想念我的故乡。",
    analysis:
      "《静夜思》是唐代诗人李白所作的一首五言古诗，是中国最为著名的古诗之一。这首诗以独特的意境和朴素的语言，抒发了作者客居他乡的思乡之情。\n\n诗的前两句写眼前所见：床前的月光如同地上的霜。后两句写诗人的动作和心理：抬头看明月，低头思故乡。全诗语言朴素自然，意境优美，情感真挚，表达了游子思乡的普遍情感，因此千百年来广为传诵。",
    imageUrl: "/moonlit-mountain-river.png",
  },
  "4": {
    id: "4",
    title: "登鹳雀楼",
    author: "王之涣",
    dynasty: "唐代",
    content: "白日依山尽，\n黄河入海流。\n欲穷千里目，\n更上一层楼。",
    translation: "夕阳依傍着山峦慢慢地沉没，滔滔黄河朝着东海奔流。如果想要看得更远，那就再登上一层楼。",
    analysis:
      '《登鹳雀楼》是唐代诗人王之涣创作的一首七言绝句。诗人通过描绘登楼所见的壮丽景色，表达了豁达开朗的胸襟和积极向上的人生态度。\n\n前两句描绘了诗人登楼所见的自然景观：夕阳西下，黄河东流。后两句则表达了诗人的思想感悟：要想看得更远，就要登得更高。全诗气势磅礴，意境开阔，寓意深远, 被誉为"登楼诗"的典范。',
    imageUrl: "/yellow-river-vista.png",
  },
}

export default function PoemDetailPage({ params }: { params: { id: string } }) {
  const poem = poems[params.id]

  if (!poem) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">未找到该诗词</h1>
          <Button asChild>
            <Link href="/reading">返回阅读页面</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/reading" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回阅读页面
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative h-64 w-full mb-8 rounded-xl overflow-hidden">
            <Image src={poem.imageUrl || "/placeholder.svg"} alt={poem.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{poem.title}</h1>
              <p className="text-xl opacity-90">
                {poem.dynasty} · {poem.author}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">原文</h2>
                <div className="text-xl leading-relaxed whitespace-pre-line">{poem.content}</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">译文</h2>
                <div className="text-lg leading-relaxed">{poem.translation}</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">赏析</h2>
                <div className="text-lg leading-relaxed whitespace-pre-line">{poem.analysis}</div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-4">
                <h2 className="text-xl font-bold mb-4">相关推荐</h2>
                <div className="space-y-3">
                  <Link href="/reading/poems/2" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                    <h3 className="font-medium">《静夜思》</h3>
                    <p className="text-sm text-muted-foreground">李白</p>
                  </Link>
                  <Link href="/reading/poems/4" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                    <h3 className="font-medium">《登鹳雀楼》</h3>
                    <p className="text-sm text-muted-foreground">王之涣</p>
                  </Link>
                  <Link href="/reading/poems/5" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                    <h3 className="font-medium">《望庐山瀑布》</h3>
                    <p className="text-sm text-muted-foreground">李白</p>
                  </Link>
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">
                      查看更多
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
