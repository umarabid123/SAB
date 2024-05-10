const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center min-h-16 box-border max-w-[1200px] px-4 sm:px-6  xl:px-0 lg:mx-auto">
        <div className="nav-item flex items-center gap-4 w-[50%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="32"
            viewBox="0 0 36 32"
            fill="none"
            className=""
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
              fill="#007FFF"
            ></path>
          </svg>
          <div className="nav-txt">
            <ul className="text-[#303741] text-md font-semibold py-[8px] hidden lg:flex">
              <li className="cursor-pointer hover:bg-[#f7f8f9] rounded-xl p-3 transition-all duration-100 ease-linear hover:border-[#e8eaee]">Product</li>
              <li className="cursor-pointer hover:bg-[#f6f7f8] rounded-xl p-3 transition-all duration-100 ease-linear hover:border-[#e8eaee]">Doc</li>
              <li className="cursor-pointer hover:bg-[#f6f7f8] rounded-xl p-3 transition-all duration-100 ease-linear hover:border-[#e8eaee]">Pricing</li>
              <li className="cursor-pointer hover:bg-[#f6f7f8] rounded-xl p-3 transition-all duration-100 ease-linear hover:border-[#e8eaee]">About us</li>
              <li className="cursor-pointer hover:bg-[#f6f7f8] rounded-xl p-3 transition-all duration-100 ease-linear hover:border-[#e8eaee]">Blog</li>
            </ul>
          </div>
        </div>
        <div className="nav-item2 w-[50%] flex justify-end items-center gap-2">
          <div className="serach-box bg-[#f6f7f8] border border-gray-200 p-1 rounded-xl w-44  items-center h-[10%] hidden lg:flex">
            <svg
              className="fill-[#006bd6] w-7 pr-1"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="SearchIcon"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
            </svg>
            <input
              type="search"
              placeholder="Search..."
              className="bg-transparent w-20 outline-none"
            />
            <div className="txt bg-white px-1 border border-gray-300 rounded-lg">
              <p className="text-[#303741] text-sm font-semibold">Ctrl+K</p>
            </div>
          </div>
          <div className="search-mobile border border-gray-300 rounded-xl p-2 h-[10%] lg:hidden">
            <svg
              className="fill-[#006bd6] w-6"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="SearchIcon"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
            </svg>
          </div>

          <div className="github border border-gray-300 rounded-xl p-2 h-[10%]">
            <svg
              class=" w-6 fill-[#006bd6]"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="GitHubIcon"
            >
              <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
            </svg>
          </div>
          <div className="Darkmode border border-gray-300 rounded-xl p-2 h-[10%]">
            <svg
              className="w-6 fill-[#006bd6]"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="DarkModeOutlinedIcon"
            >
              <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"></path>
            </svg>
          </div>
          <div className="hamber border border-gray-300 rounded-xl p-2 h-[10%] lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="24"
              viewBox="0 0 16 16"
              fill="none"
              className=""
            >
              <rect
                x="1"
                y="5"
                width="14"
                height="1.5"
                rx="1"
                fill="#007FFF"
              ></rect>
              <rect
                x="1"
                y="9"
                width="14"
                height="1.5"
                rx="1"
                fill="#007FFF"
              ></rect>
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
