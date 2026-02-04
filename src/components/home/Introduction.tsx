import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import teacherPortrait from "@/assets/teacher-portrait.jpg";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { GradientOrb, BlobShape, ModernImageFrame } from "@/components/ui/ModernShapes";

export function Introduction() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background decorations */}
      <GradientOrb variant="gold" size="lg" className="-top-32 -right-32 opacity-30" />
      <GradientOrb variant="indigo" size="md" className="bottom-0 left-1/4 opacity-20" />
      <BlobShape variant="olive" size="sm" className="top-1/2 -right-16 opacity-15" />
      
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image with Modern Frame */}
          <ScrollReveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image with organic shape */}
              <div className="relative z-10">
                <ModernImageFrame
                  src={teacherPortrait}
                  alt="Ahmad Dabbagh"
                  variant="organic"
                  className="aspect-[4/5] w-full max-w-md mx-auto"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-gold/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-indigo/15"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <StaggerContainer className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <StaggerItem>
                <motion.span 
                  className="inline-flex items-center gap-3 label-text text-olive"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="w-8 h-px bg-gold" />
                  The Journey
                </motion.span>
              </StaggerItem>
              
              <StaggerItem>
                <h2 className="heading-primary text-foreground">
                  Raised Across
                  <br />
                  <span className="text-gold">Cultures</span>
                </h2>
              </StaggerItem>
            </div>

            <div className="space-y-6">
              <StaggerItem>
                <p className="body-large text-muted-foreground">
                  I was raised across cultures from Pakistan to Northern Europe, and later settling in the United Kingdom. Living between worlds taught me early that humanity is both diverse and deeply connected.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="body-regular text-muted-foreground">
                  What has always struck me is this: the figures who leave the deepest marks on history whether spiritual, ethical, or civilisational are not remembered for power, but for their ability to elevate humanity itself.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="body-regular text-muted-foreground">
                  My work is driven by a simple conviction: Every human being carries within them the capacity for wisdom, compassion, and contribution and when this is unlocked, societies transform.
                </p>
              </StaggerItem>
            </div>

            <StaggerItem>
              <div className="w-16 h-px bg-gold" />
            </StaggerItem>

            <StaggerItem>
              <Link
                to="/vision"
                className="inline-flex items-center gap-3 group"
              >
                <motion.span 
                  className="body-regular text-foreground font-medium uppercase tracking-wider text-sm group-hover:text-gold transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Explore the Vision
                </motion.span>
                <motion.div
                  className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/20 group-hover:shadow-xl transition-all"
                  whileHover={{ x: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-4 h-4 text-charcoal" />
                </motion.div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
