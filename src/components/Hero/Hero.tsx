"use client";

import React, { useEffect, useRef } from "react";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

const roles = ["Full Stack Developer", "Problem Solver", "Open Source Contributor"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const textRef = useRef<HTMLSpanElement>(null);

  // Typewriter
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const type = () => {
      const current = roles[roleIndex.current];
      if (!textRef.current) return;
      if (!isDeleting.current) {
        textRef.current.textContent = current.slice(0, charIndex.current + 1);
        charIndex.current++;
        if (charIndex.current === current.length) {
          isDeleting.current = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        textRef.current.textContent = current.slice(0, charIndex.current - 1);
        charIndex.current--;
        if (charIndex.current === 0) {
          isDeleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      }
      timeout = setTimeout(type, isDeleting.current ? 60 : 90);
    };
    timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(var(--primary) / ${p.alpha})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-100 transition-opacity duration-500"
      />

      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] pointer-events-none animate-drift1" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none animate-drift2" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-40"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Main content */}
      <div className="container relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border bg-secondary/50 text-secondary-foreground text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-available shadow-[0_0_0_3px_rgba(16,185,129,0.2)]" />
          {profile.availability}
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-foreground"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-br from-primary via-accent to-pink-500 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-2 min-h-[1.5em]"
        >
          <span className="text-muted-foreground">I&apos;m a</span>
          <span ref={textRef} className="text-primary" />
          <span className="cursor-blink text-primary" />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
        >
          {profile.bio}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 px-8"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-11 px-8"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-10 md:gap-16"
        >
          {profile.stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                className="text-4xl font-black text-foreground"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs font-semibold tracking-widest uppercase"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-primary/50" />
        Scroll
      </motion.div>
    </section>
  );
}
