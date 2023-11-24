import {
  Inter,
  Roboto_Flex,
  Roboto_Mono,
  Roboto_Slab,
  Archivo_Black,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_s = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const archivo_black = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});
