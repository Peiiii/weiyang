"use client"

import type { WikiCardMessage } from "@/types/message"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface WikiCardProps {
  message: WikiCardMessage
  onRelatedLinkClick?: (link: { title: string; link: string }) => void
}

export function WikiCardComponent({ message, onRelatedLinkClick }: WikiCardProps) {
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
                <div
                  key={index}
                  className="text-sm text-primary hover:underline cursor-pointer"
                  onClick={() => onRelatedLinkClick && onRelatedLinkClick(link)}
                >
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
