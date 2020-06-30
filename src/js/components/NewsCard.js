export class NewsCard {
  constructor(imglink, data, title, description, author) {
    this.imglink = imglink;
    this.data = data;
    this.title = title;
    this.description = description;
    this.author = author;
  }

  createNewsCard() {
    const cardContainer = document.createElement('div');
    const cardLinkElement = document.createElement('div');
    const cardDesContainer = document.createElement('div');
    const cardDataElement = document.createElement('p');
    const cardTitleElement = document.createElement('h3');
    const cardDescriptionElement = document.createElement('p');
    const cardAuthorElement = document.createElement('h4');

    cardContainer.classList.add('place-card');
    cardLinkElement.classList.add('place-card__image');
    cardLinkElement.setAttribute('style', `background-image: url(${this.imglink})`);
    cardDesContainer.classList.add('place-card__description');
    cardDataElement.classList.add('place-card__data');
    cardDataElement.textContent = this.data;
    cardTitleElement.classList.add('place-card__name');
    cardTitleElement.textContent = this.title;
    cardDescriptionElement.classList.add('place-card__des');
    cardDescriptionElement.textContent = this.description;
    cardAuthorElement.classList.add('place-card__des');
    cardAuthorElement.textContent = this.author;


    cardContainer.appendChild(cardLinkElement);
    cardContainer.appendChild(cardDesContainer);
    cardDesContainer.appendChild(cardDataElement);
    cardDesContainer.appendChild(cardTitleElement);
    cardDesContainer.appendChild(cardDescriptionElement);
    cardDesContainer.appendChild(cardAuthorElement);

    this.cardElement = cardContainer;

    return cardContainer;
  }
}
