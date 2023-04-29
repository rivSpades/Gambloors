class HomeView {
  targetElement = document.querySelector('main');
  render() {
    const html = `<section id="home-lobby" class="flex flex-col justify-start  lg:gap-0  mt-24 "> </section>`;
    this.targetElement.insertAdjacentHTML('beforeend', html);
  }
}

export default new HomeView();
