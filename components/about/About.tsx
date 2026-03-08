"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Code2, Briefcase, FolderGit2, GitPullRequest } from "lucide-react";
import Image from "next/image";
import { GitHubCalendar, type Activity } from "react-github-calendar";
import { ExperienceCard } from "./ExperienceCard";
import aboutImg from "@/assets/about-image.png";

const transformData = (contributions: Activity[]): Activity[] => {
  const start = new Date("2025-11-01");

  return contributions.filter((day) => new Date(day.date) >= start);
};

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

interface GitHubStats {
  public_repos: number;
  login: string;
}

export default function About() {
  const [githubData, setGithubData] = useState<GitHubStats | null>(null);
  const { resolvedTheme } = useTheme();
  const calendarRef = useRef<HTMLDivElement>(null);

  const githubTheme = useMemo(
    () => ({
      dark: ["#171717", "#4f46e5", "#6366f1", "#818cf8", "#a5b4fc"],
      light: ["#ffffff", "#4f46e5", "#6366f1", "#818cf8", "#a5b4fc"],
    }),
    [],
  );

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch("/api/github");

        if (response.ok) {
          const data = await response.json();
          setGithubData(data);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats", error);
      }
    };
    fetchGitHubStats();
  }, []);

  useEffect(() => {
    if (!calendarRef.current) return;

    const el = calendarRef.current;

    const scrollToEnd = () => {
      el.scrollLeft = el.scrollWidth - el.clientWidth;
    };

    scrollToEnd();

    const observer = new ResizeObserver(scrollToEnd);
    observer.observe(el);

    return () => observer.disconnect();
  }, [githubData]);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden py-24 md:py-32"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "var(--hero-overlay-gradient)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image */}
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

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Header */}
            <div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Turning Complexity into <br />
                <span className="text-muted">Intuitive Interfaces</span>
              </h2>
            </div>

            {/* Text */}
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

            {/* GitHub Stats */}
            {githubData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 "
              >
                <div className="flex gap-4 ">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-surface/50">
                    <FolderGit2 className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xl font-bold text-foreground">
                        {githubData.public_repos}+
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

                <div
                  ref={calendarRef}
                  className="calendar-scroll p-4 rounded-xl border border-border bg-surface/30 backdrop-blur-sm mt-2 overflow-x-auto"
                >
                  <div className="min-w-max pb-4">
                    <GitHubCalendar
                      username={githubData.login}
                      theme={githubTheme}
                      colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                      transformData={transformData}
                      showColorLegend={false}
                      showMonthLabels={true}
                      fontSize={12}
                      blockSize={12}
                      blockMargin={4}
                    />
                  </div>
                </div>
              </motion.div>
            )}

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
