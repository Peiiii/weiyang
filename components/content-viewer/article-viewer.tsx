"use client"

import type { Article } from "@/types/message"
import { Image } from "@/components/ui/image"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

interface ArticleViewerProps {
  article: Article
  onRelatedClick?: (type: string, id: string) => void
}

export function ArticleViewer({ article, onRelatedClick }: ArticleViewerProps) {
  return (
    <div className="space-y-6">
      {article.imageUrl && (
        <div className="relative h-48 w-full rounded-xl overflow-hidden">
          <Image src={article.imageUrl || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h1 className="text-2xl font-bold mb-1">{article.title}</h1>
            {article.author && <p className="text-sm opacity-90">作者：{article.author}</p>}
            {article.source && <p className="text-sm opacity-90">来源：{article.source}</p>}
          </div>
        </div>
      )}

      {!article.imageUrl && (
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
          {article.author && <p className="text-sm text-muted-foreground">作者：{article.author}</p>}
          {article.source && <p className="text-sm text-muted-foreground">来源：{article.source}</p>}
        </div>
      )}

      {article.summary && (
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <h2 className="text-sm font-medium text-blue-800 mb-2">内容摘要</h2>
          <p className="text-sm text-blue-700">{article.summary}</p>
        </div>
      )}

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="prose max-w-none">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {article.relatedContent && article.relatedContent.length > 0 && (
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold mb-3">相关阅读</h2>
          <div className="space-y-2">
            {article.relatedContent.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer"
                onClick={() => onRelatedClick && onRelatedClick(item.type, item.id)}
              >
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{item.title}</span>
                </div>
                <Button variant="ghost" size="sm">
                  查看
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
