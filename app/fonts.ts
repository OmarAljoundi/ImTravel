import {
  Noto_Naskh_Arabic,
  Noto_Sans_Arabic,
  Noto_Kufi_Arabic,
} from "next/font/google";

export const Naskh = Noto_Naskh_Arabic({
  variable: "--font-naskh",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});
export const Sans = Noto_Sans_Arabic({
  variable: "--font-sans",
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const Kufi = Noto_Kufi_Arabic({
  variable: "--font-kufi",
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fontMapper = {
  "font-naskh": Naskh.variable,
  "font-sans": Sans.variable,
  "font-kufi": Kufi.variable,
} as Record<string, string>;
