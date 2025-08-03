"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HistoriaXPR() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const timelineData = [
    {
      year: "2018",
      title: "Los Inicios",
      description: "Hugo Mercau funda XPR con la visión de revolucionar la experiencia deportiva en Argentina.",
      quote: '"Todo gran sueño comienza con un soñador"',
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2019",
      title: "Primeros Embajadores",
      description: "Se suman Javier Zanetti y Luis Scola como embajadores, marcando el inicio de una nueva era.",
      quote: '"La experiencia se comparte, la pasión se contagia"',
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2020",
      title: "Expansión Digital",
      description: "Durante la pandemia, XPR se adapta y lanza programas de entrenamiento virtual.",
      quote: '"La adversidad revela el verdadero carácter"',
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2021",
      title: "Campus XPR",
      description: "Inauguración del Campus XPR, instalaciones de clase mundial para la formación deportiva.",
      quote: '"Construimos el futuro del deporte argentino"',
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2022",
      title: "Crecimiento Multideporte",
      description:
        "Se incorporan Horacio Agulla, Pedro Ibarra y Marko Milinkovic, completando el equipo de embajadores.",
      quote: '"Juntos somos más fuertes"',
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2023",
      title: "Reconocimiento Internacional",
      description: "XPR es reconocida como la empresa de experiencias deportivas más innovadora de Latinoamérica.",
      quote: '"La excelencia no tiene fronteras"',
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const itemsPerView = 3
  const maxIndex = timelineData.length - itemsPerView

  const nextItem = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <section id="socios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Nuestra Historia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            El camino de los sueños hacia la realidad, construido paso a paso con pasión y dedicación
          </p>
        </div>

        {/* Carrusel horizontal con transición */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          {/* Controles de navegación laterales */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevItem}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-3 bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextItem}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-3 bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Contenedor con transición suave - corregido */}
          <div className="px-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {timelineData.map((item, index) => (
                <div key={index} className="w-1/3 px-3 flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    {/* Imagen */}
                    <div className="flex-shrink-0 mb-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 flex flex-col">
                      <div className="mb-2">
                        <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">{item.description}</p>
                      <blockquote className="text-blue-600 font-medium italic text-sm mt-auto">{item.quote}</blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mensaje final */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-4">El Futuro es Ahora</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Cada día escribimos una nueva página en la historia del deporte argentino. ¿Estás listo para ser parte de la
            próxima?
          </p>
        </div>
      </div>
    </section>
  )
}
