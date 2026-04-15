import { useScrollReveal } from '../../hooks/useScrollReveal'
import { projects } from '../../data/projects'
import './Projects.css'

export default function Projects() {
  const sectionRef = useScrollReveal()

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header reveal">
          <div className="section-label">Projects</div>
          <h2 className="section-title">Things I've Built</h2>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card reveal reveal-delay-${(index % 3) + 1} ${project.featured ? 'project-card--featured' : ''}`}
            >
              <div className="project-card__content">
                <div className="project-card__meta">
                  <span className="project-num">{project.num}</span>
                  {project.featured && <span className="project-badge">Featured</span>}
                </div>
                
                <h3 className="project-title">
                  {project.title} <span className="project-emoji">{project.emoji}</span>
                </h3>
                
                <div className="project-tagline">{project.tagline}</div>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    {project.linkLabel || 'GitHub'} 
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>

              {project.terminal && (
                <div className="project-visual">
                  <div className="terminal">
                    <div className="terminal-header">
                      <div className="terminal-dots">
                        <div className="dot dot-r" />
                        <div className="dot dot-y" />
                        <div className="dot dot-g" />
                      </div>
                      <div className="terminal-title">bash - {project.id}</div>
                    </div>
                    <div className="terminal-body">
                      {project.terminal.map((line, i) => (
                        <div key={i} className={`term-line ${line.includes('✓') ? 'term-line--success' : ''} ${line.includes('[INFO]') ? 'term-line--info' : ''}`}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
