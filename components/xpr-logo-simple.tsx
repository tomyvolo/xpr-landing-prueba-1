interface XPRLogoSimpleProps {
  variant?: "horizontal" | "vertical"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export default function XPRLogoSimple({ variant = "horizontal", size = "md", className = "" }: XPRLogoSimpleProps) {
  const sizeMap = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-4xl",
  }

  if (variant === "vertical") {
    return (
      <div className={`${className} flex flex-col items-center`}>
        <div className={`font-black ${sizeMap[size]} text-white tracking-wider`}>
          <span className="text-blue-400">X</span>
          <span className="text-orange-500">P</span>
          <span className="text-green-500">R</span>
        </div>
        <div className="text-white text-xs font-medium tracking-widest opacity-90">SPORTS EXPERIENCE</div>
      </div>
    )
  }

  return (
    <div className={`${className} flex items-center space-x-2`}>
      <div className={`font-black ${sizeMap[size]} text-white tracking-wider`}>
        <span className="text-blue-400">X</span>
        <span className="text-orange-500">P</span>
        <span className="text-green-500">R</span>
      </div>
      <div className="text-white text-xs font-medium tracking-widest opacity-90">SPORTS EXPERIENCE</div>
    </div>
  )
}
