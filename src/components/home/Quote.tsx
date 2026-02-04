import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientOrb, BlobShape, WaveDivider } from "@/components/ui/ModernShapes";

export function Quote() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-charcoal">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-olive-dark/20 to-charcoal" />

      {/* Floating orbs */}
      <GradientOrb variant="gold" size="lg" className="top-0 -right-32 opacity-25" />
      <GradientOrb variant="indigo" size="md" className="bottom-0 -left-32 opacity-20" />

      {/* Animated blob */}
      <BlobShape variant="gradient" size="lg" className="-top-20 -right-20 opacity-10" />

      {/* Decorative ring */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-full border border-white/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Top wave */}
      <WaveDivider variant="top" color="hsl(var(--background))" />

      {/* Content */}
      <div className="relative z-10 container-narrow text-center">
        <ScrollReveal>
          <blockquote className="space-y-8">
            {/* Opening Quote Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <span className="font-display text-7xl md:text-8xl text-gold/60 leading-none">
                "
              </span>
            </motion.div>

            <motion.p 
              className="font-sans text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Across history, our greatest advances from the alleviation of poverty, to systems of care and welfare, to scientific discovery have not come from fear or dominance, but from 
              <span className="text-gold"> a deep human impulse to benefit others</span> and serve something larger than the self.
            </motion.p>

            <motion.footer 
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.span 
                className="h-px bg-gold/40"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <cite className="label-text text-white/50 not-italic">
                Ahmad Dabbagh
              </cite>
              <motion.span 
                className="h-px bg-gold/40"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.footer>
          </blockquote>
        </ScrollReveal>
      </div>

      {/* Bottom wave */}
      <WaveDivider variant="bottom" color="hsl(var(--secondary))" />
    </section>
  );
}
