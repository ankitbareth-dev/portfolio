"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navItems = ["Home", "About", "Projects", "Contact"];

const getHref = (item: string) => {
  if (item === "Home") return "/";
  return `#${item.toLowerCase()}`;
};

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: string,
  ) => {
    e.preventDefault();

    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setActive(item);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 md:py-6">
      {/* Left Side (Logo) */}
      <Link href="/" className="text-sm font-semibold text-foreground">
        {/* Logo content */}
      </Link>

      {/* Center Nav Pill (Desktop Only) */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1 rounded-full bg-surface/80 backdrop-blur-md border border-border px-2 py-1 shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item}
            href={getHref(item)}
            onClick={(e) => handleNavClick(e, item)}
            className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              active === item
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "text-muted hover:text-foreground"
            }`}
          >
            {item}
          </Link>
        ))}

        {/* Separator for visual distinction */}
        <div className="w-px h-4 bg-border mx-1" />

        <Link
          href="/blogs"
          className="px-5 py-1.5 rounded-full text-sm font-medium text-muted hover:text-foreground transition-all duration-300"
        >
          Blogs
        </Link>

        {/* Theme Toggle  */}
        <ThemeToggle />
      </div>

      <div className="flex items-center gap-3">
        {/* Theme Toggle for Mobile Only */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>

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

      {/* Mobile Slide-in Menu (From Right) */}
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

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-72 h-full z-[70] border-l border-border bg-surface/95 backdrop-blur-xl shadow-2xl flex flex-col"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="text-sm font-bold text-muted uppercase tracking-wider">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-background/50 text-foreground transition-colors"
                >
                  <IoClose className="h-6 w-6" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-2 p-6">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={getHref(item)}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      active === item
                        ? "bg-primary/10 text-primary"
                        : "text-muted hover:text-foreground hover:bg-background/50"
                    }`}
                  >
                    {item}
                  </Link>
                ))}

                <div className="border-t border-border my-4"></div>

                {/* Mobile Blogs Button */}
                <Link
                  href="/blogs"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105"
                >
                  Blogs
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
