import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, ChevronDown } from "lucide-react";
import { GradientOrb, BlobShape, WaveDivider, AccentBadge } from "@/components/ui/ModernShapes";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import contactVideo from "@/assets/contact-video.mp4";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Enquiry Received",
      description: "Thank you for your message. We will respond in due course.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      {/* Hero Section - Cinematic style with video background */}
      <section className="hero-section bg-charcoal min-h-[70vh]">
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
            // poster="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop"
          >
            <source src={contactVideo} type="video/mp4" />
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
                Enquiries
              </AccentBadge>
            </motion.div>
            
            <motion.h1 
              className="heading-display"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Get in <span className="text-gold">Touch</span>
            </motion.h1>
            
            <motion.p 
              className="body-large text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              For professional, institutional, or collaborative enquiries, please get in touch via the contact form.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div 
                className="flex flex-col items-center gap-3 text-white/40"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* <span className="label-text text-xs">Write to us</span>
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

        <WaveDivider variant="bottom" color="hsl(var(--background))" className="z-10" />
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-background relative overflow-hidden">
        <GradientOrb variant="gold" size="lg" className="-top-32 -right-32 opacity-20" />
        <GradientOrb variant="indigo" size="md" className="bottom-0 left-1/4 opacity-15" />
        <BlobShape variant="olive" size="sm" className="top-1/2 -left-16 opacity-10" />

        {/* Floating dots */}
        <motion.div
          className="absolute top-40 right-20 w-2 h-2 rounded-full bg-gold/30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-narrow relative">
          <ScrollReveal>
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-8 bg-card rounded-2xl p-8 md:p-12 shadow-xl shadow-charcoal/5 border border-border/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Form header */}
              <div className="text-center space-y-4 mb-8">
                <h2 className="heading-tertiary text-foreground">
                  Send us a <span className="text-gold">Message</span>
                </h2>
                <div className="w-16 h-px bg-gold mx-auto" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="label-text text-muted-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-olive" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-secondary rounded-xl border border-border/50 text-foreground focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all duration-300 body-regular"
                    placeholder="Your name"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="label-text text-muted-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-olive" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-secondary rounded-xl border border-border/50 text-foreground focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all duration-300 body-regular"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject field */}
              <div className="space-y-2">
                <label htmlFor="subject" className="label-text text-muted-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-olive" />
                  Nature of Enquiry
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-secondary rounded-xl border border-border/50 text-foreground focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all duration-300 body-regular appearance-none cursor-pointer"
                  >
                    <option value="">Select an option</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="media">Media Enquiry</option>
                    <option value="institutional">Institutional Collaboration</option>
                    <option value="general">General Enquiry</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label htmlFor="message" className="label-text text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-secondary rounded-xl border border-border/50 text-foreground focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all duration-300 body-regular resize-none"
                  placeholder="Please provide details about your enquiry..."
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-10 py-4 bg-gold text-charcoal rounded-xl font-medium tracking-wider uppercase text-sm shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div 
                      className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Enquiry
                  </>
                )}
              </motion.button>
            </motion.form>
          </ScrollReveal>

          {/* Footer note */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="body-small text-muted-foreground max-w-lg mx-auto">
              Please note that due to the volume of correspondence, responses may take some time. For urgent matters, please indicate this clearly in your message.
            </p>
            <div className="w-12 h-px bg-gold mx-auto mt-6" />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
