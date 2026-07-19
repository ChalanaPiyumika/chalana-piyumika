"use client";

import { motion } from "framer-motion";
import { profile, socialLinks, navLinks } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border overflow-hidden" style={{ background: "hsl(var(--bg))" }}>
      {/* Gradient top line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 relative z-10">
        <div className="flex flex-col items-center gap-10">

          {/* Brand */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono font-black text-2xl flex items-center text-foreground">
              <span className="text-primary">&lt;</span>
              Chalana
              <span className="text-primary">/&gt;</span>
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-xs leading-relaxed">
              {profile.tagline}
            </p>
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-xl border border-border bg-card flex items-center justify-center
                           text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5
                           hover:-translate-y-0.5 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>

          {/* Nav */}
          <motion.nav
            className="flex flex-wrap justify-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground
                           hover:text-foreground hover:bg-secondary/60 transition-colors capitalize"
              >
                {label}
              </a>
            ))}
          </motion.nav>

          {/* Bottom */}
          <div className="w-full pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {year}{" "}
              <span className="text-foreground font-semibold">{profile.name}</span>
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/75 transition-colors"
            >
              Back to top
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
