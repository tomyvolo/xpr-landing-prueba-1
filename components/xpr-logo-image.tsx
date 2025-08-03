import Image from "next/image"

interface XPRLogoImageProps {
  variant?: "horizontal" | "vertical" | "icon-only"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export default function XPRLogoImage({ variant = "horizontal", size = "md", className = "" }: XPRLogoImageProps) {
  const sizeMap = {
    sm: { width: 120, height: 40 },
    md: { width: 160, height: 50 },
    lg: { width: 200, height: 65 },
    xl: { width: 300, height: 100 },
  }

  const logoSrc =
    variant === "horizontal"
      ? "/images/xpr-logo-horizontal.png"
      : variant === "vertical"
        ? "/images/xpr-logo-vertical.png"
        : "/images/xpr-logo-icon.png"

  return (
    <Image
      src={logoSrc || "/placeholder.svg"}
      alt="XPR Sports Experience"
      width={sizeMap[size].width}
      height={sizeMap[size].height}
      className={`${className} object-contain`}
      priority
    />
  )
}
