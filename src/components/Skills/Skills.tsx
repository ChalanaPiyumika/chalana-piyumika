"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/skills";
import { Zap } from "lucide-react";

const allTechs = [
  "Figma", "Postman", "Swagger", "Nginx",
  "Prisma", "Vite", "Vercel",
  "Supabase", "Redis", "GraphQL", "Kubernetes",
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } },
});

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);
  const active = skills.find((s) => s.category === activeCategory) ?? skills[0];

  return (
    <section id="skills" className="py-8 md:py-12 relative overflow-hidden bg-secondary/30 dark:bg-secondary/10">
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.2), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp()}
        >
          <span className="section-tag mb-5"><Zap className="w-4 h-4 inline mr-1 -mt-1" /> Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-4 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Technologies I use to bring ideas to life — from design to deployment.
          </p>
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.1)}
          className="flex flex-wrap gap-2.5 justify-center mb-12"
        >
          {skills.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeCategory === cat.category
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5"
                }`}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
          >
            {active.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group flex flex-col gap-4 p-5 rounded-2xl bg-card border border-border
                           hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5
                           transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-2xl
                                  group-hover:scale-110 transition-transform duration-200">
                    {skill.icon}
                  </div>
                  <span className="flex-1 text-sm font-bold text-foreground">{skill.name}</span>
                  <span className="font-mono text-xs font-bold text-primary">{skill.level}%</span>
                </div>
                {/* Progress */}
                <div className="h-2 w-full rounded-full bg-primary/15 dark:bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(190 72% 52%))" }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.9, delay: i * 0.05 + 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Also familiar with */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp(0.1)}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-border" />
            <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase">Also familiar with</p>
            <div className="h-px w-10 bg-border" />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {allTechs.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.025 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold
                           border border-border bg-card text-muted-foreground
                           hover:border-primary/40 hover:text-primary hover:-translate-y-0.5
                           transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
