class diceView {
  targetElement = document.querySelector('main');

  render() {
    const html = `<section id="game-dice" class="w-full mt-28">
    <div class="dice-container md:bg-primary/70 md:border md:border-secondary select-none py-4 md:p-24 px-1 grid grid-cols-3 grid-rows-3 gap-x-1 gap-y-24 text-white">
      <div
        class="dice-payout-container  border border-primary md:border-0  w-full shadow-sm  px-4 pt-7 pb-4 text-center flex flex-col gap-4"
      >
        <p class="text-[#cdcdcd] text-lg font-medium md:text-xl ">Payout on Win</p>
        <p class="dice-payout-value text-[#cdcdcd]  p-4 w-full  text-lg font-semibold ">0</p>
      </div>
      <div
      class="dice-roll-container border border-primary md:border-0  w-full cursor-pointer shadow-sm hover:bg-primary md:hover:bg-[#363636]/30  px-4 pb-4 pt-7 text-center flex flex-col gap-4 relative"
    >
      
        <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              class="w-6 absolute top-0 right-0 -translate-x-1/2  pb-8 pt-1"
            >
              <rect width="256" height="256" fill="none"></rect>
              <polyline
                points="79.8 99.7 31.8 99.7 31.8 51.7"
                fill="none"
                stroke="#cdcdcd"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
              ></polyline>
              <path
                d="M190.2,65.8a87.9,87.9,0,0,0-124.4,0l-34,33.9"
                fill="none"
                stroke="#cdcdcd"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
              ></path>
              <polyline
                points="176.2 156.3 224.2 156.3 224.2 204.3"
                fill="none"
                stroke="#cdcdcd"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
              ></polyline>
              <path
                d="M65.8,190.2a87.9,87.9,0,0,0,124.4,0l34-33.9"
                fill="none"
                stroke="#cdcdcd"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
              ></path>
            </svg>
            <p class="dice-roll-title text-[#cdcdcd] text-lg font-medium md:text-xl ">Roll Under</p>
            <p id="rangeValueContainer" class="dice-roll-value text-[#cdcdcd]  p-4 w-full     font-semibold text-3xl ">50</p>
    </div>
    <div
    class="dice-winchance-container border border-primary md:border-0  w-full shadow-sm  px-4 pt-7 pb-4 text-center flex flex-col gap-4"
  >
    <p class="text-[#cdcdcd] text-lg font-medium md:text-xl ">Win Chance</p>
    <p class="dice-winchance-value text-[#cdcdcd]  p-4 w-full  font-semibold text-lg" >50%</p>
    
  </div>

    <div class="px-12 md:px-56 col-start-1 col-end-4 self-end relative">
      <datalist id="dice-range-list" class="list-range-numbers flex justify-between ml-[1.5rem] mb-4 ">
        <option value="0" label="0" class="font-semibold text-3xl text-[#cdcdcd]"></option>
        <option value="25" label="25" class="font-semibold text-3xl text-[#cdcdcd]" ></option>
        <option value="50" label="50" class="font-semibold text-3xl text-[#cdcdcd]"></option>
        <option value="75" label="75" class="font-semibold text-3xl text-[#cdcdcd]"></option>
        <option value="100" label="100" class="font-semibold text-3xl text-[#cdcdcd]"></option>
      </datalist>

     
     
      <input  class="dice-range w-full outline-1 rounded-2xl border-[1.5rem]   border-primary md:border-secondary" type="range" min="1" max="99" value="50" step="1" list="dice-range-list">
      
    </div>
  

  

    <div class="px-12 col-start-1 col-end-4 self-end md:col-start-2 md:col-end-3 ">
      <p class="text-[#cdcdcd] text-lg font-medium md:text-xl mb-4  ">Bet Amount</p>
            <input type="text"  value="0"  autocomplete="off"   class="dice-betAmount bg-primary md:bg-secondary border border-secondary md:border-primary text-[#cdcdcd] text-lg font-semibold rounded-t-lg w-full  p-2.5 mb-1">

            <ul class="text-sm font-medium text-center  divide-x divide-secondary  shadow flex" >
              <li class="w-full">
                  <a href="#" class="inline-block w-full p-2 text-[#cdcdcd] bg-secondary md:bg-primary/70  hover:bg-primary md:hover:bg-[#363636]/30  rounded-bl-lg " >1/2</a>
              </li>
              <li class="w-full">
                <a href="#" class="inline-block w-full p-2 text-[#cdcdcd] bg-secondary md:bg-primary/70  hover:bg-primary md:hover:bg-[#363636]/30  border border-primary rounded-bl-lg " >x2</a>
              </li>
              <li class="w-full">
                <a href="#" class="inline-block w-full p-2 text-[#cdcdcd] bg-secondary md:bg-primary/70  hover:bg-primary md:hover:bg-[#363636]/30  border border-primary rounded-bl-lg " >max</a>
              </li>
          </ul>
          
          </div>
          <div class="px-12 col-start-1 col-end-4 self-end md:col-start-2 md:col-end-3">
            <button type="button" class=" w-full   text-primary bg-[#9bed9a]/80 hover:bg-[#9bed9a]  font-semibold rounded-lg text-lg p-2.5 mr-2 mb-2">BET</button>
          </div>

  </section>`;
    this.targetElement.insertAdjacentHTML('beforeend', html);
  }

  addHandlerInputRange(handler) {
    const diceRange = document.querySelector('.dice-range');
    const rangeValueContainer = document.getElementById('rangeValueContainer');
    diceRange.addEventListener('input', function () {
      rangeValueContainer.textContent = diceRange.value;

      diceRange.style.background = `linear-gradient(
        to right,
        rgba(155, 237, 154, 0.5) 0%,
        rgba(155, 237, 154, 0.5) ${diceRange.value}%,
        rgba(255, 153, 153, 0.5) ${diceRange.value}%,
        rgba(255, 153, 153, 0.5) 100%
      )`;

      handler();
    });
  }

  addHandlerInputBetSize(handler) {
    const betSize = document.querySelector('.dice-betAmount');

    betSize.addEventListener('input', function (e) {
      if (isNaN(e.data))
        return (e.target.value = e.target.value.replace(e.data, ''));

      handler();
    });
  }

  updatePayout(value) {
    document.querySelector('.dice-payout-value').textContent = value;
  }
  updateWincChance(value) {
    document.querySelector('.dice-winchance-value').textContent = value + '%';
  }

  getRollType() {
    return document.querySelector('.dice-roll-title').textContent;
  }

  getRollValue() {
    return document.querySelector('.dice-roll-value').textContent;
  }

  getBetSize() {
    return document.querySelector('.dice-betAmount').value;
  }

  addHandlerChangeRoll() {
    /*
    const rollChangeContainer = document.querySelector('.dice-roll-container');

    rollChangeContainer.addEventListener(
      'click',
      function () {
        rollChangeContainer.classList.toggle('dice-roll-container--rotate');
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
    */
  }

  /* addHandlerBtnRoll(handler) {
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
  }*/
}
export default new diceView();
