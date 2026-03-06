"use client";
import { useEffect, useState } from "react";
import {
  DiReact,
  DiNodejsSmall,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiGit,
  DiPostgresql,
} from "react-icons/di";
import { SiNextdotjs, SiGraphql, SiAxios, SiTailwindcss } from "react-icons/si";
import type { IconType } from "react-icons";

// --- Hooks ---
function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBreakpoint("mobile");
      } else if (window.innerWidth < 1024) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("desktop");
      }
    };

    // Set initial
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}

// --- Configurations ---
// Ratio: 9 pillars → 11 icons | 7 pillars → 9 icons | 5 pillars → 7 icons
// Edge pillars (first & last) always empty
// Next.js ALWAYS on middle pillar with consistent visual hierarchy
// Tablet: SYMMETRICAL icon positioning (left mirrors right)

const DESKTOP_CONFIG = {
  pillarCount: 9,
  pillars: [
    { position: "left-[5%]", width: "w-[12%] md:w-[10%]" },
    { position: "left-[16.25%]", width: "w-[12%] md:w-[10%]" },
    { position: "left-[27.5%]", width: "w-[12%] md:w-[10%]" },
    { position: "left-[38.75%]", width: "w-[12%] md:w-[10%]" },
    { position: "left-[50%]", width: "w-[12%] md:w-[10%]" }, // Middle (index 4)
    { position: "left-[61.25%]", width: "w-[12%] md:w-[10%]" },
    { position: "left-[72.5%]", width: "w-[12%] md:w-[10%]" },
    { position: "left-[83.75%]", width: "w-[12%] md:w-[10%]" },
    { position: "left-[95%]", width: "w-[12%] md:w-[10%]" },
  ],
  // 11 icons on pillars 1-7 (edges 0 & 8 empty)
  // Next.js on middle pillar (index 4) at 65%
  icons: [
    { icon: DiHtml5, pillarIndex: 1, top: "25%" },
    { icon: DiCss3, pillarIndex: 1, top: "50%" },
    { icon: DiJavascript1, pillarIndex: 2, top: "40%" },
    { icon: DiReact, pillarIndex: 2, top: "65%" },
    { icon: SiGraphql, pillarIndex: 3, top: "52%" },
    { icon: SiNextdotjs, pillarIndex: 4, top: "65%" }, // MIDDLE PILLAR
    { icon: DiNodejsSmall, pillarIndex: 5, top: "52%" },
    { icon: DiPostgresql, pillarIndex: 6, top: "40%" },
    { icon: SiAxios, pillarIndex: 6, top: "65%" },
    { icon: DiGit, pillarIndex: 7, top: "25%" },
    { icon: SiTailwindcss, pillarIndex: 7, top: "50%" },
  ],
};

const TABLET_CONFIG = {
  pillarCount: 7,
  pillars: [
    { position: "left-[5%]", width: "w-[12%]" },
    { position: "left-[20%]", width: "w-[12%]" },
    { position: "left-[35%]", width: "w-[12%]" },
    { position: "left-[50%]", width: "w-[12%]" }, // Middle (index 3)
    { position: "left-[65%]", width: "w-[12%]" },
    { position: "left-[80%]", width: "w-[12%]" },
    { position: "left-[95%]", width: "w-[12%]" },
  ],
  // 9 icons on pillars 1-5 (edges 0 & 6 empty)
  // SYMMETRICAL: Left side mirrors right side
  // Pillar 1 ↔ Pillar 5: 2 icons each at 25% & 50%
  // Pillar 2 ↔ Pillar 4: 2 icons each at 40% & 65%
  // Pillar 3 (middle): 1 icon (Next.js) at 65%
  icons: [
    // Left Side - Pillar 1 (2 icons)
    { icon: DiHtml5, pillarIndex: 1, top: "25%" },
    { icon: DiCss3, pillarIndex: 1, top: "50%" },
    // Left Side - Pillar 2 (2 icons)
    { icon: DiJavascript1, pillarIndex: 2, top: "40%" },
    { icon: DiReact, pillarIndex: 2, top: "65%" },
    // Middle - Pillar 3 (1 icon - Next.js ONLY) ← CHANGE THIS
    { icon: SiNextdotjs, pillarIndex: 3, top: "52%" }, // Was "65%" → Now "52%"
    // Right Side - Pillar 4 (2 icons - mirrors Pillar 2)
    { icon: DiNodejsSmall, pillarIndex: 4, top: "40%" },
    { icon: SiGraphql, pillarIndex: 4, top: "65%" },
    // Right Side - Pillar 5 (2 icons - mirrors Pillar 1)
    { icon: DiPostgresql, pillarIndex: 5, top: "25%" },
    { icon: DiGit, pillarIndex: 5, top: "50%" },
  ],
};

const MOBILE_CONFIG = {
  pillarCount: 5,
  pillars: [
    { position: "left-[5%]", width: "w-[18%]" },
    { position: "left-[27.5%]", width: "w-[18%]" },
    { position: "left-[50%]", width: "w-[18%]" }, // Middle (index 2)
    { position: "left-[72.5%]", width: "w-[18%]" },
    { position: "left-[95%]", width: "w-[18%]" },
  ],
  // 5 icons total on pillars 1-3 (edges 0 & 4 empty)
  // SYMMETRICAL: Pillar 1 mirrors Pillar 3
  // Pillar 1: 2 icons at 35% & 65%
  // Pillar 2: 1 icon (Next.js) at 50% (centered)
  // Pillar 3: 2 icons at 35% & 65% (mirrors Pillar 1)
  icons: [
    // Left Side - Pillar 1 (2 icons)

    { icon: DiReact, pillarIndex: 1, top: "65%" },
    // Middle - Pillar 2 (1 icon - Next.js ONLY, centered)
    { icon: SiNextdotjs, pillarIndex: 2, top: "50%" },
    // Right Side - Pillar 3 (2 icons - mirrors Pillar 1)

    { icon: DiGit, pillarIndex: 3, top: "65%" },
  ],
};

const STYLES = {
  ARC_CORE_BG: "var(--tech-arc-bg)",
  ARC_RIM_BORDER: "3px solid rgba(114, 117, 252, 0.95)",
  ARC_RIM_SHADOW: "0 0 15px rgba(114, 117, 252, 0.4)",
  PILLAR_GRADIENT: "var(--tech-pillar-gradient)",
  ICON_BG:
    "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.08) 0%, var(--tech-icon-bg-inner) 100%)",
  ICON_SHADOW: "var(--tech-icon-shadow)",
};

const ARC_CONFIG = {
  HEIGHT: "25%",
  WIDTH: "190%",
  BEND: "100%",
  BOTTOM_OFFSET: "0%",
};

export default function VerticalTechBars() {
  const breakpoint = useBreakpoint();

  // Select configuration based on breakpoint
  const config =
    breakpoint === "mobile"
      ? MOBILE_CONFIG
      : breakpoint === "tablet"
        ? TABLET_CONFIG
        : DESKTOP_CONFIG;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* --- Layer 1: Arc Container --- */}
      <div
        className="absolute left-1/2 z-50 -translate-x-1/2"
        style={{
          width: ARC_CONFIG.WIDTH,
          height: ARC_CONFIG.HEIGHT,
          bottom: ARC_CONFIG.BOTTOM_OFFSET,
        }}
      >
        {/* Core Shape */}
        <div
          className="absolute inset-0"
          style={{
            background: STYLES.ARC_CORE_BG,
            clipPath: `ellipse(32% ${ARC_CONFIG.BEND} at 50% 100%)`,
          }}
        />

        {/* Glow Layer */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `ellipse(32% ${ARC_CONFIG.BEND} at 50% 100%)`,
            background: "var(--tech-glow-gradient)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 100% at 50% 0%, black 0%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 75% 100% at 50% 0%, black 0%, transparent 100%)",
            filter: "blur(12px)",
            opacity: 1,
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* --- Layer 2: Vertical Pillars --- */}
      <div
        className="absolute inset-0 z-20"
        style={{
          maskImage: `radial-gradient(ellipse 100% 30% at 50% 100%, transparent 0%, transparent 70%, black 71%)`,
          WebkitMaskImage: `radial-gradient(ellipse 100% 30% at 50% 100%, transparent 0%, transparent 70%, black 71%)`,
        }}
      >
        {config.pillars.map((pillar, index) => {
          const isLeftEdge = index === 0;
          const isRightEdge = index === config.pillars.length - 1;

          const edgeMask = isLeftEdge
            ? "linear-gradient(to right, transparent 0%, black 25%)"
            : isRightEdge
              ? "linear-gradient(to left, transparent 0%, black 25%)"
              : "none";

          return (
            <div
              key={index}
              className={`absolute -translate-x-1/2 bottom-0 h-[100%] ${pillar.position} ${pillar.width}`}
            >
              <div
                className="relative h-full w-full"
                style={{
                  background: STYLES.PILLAR_GRADIENT,
                  maskImage: edgeMask,
                  WebkitMaskImage: edgeMask,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* --- Layer 3: Global Overlay --- */}
      <div
        className="absolute inset-0 z-30"
        style={{
          background: "var(--tech-overlay-gradient)",
        }}
      />

      {/* --- Layer 4: Tech Icons --- */}
      {config.icons.map(({ icon: Icon, pillarIndex, top }, index) => {
        const pillarPosition = config.pillars[pillarIndex]?.position;

        return (
          <div
            key={index}
            className={`absolute z-40 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ${pillarPosition} h-14 w-14 md:h-16 md:w-16`}
            style={{
              top: top,
              borderColor: "var(--tech-icon-border)",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: STYLES.ICON_BG,
                boxShadow: STYLES.ICON_SHADOW,
              }}
            />
            <Icon
              className={`relative text-foreground h-10 w-auto max-w-[70%] md:h-12 md:max-w-[75%]`}
            />
          </div>
        );
      })}
    </div>
  );
}
