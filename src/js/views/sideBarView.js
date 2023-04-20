class sideBarView {
  addHandlerRender() {
    const sidebarrBtn = document.querySelector('.sidebar-btn');
    const main = document.querySelector('main');
    const sideNav = document.querySelector('.nav-sidebar');
    const topNav = document.querySelector('header');
    const footer = document.querySelector('footer');
    function centralizeContent() {
      if (!sideNav.classList.contains('-translate-x-full')) {
        document.documentElement.style.setProperty(
          '--mainWidth',
          ` calc(70vw - ${sideNav.offsetWidth}px)`
        );
        document.documentElement.style.setProperty(
          '--topnavWidth',
          ` calc(100% - ${sideNav.offsetWidth}px)`
        );
        document.documentElement.style.setProperty(
          '--footerWidth',
          ` calc(70vw - ${sideNav.offsetWidth}px)`
        );
        topNav.style.left = sideNav.offsetWidth + 'px';
        footer.style.transform = `translateX(${sideNav.offsetWidth}px )`;

        main.style.transform = `translateX(${sideNav.offsetWidth / 2}px )`;
      } else {
        document.documentElement.style.setProperty('--mainWidth', '70vw');
        document.documentElement.style.setProperty('--topnavWidth', '100%');
        document.documentElement.style.setProperty('--footerWidth', '100%');
        topNav.style.left = '0px';
        footer.style.transform = `translateX(0px) `;
        main.style.transform = `translateX(0px) `;
      }
    }

    sidebarrBtn.addEventListener('click', function () {
      sideNav.classList.toggle('-translate-x-full');
      centralizeContent();
    });
    window.addEventListener('resize', centralizeContent);

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
