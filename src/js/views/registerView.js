class RegisterView {
  targetElement = document.querySelector('body');
  addHandlerRender() {
    this.render();
  }
  addHandlerRenderRegister() {
    const registerBtn = document.querySelector('.nav-btn-register');
    registerBtn.addEventListener(
      'click',
      function () {
        const modalRegister = document.querySelector('.modal-register');
        modalRegister.classList.remove('hidden');
      }.bind(this)
    );
  }
  addHandlerRenderRegisterClose() {
    const closeBtnRegister = document.querySelector('.btn-register-close');

    closeBtnRegister.addEventListener(
      'click',
      function () {
        const modalRegister = document.querySelector('.modal-register');
        modalRegister.classList.add('hidden');
      }.bind(this)
    );
  }
  validateRegister(state) {
    if (state == true) {
      const modalRegister = document.querySelector('.modal-register');
      modalRegister.remove();
    } else {
      const modalRegisterError = document.querySelector(
        '.modal-register-error'
      );

      modalRegisterError.classList.remove('hidden');
      document.querySelector('.register-error-msg').textContent = state;
    }
  }

  addHandlerInputFormRegister(handler) {
    const modalBtnRegister = document.querySelector('.modal-btn-register');
    modalBtnRegister.addEventListener(
      'click',
      function () {
        const name = document.querySelector('.input-r-name').value;
        const email = document.querySelector('.input-r-email').value;
        const password = document.querySelector('.input-r-password').value;
        const cpassword = document.querySelector('.input-r-cpassword').value;

        if (!email || !password || !name || !password || !cpassword) return;

        handler(name, email, password, cpassword);
      }.bind(this)
    );
  }

  render() {
    const html = `
    <!-- Modal Register-->
    <div 
    class="hidden modal-register fixed top-0 overflow-hidden backdrop-blur-sm flex items-center justify-center z-[999] h-screen w-screen"
  >
    <!-- Card Container -->
    <div
      class="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0  md:m-0"
    >
      <div class="p-6 md:p-20 flex-col space-y-4  ">
        <!-- Top Content -->
        <h2 class="font-mono mb-5 text-4xl font-bold">Register</h2>
        <p class="max-w-sm mb-12 font-sans font-light text-gray-600">
          Join us and start gambling!
        </p>
        <input
          type="text"
          class=" input-r-name w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
          placeholder="Enter your name" 
        />
        <input
          type="email"
          class="input-r-email w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
          placeholder="Enter your email address" 
        />
        <input
          type="password"
          class="input-r-password w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
          placeholder="Enter your password" 
        />
        <input
        type="password"
        class="input-r-cpassword w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
        placeholder="Confirm your password" 
      />

        <!-- Middle Content -->
        <div
          class="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0"
        >
          <div></div>

          <button
            class="modal-btn-register w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
          >
            <span>Register</span>
          </button>
        </div>
        <div
      class="modal-register-error hidden flex p-4 m text-sm mt-12 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
      role="alert"
    >
      <svg
        aria-hidden="true"
        class="flex-shrink-0 inline w-5 h-5 mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Error</span> <span class="register-error-msg"><span>
      </div>
    </div>

        <!-- Close Button -->
        <div
          class="btn-register-close group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-black group-hover:text-gray-600"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  </div>`;
    this.targetElement.insertAdjacentHTML('beforeend', html);
  }
}

export default new RegisterView();
