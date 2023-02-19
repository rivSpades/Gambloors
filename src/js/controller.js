import * as model from './model.js';
import clearView from './views/clearView.js';
import sideBarView from './views/sideBarView.js';
import diceView from './views/diceView.js';
import loginView from './views/loginView.js';
import registerView from './views/registerView.js';
import signoutView from './views/signoutView.js';
import userdetailsView from './views/userdetailsView.js';
import walletView from './views/walletView.js';
import herocardView from './views/herocardView.js';

import * as config from './config.js';
import promocardsliderView from './views/promocardsliderView.js';

const promotionsSliderModel = new model.promotionsSliderModel();
const lobbyModel = new model.lobbyModel();
const diceModel = new model.diceModel();
const PromoCardSliderModel = new model.PromoCardSliderModel();
let userLogin;
let userDetails;
let userWallets;

export class controllerStart {
  constructor() {}
  startControllerSideBar = new controllerSideBar();
  startControllerPromotionsSlider = new controllerPromotionsSlider();
  startControllerLobby = new controllerLobby();
  startControllerDice = new controllerDice();
  startControllerLogin = new controllerLogin();
  startControllerRegister = new controllerRegister();
  startControllerSideBar = new controllerSideBar();
  startControllerHeroCard = new controllerHeroCard();
  startControllerPromoCardSlider = new controllerPromoCardSlider();

  controlStart() {
    const url = window.location.hash.slice(1);
    clearView.clear();

    switch (url) {
      case 'home':
      case '':
        clearView.addClasses('home');
        this.startControllerHeroCard.init();
        this.startControllerPromoCardSlider.init();

        break;
      case 'dice':
        clearView.addClasses('dice');
        this.startControllerDice.init();
        break;
    }
  }

  async init() {
    this.controlStart();
    this.startControllerSideBar.init();
    this.startControllerLogin.init();
    this.startControllerRegister.init();

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
  controlInputRange() {
    this.updateDice();
  }
  controlInputBetSize() {
    this.updateDice();
  }
  updateDice() {
    const rollType = diceView.getRollType();

    const rollValue = diceView.getRollValue();

    const betSize = diceView.getBetSize();

    diceModel.calcPayout(rollType, rollValue, betSize);
    diceModel.calcWinChance(rollType, rollValue);

    diceView.updatePayout(diceModel.state.payout);
    diceView.updateWincChance(diceModel.state.winChance);
  }
  /*controlLoadDice() {
    diceView.render();
    this.updateDice();
  }

  
  controlInputSlider() {
    this.updateDice();
  }

  */
  async controlBtnBet() {
    if (!userLogin) return;
    const rollType = diceView.getRollType();

    const betSize = diceView.getBetSize();

    await diceModel.sendBet(rollType, betSize, userLogin.state.token);

    console.log(diceModel.state);

    diceView.updateRollResult(
      diceModel.state.numberGenerated,
      diceModel.state.isWinner
    );
  }

  init() {
    diceView.render();
    diceView.addHandlerInputRange(this.controlInputRange.bind(this));
    diceView.addHandlerInputBetSize(this.controlInputBetSize.bind(this));
    diceView.addHandlerChangeRoll();
    diceView.addHandlerBtnBet(this.controlBtnBet.bind(this));
  }
}

export class controllerLogin {
  async controlLogin(email, password) {
    userLogin = new model.loginModel(email, password);

    await userLogin.requestToken();

    if (userLogin.state.token) {
      userDetails = new model.userDetailsModel(userLogin.state.token);
      await userDetails.requestUserDetails();

      userWallets = new model.walletsModel(userLogin.state.token);
      await userWallets.requestWallets();

      loginView.validateLogin(true);
      const startControllerUserDetails = new controllerUserDetails();
      startControllerUserDetails.render(userDetails.state.userDetails);

      const startControllerWallet = new controllerWallet();
      startControllerWallet.render(userWallets.state.walletDetails);

      const startControllerSignout = new controllerSignout();
      startControllerSignout.init();

      //const startControllerHeroCard = new controllerHeroCard();
      //startControllerHeroCard.init();
      const startControllerStart = new controllerStart();
      startControllerStart.controlStart();
    } else loginView.validateLogin(userLogin.state.error);
  }

  init() {
    loginView.addHandlerRender();
    loginView.addHandlerRenderLogin();
    loginView.addHandlerRenderLoginClose();
    loginView.addHandlerInputFormLogin(this.controlLogin.bind(this));
  }
}

export class controllerSignout {
  controlSignout() {
    if (!userLogin.state.token) return;
    userLogin.signOut();
    if (userLogin.state.token) return;
    loginView.renderAuthButtons();
    const startControllerLogin = new controllerLogin();
    startControllerLogin.init();

    const startControllerRegister = new controllerRegister();
    startControllerRegister.init();

    userDetails = undefined;
    userLogin = undefined;
    userWallets = undefined;

    //const startControllerHeroCard = new controllerHeroCard();
    //startControllerHeroCard.init();
    const startControllerStart = new controllerStart();
    startControllerStart.controlStart();
  }
  init() {
    signoutView.addHandlerSignout(this.controlSignout.bind(this));
  }
}

export class controllerWallet {
  render(data) {
    walletView.renderWallet(data);
    this.init();
  }
  init() {
    walletView.addHandlerWallet();
  }
}

export class controllerUserDetails {
  render(data) {
    userdetailsView.render(data);
    this.init();
  }

  init() {
    userdetailsView.addHandlerUserDetails();
  }
}

export class controllerRegister {
  async controlRegister(name, email, password, cpassword) {
    if (password !== cpassword)
      return registerView.validateRegister("Passwords don't match");
    const userRegister = new model.registerModel(name, email, password);

    await userRegister.requestRegister();
    if (
      !userRegister.state.userDetails.email ||
      !userRegister.state.userDetails.name ||
      userRegister.state.error
    )
      registerView.validateRegister(userRegister.state.error);
    else if (
      userRegister.state.userDetails.email &&
      userRegister.state.userDetails.name &&
      !userRegister.state.error
    ) {
      const startControllerLogin = new controllerLogin();
      await startControllerLogin.controlLogin(
        userRegister.state.userDetails.email,
        userRegister.state.userDetails.password
      );

      if (userLogin.state.token) {
        registerView.validateRegister(true);
      }
    }
  }
  init() {
    registerView.addHandlerRender();
    registerView.addHandlerRenderRegister();
    registerView.addHandlerRenderRegisterClose();
    registerView.addHandlerInputFormRegister(this.controlRegister.bind(this));
  }
}

export class controllerHeroCard {
  init() {
    herocardView.render(userLogin, userDetails);
  }
}

export class controllerPromoCardSlider {
  init() {
    promocardsliderView.render(PromoCardSliderModel.loadData());
    PromoCardSliderModel.setSettings();
  }
}
