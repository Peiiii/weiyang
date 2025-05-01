"use client"

import { useState } from "react"
import type { Exercise } from "@/types/message"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Image } from "@/components/ui/image"

interface ExerciseViewerProps {
  exercise: Exercise
}

export function ExerciseViewer({ exercise }: ExerciseViewerProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [userAnswer, setUserAnswer] = useState<string>("")
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit = () => {
    if (exercise.type === "multiplechoice") {
      if (Array.isArray(exercise.answer)) {
        setIsCorrect(exercise.answer.includes(selectedOption || ""))
      } else {
        setIsCorrect(selectedOption === exercise.answer)
      }
    } else if (exercise.type === "fillblank") {
      if (Array.isArray(exercise.answer)) {
        setIsCorrect(exercise.answer.some((answer) => answer.trim().toLowerCase() === userAnswer.trim().toLowerCase()))
      } else if (exercise.answer) {
        setIsCorrect(userAnswer.trim().toLowerCase() === exercise.answer.trim().toLowerCase())
      }
    }
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      {exercise.imageUrl && (
        <div className="relative h-40 w-full rounded-lg overflow-hidden">
          <Image src={exercise.imageUrl || "/placeholder.svg"} alt={exercise.title} fill className="object-cover" />
        </div>
      )}

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-bold mb-2">{exercise.title}</h2>
        <div className="flex gap-2 mb-4">
          <span
            className={`px-2 py-0.5 rounded-full text-xs ${
              exercise.difficulty === "easy"
                ? "bg-green-100 text-green-800"
                : exercise.difficulty === "medium"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
            }`}
          >
            {exercise.difficulty === "easy" ? "简单" : exercise.difficulty === "medium" ? "中等" : "困难"}
          </span>
          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs">
            {exercise.type === "multiplechoice" ? "选择题" : exercise.type === "fillblank" ? "填空题" : "写作题"}
          </span>
        </div>

        <div className="text-base mb-6">{exercise.content}</div>

        {exercise.type === "multiplechoice" && exercise.options && (
          <div className="mb-6">
            <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} disabled={submitted}>
              {exercise.options.map((option, index) => (
                <div key={index} className="flex items-start space-x-2 mb-3">
                  <RadioGroupItem value={option} id={`option-${index}`} disabled={submitted} />
                  <Label htmlFor={`option-${index}`} className="mt-0.5">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}

        {exercise.type === "fillblank" && (
          <div className="mb-6">
            <Textarea
              placeholder="输入你的答案..."
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={submitted}
              className="w-full"
            />
          </div>
        )}

        {exercise.type === "essay" && (
          <div className="mb-6">
            <Textarea
              placeholder="在这里写下你的答案..."
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full min-h-[150px]"
            />
            <p className="text-sm text-muted-foreground mt-2">
              注意：作文评估需要时间，提交后请耐心等待老师或AI的反馈。
            </p>
          </div>
        )}

        {submitted && exercise.type !== "essay" ? (
          <div className={`p-4 rounded-lg mb-4 ${isCorrect ? "bg-green-50" : "bg-red-50"}`}>
            <div className="flex items-start">
              {isCorrect ? (
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className={`font-medium ${isCorrect ? "text-green-800" : "text-red-800"}`}>
                  {isCorrect ? "回答正确！" : "回答错误"}
                </p>
                {exercise.explanation && <p className="text-sm mt-1">{exercise.explanation}</p>}
                {!isCorrect && exercise.answer && (
                  <p className="text-sm mt-1">
                    正确答案: {Array.isArray(exercise.answer) ? exercise.answer.join(" 或 ") : exercise.answer}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={
              (exercise.type === "multiplechoice" && !selectedOption) ||
              (exercise.type === "fillblank" && !userAnswer.trim()) ||
              submitted
            }
          >
            提交答案
          </Button>
        )}

        {exercise.type === "essay" && <Button>提交作文</Button>}
      </div>
    </div>
  )
}
