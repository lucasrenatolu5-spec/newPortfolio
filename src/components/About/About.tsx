import { pillars } from '../../data/content'
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'
import { CodeIcon, BoltIcon, DeviceIcon, CompassIcon } from '../Icons'
import styles from './About.module.css'

const PILLAR_ICONS = {
  code: CodeIcon,
  performance: BoltIcon,
  responsive: DeviceIcon,
  ux: CompassIcon,
}

export default function About() {
  const eyebrowRef = useScrollReveal<HTMLParagraphElement>()
  const leadRef = useScrollReveal<HTMLParagraphElement>({ delay: 0.05 })
  const bodyRef = useScrollReveal<HTMLParagraphElement>({ delay: 0.1 })
  const pillarsRef = useStaggerReveal<HTMLDivElement>(`.${styles.pillar}`)

  return (
    <section id="about">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className="eyebrow reveal" ref={eyebrowRef}>
              About
            </p>
            <p className={`${styles.lead} reveal`} ref={leadRef}>
              I&apos;m a front-end developer who believes <strong>great interfaces</strong> are built at the
              intersection of clean code and thoughtful design.
            </p>
            <p className={`${styles.body} reveal`} ref={bodyRef}>
              I specialize in React and TypeScript, building responsive, performant products with an obsessive
              attention to detail — from animation timing to accessibility. I care about how software feels to use
              as much as how it works.
            </p>
          </div>

          <div className={styles.pillars} ref={pillarsRef}>
            {pillars.map((pillar) => {
              const Icon = PILLAR_ICONS[pillar.iconKey]
              return (
                <div key={pillar.title} className={`${styles.pillar} glass`}>
                  <div className={styles.pillarIcon}>
                    <Icon />
                  </div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
