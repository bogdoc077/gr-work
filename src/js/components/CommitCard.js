export class CommitCard {
  constructor(data, imglink, name, email, description) {
    this.data = data;
    this.imglink = imglink;
    this.name = name;
    this.email = email;
    this.description = description;
  }

  createCommitCard() {
    const cardContainer = document.createElement('div');
    const cardDesContainer = document.createElement('div');
    const cardDataElement = document.createElement('p');
    const cardAuthorElement = document.createElement('div');
    const cardLinkElement = document.createElement('div');
    const cardAuthorInfoElement = document.createElement('div');
    const cardNameElement = document.createElement('h3');
    const cardEmailElement = document.createElement('p');
    const cardDescriptionElement = document.createElement('p');

    cardContainer.classList.add('commit-card');
    cardDesContainer.classList.add('commit-card__description');
    cardDataElement.classList.add('commit-card__data');
    cardDataElement.textContent = this.data;
    cardAuthorElement.classList.add('commit-card__author');
    cardLinkElement.classList.add('commit-card__avatar');
    cardLinkElement.setAttribute('style', `background-image: url(${this.imglink})`);
    cardAuthorInfoElement.classList.add('commit-card__author_info');
    cardNameElement.classList.add('commit-card__name');
    cardNameElement.textContent = this.name;
    cardEmailElement.classList.add('commit-card__email');
    cardEmailElement.textContent = this.email;
    cardDescriptionElement.classList.add('commit-card__des');
    cardDescriptionElement.textContent = this.description;

    cardContainer.appendChild(cardLinkElement);
    cardContainer.appendChild(cardDesContainer);
    cardDesContainer.appendChild(cardDataElement);
    cardDesContainer.appendChild(cardAuthorElement);
    cardAuthorElement.appendChild(cardLinkElement);
    cardAuthorElement.appendChild(cardAuthorInfoElement);
    cardAuthorInfoElement.appendChild(cardNameElement);
    cardAuthorInfoElement.appendChild(cardEmailElement);
    cardDesContainer.appendChild(cardDescriptionElement);

    this.cardElement = cardContainer;

    return cardContainer;
  }
}
