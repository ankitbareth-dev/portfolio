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
    <nav className="fixed top-9 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-2">
      <Link
        href="/"
        className="text-sm font-semibold text-foreground z-[60] hidden md:block"
      >
        {/* Logo content */}
      </Link>

      {/* --- DESKTOP NAVIGATION --- */}
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

        <div className="w-px h-4 bg-border mx-1" />

        <Link
          href="/blogs"
          className="px-5 py-1.5 rounded-full text-sm font-medium text-muted hover:text-foreground transition-all duration-300"
        >
          Blogs
        </Link>

        <ThemeToggle />
      </div>

      {/* --- MOBILE NAVIGATION --- */}

      <div className="absolute left-1/2 -translate-x-1/2 md:hidden flex flex-col items-center w-[calc(100vw-28px)] max-w-[768px]">
        <div className="flex items-center justify-end gap-1 w-full rounded-2xl bg-surface/80 backdrop-blur-md border border-border px-2 py-1 shadow-lg z-[60]">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground hover:bg-surface/80 rounded-full transition-colors"
          >
            {isOpen ? (
              <IoClose className="h-5 w-5" />
            ) : (
              <IoMenu className="h-5 w-5" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-4 w-full bg-surface/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden z-[50]"
            >
              <div className="flex flex-col p-2 gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={getHref(item)}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      active === item
                        ? "bg-primary/10 text-primary"
                        : "text-muted hover:text-foreground hover:bg-background/50"
                    }`}
                  >
                    {item}
                  </Link>
                ))}

                <div className="border-t border-border my-1"></div>

                <Link
                  href="/blogs"
                  onClick={() => setIsOpen(false)}
                  className="text-left px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-background/50 transition-colors"
                >
                  Blogs
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden md:block w-[100px]" />
    </nav>
  );
}
