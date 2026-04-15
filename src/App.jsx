import { useState, useEffect } from 'react'
import Cursor from './components/Cursor/Cursor'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Marquee from './components/Marquee/Marquee'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ParticleField from './components/ParticleField/ParticleField'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate a quick load-in for the entrance animation
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'app--loaded' : ''}`}>
      <Cursor />
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
