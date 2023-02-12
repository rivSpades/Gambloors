class HeroCardView {
  targetElement = document.querySelector('main');

  render(loginData, userDetails) {
    let html;
    const heroCard = document.getElementById('main-herocard');
    if (heroCard) heroCard.remove();

    if (loginData && userDetails) {
      html = `<!--Hero Card-->
        <section id="main-herocard" class="mb-28 bg-secondary">
        <div class="grid max-w-screen px-4 py-8  lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-2 "
        >
        <div
        class="md:mr-auto place-self-center text-center md:text-left md:col-span-1"
      >
              <h1
                class="max-w-md md:max-w-lg mb-11 text-4xl font-extrabold text-white/70 tracking-tight leading-none md:text-5xl xl:text-6xl"
              >
                Welcome back ${userDetails.state.userDetails.name}!
              </h1>
              <p
                class="max-w-2xl mb-6 font-light text-white/50 lg:mb-8 md:text-lg lg:text-xl"
              >
                We have new fresh promotions!
              </p>
              
            </div>
            <div class="hidden md:mt-0 md:col-span-1 lg:flex md:justify-center h-80">
              <img class="opacity-20" src="https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/dice.png" alt="mockup" />
            </div>
          </div>
        </section>`;
    } else {
      html = `<!--Hero Card-->
       <section id="main-herocard" class="mb-28 bg-secondary">
         <div class="grid max-w-screen px-4 py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2 "
         >
           <div
             class="md:mr-auto place-self-center text-center md:text-left lg:col-span-1"
           >
           
             <h1
               class=" mb-4 text-4xl font-extrabold text-white/70 tracking-tight leading-none md:text-5xl xl:text-6xl"
             >
               Gamble your money with <span class="text-highlight">the world's #1</span> Casino.
             </h1>
             <p
               class="max-w-2xl mb-6 font-light text-white/50 lg:mb-8 md:text-lg lg:text-xl"
             >
               Join us and start gambling
             </p>
             <button
               type="button"
               class="nav-btn-register inline-flex items-center text-white bg-highlight transition duration-75 hover:bg-highlight/80 font-medium rounded-lg px-5 py-3 text-base text-center mr-2 mb-2"
             >
               Create Account
               <svg
                 class="w-5 h-5 ml-2 -mr-1 inline-block"
                 fill="currentColor"
                 viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   fill-rule="evenodd"
                   d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                   clip-rule="evenodd"
                 ></path>
               </svg>
             </button>
           </div>
           <div class="hidden md:mt-0 md:col-span-1 lg:flex md:justify-center h-80">
             <img class="opacity-20" src="https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/dice.png" alt="mockup" />
           </div>
         </div>
       </section>`;
    }
    this.targetElement.insertAdjacentHTML('beforeend', html);
  }
}

export default new HeroCardView();
