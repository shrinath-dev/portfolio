"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/contexts/ThemeContext/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className="bg-muted max-w-fit max-h-fit flex justify-center items-center p-1 md:p-2 rounded-xl cursor-pointer"
    >
      <button>{theme === "light" ? <Sun /> : <Moon />}</button>
    </div>
  );
}
