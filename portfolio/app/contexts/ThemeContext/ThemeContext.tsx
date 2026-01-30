"use client";

import React, { useState, createContext, useContext, useEffect } from "react";

export type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme hook must be called inside ThemeProvider.");
  }

  return context;
};

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let initialThemeState: Theme = "light";

  useEffect(() => {
    const userPreference = localStorage.getItem("theme") as Theme;
    const darkPreference = window.matchMedia("prefer-color-scheme");

    if (userPreference) {
      initialThemeState = userPreference;
      setTheme(userPreference);
    } else if (darkPreference) {
      initialThemeState = "dark";
      setTheme("dark");
    }

    localStorage.setItem("theme", initialThemeState);
    document.documentElement.setAttribute("data-theme", initialThemeState);
  }, []);

  const [theme, setTheme] = useState<Theme>(initialThemeState);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  const initialState = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={initialState}>
      {children}
    </ThemeContext.Provider>
  );
}
