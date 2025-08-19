interface LogoProps {
  className?: string
  showIcon?: boolean
}

export function Logo({ className = "", showIcon = true }: LogoProps) {
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
