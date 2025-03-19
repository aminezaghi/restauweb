import type React from "react"
import { cn } from "@/lib/utils"

interface MoroccanPatternProps {
  className?: string
  children: React.ReactNode
}

export function MoroccanPattern({ className, children }: MoroccanPatternProps) {
  return <div className={cn("moroccan-pattern", className)}>{children}</div>
}

