import CardPopup from "./MiniCardsPopUp";

const PopUp = (Pop) => {
  const POPUPDATA = [
    {
      imgs: "/images/extract.jpg",
      popupIcon: "/images/icon-top10.png",
    },
    {
      imgs: "/images/leo.webp",
      popupIcon: "/images/icon-top10.png",
    },
    {
      imgs: "/images/extract2.jpg",
      popupIcon: "/images/icon-top10.png",
    },
    {
      imgs: "/images/extract.jpg",
      popupIcon: "/images/icon-top10.png",
    },
    {
      imgs: "/images/lucky.webp",
      popupIcon: "/images/icon-top10.png",
    },
    ,
    {
      imgs: "/images/leo.webp",
      popupIcon: "/images/icon-top10.png",
    },
    {
      imgs: "/images/extract2.jpg",
      popupIcon: "/images/icon-top10.png",
    },
    {
      imgs: "/images/extract.jpg",
      popupIcon: "/images/icon-top10.png",
    },
    {
      imgs: "/images/lucky.webp",
      popupIcon: "/images/icon-top10.png",
    },
  ];

  return (
    <>
      <div className="flex flex-col z-40 w-[100%] h-[100%]">
        <div className=".img-s relative w-[100%] z-40 bg-[url('/images/popup-img.webp')] h-[90vh] bg-cover bg-center rounded-t-xl">
          <div className="icon-btn absolute top-2/4 left-14 flex justify-between items-end w-[85%]">
            <div className="logo">
              <img
                src="/images/popup-img2.webp"
                className="w-[50%] mb-[24px]"
              />
              <div className="btn flex items-center gap-4">
                <button class="bg-[#fff]  sm:w-[40%] lg:w-[30%] xl:w-[15%] h-[30px] sm:h-[40px] rounded-[4px] flex items-center gap-2 py-[6px] pr-[15px] pl-[12px] sm:py-[9px] sm:pr-[26px] sm:pl-[22px]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class=" sm:w-[30rem]"
                    data-name="Play"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p class="text-[10px] sm:text-[16px] font-[500]">Play</p>
                </button>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="border-[3px] border-gray-400 rounded-full p-2"
                  data-name="Plus"
                  aria-labelledby=":rq:"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                    fill="white"
                  ></path>
                </svg>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#fff] border-[3px] border-gray-400 rounded-full p-2"
                  data-name="ThumbsUp"
                  aria-labelledby=":rr:"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="white"
                    clip-rule="evenodd"
                    d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="svg">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-gray-400 border-[3px] border-gray-400 rounded-full p-2"
                data-name="VolumeOff"
                aria-labelledby=":r6m:"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z"
                  fill=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="all h-[100%] bg-[#181818] rounded-none-xl transition-all duration-500 z-40 px-[64px]">
          {/* <div className=" flex justify-between items-start py-2 transition-all duration-500 delay-500">
            {/* <div className="img-logo flex items-center gap-2">
              <img
                src="/images/liked.png"
                className="w-[12%] border-[1px] rounded-none-full p-[8px] border-[#dbd0d0]"
              />
              <img
                src="/images/plus.png"
                className="w-[14%] rounded-none-full border-[#dbd0d0]"
              />
            </div> */}
          {/* <div className=" w-[18.5%] h-[50px] flex justify-center items-center rounded-none-full">
              <img
                src="/images/downarrow.png"
                alt=""
                onClick={() => setOpen(!Open)}
              />
            </div> */}
          {/* </div> */}
          <div className="txt-all flex mt-10">
            <div className="text-item-1 w-[65%]">
              <div className="text-m my-[.8rem]">
                <div className="bottom-txt flex items-center gap-3">
                  <p className="text-[16px] font-medium text-green-500">New</p>
                  <p className="text-gray-400">2023</p>
                  <p className="text-gray-400">1h 36m</p>

                  <p className="border-[1px] border-gray-500 text-gray-500 px-1 py-0 rounded-md">
                    HD
                  </p>
                </div>
                <div className="txt flex gap-3 ">
                  <p className="border-[1px] border-gray-500 text-white px-2 py-0 mb-[.8rem]">
                    16+
                  </p>
                  <span className="text-gray-100">Violent, mature themes</span>
                </div>
              </div>
              <div className="bottom-txt-2 flex ">
                <img
                  src="/images/icon-top10.png"
                  className="w-[6%] rounded-[3px] mr-2 mb-[.5rem]"
                />
                <h5 className="text-white text-[20px] font-bold">
                  #2 in Movies Today
                </h5>
              </div>
              <div className="bottom-txt-3 text-[14px] text-white font-bold my-[.5rem]">
                Ahead of a major constitutional decision, special agent Zooni
                Haksar is tasked with a secret mission to quell violence in a
                conflict-ridden region.
              </div>
            </div>
            <div className="text-item-2 w-[35%]">
              <div className="my-[.8rem] ml-[.6rem]">
                <span className="text-gray-400">Cast:</span>
                <span class="tag-item text-white" data-uia="tag-item">
                  <a
                    href="/browse/m/person/30170941"
                    historystate="[object Object]"
                  >
                    {" "}
                    Yami Gautam,{" "}
                  </a>
                </span>
                <span class="tag-item text-white" data-uia="tag-item">
                  <a
                    href="/browse/m/person/30075236"
                    historystate="[object Object]"
                  >
                    Priyamani,{" "}
                  </a>
                </span>
                <span class="tag-item text-white" data-uia="tag-item">
                  <a
                    href="/browse/m/person/40171870"
                    historystate="[object Object]"
                  >
                    Vaibhav Tatwawaadi,{" "}
                  </a>
                </span>
                <span class="tag-more text-white" data-uia="tag-more">
                  <a href="#about">more</a>
                </span>
              </div>
              <div className="my-[.8rem] ml-[.6rem]">
                <span className="text-gray-400">Genres:</span>
                <span class="tag-item text-white" data-uia="tag-item">
                  <a
                    href="/browse/m/person/30170941"
                    historystate="[object Object]"
                  >
                    {" "}
                    Yami Gautam,{" "}
                  </a>
                </span>
                <span class="tag-item text-white" data-uia="tag-item">
                  <a
                    href="/browse/m/person/30075236"
                    historystate="[object Object]"
                  >
                    Priyamani,{" "}
                  </a>
                </span>
                <span class="tag-item text-white" data-uia="tag-item">
                  <a
                    href="/browse/m/person/40171870"
                    historystate="[object Object]"
                  >
                    Vaibhav Tatwawaadi,{" "}
                  </a>
                </span>
                <span class="tag-more text-white" data-uia="tag-more">
                  <a href="#about">more</a>
                </span>
              </div>
              <div className="my-[.8rem] ml-[.6rem]">
                <span className="text-gray-400">This movie is:</span>
                <span class="tag-item text-white" data-uia="tag-item">
                  <a
                    href="/browse/m/person/30170941"
                    historystate="[object Object]"
                  >
                    {" "}
                    Yami Gautam,{" "}
                  </a>
                </span>
                <span class="tag-item text-white" data-uia="tag-item">
                  <a
                    href="/browse/m/person/30075236"
                    historystate="[object Object]"
                  >
                    Priyamani,{" "}
                  </a>
                </span>
                <span class="tag-item text-white" data-uia="tag-item">
                  <a
                    href="/browse/m/person/40171870"
                    historystate="[object Object]"
                  >
                    Vaibhav Tatwawaadi,{" "}
                  </a>
                </span>
                <span class="tag-more text-white" data-uia="tag-more">
                  <a href="#about">more</a>
                </span>
              </div>
            </div>
          </div>
         <div className="popupcards flex flex-wrap gap-4">
         {POPUPDATA.map((popup, index) =>(<CardPopup popup ={popup} key={Math.random()} />) )}
         </div>
        </div>
      </div>
    </>
  );
};
export default PopUp;
