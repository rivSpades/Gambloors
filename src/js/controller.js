import PromotionsSliderModel from './model.js';
import promotionsSliderView from './views/promotionsSliderView.js';

class ControllerPromotionsSlider {
  constructor() {}

  async controlLoadPromotionsSlider() {
    try {
      await PromotionsSliderModel.load();

      promotionsSliderView.render(PromotionsSliderModel.state.promotionsData);
      promotionsSliderView.initSlider(PromotionsSliderModel.state.currentCard);
    } catch (err) {
      console.log('erro nas Promotions', err);
    }
  }

  controlPromotionsNextSliderArrowBtn() {
    PromotionsSliderModel.slideNextCard();
    promotionsSliderView.selectCard(PromotionsSliderModel.state.currentCard);
    promotionsSliderView.selectSlideTrackerBtn(
      PromotionsSliderModel.state.currentCard
    );
  }

  controlPromotionsPrevSliderArrowBtn() {
    PromotionsSliderModel.slidePrevCard();
    promotionsSliderView.selectCard(PromotionsSliderModel.state.currentCard);
    promotionsSliderView.selectSlideTrackerBtn(
      PromotionsSliderModel.state.currentCard
    );
  }

  controlSlideTrackerBtns(cardSelected) {
    PromotionsSliderModel.setCard(cardSelected);
    promotionsSliderView.selectCard(PromotionsSliderModel.state.currentCard);
    promotionsSliderView.selectSlideTrackerBtn(
      PromotionsSliderModel.state.currentCard
    );
  }

  init() {
    promotionsSliderView.addHandlerRender(this.controlLoadPromotionsSlider);
    promotionsSliderView.addHandlerNextSliderArrow(
      this.controlPromotionsNextSliderArrowBtn
    );
    promotionsSliderView.addHandlerPrevSliderArrow(
      this.controlPromotionsPrevSliderArrowBtn
    );
    promotionsSliderView.addHandlerSlideTrackerBtns(
      this.controlSlideTrackerBtns
    );
  }
}

export default new ControllerPromotionsSlider();
