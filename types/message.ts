// 消息类型定义
export interface BaseMessage {
  id: string
  role: "user" | "assistant"
  timestamp: Date
}

export interface TextMessage extends BaseMessage {
  type: "text"
  content: string
}

export interface PoemCardMessage extends BaseMessage {
  type: "poem-card"
  title: string
  author: string
  dynasty: string
  content: string
  translation?: string
  imageUrl?: string
}

export interface RecommendationMessage extends BaseMessage {
  type: "recommendation"
  title: string
  items: RecommendationItem[]
}

export interface RecommendationItem {
  id: string
  title: string
  description: string
  link: string
  type: "reading" | "poem" | "vocabulary" | "writing" | "concept" | "exercise" | "article"
}

export interface WikiCardMessage extends BaseMessage {
  type: "wiki-card"
  title: string
  content: string
  imageUrl?: string
  relatedLinks?: {
    title: string
    link: string
  }[]
}

export type Message = TextMessage | PoemCardMessage | RecommendationMessage | WikiCardMessage

// 内容类型定义
export interface Poem {
  id: string
  title: string
  author: string
  dynasty: string
  content: string
  translation: string
  analysis: string
  imageUrl: string
  tags?: string[]
}

export interface Concept {
  id: string
  title: string
  content: string
  details: string
  imageUrl?: string
  relatedLinks?: {
    id: string
    title: string
    type: "concept" | "poem"
  }[]
  tags?: string[]
}

export interface Exercise {
  id: string
  title: string
  type: "multiplechoice" | "fillblank" | "essay"
  difficulty: "easy" | "medium" | "hard"
  content: string
  options?: string[]
  answer?: string | string[]
  explanation?: string
  imageUrl?: string
  tags?: string[]
}

export interface Article {
  id: string
  title: string
  author?: string
  source?: string
  content: string
  summary?: string
  imageUrl?: string
  tags?: string[]
  relatedContent?: {
    id: string
    title: string
    type: "poem" | "concept" | "article"
  }[]
}

export interface ContentViewerData {
  type: "poem" | "concept" | "welcome" | "exercise" | "article"
  data: Poem | Concept | Exercise | Article | null
  title: string
}
