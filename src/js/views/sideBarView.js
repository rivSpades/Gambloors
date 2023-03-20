class sideBarView {
  addHandlerRender() {
    const sidebarrBtn = document.querySelector('.sidebar-btn');
    const main = document.querySelector('main');
    const sideNav = document.querySelector('.nav-sidebar');
    sidebarrBtn.addEventListener('click', function () {
      sideNav.classList.toggle('-translate-x-full');
    });
    const sidebarNav = document.querySelector('.sidebar-nav');

    sidebarNav.addEventListener('click', function (e) {
      if (!e.target.parentElement.classList.contains('sidebar-dropdown-btn'))
        return;

      if (e.target.parentElement.classList.contains('sidebar-dropdown-btn')) {
        console.log(e.target.parentElement);

        e.target.parentElement.nextElementSibling.classList.toggle('hidden');
      }
    });

    main.addEventListener('click', function (e) {
      if (sideNav.classList.contains('-translate-x-full')) return;
      if (e.target === sideNav) return;
      else sideNav.classList.toggle('-translate-x-full');
    });
  }
}
export default new sideBarView();
