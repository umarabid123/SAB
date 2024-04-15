const Card = ({item}) =>{
    return(
        <>
          <div className={" pl-[16px] sm:pl-[16px] min-w-[47%] overflow-x-hidden sm:min-w-[33%] lg:min-w-[23%] xl:min-w-[19%] max-w-[28%] transition-all  hover:z-50 duration-300 ease-in-out hover:scale-150"}>
            <div className=".img-s relative w-[100%]">
              <img
                // onClick={(e) => {
                //   router.push(src + `https://www.youtube.com/embed/u73CLdHpbNk?si=j4J_Dh8za2iOm2R3`);
                // }}
                src={item.images}                
                className="w-[100%] rounded-[2px]"
              />
              <img
                src={item.icon}
                className="w-[10%] absolute top-0 right-0 "
              />
              <p className="text-[#fff] bg-red-600 inline-block p-[2px] absolute bottom-0 left-14 sm:left-20 text-center rounded-[4px] text-[8px] sm:text-[10px] lg:text-[10px] font-[700] w-[40%]">
                {item.text}
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
                <div class="border-arrow sm:block border-solid border-[1px] w-[1%] border-[#fff] rounded-full hover:cursor-pointer"></div>
              </div>
            </div> */}
          </div>
        </>
    )
}
export default Card;