"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

interface ContactFormProps {
  variant?: "hero" | "footer"
  className?: string
}

export default function ContactoFormSimple({ variant = "hero", className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ nombre: "", email: "", mensaje: "" })
    setIsSubmitting(false)

    alert("¡Mensaje enviado correctamente! Te contactaremos pronto.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const isHeroVariant = variant === "hero"

  return (
    <div className={className}>
      <Card
        className={`${isHeroVariant ? "bg-white shadow-xl border-0" : "bg-white/10 backdrop-blur-sm border-white/20"}`}
      >
        <CardContent className="p-6">
          <h3 className={`text-xl font-bold mb-4 ${isHeroVariant ? "text-gray-900" : "text-white"}`}>
            {isHeroVariant ? "¿Listo para empezar?" : "Envianos tu consulta"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="nombre"
                type="text"
                required
                value={formData.nombre}
                onChange={handleChange}
                className={`${
                  isHeroVariant
                    ? "bg-gray-50 border-gray-300 text-gray-900"
                    : "bg-white/10 border-white/30 text-white placeholder-gray-400"
                }`}
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <Input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`${
                  isHeroVariant
                    ? "bg-gray-50 border-gray-300 text-gray-900"
                    : "bg-white/10 border-white/30 text-white placeholder-gray-400"
                }`}
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <Textarea
                name="mensaje"
                required
                value={formData.mensaje}
                onChange={handleChange}
                rows={3}
                className={`${
                  isHeroVariant
                    ? "bg-gray-50 border-gray-300 text-gray-900"
                    : "bg-white/10 border-white/30 text-white placeholder-gray-400"
                } resize-none`}
                placeholder="¿Qué deporte te interesa? Contanos sobre tu experiencia..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold"
            >
              {isSubmitting ? "Enviando..." : "Enviar Consulta"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
