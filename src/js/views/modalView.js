export default class ModalView {
  targetElement = document.querySelector('body');
  headerTitle = '';
  addHandlerCloseBtn() {
    const modalClose = document.querySelector('.modal-close');

    modalClose.addEventListener(
      'click',
      function () {
        const modal = document.getElementById(this.headerTitle.trim(' '));
        modal.remove();
      }.bind(this)
    );
  }
  renderHeaderButtons() {
    const html = ``;

    return html;

    /*<a href="#" aria-current="page" class="flex-grow px-4 py-2 text-sm font-medium text-highlight bg-white border border-accent/20 rounded-l-lg hover:bg-accent/5 hover:text-highlight ">
  Provably Fair
</a>
<a href="#" class="flex-grow px-4 py-2 text-sm font-medium text-secondary bg-white border hover:bg-accent/5 hover:text-highlight">
  Seeds
</a>
<a href="#" class="flex-grow px-4 py-2 text-sm font-medium text-secondary bg-white border hover:bg-accent/5 hover:text-highlight">
  Verification
</a>
</div>*/
  }

  renderBody() {
    const html = ``;

    return html;

    /*  <div class="flex flex-col">
                  <label for="ActualClientSeed" class="font-light  text-secondary">Actual Client Seed</label>
                    
                  
                      <div class="flex">
                      
                        
                        <input type="text" name="name" id="ActualClientSeed"  class="border border-accent/20 text-secondary text-sm rounded-l-lg   w-full p-2.5" disabled readonly>
                        
                        
                      </div>
                    </div>

                <div class="flex flex-col">
                <label for="NewClientSeed" class="font-light  text-secondary">New Client Seed</label>
                  
                
                    <div class="flex">
                    
                      
                      <input type="text" name="name" id="NewClientSeed" placeholder="Write your seed here" class="border border-accent/20 text-secondary text-sm rounded-l-lg   w-full p-2.5">
                      <button type="button" class="btn-highlight p-2.5 self-end rounded-r-lg rounded-l-none ">Change</button>
                      
                    </div>
                  </div>

                  <div class="flex flex-col">
                    <label for="ServerSeed" class="font-light  text-secondary">Server Seed (hashed)</label>
                      
                    
                        <div class="flex">
                        
                          
                          <input type="text" name="name" id="ServerSeed"  class="border border-accent/20 text-secondary text-sm rounded-l-lg   w-full p-2.5" disabled readonly>
                          <button type="button" class="btn-highlight p-2.5 self-end rounded-r-lg rounded-l-none ">Change</button>
                          
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <label for="Nonce" class="   font-light  text-secondary">Nonce</label>
                      <div class="flex">
                        <div class="flex-grow">
                          
                          <input type="number" name="name" id="Nonce"   value=0 class=" border border-accent/20 text-secondary text-sm rounded-l-lg   w-full p-2.5" disabled readonly>
                        </div>
                      </div>
                      </div> 

                  </div>*/
  }
  render(selectBody, data) {
    const html = `<!-- Main modal -->
<div id="${this.headerTitle.trim(
      ' '
    )}" class="fixed text-lg top-0 overflow-x-hidden  backdrop-blur-sm  z-[999] h-screen w-screen">
  <div class="relative  w-full flex items-center justify-center h-full ">
      <!-- Modal content -->
      <div class="relative overflow-y-scroll p-8 pb-16 sm:pb-20 w-full md:max-w-4xl min-h-[80%] max-h-[80%] sm:min-h-[50%] sm:max-h-[50%] bg-white border border-accent rounded-3xl shadow sm:p-5">

        <!-- Main Grid -->
        <div class="grid gap-16 sm:gap-10  uppercase">

          <!-- Modal header -->

          <div class="modal-header flex flex-col gap-12 sm:gap-4">

          <div class="flex justify-between items-center   rounded-lg  ">
              <h3 class="text-lg font-semibold">
                 ${this.headerTitle}
              </h3>
              <button type="button" class="modal-close text-secondary border  border-accent/20 rounded-full  p-1 ">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Close modal</span>
              </button>
          </div>

          <div class="modal-header-btns-container inline-flex w-full rounded-lg shadow-sm text-center">
      ${this.renderHeaderButtons()}

        </div>

          <!-- Modal body -->
          <form action="#" autocomplete="off">
              <div class="modal-body-container grid gap-8  uppercase">

               ${this.renderBody(selectBody, data)}
               
                  
              </div>
              
          </form>
      </div>
  </div>
  </div>`;
    this.targetElement.insertAdjacentHTML('beforeend', html);
  }
}
