import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"

export default function WritingPage() {
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
          <h1 className="text-3xl font-bold tracking-tight mb-2">写作辅导</h1>
          <p className="text-muted-foreground">AI写作指导，个性化反馈，提升写作水平</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          <div className="md:col-span-2">
            <Card className="border-0 shadow-sm h-full">
              <CardHeader>
                <CardTitle>写作区</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="在这里开始你的写作..." className="min-h-[300px] resize-none" />
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">提示：写作完成后点击"获取反馈"</div>
                <Button className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  获取反馈
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card className="border-0 shadow-sm h-full">
              <CardHeader>
                <CardTitle>写作提示</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">今日主题</h3>
                  <p className="text-muted-foreground">描述一个让你难忘的春天</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">写作要点</h3>
                  <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                    <li>运用生动的描写，展现春天的特点</li>
                    <li>可以从视觉、听觉、嗅觉等多角度描写</li>
                    <li>结合个人感受，表达对春天的情感</li>
                    <li>注意文章结构的完整性</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">参考词汇</h3>
                  <div className="flex flex-wrap gap-2">
                    {["生机勃勃", "万物复苏", "春暖花开", "莺歌燕舞", "春风拂面", "绿意盎然"].map((word) => (
                      <span key={word} className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-sm">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
