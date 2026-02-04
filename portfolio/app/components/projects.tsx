import Image from "next/image";
import ProjectCard from "./ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Bella Vista - Authentic Italian Restaurant",
      description:
        "A fully responsive restaurant website featuring an elegant design with hero section, menu display with pricing, and contact information.",
      problem:
        "Restaurants need an attractive online presence to showcase their menu and attract customers without complex functionality.",
      solution:
        "Created a clean, professional restaurant landing page using pure HTML and CSS with smooth animations, responsive navigation, and an organized menu structure.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1080",
      tags: ["HTML", "CSS", "Responsive Design", "Animations"],
      github:
        "https://github.com/shrinath-dev/Sample-projects/tree/main/restaurant_website",
      demo: "https://joyful-kulfi-192502.netlify.app/",
      role: "Developer",
    },
    {
      title: "Weather Forecast Application",
      description:
        "An interactive weather application that displays current weather conditions and forecasts based on user location. Features unit conversion for temperature, wind speed, and precipitation with a clean, modern interface.",
      problem:
        "Users need quick access to accurate weather information with customizable units and an intuitive interface.",
      solution:
        "Built a responsive weather app with geolocation support, multiple unit systems (Celsius/Fahrenheit, km/h/m/s, mm/inch), and real-time weather data visualization using weather APIs.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1080",
      tags: ["HTML", "CSS", "JavaScript", "Weather API", "Geolocation"],
      github:
        "https://github.com/shrinath-dev/Sample-projects/tree/main/weather_app",
      demo: "https://sd-weather-demo-app.netlify.app/",
      role: "Developer",
    },
    {
      title: "Movies Explorer",
      description:
        "A component-driven React application for browsing and managing favorite movies. Features search functionality, filtering by genre, dark/light theme toggle, and favorites management using static JSON data.",
      problem:
        "Movie enthusiasts need an organized way to explore films, manage favorites, and filter by preferences.",
      solution:
        "Developed a React-based movie catalog with search, genre filtering, favorites system, and theme switching. Built entirely with static data to focus on UI components and state management practice.",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1080",
      tags: [
        "React",
        "JavaScript",
        "CSS",
        "Component Architecture",
        "State Management",
      ],
      github:
        "https://github.com/shrinath-dev/Sample-projects/tree/main/movies-explorer",
      demo: "https://sd-movies-explorer.netlify.app/",
      role: "Developer",
    },
    {
      title: "Phlipkart - E-Commerce Platform",
      description:
        "A full-featured e-commerce application with product catalog, shopping cart, checkout flow, and Redux state management. Features real-time cart updates, product filtering by category, search functionality, and theme switching.",
      problem:
        "Learning projects need to demonstrate real-world e-commerce functionality including complex state management and API integration.",
      solution:
        "Created a scalable e-commerce platform using Redux Toolkit for state management, Context API for theming, React Router for navigation, and Redux Persist for cart persistence. Integrated with FakeStore API for product data.",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1080",
      tags: [
        "React",
        "Redux Toolkit",
        "Context API",
        "React Router",
        "Redux Persist",
        "API Integration",
      ],
      github:
        "https://github.com/shrinath-dev/Sample-projects/tree/main/phlipkart",
      demo: "https://sd-phlipkart.netlify.app/",
      role: "Lead Developer",
    },
    {
      title: "Task Manager Application",
      description:
        "A comprehensive task management app with full CRUD operations, priority levels, search functionality, filtering (all/pending/completed), task statistics, undo functionality, and dark/light theme support.",
      problem:
        "Users need an intuitive way to organize tasks, track progress, and manage priorities without overwhelming complexity.",
      solution:
        "Built a React-based task manager using Context API and useReducer for state management. Features include add/edit/delete/toggle tasks, priority assignment, real-time search, filter controls, task statistics dashboard, and undo capability.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1080",
      tags: [
        "React",
        "Context API",
        "useReducer",
        "State Management",
        "CSS Modules",
      ],
      github:
        "https://github.com/shrinath-dev/Sample-projects/tree/main/task-manager",
      demo: "https://github.com",
      role: "Developer",
    },
    {
      title: "BookWorm - Book Management Platform",
      description:
        "A modern book tracking and library management application built with Next.js 16, featuring user authentication with Better Auth, PostgreSQL database with Prisma ORM, and a warm paper-like reading theme. Allows users to organize books, track reading progress, and join a reading community.",
      problem:
        "Book enthusiasts need a beautiful, organized platform to track their reading library, monitor progress, and connect with other readers.",
      solution:
        "Developed a full-stack Next.js application with authentication system, database-backed user libraries, custom shelving organization, reading progress tracking, and community features. Uses TypeScript for type safety and Tailwind CSS for styling.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1080",
      tags: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Better Auth",
        "Tailwind CSS",
        "React",
      ],
      github:
        "https://github.com/shrinath-dev/Sample-projects/tree/main/book-worm",
      demo: "https://github.com",
      role: "Full Stack Developer",
    },
  ];
  return (
    <>
      <section
        id="projects"
        className="px-4 sm:px-6 lg:px-8 py-20 bg-primary/10"
      >
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-lg">
              A selection of projects that showcase my skills and
              problem-solving abilities. Each project represents real-world
              challenges and solutions.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
