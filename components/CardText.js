const Text = ({itemt}) => {
  return;
  <>
    <div className="card-txt items-center justify-between">
      <div className="img-logo flex items-center gap-2">
        <img
          src={itemt.icon1}
          className="w-[12%] border-[1px] rounded-full p-[8px] border-[#dbd0d0]"
        />
        <img
          src={itemt.icon2}
          className="w-[14%] rounded-full border-[#dbd0d0]"
        />
      </div>
      <div className="border-[1px] w-[23%] h-[34px] flex justify-center items-center rounded-full">
        <div class="border-arrow hidden sm:block border-solid border-[1px] w-[1%] border-[#fff] rounded-full hover:cursor-pointer"></div>
      </div>
    </div>
  </>;
};
export default Text;
