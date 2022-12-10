import * as model from './model.js';
import promotionsSliderView from './views/promotionsSliderView.js';
import lobbyView from './views/lobbyView.js';
import sideBarView from './views/sideBarView.js';

import diceView from './views/diceView.js';

import * as helper from './helpers.js';

const promotionsSliderModel = new model.promotionsSliderModel();
const lobbyModel = new model.lobbyModel();
const diceModel = new model.diceModel();

const getToken = new helper.token();

export class controllerStart {
  constructor() {}
  startControllerSideBar = new controllerSideBar();
  startControllerPromotionsSlider = new controllerPromotionsSlider();
  startControllerLobby = new controllerLobby();
  startControllerDice = new controllerDice();
  controlStart() {
    const url = window.location.hash.slice(1);

    switch (url) {
      case 'home':
      case '':
        this.startControllerPromotionsSlider.init();
        this.startControllerLobby.init();
        break;
      case 'dice':
        this.startControllerDice.init();
        break;
    }
  }

  init() {
    this.controlStart();
    this.startControllerSideBar.init();
    getToken.init();
    addEventListener(
      'hashchange',
      function () {
        this.controlStart();
      }.bind(this)
    );
  }
}

export class controllerPromotionsSlider {
  constructor() {}

  async controlLoadPromotionsSlider() {
    try {
      await promotionsSliderModel.load();

      promotionsSliderView.render(promotionsSliderModel.state.importData);
      promotionsSliderView.initSlider(promotionsSliderModel.state.currentCard);
      //window.history.pushState(null, '', `#${model.state.recipe.id}`); change url
    } catch (err) {
      console.log('erro nas Promotions', err);
    }
  }

  controlPromotionsNextSliderArrowBtn() {
    promotionsSliderModel.slideNextCard();

    this.updateCard();
  }

  controlPromotionsPrevSliderArrowBtn() {
    promotionsSliderModel.slidePrevCard();
    this.updateCard();
  }

  controlSlideTrackerBtns(cardSelected) {
    promotionsSliderModel.setCard(cardSelected);
    this.updateCard();
  }

  updateCard() {
    promotionsSliderView.selectCard(promotionsSliderModel.state.currentCard);
    promotionsSliderView.selectSlideTrackerBtn(
      promotionsSliderModel.state.currentCard
    );
  }

  init() {
    promotionsSliderView.addHandlerRender(this.controlLoadPromotionsSlider);

    promotionsSliderView.addHandlerNextSliderArrow(
      this.controlPromotionsNextSliderArrowBtn.bind(this) //use bind to refer the correct object for this keyword, or this.update wont be recognize , and this will be the arrowRight from the handler
    );

    promotionsSliderView.addHandlerPrevSliderArrow(
      this.controlPromotionsPrevSliderArrowBtn.bind(this)
    );
    promotionsSliderView.addHandlerSlideTrackerBtns(
      this.controlSlideTrackerBtns.bind(this)
    );
  }
}

export class controllerLobby {
  async controlLoadLobby() {
    try {
      await lobbyModel.load();

      lobbyView.render(lobbyModel.state.importData);

      //window.history.pushState(null, '', `#${model.state.recipe.id}`); change url
    } catch (err) {
      console.log('erro no lobby', err);
    }
  }

  init() {
    lobbyView.addHandlerRender(this.controlLoadLobby);
  }
}

export class controllerSideBar {
  init() {
    sideBarView.addHandlerRender();
  }
}

export class controllerDice {
  controlLoadDice() {
    diceView.render();
    this.updateDice();
  }
  controlInputSlider() {
    this.updateDice();
  }
  controlBtnRoll() {
    diceModel.generateRandomNumber(1, 100);
    diceView.updateRollResult(diceModel.state.numberGenerated);
  }
  controlInputBetSize() {
    this.updateDice();
  }

  updateDice() {
    const currentRoll = diceView.getCurrentRoll();

    const rollValue = diceView.getRollValue();

    const betSize = diceView.getBetSize();

    diceModel.calcPayout(currentRoll, rollValue, betSize);
    diceModel.calcWinChance(currentRoll, rollValue);

    diceView.updatePayout(diceModel.state.payout);
    diceView.updateWincChance(diceModel.state.winChance);
  }
  init() {
    diceView.addHandlerRender(this.controlLoadDice.bind(this));
    diceView.addHandlerInputSlider(this.controlInputSlider.bind(this));

    diceView.addHandlerChangeRoll();
    diceView.addHandlerBtnRoll(this.controlBtnRoll.bind(this));
    diceView.addHandlerInputBetSize(this.controlInputSlider.bind(this));
  }
}
