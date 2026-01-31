"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useWindowWidth } from "@/app/hooks/viewportDimension";

export default function Navitems() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const width = useWindowWidth();

  useEffect(() => {
    if (width > 768) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <nav>
      <div
        className={`md:flex md:gap-2 md:static ${!isOpen ? "hidden" : "flex flex-col fixed z-50 h-screen top-0 left-0 w-1/2 pt-10 gap-4 bg-secondary animate-slideIn"}`}
      >
        <Link href="#about">
          <div className="text-lg text-muted-foreground hover:text-primary transition-colors px-2 ">
            <p>About</p>
          </div>
        </Link>
        <Link href="#skills">
          <div className="text-lg text-muted-foreground hover:text-primary transition-colors px-2">
            <p>Skills</p>
          </div>
        </Link>
        <Link href="#projects">
          <div className="text-lg text-muted-foreground hover:text-primary transition-colors px-2">
            <p>Projects</p>
          </div>
        </Link>
        <Link href="#experience">
          <div className="text-lg text-muted-foreground hover:text-primary transition-colors px-2">
            <p>Experience</p>
          </div>
        </Link>
        <Link href="#contact">
          <div className="text-lg text-muted-foreground hover:text-primary transition-colors px-2">
            <p>Contact</p>
          </div>
        </Link>
      </div>

      <div>
        {
          <div className="max-w-fit max-h-fit flex justify-center items-center p-1 md:p-2 rounded-xl md:hidden">
            <button onClick={() => setIsOpen((prev) => !prev)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        }
      </div>
    </nav>
  );
}
