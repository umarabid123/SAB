import { useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };
  return (
    <>
     <div className="bg-[#515358]">
     <div className="mini-nav flex justify-end items-center text-[16px] h-8  px-3 lg:max-w-[940px] mx-auto">
        <p className="bg-[#b10914] text-white inline-block h-full  px-6 py-1 cursor-pointer">
          العربية
        </p>
      </div>
     </div>
      <div className="flex items-centr justify-between lg:justify-start lg:gap-2 xl:gap-1 xl:justify-center  py-6 px-4 lg:px-14 shadow-md shadow-gray-900 bg-[#fff] max-w-[100%]">
        <img
          src="/images/sablogo.gif"
          alt=""
          className="w-28 py-[6px] px-[9px]"
        />
        <img
          src="/images/iconmanu.png"
          alt=""
          className="w-14 h-11 sm:hidden"
          onClick={toggleVisibility}
        />
        <div className="border-[1px] border-gray-100 h-11 hidden sm:block"></div>
        <p className="text-black font-bold text-[18px] leading-6 py-[6px] px-[9px] hover:underline hidden sm:block">
          SAB Mobile
        </p>
        <div className="border-[1px] border-gray-100 h-11 hidden sm:block"></div>
        <p className="text-black font-bold text-[18px] leading-6 py-[6px] px-[9px] hover:underline hidden sm:block">
          SAB Online
        </p>
        <div className="border-[1px] border-gray-100 h-11 hidden sm:block"></div>
        <p className="text-black font-bold text-[18px] leading-6 py-[6px] px-[9px] hover:underline hidden sm:block">
          Business Internet Banking
        </p>
        <div className="border-[1px] border-gray-100 h-11 hidden sm:block"></div>
        <p className="text-black font-bold text-[18px] leading-6 py-[6px] px-[9px] hover:underline hidden sm:block">
          Contact US
        </p>
      </div>

      {isVisible ? null : (
        <div>
          <div className="manu-item w-[90%] mx-auto bg-[#efeff0] py-4">
            <p className="text-[#de0000] font-semibold py-[6px] px-[9px] border-b-2 border-gray-300 mr-4 hover:underline">
              SAB Mobile
            </p>
            <p className="text-[#de0000] font-semibold py-[6px] px-[9px] border-b-2 border-gray-300 mr-4 hover:underline">
              SAB Online
            </p>
            <p className="text-[#de0000] font-semibold py-[6px] px-[9px] border-b-2 border-gray-300 mr-4 hover:underline">
              Business Internet Banking
            </p>
            <p className="text-[#de0000] font-semibold py-[6px] px-[9px] border-b-2 border-gray-300 mr-4 hover:underline">
              Contact US
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
