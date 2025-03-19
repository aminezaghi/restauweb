"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, ChevronRight } from "lucide-react"
import Link from "next/link"

interface FeaturedDishProps {
  title: string
  description: string
  image: string
  price: number
  category: string
  categoryLink: string
}

export function FeaturedDish({
  title = "Moroccan Tagine",
  description = "Our signature dish featuring slow-cooked lamb with apricots, prunes, and aromatic spices",
  image = "https://images.pexels.com/photos/5409023/pexels-photo-5409023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  price = 18,
  category = "Main Dishes",
  categoryLink = "/menu",
}: FeaturedDishProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-card shadow-lg mb-12">
      <div className="grid md:grid-cols-2">
        <div className="relative h-64 md:h-auto overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-t" />
          <Badge className="absolute top-4 left-4 bg-moroccan-gold text-black font-medium">
            <Award className="h-3 w-3 mr-1" /> Featured Dish
          </Badge>
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-moroccan-terracotta">{title}</h2>
            <p className="text-muted-foreground mb-6">{description}</p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl font-bold text-moroccan-gold">${price}</span>
              <Badge variant="outline" className="text-sm">
                {category}
              </Badge>
            </div>
            <Button asChild className="w-full md:w-auto bg-moroccan-terracotta hover:bg-moroccan-terracotta/90">
              <Link href={categoryLink}>
                View on Menu <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

