import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: 'Правда ли, что сайт делается за 1 день?',
    a: 'Лендинги и простые сайты — да. Интернет-магазины и боты со сложной логикой занимают 3–7 рабочих дней. Точные сроки фиксируются в договоре. Именно этот сайт был создан за один день — от идеи до публикации.',
  },
  {
    q: 'Вы используете ИИ — это плохо?',
    a: 'Нет. AI-assisted разработка (вайбкодинг) — инструмент ускорения, такой же как IDE или готовые библиотеки. Весь код проходит ревью двух опытных разработчиков. Мы несём ответственность за каждую строку и подписываем договор.',
  },
  {
    q: 'Кто вы и почему вам можно доверять?',
    a: 'Нас двое — оба работаем в крупной российской IT-компании. Имеем коммерческий опыт в разработке. Работаем исключительно по официальному договору.',
  },
  {
    q: 'Что если результат мне не понравится?',
    a: 'До 5 правок в рамках ТЗ — бесплатно. Если результат не соответствует согласованному ТЗ — переделываем за наш счёт. Всё прописано в договоре.',
  },
  {
    q: 'Почему так дёшево?',
    a: 'Мы только начинаем собирать портфолио. Стартовые цены — наше вложение в репутацию. По мере роста опыта и отзывов цены для новых клиентов будут расти.',
  },
  {
    q: 'Что входит в консультацию по Яндекс Директ?',
    a: 'При покупке любой услуги мы бесплатно объясним, как работает Яндекс Директ, как настроить рекламную кампанию под ваш сайт, какие ставки выставлять и как читать статистику. Вы получите понятный старт без лишних трат.',
  },
  {
    q: 'Нужно ли разбираться в технологиях?',
    a: 'Нет. Вы объясняете задачу и цель на своём языке — мы берём техническую сторону на себя. После сдачи объясняем, как пользоваться сайтом или ботом.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section section--dark" id="faq" aria-label="Часто задаваемые вопросы">
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center', maxWidth: 'unset' }}>
          <p className="section-tag" style={{ justifyContent: 'center' }}>FAQ</p>
          <h2 className="section-title" style={{ margin: '0 auto' }}>Частые вопросы</h2>
        </div>

        <div className={styles.list}>
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <button
                  className={styles.question}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className={styles.arrow} aria-hidden="true">↓</span>
                </button>
                <div className={styles.answer} aria-hidden={!isOpen}>
                  <p className={styles.answerText}>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
