import { Code2, Sparkles, Target, Users } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that follows best practices",
    },
    {
      icon: Sparkles,
      title: "Creative Solutions",
      description:
        "Innovative approaches to solve complex technical challenges",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that exceed expectations",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong communicator who thrives in team environments",
    },
  ];
  return (
    <>
      <section
        id="about"
        className="px-4 sm:px-6 lg:px-8 bg-secondary/30 py-20"
      >
        <div className="max-w-7xl mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              {/* left content */}
              <h3 className="text-2xl font-semibold mb-6">
                Passionate Developer with 2+ Years of Experience
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a full-stack developer who loves turning ideas into
                  reality through code. My journey in software development
                  started with a curiosity about how things work under the hood,
                  and it has evolved into a career building impactful web
                  applications.
                </p>
                <p>
                  I specialize in creating seamless user experiences with modern
                  JavaScript frameworks, particularly React and Node.js. I'm
                  passionate about writing clean, efficient code and staying
                  up-to-date with the latest technologies and best practices.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to
                  open-source projects, writing technical articles, or exploring
                  new frameworks and tools. I believe in continuous learning and
                  sharing knowledge with the developer community.
                </p>
                <p>
                  I'm currently looking for opportunities where I can contribute
                  to meaningful projects, collaborate with talented teams, and
                  continue growing as a developer.
                </p>
              </div>
            </div>
            <div>
              {/* right content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="bg-background border border-border p-6 rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className=" bg-primary/10 w-fit p-3 rounded-lg  mb-4 text-primary ">
                      <item.icon className="w-6 h-6 " />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
