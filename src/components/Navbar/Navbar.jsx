import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['hero', 'about', 'projects', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveTab(section)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo">
          ss<span className="navbar__logo-accent">.</span>
        </a>

        <div className="navbar__links">
          {['about', 'projects', 'contact'].map((tab) => (
            <a
              key={tab}
              href={`#${tab}`}
              className={`navbar__link ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </a>
          ))}
        </div>

        <a href="mailto:0201cs231094@gmail.com" className="navbar__cta">
          <span className="navbar__cta-text">Hire Me</span>
          <div className="navbar__cta-glow" />
        </a>
      </div>
    </nav>
  )
}
