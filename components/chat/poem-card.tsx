"use client"

import type { PoemCardMessage } from "@/types/message"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ExternalLink } from "lucide-react"
import Image from "next/image"

interface PoemCardProps {
  message: PoemCardMessage
  onClose?: () => void
}

export function PoemCardComponent({ message, onClose }: PoemCardProps) {
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
