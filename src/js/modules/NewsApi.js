export class NewsApi {
  constructor(array, ) {
      this.address = array.basUrl;
      this.token = array.headers.authorization;
      this.json = array.headers;
  }

  getCards() {
      return fetch(`${this.address}q=${REQUEST}&from=${sevenDaysAgo}&to=${today}&apiKey=${KEY}&pageSize=100`, {
          headers: {
              authorization: this.token
          }
      }).then(res => {
          if(res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}
