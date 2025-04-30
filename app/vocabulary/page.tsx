import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, BookOpen, Check, ChevronRight, RotateCcw, Volume2 } from "lucide-react"
import Link from "next/link"

export default function VocabularyPage() {
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
          <h1 className="text-3xl font-bold tracking-tight mb-2">词汇积累</h1>
          <p className="text-muted-foreground">智能词汇学习，记忆优化，扩充词汇量</p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-medium">今日学习进度</h2>
              <span className="text-sm text-muted-foreground">5/20 词汇</span>
            </div>
            <Progress value={25} className="h-2" />
          </div>

          <Card className="border-0 shadow-sm mb-8">
            <CardHeader>
              <CardTitle className="text-center">当前词汇</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-4">惊心动魄</div>
              <Button variant="outline" size="icon" className="mb-6">
                <Volume2 className="h-5 w-5" />
              </Button>
              <div className="text-center space-y-4 max-w-md">
                <p className="text-muted-foreground">形容使人非常紧张、害怕或激动的场面或经历</p>
                <p className="italic">例句：这场比赛的最后时刻真是惊心动魄，观众都屏住了呼吸。</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
              <Button variant="outline" className="gap-2">
                <RotateCcw className="h-4 w-4" />
                再看一次
              </Button>
              <Button className="gap-2">
                <Check className="h-4 w-4" />
                已掌握
              </Button>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>词汇分类</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["成语", "诗词", "近义词", "反义词", "常用词"].map((category) => (
                  <Link
                    key={category}
                    href={`/vocabulary/category/${category}`}
                    className="flex items-center justify-between p-3 rounded-md hover:bg-muted"
                  >
                    <span>{category}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>学习统计</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>今日学习</span>
                  <span className="font-medium">5 词汇</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>本周学习</span>
                  <span className="font-medium">32 词汇</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>总计掌握</span>
                  <span className="font-medium">128 词汇</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>学习天数</span>
                  <span className="font-medium">14 天</span>
                </div>
                <div className="pt-2">
                  <Button variant="outline" className="w-full gap-2">
                    <BookOpen className="h-4 w-4" />
                    查看词汇本
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
