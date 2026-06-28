import { FormEvent, useState } from 'react'
import { useMagnetic } from '../../hooks/useMagnetic'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { GitHubIcon, LinkedInIcon, MailIcon, CheckIcon } from '../Icons'
import styles from './Contact.module.css'

type Status = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const eyebrowRef = useScrollReveal<HTMLParagraphElement>()
  const titleRef = useScrollReveal<HTMLHeadingElement>({ delay: 0.05 })
  const subRef = useScrollReveal<HTMLParagraphElement>({ delay: 0.1 })
  const infoRef = useScrollReveal<HTMLDivElement>({ delay: 0.05 })
  const formCardRef = useScrollReveal<HTMLDivElement>({ delay: 0.15 })

  const githubLinkRef = useMagnetic<HTMLAnchorElement>()
  const linkedinLinkRef = useMagnetic<HTMLAnchorElement>()
  const emailLinkRef = useMagnetic<HTMLAnchorElement>()
  const submitRef = useMagnetic<HTMLButtonElement>()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // No backend — simulate a successful submission.
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4500)
    }, 900)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal" ref={eyebrowRef}>
            Contact
          </p>
          <h2 className="section-title reveal" ref={titleRef}>
            Let&apos;s build something <span className="text-gradient">great together</span>
          </h2>
          <p className="section-sub reveal" ref={subRef}>
            Have a project in mind? Tell me about it — I&apos;d love to hear from you.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.info} reveal`} ref={infoRef}>
            <p>
              Whether you need a new landing page, a full front-end build, or help optimizing an existing product —
              I&apos;m happy to talk it through.
            </p>
            <div className={styles.links}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} glass`}
                ref={githubLinkRef}
              >
                <span className={styles.linkIcon}>
                  <GitHubIcon />
                </span>
                <span>
                  <span className={styles.linkLabel}>GITHUB</span>
                  <br />
                  <span className={styles.linkValue}>github.com/lucas</span>
                </span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} glass`}
                ref={linkedinLinkRef}
              >
                <span className={styles.linkIcon}>
                  <LinkedInIcon />
                </span>
                <span>
                  <span className={styles.linkLabel}>LINKEDIN</span>
                  <br />
                  <span className={styles.linkValue}>linkedin.com/in/lucas</span>
                </span>
              </a>

              <a href="mailto:hello@lucas.dev" className={`${styles.link} glass`} ref={emailLinkRef}>
                <span className={styles.linkIcon}>
                  <MailIcon />
                </span>
                <span>
                  <span className={styles.linkLabel}>EMAIL</span>
                  <br />
                  <span className={styles.linkValue}>hello@lucas.dev</span>
                </span>
              </a>
            </div>
          </div>

          <div className={`${styles.formCard} glass reveal`} ref={formCardRef}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className={styles.formRow}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div className={styles.formRow}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </div>
              <button
                type="submit"
                className={`btn btn-primary ${styles.submit}`}
                ref={submitRef}
                disabled={status === 'sending'}
              >
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              </button>
              <div className={`${styles.success} ${status === 'sent' ? styles.successShow : ''}`}>
                <CheckIcon />
                Message sent! I&apos;ll get back to you soon.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
