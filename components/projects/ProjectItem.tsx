"use client";

import { Project } from "./project.config";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
        !isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Column */}
      <div
        className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl bg-surface ${
          !isEven ? "md:order-2" : ""
        }`}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-contain p-2 md:p-4 transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index === 0}
          quality={90}
        />
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
              className="px-3 py-1 text-xs rounded-full bg-surface border border-border text-muted font-medium"
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
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface text-foreground text-sm font-medium hover:bg-surface/80 transition-colors"
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
