export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-zinc-950 pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Jamal Abdul Nasir
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-400 max-w-2xl mb-6 leading-relaxed">
          I build AI-powered systems that automate business workflows, customer
          support, and decision-making.
        </p>
        <p className="text-sm text-zinc-500 mb-10 flex flex-wrap items-center gap-2">
          <span className="text-zinc-300 font-medium">27+ years in software development</span>
          <span className="text-zinc-700">|</span>
          <span>AI solutions across healthcare, logistics, and business automation</span>
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-24 flex items-center gap-2 text-zinc-600 text-sm animate-bounce">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          Scroll down
        </div>
      </div>
    </section>
  );
}
