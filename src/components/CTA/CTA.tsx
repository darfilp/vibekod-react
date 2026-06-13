import { useModal } from '../../context/ModalContext'
import styles from './CTA.module.css'

export default function CTA() {
  const { openModal } = useModal()

  return (
    <section className={styles.cta} id="cta" aria-label="Обсудить проект">
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <p className={styles.tag}>Начать прямо сейчас</p>
            <h2 className={styles.title}>
              Готовы запустить<br /><em>проект?</em>
            </h2>
            <p className={styles.sub}>
              Напишите нам — обсудим вашу идею, составим ТЗ и стартуем уже сегодня.
              Консультация бесплатная.
            </p>
          </div>

          <div className={styles.actions}>
            <button className="btn btn-yellow" onClick={openModal}>
              Оставить заявку →
            </button>
            <a href="https://t.me/vibecodesite_bot" className="btn btn-outline" target="_blank" rel="noreferrer">
              ✈️ Написать в Telegram
            </a>
            <a href="mailto:vibecodesite@yandex.ru" className={styles.emailLink}>
              📧 vibecodesite@yandex.ru
            </a>
            <p className={styles.hint}>
              Ответим в течение 15 минут в рабочее время
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
