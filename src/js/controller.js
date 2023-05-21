import * as model from './model.js';
import clearView from './views/clearView.js';
import sideBarView from './views/sideBarView.js';
import topNavView from './views/topNavView.js';
import diceView from './views/diceView.js';
import loginModalView from './views/loginModalView.js';
import registerView from './views/registerView.js';
import signoutView from './views/signoutView.js';
import userdetailsView from './views/userdetailsView.js';
import walletView from './views/walletView.js';
import herocardView from './views/herocardView.js';
import homeView from './views/homeView.js';

import provablyFairModalView from './views/provablyFairModalView.js';
import diceLiveStatsView from './views/diceLiveStatsView.js';
import gameDescriptionView from './views/gameDescriptionView.js';
import accountSettingsView from './views/accountSettingsView.js';
import walletSettingsView from './views/walletSettingsView.js';

const diceModel = new model.diceModel();

let userLogin;
let userDetails;
let userWallets;
let userSeeds;
let userDiceLiveStats;
let startControllerSideBar;
let startControllerTopNav;

let startControllerDice;
let startControllerAccount;
let startControllerWalletSettings;
let startControllerLoginModal;
let startControllerRegister;
let startControllerUserData;
let startControllerHome;
let startControllerSignout;
let startControllerProvablyFairModal;
let startControllerDiceLiveStats;

export class controllerStart {
  constructor() {}

  controlStart() {
    const url = window.location.hash.slice(1);
    clearView.clear();

    switch (url) {
      case 'home':
      case '':
        clearView.addClasses('home');
        startControllerHome.init();

        clearView.centralizeContent('home');

        break;
      case 'dice':
        clearView.addClasses('dice');
        startControllerDice.init();
        break;
      case 'account':
        clearView.addClasses('home');
        startControllerAccount.init();
        break;
      case 'wallet':
        clearView.addClasses('home');
        startControllerWalletSettings.init();
        break;
    }
  }

  async init() {
    startControllerSideBar = new controllerSideBar();
    startControllerTopNav = new controllerTopNav();

    startControllerLoginModal = new controllerLoginModal();
    startControllerRegister = new controllerRegister();
    startControllerUserData = new controllerUserData();
    startControllerHome = new controllerHome();
    startControllerSignout = new controllerSignout();
    startControllerDice = new controllerDice();

    startControllerProvablyFairModal = new controllerProvablyFairModal();
    startControllerDiceLiveStats = new controlDiceLiveStatsModal();
    startControllerAccount = new controllerAccount();
    startControllerWalletSettings = new controllerWalletSettings();

    startControllerUserData.init();
    startControllerTopNav.init();
    startControllerSideBar.init();
    startControllerLoginModal.init();
    startControllerRegister.init();

    this.controlStart();

    addEventListener(
      'hashchange',
      function () {
        this.controlStart();
      }.bind(this)
    );
  }
}

export class controllerUserData {
  async loadUserData(token) {
    if (token) {
      userDetails = new model.userDetailsModel(token);
      //await userDetails.requestUserDetails();

      userWallets = new model.walletsModel(token);
      userSeeds = new model.ProvablyFairModel(token);
      userDiceLiveStats = new model.diceLiveStatsModel(token);
      //const startControllerUserDetails = new controllerUserDetails();
      //startControllerUserDetails.render(userDetails.state.userDetails);

      //const startControllerWallet = new controllerWallet();
      //startControllerWallet.render(userWallets.state.walletDetails);

      //const startControllerSignout = new controllerSignout();
      //startControllerSignout.init();

      //const startControllerStart = new controllerStart();
      //startControllerStart.controlStart();

      //localStorage.setItem('token', userLogin.state.token);
    } else return;
  }
  init() {
    if (localStorage.getItem('token'))
      this.loadUserData(localStorage.getItem('token'));
  }
}

export class controllerTopNav {
  async init() {
    if (userDetails) {
      await userDetails.requestUserDetails();

      topNavView.render(userDetails.state.userDetails);

      //topNavView.addHandlerRender();
      topNavView.addHandlerUserDetails();
      startControllerSignout.init();
    } else topNavView.render(undefined);
  }
}

export class controllerSideBar {
  init() {
    sideBarView.addHandlerRender();
  }
}

export class controllerLoginModal {
  async controlLoginModal(email, password) {
    userLogin = new model.loginModel(email, password);

    await userLogin.requestToken();
    if (userLogin.state.token) {
      loginModalView.validateLogin(true);
      localStorage.setItem('token', userLogin.state.token);
      location.reload();
      //const startControllerUserData = new controllerUserData();
      //startControllerUserData.loadUserData(userLogin.state.token);
    } else loginModalView.validateLogin(userLogin.state.error);
  }

  init() {
    if (!userDetails) {
      loginModalView.addHandlerRender();
      loginModalView.addHandlerRenderLogin();
      loginModalView.addHandlerRenderLoginClose();
      loginModalView.addHandlerInputFormLogin(
        this.controlLoginModal.bind(this)
      );
    } else return;
  }
}

export class controllerSignout {
  controlSignout() {
    if (!userDetails && !localStorage.getItem('token')) return;

    userDetails = undefined;
    userLogin = undefined;
    userWallets = undefined;

    localStorage.removeItem('token');

    location.reload();
  }
  init() {
    signoutView.addHandlerSignout(this.controlSignout.bind(this));
  }
}

export class controllerAccount {
  controlHeaderBtns(selectBody) {
    accountSettingsView.renderBody(selectBody, userDetails.state.userDetails);

    accountSettingsView.selectHeaderButton(selectBody);
  }

  init() {
    if (userDetails) {
      accountSettingsView.render();
      accountSettingsView.selectHeaderButton('profile');
      accountSettingsView.renderBody('profile');
      accountSettingsView.addHandlerHeaderBtns(
        this.controlHeaderBtns.bind(this)
      );
    } else loginModalView.openLoginModal();
  }
}

export class controllerWalletSettings {
  controlHeaderBtns(selectBody) {
    walletSettingsView.renderBody(selectBody, userWallets.state.walletsAddress);

    walletSettingsView.selectHeaderButton(selectBody);
    if (selectBody === 'deposit') {
      walletSettingsView.addHandlerClipboardBtn();
      walletSettingsView.addHandlerSelectCurrency(
        'deposit',
        this.controlDepositWallet.bind(this)
      );
      this.control;
      //walletSettingsView.generateQRCode(userWallets.state.walletDetails.btc);
    } else if (selectBody === 'withdrawal') {
      walletSettingsView.addHandlerSelectCurrency(selectBody);
    }
  }

  async controlDepositWallet(currency) {
    await userWallets.requestWalletsAddress();

    walletSettingsView.renderBody('deposit', userWallets.state.walletsAddress);
    walletSettingsView.addHandlerSelectCurrency(
      'deposit',
      this.controlDepositWallet.bind(this)
    );
    if (userWallets.state.walletsAddress[currency.toLowerCase()])
      walletSettingsView.generateQRCode(
        userWallets.state.walletsAddress[currency.toLowerCase()].public_key
      );

    if (!userWallets.state.walletsAddress[currency.toLowerCase()])
      walletSettingsView.addHandlerCreateWallet(
        this.controlCreateWallet.bind(this)
      );
  }

  async controlCreateWallet(currency) {
    console.log(currency);
    if (userWallets.state.walletDetails[currency]) return;
    await userWallets.createWallet(currency);
    this.controlDepositWallet(currency);
  }

  init() {
    if (userDetails) {
      walletSettingsView.render();
      walletSettingsView.selectHeaderButton('deposit');
      walletSettingsView.renderBody(
        'deposit',
        userWallets.state.walletsAddress
      );
      walletSettingsView.addHandlerHeaderBtns(
        this.controlHeaderBtns.bind(this)
      );
      walletSettingsView.addHandlerClipboardBtn();
      walletSettingsView.addHandlerSelectCurrency(
        'deposit',
        this.controlDepositWallet.bind(this)
      );
      //walletSettingsView.generateQRCode(userWallets.state.walletDetails.btc);
      walletSettingsView.addHandlerCreateWallet(
        this.controlCreateWallet.bind(this)
      );
    } else loginModalView.openLoginModal();
  }
}

export class controllerProvablyFairModal {
  async controlChangeClientSeed(newClientSeed) {
    await userSeeds.changeClientSeed(newClientSeed);

    provablyFairModalView.updateInputs(userSeeds.state.seedDetails);
  }

  async controlChangeServerSeed() {
    await userSeeds.changeServerSeed();

    provablyFairModalView.updateInputs(userSeeds.state.seedDetails);
  }

  controlHeaderBtns(selectBody) {
    if (selectBody === 'seeds') {
      // await userSeeds.requestSeedDetails();
      provablyFairModalView.renderBody(selectBody, userSeeds.state.seedDetails);
      provablyFairModalView.addHandlerChangeClientSeed(
        this.controlChangeClientSeed.bind(this)
      );
      provablyFairModalView.addHandlerChangeServerSeed(
        this.controlChangeServerSeed.bind(this)
      );
      provablyFairModalView.addHandlerGenerateClientSeed();
    } else if (selectBody === 'verification') {
      provablyFairModalView.renderBody(selectBody);
      provablyFairModalView.addHandlerVerifyInputs();
    } else provablyFairModalView.renderBody(selectBody);

    provablyFairModalView.selectHeaderButton(selectBody);
  }

  async init() {
    await userSeeds.requestSeedDetails();
    provablyFairModalView.render(undefined, userSeeds.state.seedDetails);
    provablyFairModalView.selectHeaderButton('provablyFair');

    provablyFairModalView.addHandlerHeaderBtns(
      this.controlHeaderBtns.bind(this)
    );
    provablyFairModalView.addHandlerCloseBtn();
  }
}

export class controlDiceLiveStatsModal {
  async init() {
    await userDiceLiveStats.requestLiveStats();
    console.log(userDiceLiveStats.state.data);
    console.log(userDiceLiveStats.state.lastBetID);
    diceLiveStatsView.render();

    diceLiveStatsView.renderChart(userDiceLiveStats.state.data);
    diceLiveStatsView.addHandlerCloseBtn();
  }
}

export class controllerDice {
  controlInputRange() {
    this.updateDice();
  }
  controlInputBetSize() {
    this.updateDice();
  }

  controlInputMultiplier() {
    this.updateDice('multiplier');
  }

  controlInputWinChance() {
    this.updateDice('winchance');
  }

  controlPvFairBtn() {
    startControllerProvablyFairModal.init();
  }

  controlLiveStatsBtn() {
    startControllerDiceLiveStats.init();
  }

  controlRenderAutoBet(type) {
    if (type === 'auto') {
      diceView.renderAutoBet();
      diceView.renderBetBtn('auto');
      const diceAutoBet = document.querySelector('.dice-autobet');

      diceAutoBet.scrollIntoView();
    } else {
      diceView.renderBetBtn('manual');
      const autoBetRows = document.querySelectorAll('.dice-autobet');

      autoBetRows.forEach((row) => row.remove());
    }
  }

  async controlAutoBet(
    numberBets,
    maxBetAmount,
    onLoss,
    onWin,
    balanceBelow,
    balanceAbove
  ) {
    if (!userDetails) return loginModalView.openLoginModal();
    const rollType = diceView.getRollType();

    let betSize = Number(diceView.getBetSize());

    this.updateAutoBetSettings(
      numberBets,
      maxBetAmount,
      onLoss,
      onWin,
      balanceBelow,
      balanceAbove
    );

    let rep = 1;
    let done = false;
    let autoBetSettings;
    diceModel.state.isWinner = '';
    async function autoBet() {
      while (rep <= +diceModel.state.autoBet.numberBets) {
        console.log(diceModel.state.isWinner);
        console.log(true === diceModel.state.isWinner);

        if (diceModel.state.isWinner === true) {
          autoBetSettings = diceModel.state.autoBet.onWin;
        } else if (diceModel.state.isWinner === false) {
          autoBetSettings = diceModel.state.autoBet.onLoss;
        } else betSize = Number(diceView.getBetSize());

        switch (autoBetSettings) {
          case 'radio-onloss-basebet':
          case 'radio-onwin-basebet':
            betSize = Number(diceView.getBetSize());
            break;
          case 'radio-onloss-changebet':
          case 'radio-onwin-changebet':
            betSize =
              betSize + betSize * (Number(diceView.getOnWinBetSize()) / 100) <=
              diceModel.state.autoBet.maxBetAmount
                ? betSize + betSize * (Number(diceView.getOnWinBetSize()) / 100)
                : betSize;

            break;
          case 'radio-onloss-stopautobet':
          case 'radio-onwin-stopautobet':
            rep = +diceModel.state.autoBet.numberBets;
            done = true;

            break;
          default:
            done = false;
            break;
        }

        if (
          userWallets.state.walletDetails.fun * 1 <
            diceModel.state.autoBet.balanceBelow * 1 ||
          userWallets.state.walletDetails.fun * 1 >
            diceModel.state.autoBet.balanceAbove * 1
        ) {
          done = true;
          rep = +diceModel.state.autoBet.numberBets;
        }
        console.log(diceModel.state);
        console.log(betSize);
        rep++;
        if (!done) {
          await this.executeBet(betSize.toFixed(2), rollType);
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }
      }
    }

    autoBet.call(this);
  }

  updateAutoBetSettings(
    numberBets,
    maxBetAmount,
    onLoss,
    onWin,
    balanceBelow,
    balanceAbove
  ) {
    diceModel.state.autoBet.numberBets = numberBets;
    diceModel.state.autoBet.maxBetAmount = maxBetAmount;
    diceModel.state.autoBet.onLoss = onLoss;
    diceModel.state.autoBet.onWin = onWin;
    diceModel.state.autoBet.balanceBelow = balanceBelow;
    diceModel.state.autoBet.balanceAbove = balanceAbove;
  }

  updateDice(trigger) {
    const rollType = diceView.getRollType();

    const rollValue = diceView.getRollValue();

    const betSize = diceView.getBetSize();
    const multiplier = diceView.getMultiplier();

    const winChance = diceView.getWinChance();

    switch (trigger) {
      case 'multiplier':
        diceModel.calcRollValue(rollType, multiplier);
        diceModel.calcPayout(rollType, diceModel.state.rollValue, betSize);
        diceModel.calcWinChance(rollType, diceModel.state.rollValue);
        diceView.updateRollValue(diceModel.state.rollValue.toFixed(2));
        diceView.updateWinChance(diceModel.state.winChance.toFixed(2));
        diceView.updatePayout(diceModel.state.payout);

        break;
      case 'winchance':
        diceModel.calcRollValue(rollType, '', winChance);
        diceModel.calcMultiplier(rollType, diceModel.state.rollValue);
        diceModel.calcPayout(rollType, diceModel.state.rollValue, betSize);

        diceView.updatePayout(diceModel.state.payout);
        diceView.updateMultiplier(diceModel.state.multiplier.toFixed(4));
        diceView.updateRollValue(diceModel.state.rollValue.toFixed(2));

        break;
      default:
        diceModel.calcPayout(rollType, rollValue, betSize);
        diceModel.calcMultiplier(rollType, rollValue);
        diceModel.calcWinChance(rollType, rollValue);

        diceView.updatePayout(diceModel.state.payout);
        diceView.updateWinChance(diceModel.state.winChance.toFixed(2));
        diceView.updateMultiplier(diceModel.state.multiplier.toFixed(4));
    }
  }

  async controlBtnBet() {
    if (!userDetails) return loginModalView.openLoginModal();
    const rollType = diceView.getRollType();

    const betSize = diceView.getBetSize();
    await this.executeBet(betSize, rollType);
  }

  async executeBet(betSize, rollType) {
    await diceModel.sendBet(rollType, betSize, localStorage.getItem('token'));

    await userWallets.requestWallets();
    diceView.updateRollResult(
      diceModel.state.numberGenerated,
      diceModel.state.isWinner
    );

    diceView.updateWallet(userWallets.state.walletDetails.fun);
  }
  controlPlayForRealBtn() {
    if (userDetails) return;
    loginModalView.openLoginModal();
  }
  controlHalfBetBtn() {
    const betSize = diceView.getBetSize();
    if (betSize <= 10 || !betSize) return;
    diceView.updateBetSize(betSize / 2);
  }
  controlDoubleBetBtn() {
    const betSize = diceView.getBetSize();
    if (!betSize || betSize === 0) return;
    diceView.updateBetSize(betSize * 2);
  }
  controlMinBetBtn() {
    diceView.updateBetSize(10);
  }
  controlIncreaseWinChanceBtn() {
    const winChance = Number(diceView.getWinChance());

    diceView.updateWinChance((winChance + 10.0).toFixed(2));
  }
  controlDecreaseWinChanceBtn() {
    const winChance = Number(diceView.getWinChance());
    if (!winChance || winChance <= 10) return;
    diceView.updateWinChance((winChance - 10.0).toFixed(2));
  }
  async init() {
    if (userWallets) await userWallets.requestWallets();

    diceView.render(userWallets ? userWallets.state.walletDetails : undefined);
    gameDescriptionView.render();
    diceView.addHandlerWalletContainer();
    diceView.addHandlerBtnBet(this.controlBtnBet.bind(this));

    diceView.addHandlerManualAuto(this.controlRenderAutoBet.bind(this));
    diceView.addHandlerBtnAutoBet(this.controlAutoBet.bind(this));
    diceView.addHandlerInputRange(this.controlInputRange.bind(this));
    diceView.addHandlerInputBetSize(this.controlInputBetSize.bind(this));
    diceView.addHandlerInputMultiplier(this.controlInputMultiplier.bind(this));
    diceView.addHandlerInputWinChance(this.controlInputWinChance.bind(this));
    diceView.addHandlerChangeRoll();

    diceView.addHandlerHalfBetBtn(this.controlHalfBetBtn.bind(this));
    diceView.addHandlerDoubleBetBtn(this.controlDoubleBetBtn.bind(this));
    diceView.addHandlerMinBetBtn(this.controlMinBetBtn.bind(this));
    diceView.addHandlerIncreaseWinChanceBtn(
      this.controlIncreaseWinChanceBtn.bind(this)
    );
    diceView.addHandlerDecreaseWinChanceBtn(
      this.controlDecreaseWinChanceBtn.bind(this)
    );

    if (userDetails) {
      diceView.addHandlerCheckPvFair(this.controlPvFairBtn.bind(this));
      diceView.addHandlerLiveStats(this.controlLiveStatsBtn.bind(this));
    }

    if (!userDetails)
      diceView.addHandlerPlayForRealBtn(this.controlPlayForRealBtn.bind(this));
    this.updateDice();
  }
}

export class controllerWallet {
  render(data) {
    //walletView.renderWallet(data);
    //this.init();
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
      const startControllerLogin = new controllerLoginModal();
      await startControllerLogin.controlLoginModal(
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

/*export class controllerLastNews {
  init() {
    lastnewsView.render(LastNewsModel.loadData());
    LastNewsModel.setSettings();
  }
}

export class controllerOriginals {
  init() {
    originalsView.render(OriginalsModel.loadData());
    OriginalsModel.setSettings();
  }
}

export class controllerSlots {
  init() {
    slotsView.render(SlotsModel.loadData());
    SlotsModel.setSettings();
  }
}
*/
export class controllerHome {
  init() {
    const startControllerHeroCard = new controllerHeroCard();
    //const startControllerLastNews = new controllerLastNews();
    //const startControllerOriginals = new controllerOriginals();
    //const startControllerSlots = new controllerSlots();
    homeView.render();
    startControllerHeroCard.init();
    //startControllerLastNews.init();
    //startControllerOriginals.init();
    //startControllerSlots.init();
  }
}
