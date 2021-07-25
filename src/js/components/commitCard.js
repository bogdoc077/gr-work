export default class CommitCard {
  constructor(options) {
    this.options = options;
  }
  //Метод создания комиита
  create(element) {
    const cardContainer = document.createElement('div');
    const cardDesContainer = document.createElement('div');
    const cardDataElement = document.createElement('p');
    const cardAuthorContainer = document.createElement('div');
    const cardImageAvatar = document.createElement('img');
    const cardAuthorInfo = document.createElement('div');
    const cardNameElement = document.createElement('h3');
    const cardEmailElement = document.createElement('a');
    const cardDescriptionElement = document.createElement('p');

    cardContainer.classList.add('swiper-slide');
    cardDesContainer.classList.add('swiper-slide__description');
    cardDataElement.classList.add('swiper-slide__data');
    cardDataElement.textContent = `${this.options.getFormattedDate(element.commit.committer.date)}`;
    cardAuthorContainer.classList.add('swiper-slide__author');
    cardImageAvatar.classList.add('swiper-slide__avatar');
    //cardImageAvatar.setAttribute('src', `${element.author.avatar_url}`);
    cardAuthorInfo.classList.add('swiper-slide__author_info');
    cardNameElement.classList.add('swiper-slide__name');
    cardNameElement.textContent = `${element.commit.committer.name}`;
    cardEmailElement.classList.add('link', 'swiper-slide__email');
    cardEmailElement.textContent = `${element.commit.committer.email}`;
    cardDescriptionElement.classList.add('swiper-slide__des');
    cardDescriptionElement.textContent = `${element.commit.message}`;

    cardEmailElement.setAttribute('href', `mailto:${element.commit.committer.email}`);
    cardEmailElement.setAttribute('target', '_blank');

    cardContainer.appendChild(cardDesContainer);
    cardDesContainer.appendChild(cardDataElement);
    cardDesContainer.appendChild(cardAuthorContainer);
    cardAuthorContainer.appendChild(cardImageAvatar);
    cardAuthorContainer.appendChild(cardAuthorInfo);
    cardAuthorInfo.appendChild(cardNameElement);
    cardAuthorInfo.appendChild(cardEmailElement);
    cardDesContainer.appendChild(cardDescriptionElement);

    return cardContainer;
  }
}


