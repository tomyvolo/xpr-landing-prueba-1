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

  const logoSrc =
    variant === "horizontal"
      ? "/placeholder.svg?height=42&width=160&text=XPR+Horizontal"
      : "/placeholder.svg?height=120&width=200&text=XPR+Vertical"
  const dimensions = sizeMap[variant][size]

  return (
    <div className={`${className} flex ${variant === "vertical" ? "flex-col" : "flex-row"} items-center`}>
      <div className={`font-black ${variant === "vertical" ? "text-4xl" : "text-xl"} text-white tracking-wider`}>
        <span className="text-blue-400">X</span>
        <span className="text-orange-500">P</span>
        <span className="text-green-500">R</span>
      </div>
      <div
        className={`text-white text-xs font-medium tracking-widest opacity-90 ${variant === "vertical" ? "mt-2" : "ml-2"}`}
      >
        SPORTS EXPERIENCE
      </div>
    </div>
  )
}
