import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceCard({
  title,
  type,
  company,
  location,
  period,
  description,
  achievements,
  technologies,
}: {
  title: string;
  type: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}) {
  return (
    <>
      <div className="bg-card relative p-6 border border-border rounded-lg hover:shadow-lg transition-shadow md:w-1/2">
        {/* card Header */}
        <div className="mb-4">
          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
            <h3 className="font-semibold text-xl">{title}</h3>
            <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">
              {type}
            </span>
          </div>
          <div className="flex flex-wrap text-muted-foreground items-center gap-2 mb-2">
            <Briefcase className="w-4 h-4" />
            <span>{company}</span>
            <span>&bull;</span>
            <span>{location}</span>
          </div>
          <div className="flex text-muted-foreground items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
        </div>

        {/* desctiption */}
        <div className="text-muted-foreground mb-4">
          <p>{description}</p>
        </div>

        {/* achievements */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Achievements:</h4>
          <ul className=" space-y-2">
            {achievements.map((item, i) => (
              <li
                className="text-sm text-muted-foreground flex items-start gap-2"
                key={i}
              >
                <span className="text-primary mt-1 text-sm">&#9658;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* key technology */}
        <div className="flex flex-wrap gap-2 ">
          {technologies.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
