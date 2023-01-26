import * as model from './model.js';
import promotionsSliderView from './views/promotionsSliderView.js';
import lobbyView from './views/lobbyView.js';
import sideBarView from './views/sideBarView.js';

import diceView from './views/diceView.js';
import loginView from './views/loginView.js';

import * as helper from './helpers.js';
import * as config from './config.js';

const promotionsSliderModel = new model.promotionsSliderModel();
const lobbyModel = new model.lobbyModel();
const diceModel = new model.diceModel();
let userLogin;
export class controllerStart {
  constructor() {}
  startControllerSideBar = new controllerSideBar();
  startControllerPromotionsSlider = new controllerPromotionsSlider();
  startControllerLobby = new controllerLobby();
  startControllerDice = new controllerDice();
  startControllerLogin = new controllerLogin();
  controlStart() {
    const url = window.location.hash.slice(1);

    switch (url) {
      case 'home':
      case '':
        //this.startControllerPromotionsSlider.init();
        //this.startControllerLobby.init();
        break;
      case 'dice':
        this.startControllerDice.init();
        break;
    }
  }

  async init() {
    this.controlStart();
    //this.startControllerSideBar.init();
    this.startControllerLogin.init();

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
  async controlBtnRoll() {
    const currentRoll = diceView.getCurrentRoll();

    const rollValue = diceView.getRollValue();

    const betSize = diceView.getBetSize();

    diceModel.generateRandomNumber(1, 100, currentRoll, rollValue, betSize); //we need to pass the token here
    /* const diceExample = new helper.request(
      'https://httpbin.org/post',
      diceModel.state.payload
    );*/
    const diceExample = '';

    console.log(diceModel.state.payload);
    await diceExample.post();
    //console.log(diceExample.state.output);

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

export class controllerLogin {
  async controlLogin(email, password) {
    //if (userLogin) return;

    userLogin = new model.loginModel(email, password);
    await userLogin.requestToken();

    if (userLogin.state.token) {
      loginView.validate(true);

      loginView.addHandlerSignout(this.controlSignout.bind(this));
    } else loginView.validate(userLogin.state.error);
  }

  controlSignout() {
    if (!userLogin.state.token) return;
    userLogin.signOut();
    if (userLogin.state.token) return;
    loginView.renderSignout();
    loginView.addHandlerRender();
    loginView.addHandlerRenderLogin();
    loginView.addHandlerRenderLoginClose();

    loginView.addHandlerInputForm(this.controlLogin.bind(this));
  }

  //loginView.addHandlerSignout(this.controlSignout);
  init() {
    loginView.addHandlerRender();
    loginView.addHandlerRenderLogin();
    loginView.addHandlerRenderLoginClose();
    loginView.addHandlerInputForm(this.controlLogin.bind(this));
  }
}
