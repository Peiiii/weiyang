"use client"

import type { Poem } from "@/types/message"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, ThumbsUp, ExternalLink } from "lucide-react"
import Link from "next/link"

interface PoemViewerProps {
  poem: Poem
  onRelatedPoemClick?: (poemId: string) => void
  externalLink?: string
}

export function PoemViewer({ poem, onRelatedPoemClick, externalLink }: PoemViewerProps) {
  return (
    <div className="space-y-6">
      <div className="relative h-48 w-full rounded-xl overflow-hidden">
        <Image src={poem.imageUrl || "/placeholder.svg"} alt={poem.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h1 className="text-2xl font-bold mb-1">{poem.title}</h1>
          <p className="text-lg opacity-90">
            {poem.dynasty} · {poem.author}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-bold mb-3">原文</h2>
        <div className="text-lg leading-relaxed whitespace-pre-line">{poem.content}</div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-bold mb-3">译文</h2>
        <div className="text-base leading-relaxed">{poem.translation}</div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-bold mb-3">赏析</h2>
        <div className="text-base leading-relaxed whitespace-pre-line">{poem.analysis}</div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-bold mb-3">相关推荐</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>《静夜思》- 李白</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => onRelatedPoemClick && onRelatedPoemClick("jingyesi")}>
              查看
            </Button>
          </div>
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>《望庐山瀑布》- 李白</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRelatedPoemClick && onRelatedPoemClick("wanglushanpubu")}
            >
              查看
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" className="gap-2">
          <ThumbsUp className="h-4 w-4" />
          收藏
        </Button>
        {externalLink && (
          <Button className="gap-2" asChild>
            <Link href={externalLink} target="_blank">
              <ExternalLink className="h-4 w-4 mr-1" />
              在新页面打开
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
