class topNavView {
  addHandlerRender() {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    body.addEventListener('scroll', () => {
      if (document.body.scrollTop > 0) {
        header.classList.add('bg-primary/90');
        header.classList.remove('bg-transparent');
      }

      if (document.body.scrollTop === 0) {
        header.classList.remove('bg-primary/90');
        header.classList.add('bg-transparent');
      }
    });
  }

  addHandlerUserDetails() {
    const userDetailsAvatar = document.querySelector('.user-details-avatar');
    const body = document.querySelector('body');
    const UserDetailsDropdown = document.getElementById(
      'user-details-dropdown'
    );
    userDetailsAvatar.addEventListener(
      'click',
      function () {
        UserDetailsDropdown.classList.toggle('hidden');
        body.classList.toggle('pointer-events-none');
        //body.classList.toggle('select-none');
        UserDetailsDropdown.classList.add('pointer-events-auto');
        userDetailsAvatar.classList.add('pointer-events-auto');
      }.bind(this)
    );

    document.addEventListener(
      'click',
      function (e) {
        if (
          UserDetailsDropdown.contains(e.target) ||
          userDetailsAvatar.contains(e.target) ||
          UserDetailsDropdown.classList.contains('hidden')
        )
          return;

        body.classList.remove('pointer-events-none');
        UserDetailsDropdown.classList.toggle('hidden');

        UserDetailsDropdown.classList.remove('pointer-events-auto');
        userDetailsAvatar.classList.remove('pointer-events-auto');
      }.bind(this)
    );
  }

  render(data) {
    let html;
    if (data)
      html = `   
    <!--Nav User Details -->
    <div id="nav-user-details" class="nav-user-details pr-6 cursor-pointer">
    <div
      class="user-details-avatar relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full"
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
  <div id='user-details-dropdown' class="hidden nav-card-details font-medium w-44 absolute top-[150%] right-0">
    <div class="px-4 py-3 block  text-white">
      <div>Hello ${data.name}</div>
      <div >${data.email}</div>
    </div>

    <div class="py-1  hover:bg-primary">
      <a href="#" class="nav-btn-signout  block px-4 py-2  text-white">Sign out</a>
    </div>
  </div>`;
    else
      html = `<div class="nav-auth-btns flex gap-4 p-3">
    <button
      type="button"
      class="nav-btn-login btn top-nav-right-btn border text-primaryWhite border-primaryWhite hover:bg-accent hover:text-white"
    >
      Login
    </button>
    <button
      type="button"
      class="nav-btn-register btn-highlight top-nav-right-btn text-highlightWhite bg-highlight hover:bg-highlightAccent hover:text-white"
    >
      Register
    </button>
  </div>`;

    const rightNav = document.querySelector('.nav-right');

    rightNav.innerHTML = '';
    rightNav.insertAdjacentHTML('beforeend', html);
  }
}
export default new topNavView();
