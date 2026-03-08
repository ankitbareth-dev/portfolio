"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/ankitbareth-dev",
    icon: FaGithub,
    label: "GitHub Profile",
  },
  {
    href: "https://www.linkedin.com/in/ankit-bareth-64956035b",
    icon: FaLinkedinIn,
    label: "LinkedIn Profile",
  },
];

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="relative min-h-[60vh] w-full flex flex-col justify-center items-center py-24 md:py-32"
    >
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
          Let&apos;s Build Something{" "}
          <span className="text-primary">Great Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-muted text-lg"
        >
          I&apos;m currently open to new opportunities. Whether you have a
          project in mind or just want to say hi, my inbox is always open.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          {/* Primary CTA: Download Resume */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 transition-all hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

          {/* Secondary CTA: Email */}
          <a
            href="mailto:ankit@example.com"
            className="flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl border border-border bg-surface text-foreground font-medium hover:bg-surface/80 transition-colors"
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
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-3 rounded-full border border-border bg-surface text-muted hover:text-foreground hover:border-primary transition-colors"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-0 right-0 z-10 text-center"
      >
        <p className="text-sm text-muted">
          © {currentYear} Ankit Bareth. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
