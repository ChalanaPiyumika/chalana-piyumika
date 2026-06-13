"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const filters = ["All", "Featured", "In Progress", "Completed"] as const;
type Filter = typeof filters[number];

function getFiltered(filter: Filter) {
  if (filter === "All") return projects;
  if (filter === "Featured") return projects.filter((p) => p.featured);
  if (filter === "In Progress") return projects.filter((p) => p.status === "in-progress");
  return projects.filter((p) => p.status === "completed");
}

function getCount(filter: Filter) {
  return getFiltered(filter).length;
}

const projectEmojis: Record<string, string> = {
  tourpath: "🗺️",
  "ecommerce-platform": "🛒",
  "task-management": "📋",
  "weather-app": "🌤️",
  "chat-app": "💬",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const filtered = getFiltered(activeFilter);

  return (
    <section id="projects" className="py-24 bg-background">
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
            <span>03</span>&nbsp;Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Things I&apos;ve Built
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A selection of projects I&apos;ve worked on — from full-stack applications to creative experiments.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {f}
              <span className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-sm text-[11px] font-bold font-mono ${
                activeFilter === f ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {getCount(f)}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const emoji = projectEmojis[project.id] ?? "💼";

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`flex flex-col rounded-xl overflow-hidden bg-card border shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/50 group ${
        project.featured ? "ring-1 ring-primary/20" : ""
      }`}
    >
      {/* Image area */}
      <div className="relative h-48 bg-secondary/50 flex flex-col items-center justify-center gap-3 overflow-hidden border-b border-border">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--foreground) / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <span className="text-5xl filter drop-shadow-md group-hover:scale-110 transition-transform duration-300">{emoji}</span>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-accent/50 backdrop-blur-sm border border-accent text-xs font-bold text-accent-foreground">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
            project.status === "completed" ? "bg-primary/10 text-primary" : "bg-amber-500/10 text-amber-500"
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${project.status === "completed" ? "bg-primary" : "bg-amber-500"}`} />
            {project.status.replace("-", " ")}
          </span>
        </div>

        <h3 className="text-xl font-bold text-card-foreground" style={{ fontFamily: "var(--font-display)" }}>
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 mt-auto border-t border-border/50">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-auto"
            >
              <ExternalIcon /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}
