import { ArrowRight, Download } from "lucide-react";
import Github from "./ui/Github";
import Link from "next/link";
import Linkedin from "./ui/Linkedin";
import Mail from "./ui/Mail";

export default function Hero() {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 min-h-screen flex justify-center items-center pt-16">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4">
              {/* hero content */}
              <p className="text-muted-foreground">Hi There I'm</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Shrinath
              </h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-2">
                Full-Stack Developer
              </p>
              <p className="text-xl text-muted-foreground mb-4 max-w-xl">
                I craft elegant solutions to complex problems, building scalable
                web applications that make a difference. Specializing in React,
                Node.js, and modern web technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button className="w-full md:w-auto cursor-pointer flex gap-2 justify-center items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:scale-105 transition-all">
                  <span>Get In Touch</span>
                  <ArrowRight size={18} />
                </button>
                <button className=" w-full md:w-auto cursor-pointer flex gap-2 justify-center items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-xl hover:scale-105 transition-all">
                  <span>Download Resume</span>
                  <Download size={18} />
                </button>
              </div>

              <div className="flex gap-4">
                <Link href="">
                  <Github />
                </Link>
                <Link href="">
                  <Linkedin />
                </Link>
                <Link href="">
                  <Mail />
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              {/* hero image/gradient */}
              <div className="relative w-full max-w-md mx-auto aspect-square">
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-15"></div>
                <div className="w-full z-10 h-full flex justify-center items-center text-9xl text-foreground/10 select-none font-bold">
                  &lt; / &gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
