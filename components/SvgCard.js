const SvgCard = ({items}) =>{
    return(
        <>
        <div className="c-svg-1 flex min-w-[53%] sm:min-w-[31%] lg:min-w-[24%] xl:min-w-[18%]">
             {items.svg}
              <div className={" .svg-card-img relative hover:z-50" }>
                <img
                 onClick={(e) => {
                  router.push(src + `https://www.youtube.com/embed/zzCZ1W_CUoI?si=Hkmdt2WSkDU823c7`);
                }}
                  src={items.img}
                  alt=""
                  className="h-[76%] md:h-[87%] lg:h-[84%] xl:h-[76%] w-[100%] relative"
                />
                <img
                  src="/images/icon-top10.png"
                  className="w-[20%] absolute top-0 right-0 "
                />
                <p className="text-[#fff] bg-red-600 inline-block p-[2px] absolute bottom-[40px] md:bottom-[29px] lg:bottom-[35px] xl:bottom-[60px] left-4 text-center rounded-[4px] text-[8px] font-[700] w-[74%]">
                  Recently Added
                </p>
              </div>
            </div>
        </>
    );

    
  
}
export default SvgCard;