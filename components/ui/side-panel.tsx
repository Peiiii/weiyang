"use client"

import type React from "react"

import { X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Link } from "@/components/ui/link"

interface SidePanelProps {
  isOpen: boolean
  onClose: () => void
  title: string
  externalLink?: string
  children: React.ReactNode
}

export function SidePanel({ isOpen, onClose, title, externalLink, children }: SidePanelProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
    } else {
      const timer = setTimeout(() => {
        setMounted(false)
      }, 300) // Match transition duration
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!mounted) return null

  return (
    <div
      className={`fixed inset-y-0 right-0 z-30 w-full md:w-[450px] lg:w-[550px] bg-background shadow-lg border-l transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold truncate">{title}</h2>
          <div className="flex items-center gap-2">
            {externalLink && (
              <Button variant="ghost" size="icon" asChild>
                <Link href={externalLink} target="_blank">
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">在新页面打开</span>
                </Link>
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
              <span className="sr-only">关闭</span>
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </div>
    </div>
  )
}
