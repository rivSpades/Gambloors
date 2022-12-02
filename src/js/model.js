class PromotionsModel {
  state = {
    promotionsData: '',
    totalCards: '',
    constructor() {},
  };
  loadPromotions() {
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
    this.state.promotionsData = this.loadPromotions();
    this.state.totalCards = this.loadPromotions().length;
  }
}

class PromotionsSliderModel extends PromotionsModel {
  state = {
    promotionsData: '',
    totalCards: '',
    currentCard: 0,
  };
  constructor() {
    super();
  }

  slideNextCard() {
    this.state.currentCard === this.state.totalCards - 1
      ? (this.state.currentCard = 0)
      : this.state.currentCard++;
  }
  slidePrevCard() {
    this.state.currentCard === 0
      ? (this.state.currentCard = this.state.totalCards - 1)
      : this.state.currentCard--;
  }

  setCard(cardNumber) {
    this.state.currentCard = cardNumber;
  }

  load() {
    this.state.promotionsData = this.loadPromotions();
    this.state.totalCards = this.loadPromotions().length;
    this.state.currentCard = 0;
  }
}
export default new PromotionsSliderModel();
