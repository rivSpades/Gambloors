class sideBarView {
  addHandlerRender() {
    const sidebarrBtn = document.querySelector('.sidebar-btn');

    sidebarrBtn.addEventListener('click', function () {
      const sideNav = document.querySelector('.nav-sidebar');

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
  }
}
export default new sideBarView();
