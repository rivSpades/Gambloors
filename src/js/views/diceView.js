class diceView {
  targetElement = document.querySelector('main');

  render() {
    const html = `<section id="game-dice" class="w-full  ">
    <div class="dice-container lg:bg-primary/70 lg:border lg:border-secondary select-none  lg:p-12    grid  grid-cols-3 grid-rows-12 gap-x-0  gap-y-14 lg:gap-y-12 items-start text-white">
   
    <div class="px-12 col-start-2 col-end-3 self-start justify-self-center hidden">
    <div class="  dice-input-container  ">
    <svg class="w-8  h-auto" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#cdcdcd" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24.1,24.1,0,0,0,32,64V192a24.1,24.1,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm-36,84a12,12,0,1,1,12-12A12,12,0,0,1,180,156Z"></path></svg>
    <input type="text"   value="100.00" autocomplete="off" disabled    class="dice-wallet dice-input j w-fit text-center    ">
    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 2000 1995.84"
                      class="w-8 h-auto"
                    >
                      <path
                        d="M114.87 999.53a895 895 0 0 0 15.08 163l-111.2 20.76a992.52 992.52 0 0 0 50.56 177.5l105.44-41a885.54 885.54 0 0 0 73.12 146.32l-96.08 59.71a1003.81 1003.81 0 0 0 111.38 147.06l83.52-76.28a894.45 894.45 0 0 0 121 110.25l-68.18 90.26a1000.24 1000.24 0 0 0 156.86 97.2l50.44-101.27a882.84 882.84 0 0 0 152.57 59L728.58 1961A996.2 996.2 0 0 0 910 1994.57l10.25-112.65c26.9 2.45 54.31 3.69 81.48 3.69 27.44 0 55.13-1.27 82.29-3.76l10.36 112.64a996.15 996.15 0 0 0 181.4-33.77l-30.95-108.83a882.9 882.9 0 0 0 152.48-59.16l50.53 101.22a1000.28 1000.28 0 0 0 156.75-97.32l-68.25-90.2a894.47 894.47 0 0 0 120.93-110.35l83.59 76.22a1003.8 1003.8 0 0 0 111.26-147.18l-96.12-59.63a885.67 885.67 0 0 0 73-146.43l105.48 40.87a992.52 992.52 0 0 0 50.4-177.55l-111-20.65a895.19 895.19 0 0 0 15.13-163v-1.61l112.93-.19a1005.34 1005.34 0 0 0-17.26-183.64l-111.23 20.85a882.43 882.43 0 0 0-45-157.25l105.4-41.07a996.37 996.37 0 0 0-82.63-165l-96 59.8a892.7 892.7 0 0 0-98.94-130.4l83.45-76.36a1005.81 1005.81 0 0 0-136.49-124.11l-68.1 90.32A889.26 889.26 0 0 0 1395.91 204l50.35-101.32A993.14 993.14 0 0 0 1274 36.26l-30.74 108.88a886 886 0 0 0-160.87-29.66l10.18-112.67q-44.87-4-90.83-4.08-47.32 0-93.54 4.33l10.46 112.64a885.87 885.87 0 0 0-160.79 30.1L726.83 37a993.17 993.17 0 0 0-172 66.93l50.61 101.17a889.42 889.42 0 0 0-138.94 86.42l-68.33-90.14A1005.84 1005.84 0 0 0 262 325.84L345.66 402a892.61 892.61 0 0 0-98.6 130.67l-96.18-59.54a996.22 996.22 0 0 0-82.22 165.24l105.52 40.78a882.37 882.37 0 0 0-44.52 157.37L18.43 816A1005.6 1005.6 0 0 0 1.74 998.73v.9zm988 700.52l-6-42.11a661.31 661.31 0 0 0 181.79-53.37l17.71 38.68a703.81 703.81 0 0 1-193.53 56.75zm607.38-701.37a709.44 709.44 0 0 1-28.5 199.62l-40.82-12a666.81 666.81 0 0 0 26.79-187.6v-1.1l42.54-.11v1.15zm-113-383.92A705.06 705.06 0 0 1 1681.39 798l-40.8 12a662.54 662.54 0 0 0-79.07-172.21zm-35.13 743.92l35.77 23a711.56 711.56 0 0 1-132.06 152.36l-27.83-32.1a669.05 669.05 0 0 0 124.12-143.26zm-266.88-1005a708.65 708.65 0 0 1 169.7 108.91l-27.83 32.18a666.13 666.13 0 0 0-159.52-102.37zM1188 824h99.11L1416 1014.1V824h101v344h-100.52L1288 978.94V1168h-100V824zm-186.26-533.75a717.11 717.11 0 0 1 99.89 7l-5.95 42.12a674.66 674.66 0 0 0-189.57.24l-6.05-42.11a717.09 717.09 0 0 1 101.68-7.25zM797 824h106v209.59c0 18.74 5.29 33.37 15.68 43.91s24.85 15.81 43.29 15.81c18.28 0 32.83-5.19 43.23-15.57s15.8-25.1 15.8-44.14V824h106v204.71a172.5 172.5 0 0 1-9.72 57.5 124.47 124.47 0 0 1-29.88 47.31q-20.27 20.26-42.6 28.46-30.94 11.47-74.32 11.48a468.15 468.15 0 0 1-54.74-3.51q-29.65-3.52-49.58-13.94t-36.45-29.63c-11-12.8-18.68-26-22.75-39.58-6.56-21.86-10-41.22-10-58.08V824zm110.25 834l-6 42.12a703.88 703.88 0 0 1-193.56-56.64l17.67-38.7A661.35 661.35 0 0 0 907.25 1658zM706.63 354.46l17.74 38.67a666.2 666.2 0 0 0-159.25 102.76l-27.91-32.11a708.71 708.71 0 0 1 169.42-109.32zM487 824h262v74H594v60h133v69H594v141H487V824zm79 678.3l-27.85 32.15a711.54 711.54 0 0 1-132.18-152.25l35.75-23.05A669 669 0 0 0 566 1502.3zm-160.68-886l35.79 23a662.45 662.45 0 0 0-78.63 172.41l-40.88-11.98a705 705 0 0 1 83.68-183.48zm-69.47 383a666.73 666.73 0 0 0 26.94 187.59l-40.81 12a709.26 709.26 0 0 1-28.67-199.55z"
                        fill="#f1385b"
                      />
                    </svg>
    </div>
    </div>
    <div class="px-12 lg:px-56  col-start-1  col-end-4 self-start  ">
    <div class="dice-history flex justify-center text-xl text-center">
    <div class="invisible">12.00</div>
    </div>
    </div>
    <div class="px-12 lg:px-56 col-start-1 col-end-4 self-start  ">
  <div class="border-[1.5rem] border-transparent relative">
    <div class="dice-range-bubble  invisible w-8 h-8 flex p-6 -left-6  justify-center absolute top-16   ">
      <p class="dice-range-bubble-value -rotate-45 self-center ">15</p>
    
    </div>
    </div>
      <datalist id="dice-range-list" class="list-range-numbers flex justify-between ml-[2rem] mb-4 mt-6 ">
        <option value="0" label="0" class="font-semibold text-3xl text-[#cdcdcd]"></option>
        <option value="25" label="25" class="font-semibold text-3xl text-[#cdcdcd]" ></option>
        <option value="50" label="50" class="font-semibold text-3xl text-[#cdcdcd]"></option>
        <option value="75" label="75" class="font-semibold text-3xl text-[#cdcdcd]"></option>
        <option value="100" label="100" class="font-semibold text-3xl text-[#cdcdcd]"></option>
      </datalist>

     
      
      <input  class="dice-range w-full outline-1 rounded-2xl border-[1.5rem]   border-primary lg:border-secondary" type="range" min="1.00" max="98.00" value="50.00" step="0.01" list="dice-range-list">
      
    </div>
  
    <div class="px-12 lg:px-56 col-start-1 col-end-4  flex justify-center self-center gap-4 md:gap-16">
    <div class="dice-multiplier-container">
    <p class="dice-input-title">Multiplier</p>
    <div class=" dice-input-container ">
      <input type="text"  value="1.9600"  autocomplete="off"   class="dice-multiplier dice-input">
      <svg class="w-8 h-auto" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#cdcdcd" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"></path></svg>
      </div>
      <ul class="text-sm font-medium text-center  divide-x divide-white/10  shadow flex" >
      <li class="w-full">
          <a href="#" class="inline-block w-full p-2 text-[#cdcdcd] bg-secondary lg:bg-primary/70  hover:bg-primary lg:hover:bg-[#363636]/30  rounded-bl-lg " >-1</a>
      </li>
      
      <li class="w-full">
        <a href="#" class="inline-block w-full p-2 text-[#cdcdcd] bg-secondary lg:bg-primary/70  hover:bg-primary lg:hover:bg-[#363636]/30  border border-primary rounded-bl-lg " >+1</a>
      </li>
  </ul>
    </div>
    <div>
          <p class="dice-roll-title dice-input-title">Roll Under</p>
          <div class=" dice-input-container dice-roll-container md:bg-[#363636]/30 cursor-pointer">
          <input type="text"   value="50.00" autocomplete="off" disabled id="rangeValueContainer"   class="dice-roll-value dice-input md:bg-transparent   cursor-pointer ">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          class="w-8 h-auto"
        >
          <rect width="256" height="256" fill="none"></rect>
          <polyline
            points="79.8 99.7 31.8 99.7 31.8 51.7"
            fill="none"
            stroke="#cdcdcd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          ></polyline>
          <path
            d="M190.2,65.8a87.9,87.9,0,0,0-124.4,0l-34,33.9"
            fill="none"
            stroke="#cdcdcd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          ></path>
          <polyline
            points="176.2 156.3 224.2 156.3 224.2 204.3"
            fill="none"
            stroke="#cdcdcd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          ></polyline>
          <path
            d="M65.8,190.2a87.9,87.9,0,0,0,124.4,0l34-33.9"
            fill="none"
            stroke="#cdcdcd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          ></path>
        </svg>
          </div>
          </div>
          <div class="dice-winchance-container">
          <p class="dice-input-title">Win Chance</p>
          <div class=" dice-input-container ">
            <input type="text"  value="50.00"  autocomplete="off"   class="dice-winchance dice-input">
            <svg class="w-8 h-auto" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#cdcdcd" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M205.7,61.7l-144,144a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4l144-144a8.1,8.1,0,0,1,11.4,11.4ZM50.5,101.5a36.2,36.2,0,0,1,0-51,36.2,36.2,0,0,1,51,0,36.1,36.1,0,0,1-51,51ZM56,76a19.7,19.7,0,0,0,5.9,14.1,19.9,19.9,0,0,0,28.2,0,19.8,19.8,0,0,0,0-28.2h0a19.8,19.8,0,0,0-28.2,0A19.7,19.7,0,0,0,56,76ZM216,180a36,36,0,1,1-61.5-25.5,36.2,36.2,0,0,1,51,0A35.9,35.9,0,0,1,216,180Zm-16,0a19.7,19.7,0,0,0-5.9-14.1,19.8,19.8,0,0,0-28.2,0A19.9,19.9,0,1,0,200,180Z"></path></svg>
            </div>
            <ul class="text-sm font-medium text-center  divide-x divide-white/10  shadow flex" >
            <li class="w-full">
                <a href="#" class="inline-block w-full p-2 text-[#cdcdcd] bg-secondary lg:bg-primary/70  hover:bg-primary lg:hover:bg-[#363636]/30  rounded-bl-lg " >-5</a>
            </li>
            
            <li class="w-full">
              <a href="#" class="inline-block w-full p-2 text-[#cdcdcd] bg-secondary lg:bg-primary/70  hover:bg-primary lg:hover:bg-[#363636]/30  border border-primary rounded-bl-lg " >+5</a>
            </li>
        </ul>
          </div>
        </div>


    <div class="px-12 col-start-1 col-end-4  lg:col-start-1 lg:col-end-4 flex justify-center self-center gap-4 md:gap-16">
    <div class="dice-betamount-container">
      <p class="dice-input-title">Bet Amount</p>
      <div class=" dice-input-container ">
            <input type="text"  value="0"  autocomplete="off"   class="dice-betAmount dice-input">
            <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 2000 1995.84"
                      class="w-8 h-auto"
                    >
                      <path
                        d="M114.87 999.53a895 895 0 0 0 15.08 163l-111.2 20.76a992.52 992.52 0 0 0 50.56 177.5l105.44-41a885.54 885.54 0 0 0 73.12 146.32l-96.08 59.71a1003.81 1003.81 0 0 0 111.38 147.06l83.52-76.28a894.45 894.45 0 0 0 121 110.25l-68.18 90.26a1000.24 1000.24 0 0 0 156.86 97.2l50.44-101.27a882.84 882.84 0 0 0 152.57 59L728.58 1961A996.2 996.2 0 0 0 910 1994.57l10.25-112.65c26.9 2.45 54.31 3.69 81.48 3.69 27.44 0 55.13-1.27 82.29-3.76l10.36 112.64a996.15 996.15 0 0 0 181.4-33.77l-30.95-108.83a882.9 882.9 0 0 0 152.48-59.16l50.53 101.22a1000.28 1000.28 0 0 0 156.75-97.32l-68.25-90.2a894.47 894.47 0 0 0 120.93-110.35l83.59 76.22a1003.8 1003.8 0 0 0 111.26-147.18l-96.12-59.63a885.67 885.67 0 0 0 73-146.43l105.48 40.87a992.52 992.52 0 0 0 50.4-177.55l-111-20.65a895.19 895.19 0 0 0 15.13-163v-1.61l112.93-.19a1005.34 1005.34 0 0 0-17.26-183.64l-111.23 20.85a882.43 882.43 0 0 0-45-157.25l105.4-41.07a996.37 996.37 0 0 0-82.63-165l-96 59.8a892.7 892.7 0 0 0-98.94-130.4l83.45-76.36a1005.81 1005.81 0 0 0-136.49-124.11l-68.1 90.32A889.26 889.26 0 0 0 1395.91 204l50.35-101.32A993.14 993.14 0 0 0 1274 36.26l-30.74 108.88a886 886 0 0 0-160.87-29.66l10.18-112.67q-44.87-4-90.83-4.08-47.32 0-93.54 4.33l10.46 112.64a885.87 885.87 0 0 0-160.79 30.1L726.83 37a993.17 993.17 0 0 0-172 66.93l50.61 101.17a889.42 889.42 0 0 0-138.94 86.42l-68.33-90.14A1005.84 1005.84 0 0 0 262 325.84L345.66 402a892.61 892.61 0 0 0-98.6 130.67l-96.18-59.54a996.22 996.22 0 0 0-82.22 165.24l105.52 40.78a882.37 882.37 0 0 0-44.52 157.37L18.43 816A1005.6 1005.6 0 0 0 1.74 998.73v.9zm988 700.52l-6-42.11a661.31 661.31 0 0 0 181.79-53.37l17.71 38.68a703.81 703.81 0 0 1-193.53 56.75zm607.38-701.37a709.44 709.44 0 0 1-28.5 199.62l-40.82-12a666.81 666.81 0 0 0 26.79-187.6v-1.1l42.54-.11v1.15zm-113-383.92A705.06 705.06 0 0 1 1681.39 798l-40.8 12a662.54 662.54 0 0 0-79.07-172.21zm-35.13 743.92l35.77 23a711.56 711.56 0 0 1-132.06 152.36l-27.83-32.1a669.05 669.05 0 0 0 124.12-143.26zm-266.88-1005a708.65 708.65 0 0 1 169.7 108.91l-27.83 32.18a666.13 666.13 0 0 0-159.52-102.37zM1188 824h99.11L1416 1014.1V824h101v344h-100.52L1288 978.94V1168h-100V824zm-186.26-533.75a717.11 717.11 0 0 1 99.89 7l-5.95 42.12a674.66 674.66 0 0 0-189.57.24l-6.05-42.11a717.09 717.09 0 0 1 101.68-7.25zM797 824h106v209.59c0 18.74 5.29 33.37 15.68 43.91s24.85 15.81 43.29 15.81c18.28 0 32.83-5.19 43.23-15.57s15.8-25.1 15.8-44.14V824h106v204.71a172.5 172.5 0 0 1-9.72 57.5 124.47 124.47 0 0 1-29.88 47.31q-20.27 20.26-42.6 28.46-30.94 11.47-74.32 11.48a468.15 468.15 0 0 1-54.74-3.51q-29.65-3.52-49.58-13.94t-36.45-29.63c-11-12.8-18.68-26-22.75-39.58-6.56-21.86-10-41.22-10-58.08V824zm110.25 834l-6 42.12a703.88 703.88 0 0 1-193.56-56.64l17.67-38.7A661.35 661.35 0 0 0 907.25 1658zM706.63 354.46l17.74 38.67a666.2 666.2 0 0 0-159.25 102.76l-27.91-32.11a708.71 708.71 0 0 1 169.42-109.32zM487 824h262v74H594v60h133v69H594v141H487V824zm79 678.3l-27.85 32.15a711.54 711.54 0 0 1-132.18-152.25l35.75-23.05A669 669 0 0 0 566 1502.3zm-160.68-886l35.79 23a662.45 662.45 0 0 0-78.63 172.41l-40.88-11.98a705 705 0 0 1 83.68-183.48zm-69.47 383a666.73 666.73 0 0 0 26.94 187.59l-40.81 12a709.26 709.26 0 0 1-28.67-199.55z"
                        fill="#f1385b"
                      />
                    </svg>
</div>
            <ul class="text-sm font-medium text-center  divide-x divide-white/10  shadow flex" >
              <li class="w-full">
                  <a href="#" class="inline-block w-full p-2 text-[#cdcdcd] bg-secondary lg:bg-primary/70  hover:bg-primary lg:hover:bg-[#363636]/30  rounded-bl-lg " >1/2</a>
              </li>
              <li class="w-full">
                <a href="#" class="inline-block w-full p-2 text-[#cdcdcd] bg-secondary lg:bg-primary/70  hover:bg-primary lg:hover:bg-[#363636]/30  border border-primary rounded-bl-lg " >x2</a>
              </li>
              <li class="w-full">
                <a href="#" class="inline-block w-full p-2 text-[#cdcdcd] bg-secondary lg:bg-primary/70  hover:bg-primary lg:hover:bg-[#363636]/30  border border-primary rounded-bl-lg " >max</a>
              </li>
          </ul>
          </div>

          <div>
          <p class="dice-input-title">Payout on Win</p>
          <div class=" dice-input-container ">
          <input type="text"   value="0" autocomplete="off" disabled   class="dice-payout dice-input">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 1995.84"
          class="w-8 h-auto"
        >
          <path
            d="M114.87 999.53a895 895 0 0 0 15.08 163l-111.2 20.76a992.52 992.52 0 0 0 50.56 177.5l105.44-41a885.54 885.54 0 0 0 73.12 146.32l-96.08 59.71a1003.81 1003.81 0 0 0 111.38 147.06l83.52-76.28a894.45 894.45 0 0 0 121 110.25l-68.18 90.26a1000.24 1000.24 0 0 0 156.86 97.2l50.44-101.27a882.84 882.84 0 0 0 152.57 59L728.58 1961A996.2 996.2 0 0 0 910 1994.57l10.25-112.65c26.9 2.45 54.31 3.69 81.48 3.69 27.44 0 55.13-1.27 82.29-3.76l10.36 112.64a996.15 996.15 0 0 0 181.4-33.77l-30.95-108.83a882.9 882.9 0 0 0 152.48-59.16l50.53 101.22a1000.28 1000.28 0 0 0 156.75-97.32l-68.25-90.2a894.47 894.47 0 0 0 120.93-110.35l83.59 76.22a1003.8 1003.8 0 0 0 111.26-147.18l-96.12-59.63a885.67 885.67 0 0 0 73-146.43l105.48 40.87a992.52 992.52 0 0 0 50.4-177.55l-111-20.65a895.19 895.19 0 0 0 15.13-163v-1.61l112.93-.19a1005.34 1005.34 0 0 0-17.26-183.64l-111.23 20.85a882.43 882.43 0 0 0-45-157.25l105.4-41.07a996.37 996.37 0 0 0-82.63-165l-96 59.8a892.7 892.7 0 0 0-98.94-130.4l83.45-76.36a1005.81 1005.81 0 0 0-136.49-124.11l-68.1 90.32A889.26 889.26 0 0 0 1395.91 204l50.35-101.32A993.14 993.14 0 0 0 1274 36.26l-30.74 108.88a886 886 0 0 0-160.87-29.66l10.18-112.67q-44.87-4-90.83-4.08-47.32 0-93.54 4.33l10.46 112.64a885.87 885.87 0 0 0-160.79 30.1L726.83 37a993.17 993.17 0 0 0-172 66.93l50.61 101.17a889.42 889.42 0 0 0-138.94 86.42l-68.33-90.14A1005.84 1005.84 0 0 0 262 325.84L345.66 402a892.61 892.61 0 0 0-98.6 130.67l-96.18-59.54a996.22 996.22 0 0 0-82.22 165.24l105.52 40.78a882.37 882.37 0 0 0-44.52 157.37L18.43 816A1005.6 1005.6 0 0 0 1.74 998.73v.9zm988 700.52l-6-42.11a661.31 661.31 0 0 0 181.79-53.37l17.71 38.68a703.81 703.81 0 0 1-193.53 56.75zm607.38-701.37a709.44 709.44 0 0 1-28.5 199.62l-40.82-12a666.81 666.81 0 0 0 26.79-187.6v-1.1l42.54-.11v1.15zm-113-383.92A705.06 705.06 0 0 1 1681.39 798l-40.8 12a662.54 662.54 0 0 0-79.07-172.21zm-35.13 743.92l35.77 23a711.56 711.56 0 0 1-132.06 152.36l-27.83-32.1a669.05 669.05 0 0 0 124.12-143.26zm-266.88-1005a708.65 708.65 0 0 1 169.7 108.91l-27.83 32.18a666.13 666.13 0 0 0-159.52-102.37zM1188 824h99.11L1416 1014.1V824h101v344h-100.52L1288 978.94V1168h-100V824zm-186.26-533.75a717.11 717.11 0 0 1 99.89 7l-5.95 42.12a674.66 674.66 0 0 0-189.57.24l-6.05-42.11a717.09 717.09 0 0 1 101.68-7.25zM797 824h106v209.59c0 18.74 5.29 33.37 15.68 43.91s24.85 15.81 43.29 15.81c18.28 0 32.83-5.19 43.23-15.57s15.8-25.1 15.8-44.14V824h106v204.71a172.5 172.5 0 0 1-9.72 57.5 124.47 124.47 0 0 1-29.88 47.31q-20.27 20.26-42.6 28.46-30.94 11.47-74.32 11.48a468.15 468.15 0 0 1-54.74-3.51q-29.65-3.52-49.58-13.94t-36.45-29.63c-11-12.8-18.68-26-22.75-39.58-6.56-21.86-10-41.22-10-58.08V824zm110.25 834l-6 42.12a703.88 703.88 0 0 1-193.56-56.64l17.67-38.7A661.35 661.35 0 0 0 907.25 1658zM706.63 354.46l17.74 38.67a666.2 666.2 0 0 0-159.25 102.76l-27.91-32.11a708.71 708.71 0 0 1 169.42-109.32zM487 824h262v74H594v60h133v69H594v141H487V824zm79 678.3l-27.85 32.15a711.54 711.54 0 0 1-132.18-152.25l35.75-23.05A669 669 0 0 0 566 1502.3zm-160.68-886l35.79 23a662.45 662.45 0 0 0-78.63 172.41l-40.88-11.98a705 705 0 0 1 83.68-183.48zm-69.47 383a666.73 666.73 0 0 0 26.94 187.59l-40.81 12a709.26 709.26 0 0 1-28.67-199.55z"
            fill="#f1385b"
          />
        </svg>
          </div>
          </div>

          


          </div>

          <div class="col-start-2 col-end-3  ">
          
        </div>

          <div class="px-12 col-start-1 col-end-4 self-end lg:col-start-2 lg:col-end-3">
            <button type="button" class=" dice-bet-btn w-full   text-primary bg-[#9bed9a]/80 hover:bg-[#9bed9a]  font-semibold rounded-lg text-lg p-2.5 mr-2 mb-2">BET</button>
          </div>

  </section>`;
    this.targetElement.insertAdjacentHTML('beforeend', html);
  }

  addHandlerInputRange(handler) {
    const diceRange = document.querySelector('.dice-range');

    diceRange.addEventListener(
      'input',
      function () {
        this.updateRollValue(diceRange.value);
        this.changeRangeBackground();
        handler();
      }.bind(this)
    );
  }

  changeRangeBackground() {
    const diceRange = document.querySelector('.dice-range');
    const currentRoll = document.querySelector('.dice-roll-title');
    currentRoll.textContent === 'Roll Under'
      ? (diceRange.style.background = `linear-gradient(
        to right,
        rgba(155, 237, 154, 0.5) 0%,
        rgba(155, 237, 154, 0.5) ${diceRange.value}%,
        rgba(255, 153, 153, 0.5) ${diceRange.value}%,
        rgba(255, 153, 153, 0.5) 100%
      )`)
      : (diceRange.style.background = `linear-gradient(
          to right,
          rgba(255, 153, 153, 0.5) 0%,
          rgba(255, 153, 153, 0.5) ${diceRange.value}%,
          rgba(155, 237, 154, 0.5) ${diceRange.value}%,
          rgba(155, 237, 154, 0.5) 100%
        )`);
  }
  addHandlerInputBetSize(handler) {
    const betSize = document.querySelector('.dice-betAmount');

    betSize.addEventListener('input', function (e) {
      if (isNaN(e.data))
        return (e.target.value = e.target.value.replace(e.data, ''));

      handler();
    });
  }

  addHandlerInputMultiplier(handler) {
    const multiplier = document.querySelector('.dice-multiplier');

    multiplier.addEventListener('input', function () {
      handler();
    });
  }

  addHandlerInputWinChance(handler) {
    const winChance = document.querySelector('.dice-winchance');

    winChance.addEventListener('input', function () {
      handler();
    });
  }

  updatePayout(value) {
    document.querySelector('.dice-payout').value = value;
  }
  updateMultiplier(value) {
    document.querySelector('.dice-multiplier').value = value;
  }
  updateWincChance(value) {
    document.querySelector('.dice-winchance').value = value;
  }
  updateRollValue(value) {
    document.getElementById('rangeValueContainer').value = value;
    document.querySelector('.dice-range').step = 0.01;

    document.querySelector('.dice-range').value = value;

    document.querySelector('.dice-range').step = 1.0;

    this.changeRangeBackground();
  }
  getRollType() {
    return document.querySelector('.dice-roll-title').textContent;
  }

  getRollValue() {
    return document.querySelector('.dice-roll-value').value;
  }

  getBetSize() {
    return document.querySelector('.dice-betAmount').value;
  }
  getMultiplier() {
    return document.querySelector('.dice-multiplier').value;
  }

  getWinChance() {
    return document.querySelector('.dice-winchance').value;
  }
  addHandlerChangeRoll() {
    const rollChangeContainer = document.querySelector('.dice-roll-container');

    rollChangeContainer.addEventListener(
      'click',
      function () {
        rollChangeContainer.classList.toggle('dice-roll-container--rotate');
        const currentRoll = document.querySelector('.dice-roll-title');
        const currentValueSlider =
          document.querySelector('.dice-roll-value').value;
        //const slider = document.querySelector('.dice-range');
        //const diceRoll = document.querySelector('.dice-roll-value');
        const rangeBubble = document.querySelector('.dice-range-bubble');

        setTimeout(
          function () {
            currentRoll.textContent === 'Roll Under'
              ? (currentRoll.textContent = 'Roll Over')
              : (currentRoll.textContent = 'Roll Under');

            const calcRollNumber = 50 + (50 - currentValueSlider);

            this.updateRollValue(calcRollNumber);
            this.changeRangeBackground();
          }.bind(this),
          300
        );

        rangeBubble.classList.add('invisible');
      }.bind(this)
    );
  }

  addHandlerBtnBet(handler) {
    const betBtn = document.querySelector('.dice-bet-btn');

    betBtn.addEventListener(
      'click',
      function () {
        //const value = randomInt(1, 100);
        const betSize = this.getBetSize();
        if (!betSize) return;

        handler();
      }.bind(this)
    );
  }

  updateRollResult(numberGenerated, isWinner) {
    const rangeBubble = document.querySelector('.dice-range-bubble');

    const sliderBubbleValueContainer = document.querySelector(
      '.dice-range-bubble-value'
    );
    //rangeBubble.style.display = 'flex';
    rangeBubble.style.transform = `rotate(45deg)`;
    rangeBubble.style.marginLeft = `${numberGenerated}%`;

    isWinner
      ? (rangeBubble.style.backgroundColor = 'rgba(155, 237, 154, 0.8)')
      : (rangeBubble.style.backgroundColor = 'rgba(255, 153, 153, 0.8)');

    rangeBubble.classList.remove('invisible');

    sliderBubbleValueContainer.textContent = numberGenerated;
    this.updateBetHistory(numberGenerated, isWinner);

    //const thumbPosition = (numberGenerated - rangeInput.min) / (rangeInput.max - rangeInput.min);
    //const thumbPositionPercentage = thumbPosition * 100;
    //const translateX = thumbPositionPercentage - (thumbWidth / trackWidth) * 50;
    //rangeBubble.style.transform = `rotate(45deg) translateX(-${translateX}%)`;
    //rangeBubble.style.marginLeft = `${thumbPositionPercentage}%`;
  }

  updateBetHistory(number, isWinner) {
    const history = document.querySelector('.dice-history');
    const color = isWinner ? 'bg-diceGreen' : 'bg-diceRed';
    const html = `<div class="${color} text-secondary text-center  font-medium mr-2 px-2.5 py-0.5 min-w-[4rem] opacity-100   rounded-full">${number}</div>`;
    history.insertAdjacentHTML('afterbegin', html);

    if (history.children.length === 7) {
      history.removeChild(history.children[history.children.length - 1]);

      history.children[history.children.length - 1].style.opacity = '0.2';
      history.children[history.children.length - 2].style.opacity = '0.6';
      history.children[history.children.length - 3].style.opacity = '0.7';
      history.children[history.children.length - 4].style.opacity = '0.8';
    }
  }
}
export default new diceView();
