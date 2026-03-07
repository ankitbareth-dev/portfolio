"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
// Switching to Font Awesome icons which are consistent
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="relative min-h-[60vh] w-full flex flex-col justify-center items-center py-24 md:py-32"
    >
      {/* Background Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "var(--hero-overlay-gradient)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-foreground tracking-tight"
        >
          Let's Build Something{" "}
          <span className="text-primary">Great Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-muted text-lg"
        >
          I'm currently open to new opportunities. Whether you have a project in
          mind or just want to say hi, my inbox is always open.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 transition-all hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

          {/* Email Me Button */}
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-surface/50 text-foreground font-medium hover:bg-surface/80 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border bg-surface/50 text-muted hover:text-foreground hover:border-primary transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border bg-surface/50 text-muted hover:text-foreground hover:border-primary transition-colors"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Footer Section (Integrated) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-0 right-0 z-10 text-center"
      >
        <p className="text-sm text-muted">
          © {currentYear} Hemang. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
