const Header = () => {
  return (
    <div className="m-0 p-0 box-border max-w-[100%] overflow-hidden">
      <header>
        <div className="bg-hero-pattern w-[100%] sm:w-[100%] h-[60vh] sm:h-[100vh] overflow-hidden max-w-[100%] bg-no-repeat bg-cover bg-center">
          <div className="bg-primary bg-cover w-[100%] h-[60vh] sm:h-[100vh]">
            <div className="nav bg-transparent h-[41px] xl:h-[68px] px-[17px] sm:px-[31px] lg:px-[40px] flex justify-between items-center fixed z-30 w-[100vw]">
              <div className="nav-item1 flex gap-4 lg:gap-10">
                <svg
                  viewBox="0 0 111 30"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="fill-[rgb(229,9,20)] w-[20%] sm:w-[18%] lg:w-[10%]"
                >
                  <g>
                    <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                  </g>
                </svg>
                <div className="manu hidden lg:block">
                  <ul className="flex items-center gap-4 text-[11px] xl:text-[14px] font-[500] text-[#fff]">
                    <li className="cursor-pointer hover:opacity-[0.8]">Home</li>
                    <li className="cursor-pointer hover:opacity-[0.8]">
                      TV Shows
                    </li>
                    <li className=" cursor-pointer hover:opacity-[0.8]">
                      Movies
                    </li>
                    <li className="cursor-pointer hover:opacity-[0.8]">
                      New & Popular
                    </li>
                    <li className="cursor-pointer hover:opacity-[0.8]">
                      My List
                    </li>
                    <li className="cursor-pointer hover:opacity-[0.8]">
                      Browse by Language
                    </li>
                  </ul>
                </div>
                <div className="mn-2 flex items-center h-[41px] lg:hidden">
                  <a href="" className=" text-[#fff] font-[700] text-[12px]">
                    Browse
                  </a>
                  <div className="mini-2 ml-[7px]"></div>
                </div>
              </div>
              <div className="nav-item-2 flex items-center gap-4 sm:gap-6">
                <svg
                  width="36"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="search-icon ltr-4z3qvp e1svuwfo1"
                  data-name="MagnifyingGlass"
                  aria-hidden="true"
                  className="cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                    fill="white"
                  ></path>
                </svg>
                <svg
                  width="36"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ltr-4z3qvp e1svuwfo1"
                  data-name="Bell"
                  aria-hidden="true"
                  className="cursor-pointer sm:w-30"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
                    fill="white"
                  ></path>
                </svg>
                <img
                  src="/images/loading.png"
                  alt=""
                  className="hover:cursor-pointer"
                />
                <div className="border-arrow hidden sm:block border-solid border-[1px] w-[10%] border-[#fff] rounded-full hover:cursor-pointer"></div>
              </div>
            </div>
            <div className="relative top-[13%] sm:top-[20%]">
              <div className="text w-[36%] flex flex-col gap-2 sm:gap-6 absolute left-[4%] top-[50%]">
                <img src="/images/text.webp" alt="" />
                <p className=" text-[5px] sm:text-[10px] lg:text-[13px] xl:text-[16px] text-[#fff] font-[500]">
                  A high school chemistry teacher dying of cancer teams with a
                  former student to secure his family's future by manufacturing
                  and selling crystal meth.
                </p>
                <div className="btn flex items-center gap-2">
                  <button className="bg-[#fff]  sm:w-[40%] lg:w-[30%] xl:w-[22%] h-[30px] sm:h-[40px] rounded-[4px] flex items-center gap-2 py-[6px] pr-[15px] pl-[12px] sm:py-[9px] sm:pr-[26px] sm:pl-[22px]">
                    <svg
                      width="20%"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ltr-4z3qvp e1svuwfo1"
                      data-name="Play"
                      aria-hidden="true"
                      className=" sm:w-24"
                    >
                      <path
                        d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <p className="text-[10px] sm:text-[16px] font-[500]">
                      Play
                    </p>
                  </button>
                  <button className="bg-black lg:w-[42%] xl:w-[32%] h-[30px] sm:h-[40px] rounded-[4px] flex items-center gap-2 py-[6px] pr-[6px] pl-[6px] sm:py-[9px] sm:pr-[26px] sm:pl-[22px]">
                    <svg
                      width="15%"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w  "
                      data-name="CircleI "
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                        fill="white"
                      ></path>
                    </svg>
                    <p className="text-[10px] sm:text-[16px] text-[#fff] font-[500]">
                      More Info
                    </p>
                  </button>
                </div>
                <div className="text-[14px] font-[500] mt-[110px] sm:mt-[180px] lg:mt-[120px]  text-[#fff]">
                  <p>Violent Action Movies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
    </div>
  );
};
export default Header;
