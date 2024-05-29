import Header from "@/components/Header";
import HomeText from "@/components/HomeText";

const HomePage = () => {
  return (
    <>
      <div className="main mx-auto">
        <Header />
        <hr />
        <HomeText />
        <div className="text-img lg:py-24 sm:px-11 lg:px-6 xl:px-[106px]">
        <div className="logo flex items-center justify-between flex-wrap lg:flex-nowrap lg:pt-24 sm:px-11 lg:px-6 xl:px-[106px]">
          <div className="img w-[50%] sm:w-[30%] lg:w-[30%] flex justify-center p-6">
            <img src="/images/spotify-light.svg" alt="" className="" />
          </div>
          <div className="img w-[50%] sm:w-[30%] lg:w-[30%] flex justify-center p-6">
            <img src="/images/amazon-light.svg" alt="" className="" />
          </div>
          <div className="img w-[50%] sm:w-[30%] lg:w-[30%] flex justify-center p-6">
            <img src="/images/nasa.svg" alt="" className="" />
          </div>
          <div className="img w-[50%] sm:w-[30%] lg:w-[30%] flex justify-center p-6">
            <img src="/images/netflix.svg" alt="" className="" />
          </div>
          <div className="img w-[50%] sm:w-[30%] lg:w-[30%] flex justify-center p-6">
            <img src="/images/unity-light.svg" alt="" className="" />
          </div>
          <div className="img w-[50%] sm:w-[30%] lg:w-[30%] flex justify-center p-6">
            <img
              src="/images/shutterstock-light.svg"
              alt=""
              className=""
            />
          </div>
        </div>
        <div className="txt mx-auto mt-8 flex justify-center">
        <p className="text-sm lg:w-[30%] text-center">The world's best product teams trust MUI to deliver an unrivaled experience for both developers and users.</p>
        </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default HomePage;
