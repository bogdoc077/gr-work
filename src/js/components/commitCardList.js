export default class CommitCardList {
  constructor(options) {
    this.options = options;
  }

  //Метод добавления коммита
  addCommit(card) {
    this.options.swiperContainer.appendChild(card);
  }

  //Метод рендеринга коммитов
  renderCommits() {
    this.options.githubApi.getCommits().then((commits) => {
      commits.forEach((commit) => {
        this.addCommit(this.options.commitCard.create(commit));
      });
      this.options.initSwiper();
    });
  }
}
