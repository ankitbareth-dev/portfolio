"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Briefcase, FolderGit2, GitPullRequest } from "lucide-react";
import Image from "next/image";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

interface GitHubStats {
  public_repos: number;
  login: string;
}

export default function About() {
  const [githubData, setGithubData] = useState<GitHubStats | null>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.scrollLeft = calendarRef.current.scrollWidth;
    }
  }, [githubData]);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // REPLACE 'your-username' with your actual GitHub username
        const response = await fetch(
          "https://api.github.com/users/ankitbareth-dev",
        );
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

  const githubTheme = {
    dark: ["#171717", "#4f46e5", "#6366f1", "#818cf8", "#a5b4fc"],
    light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
  };

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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* --- Left Column: Image --- */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative hidden md:flex justify-center items-center h-full"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="/about-image.png"
                alt="Developer Portrait"
                fill
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

            {/* --- GitHub Stats & Graph --- */}
            {githubData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                {/* Stat Cards */}
                <div className="flex gap-4">
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

                {/* Contribution Graph */}
                <div
                  ref={calendarRef}
                  className="p-4 rounded-xl border border-border bg-surface/30 backdrop-blur-sm mt-2 overflow-x-auto no-scrollbar"
                >
                  <GitHubCalendar
                    username={githubData.login}
                    theme={githubTheme}
                    colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                    hideColorLegend={true}
                    hideMonthLabels={false}
                    fontSize={12}
                    blockSize={12}
                    blockMargin={4}
                  />
                </div>
              </motion.div>
            )}

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
