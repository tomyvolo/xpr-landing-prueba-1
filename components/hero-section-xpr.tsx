"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import XPRLogoSimple from "@/components/xpr-logo-simple"

export default function HeroSectionXPR() {
  const handleScrollToSports = () => {
    const element = document.querySelector("#deportes")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo negro con gradiente sutil */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        {/* Toque sutil de color azul */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto mt-24">
        {/* Líneas de colores arriba del logo */}
        <div className="mb-12">
          <div className="flex justify-center space-x-1 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-red-500" />
            <div className="w-16 h-1 bg-orange-500" />
            <div className="w-16 h-1 bg-yellow-400" />
            <div className="w-16 h-1 bg-green-500" />
            <div className="w-16 h-1 bg-blue-500" />
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent" />
          </div>
        </div>

        {/* Logo principal XPR - más abajo */}
        <div className="mb-16">
          <XPRLogoSimple variant="vertical" size="xl" className="mx-auto" />
        </div>

        {/* Eslogan motivacional */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            {"Entrená y conviví con las"}
            <br />
            <span className="text-blue-400">{"leyendas del deporte"}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {"Estás a un paso de cambiar tu juego para siempre"}
          </p>
        </div>

        {/* Botón principal */}
        <div className="mb-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <a href="#deportes">Explorá nuestras disciplinas</a>
          </Button>
        </div>

        {/* Líneas de colores abajo del botón */}
        <div className="mb-8">
          <div className="flex justify-center space-x-1">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-red-500" />
            <div className="w-12 h-1 bg-orange-500" />
            <div className="w-12 h-1 bg-yellow-400" />
            <div className="w-12 h-1 bg-green-500" />
            <div className="w-12 h-1 bg-blue-500" />
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent" />
          </div>
        </div>

        {/* Flecha clickeable para bajar */}
        <div className="mb-16">
          <Button
            variant="ghost"
            size="lg"
            onClick={handleScrollToSports}
            className="animate-bounce hover:animate-none text-white hover:text-blue-400 transition-colors p-4 rounded-full hover:bg-white/10"
          >
            <ChevronDown className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </section>
  )
}
