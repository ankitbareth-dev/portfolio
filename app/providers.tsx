"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme" // This adds/removes data-theme="dark" or "light"
      defaultTheme="dark" // <--- ENSURES DARK IS DEFAULT
      enableSystem // Allows switching to system theme if user wants
      disableTransitionOnChange // Prevents jarring animations during page loads
    >
      {children}
    </ThemeProvider>
  );
}
