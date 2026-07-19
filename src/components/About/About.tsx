"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

import { Monitor, Server, Cloud, Layers, MapPin, Mail, Phone } from "lucide-react";

const services = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Frontend Development",
    desc: "Responsive web interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-900/20",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    desc: "Scalable backend systems and REST APIs with Spring Boot, Django, Nest.js, and Express.",
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud & Databases",
    desc: "Database management with MySQL/PostgreSQL and cloud deployments on AWS and Azure.",
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Software Engineering",
    desc: "Building robust systems applying OOP principles, data structures, and clean architecture.",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
  },
];

const infoCards = [

  { icon: <Mail className="w-5 h-5" />, label: "Email", value: profile.email },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: profile.phone },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } },
});

export default function About() {
  return (
    <section id="about" className="py-8 md:py-12 relative overflow-hidden" style={{ background: "hsl(var(--bg))" }}>
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.08), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(190 72% 52% / 0.08), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp()}
        >
          <span className="section-tag mb-5">✦ About Me</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-4 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Who I <span className="text-gradient">Am</span>
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Passionate about building things that make a real difference - one line of code at a time.
          </p>
        </motion.div>

        {/* ── Content ── */}
        <div className="flex flex-col gap-14 max-w-4xl mx-auto">

          <div className="flex flex-col gap-10">
            {/* Bio */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp(0.05)}
            >
              <h3 className="text-2xl font-black text-foreground mb-5" style={{ fontFamily: "var(--font-display)" }}>
                My Story
              </h3>
              <p className="text-[16px] leading-[1.85] text-muted-foreground mb-4">
                {profile.aboutBio}
              </p>
            </motion.div>

            {/* Info cards (horizontal row) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.1)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className="flex flex-col gap-2 p-4 rounded-2xl bg-card border border-border
                             hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5
                             transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-lg
                                 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5">{card.label}</p>
                    <p className="text-sm font-semibold text-foreground truncate">{card.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.15)}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                           bg-primary text-white shadow-md shadow-primary/20
                           hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get In Touch
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                           border border-border bg-card text-foreground
                           hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Profile
              </a>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-border" />

          {/* Services / What I do */}
          <div>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.05)}
              className="text-2xl font-black text-foreground mb-7"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What I Do
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp(0.1 + i * 0.07)}
                  className="group flex flex-col gap-3 p-5 rounded-2xl bg-card border border-border
                             hover:border-primary/40 hover:shadow-lg hover:-translate-y-1
                             transition-all duration-250 overflow-hidden"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${s.bg}
                                  group-hover:scale-110 transition-transform duration-200`}>
                    {s.icon}
                  </div>
                  <h4 className={`text-sm font-bold ${s.color}`}>{s.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
