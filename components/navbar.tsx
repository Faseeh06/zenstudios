import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <header className="max-w-6xl w-full flex items-center justify-between px-8 py-4 bg-card shadow-sm rounded-2xl pointer-events-auto">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="ZenStudios Logo" 
              width={180} 
              height={50} 
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Centered Navigation */}
        <nav className="flex-1 flex justify-center">
          <div className="hidden md:flex space-x-12">
            <Link
              href="/services"
              className="hover:opacity-80 transition-colors font-bold text-secondary"
            >
              Services
            </Link>
            <Link href="/about" className="hover:opacity-80 transition-colors font-bold text-secondary">
              Who Are We
            </Link>
            <Link
              href="/toolkit"
              className="hover:opacity-80 transition-colors font-bold text-secondary"
            >
              Toolkit
            </Link>
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="flex-1 flex justify-end">
          <div className="flex items-center space-x-3">
            <Link href="/contact">
              <Button
                variant="outline"
                className="flex items-center space-x-2 rounded-full font-bold border-primary text-primary hover:opacity-80"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Us</span>
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                className="rounded-full font-bold text-primary-foreground bg-primary hover:opacity-90"
              >
                Projects
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
} 