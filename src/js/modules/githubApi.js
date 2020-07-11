export default class GithubApi {
  constructor(options) {
    this.options = options;
  }

  //Получение коммитов от Github
  getCommits() {
    return (fetch(`https://api.github.com/repos/bogdoc077/gr-work/commits?sha=master`, {
      method: 'GET',
      headers: {
          authorization: 'OAUTH-TOKEN'
      }
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
    })
    .catch((err) => {return Promise.reject(`Ошибка: ${err.status}`);})
    );
  }
}
