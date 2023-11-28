import type { Metadata } from "next";
import { roboto_s } from "@/lib/fonts";

import ThemeContextProvider from "@/context/themeContext";
import DarkModeComponent from "@/components/elemenets/basic/darkModeComponent";

import "./globals.css";
import "./reset.css";

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
    <html lang="en" className="scroll-smooth overflow-x-hidden dark">
      <DarkModeComponent />
      <ThemeContextProvider>
        <body
          className={`${roboto_s.className} bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-stone-200 transition-transform duration-200`}
        >
          {children}
        </body>
      </ThemeContextProvider>
    </html>
  );
}
