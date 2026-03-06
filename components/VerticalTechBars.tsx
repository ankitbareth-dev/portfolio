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

// ==========================================
// 1. CONFIGURATION (Easily Editable)
// ==========================================

const PILLARS_CONFIG = [
  { position: "left-[5%]", height: "h-[100%]" },
  { position: "left-[16.25%]", height: "h-[100%]" },
  { position: "left-[27.5%]", height: "h-[100%]" },
  { position: "left-[38.75%]", height: "h-[100%]" },
  { position: "left-[50%]", height: "h-[100%]" },
  { position: "left-[61.25%]", height: "h-[100%]" },
  { position: "left-[72.5%]", height: "h-[100%]" },
  { position: "left-[83.75%]", height: "h-[100%]" },
  { position: "left-[95%]", height: "h-[100%]" },
];

const ICONS_CONFIG: { icon: IconType; pillarIndex: number; top: string }[] = [
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

// ==========================================
// 2. STYLES (Reference CSS Variables)
// ==========================================

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

// ==========================================
// 3. COMPONENT
// ==========================================

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
        {PILLARS_CONFIG.map((pillar, index) => {
          const isLeftEdge = index === 0;
          const isRightEdge = index === PILLARS_CONFIG.length - 1;

          const edgeMask = isLeftEdge
            ? "linear-gradient(to right, transparent 0%, black 25%)"
            : isRightEdge
              ? "linear-gradient(to left, transparent 0%, black 25%)"
              : "none";

          return (
            <div
              key={index}
              className={`absolute w-[12%] md:w-[10%] -translate-x-1/2 bottom-0 ${pillar.position} ${pillar.height}`}
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
      {ICONS_CONFIG.map(({ icon: Icon, pillarIndex, top }, index) => {
        const pillarPosition = PILLARS_CONFIG[pillarIndex]?.position;

        return (
          <div
            key={index}
            className={`absolute z-40 flex h-14 w-14 md:h-16 md:w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ${pillarPosition}`}
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
              // Using 'text-foreground' ensures it is White in Dark Mode and Black in Light Mode
              className={`relative h-10 w-auto max-w-[70%] md:h-12 md:max-w-[75%] text-foreground`}
            />
          </div>
        );
      })}
    </div>
  );
}
