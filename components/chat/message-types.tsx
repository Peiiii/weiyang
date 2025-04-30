"use client"

import { BookOpen, ExternalLink, ThumbsUp, User, Bot, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

export interface BaseMessage {
  id: string
  role: "user" | "assistant"
  timestamp: Date
}

export interface TextMessage extends BaseMessage {
  type: "text"
  content: string
}

export interface PoemCardMessage extends BaseMessage {
  type: "poem-card"
  title: string
  author: string
  dynasty: string
  content: string
  translation?: string
  imageUrl?: string
}

export interface RecommendationMessage extends BaseMessage {
  type: "recommendation"
  title: string
  items: {
    id: string
    title: string
    description: string
    link: string
    type: "reading" | "poem" | "vocabulary" | "writing"
  }[]
}

export interface WikiCardMessage extends BaseMessage {
  type: "wiki-card"
  title: string
  content: string
  imageUrl?: string
  relatedLinks?: {
    title: string
    link: string
  }[]
}

export type Message = TextMessage | PoemCardMessage | RecommendationMessage | WikiCardMessage

// 文本消息组件
export function TextMessageComponent({ message }: { message: TextMessage }) {
  return <div className="p-3 rounded-lg">{message.content}</div>
}

// 古诗卡片组件
export function PoemCardComponent({ message, onClose }: { message: PoemCardMessage; onClose?: () => void }) {
  return (
    <Card className="w-full max-w-md overflow-hidden border-0 shadow-md">
      {message.imageUrl && (
        <div className="relative h-40 w-full">
          <Image src={message.imageUrl || "/placeholder.svg"} alt={message.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold">{message.title}</h3>
            <p className="text-sm opacity-90">
              {message.dynasty} · {message.author}
            </p>
          </div>
        </div>
      )}
      <CardContent className={`p-4 ${!message.imageUrl ? "pt-4" : "pt-2"}`}>
        {!message.imageUrl && (
          <div className="mb-3">
            <h3 className="text-xl font-bold">{message.title}</h3>
            <p className="text-sm text-muted-foreground">
              {message.dynasty} · {message.author}
            </p>
          </div>
        )}
        <div className="space-y-3">
          <div className="whitespace-pre-line text-base leading-relaxed">{message.content}</div>
          {message.translation && (
            <div className="mt-2 text-sm text-muted-foreground">
              <p className="font-medium mb-1">译文：</p>
              <p>{message.translation}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="px-4 py-3 bg-muted/20 flex justify-between">
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            <ThumbsUp className="h-4 w-4 mr-1" />
            收藏
          </Button>
          <Button variant="ghost" size="sm">
            <ExternalLink className="h-4 w-4 mr-1" />
            详情
          </Button>
        </div>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose}>
            关闭
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

// 推荐卡片组件
export function RecommendationComponent({
  message,
  onItemClick,
}: {
  message: RecommendationMessage
  onItemClick?: (item: any) => void
}) {
  const getIcon = (type: string) => {
    switch (type) {
      case "reading":
        return <BookOpen className="h-4 w-4" />
      case "poem":
        return <BookOpen className="h-4 w-4" />
      case "vocabulary":
        return <BookOpen className="h-4 w-4" />
      case "writing":
        return <BookOpen className="h-4 w-4" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  return (
    <Card className="w-full border-0 shadow-md">
      <CardContent className="p-4">
        <h3 className="text-lg font-medium mb-3">{message.title}</h3>
        <div className="space-y-2">
          {message.items.map((item) => (
            <div
              key={item.id}
              className="flex items-start p-2 rounded-md hover:bg-muted transition-colors cursor-pointer"
              onClick={() => onItemClick && onItemClick(item)}
            >
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                {getIcon(item.type)}
              </div>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// 维基百科式卡片组件
export function WikiCardComponent({ message }: { message: WikiCardMessage }) {
  return (
    <Card className="w-full max-w-md border-0 shadow-md">
      <CardContent className="p-4">
        <div className="flex items-start">
          {message.imageUrl && (
            <div className="relative h-16 w-16 rounded-md overflow-hidden mr-3 flex-shrink-0">
              <Image src={message.imageUrl || "/placeholder.svg"} alt={message.title} fill className="object-cover" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-medium mb-1">{message.title}</h3>
            <p className="text-sm text-muted-foreground">{message.content}</p>
          </div>
        </div>

        {message.relatedLinks && message.relatedLinks.length > 0 && (
          <div className="mt-3 pt-3 border-t">
            <p className="text-sm font-medium mb-2">相关链接：</p>
            <div className="space-y-1">
              {message.relatedLinks.map((link, index) => (
                <div key={index} className="text-sm text-primary hover:underline cursor-pointer">
                  {link.title}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// 消息气泡容器
export function MessageBubble({
  message,
  onExpandCard,
  onRecommendationClick,
}: {
  message: Message
  onExpandCard?: (message: Message) => void
  onRecommendationClick?: (item: any) => void
}) {
  const isUser = message.role === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className="flex gap-3 max-w-[85%]">
        {!isUser && (
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
            <Bot className="h-4 w-4 text-blue-700" />
          </div>
        )}

        <div className={`rounded-lg ${isUser ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}`}>
          {message.type === "text" && <TextMessageComponent message={message} />}

          {message.type === "poem-card" &&
            (isUser ? (
              <div className="p-3 rounded-lg">查询古诗：{message.title}</div>
            ) : (
              <div className="p-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start p-2 h-auto"
                  onClick={() => onExpandCard && onExpandCard(message)}
                >
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>
                      《{message.title}》- {message.author}
                    </span>
                  </div>
                </Button>
              </div>
            ))}

          {message.type === "recommendation" && !isUser && (
            <div className="p-1">
              <RecommendationComponent message={message} onItemClick={onRecommendationClick} />
            </div>
          )}

          {message.type === "wiki-card" && !isUser && (
            <div className="p-1">
              <Button
                variant="ghost"
                className="w-full justify-start p-2 h-auto"
                onClick={() => onExpandCard && onExpandCard(message)}
              >
                <div className="flex items-center">
                  <Info className="h-4 w-4 mr-2" />
                  <span>{message.title}</span>
                </div>
              </Button>
            </div>
          )}
        </div>

        {isUser && (
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
            <User className="h-4 w-4 text-white" />
          </div>
        )}
      </div>
    </div>
  )
}
