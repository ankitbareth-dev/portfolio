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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 md:py-6">
        {/* Left Side (Logo) */}
        <div className="text-sm font-semibold text-foreground">Hello World</div>

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

          {/* Hamburger Menu (Mobile Only) */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-foreground hover:bg-surface/80 rounded-full transition-colors"
          >
            <IoMenu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-background border-l border-border shadow-2xl z-[70] p-8 flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-10">
                <span className="text-sm font-bold text-muted uppercase tracking-wider">
                  Menu
                </span>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-surface transition-colors text-foreground"
                >
                  <IoClose className="h-6 w-6" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActive(item);
                      setIsOpen(false);
                    }}
                    className={`text-left px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                      active === item
                        ? "bg-primary/10 text-primary"
                        : "text-muted hover:text-foreground hover:bg-surface/50"
                    }`}
                  >
                    {item}
                  </button>
                ))}

                {/* Hire Me inside mobile menu */}
                <button className="mt-6 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium">
                  Hire Me
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
