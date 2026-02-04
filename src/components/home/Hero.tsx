import { motion } from "framer-motion";
import { ModernFloatingShapes, GradientOrb, WaveDivider } from "@/components/ui/ModernShapes";
import heroVideo from "@/assets/hero-video.mp4";

export function Hero() {
  return (
    <section className="hero-section bg-charcoal">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </motion.div>

      {/* Subtle Floating orbs */}
      <GradientOrb variant="gold" size="lg" className="-top-32 -right-32 opacity-40" />
      <GradientOrb variant="indigo" size="md" className="bottom-1/4 -left-32 opacity-30" />

      {/* Animated floating elements */}
      <ModernFloatingShapes variant="dark" />

      {/* Decorative ring - top left */}
      <motion.div
        className="absolute top-16 left-16 z-10 hidden md:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-24 h-24 rounded-full border border-white/10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center text-white">
        <div className="space-y-10">
          {/* Label */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-4 label-text text-white/50">
              <span className="w-12 h-px bg-gold/60" />
              Spiritual Guide & Teacher
              <span className="w-12 h-px bg-gold/60" />
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="heading-display text-white">
              Ahmad
              <br />
              <span className="text-gold">Dabbagh</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            className="body-large text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I have always been fascinated by humanity's capacity to rise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="/vision"
              className="px-8 py-4 bg-gold text-charcoal rounded-lg font-medium tracking-wider uppercase text-sm shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore the Vision
            </motion.a>
            <motion.a
              href="/teaching"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-medium tracking-wider uppercase text-sm border border-white/20 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Teachings
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div 
              className="flex flex-col items-center gap-3 text-white/40"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* <span className="label-text text-xs">Scroll</span>
              <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2">
                <motion.div 
                  className="w-1 h-2 rounded-full bg-gold/60"
                  animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider at bottom */}
      {/* <WaveDivider variant="bottom" color="hsl(var(--background))" className="z-20" /> */}
            <WaveDivider variant="bottom" color="hsl(var(--background))" className="z-20" />

    </section>
  );
}
