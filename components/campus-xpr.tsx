"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

export default function CampusXPR() {
  const [currentImage, setCurrentImage] = useState(0)

  const campusImages = [
    {
      src: "/placeholder.svg?height=600&width=800&text=Instalaciones+XPR",
      alt: "Instalaciones deportivas del Campus XPR",
      type: "image",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Gimnasio+XPR",
      alt: "Gimnasio cubierto Campus XPR",
      type: "image",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Cancha+Futbol+XPR",
      alt: "Cancha de fútbol Campus XPR",
      type: "image",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Video+Campus+XPR",
      alt: "Video institucional Campus XPR",
      type: "video",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % campusImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + campusImages.length) % campusImages.length)
  }

  return (
    <section id="campus" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido textual */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Campus XPR</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Nuestras instalaciones de clase mundial están diseñadas para formar a los deportistas del futuro,
                combinando tecnología de vanguardia con la experiencia de nuestros embajadores.
              </p>
            </div>

            {/* Información del campus */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Ubicación Estratégica</h4>
                  <p className="text-gray-600">Córdoba, Argentina - Ubicación estratégica en el corazón del país</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Instalaciones Completas</h4>
                  <p className="text-gray-600">
                    Canchas profesionales, gimnasios equipados, áreas de recuperación y espacios educativos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Visión Educativa</h4>
                  <p className="text-gray-600">
                    Formación integral que combina excelencia deportiva con desarrollo personal
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Galería de imágenes */}
          <div className="relative">
            {/* Imagen principal */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              {campusImages[currentImage].type === "video" ? (
                <div className="relative w-full h-96 bg-black flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Video Institucional Campus XPR</p>
                    <p className="text-sm opacity-80">Conocé nuestras instalaciones</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-600 font-bold transition-transform duration-500">
                  Campus XPR
                </div>
              )}

              {/* Controles de navegación */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevImage}
                  className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextImage}
                  className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {campusImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImage ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {campusImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative overflow-hidden rounded aspect-video ${
                    index === currentImage ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  {image.type === "video" ? (
                    <div className="relative w-full h-full bg-black flex items-center justify-center">
                      <div className="text-center text-white">
                        <Play className="h-10 w-10 mx-auto mb-2 opacity-80" />
                        <p className="text-sm font-medium">Video</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 hover:scale-110 transition-transform duration-300">
                      Imagen {index + 1}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
