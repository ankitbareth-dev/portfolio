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

export default function VerticalTechBars() {
  // 9 Pillars evenly distributed
  const pillarPositions = [
    "left-[5%]", // 1 (Edge - Fades out)
    "left-[16%]", // 2 (Icons)
    "left-[27%]", // 3 (Icons)
    "left-[38%]", // 4 (Icons)
    "left-[50%]", // 5 (Center - Empty)
    "left-[62%]", // 6 (Icons)
    "left-[73%]", // 7 (Icons)
    "left-[84%]", // 8 (Icons)
    "left-[95%]", // 9 (Edge - Fades out)
  ];

  const iconPlacements: { icon: IconType; pillarIndex: number; top: string }[] =
    [
      // Left Side Group
      { icon: SiReact, pillarIndex: 1, top: "20%" },
      { icon: SiAngular, pillarIndex: 1, top: "50%" },
      { icon: SiMui, pillarIndex: 2, top: "35%" },
      { icon: SiNodedotjs, pillarIndex: 2, top: "65%" },
      { icon: SiCplusplus, pillarIndex: 3, top: "40%" },

      // Right Side Group
      { icon: SiGit, pillarIndex: 5, top: "40%" },
      { icon: SiTailwindcss, pillarIndex: 6, top: "35%" },
      { icon: SiVuedotjs, pillarIndex: 6, top: "65%" },
      { icon: SiSass, pillarIndex: 7, top: "20%" },
      { icon: SiJavascript, pillarIndex: 7, top: "50%" },
      { icon: SiPython, pillarIndex: 7, top: "65%" },
    ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Arc Layer (Back) - z-10 */}
      <div className="absolute -bottom-[19%] md:-bottom-[28%] left-1/2 z-10 h-[48%] md:h-[62%] w-[170%] md:w-[150%] -translate-x-1/2 overflow-hidden">
        {/* Core */}
        <div
          className="absolute bottom-[-50px] left-1/2 h-[95%] w-[95%] -translate-x-1/2 rounded-[50%]"
          style={{
            background:
              "radial-gradient(65% 95% at 50% 0%, rgba(30, 33, 55, 1) 0%, rgba(20, 22, 40, 0.8) 40%, rgba(6, 7, 14, 1) 100%)",
          }}
        />
        {/* Glow */}
        <div
          className="absolute bottom-[32%] left-1/2 h-[86%] w-[86%] -translate-x-1/2 rounded-[50%] blur-[0.45px]"
          style={{
            borderTop: "7px solid rgba(125, 132, 255, 0.95)",
            boxShadow:
              "0 -16px 58px rgba(125, 132, 255, 0.68), 0 -5px 35px rgba(236, 255, 255, 0.74)",
          }}
        />
      </div>

      {/* 2. Pillars Layer (Front) - z-20 */}
      {/* Mask cuts the bottom curve so pillars "sit" on the arc */}
      <div
        className="absolute inset-0 z-20"
        style={{
          maskImage: `radial-gradient(ellipse 66% 30% at 50% 102%, transparent 0%, transparent 70%, black 71%)`,
          WebkitMaskImage: `radial-gradient(ellipse 66% 30% at 50% 102%, transparent 0%, transparent 70%, black 71%)`,
        }}
      >
        {pillarPositions.map((position, index) => {
          let maskStyle = "none";

          if (index === 0) {
            maskStyle = "linear-gradient(to right, transparent 0%, black 460%)";
          } else if (index === 8) {
            maskStyle = "linear-gradient(to left, transparent 0%, black 40%)";
          }

          return (
            <div
              key={index}
              className={`absolute h-full w-[10%] md:w-[7%] -translate-x-1/2 bottom-0 ${position}`}
            >
              <div
                className="relative h-full w-full"
                style={{
                  background: `linear-gradient(0deg, 
                    rgba(30, 33, 55, 0.55) 0%, 
                    rgba(30, 33, 55, 0.2) 40%, 
                    rgba(16, 17, 30, 0) 100%)`,
                  maskImage: maskStyle,
                  WebkitMaskImage: maskStyle,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* 3. Overlay Layer - z-30 */}
      <div
        className="absolute inset-0 z-30"
        style={{
          background:
            "linear-gradient(180deg, rgba(6, 7, 14, 1) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(6, 7, 14, 0.9) 100%)",
        }}
      />

      {/* 4. Icons Layer - z-40 */}
      {iconPlacements.map(({ icon: Icon, pillarIndex, top }, index) => (
        <div
          key={index}
          className={`absolute z-40 flex h-16 w-16 md:h-20 md:w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 ${pillarPositions[pillarIndex]}`}
          style={{ top: top }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.08) 0%, rgba(10, 10, 20, 0.6) 100%)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          />
          <Icon className="relative h-7 w-7 md:h-9 md:w-9 text-white/40" />
        </div>
      ))}
    </div>
  );
}
