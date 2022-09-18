'use strict';
window.onload=function(){




const calcWinChance = rollUnder => ((1/(100/rollUnder))*100).toFixed(0);
const calcPayout=(rollUnder,betsize,edge) =>{
  return (betsize*((100-edge)/rollUnder)).toFixed(0);
}



const edge=2;
document.querySelector('.output-payout-value').textContent= calcPayout(50,50,edge)+'$';
document.querySelector('.output-win-chance-value').textContent = calcWinChance(50)+'%';
document.querySelector('.roll-under-value').value=document.querySelector('.slider').value


document.querySelector('.slider').addEventListener('input',function(){

  const rollUnder= document.querySelector('.roll-under-value').value;
  const betSize= document.querySelector('.bet-size-value').value;

  document.querySelector('.output-win-chance-value').textContent = calcWinChance(rollUnder)+'%';
  document.querySelector('.output-payout-value').textContent= calcPayout(rollUnder,betSize,edge)+'$';

});


document.querySelector('.bet-size-value').addEventListener('input',function(){
const betSize= document.querySelector('.bet-size-value').value;
const rollUnder= document.querySelector('.roll-under-value').value;
document.querySelector('.output-payout-value').textContent= calcPayout(rollUnder,betSize,edge)+'$';

});





}
