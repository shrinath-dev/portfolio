"use client";

import React from "react";
import { useTheme } from "@/app/contexts/ThemeContext/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button
        onClick={toggleTheme}
        className="p-1 md:p-2 rounded-lg bg-muted cursor-pointer hover:scale-105 transition"
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>
    </>
  );
}
