import { skills } from '../../data/content'
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'
import {
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  Html5Icon,
  Css3Icon,
  GitIcon,
  GitHubIcon,
  ViteIcon,
} from '../Icons'
import styles from './Skills.module.css'
import { useLanguage } from '../../i18n/LanguageContext'


const SKILL_ICONS = {
  react: ReactIcon,
  typescript: TypeScriptIcon,
  javascript: JavaScriptIcon,
  html5: Html5Icon,
  css3: Css3Icon,
  git: GitIcon,
  github: GitHubIcon,
  vite: ViteIcon,
}

export default function Skills() {

    const { t } = useLanguage()


  const eyebrowRef = useScrollReveal<HTMLParagraphElement>()
  const titleRef = useScrollReveal<HTMLHeadingElement>({ delay: 0.05 })
  const subRef = useScrollReveal<HTMLParagraphElement>({ delay: 0.1 })
  const gridRef = useStaggerReveal<HTMLDivElement>(`.${styles.card}`)

  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal" ref={eyebrowRef}>
            {t.skills.eyebrow}
          </p>
          <h2 className="section-title reveal" ref={titleRef}>
            {t.skills.titlePre} <span className="text-gradient">{t.skills.titleGradient}</span>
          </h2>
          <p className="section-sub reveal" ref={subRef}>
            {t.skills.subtitle}
          </p>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {skills.map((skill) => {
            const Icon = SKILL_ICONS[skill.iconKey]
            return (
              <div key={skill.name} className={`${styles.card} glass`}>
                <div className={styles.iconWrap}>
                  <Icon />
                </div>
                <div className={styles.name}>{skill.name}</div>
                <div className={styles.level}>{skill.level}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
