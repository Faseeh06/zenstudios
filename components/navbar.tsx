import { MessageCircle, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

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

        {/* Centered Navigation - Desktop */}
        <nav className="flex-1 flex justify-center">
          <div className="hidden md:flex space-x-12">
            <Link
              href="/services"
              className="hover:opacity-80 transition-colors font-bold text-secondary"
            >
              Services
            </Link>
            <Link href="/careers" className="hover:opacity-80 transition-colors font-bold text-secondary">
              Careers
            </Link>
            <Link
              href="/toolkit"
              className="hover:opacity-80 transition-colors font-bold text-secondary"
            >
              Toolkit
            </Link>
          </div>
        </nav>

        {/* Action Buttons - Desktop */}
        <div className="flex-1 flex justify-end">
          <div className="hidden md:flex items-center space-x-3">
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

          {/* Hamburger Menu - Mobile */}
          <div className="md:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="w-7 h-7 text-primary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2">
                <DropdownMenuItem asChild>
                  <Link href="/services" className="w-full font-bold">Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/careers" className="w-full font-bold">Careers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/toolkit" className="w-full font-bold">Toolkit</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="w-full font-bold flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2" /> Message Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/projects" className="w-full font-bold">Projects</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </div>
  )
} 