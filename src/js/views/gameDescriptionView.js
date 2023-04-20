class GameDescription {
  targetElement = document.querySelector('main');

  render() {
    const html = `<!--Game Description --> 
    <section id="game-description-dice" class="w-full p-6 sm:p-0">
    <div  class=" mb-32 p-6 bg-primary border border-accent rounded-lg ">
    <h5 class="mb-6 text-2xl font-bold tracking-tight text-white">BTC Dice Game</h5>
    <p class="font-normal mb-4 text-primaryWhite ">This is the Dice, where the action never stops, and the fun reaches new heights with our extraordinary 10,000-faced dice! Dive into the exhilarating world of crypto dice gaming and explore the endless possibilities with our most played game, designed to keep you on the edge of your seat while you play with your favorite cryptocurrencies like Bitcoin and Ethereum.</p>
    <p class="font-normal mb-4 text-primaryWhite ">Our dice game offers players an unparalleled range of winning chances, from the adrenaline-pumping 9900x multiplier with a 0.01% probability to the safer 1.0102x bet with a 99% win chance. With such a diverse array of outcomes, there's never a dull moment when rolling the dice at Gambloors!</p>
    <p class="font-normal mb-4 text-primaryWhite ">Did you know?</p>
    <p class="font-normal mb-4 text-primaryWhite ">Dice games have been a cornerstone of human entertainment since the dawn of civilization, with the earliest evidence of dice dating back to 3,000 BCE in ancient Egypt, Mesopotamia, and China. These captivating games of chance have withstood the test of time, evolving into this extraordinary digital dice that defies imagination. Would be great to see such a dice in the real world! But for now, let’s enjoy it online.</p>
    <p class="font-normal mb-4 text-primaryWhite ">Since we are using Bitcoin and Ethereum, we are able to provide you with much cheaper deposit and withdrawals processing options, therefore bringing the RTP (return to player) to a hopping 99%!!!</p>
    
  </div>
  </section>`;

    this.targetElement.insertAdjacentHTML('beforeend', html);
  }
}

export default new GameDescription();
