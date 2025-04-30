"use client"

import Image from "next/image"
import { BookOpen, FileText, GraduationCap, BookMarked } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Input } from "@/components/ui/input"

interface WelcomeContentProps {
  onPoemClick?: (poemId: string) => void
  onConceptClick?: (conceptId: string) => void
  onExerciseClick?: (exerciseId: string) => void
  onArticleClick?: (articleId: string) => void
}

export function WelcomeContent({ onPoemClick, onConceptClick, onExerciseClick, onArticleClick }: WelcomeContentProps) {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-6">
      <div className="relative h-48 w-full rounded-xl overflow-hidden">
        <Image src="/ai-tutor-illustration.png" alt="AI导师" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h1 className="text-2xl font-bold mb-1">欢迎使用AI语文导师</h1>
          <p className="text-lg opacity-90">您的个性化学习助手</p>
        </div>
      </div>

      <div className="relative">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="搜索诗词、文章、概念..."
          className="pl-10"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-bold mb-3">今日推荐</h2>
        <div className="space-y-2">
          <div
            className="flex items-center p-2 rounded-md hover:bg-muted cursor-pointer"
            onClick={() => onPoemClick && onPoemClick("jingyesi")}
          >
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium">《静夜思》- 李白</p>
              <p className="text-sm text-muted-foreground">唐代经典古诗</p>
            </div>
          </div>
          <div
            className="flex items-center p-2 rounded-md hover:bg-muted cursor-pointer"
            onClick={() => onConceptClick && onConceptClick("yixiang")}
          >
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <GraduationCap className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium">意象</p>
              <p className="text-sm text-muted-foreground">中国古典诗词中的重要表现手法</p>
            </div>
          </div>
          <div
            className="flex items-center p-2 rounded-md hover:bg-muted cursor-pointer"
            onClick={() => onExerciseClick && onExerciseClick("poem-analysis")}
          >
            <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <FileText className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="font-medium">古诗鉴赏练习</p>
              <p className="text-sm text-muted-foreground">提升诗词理解能力</p>
            </div>
          </div>
          <div
            className="flex items-center p-2 rounded-md hover:bg-muted cursor-pointer"
            onClick={() => onArticleClick && onArticleClick("writing-skills")}
          >
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <BookMarked className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="font-medium">如何提高写作水平</p>
              <p className="text-sm text-muted-foreground">写作技巧指南</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold mb-3">学习进度</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">古诗学习</span>
                <span className="text-xs text-muted-foreground">65%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">写作技巧</span>
                <span className="text-xs text-muted-foreground">40%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "40%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">文学概念</span>
                <span className="text-xs text-muted-foreground">75%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-2">
              查看完整学习记录
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold mb-3">学习计划</h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs mr-2">
                1
              </div>
              <span>完成《静夜思》的赏析</span>
            </div>
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs mr-2">
                2
              </div>
              <span>学习"意象"的概念和应用</span>
            </div>
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs mr-2">
                3
              </div>
              <span>完成一篇短文写作练习</span>
            </div>
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs mr-2">
                4
              </div>
              <span>复习今日学习内容</span>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-2">
              查看完整计划
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-bold mb-3">使用指南</h2>
        <div className="space-y-2 text-base">
          <p>您可以向AI导师询问以下内容：</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>古诗词的解析和赏析</li>
            <li>文学概念和修辞手法</li>
            <li>写作技巧和指导</li>
            <li>阅读理解方法</li>
            <li>语文学习建议</li>
          </ul>
          <p className="mt-3">开始在左侧聊天框输入您的问题，AI导师将为您提供帮助！</p>
        </div>
      </div>
    </div>
  )
}
