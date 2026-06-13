import styles from './Portfolio.module.css'

interface Case {
  tag: string
  title: string
  desc: string
  tech: string[]
  link?: string
  wip?: boolean
  emoji: string
}

const cases: Case[] = [
  {
    emoji: '⚡',
    tag: 'Лендинг',
    title: 'ВайбКод — этот сайт',
    desc: 'Сайт агентства с нуля: от идеи до деплоя за 1 день. TypeScript, анимации, модалка, cookie-баннер, политика конфиденциальности по ФЗ-152.',
    tech: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    link: '/',
  },
  {
    emoji: '📐',
    tag: 'Лендинг',
    title: 'Лендинг для малого бизнеса',
    desc: 'Здесь появится первый клиентский кейс — с описанием задачи, результатом и скриншотами готового сайта.',
    tech: ['React', 'Яндекс.Метрика', 'SEO'],
    wip: true,
  },
  {
    emoji: '🤖',
    tag: 'Telegram-бот',
    title: 'Бот для автоматизации заявок',
    desc: 'Здесь появится кейс по Telegram-боту — автоматизация, приём заказов или запись клиентов.',
    tech: ['Python', 'Aiogram', 'PostgreSQL'],
    wip: true,
  },
]

export default function Portfolio() {
  return (
    <section className="section" id="portfolio" aria-label="Портфолио">
      <div className="container">
        <div className="section-head">
          <p className="section-tag">Портфолио</p>
          <h2 className="section-title">Наши <em>проекты</em></h2>
          <p className="section-subtitle">
            Только начинаем — первые клиентские кейсы уже в работе.
            Пока можем показать этот сайт: он сделан за 1 день.
          </p>
        </div>

        <div className={styles.grid}>
          {cases.map((c) => (
            <article key={c.title} className={`${styles.card} ${c.wip ? styles.wip : ''}`}>
              {c.wip && <span className={styles.wipBadge}>В процессе</span>}

              <div className={styles.preview}>
                <span className={styles.previewEmoji}>{c.emoji}</span>
              </div>

              <div className={styles.body}>
                <span className={styles.tag}>{c.tag}</span>
                <h3 className={styles.title}>{c.title}</h3>
                <p className={styles.desc}>{c.desc}</p>

                <div className={styles.tech}>
                  {c.tech.map(t => (
                    <span key={t} className={styles.chip}>{t}</span>
                  ))}
                </div>

                {c.link && !c.wip && (
                  <a
                    href={c.link}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Смотреть проект →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
