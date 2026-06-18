import React from "react";

const projects = [
  {
    id: 1,
    title: "Flixy",
    description: "Netflix-style movie app with trailers, real-time favourites, search, genre filters, and Firebase auth.",
    tech: ["React", "Firebase", "TMDB API", "Tailwind"],
    gradient: "from-red-900 to-gray-900",
    accent: "text-red-400",
    demo: "https://flixy-reacty.vercel.app",
    code: "https://github.com/petkovpavel45/FlixyProject",
  },
  {
    id: 2,
    title: "Fondation",
    description: "Full-stack Angular CRUD platform for managing charitable foundations with JWT auth and MongoDB.",
    tech: ["Angular", "TypeScript", "MongoDB", "Node.js"],
    gradient: "from-rose-900 to-gray-900",
    accent: "text-rose-400",
    demo: null,
    code: "https://github.com/petkovpavel45/Angular-Project",
  },
  {
    id: 3,
    title: "Fitness Equipment",
    description: "E-commerce SPA for browsing and ordering fitness equipment with cart and user authentication.",
    tech: ["React", "Node.js", "CSS"],
    gradient: "from-blue-900 to-gray-900",
    accent: "text-blue-400",
    demo: null,
    code: "https://github.com/petkovpavel45/project-for-react",
  },
  {
    id: 4,
    title: "ToDo App",
    description: "Clean task manager with filters (All/Active/Done), localStorage persistence, and dark UI.",
    tech: ["React", "Vite", "CSS"],
    gradient: "from-emerald-900 to-gray-900",
    accent: "text-emerald-400",
    demo: "https://todo-vite-kxxigipi3-vibe-coding4.vercel.app",
    code: "https://github.com/petkovpavel45/ToDo",
  },
];

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-gray-400">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(({ id, title, description, tech, gradient, accent, demo, code }) => (
            <div
              key={id}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-[1.02] flex flex-col`}
            >
              <h3 className={`text-2xl font-bold ${accent} mb-2`}>{title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-4">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs bg-black/40 border border-gray-600 rounded-full text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {demo && (
                  <button
                    onClick={() => window.open(demo, "_blank")}
                    className="flex-1 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:scale-105 duration-200"
                  >
                    Live Demo
                  </button>
                )}
                <button
                  onClick={() => window.open(code, "_blank")}
                  className="flex-1 py-2 rounded-md border border-gray-500 text-gray-300 text-sm font-medium hover:border-cyan-500 hover:text-white duration-200"
                >
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
