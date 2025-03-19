import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zaghi Restaurant | Authentic Moroccan Cuisine",
  description: "Experience authentic Moroccan cuisine in an elegant atmosphere at Zaghi Restaurant.",
  openGraph: {
    title: "Zaghi Restaurant | Authentic Moroccan Cuisine",
    description: "Experience authentic Moroccan cuisine in an elegant atmosphere at Zaghi Restaurant.",
    url: "https://zaghi-restaurant.com",
    siteName: "Zaghi Restaurant",
    images: [
      {
        url: "/images/restaurant-og.jpg",
        width: 1200,
        height: 630,
        alt: "Zaghi Restaurant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'