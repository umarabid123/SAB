const SvgCard = ({items}) =>{
    return(
        <>
        <div className="c-svg-1 flex min-w-[53%] sm:min-w-[30%] xl:min-w-[19%]">
             {items.svg}
              <div className={" .svg-card-img relative hover:z-50" }>
                <img
                 onClick={(e) => {
                  router.push(src + `https://www.youtube.com/embed/zzCZ1W_CUoI?si=Hkmdt2WSkDU823c7`);
                }}
                  src={items.img}
                  alt=""
                  className="h-[61%] lg:h-[48%] xl:h-[54%] w-[100%] relative"
                />
                <img
                  src="/images/icon-top10.png"
                  className="w-[20%] absolute top-0 right-0 "
                />
                <p className="text-[#fff] bg-red-600 inline-block p-[2px] absolute bottom-[100px] sm:bottom-[124px] lg:bottom-52 xl:bottom-40 left-4 text-center rounded-[4px] text-[8px] font-[700] w-[74%]">
                  Recently Added
                </p>
              </div>
            </div>
        </>
    );

    
  
}
export default SvgCard;