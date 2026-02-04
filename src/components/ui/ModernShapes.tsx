// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// // Subtle gradient orbs for background decoration
// interface GradientOrbProps {
//   variant?: "gold" | "indigo" | "olive";
//   size?: "sm" | "md" | "lg" | "xl";
//   className?: string;
// }

// export function GradientOrb({ variant = "gold", size = "md", className }: GradientOrbProps) {
//   const sizeClasses = {
//     sm: "w-32 h-32",
//     md: "w-48 h-48",
//     lg: "w-72 h-72",
//     xl: "w-96 h-96",
//   };

//   const gradients = {
//     gold: "from-gold/20 via-sun-beige/10 to-transparent",
//     indigo: "from-indigo/15 via-indigo-light/8 to-transparent",
//     olive: "from-olive/15 via-olive-light/8 to-transparent",
//   };

//   return (
//     <motion.div
//       className={cn(
//         "absolute rounded-full blur-3xl bg-gradient-radial pointer-events-none",
//         sizeClasses[size],
//         gradients[variant],
//         className
//       )}
//       animate={{
//         scale: [1, 1.05, 1],
//         opacity: [0.6, 0.8, 0.6],
//       }}
//       transition={{
//         duration: 8,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     />
//   );
// }

// // Organic blob shape for decoration
// interface BlobShapeProps {
//   variant?: "gold" | "indigo" | "olive" | "gradient";
//   size?: "sm" | "md" | "lg";
//   className?: string;
// }

// export function BlobShape({ variant = "gold", size = "md", className }: BlobShapeProps) {
//   const sizeClasses = {
//     sm: "w-24 h-24",
//     md: "w-40 h-40",
//     lg: "w-64 h-64",
//   };

//   const colors = {
//     gold: "bg-gold/10",
//     indigo: "bg-indigo/10",
//     olive: "bg-olive/10",
//     gradient: "bg-gradient-to-br from-gold/10 via-indigo/5 to-olive/10",
//   };

//   return (
//     <motion.div
//       className={cn(
//         "absolute rounded-full blur-2xl pointer-events-none",
//         sizeClasses[size],
//         colors[variant],
//         className
//       )}
//       animate={{
//         borderRadius: [
//           "60% 40% 30% 70% / 60% 30% 70% 40%",
//           "30% 60% 70% 40% / 50% 60% 30% 60%",
//           "60% 40% 30% 70% / 60% 30% 70% 40%",
//         ],
//       }}
//       transition={{
//         duration: 20,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     />
//   );
// }

// // Elegant single wave divider for sections - better proportioned
// interface WaveDividerProps {
//   variant?: "top" | "bottom";
//   color?: string;
//   className?: string;
// }

// export function WaveDivider({ variant = "bottom", color = "hsl(var(--background))", className }: WaveDividerProps) {
//   return (
//     <div className={cn(
//       "absolute left-0 w-full overflow-hidden leading-none pointer-events-none",
//       variant === "top" ? "top-0" : "bottom-0",
//       className
//     )}>
//       <svg
//         className={cn(
//           "relative block w-full h-20 md:h-28 lg:h-36",
//           variant === "top" && "rotate-180"
//         )}
//         viewBox="0 0 1200 120"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M0,120 C200,60 400,100 600,80 C800,60 1000,20 1200,60 L1200,120 Z"
//           fill={color}
//         />
//       </svg>
//     </div>
//   );
// }

// // Modern floating shapes - subtle, slow movement
// interface ModernFloatingShapesProps {
//   variant?: "light" | "dark";
// }

// export function ModernFloatingShapes({ variant = "light" }: ModernFloatingShapesProps) {
//   const baseOpacity = variant === "dark" ? "opacity-20" : "opacity-10";
  
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <motion.div
//         className={cn("absolute top-20 right-1/4 w-3 h-3 rounded-full bg-gold", baseOpacity)}
//         animate={{ y: [0, -20, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className={cn("absolute bottom-1/3 left-20 w-2 h-2 rounded-full bg-indigo", baseOpacity)}
//         animate={{ y: [0, -15, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//       />
//       <motion.div
//         className={cn("absolute top-1/2 right-32 w-4 h-4 rounded-full bg-olive", baseOpacity)}
//         animate={{ y: [0, -25, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
//       />
//     </div>
//   );
// }

// // Modern image frame with organic shapes
// interface ModernImageFrameProps {
//   src: string;
//   alt: string;
//   variant?: "blob" | "pill" | "organic" | "modern";
//   className?: string;
// }

// export function ModernImageFrame({ src, alt, variant = "modern", className }: ModernImageFrameProps) {
//   const frameStyles = {
//     blob: "rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]",
//     pill: "rounded-[40%_60%_60%_40%_/_50%_50%_50%_50%]",
//     organic: "rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]",
//     modern: "rounded-2xl",
//   };

//   return (
//     <motion.div
//       className={cn(
//         "relative overflow-hidden shadow-xl shadow-charcoal/10",
//         frameStyles[variant],
//         className
//       )}
//       whileHover={{ scale: 1.02 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="absolute -inset-0.5 bg-gradient-to-br from-gold/20 via-transparent to-indigo/20 blur-sm" />
      
//       <div className={cn("relative overflow-hidden", frameStyles[variant])}>
//         <motion.img
//           src={src}
//           alt={alt}
//           className="w-full h-full object-cover"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1 }}
//         />
//       </div>
//     </motion.div>
//   );
// }

// // Glow card with subtle hover effects
// interface GlowCardProps {
//   children: React.ReactNode;
//   glowColor?: "gold" | "indigo" | "olive";
//   className?: string;
// }

// export function GlowCard({ children, glowColor = "gold", className }: GlowCardProps) {
//   const glowColors = {
//     gold: "hover:shadow-gold/10",
//     indigo: "hover:shadow-indigo/10",
//     olive: "hover:shadow-olive/10",
//   };

//   return (
//     <motion.div
//       className={cn(
//         "relative bg-card rounded-2xl border border-border/50 shadow-lg transition-all duration-500",
//         glowColors[glowColor],
//         "hover:shadow-2xl hover:-translate-y-1",
//         className
//       )}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // Accent badge/label
// interface AccentBadgeProps {
//   children: React.ReactNode;
//   className?: string;
// }

// export function AccentBadge({ children, className }: AccentBadgeProps) {
//   return (
//     <span className={cn(
//       "inline-flex items-center gap-3 label-text",
//       className
//     )}>
//       <span className="w-8 h-px bg-gold" />
//       {children}
//       <span className="w-8 h-px bg-gold" />
//     </span>
//   );
// }




import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Subtle gradient orbs for background decoration
interface GradientOrbProps {
  variant?: "gold" | "indigo" | "olive";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function GradientOrb({ variant = "gold", size = "md", className }: GradientOrbProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-72 h-72",
    xl: "w-96 h-96",
  };

  const gradients = {
    gold: "from-gold/20 via-sun-beige/10 to-transparent",
    indigo: "from-indigo/15 via-indigo-light/8 to-transparent",
    olive: "from-olive/15 via-olive-light/8 to-transparent",
  };

  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-3xl bg-gradient-radial pointer-events-none",
        sizeClasses[size],
        gradients[variant],
        className
      )}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Organic blob shape for decoration
interface BlobShapeProps {
  variant?: "gold" | "indigo" | "olive" | "gradient";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function BlobShape({ variant = "gold", size = "md", className }: BlobShapeProps) {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-40 h-40",
    lg: "w-64 h-64",
  };

  const colors = {
    gold: "bg-gold/10",
    indigo: "bg-indigo/10",
    olive: "bg-olive/10",
    gradient: "bg-gradient-to-br from-gold/10 via-indigo/5 to-olive/10",
  };

  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-2xl pointer-events-none",
        sizeClasses[size],
        colors[variant],
        className
      )}
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* =========================================================
   ✅ FIXED WAVE DIVIDER — EXACT SAME CURVE AS OLD VERSION
   ========================================================= */
interface WaveDividerProps {
  variant?: "top" | "bottom";
  color?: string;
  className?: string;
}

export function WaveDivider({
  variant = "bottom",
  color = "hsl(var(--background))",
  className,
}: WaveDividerProps) {
  return (
    <div
      className={cn(
        "absolute left-0 w-full overflow-hidden leading-none pointer-events-none",
        variant === "top" ? "top-0" : "bottom-0",
        variant === "bottom" && "rotate-180",
        className
      )}
    >
      <svg
        className="relative block w-full h-16 md:h-24"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

// Modern floating shapes - subtle, slow movement
interface ModernFloatingShapesProps {
  variant?: "light" | "dark";
}

export function ModernFloatingShapes({ variant = "light" }: ModernFloatingShapesProps) {
  const baseOpacity = variant === "dark" ? "opacity-20" : "opacity-10";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className={cn("absolute top-20 right-1/4 w-3 h-3 rounded-full bg-gold", baseOpacity)}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn("absolute bottom-1/3 left-20 w-2 h-2 rounded-full bg-indigo", baseOpacity)}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className={cn("absolute top-1/2 right-32 w-4 h-4 rounded-full bg-olive", baseOpacity)}
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
}

// Modern image frame with organic shapes
interface ModernImageFrameProps {
  src: string;
  alt: string;
  variant?: "blob" | "pill" | "organic" | "modern";
  className?: string;
}

export function ModernImageFrame({ src, alt, variant = "modern", className }: ModernImageFrameProps) {
  const frameStyles = {
    blob: "rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]",
    pill: "rounded-[40%_60%_60%_40%_/_50%_50%_50%_50%]",
    organic: "rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]",
    modern: "rounded-2xl",
  };

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden shadow-xl shadow-charcoal/10",
        frameStyles[variant],
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-br from-gold/20 via-transparent to-indigo/20 blur-sm" />

      <div className={cn("relative overflow-hidden", frameStyles[variant])}>
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
}

// Glow card with subtle hover effects
interface GlowCardProps {
  children: React.ReactNode;
  glowColor?: "gold" | "indigo" | "olive";
  className?: string;
}

export function GlowCard({ children, glowColor = "gold", className }: GlowCardProps) {
  const glowColors = {
    gold: "hover:shadow-gold/10",
    indigo: "hover:shadow-indigo/10",
    olive: "hover:shadow-olive/10",
  };

  return (
    <motion.div
      className={cn(
        "relative bg-card rounded-2xl border border-border/50 shadow-lg transition-all duration-500",
        glowColors[glowColor],
        "hover:shadow-2xl hover:-translate-y-1",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

// Accent badge/label
interface AccentBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function AccentBadge({ children, className }: AccentBadgeProps) {
  return (
    <span className={cn("inline-flex items-center gap-3 label-text", className)}>
      <span className="w-8 h-px bg-gold" />
      {children}
      <span className="w-8 h-px bg-gold" />
    </span>
  );
}
