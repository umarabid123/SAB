

const CardPopup = ({popup}) =>{
    return(
        <>
        <div className={
          " flex flex-col w-[30%] group relative box-border p-0 m-0"
        }
      >
        <div className=".img-s relative w-[100%] rounded-t-sm">
            <p className="text-[18px] text-gray-100 absolute top-1 right-3">8 Episodes</p>
          <img
            // onClick={(e) => {
            //   router.push(src + `https://www.youtube.com/embed/u73CLdHpbNk?si=j4J_Dh8za2iOm2R3`);
            // }}
            src={popup.imgs}
            className="w-[100%] rounded-t-md"
          />
          {/* <img src={popup.popupIcon} className="w-[10%] absolute top-0 right-0 " /> */}
          {/* <p className="text-[#fff] bg-red-600 inline-block p-[2px] absolute bottom-0 left-14 sm:left-20 text-center rounded-[4px] text-[8px] sm:text-[10px] lg:text-[10px] font-[700] w-[40%]">
            Recently Added
          </p> */}
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
        <div className="all h-full z-[9999px]  bg-[#2f2f2f] rounded-b-md transition-all duration-500 px-2">
          <div className=" flex justify-between items-start py-2 transition-all duration-500 delay-500">
            <div className="img-logo flex items-center gap-2">
              {/* <img
                src="/images/liked.png"
                className="w-[12%] border-[1px] rounded-full p-[8px] border-[#dbd0d0]"
              />
              <img
                src="/images/plus.png"
                className="w-[14%] rounded-full border-[#dbd0d0]"
              /> */}
            </div>
            {/* <div className=" w-[18.5%] h-[50px] flex justify-center items-center rounded-full">
            <img src="/images/downarrow.png" alt="" onClick={()=>setOpen(!Open)}/>
            </div> */}
          </div>
            <div className="bottom-txt flex items-center justify-between gap-2 p-[1rem] ">
            
             <div className="txtpopup flex items-center gap-2">
             <p className="border-[1px] border-gray-500 text-gray-300 px-2 py-0">16+</p>
              <p className="border-[1px] border-gray-400 text-gray-300 px-1 py-0 rounded-md text-[12px]">HD</p>
              <p className="text-gray-400">2024</p>
             </div>
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="border-[3px] border-gray-400 rounded-full p-2" data-name="Plus" aria-labelledby=":rq:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="white"></path></svg>
            </div>
          <div class="text-gray-300 px-[14px] pb-[14px] text-[15px]">From the Emmy-winning creators of “Game of Thrones” comes this sci-fi mystery series based on the bestselling books about an epic quest to save humanity.</div>
        </div>
      
        
      </div>
        </>
    )
}
export default CardPopup;