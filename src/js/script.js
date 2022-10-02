'use strict';

/**************************/
/* SIDE BAR */
/**************************/
const sidebarContainer = document.querySelector('.side-bar-btn-container');

sidebarContainer.addEventListener('click', function (e) {
  const sidebarBtnClose = document.querySelector('.side-bar-btn--close');
  const sidebarBtnOpen = document.querySelector('.side-bar-btn--open');
  const sideNav = document.querySelector('.sider');
  const main = document.querySelector('main');
  const footer = document.querySelector('.footer-container');

  sidebarBtnClose.classList.toggle('hidden');
  sidebarBtnOpen.classList.toggle('hidden');
  sideNav.classList.toggle('hide-sidebar');
  sideNav.classList.toggle('show-sidebar');
  main.classList.toggle('slide-out');
  main.classList.toggle('slide-in');
  footer.classList.toggle('slide-out--footer');
  footer.classList.toggle('slide-in');
});

/**************************/
/* PROMOTION SLIDER */
/**************************/

const promotionSlider = function () {
  const cards = document.querySelectorAll('.promotion-slider--card');
  let currentCard = 0;
  const totalCards = cards.length;

  const arrowLeft = document.querySelector('.slider-arrow--left');
  const arrowRight = document.querySelector('.slider-arrow--right');

  const slideTrackerContainer = document.querySelector('.slide-tracker-list');

  const selectTrackerBtn = function (card) {
    const slideTrackerBtns = document.querySelectorAll('.btn-slide-tracker');
    slideTrackerBtns.forEach((tracker) =>
      tracker.classList.remove('btn-slide-tracker--selected')
    );

    document
      .querySelector(`.btn-slide-tracker[data-card="${card}"]`)
      .classList.add('btn-slide-tracker--selected');
  };

  const selectCard = function (card) {
    cards.forEach((c, i) => {
      c.classList.add('hidden');

      c.style.transform = `translateX(${40 * (i - card)}%) `;
      console.log(c);
    });

    const cardSelected = document.querySelector(
      `.promotion-slider--card[data-card="${card}"]`
    );

    cardSelected.classList.remove('hidden');

    cardSelected.firstElementChild.style.backgroundImage = `linear-gradient(
      rgba(36, 36, 35, 0.2),
      rgba(36, 36, 35, 0.4)
    ),
    url('https://www.bitsler.com/static/img/sliders/${cardSelected.dataset.url}')`;
  };

  const nextCard = function () {
    if (currentCard === totalCards - 1) {
      currentCard = 0; //renicia
    } else {
      currentCard++;
    }

    selectCard(currentCard);
    selectTrackerBtn(currentCard);
  };

  const prevCard = function () {
    if (currentCard === 0) {
      currentCard = totalCards - 1;
    } else {
      currentCard--;
    }

    selectCard(currentCard);
    selectTrackerBtn(currentCard);
  };

  const init = function () {
    cards.forEach((_, i) => {
      slideTrackerContainer.insertAdjacentHTML(
        'beforeend',
        `<li><button class="btn-slide-tracker" data-card="${i}"></button></li>`
      );
    });

    selectCard(0);

    selectTrackerBtn(0);
  };
  init();

  arrowRight.addEventListener('click', nextCard);
  arrowLeft.addEventListener('click', prevCard);

  slideTrackerContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-slide-tracker')) {
      const { card } = e.target.dataset;
      selectCard(card);
      selectTrackerBtn(card);
    }
  });
};

promotionSlider();
