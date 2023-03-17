class HeroCardView {
  render(loginData, userDetails) {
    let html;
    const heroCard = document.getElementById('main-herocard');
    if (heroCard) heroCard.remove();
    const targetElement = document.getElementById('home-lobby');
    if (loginData && userDetails) {
      html = `<!--Hero Card-->
      <div id="main-herocard" class="main-herocard">
        <div class="main-herocard-grid "
        >
       
          <div
            class="main-herocard-left-top"
          >
          <div>
            <h1
              class="main-herocard-left-top-text"
            >
              Welcome back
            </h1>
            <h1
            class=" main-herocard-left-top-text"
          >
            <span class="text-highlight">${userDetails.state.userDetails.name}!</span> 
          </h1>
            </div>
           <div class="main-herocard-left-bottom">
           
            </div>
          </div>
          <div class="main-herocard-right">
            <img class="main-herocard-right-img" src="https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/dice.png" alt="create account" />
          </div>
        </div>
      </div>`;
    } else {
      html = `<!--Hero Card-->
       <div id="main-herocard" class="main-herocard">
         <div class="main-herocard-grid "
         >
        
           <div
             class="main-herocard-left-top"
           >
           <div>
             <h1
               class="main-herocard-left-top-text"
             >
               Gamble your money with 
             </h1>
             <h1
             class=" main-herocard-left-top-text"
           >
             <span class="text-highlight">the world's #1</span> Casino.
           </h1>
             </div>
            <div class="main-herocard-left-bottom">
            <p
               class="main-herocard-left-bottom-text"
             >
               Join us and start gambling
             </p>
             <button
               type="button"
               class="nav-btn-register main-herocard-left-bottom-btn"
             >
               Create Account
              
             </button>
             </div>
           </div>
           <div class="main-herocard-right">
             <img class="main-herocard-right-img" src="https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/dice.png" alt="create account" />
           </div>
         </div>
       </div>`;
    }

    targetElement.insertAdjacentHTML('beforeend', html);
    const targetCard = document.getElementById('main-herocard');
    targetCard.style.backgroundImage = ` url('img/banner-bg.png')`;
    targetCard.style.backgroundSize = `cover`;
  }
}

export default new HeroCardView();
