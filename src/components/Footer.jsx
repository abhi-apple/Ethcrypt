import log from "../../images/log.png";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-cenetr my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={log} alt="" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer hover:font-bold rounded-full hover:bg-[#FF007C] mx-4 py-2 px-4">
            Market{" "}
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer hover:font-bold rounded-full hover:bg-[#FF007C] mx-4 py-2 px-4">
            Exchange{" "}
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer hover:font-bold rounded-full hover:bg-[#FF007C] mx-4 py-2 px-4">
            Tutorials{" "}
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer hover:font-bold rounded-full hover:bg-[#FF007C] mx-4 py-2 px-4">
            Wallets{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">
          Come join us and hear for the unexpected miracle
        </p>
        <p className="text-white text-sm text-center font-medium mt-2">
          abhinayreddy0112@gmail.com
        </p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.09px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
          <p className="text-white text-left text-xs">@abhinayreddy0112</p>
          <p className="text-white text-light text-xs"> ® All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

