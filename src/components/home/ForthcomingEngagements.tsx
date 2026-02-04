// import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
// import { GradientOrb, BlobShape, GlowCard, AccentBadge } from "@/components/ui/ModernShapes";

// const engagements = [
//   {
//     id: 1,
//     title: "Annual Spiritual Retreat",
//     location: "United Kingdom",
//     date: "March 2026",
//   },
//   {
//     id: 2,
//     title: "Leadership & Ethics Conference",
//     location: "Malaysia",
//     date: "May 2026",
//   },
//   {
//     id: 3,
//     title: "Community Gathering",
//     location: "South Africa",
//     date: "July 2026",
//   },
// ];

// export function ForthcomingEngagements() {
//   return (
//     <section className="section-padding bg-secondary relative overflow-hidden">
//       {/* Background decorations */}
//       <GradientOrb variant="gold" size="lg" className="-top-32 -left-32 opacity-25" />
//       <GradientOrb variant="indigo" size="md" className="bottom-0 right-0 opacity-20" />
//       <BlobShape variant="olive" size="sm" className="top-1/3 right-1/4 opacity-10" />

//       {/* Decorative floating dot */}
//       <motion.div
//         className="absolute top-20 right-20 w-2 h-2 rounded-full bg-gold/40"
//         animate={{ y: [0, -15, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="container-medium relative">
//         <ScrollReveal className="text-center space-y-4 mb-16">
//           <AccentBadge className="text-olive justify-center">
//             Forthcoming
//           </AccentBadge>
//           <h2 className="heading-secondary text-foreground">
//             Upcoming <span className="text-gold">Engagements</span>
//           </h2>
//         </ScrollReveal>

//         <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
//           {engagements.map((engagement, index) => (
//             <StaggerItem key={engagement.id}>
//               <GlowCard glowColor="gold" className="p-8 group h-full">
//                 {/* Number badge */}
//                 <motion.div
//                   className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: 0.3 + index * 0.1, type: "spring" }}
//                 >
//                   <span className="font-display text-sm text-charcoal font-bold">0{index + 1}</span>
//                 </motion.div>

//                 <div className="space-y-6 relative">
//                   {/* Top accent line */}
//                   <motion.div
//                     className="h-px bg-gold"
//                     initial={{ width: 0 }}
//                     whileInView={{ width: "30%" }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
//                   />

//                   <h3 className="heading-tertiary text-foreground group-hover:text-gold transition-colors duration-300 pr-8">
//                     {engagement.title}
//                   </h3>

//                   <div className="space-y-3">
//                     <motion.div 
//                       className="flex items-center gap-3 text-muted-foreground"
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                     >
//                       <div className="w-8 h-8 rounded-full bg-sun-beige/50 flex items-center justify-center">
//                         <MapPin className="w-4 h-4 text-olive" />
//                       </div>
//                       <span className="body-small">{engagement.location}</span>
//                     </motion.div>

//                     <motion.div 
//                       className="flex items-center gap-3 text-muted-foreground"
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                     >
//                       <div className="w-8 h-8 rounded-full bg-sun-beige/50 flex items-center justify-center">
//                         <CalendarDays className="w-4 h-4 text-olive" />
//                       </div>
//                       <span className="body-small">{engagement.date}</span>
//                     </motion.div>
//                   </div>

//                   {/* Learn more link */}
//                   <motion.div 
//                     className="flex items-center gap-2 text-olive group-hover:text-gold transition-colors pt-4"
//                     whileHover={{ x: 3 }}
//                   >
//                     <span className="body-small font-medium uppercase tracking-wider">Learn more</span>
//                     <ArrowRight className="w-4 h-4" />
//                   </motion.div>
//                 </div>
//               </GlowCard>
//             </StaggerItem>
//           ))}
//         </StaggerContainer>
//       </div>
//     </section>
//   );
// }




import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { GradientOrb, BlobShape, GlowCard, AccentBadge } from "@/components/ui/ModernShapes";

const engagements = [
  {
    id: 1,
    title: "Annual Spiritual Retreat",
    location: "United Kingdom",
    date: "March 2026",
  },
  {
    id: 2,
    title: "Leadership & Ethics Conference",
    location: "Malaysia",
    date: "May 2026",
  },
  {
    id: 3,
    title: "Community Gathering",
    location: "South Africa",
    date: "July 2026",
  },
];

export function ForthcomingEngagements() {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Background decorations */}
      <GradientOrb variant="gold" size="lg" className="-top-32 -left-32 opacity-25" />
      <GradientOrb variant="indigo" size="md" className="bottom-0 right-0 opacity-20" />
      <BlobShape variant="olive" size="sm" className="top-1/3 right-1/4 opacity-10" />

      {/* Decorative floating dot */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 rounded-full bg-gold/40"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-medium relative">
        <ScrollReveal className="text-center space-y-4 mb-16">
          <AccentBadge className="text-olive justify-center">
            Forthcoming
          </AccentBadge>
          <h2 className="heading-secondary text-foreground">
            Upcoming <span className="text-gold">Engagements</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {engagements.map((engagement, index) => (
            <StaggerItem key={engagement.id}>
              <GlowCard glowColor="gold" className="p-8 group h-full relative">
                {/* Number badge inside the card */}
                <motion.div
                  className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  <span className="font-display text-sm text-charcoal font-bold">0{index + 1}</span>
                </motion.div>

                <div className="space-y-6 relative">
                  {/* Top accent line */}
                  <motion.div
                    className="h-px bg-gold"
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  />

                  <h3 className="heading-tertiary text-foreground group-hover:text-gold transition-colors duration-300 pr-8">
                    {engagement.title}
                  </h3>

                  <div className="space-y-3">
                    <motion.div
                      className="flex items-center gap-3 text-muted-foreground"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-sun-beige/50 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-olive" />
                      </div>
                      <span className="body-small">{engagement.location}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-3 text-muted-foreground"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-sun-beige/50 flex items-center justify-center">
                        <CalendarDays className="w-4 h-4 text-olive" />
                      </div>
                      <span className="body-small">{engagement.date}</span>
                    </motion.div>
                  </div>

                  {/* Learn more link */}
                  <motion.div
                    className="flex items-center gap-2 text-olive group-hover:text-gold transition-colors pt-4"
                    whileHover={{ x: 3 }}
                  >
                    <span className="body-small font-medium uppercase tracking-wider">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
