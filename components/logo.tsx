import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "full" | "icon-only"
}

export function Logo({ 
  className = "", 
  size = "md",
  variant = "full" 
}: LogoProps) {
  const sizeClasses = {
    sm: { width: 120, height: 120 },
    md: { width: 160, height: 160 }, 
    lg: { width: 200, height: 200 },
    xl: { width: 240, height: 240 }
  }

  const iconSizeClasses = {
    sm: { width: 40, height: 40 },
    md: { width: 60, height: 60 }, 
    lg: { width: 80, height: 80 },
    xl: { width: 100, height: 100 }
  }

  const dimensions = variant === "icon-only" ? iconSizeClasses[size] : sizeClasses[size]

  return (
    <div className={`${className}`}>
      <Image
        src="/Beyond Smiles - Wordmark-02.svg"
        alt="Beyond Smiles - Premium Dental Care"
        width={dimensions.width}
        height={dimensions.height}
        className="object-contain"
        priority
      />
    </div>
  )
}
