import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Cursor.module.css'
/*esse component nao está sendo usado */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    if (!window.matchMedia('(pointer: fine)').matches) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      gsap.set(dot, { x: mouseX, y: mouseY })
    }
    window.addEventListener('mousemove', handleMove)

    gsap.ticker.add(() => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      gsap.set(ring, { x: ringX, y: ringY })
    })

    const interactiveSelector = 'a, button, [data-cursor-interactive]'
    const handleEnter = () => ring.classList.add(styles.ringActive)
    const handleLeave = () => ring.classList.remove(styles.ringActive)

    const attach = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener('mouseenter', handleEnter)
        el.addEventListener('mouseleave', handleLeave)
      })
    }
    attach()

    // Re-attach on DOM mutations (since sections mount progressively / lazily)
    const observer = new MutationObserver(attach)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMove)
      observer.disconnect()
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  )
}
