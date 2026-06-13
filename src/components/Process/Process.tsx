import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    title: 'Первый созвон',
    desc: 'Знакомимся, обсуждаем задачу и отвечаем на вопросы. Общаемся так, как вам удобно — созвон, переписка в Telegram, почта. Всё зависит только от ваших пожеланий.',
  },
  {
    num: '02',
    title: 'ТЗ и примеры',
    desc: 'Вы присылаете техническое задание и примеры сайтов, которые нравятся по стилю или функционалу. Чем больше деталей — тем точнее результат.',
  },
  {
    num: '03',
    title: 'Оплата и договор',
    desc: 'Подписываем официальный договор, фиксируем сроки и стоимость. После этого приступаем к работе. Никаких устных договорённостей.',
  },
  {
    num: '04',
    title: 'Анализ конкурентов',
    desc: 'Изучаем рынок и ваших конкурентов — смотрим, что работает в нише, что можно сделать лучше. Это помогает сделать сайт не просто красивым, но и эффективным.',
  },
  {
    num: '05',
    title: 'Разработка',
    desc: 'Создаём сайт или бота. AI-assisted подход даёт скорость, ревью двух живых разработчиков — качество и безопасность.',
  },
  {
    num: '06',
    title: 'Деплой',
    desc: 'Объясняем, что нужно сделать для запуска: домен, хостинг, настройки. Деплоим вместе с вами — всё остаётся в ваших руках и на вашем аккаунте.',
  },
]

export default function Process() {
  return (
    <section className="section section--dark" id="process" aria-label="Процесс работы">
      <div className="container">
        <div className="section-head">
          <p className="section-tag">Процесс</p>
          <h2 className="section-title">От идеи до <em>готового продукта</em></h2>
          <p className="section-subtitle">Шесть понятных шагов — без воды и неожиданностей. Работаем в удобном для вас формате: созвон, переписка — как хотите.</p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.left}>
                <span className={styles.num}>{step.num}</span>
                {i < steps.length - 1 && <span className={styles.line} aria-hidden="true" />}
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
