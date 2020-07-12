export default class NewsCardList {
  //Метод создания контейнера из трех новостей
  createNewsContainer() {
    const newsBlock = document.createElement('div');
    newsBlock.classList.add('places-list');
    return newsBlock;
  }

  //Добавление новости в контейнер
  addNews(container, card) {
    container.appendChild(card);
  }
}
