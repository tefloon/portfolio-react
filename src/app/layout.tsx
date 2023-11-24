import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import ThemeContextProvider from "@/context/themeContext";
import DarkModeComponent from "@/components/elemenets/basic/darkModeComponent";

import "./globals.css";
import "./reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "portfolio | Antoni Gawlikowski",
  description: "A presentation of skills and experience of React developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <DarkModeComponent />
      <ThemeContextProvider>
        <body
          className={`${inter.className} bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-stone-200`}
        >
          {children}
        </body>
      </ThemeContextProvider>
    </html>
  );
}
