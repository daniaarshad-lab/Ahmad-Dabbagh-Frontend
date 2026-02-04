import { Layout } from "@/components/layout/Layout";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { GradientOrb, BlobShape, WaveDivider, GlowCard, AccentBadge } from "@/components/ui/ModernShapes";
import visionVideo from "@/assets/vision-video.mp4";

// Commenting out the card showing countries
const organisations = [
  {
    id: 1,
    name: "WiseLife Academy",
    description: "Wiselife Academy is designed for professionals and high achievers seeking values-based success and fulfilment. Its mission is to translate divine and human wisdom into practical, meaningful and applicable training. Through this approach, Wiselife Academy supports individuals in navigating life’s complexities with clarity, achieving peace through purpose, and unlocking their full potential while addressing everyday professional and personal challenges.",
    // url: "https://wiselifeacademy.com",
    // icon: "🎓",
  },
  {
    id: 2,
    name: "Prophetic Path",
    description: "Prophetic Path supports Muslims on a structured journey of self-development and spiritual growth. Rooted in Islamic principles, it is designed for youth, teenagers and adults seeking to cleanse the heart, deepen their connection with Allah, and align their lives with the Prophetic model through increased self-awareness, discipline, and consistent spiritual practice.",
    // url: "https://propheticpath.org",
    // icon: "📿",
  },
  {
    id: 3,
    name: "Seek2Change",
    description: " Founded in 2023, Seek 2 Change is an interfaith organisation led by a team of professionally trained instructors. Open to people from all backgrounds, it offers accessible frameworks for personal growth grounded in universal values, self-awareness, and purposeful living, with the aim of cultivating inner peace and collective transformation worldwide.",
    // url: "https://seek2change.com",
    // icon: "✨",
  },
];

const regions = [
  {
    id: 1,
    name: "Europe",
    description: "Established communities across the United Kingdom, with regular programmes in major cities fostering spiritual growth and ethical living.",
  },
  {
    id: 2,
    name: "South Asia",
    description: "Deep historical roots in Pakistan and India, with ongoing educational initiatives and humanitarian projects serving millions.",
  },
  {
    id: 3,
    name: "Southeast Asia",
    description: "Growing presence in Malaysia, Indonesia, and Singapore, addressing the needs of diverse communities.",
  },
  {
    id: 4,
    name: "Africa",
    description: "Sustained engagement across South Africa, Kenya, and Nigeria, combining spiritual teaching with community development.",
  },
  {
    id: 5,
    name: "Middle East",
    description: "Regular programmes in the UAE and Saudi Arabia, connecting tradition with contemporary challenges.",
  },
  {
    id: 6,
    name: "North America",
    description: "Annual visits to the United States and Canada, serving established and emerging communities.",
  },
];

const Vision = () => {
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
            poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
          >
            <source src={visionVideo} type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </motion.div>
        
        {/* Floating decorations */}
        <GradientOrb variant="gold" size="xl" className="-top-32 -right-32 opacity-30" />
        <GradientOrb variant="indigo" size="lg" className="bottom-0 -left-32 opacity-20" />

        {/* Animated ring */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full border border-white/10 hidden md:block"
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
              transition={{ duration: 0.6 }}
            >
              <AccentBadge className="text-white/50 justify-center">
                The Vision
              </AccentBadge>
            </motion.div>
            
            <motion.h1 
              className="heading-display text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Vision & <span className="text-gold">Work</span>
            </motion.h1>

            <motion.p 
              className="body-large text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Progress begins with people. Peace in the world cannot exist without peace within the individual.
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
                <span className="label-text text-xs">Discover</span>
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

        <WaveDivider variant="bottom" color="hsl(var(--background))" className="z-20" />
      </section>

      {/* Vision Statement */}
      <section className="section-padding bg-background relative overflow-hidden">
        <GradientOrb variant="gold" size="lg" className="-top-32 -right-32 opacity-20" />
        <BlobShape variant="indigo" size="md" className="bottom-20 -left-20 opacity-10" />
        
        <div className="container-narrow relative">
          <StaggerContainer className="space-y-12">
            <div className="space-y-6">
              <StaggerItem>
                <h2 className="heading-secondary text-foreground">
                  I Do Not Believe Progress
                  <br />
                  <span className="text-gold">Begins With Systems</span>
                </h2>
              </StaggerItem>
              
              <div className="space-y-6 text-muted-foreground">
                <StaggerItem>
                  <p className="body-large">
                    It begins with people. Across cultures and centuries, meaningful change has always been driven by individuals who cultivated inner clarity, ethical grounding, and responsibility toward others.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p className="body-regular">
                    Peace in the world cannot exist without peace within the individual. My journey has taken me across continents, communities, and contexts  engaging with individuals facing personal struggle, social fragmentation, conflict, and loss.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p className="body-regular">
                    When people are supported in addressing their inner conflicts mental, emotional, spiritual, and physical their capacity to contribute positively to the world expands naturally. Leadership, to me, is not about influence. It is about responsibility.
                  </p>
                </StaggerItem>
              </div>
            </div>

            <StaggerItem>
              <div className="w-16 h-px bg-gold" />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* World Peace Mission */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <GradientOrb variant="indigo" size="xl" className="-top-48 -left-48 opacity-15" />
        <GradientOrb variant="gold" size="lg" className="bottom-0 right-0 opacity-10" />
        
        <div className="container-wide relative">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <AccentBadge className="text-olive justify-center">
              World Peace Mission
            </AccentBadge>
            <h2 className="heading-secondary text-foreground">
              A Civilisational <span className="text-gold">Effort</span>
            </h2>
            <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
              The World Peace Mission is a long-term civilisational effort to reach every continent by 2033.
            </p>
              <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
              Peace begins internally with clarity, self-regulation, dignity, and meaning.Peace, as we understand it, is not a slogan or political outcome. 
              It begins internally  with clarity, self-regulation, dignity, and meaning  and only then can it be expressed externally through families, communities, and societies.
            </p>
            <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
              Our work spans inner peace, social peace, humanitarian relief, and collective responsibility  recognising that human need is complex and interconnected.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {regions.map((region, index) => (
              <Fragment key={region.id}>
              
              <StaggerItem>
                {/* <GlowCard 
                  glowColor="gold" 
                  className="p-6 h-full relative"
                > */}
                  {/* Number badge */}
                  {/* <motion.div
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1, type: "spring" }}
                  >
                    <span className="font-display text-xs text-charcoal font-bold">0{index + 1}</span>
                  </motion.div> */}

                  {/* Top accent line */}

                  {/* <motion.div
                    className="h-px bg-gold mb-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  /> */}
                  
                  {/* <h3 className="heading-tertiary text-foreground mb-3 pr-8 group-hover:text-gold transition-colors">
                    {region.name}
                  </h3>
                  <p className="body-small text-muted-foreground">
                    {region.description}
                  </p> */}
                {/* </GlowCard> */}

              </StaggerItem>
              </Fragment>
            ))}
          </StaggerContainer>

          
        </div>
      </section>

      {/* Organisations */}
      <section className="section-padding bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-olive-dark/20 to-charcoal" />
        
        <GradientOrb variant="gold" size="xl" className="-top-32 -right-32 opacity-25" />
        <GradientOrb variant="indigo" size="lg" className="bottom-0 -left-32 opacity-20" />
        
        <div className="container-wide relative">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <AccentBadge className="text-white/50 justify-center">
              Expressions of the Vision
            </AccentBadge>
            <h2 className="heading-secondary text-white">
              Our <span className="text-gold">Organisations</span>
            </h2>
          </ScrollReveal>

          {/* <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}> */}
            {/* {organisations.map((org, index) => (
              <StaggerItem key={org.id}>
                <motion.a */}
                  {/* href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                > */}
                  {/* <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-gold/30 transition-all duration-500 flex flex-col"> */}

                    {/* Icon badge */}
                    {/* <motion.div
                      className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center shadow-lg text-xl mb-6"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1, type: "spring" }}
                    > */}
                      {/* {org.icon}
                    </motion.div> */}

                    {/* Top accent line */}
                    {/* <motion.div
                      className="absolute top-0 left-0 h-px bg-gold"
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    /> */}
                    
                    {/* <h3 className="heading-tertiary text-white mb-3 group-hover:text-gold transition-colors">
                      {org.name}
                    </h3>
                    <p className="body-small text-white/60 mb-4">
                      {org.description}
                    </p> */}
                    
                   {/* <div className="mt-auto flex items-center gap-2 text-gold/70 group-hover:text-gold transition-colors">

                      <span className="body-small font-medium uppercase tracking-wider">Visit</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div> */}
                {/* </motion.a>
              </StaggerItem>
            </Fragment>
            ))} */}
          {/* </StaggerContainer> */}

          {/* Organisations grid commented out per request */}

        </div>
      </section>

      {/* Future Vision */}
      <section className="section-padding bg-background relative overflow-hidden">
        <GradientOrb variant="indigo" size="lg" className="-top-32 -right-32 opacity-15" />
        
        <div className="container-narrow relative">
          <ScrollReveal className="space-y-8 text-center">
            <AccentBadge className="text-olive justify-center">
              Future Vision
            </AccentBadge>
            <h2 className="heading-secondary text-foreground">
              Humanity Advances
              <br />
              <span className="text-gold">When It Can Imagine</span>
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              One of the great losses of modern life is the erosion of imagination our ability to envision better futures, deeper selves, and more humane societies.Part of the next phase of my work explores how technology, including immersive and virtual environments, can support mindfulness, ethical reflection, and inner development rather than distract from it.
            </p>
            {/* <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
              Part of the next phase of my work explores how technology, including immersive and virtual environments, can support mindfulness, ethical reflection, and inner development rather than distract from it.
            </p> */}
             <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
              Alongside this, we continue to host residential retreats and immersive experiences spaces for stillness, reflection, and realignment helping individuals become the best versions of themselves, for their own sake and for the sake of others.
            </p>
            <div className="w-16 h-px bg-gold mx-auto" />
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
