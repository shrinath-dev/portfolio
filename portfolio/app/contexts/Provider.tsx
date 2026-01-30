"use client";

import ThemeProvider from "./ThemeContext/ThemeContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
