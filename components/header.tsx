"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#technologies", label: "Technologies" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse-glow rounded-2xl shadow-xl px-4 py-2   hover:scale-105 hover:shadow-2xl transition-all duration-300 backdrop-blur-md">
            Nimeth Nimdinu
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rounded-xl bg-white/10 backdrop-blur-md px-4 py-2 shadow-md border border-primary/10">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-foreground hover:text-accent transition-all duration-300 font-semibold group animate-slide-in-right px-3 py-1 rounded-lg hover:bg-primary/10 hover:shadow-lg focus:ring-2 focus:ring-primary/40 focus:outline-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden glass hover:glass-card transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass-card rounded-lg animate-fade-in-up">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-all duration-300 font-semibold p-2 rounded-lg hover:bg-accent/10 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
