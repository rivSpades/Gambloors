import View from './View.js';

class diceView extends View {
  targetElement = document.querySelector('.main-container');

  addHandlerRender(handler) {
    handler();
  }

  addHandlerInputSlider(handler) {
    const diceSlider = document.querySelector('.dice-slider');

    diceSlider.addEventListener('input', function () {
      handler();
    });
  }

  addHandlerInputBetSize(handler) {
    const betSizeInput = document.querySelector('.dice-betsize-form-value');

    betSizeInput.addEventListener('input', function (e) {
      if (isNaN(e.data))
        return (e.target.value = e.target.value.replace(e.data, ''));

      handler();
    });
  }

  addHandlerChangeRoll() {
    const rollChangeBtn = document.querySelector('.dice-btn-rollchange');

    rollChangeBtn.addEventListener(
      'click',
      function () {
        const diceRollContainer = document.querySelector(
          '.dice-roll-container'
        );

        diceRollContainer.classList.toggle('dice-roll-container--rotate');
        const currentRoll = document.querySelector(
          '.dice-roll-container .dice-container-title'
        );
        const currentValueSlider = document.querySelector('.dice-slider').value;
        const slider = document.querySelector('.dice-slider');
        const diceRoll = document.querySelector('.dice-roll-value');

        setTimeout(function () {
          currentRoll.textContent === 'Roll Under'
            ? (currentRoll.textContent = 'Roll Over')
            : (currentRoll.textContent = 'Roll Under');

          slider.value = 50 + (50 - currentValueSlider);
          diceRoll.value = slider.value;
        }, 300);
        document.querySelector('.dice-slider-bubble').style.display = 'none';
      }.bind(this)
    );
  }

  addHandlerBtnRoll(handler) {
    const rollBtn = document.querySelector('.dice-roll-btn');

    rollBtn.addEventListener(
      'click',
      function () {
        //const value = randomInt(1, 100);
        const betSize = this.getBetSize();
        if (!betSize) return;

        handler();
      }.bind(this)
    );
  }
  getCurrentRoll() {
    return document.querySelector('.dice-roll-container .dice-container-title')
      .textContent;
  }

  getRollValue() {
    return document.querySelector('.dice-roll-value').value;
  }
  getBetSize() {
    return document.querySelector('.dice-betsize-form-value').value;
  }
  updatePayout(value) {
    document.querySelector('.dice-output-payout-value').textContent = value;
  }
  updateWincChance(value) {
    document.querySelector('.dice-output-winchance-value').textContent = value;
  }
  updateRollResult(numberGenerated) {
    const rollValue = this.getRollValue();
    const currentRoll = this.getCurrentRoll();
    const sliderBubble = document.querySelector('.dice-slider-bubble');
    const sliderBubbleValueContainer = document.querySelector(
      '.dice-slider-bubble-value'
    );
    sliderBubble.style.display = 'flex';

    getComputedStyle(sliderBubble).left === '0px'
      ? setTimeout(function () {
          sliderBubble.style.left = numberGenerated + '%';
        }, 100)
      : (sliderBubble.style.left = numberGenerated + '%');

    sliderBubbleValueContainer.textContent = numberGenerated;
    (numberGenerated < rollValue && currentRoll === 'Roll Under') ||
    (numberGenerated > rollValue && currentRoll === 'Roll Over')
      ? (sliderBubble.style.backgroundColor = 'green')
      : (sliderBubble.style.backgroundColor = 'red');
  }
  generateHtml() {
    return `  <section class="game-dice centralize-content">
    <div class="dice-container">
      <div class="dice-payout-container dice-card">
        <p class="dice-container-title">Payout on Win</p>
        <div class="dice-value-container">
          <p class="dice-output-payout-value dice-output-value">0</p>
        </div>
      </div>

      <div class="dice-roll-container dice-card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          class="dice-btn-rollchange"
        >
          <rect width="256" height="256" fill="none"></rect>
          <polyline
            points="79.8 99.7 31.8 99.7 31.8 51.7"
            fill="none"
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          ></polyline>
          <path
            d="M190.2,65.8a87.9,87.9,0,0,0-124.4,0l-34,33.9"
            fill="none"
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          ></path>
          <polyline
            points="176.2 156.3 224.2 156.3 224.2 204.3"
            fill="none"
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          ></polyline>
          <path
            d="M65.8,190.2a87.9,87.9,0,0,0,124.4,0l34-33.9"
            fill="none"
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          ></path>
        </svg>
        <p class="dice-container-title">Roll Under</p>
        <div class="dice-value-container">
          <output class="dice-output-value dice-roll-value" id="rangewindow"
            >50</output
          >
        </div>
      </div>

      <div class="dice-winchance-container dice-card">
        <p class="dice-container-title">Win Chance</p>
        <div class="dice-value-container">
          <p class="dice-output-winchance-value dice-output-value">0</p>
        </div>
      </div>

      <div class="dice-slider-container">
        <input
          type="range"
          min="1"
          max="99"
          value="50"
          class="dice-slider"
          id="myRangeWindow"
          oninput="rangewindow.value=value"
        />
        <div class="dice-slider-bubble">
          <p class="dice-slider-bubble-value">15</p>
        </div>
      </div>

      <div class="dice-betsize-container">
        <p class="dice-container-title">Bet Amount</p>
        <input
          class="dice-betsize-form-value"
          type="text"
          value="50"
          min="40"
          max="4000"
        />
      </div>
      <div class="dice-rollbtn-container">
        <button class="dice-roll-btn btn-general btn-highlight">
          Roll Dice
        </button>
      </div>
    </div>
  </section>`;
  }
}
export default new diceView();
