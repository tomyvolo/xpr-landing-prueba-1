"use client"

import { Card, CardContent } from "@/components/ui/card"
import { sportEmbassadors } from "@/lib/brand-config"
import { useRouter } from "next/navigation"

interface SociosXPRProps {
  onSportClick?: (sport: "basquet" | "rugby" | "voley" | "hockey" | "futbol") => void
}

export default function SociosXPR({ onSportClick }: SociosXPRProps) {
  const router = useRouter()
  const sports = [
    {
      id: "basquet",
      name: "Básquet",
      ambassador: sportEmbassadors.basquet,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "rugby",
      name: "Rugby",
      ambassador: sportEmbassadors.rugby,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "voley",
      name: "Vóley",
      ambassador: sportEmbassadors.voley,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "hockey",
      name: "Hockey",
      ambassador: sportEmbassadors.hockey,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "futbol",
      name: "Fútbol",
      ambassador: sportEmbassadors.futbol,
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const handleSportClick = (sport: "basquet" | "rugby" | "voley" | "hockey" | "futbol") => {
    onSportClick?.(sport)
    // Scroll al top después de un pequeño delay para que se renderice la nueva página
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <section id="deportes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Nuestras Disciplinas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entrená con las máximas leyendas del deporte argentino y llevá tu juego al siguiente nivel
          </p>
        </div>

        {/* Grid de deportes - todas del mismo tamaño */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {sports.map((sport) => (
            <Card
              key={sport.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full cursor-pointer"
              onClick={() => handleSportClick(sport.id as "basquet" | "rugby" | "voley" | "hockey" | "futbol")}
            >
              <div className="relative h-full flex flex-col">
                {/* Imagen del deporte - altura fija */}
                <div
                  className="h-48 bg-cover bg-center relative overflow-hidden flex-shrink-0"
                  style={{ backgroundImage: `url(${sport.image})` }}
                >
                  {/* Overlay con color del deporte */}
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ backgroundColor: sport.ambassador.color }}
                  />

                  {/* Logo XPR del deporte */}
                  <div className="absolute top-3 left-3">
                    <div className="text-white font-black text-sm tracking-wider">
                      <span style={{ color: sport.ambassador.color }}>XPR</span>
                    </div>
                    <div className="text-white text-xs font-medium tracking-widest opacity-90">
                      {sport.name.toUpperCase()}
                    </div>
                  </div>
                </div>

                <CardContent className="p-4 flex-1 flex flex-col justify-between">
                  {/* Información del embajador */}
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-lg font-bold mb-2" style={{ color: sport.ambassador.color }}>
                      {sport.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">Entrená con</p>
                    <p className="text-base font-bold text-gray-900">{sport.ambassador.name}</p>
                  </div>

                  {/* Indicador de interactividad */}
                  <div className="text-center mt-3">
                    <div
                      className="inline-block w-8 h-1 rounded-full"
                      style={{ backgroundColor: sport.ambassador.color }}
                    />
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Mensaje motivacional */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
            "Nos respaldan las máximas leyendas del deporte"
          </p>
        </div>
      </div>
    </section>
  )
}
