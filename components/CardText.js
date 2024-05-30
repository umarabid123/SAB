import Button from "./Button";

const CardText = () => {
  return (
    <>
      <div className="main">
        <h2 class="text-[#0073e6] mb-2 text-sm font-bold max-w-[50%]">
          Component library
        </h2>
        <h2 class="text-[2.7rem] font-bold">
          <span class="text-[#0073e6]">40+</span> building block components
        </h2>
        <p class="text-[1rem] text-gray-800 pr-4">
          A meticulous implementation of Material Design; every Material UI
          component meets the highest standards of form and function.
        </p>
        <div className="btn flex flex-wrap gap-2">
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
            customClass={`bg-white border border-[#0073e6] lg:w-[40%] rounded-xl h-14 !justify-start !text-gray-800 gap-4 !text-sm`}
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
            customClass={`bg-white border border-gray-200 lg:w-[40%] rounded-xl h-14 !justify-start !text-gray-800 gap-4 !text-sm`}
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
            customClass={`bg-white border border-gray-200 lg:w-[40%] rounded-xl h-14 !justify-start !text-gray-800 gap-4 !text-sm`}
            text={"Table"}
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
            customClass={`bg-white border border-gray-200 lg:w-[40%] rounded-xl h-14 !justify-start !text-gray-800 gap-4 !text-sm`}
            text={"Table"}
          />
        </div>
      </div>
    </>
  );
};
export default CardText;
