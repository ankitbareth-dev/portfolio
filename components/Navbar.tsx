"use client";

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("About");

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 md:py-6">
      {/* Logo */}
      <div className="text-foreground font-display text-lg font-medium tracking-tight">
        Hello World
      </div>

      {/* Center Navigation - Hidden on small screens */}
      <div className="hidden md:flex items-center gap-1 rounded-full bg-surface/80 backdrop-blur-md border border-border px-2 py-1">
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

      {/* CTA Button */}
      <button className="px-4 py-2 rounded-full bg-surface border border-border text-foreground text-sm font-medium hover:bg-surface/80 transition-colors">
        Hire Me
      </button>
    </nav>
  );
}
