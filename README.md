# ВайбКод — React-приложение

Сайт для услуг вайбкодинга. Стек: React 18 + Vite + CSS Modules.

## Запуск

```bash
# 1. Установить зависимости
npm install

# 2. Запустить локально
npm run dev

# 3. Собрать для продакшена
npm run build
```

После `npm run dev` откройте http://localhost:5173

## Структура

```
src/
  App.jsx              — корневой компонент
  index.css            — глобальные стили и CSS-переменные
  main.jsx             — точка входа
  components/
    Navbar/            — шапка с навигацией
    Hero/              — главный экран
    TrustBar/          — строка преимуществ
    Services/          — карточки услуг
    Process/           — шаги процесса работы
    WhyUs/             — преимущества перед фрилансерами
    SeoBlock/          — блок про SEO-оптимизацию
    Pricing/           — тарифы и цены
    Guarantees/        — гарантии
    FAQ/               — часто задаваемые вопросы (аккордеон)
    CTA/               — призыв к действию
    Footer/            — футер
```

## Что нужно заменить перед публикацией

1. В `CTA.jsx` и `Footer.jsx` — замените `YOUR_USERNAME` на ваш Telegram-ник
2. В `CTA.jsx` и `Footer.jsx` — замените `your@email.ru` на ваш email
3. В `index.html` — обновите canonical URL если нужно
