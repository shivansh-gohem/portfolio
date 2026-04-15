import Cloud from "./Cloud";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[hsl(220,30%,12%)] to-[hsl(220,35%,16%)] overflow-hidden">
      <Cloud className="absolute top-10 right-[5%] w-20 text-foreground/10 animate-float-cloud-slow" />
      <Cloud className="absolute bottom-20 left-[3%] w-14 text-foreground/8 animate-float-cloud" />

      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-[8px] font-pixel text-mario-coin tracking-widest">WORLD 1-1</span>
            <h2 className="text-lg md:text-2xl font-pixel text-foreground mt-2 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]">
              ABOUT ME
            </h2>
            <div className="section-divider w-32 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-card rounded-lg p-6 md:p-8 mb-10">
            <p className="text-[9px] md:text-[11px] font-pixel text-foreground/90 leading-[3] text-center">
              B.TECH CSE STUDENT AT JABALPUR ENGINEERING COLLEGE (2023–2027).
              I BUILD AI-POWERED SYSTEMS, BACKEND SERVICES, AND DEVOPS PIPELINES.
              150+ LEETCODE PROBLEMS SOLVED. 30+ OPEN SOURCE PRs MERGED.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h3 className="text-[10px] md:text-xs font-pixel text-mario-coin text-center mb-6">🎓 EDUCATION</h3>
        </ScrollReveal>
        <div className="space-y-3">
          {[
            { school: "JABALPUR ENGINEERING COLLEGE", degree: "B.TECH CSE", year: "2023-2027", score: "CGPA 7.39" },
            { school: "KASTURBA VIDYA MANDIR", degree: "12TH GRADE (MPBSE)", year: "2022", score: "82.6%" },
            { school: "ST. MARY'S CO-ED SR. SEC. SCHOOL", degree: "10TH GRADE (CBSE)", year: "2020", score: "91%" },
          ].map((edu, i) => (
            <ScrollReveal key={edu.school} delay={0.2 + i * 0.1} direction="left">
              <div className="glass-card rounded-lg p-4 md:p-5 hover:bg-foreground/5 transition-colors duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[9px] md:text-[10px] font-pixel text-foreground">{edu.school}</div>
                    <div className="text-[7px] md:text-[8px] font-pixel text-foreground/60 mt-1">{edu.degree} · {edu.year}</div>
                  </div>
                  <span className="text-[9px] font-pixel text-mario-coin whitespace-nowrap bg-mario-coin/15 px-2 py-1 rounded">{edu.score}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-5 mt-12">
          {[
            { label: "LEETCODE", value: "150+", icon: "🪙" },
            { label: "OSS PRs", value: "30+", icon: "⭐" },
            { label: "GFG", value: "100+", icon: "❤️" },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={0.1 + i * 0.12}>
              <div className="glass-card rounded-lg p-5 text-center hover:bg-foreground/5 transition-colors duration-300 group">
                <div className="text-2xl mb-3 group-hover:animate-bounce-coin">{stat.icon}</div>
                <div className="text-base md:text-xl font-pixel text-mario-coin drop-shadow-[0_0_6px_hsla(42,100%,55%,0.3)]">{stat.value}</div>
                <div className="text-[7px] md:text-[8px] font-pixel text-foreground/60 mt-2">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
