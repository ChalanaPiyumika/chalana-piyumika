"use client";

import { useState, useEffect } from "react";
import { profile, navLinks } from "@/data/profile";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = navLinks.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
          ? "py-3 bg-card/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "py-5 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="font-mono font-black text-xl flex items-center text-foreground hover:text-primary transition-colors duration-200"
        >
          <span className="text-primary">&lt;</span>
          Chalana
          <span className="text-primary">/&gt;</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-xl bg-primary/8 border border-primary/15"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href={profile.resume}
            download
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold
                       bg-primary text-white shadow-sm shadow-primary/20
                       hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-xl border border-border bg-card flex flex-col
                       justify-center items-center gap-[5px] text-foreground transition-all duration-200"
          >
            <span className={`w-5 h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`w-5 h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden border-t border-border bg-card/95 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${active === link.href.slice(1)
                      ? "bg-primary/8 text-primary border border-primary/15"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resume}
                download
                className="mt-2 inline-flex items-center justify-center rounded-xl text-sm font-semibold
                           bg-primary text-white shadow-sm h-10 px-4 transition-all duration-200"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
