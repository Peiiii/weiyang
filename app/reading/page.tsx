import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, Bookmark } from "lucide-react"
import Link from "next/link"

export default function ReadingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回首页
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">阅读理解</h1>
          <p className="text-muted-foreground">精选文章，智能解析，提升阅读理解能力</p>
        </header>

        <Tabs defaultValue="recommended" className="max-w-4xl">
          <TabsList className="mb-6">
            <TabsTrigger value="recommended">推荐阅读</TabsTrigger>
            <TabsTrigger value="classics">经典文学</TabsTrigger>
            <TabsTrigger value="modern">现代文学</TabsTrigger>
            <TabsTrigger value="saved">我的收藏</TabsTrigger>
          </TabsList>

          <TabsContent value="recommended" className="space-y-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </TabsContent>

          <TabsContent value="classics">
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">更多经典文学内容即将上线</p>
            </div>
          </TabsContent>

          <TabsContent value="modern">
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">更多现代文学内容即将上线</p>
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <div className="text-center py-12">
              <Bookmark className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">您尚未收藏任何文章</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

interface Article {
  id: string
  title: string
  author: string
  excerpt: string
  readingTime: number
  difficulty: "简单" | "中等" | "困难"
}

interface ArticleCardProps {
  article: Article
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription>{article.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{article.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{article.readingTime} 分钟</span>
          <span>难度: {article.difficulty}</span>
        </div>
        <Button asChild>
          <Link href={`/reading/${article.id}`}>开始阅读</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const articles: Article[] = [
  {
    id: "1",
    title: "荷塘月色",
    author: "朱自清",
    excerpt: "这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧...",
    readingTime: 10,
    difficulty: "中等",
  },
  {
    id: "2",
    title: "春",
    author: "朱自清",
    excerpt: "盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼...",
    readingTime: 8,
    difficulty: "简单",
  },
  {
    id: "3",
    title: "背影",
    author: "朱自清",
    excerpt: "我与父亲不相见已二年余了，我最不能忘记的是他的背影...",
    readingTime: 12,
    difficulty: "中等",
  },
]
