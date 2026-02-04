import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SignatureLogo } from "./SignatureLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-olive-dark/10 to-charcoal" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-indigo/5 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
      />

      <div className="container-wide section-padding relative">
        {/* Top section with logo and tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="space-y-4">
            <SignatureLogo variant="light" />
            <p className="body-small text-white/40 max-w-xs">
              A voice for spiritual renewal and civilisational awakening.
            </p>
          </div>
          
          {/* Decorative line */}
          <motion.div 
            className="hidden md:block w-32 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        {/* Navigation grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 pb-16 border-b border-white/10">
          {/* Quick links */}
          <div className="space-y-6">
            <h4 className="label-text text-gold/80 tracking-widest">Navigate</h4>
            <nav className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/vision", label: "Vision & Work" },
                { to: "/teaching", label: "Teaching & Thought" },
                { to: "/contact", label: "Contact" },
              ].map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.to} 
                    className="body-small text-white/50 hover:text-gold transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-gold transition-all duration-300" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Organisations */}
          {/* <div className="space-y-6">
            <h4 className="label-text text-gold/80 tracking-widest">Organisations</h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "https://wiselifeacademy.com", label: "WiseLife Academy" },
                { href: "https://seek2change.com", label: "Seek2Change" },
                { href: "https://propheticpath.org", label: "Prophetic Path" },
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="body-small text-white/50 hover:text-indigo-light transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-indigo transition-all duration-300" />
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </nav>
          </div> */}

          {/* Mission statement */}
          <div className="space-y-6">
            <h4 className="label-text text-gold/80 tracking-widest">Mission</h4>
            <p className="body-small text-white/40 leading-relaxed">
              World Peace Mission — A long-term civilisational effort to reach every continent by 2033.
            </p>
            <div className="flex items-center gap-3">
              <motion.span 
                className="w-2 h-2 rounded-full bg-gold"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="label-text text-white/30">2033</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-small text-white/25">
            © {currentYear} Ahmad Dabbagh. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <motion.div 
              className="w-12 h-px bg-gradient-to-r from-gold/40 via-gold/60 to-gold/40"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <span className="body-small text-white/25">Sunlit wisdom, grounded in humanity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
