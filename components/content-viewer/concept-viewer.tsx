"use client"

import type { Concept } from "@/types/message"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ConceptViewerProps {
  concept: Concept
  onRelatedConceptClick?: (conceptId: string) => void
  onRelatedPoemClick?: (poemId: string) => void
  externalLink?: string
}

export function ConceptViewer({
  concept,
  onRelatedConceptClick,
  onRelatedPoemClick,
  externalLink,
}: ConceptViewerProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-bold mb-3">{concept.title}</h2>
        <p className="text-base leading-relaxed">{concept.content}</p>
        {concept.imageUrl && (
          <div className="relative h-40 w-full mt-4 rounded-md overflow-hidden">
            <Image src={concept.imageUrl || "/placeholder.svg"} alt={concept.title} fill className="object-cover" />
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-bold mb-3">详细解释</h2>
        <div className="text-base leading-relaxed whitespace-pre-line">{concept.details}</div>
      </div>

      {concept.relatedLinks && concept.relatedLinks.length > 0 && (
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold mb-3">相关概念</h2>
          <div className="space-y-2">
            {concept.relatedLinks.map((link) => (
              <div key={link.id} className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                <span>{link.title}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (link.type === "concept" && onRelatedConceptClick) {
                      onRelatedConceptClick(link.id)
                    } else if (link.type === "poem" && onRelatedPoemClick) {
                      onRelatedPoemClick(link.id)
                    }
                  }}
                >
                  查看
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

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
