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

    UserDetailsDropdown.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        UserDetailsDropdown.classList.add('hidden');
        body.classList.remove('pointer-events-none');
      } else return;
    });
  }

  render(data) {
    let html;
    if (data)
      html = `   
    <!--Nav User Details -->
    <div id="nav-user-details" class="nav-user-details pr-6 cursor-pointer">
    <div
      class="user-details-avatar relative w-16  overflow-hidden bg-transparent text-primaryWhite rounded-full flex gap-3"
    >
    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 256 256"><path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" class=" " fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path></svg>
    </div>
  </div>
  <div id='user-details-dropdown' class="hidden nav-card-details font-medium w-44 absolute top-[150%] right-0">
  <div class="px-4 py-3 text-sm text-primaryWhite">
  <div>${data.name}</div>
  <div class="font-medium truncate">${data.email}</div>
</div>
<ul class="py-2 text-sm text-primaryWhite" >
  <li>
    <a href="#" class="block px-4 py-2 hover:bg-accent">Wallet</a>
  </li>
  <li>
  <a href="#account" class="block px-4 py-2 hover:bg-accent">Settings</a>
  </li>
  
</ul>
<div class="py-2">
  <a href="#" class="nav-btn-signout block px-4 py-2 text-sm text-primaryWhite hover:bg-accent">Sign out</a>
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
