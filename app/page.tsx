"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, MapPin, ChefHat } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    text: "The tasting menu was an extraordinary culinary journey. Each dish was a masterpiece of flavors and presentation.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "Impeccable service and an atmosphere that perfectly balances elegance and comfort. The wine pairing was exceptional.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    text: "As a food critic, I've dined at restaurants worldwide, and Savoria stands among the best. Their seasonal menu never disappoints.",
    rating: 5,
  },
]

const features = [
  {
    icon: <ChefHat className="h-10 w-10 text-primary" />,
    title: "Award-Winning Chef",
    description: "Our executive chef brings 20 years of culinary expertise from around the world.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Fresh Ingredients",
    description: "We source local, organic ingredients daily for the freshest possible flavors.",
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Perfect Location",
    description: "Located in the heart of the city with stunning views and convenient access.",
  },
]

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Elegant restaurant interior"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Culinary Excellence in Every Bite</h1>
            <p className="text-xl md:text-2xl mb-8">
              Experience the art of fine dining with our seasonal menu and exceptional service
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link href="/reservations">Reserve a Table</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/menu">Explore Menu</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Savoria
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine culinary artistry, premium ingredients, and impeccable service to create unforgettable dining
              experiences.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Signature Dishes
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our chef's carefully crafted specialties that showcase the finest seasonal ingredients
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Truffle Infused Risotto",
                description: "Arborio rice cooked to perfection with wild mushrooms and truffle oil",
                image:
                  "https://images.pexels.com/photos/5409023/pexels-photo-5409023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                name: "Seared Scallops with Citrus Glaze",
                description: "Fresh scallops seared and served with a delicate citrus reduction",
                image:
                  "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                name: "Aged Wagyu with Seasonal Vegetables",
                description: "Premium Wagyu beef aged 28 days, served with locally sourced vegetables",
                image:
                  "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
            ].map((dish, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={`Featured dish ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                    <p className="text-muted-foreground mb-4">{dish.description}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/menu">View on Menu</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              What Our Guests Say
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our valued guests about their dining experiences
            </motion.p>
          </motion.div>

          {isLoaded && (
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="testimonial-swiper pb-12"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 flex-grow">{testimonial.text}</p>
                      <p className="font-semibold">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for an Unforgettable Dining Experience?</h2>
            <p className="text-lg mb-8 opacity-90">
              Reserve your table today and embark on a culinary journey that will delight your senses.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/reservations">Make a Reservation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

