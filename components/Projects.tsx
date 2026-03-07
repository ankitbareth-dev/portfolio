"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

// Define the shape of a Project object
interface Project {
  title: string;
  headline: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  features: string[];
}

const projectsData: Project[] = [
  {
    title: "ChatFlow",
    headline: "Real-Time Private Chat Application",
    description:
      "A full-featured chat platform enabling instant communication with real-time event handling. Built with a focus on low-latency interactions and rich media support.",
    imageUrl: "/chatflow-preview.png",
    liveUrl: "https://chat-app-frontend-gamma-flax.vercel.app",
    githubUrl: "https://github.com/ankitbareth-dev/Chat-App-Frontend",
    techStack: ["React", "TypeScript", "Socket.io", "Redux", "Tailwind CSS"],
    features: [
      "Instant Messaging & Seen Status",
      "Voice Messages & Media Sharing",
      "Typing Indicators & Online Presence",
    ],
  },
  {
    title: "Chronos",
    headline: "Visual Time Tracking Matrix",
    description:
      "An intuitive time-tracking frontend that transforms schedules into interactive visual matrices. Focuses on performance optimization and responsive design patterns.",
    imageUrl: "/chronos-preview.png",
    liveUrl: "https://chronos-app-rose.vercel.app",
    githubUrl: "https://github.com/ankitbareth-dev/Chronos-App",
    techStack: ["React", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
    features: [
      "Dynamic Grid Generation",
      "Optimistic UI Updates",
      "Performance Optimized Rendering",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building
            responsive, scalable, and interactive web applications.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-24 md:gap-32">
          {projectsData.map((project, index) => (
            <ProjectItem key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Separate Component for a Single Project Item ---
function ProjectItem({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      // Alternating Layout: Even = Image Left, Odd = Image Right
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
        !isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Column */}
      <div
        className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl bg-surface/20 ${
          !isEven ? "md:order-2" : ""
        }`}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover object-top"
        />
        {/* Overlay gradient for text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
      </div>

      {/* Content Column */}
      <div className={`flex flex-col gap-4 ${!isEven ? "md:order-1" : ""}`}>
        {/* Title & Headline */}
        <div>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            {project.title}
          </span>
          <h3 className="mt-1 text-2xl md:text-3xl font-bold text-foreground">
            {project.headline}
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted leading-relaxed text-base">
          {project.description}
        </p>

        {/* Features List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-surface border border-border text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/25 transition-all hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface/50 text-foreground text-sm font-medium hover:bg-surface/80 transition-colors"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
