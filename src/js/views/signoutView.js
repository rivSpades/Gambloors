class SignoutView {
  addHandlerSignout(handler) {
    const signoutBtn = document.querySelector('.nav-btn-signout');

    signoutBtn.addEventListener(
      'click',
      function () {
        handler();
      }.bind(this)
    );
  }
}

export default new SignoutView();
