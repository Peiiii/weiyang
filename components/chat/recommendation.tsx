"use client"

import type { RecommendationMessage, RecommendationItem } from "@/types/message"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Info, Sparkles, PenLine } from "lucide-react"

interface RecommendationProps {
  message: RecommendationMessage
  onItemClick: (item: RecommendationItem) => void
}

export function RecommendationComponent({ message, onItemClick }: RecommendationProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "reading":
        return <BookOpen className="h-3 w-3" />
      case "poem":
        return <BookOpen className="h-3 w-3" />
      case "vocabulary":
        return <BookOpen className="h-3 w-3" />
      case "writing":
        return <PenLine className="h-3 w-3" />
      case "concept":
        return <Sparkles className="h-3 w-3" />
      default:
        return <Info className="h-3 w-3" />
    }
  }

  return (
    <Card className="w-full border-0 shadow-sm">
      <CardContent className="p-3">
        <h3 className="text-xs font-medium mb-2">{message.title}</h3>
        <div className="space-y-1">
          {message.items.map((item) => (
            <div
              key={item.id}
              className="flex items-start p-1.5 rounded-md hover:bg-muted transition-colors cursor-pointer"
              onClick={() => onItemClick(item)}
            >
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 flex-shrink-0">
                {getIcon(item.type)}
              </div>
              <div>
                <p className="font-medium text-xs">{item.title}</p>
                <p className="text-[10px] text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
