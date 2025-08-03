"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Calendar,
  Users,
  Trophy,
  Clock,
  MapPin,
  Info,
  MessageCircle,
  Instagram,
  Youtube,
  Mail,
  Phone,
} from "lucide-react"
import { sportEmbassadors } from "@/lib/brand-config"
import ContactoFormSimple from "@/components/contacto-form-simple"
import XPRLogo from "@/components/xpr-logo"

interface DeporteLandingProps {
  sport: "basquet" | "rugby" | "voley" | "hockey" | "futbol"
  onBack: () => void
}

export default function DeporteLanding({ sport, onBack }: DeporteLandingProps) {
  const [selectedOption, setSelectedOption] = useState<"camp" | "academia" | null>(null)
  const [showTooltip, setShowTooltip] = useState<string | null>(null)

  const sportData = {
    basquet: {
      title: "Básquet XPR",
      description:
        "Desarrollá tu juego bajo la guía de Luis Scola, una de las máximas leyendas del básquet argentino y mundial. Aprendé técnicas profesionales, estrategias de juego y mentalidad ganadora.",
      image: "/placeholder.svg?height=400&width=800&text=Básquet+XPR",
      ambassador: sportEmbassadors.basquet,
      features: [
        "Técnicas de tiro profesional",
        "Estrategias de juego",
        "Preparación física específica",
        "Mentalidad competitiva",
      ],
    },
    rugby: {
      title: "Rugby XPR",
      description:
        "Experimentá la pasión del rugby con Horacio Agulla. Aprendé los valores del deporte, técnicas de juego y desarrollá el espíritu de equipo que caracteriza a este deporte.",
      image: "/placeholder.svg?height=400&width=800&text=Rugby+XPR",
      ambassador: sportEmbassadors.rugby,
      features: [
        "Técnicas de tackle y ruck",
        "Estrategias de formación",
        "Valores del rugby",
        "Preparación física integral",
      ],
    },
    voley: {
      title: "Vóley XPR",
      description:
        "Perfeccioná tu técnica con Marko Milinkovic. Desde fundamentos básicos hasta estrategias avanzadas, desarrollá todas las habilidades necesarias para destacar en el vóley.",
      image: "/placeholder.svg?height=400&width=800&text=Vóley+XPR",
      ambassador: sportEmbassadors.voley,
      features: ["Técnicas de ataque y defensa", "Trabajo en equipo", "Estrategias de juego", "Preparación mental"],
    },
    hockey: {
      title: "Hockey XPR",
      description:
        "Entrená con Pedro Ibarra y llevá tu juego al máximo nivel. Aprendé técnicas profesionales, estrategias tácticas y desarrollá la velocidad y precisión características del hockey.",
      image: "/placeholder.svg?height=400&width=800&text=Hockey+XPR",
      ambassador: sportEmbassadors.hockey,
      features: ["Técnicas de stick", "Estrategias tácticas", "Velocidad y agilidad", "Juego en equipo"],
    },
    futbol: {
      title: "Fútbol XPR",
      description:
        "Aprendé de la mano de Javier Zanetti, leyenda del fútbol mundial. Desarrollá técnicas, tácticas y la mentalidad necesaria para destacar en el deporte más popular del mundo.",
      image: "/placeholder.svg?height=400&width=800&text=Fútbol+XPR",
      ambassador: sportEmbassadors.futbol,
      features: ["Técnicas individuales", "Tácticas de juego", "Liderazgo en cancha", "Preparación profesional"],
    },
  }

  const currentSport = sportData[sport]

  const campEvents = [
    { date: "15-20 Enero", title: "Camp de Verano Intensivo", duration: "5 días", participants: "20 jugadores" },
    { date: "10-15 Marzo", title: "Camp de Técnica Avanzada", duration: "5 días", participants: "16 jugadores" },
    { date: "5-10 Julio", title: "Camp de Invierno", duration: "5 días", participants: "20 jugadores" },
  ]

  const academiaEvents = [
    { date: "Todo el año", title: "Entrenamientos Regulares", duration: "2x semana", participants: "Grupos de 12" },
    { date: "Sábados", title: "Clínicas Especializadas", duration: "3 horas", participants: "Grupos de 8" },
    { date: "Domingos", title: "Partidos Amistosos", duration: "2 horas", participants: "Equipos completos" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header compacto con botón de regreso - sin feedback visual */}
      <div className="bg-black text-white p-3">
        <div className="container mx-auto flex items-center">
          <button
            onClick={onBack}
            className="text-white hover:text-gray-300 mr-4 flex items-center transition-colors focus:outline-none"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Deportes
          </button>
          <h1 className="text-lg font-bold">{currentSport.title}</h1>
        </div>
      </div>

      {/* Banner principal - más compacto */}
      <section className="relative h-64 overflow-hidden">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-2xl">
          {currentSport.title}
        </div>
        <div className="absolute inset-0 opacity-60" style={{ backgroundColor: currentSport.ambassador.color }} />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-2">{currentSport.title}</h2>
            <p className="text-lg md:text-xl font-medium">Entrená con {currentSport.ambassador.name}</p>
          </div>
        </div>
      </section>

      {/* Descripción del deporte - más compacta */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Experiencia {currentSport.ambassador.sport}</h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">{currentSport.description}</p>
                <div className="space-y-2">
                  {currentSport.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: currentSport.ambassador.color }}
                      />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-3 bg-gray-200 flex items-center justify-center text-gray-600 font-bold shadow-lg">
                  {currentSport.ambassador.name}
                </div>
                <h4 className="text-lg font-bold text-gray-900">{currentSport.ambassador.name}</h4>
                <p className="text-gray-600 text-sm">Embajador {currentSport.ambassador.sport}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selector Camp / Academia - Solo toggle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Elegí tu Experiencia</h3>
            <p className="text-base text-gray-600">Dos modalidades diseñadas para diferentes objetivos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Camp */}
            <Card
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedOption === "camp" ? "ring-2" : ""
              }`}
              style={{
                ringColor: selectedOption === "camp" ? currentSport.ambassador.color : "transparent",
              }}
              onClick={() => setSelectedOption(selectedOption === "camp" ? null : "camp")}
              onMouseEnter={() => setShowTooltip("camp")}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <CardContent className="p-6 text-center relative">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${currentSport.ambassador.color}20` }}
                >
                  <Trophy className="h-6 w-6" style={{ color: currentSport.ambassador.color }} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Camp</h4>
                <p className="text-gray-600 text-sm mb-3">Experiencia intensiva de 5 días</p>

                {/* Tooltip */}
                {showTooltip === "camp" && (
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap z-10">
                    <div className="flex items-center space-x-2">
                      <Info className="h-3 w-3" />
                      <span>Inmersión total con el embajador</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Academia */}
            <Card
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedOption === "academia" ? "ring-2" : ""
              }`}
              style={{
                ringColor: selectedOption === "academia" ? currentSport.ambassador.color : "transparent",
              }}
              onClick={() => setSelectedOption(selectedOption === "academia" ? null : "academia")}
              onMouseEnter={() => setShowTooltip("academia")}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <CardContent className="p-6 text-center relative">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${currentSport.ambassador.color}20` }}
                >
                  <Users className="h-6 w-6" style={{ color: currentSport.ambassador.color }} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Academia</h4>
                <p className="text-gray-600 text-sm mb-3">Entrenamiento regular todo el año</p>

                {/* Tooltip */}
                {showTooltip === "academia" && (
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap z-10">
                    <div className="flex items-center space-x-2">
                      <Info className="h-3 w-3" />
                      <span>Desarrollo progresivo y constante</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calendario de eventos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Próximas Actividades</h3>
              <p className="text-base text-gray-600">
                {selectedOption === "camp"
                  ? "Camps intensivos programados"
                  : selectedOption === "academia"
                    ? "Actividades regulares de la academia"
                    : "Todas nuestras actividades disponibles"}
              </p>
            </div>

            {/* Mostrar eventos según selección o todos por defecto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Camps */}
              {(!selectedOption || selectedOption === "camp") && (
                <>
                  {campEvents.map((event, index) => (
                    <Card key={`camp-${index}`} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <Trophy className="h-4 w-4" style={{ color: currentSport.ambassador.color }} />
                          <span className="font-bold text-gray-900 text-sm">CAMP</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4" style={{ color: currentSport.ambassador.color }} />
                          <span className="font-bold text-gray-900 text-sm">{event.date}</span>
                        </div>
                        <h4 className="text-base font-bold text-gray-900 mb-2">{event.title}</h4>
                        <div className="space-y-1 text-xs text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-3 w-3" />
                            <span>{event.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-3 w-3" />
                            <span>{event.participants}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-3 w-3" />
                            <span>Campus XPR, Córdoba</span>
                          </div>
                        </div>
                        <Button
                          className="w-full mt-3 text-xs"
                          size="sm"
                          style={{ backgroundColor: currentSport.ambassador.color }}
                        >
                          Inscribirse
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </>
              )}

              {/* Academia */}
              {(!selectedOption || selectedOption === "academia") && (
                <>
                  {academiaEvents.map((event, index) => (
                    <Card key={`academia-${index}`} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <Users className="h-4 w-4" style={{ color: currentSport.ambassador.color }} />
                          <span className="font-bold text-gray-900 text-sm">ACADEMIA</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4" style={{ color: currentSport.ambassador.color }} />
                          <span className="font-bold text-gray-900 text-sm">{event.date}</span>
                        </div>
                        <h4 className="text-base font-bold text-gray-900 mb-2">{event.title}</h4>
                        <div className="space-y-1 text-xs text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-3 w-3" />
                            <span>{event.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-3 w-3" />
                            <span>{event.participants}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-3 w-3" />
                            <span>Campus XPR, Córdoba</span>
                          </div>
                        </div>
                        <Button
                          className="w-full mt-3 text-xs"
                          size="sm"
                          style={{ backgroundColor: currentSport.ambassador.color }}
                        >
                          Inscribirse
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-gradient-to-br opacity-20"
            style={{
              background: `linear-gradient(135deg, ${currentSport.ambassador.color}20, ${currentSport.ambassador.color}40)`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Título de sección */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">¿Listo para empezar?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Contactanos para más información sobre {currentSport.title} y comenzá tu experiencia deportiva
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Formulario de contacto */}
            <ContactoFormSimple variant="footer" />

            {/* Información de contacto y redes */}
            <div className="space-y-6">
              {/* Información de contacto */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Información de Contacto</h3>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: currentSport.ambassador.color }}
                      >
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Campus XPR</p>
                        <p className="text-gray-300 text-sm">Córdoba, Argentina</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: currentSport.ambassador.color }}
                      >
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Teléfono</p>
                        <p className="text-gray-300 text-sm">+54 351 1234-5678</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: currentSport.ambassador.color }}
                      >
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p className="text-gray-300 text-sm">info@xprsports.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Redes sociales */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Seguinos en Redes</h3>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`https://instagram.com/xprsports`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
                    >
                      <Instagram className="h-4 w-4 text-pink-400" />
                      <span className="font-medium">Instagram</span>
                    </a>

                    <a
                      href={`https://youtube.com/xprsports`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
                    >
                      <Youtube className="h-4 w-4 text-red-400" />
                      <span className="font-medium">YouTube</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Botón flotante de WhatsApp */}
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg"
                >
                  <a
                    href={`https://wa.me/5493511234567?text=Hola! Me interesa conocer más sobre XPR Sports Experience`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chateá por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-4 border-t border-white/20 text-center">
            <div className="flex items-center justify-center">
              <XPRLogo variant="horizontal" size="md" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
