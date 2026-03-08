export interface Project {
  title: string;
  headline: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  features: string[];
}

export const projectsData: Project[] = [
  {
    title: "ChatFlow",
    headline: "Real-Time Private Chat Application",
    description:
      "A full-featured chat platform enabling instant communication with real-time event handling. Built with a focus on low-latency interactions and rich media support.",
    imageUrl: "/chatflow-preview.png",
    liveUrl: "https://chat-app-frontend-gamma-flax.vercel.app",
    githubUrl: "https://github.com/ankitbareth-dev/Chat-App-Frontend",
    techStack: ["React", "TypeScript", "Socket.io", "Redux", "Tailwind CSS"],
    features: [
      "Instant Messaging & Seen Status",
      "Voice Messages & Media Sharing",
      "Typing Indicators & Online Presence",
    ],
  },
  {
    title: "Chronos",
    headline: "Visual Time Tracking Matrix",
    description:
      "An intuitive time-tracking frontend that transforms schedules into interactive visual matrices. Focuses on performance optimization and responsive design patterns.",
    imageUrl: "/chronos-preview.png",
    liveUrl: "https://chronos-app-rose.vercel.app",
    githubUrl: "https://github.com/ankitbareth-dev/Chronos-App",
    techStack: ["React", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
    features: [
      "Dynamic Grid Generation",
      "Optimistic UI Updates",
      "Performance Optimized Rendering",
    ],
  },
];
