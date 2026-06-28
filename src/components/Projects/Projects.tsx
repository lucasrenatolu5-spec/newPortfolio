import { projects } from '../../data/content'
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'
import { GitHubIcon, ExternalLinkIcon } from '../Icons'
import styles from './Projects.module.css'

const THUMB_CLASS_MAP: Record<string, string> = {
  thumb1: styles.thumb1,
  thumb2: styles.thumb2,
  thumb3: styles.thumb3,
  thumb4: styles.thumb4,
}

export default function Projects() {
  const eyebrowRef = useScrollReveal<HTMLParagraphElement>()
  const titleRef = useScrollReveal<HTMLHeadingElement>({ delay: 0.05 })
  const subRef = useScrollReveal<HTMLParagraphElement>({ delay: 0.1 })
  const gridRef = useStaggerReveal<HTMLDivElement>(`.${styles.card}`)

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal" ref={eyebrowRef}>
            Projects
          </p>
          <h2 className="section-title reveal" ref={titleRef}>
            Selected <span className="text-gradient">work</span>
          </h2>
          <p className="section-sub reveal" ref={subRef}>
            A few projects that show how I approach product, code and craft.
          </p>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {projects.map((project) => (
            <div key={project.title} className={`${styles.card} glass`}>
              <div className={styles.thumb}>
                <div className={styles.thumb}>
                  <iframe
                    src={project.demoUrl}
                    className={styles.thumbFrame}
                    title={project.title}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.body}>
                <p className={styles.tag}>{project.tag}</p>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.techPills}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.githubUrl} className={styles.linkBtn}>
                    <GitHubIcon />
                    GitHub
                  </a>
                  <a href={project.demoUrl} className={styles.linkBtn}>
                    <ExternalLinkIcon />
                    Visit website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
