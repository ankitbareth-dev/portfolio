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
  const bars = [
    "left-[12%]",
    "left-[26%]",
    "left-[40%]",
    "left-[54%]",
    "left-[68%]",
    "left-[82%]",
  ];

  const badges: { icon: IconType; className: string }[] = [
    { icon: SiReact, className: "left-[15%] top-[28%]" },
    { icon: SiAngular, className: "left-[15%] top-[50%]" },
    { icon: SiMui, className: "left-[26%] top-[44%]" },
    { icon: SiNodedotjs, className: "left-[26%] top-[61%]" },
    { icon: SiCplusplus, className: "left-[37%] top-[53%]" },
    { icon: SiGit, className: "left-[48%] top-[58%]" },
    { icon: SiTailwindcss, className: "left-[59%] top-[53%]" },
    { icon: SiVuedotjs, className: "left-[80%] top-[28%]" },
    { icon: SiSass, className: "left-[70%] top-[44%]" },
    { icon: SiJavascript, className: "left-[70%] top-[61%]" },
    { icon: SiPython, className: "left-[80%] top-[50%]" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Vertical Fade Top/Bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />

      {/* Tech Bars */}
      {bars.map((position, index) => (
        <div
          key={position}
          className={`absolute bottom-0 w-[14%] md:w-[9.4%] -translate-x-1/2 ${position} ${index % 2 ? "h-[80%]" : "h-[90%]"}`}
        >
          <div
            className="h-full w-full rounded-t-[999px]"
            style={{
              background: `
                radial-gradient(58% 105% at 50% 100%, rgba(100, 107, 255, 0.2) 0%, rgba(100, 107, 255, 0.04) 35%, rgba(100, 107, 255, 0) 80%),
                linear-gradient(90deg, rgba(114, 117, 252, 0) 0%, rgba(114, 117, 252, 0.12) 50%, rgba(114, 117, 252, 0) 100%),
                linear-gradient(180deg, rgba(2, 5, 18, 0) 0%, rgba(2, 4, 18, 0.95) 28%)
              `,
            }}
          />
        </div>
      ))}

      {/* Tech Badges */}
      {badges.map(({ icon: Icon, className }, index) => (
        <div
          key={index}
          className={`absolute z-10 flex h-20 w-20 md:h-28 md:w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 ${className}`}
          style={{
            background:
              "radial-gradient(110% 95% at 50% 10%, rgba(255, 255, 255, 0.06) 0%, rgba(30, 33, 55, 0.22) 40%, rgba(9, 10, 22, 0.72) 100%)",
            boxShadow:
              "inset 0 0 0 1px rgba(255, 255, 255, 0.02), 0 24px 45px rgba(0, 0, 0, 0.35)",
          }}
        >
          <Icon className="h-8 w-8 md:h-11 md:w-11 text-white/30" />
        </div>
      ))}

      {/* Bottom Arc */}
      <div className="absolute -bottom-[19%] md:-bottom-[28%] left-1/2 z-10 h-[48%] md:h-[62%] w-[170%] md:w-[132%] -translate-x-1/2 overflow-hidden">
        {/* Glow */}
        <div
          className="absolute bottom-[32%] left-1/2 h-[86%] w-[86%] -translate-x-1/2 rounded-[50%] blur-[0.45px]"
          style={{
            borderTop: "7px solid rgba(125, 132, 255, 0.95)",
            boxShadow:
              "0 -16px 58px rgba(125, 132, 255, 0.68), 0 -5px 35px rgba(236, 255, 255, 0.74)",
          }}
        />
        {/* Core */}
        <div
          className="absolute bottom-0 left-1/2 h-[95%] w-[95%] -translate-x-1/2 rounded-[50%] border-t border-white/24"
          style={{
            background:
              "radial-gradient(65% 95% at 50% 0%, rgba(110, 118, 255, 0.33) 0%, rgba(37, 38, 90, 0.42) 38%, rgba(8, 9, 22, 0.9) 78%, rgba(5, 6, 14, 1) 100%)",
          }}
        />
      </div>
    </div>
  );
}
