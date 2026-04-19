const skills = [
  "Python", "LangChain", "OpenAI", "Gemini", "Anthropic Claude",
  "Vector Databases", "RAG Pipelines", "Agentic AI",
  "Next.js", "TypeScript", "REST APIs",
];

export default function About() {
  return (
    <section id="about" className="bg-zinc-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">
          About <span className="text-indigo-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-zinc-400 leading-relaxed">
            <p>
              I specialize in building <span className="text-white">AI Solutions Engineer | Agentic AI Systems | Business Automation</span> —
              from RAG pipelines and LLM-powered applications to fully autonomous
              multi-agent systems.
            </p>
            <p>
              I work across the full stack: Python backends with LangChain and
              leading LLM providers (OpenAI, Gemini, Anthropic), paired with
              modern Next.js frontends. My focus is on turning cutting-edge AI
              capabilities into practical, production-ready products.
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
            >
              Start a Project
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-white/10 text-zinc-300 text-sm hover:border-indigo-500/50 hover:text-indigo-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
