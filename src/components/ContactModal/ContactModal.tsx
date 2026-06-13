import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react'
import { useModal } from '../../context/ModalContext'
import styles from './ContactModal.module.css'

interface FormState {
  name: string
  contact: string
  service: string
  message: string
  agree: boolean
}

const INITIAL: FormState = {
  name: '',
  contact: '',
  service: '',
  message: '',
  agree: false,
}

export default function ContactModal() {
  const { isOpen, closeModal } = useModal()
  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Закрытие по Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, closeModal])

  // Блокировка скролла фона
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const set =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === 'checkbox'
          ? e.target.checked
          : e.target.value
      setForm((prev) => ({ ...prev, [field]: value }))
    }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Отправляем на Python-бэкенд → Telegram-бот пришлёт уведомление
    // Когда бот задеплоен на сервере, замени URL на https://vibecodesite.ru/api/contact
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:    form.name,
        contact: form.contact,
        service: form.service,
        message: form.message,
      }),
    })
    if (!res.ok) throw new Error('Ошибка отправки')

    setLoading(false)
    setSubmitted(true)
  }

  const handleClose = () => {
    closeModal()
    setTimeout(() => { setForm(INITIAL); setSubmitted(false) }, 300)
  }

  return (
    <div
      className={styles.overlay}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Оставить заявку"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={handleClose} aria-label="Закрыть">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>Заявка отправлена!</h3>
            <p className={styles.successText}>
              Свяжемся с вами в течение нескольких часов и обсудим проект.
            </p>
            <button className={`btn btn-yellow ${styles.successBtn}`} onClick={handleClose}>
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <div className={styles.head}>
              <h2 className={styles.title}>Обсудить проект</h2>
              <p className={styles.subtitle}>
                Заполните форму — ответим в течение нескольких часов
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="modal-name">Ваше имя *</label>
                <input
                  id="modal-name"
                  className={styles.input}
                  type="text"
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={set('name')}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="modal-contact">
                  Телефон или Telegram *
                </label>
                <input
                  id="modal-contact"
                  className={styles.input}
                  type="text"
                  placeholder="+7 900 000-00-00 или @username"
                  value={form.contact}
                  onChange={set('contact')}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="modal-service">
                  Что нужно сделать
                </label>
                <select
                  id="modal-service"
                  className={styles.input}
                  value={form.service}
                  onChange={set('service')}
                >
                  <option value="">Выберите услугу</option>
                  <option value="site">Сайт / лендинг</option>
                  <option value="shop" disabled>Интернет-магазин (скоро)</option>
                  <option value="bot">Telegram-бот</option>
                  <option value="other">Ещё не определился</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="modal-message">
                  Описание задачи
                </label>
                <textarea
                  id="modal-message"
                  className={styles.textarea}
                  placeholder="Расскажите в двух словах — что хотите получить в итоге"
                  rows={3}
                  value={form.message}
                  onChange={set('message')}
                />
              </div>

              <label className={styles.agree}>
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={set('agree')}
                  required
                />
                <span>
                  Я ознакомлен и согласен с{' '}
                  <a
                    href="/privacy.html"
                    className={styles.agreeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Политикой конфиденциальности
                  </a>{' '}
                  и даю согласие на обработку персональных данных в соответствии с
                  Федеральным законом № 152-ФЗ
                </span>
              </label>

              <button
                type="submit"
                className={`btn btn-yellow ${styles.submit}`}
                disabled={!form.name || !form.contact || !form.agree || loading}
              >
                {loading ? 'Отправляем...' : 'Отправить заявку →'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
