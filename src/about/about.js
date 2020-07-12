import './about.css';

//Импорт библиотеки слайдера Swiper
import { Swiper, Navigation, Pagination, Scrollbar } from '../../node_modules/swiper/swiper.esm';
Swiper.use([Navigation, Pagination, Scrollbar]);

//Импорт утилит
import {
  getFormattedDate
} from '../js/utils/utils';

//Импорт классов
import GithubApi from '../js/modules/githubApi';
import CommitsCardList from '../js/components/commitCardList';
import CommitCard from '../js/components/commitCard';

//Функция инициализации слайдера
const initSwiper = () => {
  const mySwiper = new Swiper ('.swiper-container', {
    //Опции
    updateOnWindowResize: true,
    grabCursor: true,
    direction: 'horizontal',
    loop: true,
    simulateTouch: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      // when window width is >= 720px
      720: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      // when window width is >= 1024pxpx
      1024: {
        slidesPerView: 3,
        spaceBetween: 16
      },
      // when window width is >= 1024pxpx
      1440: {
        slidesPerView: 4,
        spaceBetween: 16
      },
    },
    fadeEffect: {
      crossFade: true
    },
    //Пагинация
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      type: 'bullets',
      bulletElement: 'label',
      clickable: true,
    },
    //Кнопки навигации
    navigation: {
      nextEl: '.slider__control_right',
      prevEl: '.slider__control_left',
    }
  });
};

//ОПРЕДЕЛЕНИЕ ЭКЗЕМПЛЯРОВ КЛАССОВ
/*******************************/
//Создание экземпляпра класса API
const githubApi = new GithubApi();
//Создание экземпляра карточки с коммитом
const commitCard = new CommitCard({
  getFormattedDate: getFormattedDate
});

const swiperContainer = document.querySelector('.swiper-wrapper');
//Создание экземпляра списка коммитов
const commitsCardList = new CommitsCardList({
  commitCard: commitCard,
  githubApi: githubApi,
  initSwiper: initSwiper,
  swiperContainer: swiperContainer
});

//Функции
/*******************************/
//Функция рендеренга коммитов
commitsCardList.renderCommits();
