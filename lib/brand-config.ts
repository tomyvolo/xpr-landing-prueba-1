export const brandColors = {
  // Colores por deporte según manual
  rugby: "#F95951",
  hockey: "#00bcff",
  futbol: "#00c279", // Cambio de football a futbol
  basquet: "#ff993f", // Cambio de basketball a basquet
  voley: "#ffed38", // Cambio de volleyball a voley

  // Colores institucionales
  black: "#1a1a1a",
  white: "#ffffff",
  gray: {
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
}

export const sportEmbassadors = {
  basquet: {
    name: "Luis Scola",
    color: brandColors.basquet,
    sport: "Básquet",
  },
  rugby: {
    name: "Horacio Agulla", // Corrección del nombre
    color: brandColors.rugby,
    sport: "Rugby",
  },
  voley: {
    name: "Marko Milinkovic",
    color: brandColors.voley,
    sport: "Vóley",
  },
  hockey: {
    name: "Pedro Ibarra",
    color: brandColors.hockey,
    sport: "Hockey",
  },
  futbol: {
    name: "Javier Zanetti",
    color: brandColors.futbol,
    sport: "Fútbol",
  },
}

// Gradiente institucional que integra todos los colores deportivos
export const institutionalGradient = `linear-gradient(90deg, 
  ${brandColors.rugby} 0%, 
  ${brandColors.basquet} 20%, 
  ${brandColors.voley} 40%, 
  ${brandColors.futbol} 60%, 
  ${brandColors.hockey} 80%, 
  ${brandColors.voley} 100%
)`
