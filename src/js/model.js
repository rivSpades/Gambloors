import * as config from './config.js';
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
    numberGenerated: 0,
    diceData: {
      numberGenerated: '',
      betSize: '',
      currentRoll: '',
      rollValue: '',
    },
    payload: {
      method: 'POST',
      headers: {
        'content-type': 'application/json',

        // 'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({
        data: '',
      }),
    },
  };
  constructor() {}

  calcWinChance(currentRoll, rollValue) {
    this.state.winChance = (
      (1 /
        (100 / (currentRoll === 'Roll Under' ? rollValue : 100 - rollValue))) *
      100
    ).toFixed(0);
  }

  calcPayout(currentRoll, rollValue, betSize, edge) {
    edge = this.state.edge;

    this.state.payout = (
      betSize *
      ((100 - edge) /
        (currentRoll === 'Roll Under' ? rollValue : 100 - rollValue))
    ).toFixed(0);
  }
  generateRandomNumber(min, max, currentRoll, rollValue, betSize) {
    this.state.numberGenerated =
      Math.floor(Math.random() * (max - min) + 1) + min;
    this.state.diceData.currentRoll = currentRoll;
    this.state.diceData.rollValue = rollValue;
    this.state.diceData.betSize = betSize;
    this.state.diceData.numberGenerated = this.state.numberGenerated;

    this.state.payload.body = JSON.stringify({
      data: this.state.diceData,
    });
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
        //Vela quais requisitos é necessario enviar  para API e acrescentar/modificar aqui em baixo
        email: this.email,
        password: this.password,
      },
    };
  }

  async requestToken() {
    if (this.state.token) return;
    const res = await helper.req(this.#url, this.#data);
    this.state.token = res.token;

    this.state.error = res.error;
  }

  signOut() {
    if (!this.state.token) return;
    this.state.token = '';
  }
}
