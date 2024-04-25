import { useRouter } from "next/router";

const WatchId = () => {
  const router = useRouter();

  return (
    <>
      <div className="main group">
      <div className="w-[100%] h-[100vh] bg-black flex flex-co items-center justify-center relative ">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          class=" cursor-pointer w-[3%] absolute top-6 left-3 z-50 hidded group-hover:block"
          onClick={() => router.back()}
        >
          <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white absolute w-[3%] top-6 right-12 hidden group-hover:block"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M12.382 3C12.7607 3 13.107 3.214 13.2764 3.55279L14 5H20C20.5523 5 21 5.44772 21 6V17C21 17.5523 20.5523 18 20 18H13.618C13.2393 18 12.893 17.786 12.7236 17.4472L12 16H5V22H3V3H12.382ZM11.7639 5H5V14H13.2361L14.2361 16H19V7H12.7639L11.7639 5Z" />
        </svg>
        <video
          className="w-[100%] h-[100vh] rounded-[4px] border-none outline-none "
          controls={false}
          autoPlay
          loop
        >
          onClick=
          {(e) => {
            router.push("/watch");
          }}
          <source src="/images/ForBiggerBlazes.mp4"></source>
        </video>
        {/* <iframe className="w-[90%] h-[100vh] rounded-[4px] border-none outline-none" src="/images/BigBuckBunny.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <img
          src="/images/Netflix_2015_N_logo.svg.png"
          className="absolute top-8 left-56 w-[30px]"
        ></img>
      </div>
     
    <div className="main-bar absolute bottom-8 w-[100%] px-6 hidden group-hover:block">
    <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div
          class="bg-red-600 h-1.5 rounded-full dark:bg-red-500 w-[45%]"
          
        ></div>
      </div>
    <div className="videoSvg flex justify-between items-center ">
        <div className="svgItem flex items-center gap-5">
          <img src="/images/play.png" className="w-[8%]" alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-[8%]"
          >
            <path d="M12 2C17.5228 2 22 6.47715 22 12 22 17.5228 17.5228 22 12 22 6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20 16.4183 20 20 16.4183 20 12 20 7.58172 16.4183 4 12 4 9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM15.5 13.25C15.5 13.8023 15.0523 14.25 14.5 14.25 13.9477 14.25 13.5 13.8023 13.5 13.25V10.75C13.5 10.1977 13.9477 9.75 14.5 9.75 15.0523 9.75 15.5 10.1977 15.5 10.75V13.25ZM14.5 8.25C13.1193 8.25 12 9.36929 12 10.75V13.25C12 14.6307 13.1193 15.75 14.5 15.75 15.8807 15.75 17 14.6307 17 13.25V10.75C17 9.36929 15.8807 8.25 14.5 8.25ZM8.5 15.5V8.5H10V15.5H8.5Z" />
          </svg>
          <img src="/images/forward1.png" className="w-[8%]" alt="" />
          <img src="/images/sound.png" className="w-[8%]" alt="" />
        </div>
        <div className="svgTem2 flex gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className=" w-8"
          >
            <path d="M21 3C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.455L2 22.5V4C2 3.44772 2.44772 3 3 3H21ZM20 5H4V18.385L5.76333 17H20V5ZM13 7V15H11V7H13ZM17 9V15H15V9H17ZM9 11V15H7V11H9Z" />
          </svg>
          <img src="/images/playspeed.png" className="w-[24%]" alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            class="rounded-xl w-9"
          >
            <path d="M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z" />
          </svg>
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default WatchId;
