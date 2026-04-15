import Cloud from "./Cloud";
import heroBg from "@/assets/mario-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 sky-gradient" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-mario-dark/40" />

      {/* Decorative stars */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-foreground/40 rounded-full animate-star-twinkle"
          style={{
            top: `${10 + i * 8}%`,
            left: `${5 + i * 18}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Clouds with depth */}
      <Cloud className="absolute top-[8%] left-[3%] w-28 md:w-36 text-foreground/90 animate-float-cloud" />
      <Cloud className="absolute top-[18%] right-[8%] w-24 md:w-32 text-foreground/70 animate-float-cloud-slow" />
      <Cloud className="absolute top-[30%] left-[35%] w-16 md:w-24 text-foreground/40 animate-float-cloud" />
      <Cloud className="absolute top-[12%] left-[60%] w-12 md:w-16 text-foreground/25 animate-float-cloud-slow" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Floating question blocks */}
        <div className="flex justify-center gap-3 mb-10">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-11 h-11 md:w-14 md:h-14 bg-gradient-to-b from-mario-coin to-mario-question pixel-border-glow flex items-center justify-center text-foreground text-sm md:text-lg font-pixel animate-question-bump"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              ?
            </div>
          ))}
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-pixel text-foreground mb-5 leading-[1.6] drop-shadow-[4px_4px_0px_rgba(0,0,0,0.6)]">
          SHIVANSH SAHU
        </h1>

        <div className="inline-block bg-primary/80 px-4 py-2 pixel-border mb-3">
          <p className="text-[10px] md:text-sm font-pixel text-foreground tracking-wider">
            SOFTWARE DEV & DEVOPS ENTHUSIAST
          </p>
        </div>

        <p className="text-[8px] md:text-xs font-pixel text-foreground/75 mb-1 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]">
          B.TECH CSE — JABALPUR ENGINEERING COLLEGE
        </p>
        <p className="text-[7px] md:text-[10px] font-pixel text-foreground/55 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.3)]">
          ITARSI, MADHYA PRADESH
        </p>

        <div className="flex justify-center gap-3 md:gap-5 mt-8">
          {[
            { label: "EMAIL", icon: "📧", href: "mailto:0201cs231094@gmail.com" },
            { label: "GITHUB", icon: "🐙", href: "https://github.com/shivansh-gohem" },
            { label: "LINKEDIN", icon: "💼", href: "https://linkedin.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="glass-card px-3 py-2 rounded text-[7px] md:text-[9px] font-pixel text-foreground/90 hover:text-mario-coin hover:bg-foreground/10 transition-all duration-300"
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>

        <p className="text-[10px] md:text-xs font-pixel text-mario-coin mt-10 animate-bounce-coin drop-shadow-[0_0_8px_hsla(42,100%,55%,0.5)]">
          ▼ START GAME ▼
        </p>
      </div>

      {/* Ground layers */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="brick-pattern h-6 md:h-8" />
        <div className="ground-pattern h-8 md:h-10" />
      </div>
    </section>
  );
};

export default HeroSection;
