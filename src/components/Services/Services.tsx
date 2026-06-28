import { services } from '../../data/content'
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'
import { ArrowUpRightIcon } from '../Icons'
import styles from './Services.module.css'

export default function Services() {
  const eyebrowRef = useScrollReveal<HTMLParagraphElement>()
  const titleRef = useScrollReveal<HTMLHeadingElement>({ delay: 0.05 })
  const listRef = useStaggerReveal<HTMLDivElement>(`.${styles.row}`)

  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal" ref={eyebrowRef}>
            Services
          </p>
          <h2 className="section-title reveal" ref={titleRef}>
            What I can <span className="text-gradient">build for you</span>
          </h2>
        </div>

        <div className={styles.list} ref={listRef}>
          {services.map((service) => (
            <div key={service.index} className={styles.row}>
              <div className={styles.left}>
                <span className={styles.index}>{service.index}</span>
                <span className={styles.name}>{service.name}</span>
              </div>
              <p className={styles.desc}>{service.description}</p>
              <div className={styles.arrow}>
                <ArrowUpRightIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
