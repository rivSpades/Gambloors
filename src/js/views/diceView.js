class diceView {
  targetElement = document.querySelector('main');

  render(data) {
    const depositBtn = `<!--Deposit Button-->
    <button type="button" class="nav-register-btn dice-deposit-btn btn-highlight flex-grow sm:grow-0 ">
    Deposit</button>
    `;
    const playforrealBtn = `<!--Play For Real Button-->
    <button type="button"  class="nav-register-btn dice-playforreal-btn btn-highlight flex-grow sm:grow-0 ">
    Play for real</button>
    `;

    const walletDetails = data
      ? Object.values(data)
          .map(
            (balance, i) =>
              `<li  class="dice-wallet-value-container flex  justify-between group hover:bg-accent  rounded-lg p-4">
              <div class="dice-input dice-wallet-value group-hover:bg-accent  ">${balance}</div>
              <span class="font-semibold w-1/4 ">${
                Object.keys(data)[i]
              }</span></li>`
          )
          .join('')
      : '';

    const selectWallet = data
      ? Object.values(data)
          .map(
            (balance, i) =>
              `<div class="dice-input dice-wallet-value ">${balance}</div>
      
          <div class="flex gap-2">
          <span class="font-semibold">${Object.keys(data)[i]}</span>
          <svg class="dice-wallet-svg-close w-4 ml-1 h-auto" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 1L8 8L1 1" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg class="dice-wallet-svg-open hidden w-4 ml-1 h-auto" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8L8 1L15 8" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </div>`
          )
          .reduce((prevBalance, currentBalance) =>
            currentBalance > prevBalance ? currentBalance : prevBalance
          )
      : `<div class="dice-input dice-wallet-value ">100.000000</div>
      
      <div class="flex gap-2">
      <span class="font-semibold">fun</span>
      <svg class="w-4 ml-1 h-auto" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 1L8 8L1 1" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  </div>`;

    const walletContainer = `<!--Wallet Container-->
    <div class="dice-wallet-container relative">


    <div class="dice-input-container  w-64 cursor-pointer flex-grow sm:grow-0  ">

    ${selectWallet}

  </div>


     <!--Wallet Dropdown-->
     <ul class="dice-wallet-dropdown hidden dice-input-container  absolute w-64  cursor-pointer flex-grow sm:grow-0 flex-col ">
    ${walletDetails}
    </ul>
     
  </div> <!--/Wallet Container-->
  `;

    const settings = `
  <!--Settings-->
  <div class="dice-settings-container text-primaryWhite flex gap-6 items-center">
  <svg xmlns="http://www.w3.org/2000/svg" class="dice-pvfair-btn w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 256 256"><path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm20,76a16,16,0,1,1,16-16A16,16,0,0,1,180,92Z"></path></svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="dice-livestats-btn w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 256 256"><path d="M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z"></path></svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 256 256"><path d="M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path></svg>
  </div>
  `;

    const html = `<section id="game-dice" class="w-full  ">
    <div class="dice-container lg:bg-primary lg:border lg:border-accent select-none  lg:p-12    grid  grid-cols-3 grid-rows-12 gap-x-0  gap-y-8 lg:gap-y-12 items-start text-primaryWhite ">

    <!--Row 1-->
    
    
    <div class="dice-grid-item justify-self-start  ">

    
    

  ${walletContainer}

   ${data ? depositBtn : playforrealBtn}

    </div>

    
    
    <!--Row 2-->
    
    <div class="dice-grid-item bg-primary py-6  justify-between ">

    <!--Manual/Auto-->

    <ul class="dice-manual-auto-container flex flex-between  gap-2  rounded-lg p-2 bg-secondary">
    <li class="">
        <p class="dice-manual dice-manual-auto-a dice-manual-auto-a-active">manual</a>
    </li>
    <li class="">
        <p  class="dice-auto dice-manual-auto-a">auto</a>
    </li>
    
</ul>


${data ? settings : ''}

</div>


<!--Row 3-->
<div class="dice-grid-item lg:px-56 justify-center">

<!--Dice History-->
    <div class="dice-history flex justify-center text-xl text-center">
    <div class="invisible">12.00</div>
    </div>
    </div>

    <!--Row 4-->
    <div class="px-6 lg:px-56 col-start-1 col-end-4 self-start  ">

    <!--Bubble container-->
  <div class="border-[1.5rem] border-transparent relative font-medium text-xl">
    <div class="dice-range-bubble  invisible w-8 h-8 flex p-6 -left-6  justify-center absolute -top-8   ">
      <p class="dice-range-bubble-value -rotate-45 self-center ">15</p>
    
    </div>
    </div>
      

     
    <!--Input Range -->
      <input id="rangeValueContainer"  class="dice-range w-full  rounded-lg" type="range" min="1.00" max="98.00" value="50.00" step="0.01" list="dice-range-list">
      <datalist id="dice-range-list" class="text-2xl rounded-sm text-primaryWhite list-range-numbers flex  text-center w-full  justify-between item-center    ">
        <option value="0" label="0" class="font-medium"></option>
        <option value="25" label="25" class="font-medium " ></option>
        <option value="50" label="50" class="font-medium "></option>
        <option value="75" label="75" class="font-medium "></option>
        <option value="100" label="100" class="font-medium "></option>
      </datalist>
    </div>

    <!--Row 5-->
    <div class="dice-grid-item  lg:w-1/2 justify-center  "  >
    

    <div class="dice-betamount-container flex-grow   ">
      <p class="dice-input-title">Bet Amount</p>
      <div class=" dice-input-container w-full  ">
            <input type="number"  value="10"  autocomplete="off"   class="dice-betAmount dice-input ">
            <span class="font-semibold">fun</span>
</div>
           
   </div>       

          <div class="dice-payout-container flex-grow  ">
          <p class="dice-input-title ">Payout on Win</p>
          <div class=" dice-input-container w-full ">
          <input type="number"   value="0" autocomplete="off" disabled   class="dice-payout dice-input ">
          <span class="font-semibold">fun</span>
          </div>
          </div>
          </div>

          <!--Row 6-->
          <div class="dice-grid-item  lg:w-1/2">

          <!--Control Betsize Buttons-->

          <button type="button" class="dice-control-btn dice-minbet-btn">Min</button>
          <button type="button" class="dice-control-btn dice-halfbet-btn">/2</button>
          <button type="button" class="dice-control-btn dice-doublebet-btn">x2</button>
          </div>

  <!--Row 7-->
    <div class=" dice-grid-item  justify-center lg:gap-24 ">

    <div class="dice-multiplier-container   ">
    <p class="dice-input-title">Multiplier</p>
    <div class=" dice-input-container sm:w-52">
      <input type="number"  value="1.9600"  autocomplete="off"   class="dice-multiplier dice-input h-16  ">
      <span class="font-semibold self-center">x</span>
      </div>
      
    </div>

    <!--Roll Buttons Container-->

    <div class="dice-roll-container  flex-grow lg:flex-grow-0  ">
    <p class="dice-input-title text-center ">Roll</p>
          <div class="  cursor-pointer">
          
          <div class="flex flex-col  gap-4 dice-rolltype-container   " >
          
          
          <button type="button" class="dice-rolltype-over w-36 dice-control-btn mx-auto ">Over 50.00</button>
          <button type="button" class="dice-rolltype-under w-36 dice-control-btn dice-control-btn-active mx-auto ">Under 50.00</button>
          </div>
          
          </div>
          </div>
          <div class="dice-winchance-container  ">
          <p class="dice-input-title">Win Chance</p>
          <div class=" dice-input-container sm:w-52 ">
            <input type="number"  value="50.00"  autocomplete="off"   class="dice-winchance dice-input    h-16 ">
          <span class="font-semibold self-center">%</span>
            </div>
            
          </div>
        </div>


        <!--Row 8-->

          <div class="col-start-2 col-end-3  ">
          
        </div>


  <!--Row 9-->
          <div class="dice-grid-item   2xl:col-start-2 2xl:col-end-3  sm:w-2/3 2xl:w-full ">
          <button type="button" class="dice-control-winchance-btn dice-control-winchance-decrease-btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"  fill="currentColor" viewBox="0 0 256 256"><path d="M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"></path></svg>
        </button>
          <!--Roll Dice Button-->

            <button type="button" class=" w-full dice-bet-btn   nav-register-btn btn-highlight   ">roll dice</button>
            <button type="button" class="dice-control-winchance-btn dice-control-winchance-increase-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"  fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
            <span class="sr-only">Icon description</span>
          </button>
          </div>


      




</div> <!--div grid container-->

  </section>`;
    this.targetElement.insertAdjacentHTML('beforeend', html);
  }

  renderAutoBet() {
    const html = `    <!--AUTO BET-->
          
    <!--Row 10-->
    <div class="dice-grid-item dice-autobet    lg:w-1/2  ">

    <div class="dice-numberbets-container flex-grow   ">
    <p class="dice-input-title">Number of bets</p>
    <div class=" dice-input-container w-full  ">
          <input type="number"  value="5"  autocomplete="off"   class="dice-numberbets dice-input ">
          <span class="invisible font-semibold">bets</span>
          
</div>
         
 </div>      
    
 <div class="dice-maxbetamount-container flex-grow   ">
 <p class="dice-input-title">Max Bet Amount</p>
 <div class=" dice-input-container w-full  ">
       <input type="number"  value="100.000"  autocomplete="off"   class="dice-maxbetamount dice-input ">
       <span class="font-semibold">fun</span>
</div>
      
</div>      

</div>

<!--Row 11-->
<div class="dice-grid-item dice-autobet     lg:w-1/2">

<div class="dice-on-container">
<p class="dice-input-title uppercase">On Loss</p>
<div class="dice-radio-container ">
<input id="radio-onloss-changebet" type="radio" value="" name="radio-onloss" class="w-6 h-6 " checked>
<label for="radio-onloss-changebet" class="dice-input-title   ">Increase bet by</label>
</div>

<div class=" dice-input-container w-full  ">
    <input type="number"  value="50"  autocomplete="off"   class="dice-changebet dice-changebet-onloss dice-input ">
    <span class="font-semibold">%</span>   
</div>


<div class="dice-radio-container ">
<input id="radio-onloss-basebet" type="radio" value="" name="radio-onloss" class="w-6 h-6">
<label for="radio-onloss-basebet" class="dice-input-title">Reset to base bet</label>
</div>

<div class="dice-radio-container">
<input id="radio-onloss-stopautobet" type="radio" value="" name="radio-onloss" class="w-6 h-6 ">
<label for="radio-onloss-stopautobet" class="dice-input-title   ">Stop Autobet</label>
</div>

</div>      

<div class="dice-on-container  ">
<p class="dice-input-title uppercase">On Win</p>
<div class="dice-radio-container ">
<input id="radio-onwin-changebet" type="radio" value="" name="radio-onwin" class="w-6 h-6" checked>
<label for="radio-onwin-changebet" class="dice-input-title  ">Increase bet by</label>
</div>

<div class=" dice-input-container w-full ">
 <input type="number"  value="50"  autocomplete="off"   class="dice-changebet dice-changebet-onwin dice-input ">
 <span class="font-semibold">%</span>   
</div>

<div class="dice-radio-container ">
<input id="radio-onwin-basebet" type="radio" value="" name="radio-onwin" class="w-6 h-6 ">
<label for="radio-onwin-basebet" class="dice-input-title   ">Reset to base bet</label>
</div>

<div class="dice-radio-container">
<input id="radio-onwin-stopautobet" type="radio" value="" name="radio-onwin" class="w-6 h-6 ">
<label for="radio-onwin-stopautobet" class="dice-input-title   ">Stop Autobet</label>
</div>

</div>               
</div>


<!--Row 12-->
<div class="dice-grid-item dice-autobet  lg:w-1/2">

</div>

<!--Row 13-->
<div class="dice-grid-item flex-col dice-autobet lg:w-1/2">
<p class="dice-input-title uppercase  ">Stop If </p>
<div class="flex flex-col sm:flex-row gap-6">
<div class="dice-on-container">

    <p class="dice-input-title">Balance Below</p>
    <div class=" dice-input-container w-full  ">
          <input type="number"  value="0"  autocomplete="off"   class="dice-balancebelow dice-input ">
          <span class="font-semibold">fun</span>    
</div>
         
 </div>      

 <div class="dice-on-container  ">
 <p class="dice-input-title">Balance Above</p>
 <div class=" dice-input-container w-full   ">
       <input type="number"  value="100.000"  autocomplete="off"   class="dice-balanceabove dice-input ">
       <span class="font-semibold">fun</span>    
</div>
      
</div>      
</div>
</div>`;

    const diceContainer = document.querySelector('.dice-container');
    diceContainer.insertAdjacentHTML('beforeend', html);
  }

  renderBetBtn(type) {
    if (type === 'auto') {
      const diceBetBtn = document.querySelector('.dice-bet-btn');
      //diceBetBtn.classList.remove('dice-bet-btn');
      diceBetBtn.classList.add('dice-autobet-btn');
      diceBetBtn.textContent = 'Start Autobet';
    } else {
      const autoBetBtn = document.querySelector('.dice-autobet-btn');
      // autoBetBtn.classList.add('dice-bet-btn');
      autoBetBtn.classList.remove('dice-autobet-btn');
      autoBetBtn.textContent = 'Roll Dice';
    }
  }

  addHandlerManualAuto(handler) {
    const manualAutoContainer = document.querySelector(
      '.dice-manual-auto-container'
    );
    manualAutoContainer.addEventListener('click', function (e) {
      if (
        e.target.classList.contains('dice-manual-auto-a-active') ||
        !e.target.classList.contains('dice-manual-auto-a')
      )
        return;

      const manualBtn = document.querySelector('.dice-manual');
      const autoBtn = document.querySelector('.dice-auto');
      manualBtn.classList.toggle('dice-manual-auto-a-active');
      autoBtn.classList.toggle('dice-manual-auto-a-active');
      if (e.target.classList.contains('dice-auto')) handler('auto');
      else handler('manual');
    });
  }

  addHandlerCheckPvFair(handler) {
    const dicePvBtn = document.querySelector('.dice-pvfair-btn');

    dicePvBtn.addEventListener('click', function () {
      handler();
    });
  }

  addHandlerLiveStats(handler) {
    const liveStatsBtn = document.querySelector('.dice-livestats-btn');
    liveStatsBtn.addEventListener('click', function () {
      handler();
    });
  }

  addHandlerInputRange(handler) {
    const diceRange = document.querySelector('.dice-range');

    diceRange.addEventListener(
      'input',
      function () {
        this.updateRollValue(diceRange.value);
        this.changeRangeBackground();
        handler();
      }.bind(this)
    );
  }

  changeRangeBackground() {
    const diceRange = document.getElementById('rangeValueContainer');
    const currentRoll = this.getRollType();

    currentRoll === 'Roll Under'
      ? (diceRange.style.background = `linear-gradient(
        to right,
        rgba(155, 237, 154, 0.5) 0%,
        rgba(155, 237, 154, 0.5) ${diceRange.value}%,
        rgba(255, 153, 153, 0.5) ${diceRange.value}%,
        rgba(255, 153, 153, 0.5) 100%
      )`)
      : (diceRange.style.background = `linear-gradient(
          to right,
          rgba(255, 153, 153, 0.5) 0%,
          rgba(255, 153, 153, 0.5) ${diceRange.value}%,
          rgba(155, 237, 154, 0.5) ${diceRange.value}%,
          rgba(155, 237, 154, 0.5) 100%
        )`);
  }
  addHandlerInputBetSize(handler) {
    const betSize = document.querySelector('.dice-betAmount');

    betSize.addEventListener('input', function (e) {
      if (isNaN(e.target.value))
        return (e.target.value = e.target.value.replace(e.data, ''));

      handler();
    });
  }

  addHandlerInputMultiplier(handler) {
    const multiplier = document.querySelector('.dice-multiplier');

    multiplier.addEventListener('input', function () {
      handler();
    });
  }

  addHandlerInputWinChance(handler) {
    const winChance = document.querySelector('.dice-winchance');

    winChance.addEventListener('input', function () {
      handler();
    });
  }

  addHandlerWalletContainer() {
    const walletContainer = document.querySelector('.dice-wallet-container');
    const walletDropdown = document.querySelector('.dice-wallet-dropdown');
    const svgOpen = document.querySelector('.dice-wallet-svg-open');
    const svgClose = document.querySelector('.dice-wallet-svg-close');
    const body = document.querySelector('body');
    walletContainer.addEventListener('click', function (e) {
      if (
        e.target.parentElement.classList.contains(
          'dice-wallet-value-container'
        ) ||
        e.target.classList.contains('dice-wallet-dropdown') ||
        walletDropdown.contains(e.target)
      )
        return;
      walletDropdown.classList.toggle('hidden');
      svgOpen.classList.toggle('hidden');
      svgClose.classList.toggle('hidden');
      body.classList.toggle('pointer-events-none');
      walletDropdown.classList.add('pointer-events-auto');
      walletContainer.classList.add('pointer-events-auto');
    });

    document.addEventListener('click', function (e) {
      if (
        walletDropdown.classList.contains('hidden') ||
        walletContainer.contains(e.target) ||
        e.target.classList.contains('dice-wallet-dropdown')
      )
        return;
      walletDropdown.classList.add('hidden');
      svgOpen.classList.toggle('hidden');
      svgClose.classList.toggle('hidden');
      body.classList.remove('pointer-events-none');
      walletDropdown.classList.remove('pointer-events-auto');
      walletContainer.classList.remove('pointer-events-auto');
    });
  }

  updatePayout(value) {
    document.querySelector('.dice-payout').value = value;
  }
  updateMultiplier(value) {
    document.querySelector('.dice-multiplier').value = value;
  }
  updateWinChance(value) {
    document.querySelector('.dice-winchance').value = value;
  }
  updateRollValue(value) {
    document.getElementById('rangeValueContainer').value = value;
    const currentRoll = this.getRollType();
    document.querySelector('.dice-rolltype-under').textContent = `Under ${
      currentRoll === 'Roll Under'
        ? Number(value).toFixed(2)
        : (100.0 - value).toFixed(2)
    }`;
    document.querySelector('.dice-rolltype-over').textContent = `Over ${
      currentRoll === 'Roll Over'
        ? Number(value).toFixed(2)
        : (100.0 - value).toFixed(2)
    }`;

    //document.querySelector('.dice-range').step = 0.01;

    //document.querySelector('.dice-range').value = value;

    //document.querySelector('.dice-range').step = 1.0;

    this.changeRangeBackground();
  }
  updateBetSize(value) {
    document.querySelector('.dice-betAmount').value = value;
  }
  updateWallet(value) {
    const walletValue = document.querySelector('.dice-wallet-value');
    walletValue.textContent = value;
  }
  getRollType() {
    const rolltypeUnder = document.querySelector('.dice-rolltype-under');
    return rolltypeUnder.classList.contains('dice-control-btn-active')
      ? 'Roll Under'
      : 'Roll Over';
    //return document.querySelector('.dice-roll-title').textContent;
  }

  getRollValue() {
    return document.querySelector('.dice-range').value;
  }

  getBetSize() {
    return document.querySelector('.dice-betAmount').value;
  }
  getMultiplier() {
    return document.querySelector('.dice-multiplier').value;
  }

  getWinChance() {
    return document.querySelector('.dice-winchance').value;
  }
  getOnWinBetSize() {
    return document.querySelector('.dice-changebet-onwin').value;
  }
  getOnLossBetSize() {
    return document.querySelector('.dice-changebet-onloss').value;
  }
  addHandlerChangeRoll() {
    const rollTypeContainer = document.querySelector(
      '.dice-rolltype-container'
    );

    rollTypeContainer.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('dice-control-btn')) {
          if (e.target.classList.contains('dice-control-btn-active')) return;

          const rolltypeUnder = document.querySelector('.dice-rolltype-under');
          const rolltypeOver = document.querySelector('.dice-rolltype-over');
          rolltypeUnder.classList.toggle('dice-control-btn-active');
          rolltypeOver.classList.toggle('dice-control-btn-active');
          const dicerange = document.getElementById('rangeValueContainer');

          const rangeBubble = document.querySelector('.dice-range-bubble');
          const calcRollNumber = 50 + (50 - dicerange.value);

          this.updateRollValue(calcRollNumber);

          this.changeRangeBackground();

          rangeBubble.classList.add('invisible');
        }
      }.bind(this)
    );
  }

  addHandlerBtnBet(handler) {
    const betBtn = document.querySelector('.dice-bet-btn');

    betBtn.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('dice-autobet-btn')) return;
        console.log('entra no bet');
        this.disableBetBtn(betBtn);

        const betSize = this.getBetSize();
        if (!betSize) return;

        handler();
      }.bind(this)
    );
  }

  addHandlerBtnAutoBet(handler) {
    const autoBetBtn = document.querySelector('.dice-bet-btn');

    autoBetBtn.addEventListener(
      'click',
      function (e) {
        if (!e.target.classList.contains('dice-autobet-btn')) return;
        console.log('entra no auto bet');
        const betSize = this.getBetSize();
        if (!betSize) return;

        const numberBets = document.querySelector('.dice-numberbets').value;
        const maxBetAmount = document.querySelector('.dice-maxbetamount').value;
        const balanceBelow = document.querySelector('.dice-balancebelow').value;
        const balanceAbove = document.querySelector('.dice-balanceabove').value;
        const onLoss = document.querySelector(
          'input[name = "radio-onloss"]:checked'
        );
        const onWin = document.querySelector(
          'input[name = "radio-onwin"]:checked'
        );

        handler(
          numberBets,
          maxBetAmount,
          onLoss.id,
          onWin.id,
          balanceBelow,
          balanceAbove
        );
      }.bind(this)
    );
  }

  disableBetBtn(btn) {
    btn.disabled = true;
    btn.classList.add('bg-highlightAccent');
    btn.classList.add('text-white');
  }

  addHandlerPlayForRealBtn(handler) {
    const playBtn = document.querySelector('.dice-playforreal-btn');

    playBtn.addEventListener(
      'click',
      function () {
        handler();
      }.bind(this)
    );
  }

  addHandlerHalfBetBtn(handler) {
    const halfBtn = document.querySelector('.dice-halfbet-btn');

    halfBtn.addEventListener(
      'click',
      function () {
        handler();
        // triggers again the listenner on input
        let event = new Event('input', { bubbles: true });
        const betSizeInput = document.querySelector('.dice-betAmount');
        betSizeInput.dispatchEvent(event);
      }.bind(this)
    );
  }

  addHandlerDoubleBetBtn(handler) {
    const doubleBtn = document.querySelector('.dice-doublebet-btn');

    doubleBtn.addEventListener(
      'click',
      function () {
        handler();
        // triggers again the listenner on input
        let event = new Event('input', { bubbles: true });
        const betSizeInput = document.querySelector('.dice-betAmount');

        betSizeInput.dispatchEvent(event);
      }.bind(this)
    );
  }

  addHandlerMinBetBtn(handler) {
    const minBtn = document.querySelector('.dice-minbet-btn');

    minBtn.addEventListener(
      'click',
      function () {
        handler();
        // triggers again the listenner on input
        let event = new Event('input', { bubbles: true });
        const betSizeInput = document.querySelector('.dice-betAmount');
        betSizeInput.dispatchEvent(event);
      }.bind(this)
    );
  }

  addHandlerIncreaseWinChanceBtn(handler) {
    const increaseBtn = document.querySelector(
      '.dice-control-winchance-increase-btn'
    );

    increaseBtn.addEventListener(
      'click',
      function () {
        handler();

        // triggers again the listenner on input
        let event = new Event('input', { bubbles: true });
        const winChanceInput = document.querySelector('.dice-winchance');
        winChanceInput.dispatchEvent(event);
      }.bind(this)
    );
  }
  addHandlerDecreaseWinChanceBtn(handler) {
    const decreaseBtn = document.querySelector(
      '.dice-control-winchance-decrease-btn'
    );

    decreaseBtn.addEventListener(
      'click',
      function () {
        handler();
        // triggers again the listenner on input
        let event = new Event('input', { bubbles: true });
        const winChanceInput = document.querySelector('.dice-winchance');
        winChanceInput.dispatchEvent(event);
      }.bind(this)
    );
  }
  updateRollResult(numberGenerated, isWinner) {
    const rangeBubble = document.querySelector('.dice-range-bubble');
    const betBtn = document.querySelector('.dice-bet-btn');
    const sliderBubbleValueContainer = document.querySelector(
      '.dice-range-bubble-value'
    );
    //rangeBubble.style.display = 'flex';
    rangeBubble.style.transform = `rotate(45deg)`;
    rangeBubble.style.marginLeft = `${numberGenerated}%`;

    isWinner
      ? (rangeBubble.style.backgroundColor = 'rgba(155, 237, 154, 0.8)')
      : (rangeBubble.style.backgroundColor = 'rgba(255, 153, 153, 0.8)');

    rangeBubble.classList.remove('invisible');

    sliderBubbleValueContainer.textContent = numberGenerated;
    this.updateBetHistory(numberGenerated, isWinner);
    betBtn.disabled = false;
    betBtn.classList.remove('bg-highlightAccent');
    betBtn.classList.remove('text-white');
    //const thumbPosition = (numberGenerated - rangeInput.min) / (rangeInput.max - rangeInput.min);
    //const thumbPositionPercentage = thumbPosition * 100;
    //const translateX = thumbPositionPercentage - (thumbWidth / trackWidth) * 50;
    //rangeBubble.style.transform = `rotate(45deg) translateX(-${translateX}%)`;
    //rangeBubble.style.marginLeft = `${thumbPositionPercentage}%`;
  }

  updateBetHistory(number, isWinner) {
    const history = document.querySelector('.dice-history');
    const color = isWinner ? 'bg-diceGreen' : 'bg-diceRed';
    const html = `<div class="${color} text-secondary text-center  font-medium mr-2 px-2.5 py-0.5 min-w-[4rem] opacity-100   rounded-full">${number}</div>`;
    history.insertAdjacentHTML('afterbegin', html);

    if (history.children.length === 7) {
      history.removeChild(history.children[history.children.length - 1]);

      history.children[history.children.length - 1].style.opacity = '0.2';
      history.children[history.children.length - 2].style.opacity = '0.6';
      history.children[history.children.length - 3].style.opacity = '0.7';
      history.children[history.children.length - 4].style.opacity = '0.8';
    }
  }
}
export default new diceView();
