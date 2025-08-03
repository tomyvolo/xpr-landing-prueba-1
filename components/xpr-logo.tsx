import Image from "next/image"

interface XPRLogoProps {
  variant?: "horizontal" | "vertical"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export default function XPRLogo({ variant = "horizontal", size = "md", className = "" }: XPRLogoProps) {
  // Medidas basadas en el manual: mínimo 2.5cm para versión completa
  const sizeMap = {
    horizontal: {
      sm: { width: 120, height: 32 },
      md: { width: 160, height: 42 },
      lg: { width: 200, height: 53 },
      xl: { width: 300, height: 80 },
    },
    vertical: {
      sm: { width: 80, height: 48 },
      md: { width: 100, height: 60 },
      lg: { width: 140, height: 84 },
      xl: { width: 200, height: 120 },
    },
  }

  const logoSrc = variant === "horizontal" ? "/images/xpr-logo-horizontal.png" : "/images/xpr-logo-vertical.png"
  const dimensions = sizeMap[variant][size]

  return (
    <Image
      src={logoSrc || "/placeholder.svg"}
      alt="XPR Sports Experience"
      width={dimensions.width}
      height={dimensions.height}
      className={`${className} object-contain`}
      priority
    />
  )
}
