"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import ThemeSwitch from "./ui/ThemeSwitch";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
    return;
  };
  const navLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 transition-all duration-300 border-b border-border backdrop-blur-xl">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 ">
          {/* Logo */}
          <Link href="/">
            <div className="text-xl md:text-2xl font-bold">
              &lt;Shrinath /&gt;
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:justify-center md:items-center md:gap-8">
            <div className="flex items-center gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <ThemeSwitch />
          </div>

          {/* mobile navigation buttons*/}
          <div className="flex justify-center items-center gap-6 md:hidden">
            <ThemeSwitch />
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-1 md:p-2 rounded-lg bg-muted cursor-pointer hover:scale-105 transition"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* mobile nabigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden z-100 fixed right-0 top-16 bottom-0 w-1/2 bg-secondary pt-4 border-l border-border">
          <div className="w-full flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-foreground/70 hover:text-foreground transition-colors px-2"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
