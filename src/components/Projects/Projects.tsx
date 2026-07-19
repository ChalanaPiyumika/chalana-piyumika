"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { Rocket, Briefcase, MapPin, Compass, GraduationCap, Star } from "lucide-react";

const filters = ["All", "Featured", "In Progress", "Completed"] as const;
type Filter = (typeof filters)[number];

function getFiltered(filter: Filter) {
  if (filter === "All") return projects;
  if (filter === "Featured") return projects.filter((p) => p.featured);
  if (filter === "In Progress") return projects.filter((p) => p.status === "in-progress");
  return projects.filter((p) => p.status === "completed");
}

const projectIcons: Record<string, React.ReactNode> = {
  jobseek: <Briefcase className="w-16 h-16 text-primary/80" />,
  travelease: <MapPin className="w-16 h-16 text-primary/80" />,
  "jungle-eye-safari": <Compass className="w-16 h-16 text-primary/80" />,
  "find-my-degree": <GraduationCap className="w-16 h-16 text-primary/80" />,
};

const cardAccents = [
  { from: "from-violet-500", glow: "shadow-violet-500/10" },
  { from: "from-cyan-500",   glow: "shadow-cyan-500/10" },
  { from: "from-orange-500", glow: "shadow-orange-500/10" },
  { from: "from-emerald-500",glow: "shadow-emerald-500/10" },
  { from: "from-pink-500",   glow: "shadow-pink-500/10" },
];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } },
});

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const filtered = getFiltered(activeFilter);

  return (
    <section id="projects" className="py-28 relative overflow-hidden" style={{ background: "hsl(var(--bg))" }}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
           style={{ background: "radial-gradient(circle, hsl(190 72% 52% / 0.15), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp()}
        >
          <span className="section-tag mb-5"><Rocket className="w-4 h-4 inline mr-1 -mt-1" /> Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-4 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Things I&apos;ve <span className="text-gradient">Built</span>
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-lg mx-auto leading-relaxed">
            A selection of projects I&apos;ve worked on — from full-stack apps to creative experiments.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.1)}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeFilter === f
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5"
              }`}
            >
              {f}
              <span className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold
                                ${activeFilter === f ? "bg-white/20 text-white" : "bg-secondary text-muted-foreground"}`}>
                {getFiltered(f).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                accent={cardAccents[i % cardAccents.length]}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  accent,
}: {
  project: Project;
  index: number;
  accent: { from: string; glow: string };
}) {
  const icon = projectIcons[project.id] ?? <Briefcase className="w-16 h-16 text-primary/80" />;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className={`group flex flex-col rounded-2xl overflow-hidden bg-card border border-border
                  hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-xl ${accent.glow}
                  transition-all duration-300 ${project.featured ? "ring-1 ring-primary/25" : ""}`}
    >
      {/* Card top */}
      <div className="relative h-44 flex items-center justify-center overflow-hidden bg-secondary/50">
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-40"
             style={{ backgroundImage: "radial-gradient(hsl(var(--muted-fg)/0.3) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        {/* Top gradient bar */}
        <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accent.from} via-primary to-transparent opacity-70`} />

        <span className="z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
          {icon}
        </span>

        {project.featured && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                           bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-wider z-10">
            <Star className="w-3 h-3 fill-current text-amber-500 mr-1" /> Featured
          </span>
        )}

        <span className={`absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                          text-[10px] font-bold uppercase tracking-wider z-10 ${
          project.status === "completed"
            ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700/50"
            : "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-700/50"
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${project.status === "completed" ? "bg-emerald-500" : "bg-amber-500"}`} />
          {project.status.replace("-", " ")}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-semibold text-muted-foreground">{project.year}</span>
        </div>

        <div>
          <h3 className="text-[17px] font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-lg bg-secondary text-xs font-semibold text-secondary-foreground">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2.5 py-1 rounded-lg bg-secondary text-xs font-semibold text-muted-foreground">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">
              <GithubIcon /> Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/75 transition-colors ml-auto">
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}
