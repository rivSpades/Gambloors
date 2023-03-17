export default class GamesView {
  sectionName = '';

  #generateCards(data) {
    const cardsHtml = data.map((el) => {
      return ` 
      
      <div class="swiper-slide main-games-cards-container ">
      
      <div class="swiper-img main-games-card "  data-card="${el.id}" data-url="${el.imageUrl}">
      <a class="main-games-card-a" href="#">
      <img class="main-games-card-img" src="${el.imageUrl}" alt="casino-img">
      <span class="main-games-card-text">${el.cardTitle}</span>
      </a>
      </div>
      
  </div>
  
      `;
    });

    return cardsHtml;
  }

  render(data) {
    const card = document.getElementById(`main-${this.sectionName}`);
    const targetElement = document.getElementById('home-lobby');
    if (card) card.remove();
    const gameCards = this.#generateCards(data);
    const html = `
     <div id="main-${this.sectionName}" class="swiper-${this.sectionName} mx-0 overflow-hidden">
     <div class="main-games-container-header">
     <h1 class="main-games-container-header-title">${this.sectionName}</h1>

     <div class="section-header-nav">
   
<button type="button"  class="${this.sectionName}-nav-prev main-games-container-header-nav-btn ">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="main-games-container-header-nav-btn-svg">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>
</button>

<button type="button"  class="${this.sectionName}-nav-next main-games-container-header-nav-btn">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="main-games-container-header-nav-btn-svg">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

</button>
     </div>
     </div>
    <div class="swiper-wrapper cursor-pointer ">
      ${gameCards}
      
      
    </div>
    
  </div>`;
    targetElement.insertAdjacentHTML('beforeend', html);
  }
}
