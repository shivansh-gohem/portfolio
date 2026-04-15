import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Hero.css'

export default function Hero() {
  const revealRef = useScrollReveal()

  return (
    <section id="hero" className="hero" ref={revealRef}>
      <div className="hero__background">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="grid-overlay" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge reveal">
            <span className="dot" />
            Available for jobs and internships
          </div>

          <h1 className="hero__title reveal reveal-delay-1">
            Shivansh<br />
            <span className="hero__title-accent">Sahu.</span>
          </h1>

          <p className="hero__subtitle reveal reveal-delay-2">
            <strong>Builder, not just a coder.</strong> I build AI-powered products, 
            backend systems, and DevOps pipelines that solve real problems for real people.
            Currently building <strong>Khabar AI</strong>.
          </p>

          <div className="hero__actions reveal reveal-delay-3">
            <a href="#projects" className="btn btn--primary">
              View Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="https://github.com/shivansh-gohem" target="_blank" rel="noreferrer" className="btn btn--outline">
              GitHub →
            </a>
            <a href="https://www.linkedin.com/in/shivansh-sahu-33609a298/" target="_blank" rel="noreferrer" className="btn btn--outline">
              LinkedIn →
            </a>
          </div>
        </div>

        <div className="hero__stats reveal reveal-delay-4">
          <div className="stat">
            <div className="stat__number">30+</div>
            <div className="stat__label">PRs Merged</div>
          </div>
          <div className="stat">
            <div className="stat__number">2</div>
            <div className="stat__label">Products Built</div>
          </div>
          <div className="stat">
            <div className="stat__number">∞</div>
            <div className="stat__label">Ideas Left</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-indicator__line" />
        <span className="scroll-indicator__text">Scroll</span>
      </div>
    </section>
  )
}
