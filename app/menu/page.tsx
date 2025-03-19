"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Flame, Leaf, Award, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FeaturedDish } from "@/components/featured-dish"

// Menu data for Moroccan street food
const menuCategories = [
  { id: "snacks", name: "Street Snacks" },
  { id: "grilled", name: "Grilled & Fried" },
  { id: "sandwiches", name: "Sandwiches & Wraps" },
  { id: "sweets", name: "Sweet Treats" },
  { id: "beverages", name: "Beverages" },
]

const menuItems = {
  snacks: [
    {
      id: 1,
      name: "Msemen",
      description: "Layered pan-fried flatbread served with honey or soft cheese",
      price: 6,
      image: "/images/food/msemen.jpg",
      dietary: ["vegetarian"],
      spiceLevel: 0,
      popular: true,
      region: "Marrakech",
    },
    {
      id: 2,
      name: "Harira",
      description: "Traditional Moroccan soup with lentils, chickpeas, tomatoes, and aromatic spices",
      price: 8,
      image: "/images/food/harira.jpg",
      dietary: ["vegetarian"],
      spiceLevel: 1,
      popular: true,
      region: "Fez",
    },
    {
      id: 3,
      name: "Maakouda",
      description: "Crispy potato fritters seasoned with cumin, garlic, and fresh herbs",
      price: 7,
      image: "/images/food/maakouda.jpg",
      dietary: ["vegetarian"],
      spiceLevel: 1,
      popular: false,
      region: "Rabat",
    },
    {
      id: 4,
      name: "Bissara",
      description: "Hearty fava bean soup topped with olive oil, cumin, and paprika",
      price: 6,
      image: "/images/food/bissara.jpg",
      dietary: ["vegetarian", "vegan"],
      spiceLevel: 1,
      popular: false,
      region: "Chefchaouen",
    },
  ],
  grilled: [
    {
      id: 5,
      name: "Brochettes",
      description: "Moroccan spiced meat skewers grilled over charcoal with onions and peppers",
      price: 12,
      image: "/images/food/brochettes.jpg",
      dietary: [],
      spiceLevel: 2,
      popular: true,
      region: "Casablanca",
    },
    {
      id: 6,
      name: "Sardines Mchermel",
      description: "Fresh sardines marinated in chermoula (garlic, cumin, paprika, cilantro) and grilled",
      price: 14,
      image: "/images/food/sardines.jpg",
      dietary: [],
      spiceLevel: 2,
      popular: true,
      region: "Essaouira",
    },
    {
      id: 7,
      name: "Hout Frit",
      description: "Deep-fried fish served in paper cones with harissa dipping sauce and lemon",
      price: 10,
      image: "/images/food/hout-frit.jpg",
      dietary: [],
      spiceLevel: 2,
      popular: false,
      region: "Tangier",
    },
    {
      id: 8,
      name: "Merguez",
      description: "Spicy lamb sausages grilled to perfection and served with harissa sauce",
      price: 11,
      image: "/images/food/merguez.jpg",
      dietary: [],
      spiceLevel: 3,
      popular: true,
      region: "Marrakech",
    },
  ],
  sandwiches: [
    {
      id: 9,
      name: "Kefta Sandwich",
      description: "Grilled spiced minced meat patties in Moroccan khobz bread with tomatoes and onions",
      price: 9,
      image: "/images/food/kefta-sandwich.jpg",
      dietary: [],
      spiceLevel: 2,
      popular: true,
      region: "Fez",
    },
    {
      id: 10,
      name: "Bocadillo",
      description: "Moroccan-Spanish sandwich with tuna, olives, boiled eggs, and harissa",
      price: 8,
      image: "/images/food/bocadillo.jpg",
      dietary: [],
      spiceLevel: 2,
      popular: false,
      region: "Tangier",
    },
    {
      id: 11,
      name: "Batbout Sandwich",
      description: "Soft Moroccan pita filled with grilled vegetables, preserved lemon, and olives",
      price: 7,
      image: "/images/food/batbout.jpg",
      dietary: ["vegetarian", "vegan"],
      spiceLevel: 1,
      popular: false,
      region: "Rabat",
    },
    {
      id: 12,
      name: "Zaalouk Wrap",
      description: "Smoky eggplant and tomato dip wrapped in thin bread with fresh herbs",
      price: 8,
      image: "/images/food/zaalouk.jpg",
      dietary: ["vegetarian", "vegan"],
      spiceLevel: 1,
      popular: true,
      region: "Marrakech",
    },
  ],
  sweets: [
    {
      id: 13,
      name: "Chebakia",
      description: "Sesame-coated honey pastries shaped like flowers, a Ramadan favorite",
      price: 5,
      image: "/images/food/chebakia.jpg",
      dietary: ["vegetarian"],
      spiceLevel: 0,
      popular: true,
      region: "Fez",
    },
    {
      id: 14,
      name: "Sfinge",
      description: "Moroccan doughnuts dusted with sugar, light and fluffy",
      price: 4,
      image: "/images/food/sfinge.jpg",
      dietary: ["vegetarian"],
      spiceLevel: 0,
      popular: true,
      region: "Casablanca",
    },
    {
      id: 15,
      name: "Sellou",
      description: "Toasted flour mixed with almonds, sesame seeds, and honey",
      price: 6,
      image: "/images/food/sellou.jpg",
      dietary: ["vegetarian"],
      spiceLevel: 0,
      popular: false,
      region: "Fez",
    },
    {
      id: 16,
      name: "Ghoriba",
      description: "Moroccan shortbread cookies with almonds that melt in your mouth",
      price: 4,
      image: "/images/food/ghoriba.jpg",
      dietary: ["vegetarian"],
      spiceLevel: 0,
      popular: false,
      region: "Rabat",
    },
  ],
  beverages: [
    {
      id: 17,
      name: "Moroccan Mint Tea",
      description: "Green tea with fresh mint leaves and sugar, the national drink of Morocco",
      price: 4,
      image: "/images/food/mint-tea.jpg",
      dietary: ["vegetarian", "vegan"],
      spiceLevel: 0,
      popular: true,
      region: "Nationwide",
    },
    {
      id: 18,
      name: "Avocado & Almond Smoothie",
      description: "Creamy blend of avocado, almonds, milk, and honey",
      price: 6,
      image: "/images/food/avocado-smoothie.jpg",
      dietary: ["vegetarian"],
      spiceLevel: 0,
      popular: true,
      region: "Marrakech",
    },
    {
      id: 19,
      name: "Fresh Orange Juice",
      description: "Freshly squeezed Moroccan oranges, known for their sweetness",
      price: 5,
      image: "/images/food/orange-juice.jpg",
      dietary: ["vegetarian", "vegan"],
      spiceLevel: 0,
      popular: true,
      region: "Agadir",
    },
    {
      id: 20,
      name: "Sugarcane Juice",
      description: "Freshly pressed sugarcane juice with a hint of lemon",
      price: 5,
      image: "/images/food/sugarcane-juice.jpg",
      dietary: ["vegetarian", "vegan"],
      spiceLevel: 0,
      popular: false,
      region: "Marrakech",
    },
  ],
}

// Using reliable image URLs that work consistently
const foodImages = {
  // Snacks
  "msemen.jpg":
    "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "harira.jpg":
    "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "maakouda.jpg":
    "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "bissara.jpg":
    "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  // Grilled
  "brochettes.jpg":
    "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "sardines.jpg":
    "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "hout-frit.jpg":
    "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "merguez.jpg":
    "https://images.pexels.com/photos/8969252/pexels-photo-8969252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  // Sandwiches
  "kefta-sandwich.jpg":
    "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "bocadillo.jpg":
    "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "batbout.jpg":
    "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "zaalouk.jpg":
    "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  // Sweets
  "chebakia.jpg":
    "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "sfinge.jpg":
    "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "sellou.jpg":
    "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "ghoriba.jpg":
    "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  // Beverages
  "mint-tea.jpg":
    "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "avocado-smoothie.jpg":
    "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "orange-juice.jpg":
    "https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "sugarcane-juice.jpg":
    "https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  // Featured dish
  "tagine.jpg":
    "https://images.pexels.com/photos/5409023/pexels-photo-5409023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
}

// Helper function to get the actual image URL
const getImageUrl = (imagePath: string) => {
  const fileName = imagePath.split("/").pop() || ""
  return (
    foodImages[fileName as keyof typeof foodImages] ||
    "https://images.pexels.com/photos/5409023/pexels-photo-5409023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  )
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("snacks")
  const [filters, setFilters] = useState({
    dietary: null as string | null,
    spicy: null as number | null,
    popular: false,
  })
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Check if we're on mobile
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

  const resetFilters = () => {
    setFilters({
      dietary: null,
      spicy: null,
      popular: false,
    })
  }

  const toggleFilter = (type: "dietary" | "spicy" | "popular", value: any) => {
    setFilters((prev) => {
      // If the same value is clicked, toggle it off
      if (type === "popular") {
        return { ...prev, [type]: !prev[type] }
      } else if (prev[type] === value) {
        return { ...prev, [type]: null }
      } else {
        return { ...prev, [type]: value }
      }
    })
  }

  const filteredItems = menuItems[activeCategory as keyof typeof menuItems].filter((item) => {
    // Apply dietary filter
    if (filters.dietary && !item.dietary.includes(filters.dietary)) {
      return false
    }

    // Apply spice level filter
    if (filters.spicy !== null && item.spiceLevel < filters.spicy) {
      return false
    }

    // Apply popular filter
    if (filters.popular && !item.popular) {
      return false
    }

    return true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="pt-24 pb-16 moroccan-pattern min-h-screen">
      <div className="container mx-auto px-4">
        <FeaturedDish
          title="Lamb Tagine with Apricots"
          description="Our signature dish featuring slow-cooked lamb with apricots, prunes, and aromatic spices in a traditional clay pot"
          image="https://images.pexels.com/photos/5409023/pexels-photo-5409023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          price={18}
          category="Chef's Specials"
          categoryLink="/menu"
        />
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-moroccan-terracotta">Moroccan Street Food</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the vibrant flavors of authentic Moroccan street cuisine
          </p>
        </div>

        <Tabs
          defaultValue="snacks"
          className="w-full"
          onValueChange={(value) => {
            setActiveCategory(value)
            resetFilters()
            // Scroll to top of container when changing categories
            if (containerRef.current) {
              containerRef.current.scrollTop = 0
            }
          }}
        >
          <div className="flex flex-col items-center mb-8">
            <TabsList className="mb-6 bg-moroccan-sand/20 flex flex-wrap justify-center">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-moroccan-terracotta data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <div className="flex flex-wrap items-center gap-2 mr-2 mb-2">
                <span className="text-sm font-medium">Dietary:</span>
                <Button
                  variant={filters.dietary === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter("dietary", null)}
                  className={filters.dietary === null ? "bg-moroccan-terracotta hover:bg-moroccan-terracotta/90" : ""}
                >
                  All
                </Button>
                <Button
                  variant={filters.dietary === "vegetarian" ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter("dietary", "vegetarian")}
                  className={
                    filters.dietary === "vegetarian" ? "bg-moroccan-terracotta hover:bg-moroccan-terracotta/90" : ""
                  }
                >
                  <Leaf className="h-4 w-4 mr-1" /> Vegetarian
                </Button>
                <Button
                  variant={filters.dietary === "vegan" ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter("dietary", "vegan")}
                  className={
                    filters.dietary === "vegan" ? "bg-moroccan-terracotta hover:bg-moroccan-terracotta/90" : ""
                  }
                >
                  <Leaf className="h-4 w-4 mr-1" /> Vegan
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2 mr-2 mb-2">
                <span className="text-sm font-medium">Spice Level:</span>
                <Button
                  variant={filters.spicy === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter("spicy", null)}
                  className={filters.spicy === null ? "bg-moroccan-terracotta hover:bg-moroccan-terracotta/90" : ""}
                >
                  Any
                </Button>
                <Button
                  variant={filters.spicy === 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter("spicy", 1)}
                  className={filters.spicy === 1 ? "bg-moroccan-terracotta hover:bg-moroccan-terracotta/90" : ""}
                >
                  <Flame className="h-4 w-4 mr-1" /> Mild+
                </Button>
                <Button
                  variant={filters.spicy === 2 ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter("spicy", 2)}
                  className={filters.spicy === 2 ? "bg-moroccan-terracotta hover:bg-moroccan-terracotta/90" : ""}
                >
                  <Flame className="h-4 w-4 mr-1" />
                  <Flame className="h-4 w-4" /> Medium+
                </Button>
                <Button
                  variant={filters.spicy === 3 ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter("spicy", 3)}
                  className={filters.spicy === 3 ? "bg-moroccan-terracotta hover:bg-moroccan-terracotta/90" : ""}
                >
                  <Flame className="h-4 w-4 mr-1" />
                  <Flame className="h-4 w-4 mr-1" />
                  <Flame className="h-4 w-4" /> Hot
                </Button>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Button
                  variant={filters.popular ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter("popular", true)}
                  className={filters.popular ? "bg-moroccan-terracotta hover:bg-moroccan-terracotta/90" : ""}
                >
                  <Award className="h-4 w-4 mr-1" /> Popular
                </Button>
              </div>
            </div>
          </div>

          <div ref={containerRef}>
            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${category.id}-${filters.dietary}-${filters.spicy}-${filters.popular}`}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {filteredItems.length > 0 ? (
                      filteredItems.map((item) => (
                        <motion.div key={item.id} variants={itemVariants} className="menu-item">
                          <Card className="overflow-hidden h-full border-moroccan-sand/30 hover:border-moroccan-terracotta">
                            <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} h-full`}>
                              <div className={`relative ${isMobile ? "h-56" : "h-full min-h-[200px]"} overflow-hidden`}>
                                <Image
                                  src={getImageUrl(item.image) || "/placeholder.svg"}
                                  alt={item.name}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  priority={item.id <= 4} // Prioritize loading first 4 images
                                  className="object-cover menu-item-image"
                                />
                                {item.popular && (
                                  <div className="absolute top-2 right-2 z-10">
                                    <Badge className="bg-moroccan-gold text-black font-medium">
                                      <Award className="h-3 w-3 mr-1" /> Popular
                                    </Badge>
                                  </div>
                                )}
                              </div>
                              <CardContent className="p-6 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                  <h3 className="text-xl font-semibold text-moroccan-terracotta">{item.name}</h3>
                                  <span className="font-medium text-moroccan-gold">${item.price}</span>
                                </div>
                                <p className="text-muted-foreground mb-4 flex-grow">{item.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                  {item.dietary.includes("vegetarian") && (
                                    <Badge
                                      variant="outline"
                                      className="bg-moroccan-sand/10 text-moroccan-terracotta border-moroccan-terracotta/30"
                                    >
                                      <Leaf className="h-3 w-3 mr-1" /> Vegetarian
                                    </Badge>
                                  )}
                                  {item.dietary.includes("vegan") && (
                                    <Badge
                                      variant="outline"
                                      className="bg-moroccan-sand/10 text-moroccan-terracotta border-moroccan-terracotta/30"
                                    >
                                      <Leaf className="h-3 w-3 mr-1" /> Vegan
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center">
                                    <span className="text-xs mr-2">Spice: </span>
                                    <div className="spice-level">
                                      {[...Array(3)].map((_, i) => (
                                        <span key={i} className={i < item.spiceLevel ? "opacity-100" : "opacity-20"} />
                                      ))}
                                    </div>
                                  </div>
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Badge variant="outline" className="text-xs cursor-help">
                                          <Info className="h-3 w-3 mr-1" /> {item.region}
                                        </Badge>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>Traditional in {item.region} region</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                              </CardContent>
                            </div>
                          </Card>
                        </motion.div>
                      ))
                    ) : (
                      <motion.div
                        className="col-span-2 text-center py-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <p className="text-lg text-muted-foreground mb-4">No items match your current filters</p>
                        <Button
                          onClick={resetFilters}
                          className="bg-moroccan-terracotta hover:bg-moroccan-terracotta/90"
                        >
                          Reset Filters
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  )
}

