"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  Code2,
  Briefcase,
  FolderGit2,
  GitPullRequest,
  WifiOff,
} from "lucide-react";
import Image from "next/image";
import { ExperienceCard } from "./ExperienceCard";
import aboutImg from "@/assets/about-image.png";

// --- 1. Types & Config ---

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface GitHubStats {
  public_repos: number;
  login: string;
  contributions: Activity[];
}

const EXPERIENCE_DATA = [
  {
    title: "React Developer (Full-Time)",
    date: "Sept - Nov 2025",
    description: (
      <>
        Built core features for an exam management platform, including{" "}
        <span className="text-foreground">location-based check-ins</span> and{" "}
        <span className="text-foreground">real-time ticket creation</span> for
        proctors.
      </>
    ),
    icon: Briefcase,
    showLine: true,
  },
  {
    title: "React Intern",
    date: "May - Aug 2025",
    description: (
      <>
        Designed a{" "}
        <span className="text-foreground">
          fully responsive IndiaMART-style PDP
        </span>{" "}
        delivering excellent UX and mobile-first layouts.
      </>
    ),
    icon: Code2,
    showLine: false,
  },
];

// --- 2. Helper Functions ---

const filterContributions = (contributions: Activity[]): Activity[] => {
  const start = new Date("2025-11-01");
  const end = new Date();
  return contributions.filter((day) => {
    const date = new Date(day.date);
    return date >= start && date <= end;
  });
};

const groupByWeeks = (days: Activity[]): Activity[][] => {
  const weeks: Activity[][] = [];
  let currentWeek: Activity[] = [];

  days.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks;
};

// --- 3. Main Component ---

export default function About() {
  const [githubData, setGithubData] = useState<GitHubStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // State for Touch Device Support
  const [activeDay, setActiveDay] = useState<Activity | null>(null);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch("/api/github");
        if (response.ok) {
          const data = await response.json();
          setGithubData(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGitHubStats();
  }, []);

  const getBlockColor = (level: number) => {
    const isDark = resolvedTheme === "dark";
    if (level === 0) return isDark ? "#171717" : "#ebedf0";
    if (level === 1) return "#a5b4fc";
    if (level === 2) return "#818cf8";
    if (level === 3) return "#6366f1";
    return "#4f46e5";
  };

  const calendarData = githubData
    ? groupByWeeks(filterContributions(githubData.contributions || []))
    : [];

  // Helper to format date for display
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden py-24 md:py-32"
    >
      <div
        className="absolute inset-0 z-0"
        style={{ background: "var(--hero-overlay-gradient)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative hidden md:flex justify-center items-center h-full"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src={aboutImg}
                alt="Developer Portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Turning Complexity into <br />
                <span className="text-muted">Intuitive Interfaces</span>
              </h2>
            </div>

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              <div className="flex gap-3">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-surface/50">
                  <FolderGit2 className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xl font-bold text-foreground">
                      {isLoading
                        ? "..."
                        : hasError
                          ? "--"
                          : `${githubData?.public_repos ?? 0}+`}
                    </p>
                    <p className="text-xs text-muted">Projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-surface/50">
                  <GitPullRequest className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xl font-bold text-foreground">500+</p>
                    <p className="text-xs text-muted">Contributions</p>
                  </div>
                </div>
              </div>

              {/* Custom Calendar Grid Container */}
              <div className="p-3 rounded-xl border border-border bg-surface/30 backdrop-blur-sm overflow-x-auto calendar-scroll">
                {isLoading ? (
                  <div className="skeleton-calendar h-[128px] w-full flex flex-col justify-center gap-2 px-2">
                    <div className="flex gap-1">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="skeleton-block"
                          style={{ opacity: Math.random() * 0.5 + 0.2 }}
                        />
                      ))}
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="skeleton-block"
                          style={{ opacity: Math.random() * 0.5 + 0.2 }}
                        />
                      ))}
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="skeleton-block"
                          style={{ opacity: Math.random() * 0.5 + 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                ) : hasError ? (
                  <div className="h-[128px] flex flex-col items-center justify-center gap-2 text-muted">
                    <WifiOff className="w-6 h-6 opacity-50" />
                    <p className="text-sm font-medium">
                      Unable to load GitHub stats
                    </p>
                    <p className="text-xs text-muted/70">
                      Please check your connection
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    {/* Month Labels Row */}
                    <div className="flex gap-[5px] mb-1 h-4">
                      {(() => {
                        let lastMonth = -1;
                        return calendarData.map((week, index) => {
                          const firstDay = week[0];
                          if (!firstDay) return null;

                          const currentMonth = new Date(
                            firstDay.date,
                          ).getMonth();

                          // Show label only if month changed
                          if (currentMonth !== lastMonth) {
                            lastMonth = currentMonth;
                            const monthName = new Date(
                              firstDay.date,
                            ).toLocaleString("default", { month: "short" });
                            return (
                              <div
                                key={`month-${index}`}
                                className="text-[10px] text-muted w-[14px]"
                              >
                                {monthName}
                              </div>
                            );
                          }

                          // Empty spacer to keep alignment with blocks
                          return (
                            <div key={`spacer-${index}`} className="w-[14px]" />
                          );
                        });
                      })()}
                    </div>

                    {/* Calendar Blocks Grid */}
                    <div className="flex gap-[5px]">
                      {calendarData.map((week, weekIndex) => (
                        <div
                          key={weekIndex}
                          className="flex flex-col gap-[5px]"
                        >
                          {week.map((day) => (
                            <div
                              key={day.date}
                              className="w-[14px] h-[14px] rounded-sm transition-all cursor-pointer"
                              style={{
                                backgroundColor: getBlockColor(day.level),

                                outline:
                                  activeDay?.date === day.date
                                    ? "2px solid #7275fc"
                                    : "none",
                                outlineOffset: "1px",
                              }}
                              title={`${day.count} contributions on ${formatDate(day.date)}`}
                              onClick={() => setActiveDay(day)}
                              // Adding keyboard accessibility
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) =>
                                e.key === "Enter" && setActiveDay(day)
                              }
                            />
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Touch/Click Info Display */}
                    {activeDay && (
                      <div className="mt-2 pt-2 border-t border-border/50 text-xs text-muted flex justify-between">
                        <span>{formatDate(activeDay.date)}</span>
                        <span className="text-foreground font-medium">
                          {activeDay.count} contributions
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>

            <div className="grid gap-4 pt-4">
              {EXPERIENCE_DATA.map((item, index) => (
                <ExperienceCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
