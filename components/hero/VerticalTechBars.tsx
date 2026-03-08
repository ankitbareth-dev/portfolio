"use client";

import { memo } from "react";
import {
  DESKTOP_PILLARS,
  DESKTOP_ICONS,
  TABLET_PILLARS,
  TABLET_ICONS,
  MOBILE_PILLARS,
  MOBILE_ICONS,
} from "./hero.config";

// --- 1. Styles Config (Logic Layer) ---
const STYLES = {
  ARC_CORE_BG: "var(--tech-arc-bg)",
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

// Pillar Component
const Pillar = memo(
  ({
    position,
    width,
    index,
    total,
  }: {
    position: string;
    width: string;
    index: number;
    total: number;
  }) => {
    const isLeftEdge = index === 0;
    const isRightEdge = index === total - 1;

    const edgeMask = isLeftEdge
      ? "linear-gradient(to right, transparent 0%, black 25%)"
      : isRightEdge
        ? "linear-gradient(to left, transparent 0%, black 25%)"
        : "none";

    return (
      <div
        className={`absolute -translate-x-1/2 bottom-0 h-full ${position} ${width}`}
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
  },
);
Pillar.displayName = "Pillar";

// Icon Component
const TechIcon = memo(
  ({
    Icon,
    position,
    top,
  }: {
    Icon: React.ElementType;
    position: string;
    top: string;
  }) => {
    return (
      <div
        className={`absolute z-40 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full h-14 w-14 md:h-16 md:w-16`}
        style={{
          top,
          left: position.match(/left-\[(.*?)\]/)?.[1] || "50%", // Extract position value
          borderColor: "var(--tech-icon-border)",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: STYLES.ICON_BG, boxShadow: STYLES.ICON_SHADOW }}
        />
        <Icon className="relative text-foreground h-10 w-auto max-w-[70%] md:h-12 md:max-w-[75%]" />
      </div>
    );
  },
);
TechIcon.displayName = "TechIcon";

// --- 3. Main Component ---

export default function VerticalTechBars() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Layer 1: Arc Container */}
      <div
        className="absolute left-1/2 z-50 -translate-x-1/2"
        style={{
          width: ARC_CONFIG.WIDTH,
          height: ARC_CONFIG.HEIGHT,
          bottom: ARC_CONFIG.BOTTOM_OFFSET,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: STYLES.ARC_CORE_BG,
            clipPath: `ellipse(32% ${ARC_CONFIG.BEND} at 50% 100%)`,
          }}
        />
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

      {/* Layer 2: Vertical Pillars (Responsive Rendering) */}
      <div
        className="absolute inset-0 z-20"
        style={{
          maskImage: `radial-gradient(ellipse 100% 30% at 50% 100%, transparent 0%, transparent 70%, black 71%)`,
          WebkitMaskImage: `radial-gradient(ellipse 100% 30% at 50% 100%, transparent 0%, transparent 70%, black 71%)`,
        }}
      >
        <div className="md:hidden">
          {MOBILE_PILLARS.map((p, i) => (
            <Pillar
              key={`m-p-${i}`}
              {...p}
              index={i}
              total={MOBILE_PILLARS.length}
            />
          ))}
        </div>
        <div className="hidden md:block lg:hidden">
          {TABLET_PILLARS.map((p, i) => (
            <Pillar
              key={`t-p-${i}`}
              {...p}
              index={i}
              total={TABLET_PILLARS.length}
            />
          ))}
        </div>
        <div className="hidden lg:block">
          {DESKTOP_PILLARS.map((p, i) => (
            <Pillar
              key={`d-p-${i}`}
              {...p}
              index={i}
              total={DESKTOP_PILLARS.length}
            />
          ))}
        </div>
      </div>

      {/* Layer 3: Global Overlay */}
      <div
        className="absolute inset-0 z-30"
        style={{ background: "var(--tech-overlay-gradient)" }}
      />

      {/* Layer 4: Tech Icons */}
      <div className="md:hidden">
        {MOBILE_ICONS.map((item, i) => (
          <TechIcon
            key={`m-i-${i}`}
            Icon={item.icon}
            position={MOBILE_PILLARS[item.pillarIndex].position}
            top={item.top}
          />
        ))}
      </div>
      <div className="hidden md:block lg:hidden">
        {TABLET_ICONS.map((item, i) => (
          <TechIcon
            key={`t-i-${i}`}
            Icon={item.icon}
            position={TABLET_PILLARS[item.pillarIndex].position}
            top={item.top}
          />
        ))}
      </div>
      <div className="hidden lg:block">
        {DESKTOP_ICONS.map((item, i) => (
          <TechIcon
            key={`d-i-${i}`}
            Icon={item.icon}
            position={DESKTOP_PILLARS[item.pillarIndex].position}
            top={item.top}
          />
        ))}
      </div>
    </div>
  );
}
