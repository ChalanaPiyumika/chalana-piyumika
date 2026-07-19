"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences, education, certifications } from "@/data/experience";
import { Briefcase, GraduationCap, Award, Map } from "lucide-react";

const tabs = ["Experience", "Education", "Certifications"] as const;
type Tab = (typeof tabs)[number];

const tabIcons: Record<Tab, React.ReactNode> = {
  Experience: <Briefcase className="w-4 h-4" />,
  Education: <GraduationCap className="w-4 h-4" />,
  Certifications: <Award className="w-4 h-4" />,
};

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } },
});

export default function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>("Experience");

  return (
    <section id="experience" className="py-8 md:py-12 relative overflow-hidden bg-secondary/30 dark:bg-secondary/10">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
           style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.12), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp()}
        >
          <span className="section-tag mb-5"><Map className="w-4 h-4 inline mr-1 -mt-1" /> Journey</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-4 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Where I&apos;ve worked, studied, and earned knowledge along the way.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10 sm:mb-14 px-4 sm:px-0">
          <div className="flex flex-wrap justify-center items-center gap-1 p-1.5 rounded-2xl bg-card border border-border shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tabIcons[tab]} {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* ── Experience timeline ── */}
          {activeTab === "Experience" && (
            <motion.div
              key="exp"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative grid grid-cols-[28px_1fr] gap-6 pb-10 last:pb-0"
                >
                  {/* Timeline */}
                  <div className="flex flex-col items-center pt-2">
                    <div className="relative z-10 w-3.5 h-3.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_12px_hsl(var(--primary)/0.6)]">
                      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                    </div>
                    {i < experiences.length - 1 && (
                      <div className="flex-1 w-px mt-2" style={{ background: "linear-gradient(to bottom, hsl(var(--primary)/0.4), hsl(var(--border)))" }} />
                    )}
                  </div>

                  {/* Card */}
                  <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-[17px] font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {exp.companyUrl
                            ? <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{exp.company}</a>
                            : <span className="text-primary">{exp.company}</span>
                          }
                          {" · "}{exp.location}
                        </p>
                      </div>
                      <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 flex-shrink-0">
                        <span className="font-mono text-xs font-semibold text-muted-foreground bg-secondary px-2.5 py-1 rounded-lg">
                          {exp.startDate} — {exp.endDate}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                    <ul className="flex flex-col gap-2 mb-5">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <span className="text-primary flex-shrink-0 mt-0.5">▸</span>
                          {r}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-lg bg-secondary text-xs font-semibold text-secondary-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ── Education ── */}
          {activeTab === "Education" && (
            <motion.div
              key="edu"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="group flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-sm text-primary mb-1">{edu.institution} · {edu.location}</p>
                    <p className="font-mono text-xs text-muted-foreground mb-3">{edu.startDate} — {edu.endDate}</p>
                    {edu.gpa && (
                      <span className="inline-flex px-2.5 py-1 rounded-lg bg-secondary text-xs font-semibold text-secondary-foreground mb-3">
                        GPA: {edu.gpa}
                      </span>
                    )}
                    {edu.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{edu.description}</p>
                    )}
                    {edu.achievements && (
                      <ul className="flex flex-col gap-1.5">
                        {edu.achievements.map((a, j) => (
                          <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary/70 text-xs mt-0.5">✦</span> {a}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ── Certifications ── */}
          {activeTab === "Certifications" && (
            <motion.div
              key="cert"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200 text-primary">
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-foreground mb-1">{cert.name}</h4>
                    <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                    <p className="font-mono text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold border border-border bg-background
                                 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                    >
                      View ↗
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
