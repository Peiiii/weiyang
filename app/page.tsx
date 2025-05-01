import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@/components/ui/link"
import { Image } from "@/components/ui/image"
import { BookOpen, Brain, MessageSquare, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">语文学习平台</h1>
          <p className="text-muted-foreground text-lg">AI时代的语文学习，大道至简</p>
        </header>

        {/* AI导师主推入口 */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-md overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>推荐入口</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">AI语文导师</h2>
                <p className="text-muted-foreground mb-6">
                  个性化学习指导，解答疑问，推荐学习内容，提供即时反馈，让语文学习更高效、更有趣。
                </p>
                <Button asChild size="lg" className="w-full md:w-auto">
                  <Link href="/ai-tutor">
                    <Sparkles className="mr-2 h-4 w-4" />
                    开始对话
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image src="/ai-tutor-illustration.png" alt="AI导师插图" fill className="object-cover" />
              </div>
            </div>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">其他学习模块</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <Link href="/reading" className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-2">阅读理解</h2>
                  <p className="text-muted-foreground">精选文章，智能解析，提升阅读理解能力</p>
                </div>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <Link href="/writing" className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-green-50 flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-2">写作辅导</h2>
                  <p className="text-muted-foreground">AI写作指导，个性化反馈，提升写作水平</p>
                </div>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <Link href="/vocabulary" className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-purple-50 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-purple-500" />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-2">词汇积累</h2>
                  <p className="text-muted-foreground">智能词汇学习，记忆优化，扩充词汇量</p>
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
