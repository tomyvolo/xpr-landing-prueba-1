"use client"
import XPRLogo from "@/components/xpr-logo"

import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactoFormSimple from "@/components/contacto-form-simple"

export default function ContactoXPR() {
  return (
    <section id="contacto" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Contactanos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ¿Listo para comenzar tu experiencia deportiva? Estamos aquí para ayudarte a dar el primer paso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario de contacto */}
          <ContactoFormSimple variant="footer" />

          {/* Información de contacto y redes */}
          <div className="space-y-8">
            {/* Información de contacto */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Información de Contacto</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Campus XPR</p>
                      <p className="text-gray-300">Córdoba, Argentina</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Teléfono</p>
                      <p className="text-gray-300">+54 351 1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-gray-300">info@xprsports.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Redes sociales */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Seguinos en Redes</h3>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://instagram.com/xprsports"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-pink-400" />
                    <span className="font-medium">Instagram</span>
                  </a>

                  <a
                    href="https://youtube.com/xprsports"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Youtube className="h-6 w-6 text-red-400" />
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
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg"
              >
                <a
                  href="https://wa.me/5491123456789?text=Hola! Me interesa conocer más sobre XPR Sports Experience"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
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
  )
}
