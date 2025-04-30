"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GraduationCap, FileText, BookMarked } from "lucide-react"
import { poems, concepts, exercises, articles } from "@/services/data-service"

interface ContentNavigatorProps {
  onPoemClick: (id: string) => void
  onConceptClick: (id: string) => void
  onExerciseClick: (id: string) => void
  onArticleClick: (id: string) => void
}

export function ContentNavigator({
  onPoemClick,
  onConceptClick,
  onExerciseClick,
  onArticleClick,
}: ContentNavigatorProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 mb-4">
      <Tabs defaultValue="poems">
        <TabsList className="grid grid-cols-4 mb-2">
          <TabsTrigger value="poems" className="text-xs">
            诗词
          </TabsTrigger>
          <TabsTrigger value="concepts" className="text-xs">
            概念
          </TabsTrigger>
          <TabsTrigger value="exercises" className="text-xs">
            练习
          </TabsTrigger>
          <TabsTrigger value="articles" className="text-xs">
            文章
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="h-32">
          <TabsContent value="poems" className="m-0">
            <div className="space-y-1">
              {Object.values(poems).map((poem) => (
                <Button
                  key={poem.id}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-xs h-7"
                  onClick={() => onPoemClick(poem.id)}
                >
                  <BookOpen className="h-3 w-3 mr-1" />
                  {poem.title} - {poem.author}
                </Button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="concepts" className="m-0">
            <div className="space-y-1">
              {Object.values(concepts).map((concept) => (
                <Button
                  key={concept.id}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-xs h-7"
                  onClick={() => onConceptClick(concept.id)}
                >
                  <GraduationCap className="h-3 w-3 mr-1" />
                  {concept.title}
                </Button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exercises" className="m-0">
            <div className="space-y-1">
              {Object.values(exercises).map((exercise) => (
                <Button
                  key={exercise.id}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-xs h-7"
                  onClick={() => onExerciseClick(exercise.id)}
                >
                  <FileText className="h-3 w-3 mr-1" />
                  {exercise.title}
                </Button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="m-0">
            <div className="space-y-1">
              {Object.values(articles).map((article) => (
                <Button
                  key={article.id}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-xs h-7"
                  onClick={() => onArticleClick(article.id)}
                >
                  <BookMarked className="h-3 w-3 mr-1" />
                  {article.title}
                </Button>
              ))}
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  )
}
