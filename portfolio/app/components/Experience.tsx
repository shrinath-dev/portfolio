import ExperienceCard from "./ui/ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "RC Developer Pvt. Ltd.",
      location: "Delhi, India",
      period: "2024 - Present",
      type: "Full-time",
      description:
        "Leading end-to-end development of scalable web applications and driving technical initiatives for the organization.",
      achievements: [
        "Architected and developed multiple client projects using modern tech stack",
        "Optimized application performance resulting in 50% faster load times",
        "Mentored junior developers and conducted code reviews",
        "Implemented best practices for code quality and deployment workflows",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "AWS",
        "NextJs",
        "Python",
      ],
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      location: "Delhi, India",
      period: "2023 - 2024",
      type: "Freelance",
      description:
        "Delivered custom web solutions for diverse clients ranging from startups to established businesses.",
      achievements: [
        "Successfully completed 8+ projects across various domains",
        "Built responsive web applications with focus on user experience",
        "Managed complete project lifecycle from requirements to deployment",
        "Established long-term relationships with repeat clients",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "NextJs",
        "Pyhton",
      ],
    },
  ];

  return (
    <>
      <section id="experience" className="px-4 sm:px-6 lg:px-8 py-20 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-lg">
              My professional journey through various roles and companies,
              showcasing growth and expertise in web development.
            </p>
          </div>
          {/* experience timeline */}
          <div className="relative">
            {/* timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />
            <div className="space-y-12">
              {experiences.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col px-4 ${i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-8`}
                >
                  <div
                    className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 bg-primary w-4 h-4 rounded-full border-4 border-background z-10`}
                  />
                  <ExperienceCard key={i} {...item} />
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
