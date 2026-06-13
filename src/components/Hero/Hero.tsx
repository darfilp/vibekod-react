import { useModal } from '../../context/ModalContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { openModal } = useModal()

  return (
    <section className={styles.hero} id="hero" aria-label="Главный экран">
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className="container">
        <div className={styles.layout}>
          {/* LEFT: main text */}
          <div className={styles.left}>
            <div className={styles.badge}>
              <span className={styles.dot} />
              Принимаем заказы прямо сейчас
            </div>

            <h1 className={styles.title}>
              Ваш сайт или<br />
              Telegram-бот —<br />
              <em>готов за 1 день</em><sup className={styles.asterisk}>*</sup>
            </h1>

            <p className={styles.subtitle}>
              Разрабатываем сайты для интернет-магазинов и Telegram-боты под ключ.
              Быстро, с договором, по честной цене.
            </p>
            <p className={styles.footnote}>
              <sup>*</sup> Срок зависит от поставленных задач и сложности проекта.
              Именно этот сайт был создан за 1 день — от идеи до публикации.
            </p>

            <div className={styles.actions}>
              <button className="btn btn-yellow" onClick={openModal}>
                Получить консультацию →
              </button>
              <a href="#pricing" className="btn btn-outline">
                Посмотреть цены
              </a>
            </div>
          </div>

          {/* RIGHT: trust card */}
          <div className={styles.right}>
            <div className={styles.card}>
              <p className={styles.cardLabel}>Почему выбирают нас</p>
              <ul className={styles.cardList}>
                <li><span className={styles.check}>✓</span> Запуск за 1 день</li>
                <li><span className={styles.check}>✓</span> Команда из крупной IT-компании</li>
                <li><span className={styles.check}>✓</span> Официальный договор</li>
                <li><span className={styles.check}>✓</span> До 5 правок бесплатно</li>
                <li><span className={styles.check}>✓</span> SEO-оптимизация с первого дня</li>
                <li><span className={styles.check}>✓</span> Опыт в продвижении сайтов</li>
              </ul>
              <div className={styles.cardPrice}>
                <span className={styles.priceNum}>от 3 000 ₽</span>
                <span className={styles.priceNote}>за одностраничный сайт</span>
              </div>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>1 день</span>
                <span className={styles.statLabel}>от идеи до запуска</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>5</span>
                <span className={styles.statLabel}>правок бесплатно</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>2+</span>
                <span className={styles.statLabel}>года в IT-компании</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
