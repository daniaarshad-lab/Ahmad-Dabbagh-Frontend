import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedLineProps {
  direction?: "horizontal" | "vertical";
  className?: string;
  delay?: number;
}

export function AnimatedLine({ 
  direction = "horizontal", 
  className = "",
  delay = 0 
}: AnimatedLineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (direction === "horizontal") {
    return (
      <motion.div
        ref={ref}
        className={`h-px bg-accent ${className}`}
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      />
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`w-px bg-accent ${className}`}
      initial={{ scaleY: 0, originY: 0 }}
      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    />
  );
}

interface AnimatedBorderProps {
  className?: string;
  delay?: number;
}

export function AnimatedBorder({ className = "", delay = 0 }: AnimatedBorderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Top border */}
      <motion.div
        className="absolute top-0 left-0 h-px bg-accent"
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
      />
      {/* Right border */}
      <motion.div
        className="absolute top-0 right-0 w-px bg-accent"
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.2, ease: "easeOut" }}
      />
      {/* Bottom border */}
      <motion.div
        className="absolute bottom-0 right-0 h-px bg-accent"
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.4, ease: "easeOut" }}
        style={{ originX: 1 }}
      />
      {/* Left border */}
      <motion.div
        className="absolute bottom-0 left-0 w-px bg-accent"
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.6, ease: "easeOut" }}
        style={{ originY: 1 }}
      />
    </div>
  );
}
