class LoginView {
  targetElement = document.querySelector('body');
  handlerControlLogin;
  addHandlerRender() {
    this.render();
  }
  addHandlerRenderLogin() {
    const loginBtn = document.querySelector('.nav-btn-login');

    loginBtn.addEventListener(
      'click',
      function () {
        const modalLogin = document.querySelector('.modal-login');
        modalLogin.classList.remove('hidden');
      }.bind(this)
    );
  }

  addHandlerSignout(handler) {
    const signoutBtn = document.querySelector('.nav-btn-signout');

    signoutBtn.addEventListener(
      'click',
      function () {
        handler();
      }.bind(this)
    );
  }

  addHandlerRenderLoginClose() {
    const closeBtn = document.querySelector('.btn-login-close');

    closeBtn.addEventListener(
      'click',
      function () {
        const modalLogin = document.querySelector('.modal-login');
        modalLogin.classList.add('hidden');
        //handler('testeuser1234@gmail.com', 'testeuser1234');
      }.bind(this)
    );
  }

  addHandlerInputForm(handler) {
    const modalBtnLogin = document.querySelector('.modal-btn-login');

    modalBtnLogin.addEventListener(
      'click',
      function () {
        const email = document.querySelector('.input-email').value;
        const password = document.querySelector('.input-password').value;

        if (!email || !password) return;

        handler(email, password);
      }.bind(this)
    );
  }

  validate(state) {
    if (state == true) {
      const modalLogin = document.querySelector('.modal-login');
      modalLogin.remove();
      this.#renderUserDetails();
    } else {
      const modalLoginError = document.querySelector('.modal-login-error');

      modalLoginError.classList.remove('hidden');
      document.querySelector('.login-error-msg').textContent = state;
    }
  }

  #renderUserDetails() {
    const html = `<div class="cursor-pointer">
    <div
      class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
    >
      <svg
        class="absolute w-12 h-12 text-gray-400 -left-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
  <div
    id="userDropdown"
    class="bg-primary divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-full right-0 z-10"
  >
    <div class="px-4 py-3 text-sm text-white dark:text-white">
      <div>Bonnie Green</div>
      <div class="font-medium truncate">name@flowbite.com</div>
    </div>

    <div class="py-1">
      <a href="#" class="nav-btn-signout block px-4 py-2 text-sm text-white">Sign out</a>
    </div>
  </div>`;
    const rightNav = document.querySelector('.nav-right');

    rightNav.innerHTML = '';

    rightNav.insertAdjacentHTML('beforeend', html);
  }

  renderSignout() {
    const html = `<div>
    <button
      type="button"
      class="text-white uppercase nav-btn-login hover:text-white border border-white hover:bg-primary focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
    >
      Login
    </button>
    <button
      type="button"
      class="focus:outline-none text-white uppercase bg-highlight hover:bg-yellow-500 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
    >
      Register
    </button>
  </div>`;
    const rightNav = document.querySelector('.nav-right');

    rightNav.innerHTML = '';
    rightNav.insertAdjacentHTML('beforeend', html);
  }

  render() {
    const loginHtml = ` <div 
      class="hidden modal-login fixed top-0 overflow-hidden backdrop-blur-sm flex items-center justify-center z-[999] h-screen w-screen"
    >
      <!-- Card Container -->
      <div
        class="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0"
      >
        <div class="p-6 md:p-20">
          <!-- Top Content -->
          <h2 class="font-mono mb-5 text-4xl font-bold">Log In</h2>
          <p class="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account and start gambling!
          </p>
          <input
            type="email"
            class="input-email w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Enter your email address" 
          />
          <input
            type="password"
            class="input-password w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Enter your password" 
          />

          <!-- Middle Content -->
          <div
            class="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0"
          >
            <div class="font-thin text-cyan-700">Forgot password</div>

            <button
              class="modal-btn-login w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
            >
              <span>Login</span>
            </button>
          </div>
          <div
        class="modal-login-error hidden flex p-4 m text-sm mt-12 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
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
          <span class="font-medium">Error</span> <span class="login-error-msg"><span>
        </div>
      </div>

          <!-- Close Button -->
          <div
            class="btn-login-close group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150"
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
    this.targetElement.insertAdjacentHTML('beforeend', loginHtml);
  }
}

export default new LoginView();
