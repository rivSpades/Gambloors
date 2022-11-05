'use strict';
window.onload = function () {
  const calcWinChance = (rollValue) => {
    const currentRoll = document.querySelector(
      '.dice-roll-container .dice-container-title'
    ).textContent;
    return (
      (1 /
        (100 / (currentRoll === 'Roll Under' ? rollValue : 100 - rollValue))) *
      100
    ).toFixed(0);
  };
  const calcPayout = (rollValue, betsize, edge) => {
    const currentRoll = document.querySelector(
      '.dice-roll-container .dice-container-title'
    ).textContent;

    return (
      betsize *
      ((100 - edge) /
        (currentRoll === 'Roll Under' ? rollValue : 100 - rollValue))
    ).toFixed(0);
  };

  const edge = 2;
  document.querySelector('.dice-output-payout-value').textContent =
    calcPayout(50, 50, edge) + '$';
  document.querySelector('.dice-output-winchance-value').textContent =
    calcWinChance(50) + '%';
  document.querySelector('.dice-roll-value').value =
    document.querySelector('.dice-slider').value;

  document.querySelector('.dice-slider').addEventListener('input', function () {
    const rollUnder = document.querySelector('.dice-roll-value').value;
    const betSize = document.querySelector('.dice-betsize-form-value').value;

    document.querySelector('.dice-output-winchance-value').textContent =
      calcWinChance(rollUnder) + '%';
    document.querySelector('.dice-output-payout-value').textContent =
      calcPayout(rollUnder, betSize, edge) + '$';
  });

  document
    .querySelector('.dice-betsize-form-value')
    .addEventListener('input', function (e) {
      const betSize = document.querySelector('.dice-betsize-form-value').value;
      const rollUnder = document.querySelector('.dice-roll-value').value;
      if (isNaN(e.data))
        return (e.target.value = e.target.value.replace(e.data, ''));
      document.querySelector('.dice-output-payout-value').textContent =
        calcPayout(rollUnder, betSize, edge) + '$';
    });

  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;
  document
    .querySelector('.dice-slider-container')
    .addEventListener('mousedown', function () {
      document.querySelector('.dice-slider-bubble').style.display = 'none';
    });

  document
    .querySelector('.dice-roll-btn')
    .addEventListener('click', function () {
      //specify whats going to happen when click

      const value = randomInt(1, 100);
      const rollValue = document.querySelector('.dice-roll-value').value;
      const currentRoll = document.querySelector(
        '.dice-roll-container .dice-container-title'
      ).textContent;
      const betSize = document.querySelector('.dice-betsize-form-value').value;
      if (!betSize) return;
      document.querySelector('.dice-slider-bubble').style.display = 'flex';

      getComputedStyle(document.querySelector('.dice-slider-bubble')).left ===
      '0px'
        ? setTimeout(function () {
            document.querySelector('.dice-slider-bubble').style.left =
              value + '%';
          }, 100)
        : (document.querySelector('.dice-slider-bubble').style.left =
            value + '%');

      document.querySelector('.dice-slider-bubble-value').textContent = value;
      (value < rollValue && currentRoll === 'Roll Under') ||
      (value > rollValue && currentRoll === 'Roll Over')
        ? (document.querySelector('.dice-slider-bubble').style.backgroundColor =
            'green')
        : (document.querySelector('.dice-slider-bubble').style.backgroundColor =
            'red');
    });

  document
    .querySelector('.dice-btn-rollchange')
    .addEventListener('click', function () {
      document
        .querySelector('.dice-roll-container')
        .classList.toggle('dice-roll-container--rotate');
      const currentRoll = document.querySelector(
        '.dice-roll-container .dice-container-title'
      ).textContent;
      const currentValueSlider = document.querySelector('.dice-slider').value;
      setTimeout(function () {
        currentRoll === 'Roll Under'
          ? (document.querySelector(
              '.dice-roll-container .dice-container-title'
            ).textContent = 'Roll Over')
          : (document.querySelector(
              '.dice-roll-container .dice-container-title'
            ).textContent = 'Roll Under');

        document.querySelector('.dice-slider').value =
          50 + (50 - currentValueSlider);
        document.querySelector('.dice-roll-value').value =
          document.querySelector('.dice-slider').value;
      }, 300);
      //dice reset//
      /*currentRoll = document.querySelector(
        '.dice-roll-container .dice-container-title'
      ).textContent;*/

      document.querySelector('.dice-slider-bubble').style.display = 'none';
      /*document.querySelector('.dice-output-payout-value').textContent =
        calcPayout(50, 50, edge) + '$';*/
      /*document.querySelector('.dice-output-winchance-value').textContent =
        calcWinChance(50) + '%';*/

      /* document.querySelector('.dice-betsize-form-value').value = 50;*/
    });
};
