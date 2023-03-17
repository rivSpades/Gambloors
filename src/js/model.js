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

    diceData: {
      numberGenerated: '',
      betSize: '',
      currentRoll: '',
      rollValue: '',
    },
  };
  #data;
  #url =
    'http://ec2-35-173-177-221.compute-1.amazonaws.com/api/game_trx_historic/trxhist/';

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
    if (multiplier)
      return (this.state.rollValue =
        rollType === 'Roll Under'
          ? (100 - edge) / multiplier
          : -1 * ((100 - edge) / multiplier - 100));

    if (winChance)
      return (this.state.rollValue =
        rollType === 'Roll Under' ? 1 * winChance : -1 * (1 * winChance - 100));
    else return;
  }
  async sendBet(rollType, betSize, token) {
    /*this.state.numberGenerated =
      Math.floor(Math.random() * (max - min) + 1) + min;
    this.state.diceData.currentRoll = currentRoll;
    this.state.diceData.rollValue = rollValue;
    this.state.diceData.betSize = betSize;
    this.state.diceData.numberGenerated = this.state.numberGenerated;

    this.state.payload.body = JSON.stringify({
      data: this.state.diceData,
    });*/
    if (!token || !rollType || !betSize) return;
    this.#data = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token ${token}`,
      },
      body: {
        'type_game': 'dice',
        'user_winrate_choice': this.state.winChance.toFixed(2),
        'is_roll_under': rollType === 'Roll Under' ? true : false,
        'date_game': new Date().toISOString(),
        'bet_amount': betSize,
        'coin_ticker': 'play',
      },
    };

    const res = await helper.req(this.#url, this.#data);
    this.state.numberGenerated = res.response.rolled_dice * 1;
    this.state.isWinner = res.response.is_winner;
    console.log(res);
  }
}

export class loginModel {
  state = {
    token: '',
    error: '',
  };
  #url = 'http://ec2-35-173-177-221.compute-1.amazonaws.com/api/user/token/';
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
  #url = 'http://ec2-35-173-177-221.compute-1.amazonaws.com/api/user/me/';
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

  #url = 'http://ec2-35-173-177-221.compute-1.amazonaws.com/api/user/create/';
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
  };

  #url =
    'http://ec2-35-173-177-221.compute-1.amazonaws.com/api/profile_user/profile/';
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
        imageUrl: 'casino-1.png',
      },
      {
        id: '1',
        cardTitle: 'Casino 2',
        cardDescription: 'Casino 2',
        imageUrl: 'casino-2.png',
      },
      {
        id: '2',
        cardTitle: 'Casino 3',
        cardDescription: 'Casino 3',
        imageUrl: 'casino-3.png',
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
        imageUrl: 'slot-1.png',
      },
      {
        id: '1',
        cardTitle: 'Slot 2',
        cardDescription: 'Slot 2',
        imageUrl: 'slot-2.png',
      },
      {
        id: '2',
        cardTitle: 'Slot 3',
        cardDescription: 'Slot 3',
        imageUrl: 'slot-3.png',
      },
      {
        id: '3',
        cardTitle: 'Slot 4',
        cardDescription: 'Slot 4',
        imageUrl: 'slot-4.png',
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
