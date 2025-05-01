"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ExternalLink, Home, BookmarkPlus } from "lucide-react"
import { useHistory } from "./history-provider"
import { Link } from "@/components/ui/link"
import { useState } from "react"

interface ViewerHeaderProps {
  onResetView?: () => void
}

export function ViewerHeader({ onResetView }: ViewerHeaderProps) {
  const { currentView, canGoBack, canGoForward, goBack, goForward } = useHistory()
  const [bookmarked, setBookmarked] = useState(false)

  const externalLink = getExternalLink(currentView?.type, currentView?.data?.id)

  function getExternalLink(type: string | undefined, id: string | undefined) {
    if (!type || !id) return undefined

    switch (type) {
      case "poem":
        return `/reading/poems/${id}`
      case "concept":
        return `/learning/${id}`
      default:
        return undefined
    }
  }

  return (
    <div className="flex justify-between items-center border-b pb-2 mb-3">
      <div className="flex items-center space-x-1">
        <Button
          variant="ghost"
          size="icon"
          disabled={!canGoBack}
          onClick={goBack}
          className="h-6 w-6"
          aria-label="返回"
        >
          <ArrowLeft className="h-3 w-3" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          disabled={!canGoForward}
          onClick={goForward}
          className="h-6 w-6"
          aria-label="前进"
        >
          <ArrowRight className="h-3 w-3" />
        </Button>

        <Button variant="ghost" size="icon" onClick={onResetView} className="h-6 w-6" aria-label="首页">
          <Home className="h-3 w-3" />
        </Button>
      </div>

      <div className="flex-1 px-2 truncate text-center">
        <h2 className="text-xs font-medium">{currentView?.title || "内容查看"}</h2>
      </div>

      <div className="flex items-center space-x-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          aria-label={bookmarked ? "取消收藏" : "收藏"}
          onClick={() => setBookmarked(!bookmarked)}
        >
          <BookmarkPlus className={`h-3 w-3 ${bookmarked ? "fill-current" : ""}`} />
        </Button>

        {externalLink && (
          <Button variant="ghost" size="icon" className="h-6 w-6" aria-label="在新页面打开" asChild>
            <Link href={externalLink} target="_blank">
              <ExternalLink className="h-3 w-3" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
