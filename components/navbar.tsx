"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-slate-900/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 overflow-hidden rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
            <img
              src="https://image.similarpng.com/file/similarpng/very-thumbnail/2022/05/Letter-S-with-3D-design-on-transparent-background-PNG.png"
              alt="S Logo"
            />
          </div>
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Satyam
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button
            variant="outline"
            size="icon"
            className="border-none bg-transparent"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="default" className="bg-purple-600 hover:bg-purple-700" asChild>
            <a
              href="https://drive.google.com/file/d/1BV89rXCFysOmwG1BeCBiMhJf3yYDcWoJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="border-none bg-transparent"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <button className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-lg py-4">
          <nav className="flex flex-col items-center gap-4">
            <MobileNavLink href="#home" onClick={() => setMobileMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <Button variant="default" className="bg-purple-600 hover:bg-purple-700 w-32" asChild>
              <a
                href="https://drive.google.com/file/d/1BV89rXCFysOmwG1BeCBiMhJf3yYDcWoJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="text-white hover:text-purple-400 transition-colors relative group">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-white hover:text-purple-400 transition-colors py-2 w-full text-center"
    >
      {children}
    </Link>
  )
}
