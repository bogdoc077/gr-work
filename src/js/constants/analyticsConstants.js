//Переменные ключевого слова и массива новостей из локального хранилища
export const keyword = JSON.parse(localStorage.getItem("keyword")).toLowerCase();
export const newsArray = JSON.parse(localStorage.getItem("storage"));

//DOM-элементы
export const queryString = document.querySelector('.title-section');
export const countNews = document.querySelector('.analytics-info__analiz_bold-news');
export const countMentionsHeadlines = document.querySelector('.analytics-info__analiz_bold-headlines');
export const graphDays = document.querySelectorAll('.tabel__days_num');
export const graphMonth = document.querySelector('.tabel__header_data');
export const graphNums = document.querySelectorAll('.tabel__charts_line');
export const graphLines = document.querySelectorAll('.tabel__charts_line');


export const graphScalesTwo = document.querySelectorAll('.analytics-graph__scale-two');
export const graphScalesThree = document.querySelectorAll('.analytics-graph__scale-three');
export const graphScalesFour = document.querySelectorAll('.analytics-graph__scale-four');
export const graphScalesFive = document.querySelectorAll('.analytics-graph__scale-five');
