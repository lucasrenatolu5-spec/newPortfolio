import { GitHubIcon, LinkedInIcon, MailIcon } from '../Icons'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoDot} />
          lucas<span className="text-gradient">.dev</span>
        </a>

        <div className={styles.socials}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="mailto:hello@lucas.dev" aria-label="Email">
            <MailIcon />
          </a>
        </div>

        <p className={styles.meta}>
          © {year} Lucas. Built with React &amp; TypeScript.
        </p>
      </div>
    </footer>
  )
}
