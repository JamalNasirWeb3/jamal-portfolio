import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-950 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Featured <span className="text-indigo-400">Projects</span>
        </h2>
        <p className="text-zinc-400 mb-16 max-w-xl">
          A selection of GenAI and Agentic AI solutions I&apos;ve built.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-zinc-900 border border-white/5 rounded-2xl p-6 flex flex-col gap-4 hover:border-indigo-500/30 transition-colors"
            >
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Live ↗
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
