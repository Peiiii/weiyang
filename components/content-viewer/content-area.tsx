"use client"

import type { Concept, ContentViewerData, Exercise, Poem } from "@/types/message"
import { useEffect } from "react"
import { ArticleViewer } from "./article-viewer"
import { ConceptViewer } from "./concept-viewer"
import { ExerciseViewer } from "./exercise-viewer"
import { HistoryProvider, useHistory } from "./history-provider"
import { PoemViewer } from "./poem-viewer"
import { ViewerHeader } from "./viewer-header"
import { WelcomeContent } from "./welcome-content"

interface ContentAreaProps {
  initialContent: ContentViewerData
  onPoemClick?: (poemId: string) => void
  onConceptClick?: (conceptId: string) => void
  onExerciseClick?: (exerciseId: string) => void
  onArticleClick?: (articleId: string) => void
}

// 包装组件，提供历史记录上下文
export function ContentArea(props: ContentAreaProps) {
  return (
    <HistoryProvider initialView={props.initialContent}>
      <ContentAreaWithHistory {...props} />
    </HistoryProvider>
  )
}

// 内部组件，使用历史记录上下文
function ContentAreaWithHistory({
  initialContent,
  onPoemClick,
  onConceptClick,
  onExerciseClick,
  onArticleClick,
}: ContentAreaProps) {
  const { currentView, navigate } = useHistory()

  const handleResetView = () => {
    navigate(initialContent)
  }

  useEffect(() => {
    navigate(initialContent)
  }, [initialContent])

  const handlePoemClick = (poemId: string) => {
    if (onPoemClick) onPoemClick(poemId)
  }

  const handleConceptClick = (conceptId: string) => {
    if (onConceptClick) onConceptClick(conceptId)
  }

  const handleExerciseClick = (exerciseId: string) => {
    if (onExerciseClick) onExerciseClick(exerciseId)
  }

  const handleArticleClick = (articleId: string) => {
    if (onArticleClick) onArticleClick(articleId)
  }

  return (
    <div className="h-full flex flex-col">
      <ViewerHeader onResetView={handleResetView} />

      <div className="flex-1 overflow-y-auto pr-1">
        {currentView?.type === "welcome" && (
          <WelcomeContent
            onPoemClick={handlePoemClick}
            onConceptClick={handleConceptClick}
            onExerciseClick={handleExerciseClick}
            onArticleClick={handleArticleClick}
          />
        )}

        {currentView?.type === "poem" && currentView.data && (
          <PoemViewer poem={currentView.data as Poem} onRelatedPoemClick={handlePoemClick} />
        )}

        {currentView?.type === "concept" && currentView.data && (
          <ConceptViewer
            concept={currentView.data as Concept}
            onRelatedConceptClick={handleConceptClick}
            onRelatedPoemClick={handlePoemClick}
          />
        )}

        {currentView?.type === "exercise" && currentView.data && (
          <ExerciseViewer exercise={currentView.data as Exercise} />
        )}

        {currentView?.type === "article" && currentView.data && (
          <ArticleViewer
            article={currentView.data}
            onRelatedClick={(type, id) => {
              if (type === "poem") handlePoemClick(id)
              else if (type === "concept") handleConceptClick(id)
            }}
          />
        )}
      </div>
    </div>
  )
}
