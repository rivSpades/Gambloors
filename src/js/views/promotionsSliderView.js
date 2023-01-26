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
    slideTrackerBtns.forEach((tracker) => {
      //tracker.classList.remove('btn-slide-tracker--selected')
      tracker.classList.remove('bg-white');
      tracker.classList.add('bg-white/30');
    });
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
    targetSlideTrackerBtn.classList.remove('bg-white/30');
    targetSlideTrackerBtn.classList.add('bg-white');
  }

  selectCard(cardNumber) {
    this.resetCardSlider(cardNumber);
    const targetCard = document.querySelector(
      `.promotion-slider--card[data-card="${cardNumber}"]`
    );

    targetCard.classList.remove('hidden');
    targetCard.style.backgroundImage = `linear-gradient(
      rgba(36, 36, 35, 0.2),
      rgba(36, 36, 35, 0.4)
    ),
    url('https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/${targetCard.dataset.url}')`;
  }

  generateSlideTrackerButtons() {
    const slideTrackerContainer = document.querySelector('.slide-tracker-list');

    const cards = document.querySelectorAll('.promotion-slider--card');
    cards.forEach((_, i) => {
      /* slideTrackerContainer.insertAdjacentHTML(
        'beforeend',
        `<li><button class="btn-slide-tracker" data-card="${i}"></button></li>`
      );*/
      slideTrackerContainer.insertAdjacentHTML(
        'beforeend',
        `<button
        type="button"
        class="w-3 h-3 rounded-full hidden md:block btn-slide-tracker"
        data-card="${i}"
      ></button>`
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
      /*  return ` <div
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
            </div>`;*/

      return ` <div
            class="duration-700 ease-in-out h-full md:rounded-xl promotion-slider--card"
            data-card="${el.id}" data-url="${el.imageUrl}"></div>`;
    });

    /*return` <section class="promotions centralize-content">
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
    
    
    `;*/

    return ` <section
    id="indicators-carousel"
    class="relative w-full md:w-[70vw] h-[calc(100vh-6rem)] md:h-[50vh] md:mr-auto md:ml-auto md:mt-20 md:rounded-xl"
    data-carousel="static"
  >
    <!-- Carousel wrapper -->
    <div class="relative md:rounded-xl w-full h-[inherit]">
    
    ${promoCards}

    <div
          class="slide-tracker-list absolute flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
        >

        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 left-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none slider-arrow--left"
        >
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none slider-arrow--right"
        >
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </section>
    `;
  }
}

export default new PromotionsSliderView();
