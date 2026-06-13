"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const navLinks = ["#home", "#about", "#skills", "#projects", "#experience", "#contact"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border">
      {/* Subtle top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col items-center gap-10">

          {/* Brand */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono font-bold text-2xl flex items-center gap-0.5 text-foreground">
              <span className="text-primary">&lt;</span>
              CP
              <span className="text-primary">/&gt;</span>
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-xs leading-relaxed">
              {profile.tagline}
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navLinks.map((href) => {
              const label = href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors capitalize"
                >
                  {label}
                </a>
              );
            })}
          </motion.nav>

          {/* Bottom bar */}
          <div className="w-full pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {year}{" "}
              <span className="text-foreground font-medium">{profile.name}</span>
            </p>
            <a
              href="#home"
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              Back to top
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
