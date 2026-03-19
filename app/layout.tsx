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
    "Hire React Developer | Ankit Bareth | Next.js Frontend Developer India",

  description:
    "Looking to hire a React or Next.js developer? I'm Ankit Bareth, a frontend developer building scalable, high-performance web applications using React, Next.js, and TypeScript.",

  keywords: [
    "hire react developer india",
    "nextjs developer portfolio",
    "frontend developer for hire",
    "react developer freelancer india",
    "ankit bareth react developer",
  ],

  metadataBase: new URL("https://portfolio-seven-phi-95.vercel.app"),

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Hire React Developer | Ankit Bareth",
    description:
      "Frontend developer specializing in React, Next.js, and scalable web apps.",
    url: "https://portfolio-seven-phi-95.vercel.app",
    siteName: "Ankit Portfolio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <head>
        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="bqDBgiJNJML2nn0z7WBgk0sfApjyFqMlIL80j0UdQzY"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ankit Bareth",
              url: "https://portfolio-seven-phi-95.vercel.app",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://github.com/YOUR_USERNAME",
                "https://linkedin.com/in/YOUR_PROFILE",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Frontend Development",
              ],
            }),
          }}
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
