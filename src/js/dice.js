'use strict';
window.onload = function () {
  const calcWinChance = (rollUnder) =>
    ((1 / (100 / rollUnder)) * 100).toFixed(0);
  const calcPayout = (rollUnder, betsize, edge) => {
    return (betsize * ((100 - edge) / rollUnder)).toFixed(0);
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
    .addEventListener('input', function () {
      const betSize = document.querySelector('.dice-betsize-form-value').value;
      const rollUnder = document.querySelector('.dice-roll-value').value;
      document.querySelector('.dice-output-payout-value').textContent =
        calcPayout(rollUnder, betSize, edge) + '$';
    });
};
