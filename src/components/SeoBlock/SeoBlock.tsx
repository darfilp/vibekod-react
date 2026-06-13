import styles from './SeoBlock.module.css'

const features = [
  {
    icon: '🏷️',
    title: 'Title и Meta description',
    desc: 'Уникальные заголовки и описания — именно их пользователь видит в результатах поиска.',
  },
  {
    icon: '📐',
    title: 'Структура H1–H3',
    desc: 'Правильная иерархия заголовков помогает поисковику понять, о чём страница.',
  },
  {
    icon: '⚡',
    title: 'Скорость загрузки',
    desc: 'Google и Яндекс снижают позиции медленных сайтов. Оптимизируем код и изображения.',
  },
  {
    icon: '📊',
    title: 'Микроразметка Schema.org',
    desc: 'Расширенные сниппеты: звёзды, цены, FAQ прямо в результатах поиска.',
  },
  {
    icon: '📱',
    title: 'Mobile-first адаптив',
    desc: '70%+ трафика с телефонов. Без адаптива Яндекс понижает сайт в выдаче.',
  },
  {
    icon: '🔗',
    title: 'Open Graph и соцсети',
    desc: 'Красивые превью при шаринге ссылки в Telegram, ВКонтакте и мессенджерах.',
  },
]

export default function SeoBlock() {
  return (
    <section className={`section ${styles.seo}`} id="seo" aria-label="SEO-оптимизация">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <p className="section-tag">SEO-оптимизация</p>
            <h2 className="section-title">
              Зачем нужно SEO —<br />и что мы <em>делаем</em>
            </h2>
            <p className={styles.intro}>
              <strong>SEO</strong> — это комплекс мер, которые помогают сайту занимать высокие
              позиции в Яндексе и Google. Чем выше позиция — тем больше бесплатных переходов
              и потенциальных клиентов.
            </p>
            <p className={styles.intro}>
              Большинство агентств берут за SEO отдельную плату. Мы встраиваем базовую
              оптимизацию в каждый проект — включено в цену.
            </p>
          </div>

          <div className={styles.features}>
            <p className={styles.featuresLabel}>Что входит в каждый сайт:</p>
            {features.map((f) => (
              <div key={f.title} className={styles.feature}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div>
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
