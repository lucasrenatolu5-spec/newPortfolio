import { services } from '../../data/content'
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'
import { ArrowUpRightIcon } from '../Icons'
import styles from './Services.module.css'
import { useLanguage } from '../../i18n/LanguageContext'



export default function Services() {

  const { t } = useLanguage()

  const eyebrowRef = useScrollReveal<HTMLParagraphElement>()
  const titleRef = useScrollReveal<HTMLHeadingElement>({ delay: 0.05 })
  const listRef = useStaggerReveal<HTMLDivElement>(`.${styles.row}`)

  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal" ref={eyebrowRef}>
            {t.services.eyebrow}
          </p>
          <h2 className="section-title reveal" ref={titleRef}>
            {t.services.titlePre} <span className="text-gradient">{t.services.titleGradient}</span>
          </h2>
        </div>

        <div className={styles.list} ref={listRef}>
          {services.map((service, i) => {
  const item = t.services.items[i]
  return (
    <div key={service.index} className={styles.row}>
              <div className={styles.left}>
                <span className={styles.index}>{service.index}</span>
                <span className={styles.name}>{item.name}</span>
              </div>
                <p className={styles.desc}>{item.description}</p>
              <div className={styles.arrow}>
                <ArrowUpRightIcon />
              </div>
            </div>
          )
         })}
        </div>
      </div>
    </section>
  )
}
