import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Contact.css'

export default function Contact() {
  const revealRef = useScrollReveal()

  return (
    <section id="contact" className="contact" ref={revealRef}>
      <div className="contact__container">
        <div className="section-label" style={{ justifyContent: 'center' }}>
          Contact
        </div>
        
        <h2 className="contact__title reveal">
          Let's build<br />
          <span className="contact__title-accent">something.</span>
        </h2>
        
        <p className="contact__subtitle reveal reveal-delay-1">
          Have a project in mind? Want to automate something? Building a news channel
          and want hyperlocal AI delivery? Let's talk.
        </p>
        
        <a href="mailto:0201cs231094@gmail.com" className="contact__email reveal reveal-delay-2">
          0201cs231094@gmail.com
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        
        <div className="contact__socials reveal reveal-delay-3">
          <a href="https://github.com/shivansh-gohem" target="_blank" rel="noreferrer" className="social-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shivansh-sahu-33609a298/" target="_blank" rel="noreferrer" className="social-link">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
