"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ExperienceItem {
  title: string;
  date: string;
  description: ReactNode;
  icon: LucideIcon;
  showLine?: boolean;
}

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

export const ExperienceCard = ({ item, index }: ExperienceCardProps) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-4 p-4 rounded-xl border border-border bg-surface/50 backdrop-blur-sm hover:bg-surface/80 transition-colors"
    >
      <div className="flex flex-col items-center">
        <div className="p-2 rounded-full bg-primary/10 text-primary">
          <Icon className="w-5 h-5" />
        </div>
        {/* 3. Conditionally render the connecting line */}
        {item.showLine && <div className="w-px h-full bg-border mt-2" />}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">{item.title}</h3>
          <span className="text-[10px] sm:text-xs text-muted bg-background px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
            {item.date}
          </span>
        </div>
        <p className="text-sm text-muted mt-1">{item.description}</p>
      </div>
    </motion.div>
  );
};
