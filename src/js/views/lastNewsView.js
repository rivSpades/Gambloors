class LastNewsView {
  #generateCards(data) {
    const promoCardsHtml = data.map((el) => {
      return ` 
      <div class=" swiper-slide p-4 w-[18rem] bg-primary  rounded-lg shadow">
      <div class="swiper-img rounded-lg shadow   h-[10rem] mb-4"  data-card="${el.id}" data-url="${el.imageUrl}">
          
      </div>
      <div class="max-h-[4rem] text-center">
      <h5 class="mb-2 max-h-[2rem] text-lg font-semibold tracking-tight text-white">
      ${el.cardTitle}
    </h5>
    <p class=" font-medium min-h-[2rem] max-h-[2rem] text-white/60">
          ${el.cardDescription}
          </p>
          
      </div>
  </div>
      `;
    });

    return promoCardsHtml;
  }

  render(data) {
    const promoCard = document.getElementById('main-lastnews');
    const targetElement = document.getElementById('home-lobby');
    if (promoCard) promoCard.remove();
    const promoCards = this.#generateCards(data);
    const html = `<!--Last News Card Slider-->
     <div id="main-lastnews" class=" swiper mx-0">
     <div class="section-header mb-6 flex items-center justify-between">
     <h1 class="section-header-title  text-white text-2xl uppercase font-semibold"> Latest News </h1>

     <div class="section-header-nav flex gap-4">
   
<button type="button"  class="lastnews-nav-prev text-white bg-primary  font-medium rounded-lg text-sm p-4 text-center inline-flex items-center mr-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>
</button>

<button type="button"  class="lastnews-nav-next text-white bg-primary  font-medium rounded-lg text-sm p-4 text-center inline-flex items-center mr-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

</button>
     </div>
     </div>
    <div class="swiper-wrapper cursor-pointer">
      ${promoCards}
      
      
    </div>
    
  </div>`;
    targetElement.insertAdjacentHTML('beforeend', html);

    data.forEach((el) => {
      const targetCard = document.querySelector(
        `.swiper-img[data-card="${el.id}"]`
      );

      targetCard.style.backgroundImage = ` url('https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/${targetCard.dataset.url}')`;
      targetCard.style.backgroundSize = `100% 100%`;
    });
  }
}

export default new LastNewsView();
