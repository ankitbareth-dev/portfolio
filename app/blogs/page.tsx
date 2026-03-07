"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlogsPage() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Custom Header - No Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 border-b border-border bg-background/80 backdrop-blur-md">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative overflow-hidden rounded-full p-2 hover:bg-surface/80 transition-colors"
        >
          {theme === "dark" ? (
            <MdDarkMode className="h-5 w-5" />
          ) : (
            <MdLightMode className="h-5 w-5 text-amber-400" />
          )}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Blogs <span className="text-primary">Coming Soon</span>
          </h1>
          <p className="mt-4 text-muted text-lg">
            Stay tuned for articles on React, Development, and more.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
