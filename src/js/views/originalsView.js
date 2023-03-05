class OriginalsView {
  #generateCards(data) {
    const promoCardsHtml = data.map((el) => {
      return ` 
      <a href="#dice"> 
      <div class=" swiper-slide p-6 w-[12rem] bg-primary  rounded-lg shadow">
      
      <div class="originals-img rounded-lg shadow   h-[8rem] mb-4"  data-card="${el.id}" data-url="${el.imageUrl}">
          
      </div>
      <div class="max-h-[4rem] text-center">
      <h5 class="mb-2 h-full text-lg font-semibold tracking-tight text-white">
      ${el.cardTitle}
    </h5>
    
          
      </div>
  </div>
  </a>
      `;
    });

    return promoCardsHtml;
  }

  render(data) {
    const originalsCard = document.getElementById('main-originals');
    const targetElement = document.getElementById('home-lobby');
    if (originalsCard) originalsCard.remove();
    const promoCards = this.#generateCards(data);
    const html = `<!--Originals Card Slider-->
     <div id="main-originals" class=" swiper mx-0 ">
     <div class="section-header mb-6 flex items-center justify-between">
     <h1 class="section-header-title  text-white text-2xl uppercase font-semibold"> Gambloors Originals </h1>

     <div class="section-header-nav flex gap-4">
   
<button type="button"  class="originals-nav-prev  text-white bg-primary  font-medium rounded-lg text-sm p-4 text-center inline-flex items-center mr-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>
</button>

<button type="button"  class="originals-nav-next text-white bg-primary  font-medium rounded-lg text-sm p-4 text-center inline-flex items-center mr-2">
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
        `.originals-img[data-card="${el.id}"]`
      );

      targetCard.style.backgroundImage = ` url('https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/${targetCard.dataset.url}')`;
      targetCard.style.backgroundSize = `100% 100%`;
    });
  }
}

export default new OriginalsView();
