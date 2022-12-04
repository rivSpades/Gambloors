class sideBarView {
  addHandlerRender() {
    const sidebarContainer = document.querySelector('.side-bar-btn-container');

    sidebarContainer.addEventListener('click', function (e) {
      const sidebarBtnClose = document.querySelector('.side-bar-btn--close');
      const sidebarBtnOpen = document.querySelector('.side-bar-btn--open');
      const sideNav = document.querySelector('.sider');
      const main = document.querySelector('main');
      const footer = document.querySelector('.footer-container');

      sidebarBtnClose.classList.toggle('hidden');
      sidebarBtnOpen.classList.toggle('hidden');
      sideNav.classList.toggle('hide-sidebar');
      sideNav.classList.toggle('show-sidebar');
      main.classList.toggle('slide-out');
      main.classList.toggle('slide-in');
      footer.classList.toggle('slide-out--footer');
      footer.classList.toggle('slide-in');
    });
  }
}
export default new sideBarView();
