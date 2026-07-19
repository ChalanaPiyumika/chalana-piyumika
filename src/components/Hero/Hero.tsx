"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { profile, socialLinks } from "@/data/profile";
import { MdWavingHand } from "react-icons/md";


const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const cur = profile.roles[roleIndex.current];
      if (!textRef.current) return;
      if (!isDeleting.current) {
        textRef.current.textContent = cur.slice(0, charIndex.current + 1);
        charIndex.current++;
        if (charIndex.current === cur.length) {
          isDeleting.current = true;
          t = setTimeout(tick, 2200);
          return;
        }
      } else {
        textRef.current.textContent = cur.slice(0, charIndex.current - 1);
        charIndex.current--;
        if (charIndex.current === 0) {
          isDeleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % profile.roles.length;
        }
      }
      t = setTimeout(tick, isDeleting.current ? 42 : 72);
    };
    t = setTimeout(tick, 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] lg:h-screen flex items-center overflow-hidden"
      style={{ background: "hsl(var(--bg))" }}
    >
      {/* ── Mesh gradient background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light: coloured blobs visible on white; Dark: deep-toned versions */}
        <div
          className="animate-blob absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full opacity-40 dark:opacity-30"
          style={{ background: "radial-gradient(circle, var(--mesh-1), transparent 70%)" }}
        />
        <div
          className="animate-blob-delay absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-35 dark:opacity-25"
          style={{ background: "radial-gradient(circle, var(--mesh-2), transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-30 dark:opacity-20"
          style={{ background: "radial-gradient(circle, var(--mesh-3), transparent 70%)" }}
        />
        {/* Fine dot grid */}
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ════ LEFT ════ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center"
          >


            {/* Heading */}
            <motion.div variants={fadeUp} className="mb-5">
              <p className="text-base md:text-lg font-semibold text-muted-foreground mb-2 tracking-wide">
                Hi there, I&apos;m <MdWavingHand className="w-5 h-5 inline ml-1 -mt-1 text-amber-500" />
              </p>
              <h1
                className="text-[2.6rem] sm:text-[3.2rem] xl:text-[3.8rem] font-black leading-[1.04] tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {profile.name.split(" ")[0]}{" "}
                <span className="text-shimmer">{profile.name.split(" ").slice(1).join(" ")}</span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              variants={fadeUp}
              className="text-xl md:text-2xl font-semibold mb-4 leading-normal"
            >
              <span className="text-muted-foreground whitespace-nowrap mr-2">I&apos;m a</span>
              <span ref={textRef} className="text-primary" />
              <span className="cursor-blink align-middle ml-[2px]" />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-[16px] leading-[1.7] text-muted-foreground mb-5 max-w-[520px]"
            >
              {profile.heroBio}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-5">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                           bg-primary text-white shadow-lg shadow-primary/25
                           hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0
                           transition-all duration-200"
              >
                View My Work
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                           border border-border bg-card text-foreground
                           hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 active:translate-y-0
                           transition-all duration-200"
              >
                Contact Me
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                           border border-border bg-card text-foreground
                           hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 active:translate-y-0
                           transition-all duration-200"
              >
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center
                             border border-border bg-card text-muted-foreground
                             hover:border-primary/50 hover:text-primary hover:bg-primary/5
                             hover:-translate-y-0.5 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
              <div className="w-px h-6 bg-border mx-1" />
              <span className="text-xs text-muted-foreground font-medium">Find me online</span>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 pt-5 border-t border-border">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span
                    className="text-2xl font-black text-foreground tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ════ RIGHT ════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Rotating dashed ring */}
            <div
              className="absolute w-[390px] h-[390px] rounded-full border-2 border-dashed border-primary/20 animate-rotate-slow"
              aria-hidden
            />
            {/* Solid outer ring at 45deg offset */}
            <div
              className="absolute w-[330px] h-[330px] rounded-full border border-primary/10"
              aria-hidden
            />

            {/* Glow orbs */}
            <div className="absolute w-72 h-72 rounded-full bg-primary/15 blur-[70px] dark:bg-primary/20 dark:blur-[80px]" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-accent/15 blur-[50px]" />

            {/* Photo container */}
            <div className="relative animate-float">
              {/* Modern Portrait Frame */}
              <div className="relative p-3 rounded-[2rem] bg-card border border-border shadow-2xl shadow-primary/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <div
                  className="w-[260px] h-[340px] md:w-[300px] md:h-[400px] rounded-[1.25rem] overflow-hidden bg-muted relative"
                >
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 300px, 340px"
                    priority
                  />
                  {/* Subtle inner overlay for blending */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-[1.25rem]" />
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-float-sm" />
        </div>
      </motion.div>
    </section>
  );
}
