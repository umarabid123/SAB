// components/LoginPage.js
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="container mx-auto max-w-full pt-2">
      <div className="bg-gray-100 p-3">
        <div className="xl:ml-44 lg:ml-5 text-2xl font-medium">
          <h6>Log on to Online Banking</h6>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-14 space-y-10 md:space-y-0 md:space-x-0 md:gap-x-4 p-4 px-7 lg:max-w-[940px] lg:mx-auto mb-16">
        <div className="w-full sm:min-w-[40%]">
          <h1 className="mb-2 font-bold">Online Banking</h1>
          <hr className="" />
          <p className="mt-8 mb-3 font-sans">Please enter your username</p>
          <div className="flex flex-wrap gap-y-2">
            <input
              className="border mr-3 p-1 h-9"
              type="text"
              name="username"
            />
            <button className="bg-[#b30a15] text-white p-1 w-24 h-9 rounded-[4px] shadow-lg">
              <a href="#">Continue</a>
            </button>
          </div>
          <div className="flex mt-5">
            <input type="checkbox" name="check" />
            <p className="ml-1">Remember my username</p>
          </div>
          <div className="mt-4">
            <div>
              <a className="hover:text-red-700" href="#">
                Forgot your username?
              </a>
              <span className="text-rose-800"> &gt;</span>
            </div>
            <div>
              <a className="hover:text-red-700" href="#">
                Not Registered?
              </a>
              <span className="text-rose-800"> &gt;</span>
            </div>
            <div>
              <a className="hover:text-red-700" href="#">
                Online Security
              </a>
              <span className="text-rose-800"> &gt;</span>
            </div>
          </div>
        </div>
        <div class="hr4 h-80 hidden sm:block"></div>
        <div className="w-full sm:min-w-[60%] flex justify-start ! m-0 ! ml-0">
          <img src="/images/img1.jpg" alt="" />
        </div>
      </div>
      <Link href="/pay">
        <div className="btn flex justify-center">
          <button className="bg-[#b30a15] cursor-pointer hover:underline text-white p-1 w-48 mb-10 h-9 rounded-[4px] shadow-lg">
            Payment Method
          </button>
        </div>
      </Link>
    </div>
  );
};

export default LoginPage;
