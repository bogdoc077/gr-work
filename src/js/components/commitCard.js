export default class CommitCard {
  constructor(options) {
    this.options = options;
  }
  //Метод создания комиита
  create(element) {
    return `
        <div class="swiper-slide">
          <div class="swiper-slide__description">
            <p class="swiper-slide__data">${this.options.getFormattedDate(element.commit.committer.date)}</p>
            <div class="swiper-slide__author">
              <img class="swiper-slide__avatar" alt="Photo" src="${element.author.avatar_url}">
              <div class="swiper-slide__author_info">
                <h3 class="swiper-slide__name">${element.commit.committer.name}</h3>
                <a class="swiper-slide__email" href="mailto:${element.commit.committer.email}">${element.commit.committer.email}</a>
              </div>
            </div>
            <p class="swiper-slide__des">${element.commit.message}</p>
          </div>
        </div>
    `;
  }
}


