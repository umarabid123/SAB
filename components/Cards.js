import { useState } from "react";
const Card = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    
  
    <>
      {/* <div className="flex flex-col"> */}
      <div
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave} className={
          " flex flex-col min-w-[47%] overflow-x-hidden sm:min-w-[33%] lg:min-w-[23%] xl:min-w-[19%] max-w-[28%] transition-all  hover:z-50 duration-500 ease-in-out hover:scale-125 group relative box-border p-0 m-0"
        }
      >
        <div className=".img-s relative w-[100%]">
          <img
            // onClick={(e) => {
            //   router.push(src + `https://www.youtube.com/embed/u73CLdHpbNk?si=j4J_Dh8za2iOm2R3`);
            // }}
            src={item.images}
            className="w-[100%] rounded-[2px]"
          />
          <img src={item.icon} className="w-[10%] absolute top-0 right-0 " />
          <p className="text-[#fff] bg-red-600 inline-block p-[2px] absolute bottom-0 left-14 sm:left-20 text-center rounded-[4px] text-[8px] sm:text-[10px] lg:text-[10px] font-[700] w-[40%] group-hover:left-24">
            Recently Added
          </p>
        </div>
        {/* <div className="card-txt hidden img-hover:block items-center justify-between">
              <div className="img-logo flex items-center gap-2">
                <img
                  src="/images/liked.png"
                  className="w-[12%] border-[1px] rounded-full p-[8px] border-[#dbd0d0]"
                />
                <img
                  src="/images/plus.png"
                  className="w-[14%] rounded-full border-[#dbd0d0]"
                />
              </div>
              <div className="border-[1px] w-[23%] h-[34px] flex justify-center items-center rounded-full">
                <div className="border-arrow sm:block border-solid border-[1px] w-[1%] border-[#fff] rounded-full hover:cursor-pointer"></div>
              </div>
            </div> */}
        { isHovered && (<div className="all h-36 z-[9999px]  bg-[#141414] rounded-xl transition-all duration-500 px-2">
          <div className=" flex justify-between items-start py-2 transition-all duration-500 delay-500">
            <div className="img-logo flex items-center gap-2">
              <img
                src="/images/liked.png"
                className="w-[12%] border-[1px] rounded-full p-[8px] border-[#dbd0d0]"
              />
              <img
                src="/images/plus.png"
                className="w-[14%] rounded-full border-[#dbd0d0]"
              />
            </div>
            <div className=" w-[18.5%] h-[50px] flex justify-center items-center rounded-full">
            <img src="/images/downarrow.png" alt="" />
            </div>
          </div>
            <div className="bottom-txt flex items-center gap-3">
              <p className="text-[16px] font-medium text-green-500">New</p>
              <p className="border-[1px] border-gray-500 text-gray-500 px-1 py-0">7 +</p>
              <p className="text-gray-400">1h 36m</p>
              <p className="border-[1px] border-gray-500 text-gray-500 px-1 py-0 rounded-md">HD</p>
            </div>
          <div className="bottom-txt-2 ">
            <span className="text-white">Explosive </span> <span className="hr w-[4px] text-[30px] text-gray-500">.</span> <span className="text-white">Violent</span> <span className="hr w-[4px] text-[30px] text-gray-500">.</span> <span className="text-white">Action Thriller</span> 
          </div>
        </div>)}
      </div>
      {/* </div> */}
    </>
  );
};
export default Card;
