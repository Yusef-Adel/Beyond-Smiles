interface LogoProps {
  className?: string
  showIcon?: boolean
}

export function Logo({ className = "", showIcon = true }: LogoProps) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      {showIcon && (
        <div className="w-12 h-6 sm:w-16 sm:h-8">
          <svg viewBox="0 0 100 50" className="w-full h-full">
            <defs>
              <linearGradient id="smileGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D6FFD7" />
                <stop offset="100%" stopColor="#72846F" />
              </linearGradient>
            </defs>
            <path
              d="M10 35 Q50 10 90 35"
              stroke="url(#smileGradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
      <div className="text-sage-green font-serif text-lg sm:text-xl font-medium tracking-wide">
        beyond<span className="italic">smiles</span>
      </div>
    </div>
  )
}
