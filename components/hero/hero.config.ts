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

// Types for our data structures
type IconType = React.ComponentType<{ className?: string }>;
interface PillarConfig {
  position: string;
  width: string;
}
interface IconConfig {
  icon: IconType;
  pillarIndex: number;
  top: string;
}

// 1. Desktop Configuration (9 pillars, 11 icons)
export const DESKTOP_PILLARS: PillarConfig[] = [
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

export const DESKTOP_ICONS: IconConfig[] = [
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

// 2. Tablet Configuration (7 pillars, 9 icons)
export const TABLET_PILLARS: PillarConfig[] = [
  { position: "left-[5%]", width: "w-[12%]" },
  { position: "left-[20%]", width: "w-[12%]" },
  { position: "left-[35%]", width: "w-[12%]" },
  { position: "left-[50%]", width: "w-[12%]" },
  { position: "left-[65%]", width: "w-[12%]" },
  { position: "left-[80%]", width: "w-[12%]" },
  { position: "left-[95%]", width: "w-[12%]" },
];

export const TABLET_ICONS: IconConfig[] = [
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

// 3. Mobile Configuration (5 pillars, 5 icons)
export const MOBILE_PILLARS: PillarConfig[] = [
  { position: "left-[5%]", width: "w-[18%]" },
  { position: "left-[27.5%]", width: "w-[18%]" },
  { position: "left-[50%]", width: "w-[18%]" },
  { position: "left-[72.5%]", width: "w-[18%]" },
  { position: "left-[95%]", width: "w-[18%]" },
];

export const MOBILE_ICONS: IconConfig[] = [
  { icon: DiReact, pillarIndex: 1, top: "35%" },
  { icon: SiTailwindcss, pillarIndex: 1, top: "65%" },
  { icon: SiNextdotjs, pillarIndex: 2, top: "50%" },
  { icon: SiRedux, pillarIndex: 3, top: "35%" },
  { icon: SiAxios, pillarIndex: 3, top: "65%" },
];
