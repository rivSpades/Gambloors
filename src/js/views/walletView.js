class WalletView {
  targetElement = document.querySelector('.nav-right');
  addHandlerWallet() {
    const walletSelected = document.querySelector('.nav-wallet-selected');
    const body = document.querySelector('body');

    const walletDropdown = document.getElementById('nav-wallet-dropdown');
    walletSelected.addEventListener(
      'click',
      function (e) {
        //e.stopPropagation();
        walletDropdown.classList.toggle('hidden');
        body.classList.toggle('pointer-events-none');
        //body.classList.toggle('select-none');
        walletDropdown.classList.add('pointer-events-auto');
        walletSelected.classList.add('pointer-events-auto');
      }.bind(this)
    );

    document.addEventListener(
      'click',
      function (e) {
        if (
          walletDropdown.contains(e.target) ||
          walletSelected.contains(e.target) ||
          walletDropdown.classList.contains('hidden')
        )
          return;

        body.classList.remove('pointer-events-none');
        walletDropdown.classList.toggle('hidden');

        walletDropdown.classList.remove('pointer-events-auto');
        walletSelected.classList.remove('pointer-events-auto');
      }.bind(this)
    );
  }
  renderWallet(data) {
    const html = `
        <!--NAV Wallet-->
        <div class="nav-wallet flex-col  self-center mr-3">
          <!--Wallet Selected-->
          <button
            class="nav-wallet-selected gap-3 w-40 flex items-center py-2.5 px-4 text-lg font-bold text-center text-white bg-primary shadow-sm shadow-black/30  hover:bg-primary"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
              xml:space="preserve"
              width="15"
              height="12"
              version="1.1"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 4091.27 4091.73"
            >
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <g id="_1421344023328">
                  <path
                    fill="#F7931A"
                    fill-rule="nonzero"
                    d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"
                  />
                  <path
                    fill="white"
                    fill-rule="nonzero"
                    d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"
                  />
                </g>
              </g>
            </svg>
            <span>${(data.btc * 1).toFixed(3)}</span>
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <!--Wallet dropdown-->

          <div id="nav-wallet-dropdown" class="hidden absolute  top-full nav-card-details ">
            <ul
              class="py-2 text-lg text-white rounded-lg"
              
            >
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-primary"
                >
                  <div class="inline-flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
                      xml:space="preserve"
                      width="15"
                      height="12"
                      version="1.1"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      viewBox="0 0 784.37 1277.39"
                    >
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer" />
                        <g id="_1421394342400">
                          <g>
                            <polygon
                              fill="#343434"
                              fill-rule="nonzero"
                              points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                            />
                            <polygon
                              fill="#8C8C8C"
                              fill-rule="nonzero"
                              points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                            />
                            <polygon
                              fill="#3C3C3B"
                              fill-rule="nonzero"
                              points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                            />
                            <polygon
                              fill="#8C8C8C"
                              fill-rule="nonzero"
                              points="392.07,1277.38 392.07,956.52 -0,724.89 "
                            />
                            <polygon
                              fill="#141414"
                              fill-rule="nonzero"
                              points="392.07,882.29 784.13,650.54 392.07,472.33 "
                            />
                            <polygon
                              fill="#393939"
                              fill-rule="nonzero"
                              points="0,650.54 392.07,882.29 392.07,472.33 "
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span class="font-bold">${(data.eth * 1).toFixed(3)}</span>
                  </div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-primary"
                >
                  <div class="inline-flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
                      xml:space="preserve"
                      width="15"
                      height="12"
                      version="1.1"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      viewBox="0 0 4091.27 4091.73"
                    >
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer" />
                        <g id="_1421344023328">
                          <path
                            fill="#F7931A"
                            fill-rule="nonzero"
                            d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"
                          />
                          <path
                            fill="white"
                            fill-rule="nonzero"
                            d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"
                          />
                        </g>
                      </g>
                    </svg>
                    <span class="font-bold">${(data.btc * 1).toFixed(3)}</span>
                  </div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-primary"
                >
                  <div class="inline-flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 2000 1995.84"
                      width="15"
                      height="12"
                    >
                      <path
                        d="M114.87 999.53a895 895 0 0 0 15.08 163l-111.2 20.76a992.52 992.52 0 0 0 50.56 177.5l105.44-41a885.54 885.54 0 0 0 73.12 146.32l-96.08 59.71a1003.81 1003.81 0 0 0 111.38 147.06l83.52-76.28a894.45 894.45 0 0 0 121 110.25l-68.18 90.26a1000.24 1000.24 0 0 0 156.86 97.2l50.44-101.27a882.84 882.84 0 0 0 152.57 59L728.58 1961A996.2 996.2 0 0 0 910 1994.57l10.25-112.65c26.9 2.45 54.31 3.69 81.48 3.69 27.44 0 55.13-1.27 82.29-3.76l10.36 112.64a996.15 996.15 0 0 0 181.4-33.77l-30.95-108.83a882.9 882.9 0 0 0 152.48-59.16l50.53 101.22a1000.28 1000.28 0 0 0 156.75-97.32l-68.25-90.2a894.47 894.47 0 0 0 120.93-110.35l83.59 76.22a1003.8 1003.8 0 0 0 111.26-147.18l-96.12-59.63a885.67 885.67 0 0 0 73-146.43l105.48 40.87a992.52 992.52 0 0 0 50.4-177.55l-111-20.65a895.19 895.19 0 0 0 15.13-163v-1.61l112.93-.19a1005.34 1005.34 0 0 0-17.26-183.64l-111.23 20.85a882.43 882.43 0 0 0-45-157.25l105.4-41.07a996.37 996.37 0 0 0-82.63-165l-96 59.8a892.7 892.7 0 0 0-98.94-130.4l83.45-76.36a1005.81 1005.81 0 0 0-136.49-124.11l-68.1 90.32A889.26 889.26 0 0 0 1395.91 204l50.35-101.32A993.14 993.14 0 0 0 1274 36.26l-30.74 108.88a886 886 0 0 0-160.87-29.66l10.18-112.67q-44.87-4-90.83-4.08-47.32 0-93.54 4.33l10.46 112.64a885.87 885.87 0 0 0-160.79 30.1L726.83 37a993.17 993.17 0 0 0-172 66.93l50.61 101.17a889.42 889.42 0 0 0-138.94 86.42l-68.33-90.14A1005.84 1005.84 0 0 0 262 325.84L345.66 402a892.61 892.61 0 0 0-98.6 130.67l-96.18-59.54a996.22 996.22 0 0 0-82.22 165.24l105.52 40.78a882.37 882.37 0 0 0-44.52 157.37L18.43 816A1005.6 1005.6 0 0 0 1.74 998.73v.9zm988 700.52l-6-42.11a661.31 661.31 0 0 0 181.79-53.37l17.71 38.68a703.81 703.81 0 0 1-193.53 56.75zm607.38-701.37a709.44 709.44 0 0 1-28.5 199.62l-40.82-12a666.81 666.81 0 0 0 26.79-187.6v-1.1l42.54-.11v1.15zm-113-383.92A705.06 705.06 0 0 1 1681.39 798l-40.8 12a662.54 662.54 0 0 0-79.07-172.21zm-35.13 743.92l35.77 23a711.56 711.56 0 0 1-132.06 152.36l-27.83-32.1a669.05 669.05 0 0 0 124.12-143.26zm-266.88-1005a708.65 708.65 0 0 1 169.7 108.91l-27.83 32.18a666.13 666.13 0 0 0-159.52-102.37zM1188 824h99.11L1416 1014.1V824h101v344h-100.52L1288 978.94V1168h-100V824zm-186.26-533.75a717.11 717.11 0 0 1 99.89 7l-5.95 42.12a674.66 674.66 0 0 0-189.57.24l-6.05-42.11a717.09 717.09 0 0 1 101.68-7.25zM797 824h106v209.59c0 18.74 5.29 33.37 15.68 43.91s24.85 15.81 43.29 15.81c18.28 0 32.83-5.19 43.23-15.57s15.8-25.1 15.8-44.14V824h106v204.71a172.5 172.5 0 0 1-9.72 57.5 124.47 124.47 0 0 1-29.88 47.31q-20.27 20.26-42.6 28.46-30.94 11.47-74.32 11.48a468.15 468.15 0 0 1-54.74-3.51q-29.65-3.52-49.58-13.94t-36.45-29.63c-11-12.8-18.68-26-22.75-39.58-6.56-21.86-10-41.22-10-58.08V824zm110.25 834l-6 42.12a703.88 703.88 0 0 1-193.56-56.64l17.67-38.7A661.35 661.35 0 0 0 907.25 1658zM706.63 354.46l17.74 38.67a666.2 666.2 0 0 0-159.25 102.76l-27.91-32.11a708.71 708.71 0 0 1 169.42-109.32zM487 824h262v74H594v60h133v69H594v141H487V824zm79 678.3l-27.85 32.15a711.54 711.54 0 0 1-132.18-152.25l35.75-23.05A669 669 0 0 0 566 1502.3zm-160.68-886l35.79 23a662.45 662.45 0 0 0-78.63 172.41l-40.88-11.98a705 705 0 0 1 83.68-183.48zm-69.47 383a666.73 666.73 0 0 0 26.94 187.59l-40.81 12a709.26 709.26 0 0 1-28.67-199.55z"
                        fill="#f1385b"
                      />
                    </svg>
                    <span class="font-bold">${(data.fun * 1).toFixed(2)}</span>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>`;

    this.targetElement.insertAdjacentHTML('afterbegin', html);
  }
}

export default new WalletView();
