import ModalView from './modalView.js';

class provablyFairModalView extends ModalView {
  headerTitle = 'Provably Fair';

  addHandlerHeaderBtns(handler) {
    const headerBtnsContainer = document.querySelector(
      '.modal-header-btns-container'
    );

    headerBtnsContainer.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('modal-header-btn'))
          handler(e.target.dataset.body);
      }.bind(this)
    );
  }

  addHandlerChangeClientSeed(handler) {
    const newClientSeedChangeBtn = document.querySelector(
      '.dice-newclientseed'
    );
    newClientSeedChangeBtn.addEventListener(
      'click',
      function () {
        handler();
      }.bind(this)
    );
  }
  addHandlerChangeServerSeed(handler) {
    const serverSeedChangeBtn = document.querySelector('.dice-serverseed');
    serverSeedChangeBtn.addEventListener(
      'click',
      function () {
        handler();
      }.bind(this)
    );
  }

  addHandlerGenerateClientSeed() {
    const newClientSeedInput = document.getElementById('NewClientSeed');
    const generateClientSeedBtn = document.querySelector(
      '.client-seed-generate'
    );
    generateClientSeedBtn.addEventListener(
      'click',
      function () {
        const timestamp = Date.now().toString();
        const randomString = CryptoJS.lib.WordArray.random(16).toString();
        const concatenatedString = timestamp + randomString;
        const hash = CryptoJS.SHA256(concatenatedString);
        const hashWords = hash.words;
        let result = '';
        for (let i = 0; i < 8; i++) {
          const byte = hashWords[i];
          const hex = (byte >>> 0).toString(16);
          result += hex.padStart(8, '0');
        }

        newClientSeedInput.value = result.substring(0, 64);
      }.bind(this)
    );
  }

  selectHeaderButton(selectBody) {
    const headerBtn = document.querySelector(
      `.modal-header-btn[data-body="${selectBody}"]`
    );
    const headerBtnsAll = document.querySelectorAll('.modal-header-btn');
    headerBtnsAll.forEach((btn) => {
      btn.classList.remove('modal-header-btn-selected');
    });
    headerBtn.classList.add('modal-header-btn-selected');

    //this.renderBody(selectBody);
  }

  updateInputs(data) {
    const clientSeedInput = document.getElementById('ActualClientSeed');
    const newClientSeedInput = document.getElementById('NewClientSeed');
    const serverSeedInput = document.getElementById('ServerSeed');
    const nonceInput = document.getElementById('Nonce');

    clientSeedInput.value = data.clientSeed;
    newClientSeedInput.value = '';
    serverSeedInput.value = data.hashedServerSeed;
    nonceInput.value = data.nonce;
  }

  addHandlerVerifyInputs() {
    const verificationInputs = document.querySelectorAll('.verification-input');
    verificationInputs.forEach(
      function (input) {
        input.addEventListener(
          'input',
          function () {
            this.verify();
          }.bind(this)
        );
      }.bind(this)
    );
  }

  verify() {
    const serverSeed = document.getElementById('ServerSeedVerify').value;
    const clientSeed = document.getElementById('ClientSeedVerify').value;
    const nonce = document.getElementById('NonceVerify').value;

    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA512, serverSeed);
    hmac.update(`${clientSeed}-${nonce}`);

    const hash = hmac.finalize().toString(CryptoJS.enc.Hex);

    let index = 0;
    let lucky = parseInt(hash.substring(index, index + 5), 16);
    while (lucky >= Math.pow(10, 6)) {
      index++;
      lucky = parseInt(hash.substring(index, index + 5), 16);
    }

    const numberGenerated = ((lucky % 10 ** 4) / 10 ** 2).toFixed(2);

    const rangeBubble = document.querySelector('.verification-range-bubble');

    const bubbleValueContainer = document.querySelector(
      '.verification-range-bubble-value'
    );

    rangeBubble.style.marginLeft = `${numberGenerated}%`;
    bubbleValueContainer.textContent = numberGenerated;
  }

  renderHeaderButtons() {
    const html = `<div  data-body="provablyFair" class="modal-header-btn">
    Provably Fair
  </div>
  <div  data-body="seeds"  class="modal-header-btn">
    Seeds
  </div>
  <div  data-body="verification" class="modal-header-btn">
    Verification
  </div>
  </div>`;

    return html;
  }

  renderBody(selectBody, data) {
    let html;
    const modalBody = document.querySelector('.modal-body-container');

    switch (selectBody) {
      case 'provablyFair':
      case undefined:
        html = `<article class=" font-normal normal-case leading-5 flex flex-col gap-10">
        <p>
        Provably fair is a concept in online gambling that ensures each roll of the dice is transparent, random, and unbiased. In a provably fair dice game, both the player and the casino can verify the fairness of each outcome.

    </p>

    <p class="font-semibold">Here's how it works:</p>
    
    <ol class="p-inherit   list-inside list-decimal space-y-4"  >
    
    <li> The casino generates a random secret (seed) for each roll. </li>
<li> The player also provides their own seed, which is combined with the casino's seed. </li>
<li> The combined seeds are used to determine the outcome of the dice roll. </li>
<li>After the roll, the casino reveals its initial seed, allowing the player to verify that the outcome was not manipulated. </li>
    </ol>
    

    <p>This system ensures that both parties have an equal influence on the game's outcome, maintaining transparency and trust in the dice game's fairness.</p>
    </article>
    `;

        break;
      case 'seeds':
        html = `<div class="flex flex-col">
    <label for="ActualClientSeed" class="font-light  text-secondary">Actual Client Seed</label>
      
    
        <div class="flex">
        
          
          <input type="text" name="name" id="ActualClientSeed" value=${data.clientSeed} class="border border-accent/20 text-secondary text-sm rounded-l-lg   w-full p-2.5" disabled readonly>
          
          
        </div>
      </div>

  <div class="flex flex-col">
  <label for="NewClientSeed" class="font-light  text-secondary">New Client Seed</label>
    
  
      <div class="flex">
      
        
        <input type="text" name="name" id="NewClientSeed" placeholder="Type your new Client Seed here" class="border border-accent/20 border-r-0 text-secondary text-sm rounded-l-lg   w-full p-2.5">
        <div class=" px-4 h-full text-secondary border border-accent/20 border-l-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="client-seed-generate cursor-pointer h-full w-6" fill="currentColor" viewBox="0 0 256 256"><path d="M237.66,178.34a8,8,0,0,1,0,11.32l-24,24A8,8,0,0,1,200,208V192a72.15,72.15,0,0,1-57.65-30.14l-41.72-58.4A56.1,56.1,0,0,0,55.06,80H32a8,8,0,0,1,0-16H55.06a72.12,72.12,0,0,1,58.59,30.15l41.72,58.4A56.08,56.08,0,0,0,200,176V160a8,8,0,0,1,13.66-5.66ZM143,107a8,8,0,0,0,11.16-1.86l1.2-1.67A56.08,56.08,0,0,1,200,80V96a8,8,0,0,0,13.66,5.66l24-24a8,8,0,0,0,0-11.32l-24-24A8,8,0,0,0,200,48V64a72.15,72.15,0,0,0-57.65,30.14l-1.2,1.67A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86l-1.2,1.67A56.1,56.1,0,0,1,55.06,176H32a8,8,0,0,0,0,16H55.06a72.12,72.12,0,0,0,58.59-30.15l1.2-1.67A8,8,0,0,0,113,149Z"></path></svg>
        </div>
        <button type="button" class="dice-newclientseed btn-highlight p-2.5 self-end rounded-r-lg rounded-l-none ">Change</button>
        
      </div>
    </div>

    <div class="flex flex-col">
      <label for="ServerSeed"  class="font-light  text-secondary">Server Seed (hashed)</label>
        
      
          <div class="flex">
          
            
            <input type="text" name="name" id="ServerSeed" value=${data.hashedServerSeed}  class="border border-accent/20 text-secondary text-sm rounded-l-lg   w-full p-2.5" disabled readonly>
            <button type="button" class="dice-serverseed btn-highlight p-2.5 self-end rounded-r-lg rounded-l-none ">Change</button>
            
          </div>
        </div>
        <div class="flex flex-col">
          <label for="Nonce" class="   font-light  text-secondary">Nonce</label>
        <div class="flex">
          <div class="flex-grow">
            
            <input type="number" name="name" id="Nonce"   value=${data.nonce} class=" border border-accent/20 text-secondary text-sm rounded-l-lg   w-full p-2.5" disabled readonly>
          </div>
        </div>
        </div> 

    </div>`;
        break;
      case 'verification':
        html = `<div class="flex flex-col verification-inputs-container">
        <label for="ClientSeedVerify" class="font-light  text-secondary">Client Seed</label>
          
        
            
            
              
              <input type="text" name="name" id="ClientSeedVerify"  placeholder="Type your Client Seed here" class="verification-input border border-accent/20 text-secondary text-sm rounded-l-lg   w-full p-2.5" >
              
              
            
          </div>

          <div class="flex flex-col">
        <label for="ServerSeedVerify" class="font-light  text-secondary">Server Seed (Unhashed)</label>
          
        
            
            
              
              <input type="text" name="name" id="ServerSeedVerify"  placeholder="Type your Server Seed here" class="verification-input border border-accent/20 text-secondary text-sm rounded-l-lg   w-full p-2.5" >
              
              
            
          </div>

          <div class="flex flex-col">
          <label for="NonceVerify" class="font-light  text-secondary">Nonce</label>
            
          
              
              
                
                <input type="number" name="name" id="NonceVerify"  placeholder="Type your Nonce here" class="verification-input border border-accent/20 text-secondary text-sm rounded-l-lg   w-full p-2.5" >
                
                
              
            </div>

            <div class="  ">

            <!--Bubble container-->
          <div class="border-[1.5rem] border-transparent relative font-medium text-xl">
            <div class="verification-range-bubble dice-range-bubble rotate-45 bg-accent  text-diceGreen w-8 h-8 flex p-6 -top-8 -left-8 ml-[50%] justify-center absolute  ">
              <p class="verification-range-bubble-value dice-range-bubble-value -rotate-45 self-center ">50</p>
            
            </div>
            </div>
              
        
             
            <!--Input Range -->
              <input   class="dice-range-verify w-full  rounded-lg" type="range" min="1.00" max="98.00" value="50.00" step="0.01" list="dice-range-list-verify">
              <datalist id="dice-range-list-verify" class="text-2xl rounded-sm text-primaryWhite list-range-numbers flex  text-center w-full  justify-between item-center    ">
                <option value="0" label="0" class="font-medium"></option>
                <option value="25" label="25" class="font-medium " ></option>
                <option value="50" label="50" class="font-medium "></option>
                <option value="75" label="75" class="font-medium "></option>
                <option value="100" label="100" class="font-medium "></option>
              </datalist>
            </div>
            `;
        break;
    }

    if (modalBody) {
      modalBody.innerHTML = '';

      return modalBody.insertAdjacentHTML('beforeend', html);
    }
    return html;
  }
}

export default new provablyFairModalView();
