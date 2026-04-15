import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  { category: "LANGUAGES", icon: "🍄", skills: ["PYTHON", "JAVA", "C++", "GO"] },
  { category: "AI & LLM", icon: "⭐", skills: ["GROQ API", "LANGCHAIN", "GEMINI", "OPENAI", "RAG"] },
  { category: "BACKEND", icon: "🌿", skills: ["FASTAPI", "GO (GIN)", "REST APIs", "WEBSOCKETS", "POSTGRESQL"] },
  { category: "DEVOPS", icon: "🪶", skills: ["DOCKER", "KUBERNETES", "JENKINS", "TERRAFORM", "AWS"] },
  { category: "AUTOMATION", icon: "🐢", skills: ["TELEGRAM BOT API", "GITHUB ACTIONS", "n8n", "ASYNCIO"] },
  { category: "TOOLS", icon: "🧱", skills: ["GIT", "LINUX", "VS CODE", "CLOUDFLARE"] },
];

const SkillsSection = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[hsl(220,35%,16%)] to-[hsl(220,30%,14%)]">
      <div className="section-divider w-full mb-14" />

      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-[8px] font-pixel text-mario-coin tracking-widest">WORLD 1-2</span>
            <h2 className="text-lg md:text-2xl font-pixel text-foreground mt-2 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]">
              POWER-UPS
            </h2>
            <div className="section-divider w-32 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.category} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="glass-card rounded-lg p-6 hover:bg-foreground/5 transition-all duration-300 cursor-pointer group h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl group-hover:animate-bounce-coin">{cat.icon}</span>
                  <span className="text-[10px] md:text-xs font-pixel text-foreground">{cat.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[7px] font-pixel text-mario-coin/90 bg-mario-coin/10 border border-mario-coin/20 px-2.5 py-1.5 rounded transition-colors duration-200 hover:bg-mario-coin/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="section-divider w-full mt-14" />
    </section>
  );
};

export default SkillsSection;
