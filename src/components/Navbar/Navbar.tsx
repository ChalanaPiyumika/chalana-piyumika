"use client";

import { useState, useEffect } from "react";
import { profile } from "@/data/profile";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = navLinks.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#home"
          className="font-mono font-bold text-xl flex items-center gap-px text-foreground hover:text-primary transition-colors"
        >
          <span className="text-primary">&lt;</span>
          CP
          <span className="text-primary">/&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === link.href.slice(1)
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href={profile.resume}
            download
            className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
          >
            Resume
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-md hover:bg-secondary text-foreground transition-colors"
          >
            <span
              className={`block w-5 h-0.5 bg-current rounded-sm transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current rounded-sm transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current rounded-sm transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t bg-background/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resume}
                download
                className="mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 py-2"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
