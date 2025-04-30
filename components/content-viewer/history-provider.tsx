"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { ContentViewerData } from "@/types/message"

interface HistoryContextType {
  history: ContentViewerData[]
  currentIndex: number
  currentView: ContentViewerData | null
  canGoBack: boolean
  canGoForward: boolean
  navigate: (view: ContentViewerData) => void
  goBack: () => void
  goForward: () => void
}

const HistoryContext = createContext<HistoryContextType | null>(null)

export function useHistory() {
  const context = useContext(HistoryContext)
  if (!context) {
    throw new Error("useHistory must be used within a HistoryProvider")
  }
  return context
}

interface HistoryProviderProps {
  children: ReactNode
  initialView: ContentViewerData
}

export function HistoryProvider({ children, initialView }: HistoryProviderProps) {
  const [history, setHistory] = useState<ContentViewerData[]>([initialView])
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentView = history[currentIndex] || null
  const canGoBack = currentIndex > 0
  const canGoForward = currentIndex < history.length - 1

  const navigate = (view: ContentViewerData) => {
    // 如果不是在最后一个位置导航，需要删除当前位置后面的历史
    const newHistory = history.slice(0, currentIndex + 1)
    newHistory.push(view)
    setHistory(newHistory)
    setCurrentIndex(newHistory.length - 1)
  }

  const goBack = () => {
    if (canGoBack) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goForward = () => {
    if (canGoForward) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <HistoryContext.Provider
      value={{
        history,
        currentIndex,
        currentView,
        canGoBack,
        canGoForward,
        navigate,
        goBack,
        goForward,
      }}
    >
      {children}
    </HistoryContext.Provider>
  )
}
