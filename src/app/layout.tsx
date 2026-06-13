import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chalana Piyumika | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer based in Colombo, Sri Lanka. Specializing in React, Next.js, Node.js, and building beautiful web experiences.",
  keywords: ["software engineer", "full stack developer", "React", "Next.js", "Node.js", "Sri Lanka"],
  authors: [{ name: "Chalana Piyumika" }],
  openGraph: {
    title: "Chalana Piyumika | Full Stack Software Engineer",
    description: "Full Stack Software Engineer crafting elegant solutions from complex problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
