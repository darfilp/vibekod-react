import { useState, useEffect } from 'react'
import { useModal } from '../../context/ModalContext'
import styles from './Navbar.module.css'

interface NavLink {
  label: string
  href: string
}

const links: NavLink[] = [
  { label: 'Услуги', href: '#services' },
  { label: 'Процесс', href: '#process' },
  { label: 'SEO', href: '#seo' },
  { label: 'Цены', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const { openModal } = useModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.inner}>
          <a href="#" className={styles.logo} aria-label="ВайбКод">
            Вайб<span>Код</span>
          </a>

          <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>

          <button
            className="btn btn-yellow"
            style={{ fontSize: '0.82rem', padding: '10px 22px' }}
            onClick={openModal}
          >
            Обсудить проект
          </button>

          <button
            className={styles.burger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Меню"
          >
            <span className={menuOpen ? styles.burgerOpen : ''} />
          </button>
        </nav>
      </div>
    </header>
  )
}
