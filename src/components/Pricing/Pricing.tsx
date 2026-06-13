import styles from './Pricing.module.css'

const plans = [
  {
    icon: '📄',
    tag: 'Быстрый старт',
    title: 'Лендинг',
    sub: 'Одностраничный сайт',
    price: '3 000 ₽',
    note: 'Фиксированная цена',
    featured: false,
    items: [
      'Дизайн по вашему брифу',
      'SEO-оптимизация',
      'Адаптивная вёрстка',
      'Форма заявки',
      'До 5 правок бесплатно',
      'Официальный договор',
      'Исходники передаём вам',
      'Консультация по Яндекс Директ',
    ],
  },
  {
    icon: '🛍️',
    tag: 'Популярно',
    title: 'Интернет-магазин',
    sub: 'Многостраничный сайт',
    price: 'от 8 000 ₽',
    note: 'Зависит от объёма функционала',
    featured: true,
    items: [
      'Каталог и фильтрация товаров',
      'Корзина и оформление заказа',
      'Приём оплаты онлайн',
      'SEO всех страниц',
      'Панель администратора',
      'До 5 правок бесплатно',
      'Официальный договор',
      'Консультация по Яндекс Директ',
    ],
  },
  {
    icon: '🤖',
    tag: 'Автоматизация',
    title: 'Telegram-бот',
    sub: 'Бот под ваши задачи',
    price: 'от 5 000 ₽',
    note: 'Зависит от сложности',
    featured: false,
    items: [
      'Логика и сценарии бота',
      'Интеграция с базой данных',
      'Уведомления и рассылки',
      'Панель управления',
      'До 5 правок бесплатно',
      'Официальный договор',
      'Исходники передаём вам',
      'Консультация по Яндекс Директ',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="section section--dark" id="pricing" aria-label="Цены">
      <div className="container">
        <div className="section-head">
          <p className="section-tag">Цены</p>
          <h2 className="section-title">Прозрачная <em>стоимость</em></h2>
          <p className="section-subtitle">
            Сейчас действуют стартовые цены — мы формируем портфолио. Успейте зафиксировать минимальный прайс.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((p) => (
            <div
              key={p.title}
              className={`${styles.card} ${p.featured ? styles.featured : ''}`}
            >
              {p.featured && <div className={styles.badge}>{p.tag}</div>}
              <div className={styles.top}>
                <span className={styles.tag}>{p.featured ? 'Популярно' : p.tag}</span>
                <span className={styles.icon}>{p.icon}</span>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.sub}>{p.sub}</p>
              <div className={styles.price}>{p.price}</div>
              <p className={styles.note}>{p.note}</p>
              <ul className={styles.list}>
                {p.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#cta" className={`btn ${p.featured ? 'btn-yellow' : 'btn-outline'} ${styles.btn}`}>
                Обсудить проект
              </a>
            </div>
          ))}
        </div>

        <div className={styles.footnote}>
          <span>⏳</span>
          <p>
            <strong>Цены будут расти по мере роста портфолио.</strong> Клиенты, заказавшие сейчас,
            получают самую низкую цену рынка и приоритет при повторном обращении.
          </p>
        </div>
      </div>
    </section>
  )
}
