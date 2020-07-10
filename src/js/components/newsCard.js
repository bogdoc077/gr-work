export default class NewsCard {
  constructor(options) {
    this.options = options;
  }

  //Метод создания карточки с новостью
  create(element) {
    const cardContainer = document.createElement('div');
    const cardLink = document.createElement('a');
    const cardLinkElement = document.createElement('div');
    const cardDesContainer = document.createElement('div');
    const cardDataElement = document.createElement('p');
    const cardTitleElement = document.createElement('h3');
    const cardDescriptionElement = document.createElement('p');
    const cardAuthorElement = document.createElement('h4');

    cardContainer.classList.add('place-card');
    cardLink.classList.add('link', 'news__item-link');
    cardLinkElement.classList.add('place-card__image');
    cardLinkElement.setAttribute('style', `background-image: url(${element.urlToImage})`);
    cardDesContainer.classList.add('place-card__description');
    cardDataElement.classList.add('place-card__data');
    cardDataElement.textContent = `${this.options.getFormattedDate(element.publishedAt)}`;
    cardTitleElement.classList.add('place-card__name');
    cardTitleElement.textContent = `${element.title}`;
    cardDescriptionElement.classList.add('place-card__des');
    cardDescriptionElement.textContent = `${element.description}`;
    cardAuthorElement.classList.add('place-card__author');
    cardAuthorElement.textContent = `${element.source.name}`;

    cardLink.setAttribute('href', `${element.url}`);
    cardLink.setAttribute('target', '_blank');


    cardContainer.appendChild(cardLink);
    cardLink.appendChild(cardLinkElement);
    cardLink.appendChild(cardDesContainer);
    cardDesContainer.appendChild(cardDataElement);
    cardDesContainer.appendChild(cardTitleElement);
    cardDesContainer.appendChild(cardDescriptionElement);
    cardDesContainer.appendChild(cardAuthorElement);

    return cardContainer;
  }
}
