import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiPython,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiMui,
  SiSass,
  SiGit,
  SiCplusplus,
} from "react-icons/si";
import type { IconType } from "react-icons";

// ==========================================
// 1. CONFIGURATION
// ==========================================

const PILLARS_CONFIG = [
  { position: "left-[5%]", height: "h-[100%]" },
  { position: "left-[16%]", height: "h-[100%]" },
  { position: "left-[27%]", height: "h-[100%]" },
  { position: "left-[38%]", height: "h-[100%]" },
  { position: "left-[50%]", height: "h-[100%]" },
  { position: "left-[62%]", height: "h-[100%]" },
  { position: "left-[73%]", height: "h-[100%]" },
  { position: "left-[84%]", height: "h-[100%]" },
  { position: "left-[95%]", height: "h-[100%]" },
];

const ICONS_CONFIG: { icon: IconType; pillarIndex: number; top: string }[] = [
  { icon: SiReact, pillarIndex: 1, top: "15%" },
  { icon: SiAngular, pillarIndex: 1, top: "50%" },
  { icon: SiMui, pillarIndex: 2, top: "35%" },
  { icon: SiNodedotjs, pillarIndex: 2, top: "65%" },
  { icon: SiCplusplus, pillarIndex: 3, top: "40%" },
  { icon: SiGit, pillarIndex: 5, top: "40%" },
  { icon: SiTailwindcss, pillarIndex: 6, top: "35%" },
  { icon: SiVuedotjs, pillarIndex: 6, top: "65%" },
  { icon: SiSass, pillarIndex: 7, top: "20%" },
  { icon: SiJavascript, pillarIndex: 7, top: "50%" },
  { icon: SiPython, pillarIndex: 7, top: "65%" },
];

// ==========================================
// 2. STYLES
// ==========================================

const STYLES = {
  // Arc Colors
  ARC_CORE_BG: "rgba(30, 33, 55, 1)",
  ARC_RIM_BORDER: "3px solid rgba(114, 117, 252, 0.95)",
  ARC_RIM_SHADOW: "0 0 15px rgba(114, 117, 252, 0.4)",

  // Pillar Colors
  PILLAR_GRADIENT: `linear-gradient(0deg, 
    rgba(30, 33, 55, 0.85) 0%, 
    rgba(30, 33, 55, 0.6) 100%)`,

  // Icon Badge Colors
  ICON_BG:
    "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.08) 0%, rgba(10, 10, 20, 0.6) 100%)",
  ICON_SHADOW: "0 10px 30px rgba(0,0,0,0.5)",
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
        {/* Core Shape (Background only) */}
        <div
          className="absolute inset-0"
          style={{
            background: STYLES.ARC_CORE_BG,
            clipPath: `ellipse(32% ${ARC_CONFIG.BEND} at 50% 100%)`,
          }}
        />

        {/* Glow Layer (White Top -> Primary Color -> Transparent) */}
        <div
          className="absolute inset-0"
          style={{
            // 1. Same shape and position as the arc
            clipPath: `ellipse(32% ${ARC_CONFIG.BEND} at 50% 100%)`,

            // 2. Vertical Gradient:
            // Starts at 0% with White (Hot Core)
            // Transitions to Primary Color (#7275fc) by 20%
            // Fades to Transparent by 80%
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(114, 117, 252, 1) 20%, rgba(114, 117, 252, 0) 80%)",

            // 3. Mask: Keeps center bright, fades edges
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 100% at 50% 0%, black 0%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 75% 100% at 50% 0%, black 0%, transparent 100%)",

            // 4. Reduced blur slightly to make the white "core" more distinct
            filter: "blur(12px)",

            // 5. Intensity: Screen blend mode for glow
            opacity: 1,
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* --- Layer 2: Vertical Pillars (Front) --- */}
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
            ? "linear-gradient(to right, transparent 0%, black 40%)"
            : isRightEdge
              ? "linear-gradient(to left, transparent 0%, black 40%)"
              : "none";

          return (
            <div
              key={index}
              className={`absolute w-[10%] md:w-[7%] -translate-x-1/2 bottom-0 ${pillar.position} ${pillar.height}`}
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

      {/* --- Layer 3: Global Overlay (Atmosphere) --- */}
      <div
        className="absolute inset-0 z-30"
        style={{
          background:
            "linear-gradient(180deg, rgba(6, 7, 14, 1) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(6, 7, 14, 0.9) 100%)",
        }}
      />

      {/* --- Layer 4: Tech Icons (Foreground) --- */}
      {ICONS_CONFIG.map(({ icon: Icon, pillarIndex, top }, index) => {
        const pillarPosition = PILLARS_CONFIG[pillarIndex]?.position;

        return (
          <div
            key={index}
            className={`absolute z-40 flex h-16 w-16 md:h-20 md:w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 ${pillarPosition}`}
            style={{ top: top }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: STYLES.ICON_BG,
                boxShadow: STYLES.ICON_SHADOW,
              }}
            />
            <Icon className="relative h-7 w-7 md:h-9 md:w-9 text-white/40" />
          </div>
        );
      })}
    </div>
  );
}
