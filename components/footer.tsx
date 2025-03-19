import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Zaghi Restaurant</h3>
            <p className="text-muted-foreground">
              Authentic Moroccan cuisine with a focus on traditional recipes and fresh local ingredients.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hours</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monday - Friday: 12pm - 11pm</li>
              <li>Saturday: 12pm - 11pm</li>
              <li>Sunday: 12pm - 10pm</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>27 Boulevard Mohammed V</li>
              <li>Casablanca, 20000, Morocco</li>
              <li>Phone: +212 5 99999999</li>
              <li>Email: info@zaghi-restaurant.com</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zaghi Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

