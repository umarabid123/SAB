const Button = ({svgIcon, text, customClass} ) =>{
    return(
        <>
        <button className={`bg-[#0073e6] text-[#fff] text-lg font-semibold rounded-md flex gap-1 lg:w-[100%] items-center justify-center px-3 py-1 h-12 outline-none ${customClass}`}>
               {svgIcon}
                {text}
              </button>
        </>
    )
};
export default Button;