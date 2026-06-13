"use client";

import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const whatIDo = [
  { icon: "🎨", title: "Frontend Development", desc: "Building beautiful, responsive UIs with React, Next.js, and modern CSS." },
  { icon: "⚙️", title: "Backend Development", desc: "Designing scalable APIs and server-side logic with Node.js and databases." },
  { icon: "🚀", title: "Performance & DevOps", desc: "Optimizing applications and setting up CI/CD pipelines for smooth delivery." },
  { icon: "📐", title: "System Design", desc: "Architecting robust, maintainable systems with clean code principles." },
];

const quickInfo = [
  { icon: "📍", label: "Location", value: profile.location },
  { icon: "📧", label: "Email", value: profile.email },
  { icon: "💼", label: "Status", value: profile.availability },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border bg-background text-muted-foreground text-xs font-mono font-medium tracking-widest uppercase shadow-sm">
            <span>01</span>&nbsp;About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Who I Am
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A developer passionate about building products that live at the intersection of design and technology.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 items-start">

          {/* Left: Avatar + info */}
          <motion.div
            className="flex flex-col items-center lg:items-stretch gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Avatar */}
            <div className="relative flex justify-center w-full max-w-[300px] mx-auto">
              <div className="absolute inset-[-20px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
              <div className="relative w-full aspect-square rounded-3xl p-1 bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20">
                <div className="w-full h-full rounded-[20px] bg-card flex items-center justify-center overflow-hidden">
                  <span className="text-6xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent" style={{ fontFamily: "var(--font-display)" }}>
                    CP
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-background border shadow-md text-sm font-semibold text-foreground whitespace-nowrap">
                👨‍💻 Software Engineer
              </div>
            </div>

            {/* Quick info cards */}
            <div className="flex flex-col gap-3 mt-6 w-full">
              {quickInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border shadow-sm hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-xl text-primary flex-shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <span className="block text-[10px] font-bold text-muted-foreground tracking-widest uppercase mb-1">
                      {item.label}
                    </span>
                    <span className="block text-sm font-semibold text-card-foreground">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio + What I do */}
          <div className="flex flex-col gap-10">
            {/* Bio */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="prose prose-gray dark:prose-invert max-w-none"
            >
              <p className="text-base leading-relaxed text-muted-foreground">{profile.bio}</p>
              <p className="text-base leading-relaxed text-muted-foreground mt-4">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source,
                or enjoying a good cup of coffee ☕ while reading about system design and software architecture.
              </p>
            </motion.div>

            {/* What I do */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatIDo.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  className="flex flex-col gap-3 p-6 rounded-xl bg-card border shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-200"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-xl text-primary mb-1">
                    {item.icon}
                  </span>
                  <h4 className="text-base font-bold text-card-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
