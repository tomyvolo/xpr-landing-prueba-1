"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function EntrenadoresXPR() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const entrenadores = [
    {
      id: 1,
      nombre: "Hugo Mercau",
      especialidad: "CEO & Fundador XPR",
      deporte: "XPR Sports Experience",
      foto: "/placeholder.svg?height=300&width=300",
      bio: "A lo largo de mi vida profesional me enfoqué en desarrollar negocios de distintos rubros: gastronómicos, desarrollistas, inmobiliarias, etc. dentro y fuera del país. En los últimos 20 años me he dedicado fuertemente al rubro del turismo, desarrollando el primer modelo de franquicias en Argentina generando la modificación de la ley de turismo a los fines de aceptar los sistemas de franquicias dentro del país.",
      logros: ["Fundador XPR Sports Experience", "Desarrollo primer modelo de franquicias turísticas en Argentina"],
    },
    {
      id: 2,
      nombre: "Javier Zanetti",
      especialidad: "Embajador Fútbol",
      deporte: "Football",
      foto: "/placeholder.svg?height=300&width=300",
      bio: "Vicepresidente de Inter de Milán. Leyenda del fútbol mundial con una trayectoria excepcional.",
      logros: [
        "Vicepresidente de Inter de Milán",
        "Fundador y Presidente de PUPI JZ",
        "Fundador de Fundación P.U.P.I",
        "Miembro del Comité de Ética y Disciplina de la FIFA",
        "Embajador de Buena Voluntad de UNICEF",
      ],
    },
    {
      id: 3,
      nombre: "Luis Scola",
      especialidad: "Embajador Básquet",
      deporte: "Basketball",
      foto: "/placeholder.svg?height=300&width=300",
      bio: "CEO de Pallacanestro Varese. Leyenda del básquet argentino y mundial.",
      logros: [
        "CEO de Pallacanestro Varese",
        "Scola Holding - Empresa de inversión",
        "Fundación Luis Scola",
        "Socia Basquet - Organización de campus",
        "Reconocimiento a la Trayectoria Empresarial (2019)",
      ],
    },
    {
      id: 4,
      nombre: "Horacio Agulla",
      especialidad: "Embajador Rugby",
      deporte: "Rugby",
      foto: "/placeholder.svg?height=300&width=300",
      bio: "Director de La Enseñada Polo Club. Leyenda del rugby argentino con una carrera excepcional.",
      logros: [
        "Director de La Enseñada Polo Club",
        "Talent TV en Scrum ESPN",
        "Co-fundador en Forestal Austral Pellets",
        "Ex-Asesor Secretaría de Deportes de la Nación",
        "Head Coach en Hindu Club",
      ],
    },
    {
      id: 5,
      nombre: "Pedro Ibarra",
      especialidad: "Embajador Hockey",
      deporte: "Hockey",
      foto: "/placeholder.svg?height=300&width=300",
      bio: "CEO de Ibarra Sports Management. Leyenda del hockey argentino y mundial.",
      logros: [
        "CEO de Ibarra Sports Management",
        "Fundador de la Fundación Ibarra",
        "Premio al Empresario del Año (2018)",
        "Premio a la Responsabilidad Social Empresarial (2016)",
      ],
    },
    {
      id: 6,
      nombre: "Marko Milinkovic",
      especialidad: "Embajador Vóley",
      deporte: "Volleyball",
      foto: "/placeholder.svg?height=300&width=300",
      bio: "Fundador Milinkovic Group. Leyenda del vóley argentino con una trayectoria empresarial destacada.",
      logros: [
        "Fundador Milinkovic Group",
        "Co-Fundador de VM Marketing",
        "MM Management",
        "Premio 'CEO del Año' (2018)",
        "Premio 'Marca Argentina' a Milinkovic Group (2019)",
        "Empresario Joven del Año (2020)",
      ],
    },
  ]

  const itemsPerView = 3
  const maxIndex = entrenadores.length - itemsPerView

  const nextEntrenador = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prevEntrenador = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <section id="entrenadores" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Nuestro Cuerpo Técnico</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leyendas del deporte que combinan experiencia de élite con pasión por la enseñanza
          </p>
        </div>

        {/* Carrusel de entrenadores con transición */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          {/* Controles de navegación laterales */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevEntrenador}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-3 bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextEntrenador}
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
              {entrenadores.map((entrenador) => (
                <div key={entrenador.id} className="w-1/3 px-3 flex-shrink-0">
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="relative h-full flex flex-col">
                      {/* Foto del entrenador */}
                      <div className="relative overflow-hidden">
                        <img
                          src={entrenador.foto || "/placeholder.svg"}
                          alt={entrenador.nombre}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Overlay con especialidad */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-sm font-medium opacity-90">{entrenador.deporte}</p>
                          <p className="text-lg font-bold">{entrenador.especialidad}</p>
                        </div>
                      </div>

                      <CardContent className="p-6 flex-1 flex flex-col">
                        {/* Información del entrenador */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{entrenador.nombre}</h3>
                          <div className="w-12 h-1 bg-blue-500 rounded-full mb-3" />
                        </div>

                        {/* Bio */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
                          {entrenador.bio}
                        </p>

                        {/* Logros principales */}
                        <div className="space-y-1 mt-auto">
                          {entrenador.logros.slice(0, 2).map((logro, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              <p className="text-xs text-gray-600">{logro}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mensaje motivacional */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
              "La excelencia no es un acto, sino un hábito. Nuestros embajadores te guiarán en cada paso del camino."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
