import styles from './Footer.module.css'

const links = [
  { label: 'Услуги', href: '#services' },
  { label: 'Процесс', href: '#process' },
  { label: 'SEO', href: '#seo' },
  { label: 'Цены', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              Вайб<span>Код</span>
            </a>
            <p className={styles.tagline}>
              Разработка сайтов и Telegram-ботов под ключ
            </p>
          </div>

          <nav className={styles.nav} aria-label="Навигация в футере">
            {links.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <div className={styles.contacts}>
            <a href="https://t.me/vibecodesite_bot" className={styles.contactLink}>
              ✈️ Telegram
            </a>
            <a href="mailto:vibecodesite@yandex.ru" className={styles.contactLink}>
              📧 Email
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 ВайбКод — Все права защищены</p>
          <a href="#" className={styles.policy}>Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  )
}
