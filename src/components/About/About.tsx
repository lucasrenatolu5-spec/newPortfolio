import { pillars } from '../../data/content'
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'
import { CodeIcon, BoltIcon, DeviceIcon, CompassIcon } from '../Icons'
import styles from './About.module.css'
import { useLanguage } from '../../i18n/LanguageContext'

const PILLAR_ICONS = {
  code: CodeIcon,
  performance: BoltIcon,
  responsive: DeviceIcon,
  ux: CompassIcon,
}

export default function About() {

    const { t } = useLanguage()

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
              {t.about.eyebrow}
            </p>
            <p className={`${styles.lead} reveal`} ref={leadRef}>
              {t.about.leadPre} <strong>{t.about.leadStrong}</strong> {t.about.leadPost}
            </p>
            <p className={`${styles.body} reveal`} ref={bodyRef}>
              {t.about.body}
            </p>
          </div>

          <div className={styles.pillars} ref={pillarsRef}>
            {pillars.map((pillar, i) => {
                const Icon = PILLAR_ICONS[pillar.iconKey]
                const title = t.about[`pillar${i + 1}Title` as keyof typeof t.about]
                const description = t.about[`pillar${i + 1}Desc` as keyof typeof t.about]
                return (
                  <div key={pillar.iconKey} className={`${styles.pillar} glass`}>
                    <div className={styles.pillarIcon}>
                      <Icon />
                    </div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}
