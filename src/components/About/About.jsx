import { useScrollReveal, useSkillBarReveal } from '../../hooks/useScrollReveal'
import { skills } from '../../data/skills'
import './About.css'

export default function About() {
  const sectionRef = useScrollReveal()
  const skillsRef = useSkillBarReveal()

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header reveal">
          <div className="section-label">About</div>
          <h2 className="section-title">Who am I</h2>
        </div>

        <div className="about__grid">
          <div className="about__text reveal reveal-delay-1">
            <p className="about__paragraph">
              I'm a <strong>pre-final year B.Tech CSE student</strong> at Jabalpur Engineering College
              who builds things that actually ship. Not CRUD apps for a tutorial — real products
              used by real people.
            </p>
            <p className="about__paragraph">
              My stack spans <strong>Python, Go, Docker, Kubernetes</strong>, and whatever AI model
              isn't rate-limited today. I believe the best way to learn engineering is to build
              something that breaks in production and fix it at 2am.
            </p>
            <p className="about__paragraph">
              Currently building <strong>Khabar AI</strong> — an enterprise-grade automated national
              news pipeline for Telegram. Utilizing Map-Reduce LLM architecture to deliver
              flawless, high-energy prime-time audio broadcasts every morning.
            </p>
            <div className="about__callout">
              Open to <strong>internships and collaborations</strong> in backend engineering, DevOps, and AI/ML systems.
            </div>
          </div>

          <div className="about__skills reveal reveal-delay-2" ref={skillsRef}>
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-item__header">
                  <span className="skill-item__name">{skill.name}</span>
                  <span className="skill-item__pct" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="skill-item__bar">
                  <div 
                    className="skill-fill" 
                    style={{ 
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, transparent)`
                    }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
