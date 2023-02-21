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

    /*const fontSize =
      window.innerWidth > 1920
        ? ((window.innerWidth * 0.783) / 1920) * 100
        : 78.3;
    console.log(fontSize);*/
    //document.documentElement.style.setProperty('--fontSize', fontSize + '%');
    switch (target) {
      case 'home':
        main.classList.add('home-classes');
        break;

      case 'dice':
        main.classList.add('dice-classes');
        break;
    }
  }
  centralizeContent(target) {
    const main = document.querySelector('main');

    switch (target) {
      case 'home':
        function setMargin() {
          const heroCardHeight =
            document.getElementById('main-herocard').offsetHeight;
          const promoCardHeight =
            document.getElementById('main-promocards').offsetHeight;
          const margin =
            (main.offsetHeight - (heroCardHeight + promoCardHeight)) / 2;
          document.documentElement.style.setProperty('--margin', margin + 'px');
          console.log(window.innerHeight);
          console.log(main.offsetHeight);
        }
        setMargin(); //apply for the first time
        window.addEventListener('resize', setMargin); //apply on resize
        //main.style.marginTop = margin / 2 + 'px';

        /* function handleMediaQuery(event) {
          if (event.matches) main.style.marginBottom = 4 * margin + 'px';
          else main.style.marginBottom = 'auto';
        }
        const tallScreens = window.matchMedia('(max-height: 450px');

        handleMediaQuery(tallScreens);

        tallScreens.addEventListener('change', handleMediaQuery);*/

        break;
    }
  }
}
export default new clearView();
