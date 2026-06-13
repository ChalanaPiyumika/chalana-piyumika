"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/skills";

const allTechs = ["Figma", "Postman", "Swagger", "Nginx", "Jest", "Selenium", "Prisma", "Three.js", "Socket.io", "Webpack", "Vite", "Vercel"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);
  const active = skills.find((s) => s.category === activeCategory) ?? skills[0];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border bg-secondary/50 text-muted-foreground text-xs font-mono font-medium tracking-widest uppercase shadow-sm">
            <span>02</span>&nbsp;Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
            My Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Technologies I use to bring ideas to life, from design to deployment.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
          >
            {active.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="p-5 rounded-xl bg-card border shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-200"
              >
                {/* Top row */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-2xl">
                    {skill.icon}
                  </span>
                  <span className="flex-1 text-sm font-bold text-card-foreground">{skill.name}</span>
                  <span className="font-mono text-xs font-bold text-muted-foreground">{skill.level}%</span>
                </div>
                {/* Progress bar */}
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.9, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Also familiar with */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs text-muted-foreground font-semibold tracking-widest uppercase mb-6">
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {allTechs.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
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
