'use strict';
const sidebarContainer = document.querySelector('.side-bar-btn-container');

sidebarContainer.addEventListener('click', function (e) {
  const sidebarBtnClose = document.querySelector('.side-bar-btn--close');
  const sidebarBtnOpen = document.querySelector('.side-bar-btn--open');
  const sideNav = document.querySelector('.sider');
  const main = document.querySelector('main');
  const footer = document.querySelector('.footer-container');

  const promotions = document.querySelector('.promotions');

  sidebarBtnClose.classList.toggle('hidden');
  sidebarBtnOpen.classList.toggle('hidden');
  sideNav.classList.toggle('hide-sidebar');
  sideNav.classList.toggle('show-sidebar');
  main.classList.toggle('slide-out');
  main.classList.toggle('slide-in');
  footer.classList.toggle('slide-out--footer');
  footer.classList.toggle('slide-in');
  const promotionsH = Number.parseFloat(
    getComputedStyle(promotions).height,
    10
  );

  if (main.classList.contains('slide-in')) {
    promotions.style.height = promotionsH - promotionsH * 0.15 + 'px';
  } else {
    promotions.style.height = '46%';
  }
});
