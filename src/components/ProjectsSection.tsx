import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "WORLD 2-1",
    name: "KHABAR AI",
    desc: "ENTERPRISE-GRADE NATIONAL VOICE NEWS BROADCAST SYSTEM. MAP-REDUCE LLM ARCHITECTURE WITH 3 PARALLEL GROQ API CALLS. AUTOMATED TELEGRAM BOT DELIVERING 30-STORY HINGLISH VOICE BROADCASTS DAILY.",
    tech: ["FASTAPI", "POSTGRESQL", "GROQ", "LLAMA 3.3", "DOCKER", "K8S"],
    link: "https://github.com/shivansh-gohem/khabar-ai",
    accent: "from-mario-pipe/20 to-mario-pipe/5",
    iconBg: "bg-secondary/20",
  },
  {
    title: "WORLD 2-2",
    name: "DEVCONNECT",
    desc: "AI-POWERED DEVELOPER MATCHMAKER USING RAG AND VECTOR EMBEDDINGS. REAL-TIME CHAT ROOMS WITH GO CHANNELS AND WEBSOCKETS. GEMINI-POWERED AI CHATBOT FOR PROGRAMMING Q&A.",
    tech: ["GO", "POSTGRESQL", "PGVECTOR", "GEMINI AI", "WEBSOCKETS", "DOCKER"],
    link: "https://github.com/shivansh-gohem/ai-match",
    accent: "from-mario-red/15 to-mario-red/5",
    iconBg: "bg-primary/20",
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[hsl(220,30%,14%)] to-[hsl(220,30%,12%)] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[8px] font-pixel text-mario-coin tracking-widest">WORLD 2</span>
            <h2 className="text-lg md:text-2xl font-pixel text-foreground mt-2 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]">
              PROJECTS
            </h2>
            <div className="section-divider w-32 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={`block glass-card rounded-lg p-6 md:p-8 bg-gradient-to-br ${project.accent} hover:scale-[1.015] hover:bg-foreground/5 transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${project.iconBg} w-10 h-10 rounded-lg flex items-center justify-center text-[8px] font-pixel text-foreground/70`}>
                    {project.title.split(" ")[1]}
                  </span>
                  <div>
                    <span className="text-[7px] font-pixel text-mario-coin/80">{project.title}</span>
                    <h3 className="text-sm md:text-base font-pixel text-foreground group-hover:text-mario-coin transition-colors">{project.name}</h3>
                  </div>
                </div>
                <p className="text-[8px] md:text-[9px] font-pixel text-foreground/75 leading-[2.8] mb-5">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[7px] font-pixel text-mario-coin/80 bg-mario-coin/10 border border-mario-coin/15 px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-[8px] font-pixel text-mario-coin tracking-widest">BONUS STAGE</span>
              <h3 className="text-sm md:text-lg font-pixel text-foreground mt-2">🏆 ACHIEVEMENTS</h3>
              <div className="section-divider w-24 mx-auto mt-3 rounded-full" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { text: "BUILT & SHIPPED KHABAR AI v2 — NATIONAL VOICE NEWS WITH MAP-REDUCE LLM", icon: "🏅" },
              { text: "30+ PULL REQUESTS MERGED ACROSS OPEN SOURCE REPOS", icon: "🔀" },
              { text: "150+ LEETCODE & 100+ GFG PROBLEMS SOLVED", icon: "💡" },
              { text: "DEVOPS BOOTCAMP CERTIFIED — JENKINS, DOCKER, K8S, TERRAFORM, AWS", icon: "📜" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                <div className="glass-card rounded-lg p-4 flex items-start gap-3 hover:bg-foreground/5 transition-colors duration-300 h-full">
                  <span className="text-lg shrink-0">{item.icon}</span>
                  <p className="text-[7px] md:text-[8px] font-pixel text-foreground/80 leading-[2.5]">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
