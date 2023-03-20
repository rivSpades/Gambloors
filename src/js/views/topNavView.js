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
}
export default new topNavView();
