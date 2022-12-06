import View from './View.js';

class PromotionsSliderView extends View {
  targetElement = document.querySelector('.main-container');

  addHandlerRender(handler) {
    handler();
  }
  addHandlerNextSliderArrow(handler) {
    this.observer(handler, '.slider-arrow--right');
  }

  addHandlerPrevSliderArrow(handler) {
    this.observer(handler, '.slider-arrow--left');
  }

  observer(handler, selector) {
    const observer = new MutationObserver(function (
      mutations,
      mutationInstance
    ) {
      const el = document.querySelector(selector);
      if (el) {
        el.addEventListener('click', handler);
        mutationInstance.disconnect();
      }
    });
    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  }

  addHandlerSlideTrackerBtns(handler) {
    const functionHandler = function (e) {
      if (e.target.classList.contains('btn-slide-tracker')) {
        //const { cardNumber: card } = e.target.dataset; //select the card dataset(data-card) from the data object
        const cardNumber = e.target.dataset.card;

        handler(cardNumber);
      }
    };
    this.observer(functionHandler, '.slide-tracker-list');
  }

  clearHtml() {
    this.targetElement.innerHTML = '';
    this.targetElement.classList.add('main-home');
  }

  resetSlideTracker() {
    const slideTrackerBtns = document.querySelectorAll('.btn-slide-tracker');
    slideTrackerBtns.forEach((tracker) =>
      tracker.classList.remove('btn-slide-tracker--selected')
    );
  }

  resetCardSlider(cardNumber) {
    const cards = document.querySelectorAll('.promotion-slider--card');
    cards.forEach((c, i) => {
      c.classList.add('hidden');

      c.style.transform = `translateX(${40 * (i - cardNumber)}%) `;
    });
  }

  selectSlideTrackerBtn(cardNumber) {
    this.resetSlideTracker();
    const targetSlideTrackerBtn = document.querySelector(
      `.btn-slide-tracker[data-card="${cardNumber}"]`
    );

    targetSlideTrackerBtn.classList.add('btn-slide-tracker--selected');
  }

  selectCard(cardNumber) {
    this.resetCardSlider(cardNumber);
    const targetCard = document.querySelector(
      `.promotion-slider--card[data-card="${cardNumber}"]`
    );

    targetCard.classList.remove('hidden');
    targetCard.firstElementChild.style.backgroundImage = `linear-gradient(
      rgba(36, 36, 35, 0.2),
      rgba(36, 36, 35, 0.4)
    ),
    url('https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/${targetCard.dataset.url}')`;
  }

  generateSlideTrackerButtons() {
    const slideTrackerContainer = document.querySelector('.slide-tracker-list');

    const cards = document.querySelectorAll('.promotion-slider--card');
    cards.forEach((_, i) => {
      slideTrackerContainer.insertAdjacentHTML(
        'beforeend',
        `<li><button class="btn-slide-tracker" data-card="${i}"></button></li>`
      );
    });
  }

  initSlider(cardNumber) {
    this.generateSlideTrackerButtons();
    this.resetSlideTracker();
    this.resetCardSlider(cardNumber);

    this.selectSlideTrackerBtn(cardNumber);
    this.selectCard(cardNumber);
  }

  generateHtml(data) {
    const promoCards = data.map((el) => {
      return ` <div
              class="promotion-slider--card"
              data-card="${el.id}"
              data-url="${el.imageUrl}"
            >
              <div class="promotion-slider--card---left"></div>
  
              <div class="promotion-slider--card---right">
                <h1 class="promotion-card-title">${el.cardTitle}</h1>
  
                <article class="promotion-card-description">
                ${el.cardDescription}
                </article>
                <div class="promotion-card-buttons">
                  <button class="btn-card btn-general btn-secondary">
                    Read More
                  </button>
                  <button class="btn-card btn-general btn-highlight">
                    Claim Offer
                  </button>
                </div>
              </div>
            </div>`;
    });

    return ` <section class="promotions centralize-content">
    <div class="promotions--slider">
<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="slider-arrow slider-arrow--left"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg> 
    ${promoCards}
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    class="slider-arrow slider-arrow--right"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
  </div>
  <div class="promotion-slider--track">
      <ul class="slide-tracker-list">
      </ul>
      </div>
    </section>
    
    
    `;
  }
}

export default new PromotionsSliderView();
