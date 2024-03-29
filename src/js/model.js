//import * as config from './config.js';
import * as helper from './helpers.js';

class importModel {
  state = {
    importData: '',
    results: '',
  };
  constructor() {}
  loadData() {
    //this should be get by api routing /promotions
    return [
      {
        id: '0',
        cardTitle: 'Bonus Rewards',
        cardDescription: 'There is high reward for high risk on the frontier.',
        imageUrl: 'welcome-bonus.ace05fb3.jpg',
      },

      {
        id: '1',
        cardTitle: 'The Quick Draw Club',
        cardDescription:
          'Membership in The Quick Draw Club entitles you to rewards',
        imageUrl: 'rakeback_autumn_promo.7e4252e3.jpg',
      },

      {
        id: '2',
        cardTitle: 'VIP Program Rakeback',
        cardDescription:
          'Rank up , earn rakeback and chest rewards with our vip program.',
        imageUrl: 'vip.6680a453.png',
      },
    ];
  }

  load() {
    this.state.importData = this.loadData();
    this.state.results = this.loadData().length;
  }
}

export class promotionsSliderModel extends importModel {
  state = {
    importData: '',
    results: 0,
    currentCard: 0,
  };
  constructor() {
    super();
  }

  slideNextCard() {
    this.state.currentCard == this.state.results - 1
      ? (this.state.currentCard = 0)
      : this.state.currentCard++;
  }
  slidePrevCard() {
    this.state.currentCard === 0
      ? (this.state.currentCard = this.state.results - 1)
      : this.state.currentCard--;
  }

  setCard(cardNumber) {
    this.state.currentCard = cardNumber;
  }

  load() {
    this.state.importData = this.loadData();
    this.state.results = this.loadData().length;
    this.state.currentCard = 0;
  }
}

export class lobbyModel extends importModel {
  constructor() {
    super();
  }

  loadData() {
    return [
      {
        id: '0',
        cardTitle: 'Dice',
        imageUrl: 'dice.png',
      },
    ];
  }
}

export class diceModel {
  state = {
    winChance: 0,
    edge: 2,
    payout: 0,
    multiplier: 0,
    numberGenerated: 0,
    rollValue: 50,
    isWinner: '',

    diceData: {
      numberGenerated: '',
      betSize: '',
      currentRoll: '',
      rollValue: '',
    },
    autoBet: {
      numberBets: '',
      maxBetAmount: '',
      balanceBelow: '',
      balanceAbove: '',
      winPreviousBet: '',
      onLoss: '',
      onWin: '',
    },
  };
  #data;
  #url =
    'https://still-frog-f6ef.riverspades336061.workers.dev/api/game_trx_historic/trxhist/single_bet/';

  constructor() {}

  calcWinChance(rollType, rollValue) {
    this.state.winChance =
      (1 / (100 / (rollType === 'Roll Under' ? rollValue : 100 - rollValue))) *
      100;
  }

  calcPayout(rollType, rollValue, betSize) {
    const edge = this.state.edge;

    this.state.payout = (
      betSize *
      ((100 - edge) / (rollType === 'Roll Under' ? rollValue : 100 - rollValue))
    ).toFixed(2);
  }

  calcMultiplier(rollType, rollValue) {
    const edge = this.state.edge;

    this.state.multiplier =
      (100 - edge) / (rollType === 'Roll Under' ? rollValue : 100 - rollValue);
  }

  calcRollValue(rollType, multiplier, winChance) {
    const edge = this.state.edge;
    if (multiplier) {
      this.state.multiplier = multiplier;
      return (this.state.rollValue =
        rollType === 'Roll Under'
          ? (100 - edge) / multiplier
          : -1 * ((100 - edge) / multiplier - 100));
    }

    if (winChance) {
      this.state.winChance = winChance;
      return (this.state.rollValue =
        rollType === 'Roll Under' ? 1 * winChance : -1 * (1 * winChance - 100));
    } else return;
  }
  async sendBet(rollType, betSize, token) {
    if (!token || !rollType || !betSize) return;
    this.#data = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token ${token}`,
      },
      body: {
        'type_game': 'dice',
        'user_winrate_choice': `${Number(this.state.winChance).toFixed(2)}`,
        'is_roll_under': rollType === 'Roll Under' ? true : false,
        'date_game': new Date().toISOString(),
        'bet_amount': betSize,
        'coin_ticker': 'PLAY',
      },
    };

    const res = await helper.req(this.#url, this.#data);
    this.state.numberGenerated = res.response.rolled_dice * 1;
    this.state.isWinner = res.response.is_winner;
    console.log(res);
    console.log(this.#data);
  }
}

export class loginModel {
  state = {
    token: '',
    error: '',
  };
  #url =
    'https://still-frog-f6ef.riverspades336061.workers.dev/api/user/token/';
  #data;
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.#data = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: {
        email: this.email,
        password: this.password,
      },
    };
  }

  async requestToken() {
    if (this.state.token) return;
    const res = await helper.req(this.#url, this.#data);
    this.state.token = res.response.token;

    this.state.error = res.error;
  }

  signOut() {
    if (!this.state.token) return;
    this.state.token = '';
  }
}

export class userDetailsModel {
  #url = 'https://still-frog-f6ef.riverspades336061.workers.dev/api/user/me/';
  #data;
  #token;
  constructor(token) {
    this.#token = token;
    this.#data = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token ${this.#token}`,
      },
    };
  }
  state = {
    userDetails: {
      email: '',
      name: '',
    },
  };

  async requestUserDetails() {
    if (!this.#token) return;

    const res = await helper.req(this.#url, this.#data);

    this.state.userDetails.email = res.response.email;
    this.state.userDetails.name = res.response.name;
  }
}

export class registerModel {
  state = {
    error: '',
    userDetails: {
      email: '',
      name: '',
      password: '',
    },
  };

  #url =
    'https://still-frog-f6ef.riverspades336061.workers.dev/api/user/create/';
  #data;
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.#data = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: {
        email: this.email,
        password: this.password,
        name: this.name,
      },
    };
  }

  async requestRegister() {
    const res = await helper.req(this.#url, this.#data);
    this.state.userDetails.email = res.response.email;
    this.state.userDetails.name = res.response.name;
    this.state.userDetails.password = this.password;
    this.state.error = res.error;
  }
}

export class walletsModel {
  state = {
    error: '',
    walletDetails: {
      fun: '',
      btc: '',
      eth: '',
    },
    walletsAddress: { btc: '', eth: '', ltc: '' },
  };

  #url =
    'https://still-frog-f6ef.riverspades336061.workers.dev/api/profile_user/profile/';
  #data;
  #token;
  constructor(token) {
    this.#token = token;

    this.#data = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token ${this.#token}`,
      },
    };
  }

  async requestWallets() {
    const res = await helper.req(this.#url, this.#data);
    this.state.walletDetails.fun = res.response[0].PLAY_amount;
    this.state.walletDetails.eth = res.response[0].ETH_amount;
    this.state.walletDetails.btc = res.response[0].BTC_amount;
    this.state.error = res.error;
    console.log(res);
  }

  async requestWalletsAddress() {
    const url =
      'https://still-frog-f6ef.riverspades336061.workers.dev/api/wallets/wallet/';
    const data = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token ${this.#token}`,
      },
    };
    const res = await helper.req(url, data);

    this.state.walletsAddress.btc = res.response.find(
      (wallet) => wallet.blockchain === 'btc'
    );
    this.state.walletsAddress.eth = res.response.find(
      (wallet) => wallet.blockchain === 'eth'
    );
    this.state.walletsAddress.ltc = res.response.find(
      (wallet) => wallet.blockchain === 'ltc'
    );
    this.state.walletsAddress.dash = res.response.find(
      (wallet) => wallet.blockchain === 'dash'
    );
  }

  async createWallet(currency) {
    const url =
      'https://still-frog-f6ef.riverspades336061.workers.dev/api/wallets/wallet/';
    const data = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token ${this.#token}`,
      },
      body: {
        blockchain: currency,
      },
    };
    const res = await helper.req(url, data);
    console.log(res);
    console.log(data);
    this.requestWallets();
  }
}

export class LastNewsModel {
  loadData() {
    return [
      {
        id: '0',
        cardTitle: 'Bonus Rewards',
        cardDescription: 'High reward',
        imageUrl: 'welcome-bonus.ace05fb3.jpg',
      },

      {
        id: '1',
        cardTitle: 'The Quick Draw Club',
        cardDescription: 'Quick Draw Club',
        imageUrl: 'rakeback_autumn_promo.7e4252e3.jpg',
      },

      {
        id: '2',
        cardTitle: 'VIP Program Rakeback',
        cardDescription: 'Rank up',
        imageUrl: 'vip.6680a453.png',
      },
      {
        id: '3',
        cardTitle: 'New Members',
        cardDescription: 'Special Bonus',
        imageUrl: '63d23f9e38114.jpeg',
      },
    ];
  }

  setSettings() {
    /* eslint-disable */
    const swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      direction: 'horizontal',
      navigation: {
        nextEl: `.lastnews-nav-next`,
        prevEl: `.lastnews-nav-prev`,
      },
    });
  }
}

export class OriginalsModel {
  loadData() {
    return [
      {
        id: '0',
        cardTitle: 'Casino 1',
        cardDescription: 'Casino 1',
        imageUrl:
          'https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/casino-1.png',
      },
      {
        id: '1',
        cardTitle: 'Casino 2',
        cardDescription: 'Casino 2',
        imageUrl:
          'https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/casino-2.png',
      },
      {
        id: '2',
        cardTitle: 'Casino 3',
        cardDescription: 'Casino 3',
        imageUrl:
          'https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/casino-3.png',
      },
    ];
  }

  setSettings() {
    const swiper = new Swiper('.swiper-originals', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      direction: 'horizontal',
      navigation: {
        nextEl: `.originals-nav-next`,
        prevEl: `.originals-nav-prev`,
      },
    });
  }
}

export class SlotsModel {
  loadData() {
    return [
      {
        id: '0',
        cardTitle: 'Slot 1',
        cardDescription: 'Slot 1',
        imageUrl:
          'https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/slot-1.png',
      },
      {
        id: '1',
        cardTitle: 'Slot 2',
        cardDescription: 'Slot 2',
        imageUrl:
          'https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/slot-2.png',
      },
      {
        id: '2',
        cardTitle: 'Slot 3',
        cardDescription: 'Slot 3',
        imageUrl:
          'https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/slot-3.png',
      },
      {
        id: '3',
        cardTitle: 'Slot 4',
        cardDescription: 'Slot 4',
        imageUrl:
          'https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/slot-4.png',
      },
    ];
  }

  setSettings() {
    const swiper = new Swiper('.swiper-slots', {
      slidesPerView: 'auto',
      spaceBetween: 10,

      direction: 'horizontal',
      navigation: {
        nextEl: `.slots-nav-next`,
        prevEl: `.slots-nav-prev`,
      },
    });
  }
}

export class ProvablyFairModel {
  state = {
    error: '',
    seedDetails: {
      clientSeed: '',
      nonce: '',
      hashedServerSeed: '',
    },
  };
  #url =
    'https://still-frog-f6ef.riverspades336061.workers.dev/api/seeds/seed/';
  #data;
  #token;
  constructor(token) {
    this.#token = token;

    this.#data = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token ${this.#token}`,
      },
    };
  }
  async requestSeedDetails() {
    const res = await helper.req(this.#url, this.#data);
    this.state.seedDetails.clientSeed = res.response[0].client_seed;
    this.state.seedDetails.nonce = res.response[0].nonce;
    this.state.seedDetails.hashedServerSeed =
      res.response[0].hashed_server_seed_for_user;
    this.state.error = res.error;
  }

  async changeClientSeed(newClientSeed) {
    const data = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token ${this.#token}`,
      },
      body: {
        client_seed: newClientSeed,
        visible: false,
      },
    };
    const res = await helper.req(this.#url, data);
    console.log(res);
    this.state.seedDetails.clientSeed = res.response[0].client_seed;
    this.state.seedDetails.nonce = res.response[0].nonce;
    this.state.seedDetails.hashedServerSeed =
      res.response[0].hashed_server_seed_for_user;
    this.state.error = res.error;
  }
  async changeServerSeed() {
    const url =
      'https://still-frog-f6ef.riverspades336061.workers.dev/api/seeds/seed/change_server_seed/';
    const data = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token ${this.#token}`,
      },
    };
    const res = await helper.req(url, data);
    console.log(res.response);

    this.state.seedDetails.nonce = 0;
    this.state.seedDetails.hashedServerSeed = res.response.hashed_server_seed;
    this.state.error = res.error;
  }
}

export class diceLiveStatsModel {
  state = {
    error: '',
    data: {},
    lastBetID: '',
  };
  #url =
    'https://still-frog-f6ef.riverspades336061.workers.dev/api/game_trx_historic/trxhist/';
  #data;
  #token;
  constructor(token) {
    this.#token = token;

    this.#data = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token ${this.#token}`,
      },
    };
  }

  async requestLiveStats() {
    const res = await helper.req(this.#url, this.#data);
    this.state.data = res.response;

    if (res.response[0]) this.state.lastBetID = res.response[0].id;
    this.state.error = res.error;
    console.log(res);
  }
}
