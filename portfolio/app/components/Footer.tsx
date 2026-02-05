"use client";
import Link from "next/link";
import Github from "./ui/Github";
import Linkedin from "./ui/Linkedin";
import Mail from "./ui/Mail";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
      <section className="bg-secondary/50   border-t border-t-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
          <div className="border-b border-b-border grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-4 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">&lt;Shrinath /&gt;</h3>
              <p className="text-muted-foreground mb-4">
                Full-Stack Developer passionate about creating elegant solutions
                to complex problems.
              </p>
              <div>
                <div className="flex gap-3">
                  <Link href="https://github.com/shrinath-dev">
                    <Github />
                  </Link>
                  <Link href="https://www.linkedin.com/in/shrinath-k-30b514385/">
                    <Linkedin />
                  </Link>
                  <Link href="mailto:shrinath200802@gmail.com">
                    <Mail />
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-3 justify-start items-start">
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
            </div>
          </div>

          <div className="text-center text-muted-foreground">
            <p>&copy; {currentYear} Shrinath. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
}
