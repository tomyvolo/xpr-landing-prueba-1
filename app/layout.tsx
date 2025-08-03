import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "XPR Sports Experience - Entrená con las leyendas del deporte",
  description:
    "Entrená y conviví con las máximas leyendas del deporte argentino. Llevá tu juego al siguiente nivel con Luis Scola, Javier Zanetti, Horacio Agulla, Pedro Ibarra y Marko Milinkovic.",
  keywords: "XPR, deportes, entrenamiento, básquet, fútbol, rugby, hockey, vóley, Luis Scola, Javier Zanetti",
  authors: [{ name: "XPR Sports Experience" }],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
