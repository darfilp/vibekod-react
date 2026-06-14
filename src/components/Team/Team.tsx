import styles from './Team.module.css'

interface Stat { value: string; label: string }

interface Member {
  initials: string
  photo: string
  name: string
  role: string
  quote: string
  bio: string
  tags: string[]
  stats: Stat[]
  accentColor: string
  bgFrom: string
  bgTo: string
  reverse?: boolean
}

const members: Member[] = [
  {
    initials: 'Д',
    photo: '/team/daria.jpg',
    name: 'Дарья',
    role: 'Frontend-разработчик',
    quote: '«Сайт — это первое впечатление. Делаю так, чтобы оно было хорошим.»',
    bio: 'Отвечает за то, что видит пользователь: дизайн, анимации, адаптивность. Умеет делать сложное — понятным, а некрасивое — красивым. В основной работе строит интерфейсы для статистики.',
    tags: ['React', 'TypeScript', 'CSS Modules', 'Vite', 'Figma', 'UI/UX'],
    stats: [
      { value: '3+', label: 'года в разработке' },
      { value: '1 день', label: 'от идеи до деплоя' },
      { value: '100%', label: 'кода проходит ревью' },
    ],
    accentColor: '#e8b800',
    bgFrom: '#fdf6d8',
    bgTo: '#fef0b0',
  },
  {
    initials: 'О',
    photo: '/team/oleg.jpg',
    name: 'Олег',
    role: 'Backend-разработчик',
    quote: '«Хороший сайт — это не только красиво, но и надёжно.»',
    bio: 'Отвечает за серверную часть, Telegram-боты и деплой. Пишет на Python, знает как выстроить архитектуру так, чтобы проект работал быстро и без сбоев. В основной работе занимается высоконагруженными системами.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Aiogram', 'Docker', 'DevOps'],
    stats: [
      { value: '4+', label: 'года в разработке' },
      { value: '24/7', label: 'мониторинг сервера' },
      { value: '0', label: 'скрытых платежей' },
    ],
    accentColor: '#6450dc',
    bgFrom: '#edeafb',
    bgTo: '#e0dbf8',
    reverse: true,
  },
]

export default function Team() {
  return (
    <section className="section section--darker" id="team" aria-label="Команда">
      <div className="container">
        <div className="section-head">
          <p className="section-tag">Команда</p>
          <h2 className="section-title">Кто делает <em>ваш проект</em></h2>
          <p className="section-subtitle">
            Нас двое — оба из крупной российской IT-компании.
            Корпоративный уровень по доступной цене.
          </p>
        </div>

        <div className={styles.stack}>
          {members.map((m) => (
            <div
              key={m.name}
              className={`${styles.card} ${m.reverse ? styles.reverse : ''}`}
            >
              {/* Photo / Avatar */}
              <div
                className={styles.photoSide}
                style={{
                  background: `linear-gradient(150deg, ${m.bgFrom} 0%, ${m.bgTo} 100%)`,
                } as React.CSSProperties}
              >
                <img src={m.photo} alt={m.name} className={styles.photo} />
              </div>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.name}>{m.name}</h3>
                    <p
                      className={styles.role}
                      style={{ color: m.accentColor } as React.CSSProperties}
                    >
                      {m.role}
                    </p>
                  </div>
                </div>

                <blockquote className={styles.quote}>{m.quote}</blockquote>

                <p className={styles.bio}>{m.bio}</p>

                <div className={styles.stats}>
                  {m.stats.map((s) => (
                    <div key={s.label} className={styles.stat}>
                      <span
                        className={styles.statVal}
                        style={{ color: m.accentColor } as React.CSSProperties}
                      >
                        {s.value}
                      </span>
                      <span className={styles.statLabel}>{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.tags}>
                  {m.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
