"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 md:py-6">
      {/* Left Side (Logo) */}
      <div className="text-sm font-semibold text-foreground"></div>

      {/* Center Nav Links (Desktop Only) */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1 rounded-full bg-surface/80 backdrop-blur-md border border-border px-2 py-1">
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

      {/* Right Side Actions */}
      <div className="flex items-center gap-3">
        {/* Hire Me (hidden on small screens) */}
        <button className="hidden sm:block px-4 py-2 rounded-full bg-surface border border-border text-foreground text-sm font-medium hover:bg-surface/80 transition-colors">
          Hire Me
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative overflow-hidden rounded-full p-2"
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

        {/* Hamburger Menu (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:bg-surface/80 rounded-full transition-colors"
        >
          {isOpen ? (
            <IoClose className="h-6 w-6" />
          ) : (
            <IoMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu - "Previous Project" Wrapper Style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            // Positioned below the navbar bar (top-full)
            className="absolute top-full left-0 right-0 mt-2 px-4 md:hidden"
          >
            {/* The "Wrapper" Card styled exactly like the previous project */}
            <div className="w-full rounded-2xl border border-border bg-surface/95 backdrop-blur-xl shadow-xl p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setIsOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    active === item
                      ? "bg-primary/10 text-primary"
                      : "text-muted hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  {item}
                </button>
              ))}

              {/* Divider */}
              <div className="border-t border-border my-2"></div>

              {/* Hire Me Button inside the card */}
              <button className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105">
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
