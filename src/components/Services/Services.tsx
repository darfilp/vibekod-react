import styles from './Services.module.css'

interface Service {
  icon: string
  tag: string
  title: string
  problem: string
  forWhom: string[]
  anchor: string
  muted?: boolean // true = карточка заблокирована. Чтобы включить: убери строку или поставь false
}

const services: Service[] = [
  {
    icon: '📄',
    tag: 'Landing',
    title: 'Лендинг / сайт-визитка',
    problem: 'Нужно быстро выйти в онлайн и начать получать заявки',
    forWhom: [
      'Фрилансеры и мастера — парикмахер, репетитор, психолог',
      'Малый бизнес с одной услугой или продуктом',
      'Те, кто хочет протестировать нишу без лишних затрат',
      'Стартующий бизнес — нужен сайт «прямо сейчас»',
    ],
    anchor: '#pricing',
  },
  {
    icon: '🤖',
    tag: 'Telegram',
    title: 'Telegram-бот',
    problem: 'Устали отвечать вручную — хотите автоматизировать общение с клиентами',
    forWhom: [
      'Интернет-магазины — приём заказов и статус доставки',
      'Сервисы с записью — бот вместо администратора',
      'Рестораны, доставка еды — меню и оформление заказа',
      'Инфобизнес — рассылки, курсы, напоминания',
    ],
    anchor: '#pricing',
  },
  {
    icon: '🛍️',
    tag: 'E-commerce',
    title: 'Интернет-магазин',
    problem: 'Хотите продавать товары онлайн с каталогом, корзиной и оплатой',
    forWhom: [
      'Розничные магазины, выходящие в онлайн',
      'Производители, продающие напрямую',
      'Те, кому не хватает функционала маркетплейсов',
      'Бизнес с большим ассортиментом товаров',
    ],
    anchor: '#pricing',
    muted: true, // TODO: убрать когда начнём принимать заказы
  },
]

export default function Services() {
  return (
    <section className="section section--darker" id="services" aria-label="Услуги">
      <div className="container">
        <div className="section-head">
          <p className="section-tag">Услуги</p>
          <h2 className="section-title">Какой продукт <em>вам подойдёт?</em></h2>
          <p className="section-subtitle">Выберите формат — и мы разберём задачу вместе на бесплатной консультации.</p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.title} className={`${styles.card} ${s.muted ? styles.muted : ''}`}>
              <div className={styles.top}>
                <span className={styles.tag}>{s.tag}</span>
                {s.muted && <span className={styles.soon}>Скоро</span>}
                <div className={styles.icon}>{s.icon}</div>
              </div>

              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.problem}>{s.problem}</p>

              <div className={styles.forWhom}>
                <p className={styles.forWhomLabel}>Подойдёт если вы:</p>
                <ul className={styles.list}>
                  {s.forWhom.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>

              {s.muted
                ? <div className={styles.mutedOverlay}>Принимаем заявки скоро</div>
                : <a href={s.anchor} className={styles.link}>Смотреть стоимость →</a>
              }
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
