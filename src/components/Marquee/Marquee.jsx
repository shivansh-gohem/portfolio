import { techStack } from '../../data/skills'
import './Marquee.css'

export default function Marquee() {
  // Double the list for seamless looping
  const items = [...techStack, ...techStack]

  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <div className="marquee__inner">
          {items.map((tech, i) => (
            <div key={`${tech}-${i}`} className="marquee__item">
              <span className="marquee__star">✦</span>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
