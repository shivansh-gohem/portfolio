import { useEffect, useRef } from 'react'
import './ParticleField.css'

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let mouse = { x: null, y: null, radius: 150 }
    let animationFrame

    const initCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = Math.random() * 1.5 + 0.5
        this.baseX = this.x
        this.baseY = this.y
        this.density = (Math.random() * 30) + 1
        // Assign a slight color variation for depth
        const hue = Math.random() > 0.5 ? 156 : 225 // mint vs blue hue
        this.color = `hsla(${hue}, 100%, 75%, ${Math.random() * 0.4 + 0.1})`
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }

      update() {
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x
          let dy = mouse.y - this.y
          let distance = Math.sqrt(dx * dx + dy * dy)
          let forceDirX = dx / distance
          let forceDirY = dy / distance
          
          let maxDistance = mouse.radius
          let force = (maxDistance - distance) / maxDistance
          let dirX = forceDirX * force * this.density
          let dirY = forceDirY * force * this.density

          if (distance < mouse.radius) {
            this.x -= dirX
            this.y -= dirY
          } else {
            if (this.x !== this.baseX) {
              let dx = this.x - this.baseX
              this.x -= dx / 15
            }
            if (this.y !== this.baseY) {
              let dy = this.y - this.baseY
              this.y -= dy / 15
            }
          }
        } else {
            if (this.x !== this.baseX) {
              let dx = this.x - this.baseX
              this.x -= dx / 15
            }
            if (this.y !== this.baseY) {
              let dy = this.y - this.baseY
              this.y -= dy / 15
            }
        }
      }
    }

    const initParticles = () => {
      particles = []
      const numberOfParticles = (canvas.width * canvas.height) / 12000
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height
        particles.push(new Particle(x, y))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      animationFrame = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', () => {
      initCanvas()
      initParticles()
    })

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x
      mouse.y = e.y
    })

    window.addEventListener('mouseout', () => {
      mouse.x = null
      mouse.y = null
    })

    initCanvas()
    initParticles()
    animate()

    return () => {
      window.removeEventListener('resize', initCanvas)
      window.removeEventListener('mousemove', null)
      window.removeEventListener('mouseout', null)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-field" />
}
