// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// interface SignatureLogoProps {
//   variant?: "light" | "dark";
//   className?: string;
// }

// export function SignatureLogo({ variant = "dark", className }: SignatureLogoProps) {
//   const textColor = variant === "dark" ? "text-foreground" : "text-white";
//   const accentColor = "text-gold";

//   return (
//     <motion.div 
//       className={cn("flex items-center gap-2", className)}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Signature-style SVG mark with A and D */}
//       <svg 
//         viewBox="0 0 60 40" 
//         className="w-12 h-8 md:w-14 md:h-10"
//         fill="none"
//       >
//         {/* Elegant 'A' letter */}
//         <motion.path
//           d="M6 32 L15 10 L24 32"
//           stroke="hsl(var(--gold))"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           fill="none"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         />
//         <motion.path
//           d="M9 24 L21 24"
//           stroke="hsl(var(--gold))"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           fill="none"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
//         />
//         {/* Decorative flourish from A */}
//         <motion.path
//           d="M24 32 C27 32 28 28 26 25"
//           stroke="hsl(var(--gold))"
//           strokeWidth="1.2"
//           strokeLinecap="round"
//           fill="none"
//           opacity="0.5"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
//         />

//         {/* Elegant 'D' letter */}
//         <motion.path
//           d="M34 10 L34 32"
//           stroke="hsl(var(--gold))"
//           strokeWidth="2"
//           strokeLinecap="round"
//           fill="none"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
//         />
//         <motion.path
//           d="M34 10 C50 10 54 21 50 32 C48 36 42 32 34 32"
//           stroke="hsl(var(--gold))"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           fill="none"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
//         />
//         {/* Decorative flourish from D */}
//         <motion.path
//           d="M50 32 C54 34 56 30 55 26"
//           stroke="hsl(var(--gold))"
//           strokeWidth="1.2"
//           strokeLinecap="round"
//           fill="none"
//           opacity="0.5"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
//         />

//         {/* Connecting flourish between letters */}
//         <motion.path
//           d="M26 25 C29 22 31 22 34 21"
//           stroke="hsl(var(--gold))"
//           strokeWidth="1"
//           strokeLinecap="round"
//           fill="none"
//           opacity="0.4"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
//         />
//       </svg>

//       {/* Text part */}
//       <div className="flex flex-col leading-none">
//         <span className={cn(
//           "font-display text-base md:text-lg tracking-[0.2em] uppercase",
//           textColor
//         )}>
//           Ahmad
//         </span>
//         <span className={cn(
//           "font-display text-sm md:text-base tracking-[0.3em] uppercase font-light",
//           accentColor
//         )}>
//           Dabbagh
//         </span>
//       </div>
//     </motion.div>
//   );
// }



// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// interface SignatureLogoProps {
//   variant?: "light" | "dark";
//   className?: string;
// }

// export function SignatureLogo({ variant = "dark", className }: SignatureLogoProps) {
//   const textColor = variant === "dark" ? "text-foreground" : "text-white";
//   const accentColor = "text-gold";

//   return (
//     <motion.div 
//       className={cn("flex items-center gap-3", className)}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Modern connected CAPITAL A + D signature */}
//       <svg 
//         viewBox="0 0 90 40" 
//         className="w-14 h-8 md:w-16 md:h-10"
//         fill="none"
//       >
//         {/* Capital A */}
//         <motion.path
//           d="
//             M8 32
//             C12 18, 18 8, 24 8
//             C30 8, 34 18, 38 32
//           "
//           stroke="hsl(var(--gold))"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           fill="none"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         />

//         {/* A cross stroke */}
//         <motion.path
//           d="M18 22 C24 20, 28 20, 34 22"
//           stroke="hsl(var(--gold))"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//           fill="none"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
//         />

//         {/* Connecting stroke from A to D */}
//         <motion.path
//           d="M38 32 C42 30, 44 28, 46 26"
//           stroke="hsl(var(--gold))"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//           fill="none"
//           opacity="0.7"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
//         />

//         {/* Capital D */}
//         <motion.path
//           d="
//             M46 8
//             L46 32
//             C68 32, 74 22, 74 20
//             C74 18, 68 8, 46 8
//           "
//           stroke="hsl(var(--gold))"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           fill="none"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
//         />

//         {/* Elegant finishing flourish */}
//         <motion.path
//           d="M74 20 C80 22, 84 18, 82 14"
//           stroke="hsl(var(--gold))"
//           strokeWidth="1.2"
//           strokeLinecap="round"
//           fill="none"
//           opacity="0.5"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
//         />
//       </svg>

//       {/* Text part – ONE LINE */}
//       <span
//         className={cn(
//           "font-display text-base md:text-lg tracking-[0.25em] uppercase",
//           textColor,
//           accentColor
//         )}
//       >
//         Ahmad&nbsp;Dabbagh
//       </span>
//     </motion.div>
//   );
// }





import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SignatureLogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function SignatureLogo({ variant = "dark", className }: SignatureLogoProps) {
  const textColor = variant === "dark" ? "text-foreground" : "text-white";
  const accentColor = "text-gold";

  return (
    <motion.div 
      className={cn("flex items-center gap-3", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Modern connected CAPITAL A + D signature */}
      <svg 
        viewBox="0 0 90 40" 
        className="w-14 h-8 md:w-16 md:h-10"
        fill="none"
      >
        {/* Capital A */}
        <motion.path
          d="
            M8 32
            C12 18, 18 8, 24 8
            C30 8, 34 18, 38 32
          "
          stroke="hsl(var(--gold))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* A cross stroke */}
        <motion.path
          d="M18 22 C24 20, 28 20, 34 22"
          stroke="hsl(var(--gold))"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        />

        {/* Connecting stroke from A to D */}
        <motion.path
          d="M38 32 C42 30, 44 28, 46 26"
          stroke="hsl(var(--gold))"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
        />

        {/* Capital D */}
        <motion.path
          d="
            M46 8
            L46 32
            C68 32, 74 22, 74 20
            C74 18, 68 8, 46 8
          "
          stroke="hsl(var(--gold))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        />

        {/* Elegant finishing flourish */}
        <motion.path
          d="M74 20 C80 22, 84 18, 82 14"
          stroke="hsl(var(--gold))"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
        />
      </svg>

      {/* Text part – SAME COLORS AS BEFORE, ONE LINE */}
      <span
        className={cn(
          "font-display text-base md:text-lg tracking-[0.25em] uppercase",
          textColor
        )}
      >
        Ahmad{" "}
        <span className={cn("font-light", accentColor)}>
          Dabbagh
        </span>
      </span>
    </motion.div>
  );
}
