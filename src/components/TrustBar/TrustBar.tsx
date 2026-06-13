import styles from './TrustBar.module.css'

const stack = [
  { name: 'React', note: 'фронтенд' },
  { name: 'Next.js', note: 'SEO-сайты' },
  { name: 'Node.js', note: 'бэкенд' },
  { name: 'Telegram Bot API', note: 'боты' },
  { name: 'PostgreSQL', note: 'базы данных' },
  { name: 'Vite', note: 'быстрая сборка' },
  { name: 'Яндекс.Метрика', note: 'аналитика' },
  { name: 'Яндекс.Директ', note: 'реклама' },
]

export default function TrustBar() {
  return (
    <div className={styles.bar} aria-label="Стек технологий">
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.heading}>Работаем с</span>
          <div className={styles.tags}>
            {stack.map((item) => (
              <div key={item.name} className={styles.tag}>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.note}>{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
