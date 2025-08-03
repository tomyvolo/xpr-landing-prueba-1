"use client"

import { useState } from "react"
import { Menu, X, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import XPRLogo from "@/components/xpr-logo"

export default function HeaderXPR() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const menuItems = [
    { label: "Deportes", href: "#deportes" },
    { label: "Campus", href: "#campus" },
    { label: "Entrenadores", href: "#entrenadores" },
    { label: "Socios", href: "#socios" },
    { label: "Contacto", href: "#contacto" },
    { label: "Tienda Próximamente", href: "#tienda", isComingSoon: true },
  ]

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo XPR - Versión horizontal real */}
          <button onClick={() => handleNavigation("#inicio")} className="flex items-center">
            <XPRLogo variant="horizontal" size="md" className="hover:opacity-80 transition-opacity" />
          </button>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className="text-white hover:text-gray-300 transition-colors text-sm font-medium tracking-wide flex items-center space-x-2"
              >
                {item.label === "Tienda Próximamente" && <ShoppingCart className="h-4 w-4" />}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Barra de búsqueda y menú móvil */}
          <div className="flex items-center space-x-4">
            {/* Búsqueda inteligente */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Buscar deportes, entrenadores..."
                    className="w-64 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                    className="text-white hover:text-gray-300"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-white hover:text-gray-300"
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Menú móvil */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="text-white hover:text-gray-300 transition-colors text-sm font-medium tracking-wide flex items-center space-x-2 w-full text-left"
                >
                  {item.label === "Tienda Próximamente" && <ShoppingCart className="h-4 w-4" />}
                  <span>{item.label}</span>
                </button>
              ))}
              {/* Búsqueda móvil */}
              <div className="pt-4 border-t border-gray-800">
                <Input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
