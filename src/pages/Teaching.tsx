import { Layout } from "@/components/layout/Layout";
import { Play, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { GradientOrb, BlobShape, WaveDivider, GlowCard, AccentBadge } from "@/components/ui/ModernShapes";
import teachingVideo from "@/assets/teaching-video.mp4";

const themes = [
  {
    id: 1,
    title: "Spiritual Formation",
    description: "The inner journey of purification, remembrance, and nearness to the Divine.",
    teachings: ["The Path of the Heart", "Stations of the Soul", "Divine Remembrance"],
  },
  {
    id: 2,
    title: "Prophetic Guidance",
    description: "Living the way of the Prophet ﷺ in character, worship, and service.",
    teachings: ["Following the Beloved", "The Prophetic Character", "Sunnah in Daily Life"],
  },
  {
    id: 3,
    title: "Ethical Leadership",
    description: "Principles for leading with wisdom, justice, and spiritual grounding.",
    teachings: ["The Servant Leader", "Ethics in Action", "Leading with Wisdom"],
  },
  {
    id: 4,
    title: "Family & Community",
    description: "Building strong families and vibrant communities rooted in sacred values.",
    teachings: ["The Sacred Home", "Nurturing Children", "Community Building"],
  },
];

const featuredTalks = [
  {
    id: 1,
    title: "The Purpose of Life",
    duration: "42 min",
    category: "Spiritual Formation",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
  },
  {
    id: 2,
    title: "Mercy in Action",
    duration: "38 min",
    category: "Prophetic Guidance",
    thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&h=450&fit=crop",
  },
  {
    id: 3,
    title: "Leading with Humility",
    duration: "45 min",
    category: "Ethical Leadership",
    thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=450&fit=crop",
  },
];

const Teaching = () => {
  return (
    <Layout>
      {/* Hero Section - Cinematic style with video background */}
      <section className="hero-section bg-charcoal min-h-[80vh]">
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
            poster="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop"
          >
            <source src={teachingVideo} type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </motion.div>
        
        {/* Floating orbs */}
        <GradientOrb variant="gold" size="xl" className="-top-32 -right-32 opacity-30" />
        <GradientOrb variant="indigo" size="lg" className="bottom-0 -left-48 opacity-20" />

        {/* Animated ring */}
        <motion.div
          className="absolute top-32 right-32 w-32 h-32 rounded-full border border-white/10 hidden md:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Content */}
        <div className="relative z-10 container-narrow text-center text-white">
          <div className="space-y-8">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AccentBadge className="text-white/50 justify-center">
                Wisdom
              </AccentBadge>
            </motion.div>
            
            <motion.h1 
              className="heading-display"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Teaching & <span className="text-gold">Thought</span>
            </motion.h1>
            
            <motion.p 
              className="body-large text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Curated selections from three decades of spiritual teaching, scholarly reflection, and practical guidance.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div 
              className="pt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div 
                className="flex flex-col items-center gap-3 text-white/40"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="label-text text-xs">Explore</span>
                <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2">
                  <motion.div 
                    className="w-1 h-2 rounded-full bg-gold/60"
                    animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <WaveDivider variant="bottom" color="hsl(var(--background))" className="z-10" />
      </section>

      {/* Thematic Areas */}
      <section className="section-padding bg-background relative overflow-hidden">
        <GradientOrb variant="gold" size="lg" className="-top-32 -right-32 opacity-20" />
        <GradientOrb variant="indigo" size="md" className="bottom-0 left-1/4 opacity-15" />
        
        <div className="container-wide relative">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <AccentBadge className="text-olive justify-center">
              Themes
            </AccentBadge>
            <h2 className="heading-secondary text-foreground">
              Areas of <span className="text-gold">Teaching</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
            {themes.map((theme, index) => (
              <StaggerItem key={theme.id}>
                <GlowCard 
                  glowColor="gold" 
                  className="p-8 space-y-6 relative h-full"
                >
                  {/* Number badge */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gold flex items-center justify-center shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1, type: "spring" }}
                  >
                    <span className="font-display text-sm text-charcoal font-bold">0{index + 1}</span>
                  </motion.div>

                  {/* Top accent line */}
                  <motion.div
                    className="h-px bg-gold"
                    initial={{ width: 0 }}
                    whileInView={{ width: "25%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  />
                  
                  <div className="space-y-3 relative pr-8">
                    <h3 className="heading-tertiary text-foreground">{theme.title}</h3>
                    <p className="body-regular text-muted-foreground">{theme.description}</p>
                  </div>

                  <div className="w-8 h-px bg-gold/50" />

                  <div className="space-y-3 relative">
                    <span className="label-text text-muted-foreground">Selected Topics</span>
                    <ul className="space-y-2">
                      {theme.teachings.map((teaching, i) => (
                        <motion.li 
                          key={i} 
                          className="body-small text-foreground flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {teaching}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Talks */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <GradientOrb variant="indigo" size="xl" className="-top-48 -left-48 opacity-15" />
        <GradientOrb variant="gold" size="lg" className="bottom-0 right-0 opacity-10" />

        {/* Decorative ring */}
        <motion.div
          className="absolute top-32 right-40 w-24 h-24 rounded-full border border-gold/15"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="container-wide relative">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <AccentBadge className="text-olive justify-center">
              Featured
            </AccentBadge>
            <h2 className="heading-secondary text-foreground">
              Selected <span className="text-gold">Talks</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {featuredTalks.map((talk, index) => (
              <StaggerItem key={talk.id}>
                <motion.article
                  className="group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Video thumbnail */}
                  <div className="relative aspect-video overflow-hidden rounded-2xl mb-6 shadow-xl shadow-charcoal/10">
                    <div className="relative rounded-2xl overflow-hidden">
                      <motion.img
                        src={talk.thumbnail}
                        alt={talk.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent flex items-center justify-center">
                        <motion.div 
                          className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          animate={{ 
                            boxShadow: [
                              "0 0 0 0 hsl(var(--gold) / 0.4)", 
                              "0 0 0 15px hsl(var(--gold) / 0)", 
                              "0 0 0 0 hsl(var(--gold) / 0)"
                            ]
                          }}
                          transition={{ 
                            boxShadow: { duration: 2, repeat: Infinity },
                            scale: { type: "spring", stiffness: 400 }
                          }}
                        >
                          <Play className="w-5 h-5 text-charcoal ml-0.5" fill="currentColor" />
                        </motion.div>
                      </div>

                      {/* Duration badge */}
                      <div className="absolute bottom-3 right-3 px-3 py-1 bg-charcoal/70 backdrop-blur-sm rounded-full flex items-center gap-2">
                        <Clock className="w-3 h-3 text-white/70" />
                        <span className="text-xs font-medium text-white/80">{talk.duration}</span>
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 bg-gold rounded-full">
                        <span className="text-xs font-medium text-charcoal">{talk.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="heading-tertiary text-foreground group-hover:text-gold transition-colors duration-300">
                      {talk.title}
                    </h3>
                    
                    <motion.div 
                      className="flex items-center gap-2 text-olive group-hover:text-gold transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <span className="body-small font-medium uppercase tracking-wider">Watch now</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Reflection Quote */}
      <section className="section-padding bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-olive-dark/20 to-charcoal" />
        
        <GradientOrb variant="gold" size="lg" className="top-0 -right-32 opacity-25" />
        <GradientOrb variant="indigo" size="md" className="bottom-0 -left-32 opacity-20" />

        {/* Decorative ring */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full border border-white/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        <WaveDivider variant="top" color="hsl(var(--secondary))" />
        
        <div className="container-narrow text-center relative">
          <ScrollReveal>
            <blockquote className="space-y-8">
              <motion.span
                className="font-display text-7xl text-gold/50 block"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                "
              </motion.span>
              <motion.p 
                className="font-sans text-xl md:text-2xl font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Knowledge without action is vanity, and action without knowledge is folly. 
                <span className="text-gold"> The seeker must unite both in the pursuit of nearness to the Divine.</span>
              </motion.p>
              <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-4"
              >
                <motion.span 
                  className="h-px bg-gold/40"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
                <cite className="body-small text-white/40 not-italic uppercase tracking-wider">
                  From "The Path of the Heart"
                </cite>
                <motion.span 
                  className="h-px bg-gold/40"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
              </motion.footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Teaching;
