import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Ankit Bareth | React Developer Portfolio | Next.js Frontend Developer",
  description:
    "Ankit Bareth is a Frontend Developer specializing in React, Next.js, and TypeScript. Explore projects, portfolio, and real-world applications.",
  keywords: [
    "Ankit Bareth",
    "Ankit React Developer",
    "Frontend Developer India",
    "Next.js Portfolio",
    "React Developer Portfolio",
  ],

  openGraph: {
    title: "Ankit Bareth | React Developer Portfolio",
    description:
      "Frontend Developer specializing in React, Next.js, and TypeScript.",
    url: "https://portfolio-seven-phi-95.vercel.app",
    siteName: "Ankit Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <head>
        <meta
          name="google-site-verification"
          content="bqDBgiJNJML2nn0z7WBgk0sfApjyFqMlIL80j0UdQzY"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
