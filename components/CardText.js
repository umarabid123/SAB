import Button from "./Button";

const CardText = () => {
  return (
    <>
      <div className="main w-[100%] lg:max-w-[50%]  bg-transparent mb-5 lg:mb-0">
        <h2 class="text-[#0073e6] mb-2 text-sm w-[50%] font-">
          Component library
        </h2>
        <h2 class="text-2xl lg:text-[2.2rem] leading-7 lg:leading-10 font-bold text-gray-900">
          <span class="text-[#0073e6]">40+</span> building block components
        </h2>
        <p class="text-[16px] text-gray-800 pr-4 mt-2 mb-6 ">
          A meticulous implementation of Material Design; every Material UI
          component meets the highest standards of form and function.
        </p>
        <div className="btn flex overflow-scroll sm:overflow-auto lg:flex-wrap gap-2">
          <Button
            svgIcon={
              <svg
                className="w-[16%] fill-[#0073e6]"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="SmartButtonRoundedIcon"
              >
                <path d="M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-7.96 8.99c.18.39.73.39.91 0l.63-1.4 1.4-.63c.39-.18.39-.73 0-.91l-1.4-.63-.63-1.4c-.18-.39-.73-.39-.91 0l-.63 1.4-1.4.63c-.39.18-.39.73 0 .91l1.4.63zm2.7-4.56c.1.22.42.22.52 0l.36-.8.8-.36c.22-.1.22-.42 0-.52l-.8-.36-.36-.8c-.1-.22-.42-.22-.52 0l-.36.8-.8.36c-.22.1-.22.42 0 .52l.8.36z"></path>
              </svg>
            }
            customClass={`bg-white border border-[#0073e6] min-w-[70%] sm:min-w-[20%] sm:min-w-[35%] ! lg:max-w-[40%] rounded-xl lg:h-12 !justify-start !text-gray-800  gap-2 lg:gap-4 !text-sm flex-col !items-start h-16 lg:item-center sm:flex-row sm:p-4 !sm:items-center`}
            text={"Button"}
          />
          <Button
            svgIcon={
              <svg
                className="w-[12%] fill-[#0073e6]"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="InputRoundedIcon"
              >
                <path d="M21 3.01H3c-1.1 0-2 .9-2 2V8c0 .55.45 1 1 1s1-.45 1-1V5.99c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V16c0-.55-.45-1-1-1s-1 .45-1 1v3.01c0 1.09.89 1.98 1.98 1.98H21c1.1 0 2-.9 2-2V5.01c0-1.1-.9-2-2-2m-9.15 12.14 2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79c-.31-.32-.85-.1-.85.35V11H2c-.55 0-1 .45-1 1s.45 1 1 1h9v1.79c0 .45.54.67.85.36"></path>
              </svg>
            }
            customClass={`bg-white min-w-[70%]  sm:min-w-[20%] sm:min-w-[35%] ! lg:max-w-[40%] rounded-xl lg:h-12 !justify-start !text-gray-800  gap-2 lg:gap-4 !text-sm flex-col !items-start h-16 lg:items-center sm:flex-row sm:p-4`}
            text={"Button"}
          />
          <Button
            svgIcon={
              <svg
                className="w-[11%] fill-[#5aa0e6]"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="TableViewRoundedIcon"
              >
                <path d="M19 7H9c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 3c0 .55-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1m-6 5v-2h2v2zm2 2v2h-2v-2zm-4-2H9v-2h2zm6-2h2v2h-2zm-8 4h2v2H9zm8 2v-2h2v2zM6 17H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v1h-2V5H5v10h1z"></path>
              </svg>
            }
            customClass={`bg-white min-w-[68%] sm:min-w-[20%] sm:min-w-[35%] ! lg:min-w-[20%] ! lg:max-w-[40%] rounded-xl lg:h-12 !justify-start !text-gray-800  gap-2 lg:gap-4 !text-sm flex-col !items-start h-16 smitems-center sm:flex-row sm:p-4`}
            text={"Table"}
          />
          <Button
            svgIcon={
              <svg
                class="w-[10%] fill-[#5aa0e6]"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="WarningRoundedIcon"
              >
                <path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z"></path>
              </svg>
            }
            text={"Alert"}
            customClass={`bg-white min-w-[70%]  sm:min-w-[20%] sm:min-w-[35%] lg:max-w-[40%] sm:p-4 lg:h-12 !justify-start !text-gray-800  gap-2 lg:gap-4 !text-sm flex-col !items-start h-16 lg:item-center sm:flex-row rounded-xl`}
          />
          <Button
            svgIcon={
              <svg
                class="fill-[#5aa0e6] w-[10%]"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="InfoRoundedIcon"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8h-2V7h2z"></path>
              </svg>
            }
            text={"Tooltip"}
            customClass={`bg-white min-w-[70%]  sm:min-w-[20%] sm:min-w-[35%] ! lg:max-w-[40%] lg:p-4 lg:h-12 rounded-xl !justify-start !text-gray-800  gap-2 lg:gap-4 !text-sm flex-col !items-start h-16 lg:item-center sm:flex-row`}
          />
          <Button
            svgIcon={
              <svg
                class="fill-[#0073e6] w-[10%]"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="AddCircleRoundedIcon"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1"></path>
              </svg>
            }
            text={"Tooltip"}
            customClass={`bg-white border-2 border-dashed border-gray-200 hover:border-[#0073e6] min-w-[70%] sm:min-w-[20%] sm:min-w-[35%] ! lg:max-w-[40%] lg:p-4 lg:h-12 rounded-xl !justify-start !text-gray-800  gap-2 lg:gap-4 !text-sm flex-col !items-start h-16 lg:item-center sm:flex-row`}
          />
          
        </div>
      </div>
    </>
  );
};
export default CardText;
