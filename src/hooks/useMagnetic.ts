import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/** Applies a magnetic hover effect (element follows cursor slightly) to the returned ref. */
export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const quickX = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' })
    const quickY = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' })

    const handleMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - r.left - r.width / 2
      const y = e.clientY - r.top - r.height / 2
      quickX(x * 0.3)
      quickY(y * 0.4)
    }

    const handleLeave = () => {
      quickX(0)
      quickY(0)
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return ref
}