const Footer = () => {
  return (
    <>
      <div className="bg bg-gray-600">
      <div className="footer-item1 sm:flex sm:flex-wrap items-center xl:max-w-[940px] xl:mx-auto" >
        <div className="flex items-center gap-4 text-[17px] py-[14px] px-3 whitespace-nowrap" >
          <img src="/images/contact.png" alt="" />
          <p className="text-white">
            Inside the kingdom :{" "}
            <a href="#" className="">
              800 124 8888
            </a>
          </p>
        </div>
        <div className="hr border-[1px] border-gray-500"></div>
        <div className="bg-gray-600 flex items-center gap-4 text-[17px] py-[14px] px-[10px] whitespace-nowrap">
          <img src="/images/contact.png" alt="" />
          <p className="text-white">
            Outside the kingdom :{" "}
            <a href="#" className="">
              +966114062800
            </a>
          </p>
        </div>
        <div className="hr border-[1px] border-gray-500"></div>
        <div className="bg-gray-600 flex items-center gap-4 text-[17px] py-[14px] px-[10px] whitespace-nowrap">
          <img src="/images/email-icon.png" alt="" />
          <p className="text-white">
            Email :{" "}
            <a href="#" className="">
              feedback@sab.com
            </a>
          </p>
        </div>
        <div className="hr border-[1px] border-gray-500"></div>
        <div className="bg-gray-600 flex items-center gap-4 text-[17px] py-[14px] px-[10px] whitespace-nowrap">
          <img src="/images/Twitter.png" alt="" />
          <p className="text-white font-medium">
            SAB<span className="font-normal">care</span>
          </p>
        </div>
      </div>
      </div>
        {/* <div className="hr border-gray-500"></div> */}
      <div className="footer-item2  bg-[#3e4045] ">
        <div className="footer-text-main pb-6 sm:flex flex-wrap justify-between max-w-[940px] mx-auto">
          <div className="footer-txt text-white pt-9 sm:pt-2 pb-2 px-3">
            <h1 className="text-white font-bold text-[18px] pb-4">
              Everyday banking
            </h1>
            <p>Accounts</p>
            <p>Private Banking Services</p>
            <p>Compare Credit Cards</p>
            <p>SAB Debit Card</p>
            <p>Prepaid Card</p>
            <p>Generate IBAN</p>
          </div>
          <div className=" sm:hidden hr mx-4"></div>
          <div className="footer-txt text-white py-2 px-3">
            <h1 className="text-white font-bold text-[18px] pb-4">
              Wealth Management
            </h1>
            <p>Wealth Management Solutions</p>
            <p>Banking Services</p>
            <p>Investment Solutions</p>
            <p>SABB Takaful Solutions</p>
            <p>Wide Range Asset Classes</p>
            <p>Safe Deposit Lockers</p>
          </div>
          <div className="sm:hidden hr mx-4"></div>
          <div className="footer-txt text-white py-2 px-3">
            <h1 className="text-white font-bold text-[18px] pb-4">Financing</h1>
            <p>Personal Finance</p>
            <p>Home Finance</p>
            <p>Financing against investments</p>
          </div>
          <div className="sm:hidden hr mx-4"></div>
          <div className="footer-txt text-white py-2 px-3">
            <h1 className="text-white font-bold text-[18px] pb-4">
              Payments & Transfers
            </h1>
            <p>Payments</p>
            <p>Local Transfers</p>
            <p>International Transfers</p>
          </div>
          <div className=" sm:hidden hr mx-4"></div>
        </div>
       <div className="main-last max-w-[940px] mx-auto">
       <div className="hr1 lg:mx-4"></div>
       <div className="last-text sm:flex justify-between lg:px-3">
       <div className="bottom-txt text-white text-[11px] py-2 px-2 lg:px-3 flex items-center flex-wrap justify-center  gap-x-3 lg:gap-x-5">
          <p>Contact Centre</p>
          <p>Complaints and Feedback</p>
          <p>Terms and Conditions</p>
          <p>About SAB</p>
          <p>Sitemap</p>
        </div>
        <p className="text-white text-[11px] py-2 px-3">	© &nbsp; SAB, Saudi Arabia. All Rights Reserved, 2023</p>
       </div>
       </div>
      </div>
    </>
  );
};
export default Footer;
