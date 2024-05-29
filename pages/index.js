import Header from "@/components/Header";
import HomeText from "@/components/HomeText";

const HomePage = () => {
  return (
    <>
      <div className="main mx-auto">
        <Header />
        <hr />
        <HomeText />
        <div className="logo flex items-center justify-between flex-wrap lg:flex-nowrap lg:pt-24 sm:px-11 lg:px-6 xl:px-[106px]">
          <div className="img w-[50%] sm:w-[30%] lg:w-[18%] flex justify-center p-6">
            <img src="/images/spotify-light.svg" alt="" className="" />
          </div>
          <div className="img w-[50%] sm:w-[30%] lg:w-[18%] flex justify-center p-6">
            <img src="/images/amazon-light.svg" alt="" className="" />
          </div>
          <div className="img w-[50%] sm:w-[30%] lg:w-[18%] flex justify-center p-6">
            <img src="/images/nasa.svg" alt="" className="" />
          </div>
          <div className="img w-[50%] sm:w-[30%] lg:w-[18%] flex justify-center p-6">
            <img src="/images/netflix.svg" alt="" className="" />
          </div>
          <div className="img w-[50%] sm:w-[30%] lg:w-[18%] flex justify-center p-6">
            <img src="/images/unity-light.svg" alt="" className="" />
          </div>
          <div className="img w-[50%] sm:w-[30%] lg:w-[18%] flex justify-center p-6">
            <img
              src="/images/shutterstock-light.svg"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
