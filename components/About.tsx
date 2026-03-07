"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden py-24 md:py-32"
    >
      {/* Background Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "var(--hero-overlay-gradient)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Grid defaults to 'items-stretch', making columns equal height */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* --- Left Column: Image --- */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            // h-full ensures it stretches to match the right column's height
            className="relative hidden md:flex justify-center items-center h-full"
          >
            {/* Image Container - No background colors or glows */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="/about-image.png"
                alt="Developer Portrait"
                fill
                // object-top keeps the head visible if the container is shorter than the image aspect ratio
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* --- Right Column: Content --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Section Header */}
            <div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Turning Complexity into <br />
                <span className="text-muted">Intuitive Interfaces</span>
              </h2>
            </div>

            {/* Narrative Text */}
            <div className="space-y-4 text-muted leading-relaxed text-base md:text-lg">
              <p>
                I’m a Front-End Developer specializing in building responsive,
                scalable web applications. My journey began in May 2025 at{" "}
                <span className="text-foreground font-medium">
                  4devnet Pvt Ltd
                </span>
                , where I transitioned from an Intern to a Full-Time Developer
                by delivering high-impact solutions.
              </p>
              <p>
                I focus on bridging the gap between backend complexity and user
                experience—whether its optimizing product pages for mobile-first
                performance or engineering real-time logistics for exam
                platforms.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="grid gap-4 pt-4">
              {/* Timeline Item 1 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4 p-4 rounded-xl border border-border bg-surface/50 backdrop-blur-sm hover:bg-surface/80 transition-colors"
              >
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="w-px h-full bg-border mt-2" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">
                      React Developer (Full-Time)
                    </h3>
                    <span className="text-xs text-muted bg-background px-2 py-1 rounded-full">
                      Sept - Nov 2025
                    </span>
                  </div>
                  <p className="text-sm text-muted mt-1">
                    Built core features for an exam management platform,
                    including{" "}
                    <span className="text-foreground">
                      location-based check-ins
                    </span>{" "}
                    and{" "}
                    <span className="text-foreground">
                      real-time ticket creation
                    </span>{" "}
                    for proctors.
                  </p>
                </div>
              </motion.div>

              {/* Timeline Item 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-4 p-4 rounded-xl border border-border bg-surface/50 backdrop-blur-sm hover:bg-surface/80 transition-colors"
              >
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Code2 className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">
                      React Intern
                    </h3>
                    <span className="text-xs text-muted bg-background px-2 py-1 rounded-full">
                      May - Aug 2025
                    </span>
                  </div>
                  <p className="text-sm text-muted mt-1">
                    Designed a{" "}
                    <span className="text-foreground">
                      fully responsive IndiaMART-style PDP
                    </span>{" "}
                    delivering excellent UX and mobile-first layouts.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
