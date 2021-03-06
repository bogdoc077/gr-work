export default class SearchInput {
  constructor(options) {
    this.options = options;
    this.setEventListeners();
  }

  //Функция ожидания загрузки информации новостей
  _renderLoading(isLoading, block) {
    if(isLoading) {
      block.classList.add('news__find_is-visible');
    } else {
      block.classList.remove('news__find_is-visible');
    }
  }

  //Функция проверки на валидность поля ввода
  _checkInputValidity(elementInput, elementError) {
    if (elementInput.validity.tooShort) {
      elementError.textContent = 'Должно быть от 2 до 30 символов';
      this._activateError(elementInput);
      return false;
    }
    this._resetError(elementInput);
    return elementInput;
  }

  //Функция установки валидности поля
  _setSubmitButtonState(elementForm, elementButton) {
    if (!elementForm.checkValidity()) {
      elementButton.setAttribute('disabled', true);
      elementButton.classList.remove('cover__search_button_active');
    } else {
      elementButton.removeAttribute('disabled');
      elementButton.classList.add('cover__search_button_active');
    }
  }

  _activateError(elementInput) {
    elementInput.parentNode.classList.add('input-container__invalid');
  }

  _resetError(elementInput) {
    elementInput.parentNode.classList.remove('input-container__invalid');
  }

  //Метод отрисовки первоначального блока новостей
  renderStartNews() {
    this.options.newsBlock.classList.remove('news_is-visible');//отключение блока ошибки получения данных
    this.options.newsError.classList.remove('news__error_is-visible');//отключение блока ошибки получения данных
    this.options.newsOut.classList.remove('news__out_is-visible');//отключение блока "ничего не найдено"
    this.options.newsData.classList.remove('news__data_is-visible');//скрытие найденных предыдущих новостей
    this.options.newsButton.classList.remove('news__button_is-invisible');//включение кнопки доп новостей

    document.querySelector('.cover__search_input').setAttribute('disabled', true);
    document.querySelector('.cover__search_button').setAttribute('disabled', true);
    document.querySelector('.cover__search_button').classList.remove('cover__search_button_active');

    this.options.newsBlock.classList.add('news_is-visible');
    //включение прелоудера
    this._renderLoading(true, this.options.newsFind);
    //запись новостей в локальное хранилище с дальнейшими действиями
    this.options.dataStorage.saveStorage(this.options.themeInput)
     .then((newsItemsArray) => {
       //очистка контейнера с предыдущими найденными новостями
      while (this.options.newsContainer.firstChild) {
        this.options.newsContainer.removeChild(this.options.newsContainer.firstChild);
      }
      //Проверка наличия новостей
      if (newsItemsArray.length === 0) {
        this._renderLoading(false, this.options.newsFind);//отключение прелоудера
        this.options.newsOut.classList.add('news__out_is-visible');//включение блока "ничего не найдено"
      } else {
        const maxCountNewsInBlock = 3;
        const newsBlock = this.options.newsCardList.createNewsContainer();//Создание первого блока новостей
        this.options.newsContainer.appendChild(newsBlock);//добавление первого блока в контейнер
        this._renderLoading(false, this.options.newsFind);//отключение прелоудера
        const len = newsItemsArray.length < maxCountNewsInBlock ? newsItemsArray.length : maxCountNewsInBlock;//переменная для опредления длины массива новостей
        //рендеринг первых трех новостей
        for (let i = 0; i < len; i += 1) {
          newsItemsArray[i].urlToImage === null ? newsItemsArray[i].urlToImage = "<%=require('./images/noimage.png')%>" : newsItemsArray[i].urlToImage;
          this.options.renderNews(this.options.newsCardList, newsBlock, this.options.newsCard, newsItemsArray, i);
          this._setSubmitButtonState(this.options.formSearch, this.options.searchButton);
        };
        this.options.newsData.classList.add('news__data_is-visible');//показ первого блока новостей
        //Если новостей < 3 - дальнейшие действия
        if(newsItemsArray.length <= maxCountNewsInBlock) {
          this.options.newsButton.classList.add('news__button_is-invisible');//скрытие кнопки с доп новостями
        }
      }
      document.querySelector('.cover__search_input').removeAttribute('disabled');
    })
    .catch((err) => {
      this._renderLoading(false, this.options.newsFind);//выключение прелоудера
      this.options.newsError.classList.add('news__error_is-visible');//включение блока с ошибкой получения данных
      console.log(`Ошибка ${err}`);
    });
  }

  //Метод установки слушателей
  setEventListeners() {
    this.options.formSearch.addEventListener('input', (event) => {
      this._checkInputValidity(event.target, this.options.errorMessage);
      this._setSubmitButtonState(this.options.formSearch, this.options.searchButton);
    });
  }
}
