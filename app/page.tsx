"use client"

import { useEffect, useState } from "react"
import HeaderXPR from "@/components/header-xpr"
import HeroSectionXPR from "@/components/hero-section-xpr"
import SociosXPR from "@/components/socios-xpr"
import CampusXPR from "@/components/campus-xpr"
import EntrenadoresXPR from "@/components/entrenadores-xpr"
import HistoriaXPR from "@/components/historia-xpr"
import ContactoXPR from "@/components/contacto-xpr"
import ContactoFormSimple from "@/components/contacto-form-simple"
import DeporteLanding from "@/components/deporte-landing"
import SponsorsXPR from "@/components/sponsors-xpr"

export default function XPRLanding() {
  // Smooth scroll para navegación
  const [currentView, setCurrentView] = useState<"main" | "sport">("main")
  const [selectedSport, setSelectedSport] = useState<"basquet" | "rugby" | "voley" | "hockey" | "futbol" | null>(null)

  const handleSportClick = (sport: "basquet" | "rugby" | "voley" | "hockey" | "futbol") => {
    setSelectedSport(sport)
    setCurrentView("sport")
  }

  const handleBackToMain = () => {
    setCurrentView("main")
    setSelectedSport(null)
  }

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    document.addEventListener("click", handleSmoothScroll)
    return () => document.removeEventListener("click", handleSmoothScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {currentView === "main" ? (
        <>
          <HeaderXPR />
          <main>
            <HeroSectionXPR />

            {/* Formulario de contacto inicial */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto">
                  <ContactoFormSimple variant="hero" />
                </div>
              </div>
            </section>

            <SociosXPR onSportClick={handleSportClick} />
            <SponsorsXPR />
            <CampusXPR />
            <EntrenadoresXPR />
            <HistoriaXPR />
            <ContactoXPR />
          </main>
        </>
      ) : (
        selectedSport && <DeporteLanding sport={selectedSport} onBack={handleBackToMain} />
      )}
    </div>
  )
}
