

import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface CardItemProps {
  title: string
  icon: LucideIcon
  projectCount?: number
}

export default function CardItem({ title, icon: Icon, projectCount }: CardItemProps) {
  return (
    <Card className="w-80 sm:w-64 md:w-55 h-72 text-left rounded-none mt-6 border-none shadow-lg">
      <CardHeader className="flex items-center gap-2 pb-16 md:pb-10 sm:pb-10 pt-5">
        <Icon className="h-8 w-8 md:h-10 md:w-10 sm:h-8 sm:w-8 " />
      </CardHeader>
       <CardTitle className="pl-6 font-space-grotesk text-2xl whitespace-pre-line md:whitespace-pre-line">{title}</CardTitle>
       {typeof projectCount === "number" && (
        <CardFooter className="pb-3 sm:pb-4 font-sans text-sm sm:text-base px-4 sm:px-6">
          {projectCount} Completed
        </CardFooter>
      )}
    </Card>
  )
}
