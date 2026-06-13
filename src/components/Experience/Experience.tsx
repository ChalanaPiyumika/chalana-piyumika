"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experiences, education, certifications } from "@/data/experience";

const tabs = ["Experience", "Education", "Certifications"] as const;
type Tab = typeof tabs[number];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>("Experience");

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border bg-background text-muted-foreground text-xs font-mono font-medium tracking-widest uppercase shadow-sm">
            <span>04</span>&nbsp;Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
            My Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Where I&apos;ve worked, studied, and earned knowledge along the way.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-6 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  activeTab === tab
                    ? "bg-background text-foreground shadow-sm"
                    : "hover:bg-background/50 hover:text-foreground"
                }`}
              >
                {tab === "Experience" ? "💼 " : tab === "Education" ? "🎓 " : "🏆 "}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Experience timeline */}
        {activeTab === "Experience" && (
          <div className="max-w-3xl mx-auto flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative grid grid-cols-[24px_1fr] gap-6 pb-12 last:pb-0"
              >
                {/* Timeline dot + line */}
                <div className="flex flex-col items-center pt-2">
                  <div className="relative flex-shrink-0 w-3 h-3 rounded-full bg-primary border-2 border-primary z-10 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                  {i < experiences.length - 1 && (
                    <div className="flex-1 w-px bg-border mt-2" />
                  )}
                </div>

                {/* Card */}
                <div className="group">
                  <div className="p-6 rounded-xl bg-card border shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-card-foreground" style={{ fontFamily: "var(--font-display)" }}>
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {exp.companyUrl ? (
                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                              {exp.company}
                            </a>
                          ) : (
                            <span className="text-primary">{exp.company}</span>
                          )}
                          {" · "}
                          <span>{exp.location}</span>
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                        <span className="font-mono text-xs text-muted-foreground">
                          {exp.startDate} — {exp.endDate}
                        </span>
                        <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                    <ul className="flex flex-col gap-2 mb-5">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                          <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                          {r}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs font-medium text-secondary-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Education */}
        {activeTab === "Education" && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-xl bg-card border shadow-sm hover:border-primary/50 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <span className="text-4xl flex-shrink-0">🎓</span>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-sm text-primary mb-1">{edu.institution} · {edu.location}</p>
                  <p className="font-mono text-xs text-muted-foreground mb-3">{edu.startDate} — {edu.endDate}</p>
                  
                  {edu.gpa && (
                    <p className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground mb-3">
                      GPA: {edu.gpa}
                    </p>
                  )}
                  {edu.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{edu.description}</p>
                  )}
                  {edu.achievements && (
                    <ul className="flex flex-col gap-1.5">
                      {edu.achievements.map((a, j) => (
                        <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary/70">✦</span> {a}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {activeTab === "Certifications" && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-200"
              >
                <span className="text-4xl flex-shrink-0">{cert.icon}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-bold text-card-foreground mb-1">{cert.name}</h4>
                  <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                  <p className="font-mono text-xs text-muted-foreground">{cert.date}</p>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3"
                  >
                    View ↗
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
