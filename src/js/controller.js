import * as model from './model.js';
import promotionsSliderView from './views/promotionsSliderView.js';
import lobbyView from './views/lobbyView.js';

const promotionsSliderModel = new model.promotionsSliderModel();
const lobbyModel = new model.lobbyModel();

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
