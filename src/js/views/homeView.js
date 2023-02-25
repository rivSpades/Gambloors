class HomeView {
  targetElement = document.querySelector('main');
  render() {
    const html = `<section id="home-lobby" class="flex flex-col justify-start gap-32 "> </section>`;
    this.targetElement.insertAdjacentHTML('beforeend', html);
  }
}

export default new HomeView();
