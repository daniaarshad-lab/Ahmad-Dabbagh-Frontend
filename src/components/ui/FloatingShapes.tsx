import { motion } from "framer-motion";

interface FloatingShapesProps {
  variant?: "light" | "dark" | "accent";
  className?: string;
}

export function FloatingShapes({ variant = "light", className = "" }: FloatingShapesProps) {
  const colorClasses = {
    light: "bg-foreground/5",
    dark: "bg-primary-foreground/10",
    accent: "bg-accent/20",
  };

  const borderClasses = {
    light: "border-foreground/10",
    dark: "border-primary-foreground/20",
    accent: "border-accent/30",
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large circle - top right */}
      <motion.div
        className={`absolute -top-32 -right-32 w-96 h-96 rounded-full ${colorClasses[variant]}`}
        animate={{
          y: [0, 20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Diamond shape - left */}
      <motion.div
        className={`absolute top-1/4 -left-16 w-32 h-32 border-2 ${borderClasses[variant]}`}
        style={{ transform: "rotate(45deg)" }}
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small circle - bottom left */}
      <motion.div
        className={`absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full border ${borderClasses[variant]}`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hexagon shape - right side */}
      <motion.div
        className={`absolute top-1/2 -right-8 w-40 h-40`}
        animate={{
          y: [0, 25, 0],
          rotate: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className={`w-full h-full opacity-20`}>
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className={variant === "dark" ? "text-primary-foreground" : variant === "accent" ? "text-accent" : "text-foreground"}
          />
        </svg>
      </motion.div>

      {/* Small diamond - bottom right */}
      <motion.div
        className={`absolute bottom-16 right-1/4 w-16 h-16 ${colorClasses[variant]}`}
        style={{ transform: "rotate(45deg)" }}
        animate={{
          rotate: [45, 90, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cross/Plus shape - top left */}
      <motion.div
        className={`absolute top-20 left-1/3`}
        animate={{
          rotate: [0, 90, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className={`w-12 h-1 ${colorClasses[variant]}`} />
        <div className={`w-1 h-12 ${colorClasses[variant]} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />
      </motion.div>

      {/* Dots pattern - scattered */}
      <motion.div
        className="absolute top-1/3 right-1/3"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className={`grid grid-cols-3 gap-3`}>
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${colorClasses[variant]}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
