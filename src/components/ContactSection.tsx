import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[hsl(220,30%,12%)] to-[hsl(220,35%,8%)]">
      <div className="section-divider w-full mb-14" />

      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-[8px] font-pixel text-mario-coin tracking-widest">WORLD 3</span>
          <h2 className="text-lg md:text-2xl font-pixel text-foreground mt-2 mb-3 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]">
            CONTACT
          </h2>
          <div className="section-divider w-32 mx-auto mt-3 mb-10 rounded-full" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-[9px] md:text-[11px] font-pixel text-foreground/70 leading-[2.8] mb-12">
            WANT TO TEAM UP FOR YOUR NEXT QUEST? LET'S CONNECT!
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            { icon: "📧", label: "EMAIL", value: "0201cs231094@gmail.com", href: "mailto:0201cs231094@gmail.com" },
            { icon: "🐙", label: "GITHUB", value: "shivansh-gohem", href: "https://github.com/shivansh-gohem" },
            { icon: "📱", label: "PHONE", value: "+91-7804821020", href: "tel:+917804821020" },
          ].map((contact, i) => (
            <ScrollReveal key={contact.label} delay={0.15 + i * 0.1}>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="block glass-card rounded-lg p-6 hover:bg-foreground/5 transition-all duration-300 group h-full"
              >
                <div className="text-3xl mb-3 group-hover:animate-bounce-coin">{contact.icon}</div>
                <div className="text-[9px] font-pixel text-foreground mb-1">{contact.label}</div>
                <div className="text-[7px] font-pixel text-mario-coin/80 break-all">{contact.value}</div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="section-divider w-48 mx-auto mb-8 rounded-full" />
          <div className="text-[7px] font-pixel text-foreground/40 space-y-2">
            <p>© 2026 SHIVANSH SAHU. ALL RIGHTS RESERVED.</p>
            <p className="text-mario-coin/50">THANK YOU FOR PLAYING! 🎮</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
