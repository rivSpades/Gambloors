import View from './View.js';

class lobbyView extends View {
  targetElement = document.querySelector('.main-container');

  addHandlerRender(handler) {
    handler();
  }

  render(data) {
    const html = this.generateHtml(data);
    this.targetElement.insertAdjacentHTML('beforeend', html);
  }
  generateHtml(data) {
    const gameCards = data.map((el) => {
      return `<a href="#dice"><div class="game-container"  data-card="${el.id}" data-url="${el.imageUrl}">
<div class="game--card-container">
  <div class="game-card"></div>
</div>
<div class="game-description-container">
  <p class="game-description--text">${el.cardTitle}</p>
</div>
</div>
</a>`;
    });

    return `
    <section class="lobby centralize-content">
    <div class="games-section">
  <div class="games-header">
    <p class="games--header-title">Gambloors Originals</p>
    <div class="games-header--arrows">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="slider-arrow games-arrow"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="slider-arrow games-arrow"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  </div>
  ${gameCards}
  
  </div>
  </section>
`;
  }
}
export default new lobbyView();
