class sideBarView {
  addHandlerRender() {
    const sidebarrBtn = document.querySelector('.sidebar-btn');

    sidebarrBtn.addEventListener('click', function (e) {
      const sideNav = document.querySelector('.nav-sidebar');

      sideNav.classList.toggle('-translate-x-full');
    });
    const sidebarNav = document.querySelector('.sidebar-nav');

    sidebarNav.addEventListener('click', function (e) {
      //console.log(e.target.parentElement);
      if (!e.target.parentElement.classList.contains('sidebar-dropdown-btn'))
        return;

      if (e.target.parentElement.classList.contains('sidebar-dropdown-btn')) {
        console.log(e.target.parentElement);
        const sidebarDropdownBtn = document.querySelector(
          '.sidebar-dropdown-btn'
        );

        e.target.parentElement.nextElementSibling.classList.toggle('hidden');
      }
    });
  }
}
export default new sideBarView();
