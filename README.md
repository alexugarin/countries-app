# Где посмотреть результат

[https://countries-beztg5rik-alexugarins-projects.vercel.app/](https://countries-o3usyda3d-alexugarins-projects.vercel.app/)

# Задание

## Основные элементы

- Написать приложение на Vue 3 с использованием options api.
- Дизайн приложения рассчитан на две точки брейкпойнов: 375px и 1440px. Можно сверстать только для 1440px.
- Стили должны быть написаны с использованием scss. Возможно использование tailwind css. Предпочтительна Mobile First вёрстка (Если выбрали верстку для 1440px и 375px).
- Для сборки проекта можно использовать vue-cli, vite, webpack (можно и другие сборщики, главное чтобы всё работало).
- Использование vue router обязательно. Приложение содержит 2 страницы: главная страница со списком стран, детальная страница описания страны.

## Описание приложения
Приложение содержит 2 страницы: главная страница со списком стран, детальная страница описания страны. На главной странице выводятся карточки стран с их кратким описанием. Данные для этой страницы можно брать из data.json. Для загрузки данных из data.json можно использовать axios, fetch api(Но не обязательно). На главной странице можно ввести название страны в поле поиска по списку стран. При вводе текста в инпут должен происходить фильтр карточек стран по названию страны, и должны быть показаны только те карточки, которые подходят по фильтру. Если ничего не нашлось, то можно просто вывести текст "Нет данных" посередине блока с карточками. При нажатии на карточку страны на главной странице должен осуществляться переход на детальную страницу страны. На детальной странице отображается более подробная информация о стране. При нажатии на кнопку "Back" должен осуществляться переход на главную страницу приложения. Для перехода между страницами следует использовать vue-router.

# Стили

## Разметка

Дизайн подразумевает разметку на следующие величины ширины экрана:

- Мобильный: 375px
- Настольный ПК: 1440px

## Цвета

- Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
- Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
- Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
- White (Light Mode Elements): hsl(0, 0%, 100%)

## Типография

- Элементы главной страницы: 14px
- Элементы детальной страницы: 16px

### Шрифты

- Family: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
- Weights: 300, 600, 800

## Icons

Иконки можно выгрузить из файла фигмы .fig или же подключить библиотеки иконок:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)


# How to run

## Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur
