"use client"

import type { Message, RecommendationItem } from "@/types/message"
import { TextMessageComponent } from "./text-message"
import { RecommendationComponent } from "./recommendation"
import { Button } from "@/components/ui/button"
import { BookOpen, Info, Bot, User } from "lucide-react"

interface MessageBubbleProps {
  message: Message
  onExpandCard: (message: Message) => void
  onRecommendationClick: (item: RecommendationItem) => void
}

export function MessageBubble({ message, onExpandCard, onRecommendationClick }: MessageBubbleProps) {
  const isUser = message.role === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className="flex gap-2 max-w-[85%]">
        {!isUser && (
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
            <Bot className="h-3 w-3 text-blue-700" />
          </div>
        )}

        <div className={`rounded-lg text-xs ${isUser ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}`}>
          {message.type === "text" && <TextMessageComponent message={message} />}

          {message.type === "poem-card" &&
            (isUser ? (
              <div className="p-2 rounded-lg">查询古诗：{message.title}</div>
            ) : (
              <div className="p-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start p-2 h-auto text-xs"
                  onClick={() => onExpandCard(message)}
                >
                  <div className="flex items-center">
                    <BookOpen className="h-3 w-3 mr-1" />
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
                className="w-full justify-start p-2 h-auto text-xs"
                onClick={() => onExpandCard(message)}
              >
                <div className="flex items-center">
                  <Info className="h-3 w-3 mr-1" />
                  <span>{message.title}</span>
                </div>
              </Button>
            </div>
          )}
        </div>

        {isUser && (
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
            <User className="h-3 w-3 text-white" />
          </div>
        )}
      </div>
    </div>
  )
}
