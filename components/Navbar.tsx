"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const { theme, setTheme } = useTheme();

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 md:py-6">
      <div className="hidden md:block w-[140px]"></div>

      <div className="hidden md:flex items-center gap-1 rounded-full bg-surface/80 backdrop-blur-md border border-border px-2 py-1 z-10 relative">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              active === item
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "text-muted hover:text-foreground"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button className="px-4 py-2 rounded-full bg-surface border border-border text-foreground text-sm font-medium hover:bg-surface/80 transition-colors">
          Hire Me
        </button>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative overflow-hidden rounded-full bg-surface border border-border p-2 text-foreground hover:bg-surface/80 transition-colors shadow-sm"
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.div
                key="moon"
                initial={{ y: 20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <MdDarkMode className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ y: 20, opacity: 0, rotate: 90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -20, opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <MdLightMode className="h-5 w-5 text-amber-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </nav>
  );
}
