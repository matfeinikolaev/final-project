# Stock Market Explorer

Веб-приложение для просмотра данных фондового рынка через [Marketstack API](https://marketstack.com/).

## Функциональность

- **Биржи** — список мировых бирж с поиском по названию, акрониму и стране
- **Тикеры** — список тикеров с фильтрацией по бирже и поиском
- **EOD** — исторические данные (End-of-Day) по выбранным тикерам
- **Избранное** — сохранение акций в избранное с сохранением в LocalStorage

## Технологии

| Технология | Назначение |
|---|---|
| React 19 | UI-фреймворк |
| React Router 7 | Маршрутизация |
| Redux Toolkit | Стейт-менеджер |
| Material UI 7 | UI-библиотека |
| Storybook 8 | UI-kit |
| Vite | Сборщик |
| ESLint + Prettier | Линтинг и форматирование |

## Запуск

```bash
# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev

# Запустить Storybook
npm run storybook

# Форматировать код
npm run format
```

## Переменные окружения

Создайте файл `.env` в корне проекта:

```
VITE_MARKETSTACK_API_KEY=your_api_key_here
```

Получить ключ можно на [marketstack.com](https://marketstack.com/).

## Деплой

Проект задеплоен на GitHub Pages.

Ссылка на проект: https://matfeinikolaev.github.io/final-project/#/
