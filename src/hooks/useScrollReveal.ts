import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Fades/blurs/scales an element in when it enters the viewport. Attach the returned ref to the element. */
export function useScrollReveal<T extends HTMLElement>(options?: { delay?: number }) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 32, scale: 0.97, filter: 'blur(6px)' },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power3.out',
        delay: options?.delay ?? 0,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}

/** Reveals a group of child elements (selector inside the container) with a stagger. */
export function useStaggerReveal<T extends HTMLElement>(childSelector: string) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const items = container.querySelectorAll(childSelector)
    if (!items.length) return

    const tween = gsap.fromTo(
      items,
      { opacity: 0, y: 36, scale: 0.95, filter: 'blur(6px)' },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: container,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childSelector])

  return ref
}
