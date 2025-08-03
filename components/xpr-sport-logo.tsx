import Image from "next/image"
import { sportEmbassadors } from "@/lib/brand-config"

interface XPRSportLogoProps {
  sport: "basquet" | "rugby" | "voley" | "hockey" | "futbol"
  variant?: "horizontal" | "vertical"
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function XPRSportLogo({
  sport,
  variant = "horizontal",
  size = "md",
  className = "",
}: XPRSportLogoProps) {
  const sizeMap = {
    horizontal: {
      sm: { width: 120, height: 32 },
      md: { width: 160, height: 42 },
      lg: { width: 200, height: 53 },
    },
    vertical: {
      sm: { width: 80, height: 48 },
      md: { width: 100, height: 60 },
      lg: { width: 140, height: 84 },
    },
  }

  const logoSrc = variant === "horizontal" ? "/images/xpr-logo-horizontal.png" : "/images/xpr-logo-vertical.png"
  const dimensions = sizeMap[variant][size]
  const sportColor = sportEmbassadors[sport].color

  return (
    <div className={`${className} relative`}>
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt={`XPR ${sportEmbassadors[sport].sport} Experience`}
        width={dimensions.width}
        height={dimensions.height}
        className="object-contain"
        priority
      />
      {/* Overlay de color del deporte */}
      <div className="absolute inset-0 mix-blend-multiply opacity-20" style={{ backgroundColor: sportColor }} />
    </div>
  )
}
