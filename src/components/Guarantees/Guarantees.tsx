import styles from './Guarantees.module.css'

const items = [
  { icon: '✏️', title: '5 правок бесплатно', desc: 'Любые правки в рамках ТЗ — бесплатно. Важно, чтобы результат вам нравился.' },
  { icon: '📋', title: 'Официальный договор', desc: 'Сроки, стоимость, объём и права на результат — всё зафиксировано на бумаге.' },
  { icon: '🔑', title: 'Код принадлежит вам', desc: 'После сдачи все исходники, доступы и права передаются вам в полное владение.' },
  { icon: '🛡️', title: 'Аудит безопасности', desc: 'Каждый проект проходит проверку на XSS, SQL-инъекции, утечки данных.' },
  { icon: '🐛', title: 'Тестирование на баги', desc: 'Ручное QA-тестирование перед сдачей. Сдаём только стабильно работающий продукт.' },
  { icon: '♾️', title: 'Простая поддержка', desc: 'Код пишется так, чтобы его мог поддерживать любой разработчик или AI-инструмент.' },
]

export default function Guarantees() {
  return (
    <section className="section section--darker" id="guarantees" aria-label="Гарантии">
      <div className="container">
        <div className="section-head">
          <p className="section-tag">Гарантии</p>
          <h2 className="section-title">Мы берём <em>ответственность</em></h2>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
