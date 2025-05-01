"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Send, BookOpen, Sparkles } from "lucide-react"
import { Link } from "@/components/ui/link"
import { useState, useRef, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

// 导入类型
import type { Message, RecommendationItem, ContentViewerData } from "@/types/message"

// 导入组件
import { MessageBubble } from "@/components/chat/message-bubble"
import { ContentArea } from "@/components/content-viewer/content-area"
import { ContentNavigator } from "@/components/content-navigator"

// 导入服务
import {
  poems,
  concepts,
  exercises,
  articles,
  getAiResponse,
  getRecommendations,
  searchContent,
} from "@/services/data-service"

export default function AiTutorPage() {
  // 状态管理
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      role: "assistant",
      type: "text",
      content:
        "你好！我是你的语文学习AI导师。我可以帮助你解答语文学习中的问题，提供写作指导，或者讨论任何与语文相关的话题。你想聊些什么？",
      timestamp: new Date(),
    },
  ])

  const [input, setInput] = useState("")
  const [contentViewer, setContentViewer] = useState<ContentViewerData>({
    type: "welcome",
    data: null,
    title: "欢迎使用AI语文导师",
  })

  console.log("[AITutorPage] contentViewer", contentViewer)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // 自动滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // 处理发送消息
  const handleSend = () => {
    if (!input.trim()) return

    // 添加用户消息
    const userMessage: Message = {
      id: uuidv4(),
      role: "user",
      type: "text",
      content: input,
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setInput("")

    // 模拟AI响应
    setTimeout(() => {
      let aiResponse: Message | null = null

      // 搜索相关内容
      const searchResults = searchContent(input)

      // 检查用户是否在询问古诗
      if (searchResults.poems.length > 0) {
        const poem = searchResults.poems[0]
        aiResponse = {
          id: uuidv4(),
          role: "assistant",
          type: "poem-card",
          title: poem.title,
          author: poem.author,
          dynasty: poem.dynasty,
          content: poem.content,
          translation: poem.translation,
          imageUrl: poem.imageUrl,
          timestamp: new Date(),
        }

        // 自动更新内容查看区域
        setTimeout(() => {
          setContentViewer({
            type: "poem",
            data: poem,
            title: `${poem.title} - ${poem.author}`,
          })
        }, 500)
      }
      // 检查用户是否在询问文学概念
      else if (searchResults.concepts.length > 0) {
        const concept = searchResults.concepts[0]
        aiResponse = {
          id: uuidv4(),
          role: "assistant",
          type: "wiki-card",
          title: concept.title,
          content: concept.content,
          imageUrl: concept.imageUrl,
          relatedLinks: concept.relatedLinks?.map((link) => ({
            title: link.title,
            link: link.type === "concept" ? `/learning/${link.id}` : `/reading/poems/${link.id}`,
          })),
          timestamp: new Date(),
        }

        // 自动更新内容查看区域
        setTimeout(() => {
          setContentViewer({
            type: "concept",
            data: concept,
            title: concept.title,
          })
        }, 500)
      }

      // 默认文本响应
      if (!aiResponse) {
        aiResponse = {
          id: uuidv4(),
          role: "assistant",
          type: "text",
          content: getAiResponse(input),
          timestamp: new Date(),
        }

        // 对特定查询添加推荐
        if (input.includes("学习") || input.includes("推荐") || input.includes("建议")) {
          setTimeout(() => {
            const recommendationMessage: Message = {
              id: uuidv4(),
              role: "assistant",
              type: "recommendation",
              title: "为你推荐",
              items: getRecommendations(),
              timestamp: new Date(),
            }
            setMessages((prev) => [...prev, recommendationMessage])
          }, 1000)
        }
      }

      setMessages((prev) => [...prev, aiResponse!])
    }, 1000)
  }

  // 处理按键事件
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // 处理卡片展开
  const handleExpandCard = (message: Message) => {
    if (message.type === "poem-card") {
      const poemMessage = message
      const poemData = Object.values(poems).find((p) => p.title === poemMessage.title)

      if (poemData) {
        setContentViewer({
          type: "poem",
          data: poemData,
          title: `${poemData.title} - ${poemData.author}`,
        })
      }
    } else if (message.type === "wiki-card") {
      const wikiMessage = message
      const conceptData = Object.values(concepts).find((c) => c.title === wikiMessage.title)

      if (conceptData) {
        setContentViewer({
          type: "concept",
          data: conceptData,
          title: conceptData.title,
        })
      }
    }
  }

  // 处理推荐项点击
  const handleRecommendationClick = (item: RecommendationItem) => {
    if (item.type === "poem") {
      const poemId = item.id
      const poemData = Object.values(poems).find((p) => p.id === poemId)

      if (poemData) {
        setContentViewer({
          type: "poem",
          data: poemData,
          title: `${poemData.title} - ${poemData.author}`,
        })
      }
    } else if (item.type === "concept") {
      const conceptId = item.id
      const conceptData = Object.values(concepts).find((c) => c.id === conceptId)

      if (conceptData) {
        setContentViewer({
          type: "concept",
          data: conceptData,
          title: conceptData.title,
        })
      }
    }
  }

  // 处理诗词点击
  const handlePoemClick = (poemId: string) => {
    const poemData = Object.values(poems).find((p) => p.id === poemId)
    console.log("[AITutorPage] poemId", poemId)
    console.log("[AITutorPage] poemData", poemData)
    if (poemData) {
      setContentViewer({
        type: "poem",
        data: poemData,
        title: `${poemData.title} - ${poemData.author}`,
      })
    }
  }

  // 处理概念点击
  const handleConceptClick = (conceptId: string) => {
    const conceptData = Object.values(concepts).find((c) => c.id === conceptId)
    if (conceptData) {
      setContentViewer({
        type: "concept",
        data: conceptData,
        title: conceptData.title,
      })
    }
  }

  // 处理练习点击
  const handleExerciseClick = (exerciseId: string) => {
    const exerciseData = Object.values(exercises).find((e) => e.id === exerciseId)
    if (exerciseData) {
      setContentViewer({
        type: "exercise",
        data: exerciseData,
        title: exerciseData.title,
      })
    }
  }

  // 处理文章点击
  const handleArticleClick = (articleId: string) => {
    const articleData = Object.values(articles).find((a) => a.id === articleId)
    if (articleData) {
      setContentViewer({
        type: "article",
        data: articleData,
        title: articleData.title,
      })
    }
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* 优化的页面头部 */}
      <div className="container mx-auto px-4 py-2 border-b">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground text-sm">
            <ArrowLeft className="mr-1 h-3 w-3" />
            返回首页
          </Link>
          <div className="text-center">
            <h1 className="text-lg font-bold">AI导师</h1>
            <p className="text-xs text-muted-foreground">个性化学习指导，解答疑问，陪伴学习</p>
          </div>
          <div className="w-20"></div> {/* 占位，保持标题居中 */}
        </div>
      </div>

      <div className="flex-1 container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 左侧聊天区域 */}
          <div className="flex flex-col h-[calc(100vh-80px)]">
            {/* 内容导航 */}
            <ContentNavigator
              onPoemClick={handlePoemClick}
              onConceptClick={handleConceptClick}
              onExerciseClick={handleExerciseClick}
              onArticleClick={handleArticleClick}
            />

            {/* 聊天消息区域 */}
            <div className="flex-1 overflow-y-auto mb-2 space-y-3 pr-2 text-sm">
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  onExpandCard={handleExpandCard}
                  onRecommendationClick={handleRecommendationClick}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* 快捷提问区域 */}
            <div className="mb-2">
              <div className="flex flex-wrap gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs h-7"
                  onClick={() => setInput("请介绍一下《静夜思》这首诗")}
                >
                  <BookOpen className="h-3 w-3 mr-1" />
                  介绍《静夜思》
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs h-7"
                  onClick={() => setInput("什么是意象？")}
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  什么是意象？
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs h-7"
                  onClick={() => setInput("推荐一些适合初学者的古诗")}
                >
                  <BookOpen className="h-3 w-3 mr-1" />
                  推荐初学者古诗
                </Button>
              </div>
            </div>

            {/* 输入区域 */}
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="输入你的问题..."
                className="w-full p-3 pr-10 rounded-lg border border-input resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                rows={2}
              />
              <Button onClick={handleSend} className="absolute right-2 bottom-2" size="icon" disabled={!input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* 右侧内容查看区域 */}
          <div className="bg-gray-50 rounded-lg p-4 overflow-hidden h-[calc(100vh-80px)] text-sm">
            <ContentArea
              initialContent={contentViewer}
              onPoemClick={handlePoemClick}
              onConceptClick={handleConceptClick}
              onExerciseClick={handleExerciseClick}
              onArticleClick={handleArticleClick}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
