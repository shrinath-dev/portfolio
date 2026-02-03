import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Github from "./Github";

export default function ProjectCard({
  image,
  title,
  role,
  description,
  problem,
  solution,
  tags,
  github,
  demo,
}: {
  image: string;
  title: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  tags: string[];
  github: string;
  demo: string;
}) {
  return (
    <>
      {/* card container */}
      <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all group">
        {/* image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            className="object-cover w-full h-full group-hover:scale-105 transition-transform"
            src={image}
            alt={title}
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
            {role}
          </span>
        </div>

        {/* project info */}
        <div className="p-6">
          <div>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>
          </div>
          <div className="space-y-3 mb-4">
            <div>
              <h4 className="font-semibold text-sm">Problem:</h4>
              <p className="text-sm text-muted-foreground">{problem}</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm">Solution:</h4>
              <p className="text-sm text-muted-foreground">{solution}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                className="bg-secondary px-3 py-1 text-sm rounded-full"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              className="bg-primary text-primary-foreground flex gap-2 px-4 py-2 items-center rounded-lg hover:opacity-90 hover:scale-105 transition-all"
              href={demo}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </Link>

            <Link
              href={github}
              className="bg-secondary text-secondry-foreground flex gap-2 px-4 py-2 items-center rounded-lg hover:opacity-90 hover:scale-105 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Github</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
