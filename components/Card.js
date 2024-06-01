import Button from "./Button";

const Card = () => {
  return (
    <>
    <div className="main border border-[#f0f0fd] max-w-[50%] h-fit rounded-md bg-[#f0f0fd]">
      <div className=" flex gap-10 justify-center py-10">
      <Button
          svgIcon={
            <svg
              className="!fill-[#0073e6] w-6"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ShoppingCartRoundedIcon"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"></path>
            </svg>
          }
        text={"ADD ITEM"}
        customClass={`lg:w-[25%] lg:h-12 bg-white !text-[#0073e6] text-sm`}
        />
        <Button
          svgIcon={
            <svg
              className="!fill-[#fff] w-6"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ShoppingCartRoundedIcon"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"></path>
            </svg>
          }
        text={"ADD ITEM"}
        customClass={`lg:w-[25%] lg:h-12 text-sm`}
        />
         <Button
          svgIcon={
            <svg
              className="!fill-[#0073e6] w-6"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ShoppingCartRoundedIcon"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"></path>
            </svg>
          }
        text={"ADD ITEM"}
        customClass={`lg:w-[25%] lg:h-12 bg-white !text-[#0073e6] border border-[#0073e6] text-sm`}
        />
      </div>
      <img src="/images/MUI-SS.png" alt="" className="w-[100%] rounded-b-md" />
      </div>
    </>
  );
};

export default Card;
