import Button from "./Button";
import Switcher4 from "./Toggle";

const HomeText = () => {
  return (
    <div className="main  lg:pl-6 xl:pl-40 flex overflow-hidden ">
      <div className="left-side w-[100%] sm:w-[70%] lg:min-w-[58%] xl:min-w-[56%] mx-auto flex flex-col items-center lg:items-start lg:mx-0 min-w-[50%] text-center lg:text-start px-4 lg:px-0 pt-10 ">
        <div className="logo flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
          >
            <g clip-path="url(#a)">
              <circle cx="16" cy="16" r="16" fill="#F0F7FF" />
              <path
                fill="#66B2FF"
                d="M10.617 9.321 16 12.397l5.383-3.076a1.599 1.599 0 0 0-.589-.584l-4-2.286a1.6 1.6 0 0 0-1.587 0l-4 2.286a1.6 1.6 0 0 0-.59.584Z"
              />
              <path
                fill="#007FFF"
                d="M10.4 10.126v4.543a1.6 1.6 0 0 0 .806 1.389l4 2.286c.246.14.52.21.794.21v-6.157l-5.383-3.076c-.14.24-.217.517-.217.805Z"
              />
              <path
                fill="#0059B3"
                d="M16.793 18.344a1.6 1.6 0 0 1-.793.21v-6.157l5.383-3.076c.14.24.217.517.217.805v4.543a1.6 1.6 0 0 1-.806 1.389l-4.001 2.286Z"
              />
              <path
                fill="#66B2FF"
                d="M16.617 12.921 22 15.997l5.383-3.076a1.598 1.598 0 0 0-.589-.584l-4-2.286a1.6 1.6 0 0 0-1.587 0l-4 2.285a1.6 1.6 0 0 0-.59.585Z"
              />
              <path
                fill="#007FFF"
                d="M16.4 13.726v4.543a1.6 1.6 0 0 0 .806 1.389l4 2.286c.246.14.52.21.794.21v-6.157l-5.383-3.076c-.14.24-.217.517-.217.805Z"
              />
              <path
                fill="#0059B3"
                d="M22.793 21.944a1.6 1.6 0 0 1-.793.21v-6.157l5.383-3.076c.14.24.217.517.217.805v4.543a1.6 1.6 0 0 1-.806 1.389l-4.001 2.286Z"
              />
              <path
                fill="#66B2FF"
                d="M4.617 12.921 10 15.997l5.383-3.076a1.598 1.598 0 0 0-.589-.584l-4-2.286a1.6 1.6 0 0 0-1.587 0l-4 2.285a1.6 1.6 0 0 0-.59.585Z"
              />
              <path
                fill="#007FFF"
                d="M4.4 13.726v4.543a1.6 1.6 0 0 0 .806 1.389l4 2.286c.246.14.52.21.794.21v-6.157l-5.383-3.076a1.6 1.6 0 0 0-.217.805Z"
              />
              <path
                fill="#0059B3"
                d="M10.793 21.944a1.6 1.6 0 0 1-.793.21v-6.157l5.383-3.076c.14.24.217.517.217.805v4.543a1.6 1.6 0 0 1-.806 1.389l-4.001 2.286Z"
              />
              <path
                fill="#66B2FF"
                d="M10.617 16.521 16 19.597l5.383-3.076a1.599 1.599 0 0 0-.589-.584l-4-2.286a1.6 1.6 0 0 0-1.587 0l-4 2.286a1.6 1.6 0 0 0-.59.584Z"
              />
              <path
                fill="#007FFF"
                d="M10.4 17.326v4.543a1.6 1.6 0 0 0 .806 1.389l4 2.286c.246.14.52.21.794.21v-6.157l-5.383-3.076c-.14.24-.217.517-.217.805Z"
              />
              <path
                fill="#0059B3"
                d="M16.793 25.544a1.6 1.6 0 0 1-.793.21v-6.157l5.383-3.076c.14.24.217.517.217.805v4.543a1.6 1.6 0 0 1-.806 1.389l-4.001 2.286Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h32v32H0z" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-[#006BD6] text-[15px] font-semibold">MUI Core</p>
          <p className="text-[#eaebee] text-[15px] font-semibold">/</p>
          <p className="text-[#000] text-[15px] font-semibold">Material UI</p>
        </div>
        <div className="heading-txt">
          <h1 className="text-[36px] sm:text-[42px]  lg:text-[53px] xl:text-[56px] font-bold leading-tight">
            Ready to use <br />{" "}
            <span className="text-[#006bd6]">Material Design</span> <br />
            components
          </h1>
          <p className="text-[1rem] leading-6 mb-6">
            Material UI is an open-source React component library that
            implements Google's Material Design. It's comprehensive and can be
            used in production out of the box.
          </p>
          <div className="btn flex flex-wrap items-center gap-3">
            <button className="bg-[#0073e6] text-[#fff] text-md font-semibold rounded-md flex gap-1 w-[100%] lg:w-[24%] items-center justify-center px-3 py-2">
              Get started
              <svg
                className="w-[6%] lg:w-[20%]"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="KeyboardArrowRightRoundedIcon"
                fill="#fff"
              >
                <path d="M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42"></path>
              </svg>
            </button>
            <button className="bg-[#fff] border border-gray-300 shadow-sm text-[#000] text-md font-semibold rounded-md flex gap-1 w-[100%] lg:w-[31%] items-center justify-center px-3 py-2">
              View templates
              <svg
                className="w-[6%] lg:w-[16%]"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="KeyboardArrowRightRoundedIcon"
              >
                <path d="M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42"></path>
              </svg>
            </button>
          </div>
          <div className="btn-2 flex justify-center lg:justify-normal">
            <button className="flex items-center gap-2 text-[#6c7c93] mt-4 text-[13px] hover:text-[#006bd6] group">
              $ npm install @mui/material @emotion/react @emotion/styled
              <svg
                className="w-[3%] hidden group-hover:block fill-[#006bd6] "
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ContentCopyRoundedIcon"
              >
                <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="right-side bg-[#ebf5ff] p-6 intial max-w-3xl hidden lg:block w-[800px]">
        <div className="bar bg-[#fff] p-4 mb-8 flex items-center w-[800px]">
          <div className="item flex items-center gap-2 w-[100%]">
            <svg
              class="!fill-[#006bd6] w-[7%]"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CheckCircleIcon"
            >
              <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path>
            </svg>
            <span class="text-black text-sm font-semibold">
              Search for React UI libraries
            </span>
            <div className="w-[27%] !border-b-[1px] border-[#b6bce9]" />
          </div>
          <div className="item flex items-center gap-2 w-[72%]">
            <svg
              class="!fill-[#006bd6] w-[10%]"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CheckCircleIcon"
            >
              <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path>
            </svg>
            <span class="text-black text-sm font-semibold">
              Spot Material UI
            </span>
            <div className="w-[33%] !border-b-[1px] border-[#b6bce9]" />
          </div>
          <div className="item flex items-center gap-2 w-[72%]">
            <svg
              class="!fill-[#006bd6] w-[10%]"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CheckCircleIcon"
            >
              <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path>
            </svg>
            <span class="text-black text-sm font-semibold">
              Spot Material UI
            </span>
            <div className="w-[18%] !border-b-[1px] border-[#b6bce9]" />
          </div>
        </div>
        <div className="main-bar flex gap-8">
          <div className="left-bar w-[50%]">
            <div className="card bg-white rounded-lg border border-gray-300 max-w-[370px]">
              <div className="text-item px-4 flex items-center justify-between">
                <p className="text-sm">Usage</p>
                <svg
                  className="fill-gray-500 w-5 my-3"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ExpandMoreIcon"
                >
                  <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
              </div>
              <div className="border-[1px] border-b border-gray-300" />
              <div className="text-item px-4 flex items-center justify-between">
                <p className="text-sm">Globals</p>
                <svg
                  className="fill-gray-500 w-5 my-3"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ExpandMoreIcon"
                >
                  <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
              </div>
              <div className="text-item px-4 flex items-center justify-between bg-[#0000001f] py-2">
                <p className="text-sm font-medium text-gray-400">
                  Secret Files
                </p>
                <svg
                  className="fill-gray-500 w-5 my-3"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ExpandMoreIcon"
                >
                  <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
              </div>
            </div>
            <Button
              svgIcon={
                <svg
                  class="fill-white w-[10%]"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CheckCircleRoundedIcon"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9.29 16.29 5.7 12.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0"></path>
                </svg>
              }
              customClass={"gap-7 mt-6"}
              text={"Check Material UI out now!"}
            />
            <div className="btn mt-5 flex gap-5 items-center">
              <Switcher4 />
              <Switcher4 />
              <input type="checkbox" className="w-8 h-6" />
              <input type="checkbox" className="w-8 h-6" />
              <div className="main-format bg-white w-[50%] p-4 border border-gray-300 rounded-sm flex justify-center">
                <div className="lines w-fit flex border border-gray-400 h-fit rounded-sm">
                  <div className="lines-item bg-[#f1f2f3] w-fit p-1 border-r border-gray-400">
                    <svg
                      class="fill-black w-7 "
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="FormatAlignLeftIcon"
                    >
                      <path d="M15 15H3v2h12zm0-8H3v2h12zM3 13h18v-2H3zm0 8h18v-2H3zM3 3v2h18V3z"></path>
                    </svg>
                  </div>
                  <div className="lines-item w-fit p-1 border-r border-gray-400">
                    <svg
                      class="w-7 fill-gray-400"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="FormatAlignCenterIcon"
                    >
                      <path d="M7 15v2h10v-2zm-4 6h18v-2H3zm0-8h18v-2H3zm4-6v2h10V7zM3 3v2h18V3z"></path>
                    </svg>
                  </div>
                  <div className="lines-item w-fit p-1">
                    <svg
                      className="w-7 fill-gray-300 cursor-pointer"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="FormatAlignRightIcon"
                    >
                      <path d="M3 21h18v-2H3zm6-4h12v-2H9zm-6-4h18v-2H3zm6-4h12V7H9zM3 3v2h18V3z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-bar w-[50%] flex flex-col gap-6">
            <div className="right-btn flex gap-2">
              <button className="bg-[#0073e6] text-[#fff] text-md font-semibold rounded-md flex gap-1 lg:w-[100%] items-center justify-center px-3 py-1 h-12 outline-none">
                <svg
                  className="fill-white !w-[14%]"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="DownloadIcon"
                >
                  <path d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"></path>
                </svg>
                Install library
              </button>
              <button className="bg-[#fff] text-[#0073e6] border-[1px] border-[#0073e6] text-lg font-semibold rounded-md flex gap-1 w-[100%] lg:w-[100%] items-center justify-center px-3 py-1 h-12">
                <svg
                  className="fill-[#0073e6] !w-[14%]"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="DownloadIcon"
                >
                  <path d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"></path>
                </svg>
                Install library
              </button>
            </div>
            <div className="range bg-white p-4 border-[1px] border-gray-300 rounded-md">
              <p className="text-sm text-black mb-2">Temperature range</p>
              <div className="input flex items-center gap-3">
                <svg
                  className="fill-[#006bd6] w-[8%]"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AcUnitRoundedIcon"
                >
                  <path d="M21 11h-3.17l2.54-2.54c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0L15 11h-2V9l3.95-3.95c.39-.39.39-1.03 0-1.42a.9959.9959 0 0 0-1.41 0L13 6.17V3c0-.55-.45-1-1-1s-1 .45-1 1v3.17L8.46 3.63a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42L11 9v2H9L5.05 7.05c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41L6.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h3.17l-2.54 2.54c-.39.39-.39 1.02 0 1.41.39.39 1.03.39 1.42 0L9 13h2v2l-3.95 3.95c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0L11 17.83V21c0 .55.45 1 1 1s1-.45 1-1v-3.17l2.54 2.54c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42L13 15v-2h2l3.95 3.95c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41L17.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1"></path>
                </svg>
                <input type="range" className="w-[80%] outline-none" />
                <svg
                  className="fill-red-500 w-[8%]"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LocalFireDepartmentIcon"
                >
                  <path d="m12 12.9-2.13 2.09c-.56.56-.87 1.29-.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-.78-.31-1.52-.87-2.07z"></path>
                  <path d="m16 6-.44.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86-.56-.79-.89-1.76-.89-2.8 0-1.32.52-2.56 1.47-3.5L12 10.1l3.53 3.47c.95.93 1.47 2.17 1.47 3.5 0 1.02-.31 1.96-.85 2.75 1.89-1.15 3.29-3.06 3.71-5.3.66-3.55-1.07-6.9-3.86-8.52"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeText;
