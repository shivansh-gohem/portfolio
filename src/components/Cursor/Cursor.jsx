import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.1
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`
        ringRef.current.style.top = `${ringPos.current.y}px`
      }
      requestAnimationFrame(animate)
    }

    const handleEnter = () => {
      dotRef.current?.classList.add('cursor--hover')
      ringRef.current?.classList.add('cursor-ring--hover')
    }

    const handleLeave = () => {
      dotRef.current?.classList.remove('cursor--hover')
      ringRef.current?.classList.remove('cursor-ring--hover')
    }

    document.addEventListener('mousemove', handleMove)
    animate()

    const interactives = document.querySelectorAll('a, button, .interactive')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    // Re-observe when DOM changes
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, .interactive').forEach((el) => {
        el.addEventListener('mouseenter', handleEnter)
        el.addEventListener('mouseleave', handleLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', handleMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
