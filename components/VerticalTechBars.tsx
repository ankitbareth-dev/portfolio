"use client";
import {
  DiReact,
  DiNodejsSmall,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiGit,
  DiPostgresql,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiGraphql,
  SiAxios,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

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

// Desktop: 9 pillars, 11 icons
const DESKTOP_PILLARS = [
  { position: "left-[5%]", width: "w-[12%] md:w-[10%]" },
  { position: "left-[16.25%]", width: "w-[12%] md:w-[10%]" },
  { position: "left-[27.5%]", width: "w-[12%] md:w-[10%]" },
  { position: "left-[38.75%]", width: "w-[12%] md:w-[10%]" },
  { position: "left-[50%]", width: "w-[12%] md:w-[10%]" },
  { position: "left-[61.25%]", width: "w-[12%] md:w-[10%]" },
  { position: "left-[72.5%]", width: "w-[12%] md:w-[10%]" },
  { position: "left-[83.75%]", width: "w-[12%] md:w-[10%]" },
  { position: "left-[95%]", width: "w-[12%] md:w-[10%]" },
];

const DESKTOP_ICONS = [
  { icon: DiHtml5, pillarIndex: 1, top: "25%" },
  { icon: DiCss3, pillarIndex: 1, top: "50%" },
  { icon: DiJavascript1, pillarIndex: 2, top: "40%" },
  { icon: DiReact, pillarIndex: 2, top: "65%" },
  { icon: SiGraphql, pillarIndex: 3, top: "52%" },
  { icon: SiNextdotjs, pillarIndex: 4, top: "65%" },
  { icon: DiNodejsSmall, pillarIndex: 5, top: "52%" },
  { icon: DiPostgresql, pillarIndex: 6, top: "40%" },
  { icon: SiAxios, pillarIndex: 6, top: "65%" },
  { icon: DiGit, pillarIndex: 7, top: "25%" },
  { icon: SiTailwindcss, pillarIndex: 7, top: "50%" },
];

// Tablet: 7 pillars, 9 icons
const TABLET_PILLARS = [
  { position: "left-[5%]", width: "w-[12%]" },
  { position: "left-[20%]", width: "w-[12%]" },
  { position: "left-[35%]", width: "w-[12%]" },
  { position: "left-[50%]", width: "w-[12%]" },
  { position: "left-[65%]", width: "w-[12%]" },
  { position: "left-[80%]", width: "w-[12%]" },
  { position: "left-[95%]", width: "w-[12%]" },
];

const TABLET_ICONS = [
  { icon: DiHtml5, pillarIndex: 1, top: "25%" },
  { icon: DiCss3, pillarIndex: 1, top: "50%" },
  { icon: DiJavascript1, pillarIndex: 2, top: "40%" },
  { icon: DiReact, pillarIndex: 2, top: "65%" },
  { icon: SiNextdotjs, pillarIndex: 3, top: "52%" },
  { icon: DiNodejsSmall, pillarIndex: 4, top: "40%" },
  { icon: SiGraphql, pillarIndex: 4, top: "65%" },
  { icon: DiPostgresql, pillarIndex: 5, top: "25%" },
  { icon: DiGit, pillarIndex: 5, top: "50%" },
];

// Mobile: 5 pillars, 5 icons
const MOBILE_PILLARS = [
  { position: "left-[5%]", width: "w-[18%]" },
  { position: "left-[27.5%]", width: "w-[18%]" },
  { position: "left-[50%]", width: "w-[18%]" },
  { position: "left-[72.5%]", width: "w-[18%]" },
  { position: "left-[95%]", width: "w-[18%]" },
];

const MOBILE_ICONS = [
  { icon: DiReact, pillarIndex: 1, top: "35%" },
  { icon: SiTailwindcss, pillarIndex: 1, top: "65%" },
  { icon: SiNextdotjs, pillarIndex: 2, top: "50%" },
  { icon: SiRedux, pillarIndex: 3, top: "35%" },
  { icon: SiAxios, pillarIndex: 3, top: "65%" },
];

function renderPillars(pillars: typeof DESKTOP_PILLARS, prefix: string) {
  return pillars.map((pillar, index) => {
    const isLeftEdge = index === 0;
    const isRightEdge = index === pillars.length - 1;
    const edgeMask = isLeftEdge
      ? "linear-gradient(to right, transparent 0%, black 25%)"
      : isRightEdge
        ? "linear-gradient(to left, transparent 0%, black 25%)"
        : "none";

    return (
      <div
        key={`${prefix}-pillar-${index}`}
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
  });
}

function renderIcons(
  icons: typeof DESKTOP_ICONS,
  pillars: typeof DESKTOP_PILLARS,
  prefix: string,
  containerSize: string,
  iconSize: string,
  borderWidth: string,
) {
  return icons.map(({ icon: Icon, pillarIndex, top }, index) => {
    const pillarPosition = pillars[pillarIndex]?.position;

    return (
      <div
        key={`${prefix}-icon-${index}`}
        className={`absolute z-40 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ${pillarPosition} ${containerSize}`}
        style={{
          top,
          borderColor: "var(--tech-icon-border)",
          borderWidth,
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
        <Icon className={`relative text-foreground ${iconSize}`} />
      </div>
    );
  });
}

export default function VerticalTechBars() {
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
        {/* Mobile Pillars (5) - Visible ONLY on mobile (< 768px) */}
        <div className="md:hidden">
          {renderPillars(MOBILE_PILLARS, "mobile")}
        </div>

        {/* Tablet Pillars (7) - Visible ONLY on tablet (768px - 1024px) */}
        <div className="hidden md:block lg:hidden">
          {renderPillars(TABLET_PILLARS, "tablet")}
        </div>

        {/* Desktop Pillars (9) - Visible ONLY on desktop (≥ 1024px) */}
        <div className="hidden lg:block">
          {renderPillars(DESKTOP_PILLARS, "desktop")}
        </div>
      </div>

      {/* --- Layer 3: Global Overlay --- */}
      <div
        className="absolute inset-0 z-30"
        style={{
          background: "var(--tech-overlay-gradient)",
        }}
      />

      {/* --- Layer 4: Tech Icons --- */}

      {/* Mobile Icons (5) - Visible ONLY on mobile (< 768px) */}
      <div className="md:hidden">
        {renderIcons(
          MOBILE_ICONS,
          MOBILE_PILLARS,
          "mobile",
          "h-14 w-14 md:h-16 md:w-16",
          "h-10 w-auto max-w-[70%] md:h-12 md:max-w-[75%]",
          "1px",
        )}
      </div>

      {/* Tablet Icons (9) - Visible ONLY on tablet (768px - 1024px) */}
      <div className="hidden md:block lg:hidden">
        {renderIcons(
          TABLET_ICONS,
          TABLET_PILLARS,
          "tablet",
          "h-14 w-14 md:h-16 md:w-16",
          "h-10 w-auto max-w-[70%] md:h-12 md:max-w-[75%]",
          "1px",
        )}
      </div>

      {/* Desktop Icons (11) - Visible ONLY on desktop (≥ 1024px) */}
      <div className="hidden lg:block">
        {renderIcons(
          DESKTOP_ICONS,
          DESKTOP_PILLARS,
          "desktop",
          "h-14 w-14 md:h-16 md:w-16",
          "h-10 w-auto max-w-[70%] md:h-12 md:max-w-[75%]",
          "1px",
        )}
      </div>
    </div>
  );
}
