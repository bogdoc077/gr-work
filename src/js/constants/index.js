import {NewsApi} from "../modules/NewsApi.js";
import {NewsCard} from "../components/NewsCard.js";
import {NewsCardList} from "../components/NewsCardList.js";

//место, куда записываем карточки
const container = document.querySelector(".root");
const rootSection = document.querySelector('.places-list');
const placeCard = rootSection.querySelector(".place-card");

const newNewsCardList = new NewsCardList(rootSection);


//добавление карточки из формы
const formNew = document.forms.new;

//валидация форм
const popupNewValid = new FormValidator(formNew);
const popupInfoValid = new FormValidator(formInfo);

//PopUp Добавление карточки;
const searchButton = container.querySelector(".cover__search_button");


//API Class
const apiNewsClass = new NewsApi({
  basUrl: 'https://newsapi.org/v2/everything?language=ru&',
  headers: {
    authorization: 'd71cc0a35cbf484d89cd771371da4274',
      'Content-Type': 'application/json'
  }

});

//API Вывод карточек
apiNewsClass.getCards()
  .then((result) => {
    const newArrayInitial = result.map((card) =>  {
      new Card(card.name, card.link).createCard();
      const newCard = new NewsCard(card.name, card.link);
      return newCard.createCard();
    });
    newCardList.render(newArrayInitial);
  }).catch((err) => {
    console.log(err);
  });

//API Добавления карточки
formNew.addEventListener('submit', function (event) {
  event.preventDefault();

  apiClass.addCard(formNew.name.value, formNew.link.value)
    .then((result) => {
      const newCard = new NewsCard(result.name, result.link);
      newCardList.addCard(newCard.createNewsCard());
      formNew.reset();
      addPopup.close();
    }).catch((err) => {
    console.log(err);
  });
});
