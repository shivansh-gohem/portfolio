import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px' }
    )

    // Observe the element and all children with .reveal
    const children = el.querySelectorAll('.reveal')
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.08}s`
      observer.observe(child)
    })

    if (el.classList.contains('reveal')) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

export function useSkillBarReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll('.skill-fill').forEach((bar, i) => {
              setTimeout(() => bar.classList.add('animate'), i * 120)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
