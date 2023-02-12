class PromoCardSliderView {
  targetElement = document.querySelector('main');

  #generateCards(data) {
    const promoCardsHtml = data.map((el) => {
      return ` <div
        class="swiper-slide md:w-[28rem] md:min-h-[12rem] md:max-h-[12rem] xxl:w-[37rem] xxl:min-h-[16rem] xxl:max-h-[16rem] bg-no-repeat bg-transparent border border-primary rounded-lg shadow"
        data-card="${el.id}" data-url="${el.imageUrl}">
      >
        <div class=" p-5 flex flex-col xxl:gap-8 ">
          <h5 class="mb-2 max-h-[2rem] text-2xl font-semibold tracking-tight text-white">
            ${el.cardTitle}
          </h5>

          <p class="mb-3 font-medium min-h-[3rem] max-h-[3rem] text-white/60">
          ${el.cardDescription}
          </p>
          <a
            href="#"
            class="inline-flex items-center  font-medium text-white/60 hover:text-highlight hover:underline"
          >
            Learn more
            <svg
              class="w-6 h-6 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      `;
    });

    return promoCardsHtml;
  }

  render(data) {
    const promoCard = document.getElementById('main-promocards');
    if (promoCard) promoCard.remove();
    const promoCards = this.#generateCards(data);
    const html = `<!--Promo Card Slider-->
     <section id="main-promocards" class=" swiper">
    <div class="swiper-wrapper cursor-grab">
      ${promoCards}
      
      
    </div>
    <div class="swiper-button-next text-white/40"></div>
    <div class="swiper-button-prev  text-white/40""></div>
  </section>`;
    this.targetElement.insertAdjacentHTML('beforeend', html);

    data.forEach((el) => {
      const targetCard = document.querySelector(
        `.swiper-slide[data-card="${el.id}"]`
      );
      targetCard.style.backgroundImage = ` url('https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/${targetCard.dataset.url}')`;
      targetCard.style.backgroundSize = `100% 100%`;
    });
  }
}

export default new PromoCardSliderView();
