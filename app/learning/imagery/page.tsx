import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ImageryPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/ai-tutor" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回AI导师
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">意象</h1>
            <p className="text-muted-foreground">中国古典诗词中的重要表现手法</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">什么是意象？</h2>
                <div className="text-lg leading-relaxed space-y-4">
                  <p>
                    意象是文学创作中具有特定情感色彩和象征意义的形象，是客观物象与主观情思的结合体。它是中国古典诗词的重要表现手法，通过具体可感的物象来表达抽象的情感和思想。
                  </p>
                  <p>
                    在中国古典诗词中，意象不仅是描写的对象，更是情感的载体。诗人通过选择特定的意象，赋予其特定的情感色彩，从而表达自己的情感和思想。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">常见意象举例</h2>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="font-medium text-lg mb-2">月亮</h3>
                    <p>象征思乡、离别、孤独等情感。如李白《静夜思》中的"举头望明月，低头思故乡"。</p>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="font-medium text-lg mb-2">梅花</h3>
                    <p>象征坚韧、高洁、傲霜斗雪的品格。如王安石《梅花》中的"墙角数枝梅，凌寒独自开"。</p>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="font-medium text-lg mb-2">松树</h3>
                    <p>象征坚贞不屈、傲然挺立的精神。如杜甫《望岳》中的"会当凌绝顶，一览众山小"。</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">流水</h3>
                    <p>象征时光流逝、生命短暂。如李白《将进酒》中的"君不见黄河之水天上来，奔流到海不复回"。</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">意象的作用</h2>
                <div className="text-lg leading-relaxed space-y-4">
                  <p>
                    1. <strong>情景交融</strong>：通过意象将客观景物与主观情感融为一体，达到情景交融的艺术效果。
                  </p>
                  <p>
                    2. <strong>含蓄表达</strong>：通过意象的象征性，含蓄地表达诗人的情感和思想，避免直白叙述。
                  </p>
                  <p>
                    3. <strong>丰富意境</strong>：通过意象的组合，营造丰富多彩的诗歌意境，增强诗歌的艺术感染力。
                  </p>
                  <p>
                    4. <strong>传承文化</strong>
                    ：某些意象在长期的文学创作中形成了固定的象征意义，成为中国传统文化的重要组成部分。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-4 space-y-6">
                <Card className="border-0 shadow-sm overflow-hidden">
                  <div className="relative h-40 w-full">
                    <Image src="/moonlit-contemplation.png" alt="月亮意象" fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1">月亮意象</h3>
                    <p className="text-sm text-muted-foreground">
                      月亮是中国古典诗词中最常见的意象之一，常用来表达思乡之情。
                    </p>
                  </CardContent>
                </Card>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold mb-4">相关概念</h2>
                  <div className="space-y-2">
                    <Link href="/learning/metaphor" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                      <h3 className="font-medium">比喻</h3>
                      <p className="text-sm text-muted-foreground">修辞手法</p>
                    </Link>
                    <Link
                      href="/learning/personification"
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <h3 className="font-medium">拟人</h3>
                      <p className="text-sm text-muted-foreground">修辞手法</p>
                    </Link>
                    <Link
                      href="/learning/artistic-conception"
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <h3 className="font-medium">意境</h3>
                      <p className="text-sm text-muted-foreground">诗歌艺术特征</p>
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-lg font-bold mb-4">练习应用</h2>
                  <Button className="w-full mb-3">意象识别练习</Button>
                  <Button variant="outline" className="w-full">
                    创作练习
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
