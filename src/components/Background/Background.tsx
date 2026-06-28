import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Background.module.css'

export default function Background() {
  const blob1Ref = useRef<HTMLDivElement | null>(null)
  const blob2Ref = useRef<HTMLDivElement | null>(null)
  const blob3Ref = useRef<HTMLDivElement | null>(null)
  const particlesRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const tweens: gsap.core.Tween[] = []

    if (blob1Ref.current) {
      tweens.push(gsap.to(blob1Ref.current, { y: 60, x: 30, duration: 14, repeat: -1, yoyo: true, ease: 'sine.inOut' }))
    }
    if (blob2Ref.current) {
      tweens.push(gsap.to(blob2Ref.current, { y: -50, x: -40, duration: 17, repeat: -1, yoyo: true, ease: 'sine.inOut' }))
    }
    if (blob3Ref.current) {
      tweens.push(gsap.to(blob3Ref.current, { y: -40, x: 50, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' }))
    }

    const particlesWrap = particlesRef.current
    const createdParticles: HTMLDivElement[] = []
    if (particlesWrap) {
      const count = window.innerWidth < 768 ? 8 : 16
      for (let i = 0; i < count; i++) {
        const p = document.createElement('div')
        p.className = styles.particle
        p.style.left = `${Math.random() * 100}%`
        p.style.top = `${Math.random() * 100}%`
        particlesWrap.appendChild(p)
        createdParticles.push(p)
        tweens.push(
          gsap.to(p, {
            y: 'random(-120, 120)',
            x: 'random(-80, 80)',
            opacity: 'random(0.15, 0.6)',
            duration: 'random(8, 18)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * 4,
          }),
        )
      }
    }

    return () => {
      tweens.forEach((t) => t.kill())
      createdParticles.forEach((p) => p.remove())
    }
  }, [])

  return (
    <>
     {/* <div className={styles.grain} aria-hidden="true" /> */}
      <div className={styles.blobsWrap} aria-hidden="true">
        <div ref={blob1Ref} className={`${styles.blob} ${styles.blob1}`} />
        <div ref={blob2Ref} className={`${styles.blob} ${styles.blob2}`} />
        <div ref={blob3Ref} className={`${styles.blob} ${styles.blob3}`} />
      </div>
      <div ref={particlesRef} className={styles.particlesWrap} aria-hidden="true" />
    </>
  )
}