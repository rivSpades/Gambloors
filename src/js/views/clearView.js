class clearView {
  clear() {
    const main = document.querySelector('main');
    main.className = '';
    const section = document.querySelectorAll('main > section');

    console.log(section);
    if (section) {
      console.log(section);
      section.forEach((el) => {
        document.getElementById(el.id).remove();
      });
    }
  }
  addClasses(target) {
    const main = document.querySelector('main');
    switch (target) {
      case 'home':
        main.classList.add('home-classes');
        break;

      case 'dice':
        main.classList.add('dice-classes');
        break;
    }
  }
}
export default new clearView();
