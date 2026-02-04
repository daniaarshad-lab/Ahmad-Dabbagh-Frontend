import { motion } from "framer-motion";

interface GeometricPatternProps {
  variant?: "lines" | "grid" | "islamic" | "dots";
  className?: string;
  opacity?: number;
}

export function GeometricPattern({ 
  variant = "lines", 
  className = "",
  opacity = 0.05 
}: GeometricPatternProps) {
  
  if (variant === "lines") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <svg className="w-full h-full" style={{ opacity }}>
          <defs>
            <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <svg className="w-full h-full" style={{ opacity }}>
          <defs>
            <pattern id="grid-pattern" patternUnits="userSpaceOnUse" width="60" height="60">
              <rect width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
              <circle cx="30" cy="30" r="1" fill="currentColor" className="text-accent" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
    );
  }

  if (variant === "islamic") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <svg className="w-full h-full" style={{ opacity: opacity * 1.5 }}>
          <defs>
            <pattern id="islamic-pattern" patternUnits="userSpaceOnUse" width="80" height="80">
              {/* Eight-pointed star pattern */}
              <polygon 
                points="40,10 50,30 70,30 55,45 60,65 40,55 20,65 25,45 10,30 30,30" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                className="text-accent"
              />
              <circle cx="40" cy="40" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <svg className="w-full h-full" style={{ opacity }}>
          <defs>
            <pattern id="dots-pattern" patternUnits="userSpaceOnUse" width="30" height="30">
              <circle cx="15" cy="15" r="1.5" fill="currentColor" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>
    );
  }

  return null;
}
