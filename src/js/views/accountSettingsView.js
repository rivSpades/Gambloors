class accountSettingsView {
  targetElement = document.querySelector('main');

  render() {
    const html = ` <section id="account">
    <ul class="profile-header-btns-container flex justify-between gap-1   text-sm bg-secondary p-3 rounded-lg font-medium text-center text-primaryWhite w-full lg:w-full mx-auto mt-[20%]">
    <li data-body="profile" class="profile-header-btn profile-header-btn-selected ">
      Profile
    </li>
    <li data-body="email" class="profile-header-btn ">
      Email
    </li>
  <li data-body="password" class="profile-header-btn ">
  Password
</li>
<li data-body="2fa" class="profile-header-btn ">
  2FA
</li>
<li data-body="details" class="profile-header-btn ">
  Details
</li>

</ul>
<form class="body-container mt-12 lg:mt-24 flex flex-col gap-8 items-center lg:items-start lg:px-32 " autocomplete="off">



</form>
</section>`;
    this.targetElement.insertAdjacentHTML('beforeend', html);
  }

  selectHeaderButton(selectBody) {
    const headerBtn = document.querySelector(
      `.profile-header-btn[data-body="${selectBody}"]`
    );
    const headerBtnsAll = document.querySelectorAll('.profile-header-btn');
    headerBtnsAll.forEach((btn) => {
      btn.classList.remove('profile-header-btn-selected');
    });
    headerBtn.classList.add('profile-header-btn-selected');
  }

  addHandlerHeaderBtns(handler) {
    const headerBtnsContainer = document.querySelector(
      '.profile-header-btns-container'
    );

    headerBtnsContainer.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('profile-header-btn'))
          handler(e.target.dataset.body);
      }.bind(this)
    );
  }

  renderBody(selectBody, data) {
    let html;
    const profileBody = document.querySelector('.body-container');
    console.log(data);
    switch (selectBody) {
      case 'profile':
      case undefined:
        html = `
        
        <p class="text-primaryWhite font-bold text-3xl text-center">Profile</p>
        <div class="flex flex-col items-center cursor-pointer">
        <img class="w-[50%] sm:w-[25%]" src="https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/coelho.png" alt="coelho" />
        <p class="text-primaryWhite  font-semibold">Change avatar</p>
        </div>

        <button type="button" class="w-fit font-bold rounded-lg text-sm px-5 py-2.5  text-secondary bg-diceGreen">Save</button>
        
        `;

        break;
      case 'email':
        html = `
        <p class="text-primaryWhite font-bold text-3xl ">Change E-mail</p>
        <div class="flex flex-col gap-2   w-full ">
        <label for="account-email" class="  w-fit  text-primaryWhite">E-mail</label>
        <input type="email" name="email" id="account-email" value="${data.email}"  class=" lg:w-1/4 border border-accent/20 text-sm rounded-l-lg   p-2.5" >
              </div>
          
              <button type="button" class="w-fit font-bold rounded-lg text-sm px-5 py-2.5  text-secondary bg-diceGreen">Save</button>
        `;
        break;
      case 'password':
        html = `<p class="text-primaryWhite font-bold text-3xl ">Change Password</p>
        <div class="flex flex-col gap-2   w-full ">
        <label for="OldPassword" class="  w-fit  text-primaryWhite">Old Password</label>
        <input type="password" name="old-password" id="OldPassword"  placeholder="Type your current password" class=" lg:w-1/4 border border-accent/20 text-primaryWhite text-sm rounded-l-lg   p-2.5" >
              </div>
              <div class="flex flex-col gap-2   w-full ">
        <label for="NewPassword" class="  w-fit  text-primaryWhite">New Password</label>
        <input type="password" name="new-password" id="NewPassword"  placeholder="Type your new password" class=" lg:w-1/4 border border-accent/20 text-primaryWhite text-sm rounded-l-lg   p-2.5" >
              </div>
              <div class="flex flex-col gap-2   w-full ">
        <label for="ConfirmNewPassword" class="  w-fit  text-primaryWhite">Confirm New Password</label>
        <input type="password" name="confirm-new-password" id="ConfirmNewPassword"  placeholder="Confirm your new password" class=" lg:w-1/4 border border-accent/20 text-primaryWhite text-sm rounded-l-lg   p-2.5" >
              </div>
              <button type="button" class="w-fit font-bold rounded-lg text-sm px-5 py-2.5  text-secondary bg-diceGreen">Save</button>`;
        break;
      case '2fa':
        html = ``;
        break;
      case 'details':
        html = `<p class="text-primaryWhite font-bold text-3xl ">Personal Details</p>
        <div class="flex flex-col gap-2   w-full ">
        <label for="FirstName" class="w-fit  text-primaryWhite"  w-fit ">First Name</label>
        <input type="text" name="first-name" id="FirstName" value="${data.name}" class=" lg:w-1/4 border border-accent/20 text-sm rounded-l-lg   p-2.5" >
              </div>
              <div class="flex flex-col gap-2   w-full ">
        <label for="LasttName" class="  w-fit  text-primaryWhite">Last Name</label>
        <input type="text" name="last-name" id="LastName"  class=" lg:w-1/4 border border-accent/20 text-sm rounded-l-lg   p-2.5" >
              </div>
              <div class="flex flex-col gap-2   w-full ">
        <label for="BirthDate" class="  w-fit  text-primaryWhite">Birth Date</label>
        <input type="date" name="birth-date" id="BirthDate"  class=" lg:w-1/4 border border-accent/20  text-sm rounded-l-lg   p-2.5" >
              </div>
              <div class="flex flex-col gap-2   w-full ">
              <label for="Gender" class="  w-fit  text-primaryWhite">Gender</label>
              <input type="text" name="gender" id="Gender"  class=" lg:w-1/4 border border-accent/20  text-sm rounded-l-lg   p-2.5" >
                    </div>
                    <div class="flex flex-col gap-2   w-full ">
                    <label for="Address" class="  w-fit  text-primaryWhite">Address</label>
                    <input type="text" name="address" id="Address"  class=" lg:w-1/4 border border-accent/20  text-sm rounded-l-lg   p-2.5" >
                          </div>
                          <div class="flex flex-col gap-2   w-full ">
                          <label for="PostalCode" class="  w-fit  text-primaryWhite">Postal Code</label>
                          <input type="text" name="postal-code" id="PostalCode"  class=" lg:w-1/4 border border-accent/20  text-sm rounded-l-lg   p-2.5" >
                                </div>
                                <div class="flex flex-col gap-2   w-full ">
                                <label for="City" class="  w-fit  text-primaryWhite">City</label>
                                <input type="text" name="city" id="City"  class=" lg:w-1/4 border border-accent/20 text-primaryWhite text-sm rounded-l-lg   p-2.5" >
                                      </div>
                                      <div class="flex flex-col gap-2   w-full ">
                                      <label for="Country" class="  w-fit  text-primaryWhite">Country</label>
                                      <input type="text" name="country" id="Country"  class=" lg:w-1/4 border border-accent/20 text-sm rounded-l-lg   p-2.5" >
                                            </div>
              <button type="button" class="w-fit font-bold rounded-lg text-sm px-5 py-2.5  text-secondary bg-diceGreen">Save</button>`;
        break;
    }

    if (profileBody) {
      profileBody.innerHTML = '';

      return profileBody.insertAdjacentHTML('afterbegin', html);
    }
    return html;
  }
}
export default new accountSettingsView();
