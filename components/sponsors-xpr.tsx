"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function SponsorsXPR() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const sponsors = [
    {
      id: 1,
      name: "Nike",
      logo: "/placeholder.svg?height=80&width=120",
      category: "Equipamiento Deportivo",
    },
    {
      id: 2,
      name: "Adidas",
      logo: "/placeholder.svg?height=80&width=120",
      category: "Indumentaria",
    },
    {
      id: 3,
      name: "Gatorade",
      logo: "/placeholder.svg?height=80&width=120",
      category: "Hidratación",
    },
    {
      id: 4,
      name: "Under Armour",
      logo: "/placeholder.svg?height=80&width=120",
      category: "Tecnología Deportiva",
    },
    {
      id: 5,
      name: "Puma",
      logo: "/placeholder.svg?height=80&width=120",
      category: "Calzado Deportivo",
    },
    {
      id: 6,
      name: "Wilson",
      logo: "/placeholder.svg?height=80&width=120",
      category: "Equipos Deportivos",
    },
    {
      id: 7,
      name: "Spalding",
      logo: "/placeholder.svg?height=80&width=120",
      category: "Pelotas y Accesorios",
    },
    {
      id: 8,
      name: "New Balance",
      logo: "/placeholder.svg?height=80&width=120",
      category: "Calzado Técnico",
    },
  ]

  const itemsVisible = 4 // Mostrar 4 sponsors a la vez
  const maxIndex = sponsors.length - itemsVisible

  const nextSponsor = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSponsor = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const visibleSponsors = sponsors.slice(currentIndex, currentIndex + itemsVisible)

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Trabajamos con</h3>
          <p className="text-gray-600">Las mejores marcas del deporte mundial</p>
        </div>

        {/* Carrusel de sponsors */}
        <div className="relative max-w-4xl mx-auto">
          {/* Controles laterales */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevSponsor}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2 bg-white shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSponsor}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2 bg-white shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Grid de sponsors visibles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-12">
            {visibleSponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
              >
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="h-12 w-auto object-contain mb-3 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <h4 className="font-bold text-gray-900 text-sm text-center">{sponsor.name}</h4>
                <p className="text-xs text-gray-500 text-center mt-1">{sponsor.category}</p>
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
