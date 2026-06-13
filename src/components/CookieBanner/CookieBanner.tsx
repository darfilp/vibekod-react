import { useState, useEffect } from 'react'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookie_consent')
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className={styles.banner}
      role="dialog"
      aria-label="Уведомление об использовании файлов cookie"
    >
      <div className={styles.inner}>
        <div className={styles.icon} aria-hidden="true">🍪</div>
        <div className={styles.text}>
          <p className={styles.message}>
            Мы используем файлы cookie для корректной работы сайта и аналитики посещаемости.
            Продолжая использование сайта, вы соглашаетесь с обработкой персональных данных
            в соответствии с{' '}
            <a href="/privacy.html" className={styles.link}>Политикой конфиденциальности</a>
            {' '}(ФЗ-152).
          </p>
        </div>
        <div className={styles.actions}>
          <button className={styles.btnAccept} onClick={accept}>Принять</button>
          <button className={styles.btnDecline} onClick={accept}>Закрыть</button>
        </div>
      </div>
    </div>
  )
}
