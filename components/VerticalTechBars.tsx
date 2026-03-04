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

// Added 'bottomOffset' to position the base of each pillar along the curve.
// This ensures pillars "sit" on the arc rather than overlapping it.
const PILLARS_CONFIG = [
  { position: "left-[5%]", height: "h-[85%]", bottomOffset: "bottom-[17%]" }, // Edge
  { position: "left-[16%]", height: "h-[85%]", bottomOffset: "bottom-[19%]" },
  { position: "left-[27%]", height: "h-[85%]", bottomOffset: "bottom-[21%]" },
  { position: "left-[38%]", height: "h-[85%]", bottomOffset: "bottom-[22%]" },
  { position: "left-[50%]", height: "h-[80%]", bottomOffset: "bottom-[23%]" }, // Center (Highest point of curve)
  { position: "left-[62%]", height: "h-[85%]", bottomOffset: "bottom-[22%]" },
  { position: "left-[73%]", height: "h-[85%]", bottomOffset: "bottom-[21%]" },
  { position: "left-[84%]", height: "h-[85%]", bottomOffset: "bottom-[19%]" },
  { position: "left-[95%]", height: "h-[85%]", bottomOffset: "bottom-[17%]" }, // Edge
];

const ICONS_CONFIG: { icon: IconType; pillarIndex: number; top: string }[] = [
  // Left Group
  { icon: SiReact, pillarIndex: 1, top: "20%" },
  { icon: SiAngular, pillarIndex: 1, top: "50%" },
  { icon: SiMui, pillarIndex: 2, top: "35%" },
  { icon: SiNodedotjs, pillarIndex: 2, top: "65%" },
  { icon: SiCplusplus, pillarIndex: 3, top: "40%" },

  // Right Group
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
  ARC_CORE_BG:
    "radial-gradient(65% 95% at 50% 0%, rgba(30, 33, 55, 1) 0%, rgba(20, 22, 40, 0.8) 40%, rgba(6, 7, 14, 1) 100%)",
  ARC_GLOW_BORDER: "7px solid rgba(125, 132, 255, 0.95)",
  ARC_GLOW_SHADOW:
    "0 -16px 58px rgba(125, 132, 255, 0.68), 0 -5px 35px rgba(236, 255, 255, 0.74)",

  // Pillar Colors
  PILLAR_GRADIENT: `linear-gradient(0deg, 
    rgba(30, 33, 55, 0.85) 0%, 
    rgba(30, 33, 55, 0.6) 100%)`,

  // Icon Badge Colors
  ICON_BG:
    "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.08) 0%, rgba(10, 10, 20, 0.6) 100%)",
  ICON_SHADOW: "0 10px 30px rgba(0,0,0,0.5)",
};

// ==========================================
// 3. COMPONENT
// ==========================================

export default function VerticalTechBars() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* --- Layer 1: Bottom Arc (Background) --- */}
      <div className="absolute -bottom-[19%] md:-bottom-[28%] left-1/2 z-10 h-[48%] md:h-[62%] w-[170%] md:w-[150%] -translate-x-1/2 overflow-hidden">
        {/* Core Shape */}
        <div
          className="absolute bottom-[-50px] left-1/2 h-[95%] w-[95%] -translate-x-1/2 rounded-[50%]"
          style={{ background: STYLES.ARC_CORE_BG }}
        />
        {/* Glow Effect */}
        <div
          className="absolute bottom-[32%] left-1/2 h-[86%] w-[86%] -translate-x-1/2 rounded-[50%] blur-[0.45px]"
          style={{
            borderTop: STYLES.ARC_GLOW_BORDER,
            boxShadow: STYLES.ARC_GLOW_SHADOW,
          }}
        />
      </div>

      {/* --- Layer 2: Vertical Pillars (Front) --- */}
      {/* We use the config values to position bottoms individually */}
      <div className="absolute inset-0 z-20">
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
              className={`absolute w-[10%] md:w-[7%] -translate-x-1/2 ${pillar.position} ${pillar.height} ${pillar.bottomOffset}`}
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
