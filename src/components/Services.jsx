import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { AiTwotoneMoneyCollect } from "react-icons/ai";
import { BiSearchAlt,BiMoney } from "react-icons/bi";
import { BsSpeedometer } from "react-icons/bs";
import { RiHeart2Fill } from "react-icons/ri";
import { CgCardDiamonds } from "react-icons/cg";

const ServiceCard = ({ color, title, icon, subtitile }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2  ">
    <div
      className={`w-10 h-10 rounded-full hover:rounded-lg flex justify-center items-center   cursor-pointer ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white  text-lg cursor-pointer hover:font-bold "> {title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12 cursor-pointer hover:text-bold">{subtitile}</p>
    </div>
  </div>
);
const Services = () => {
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we
            <br />
            continue to improve
          </h1>
          <p className="text-left my-3 text-white text-gradient  text-base">
            On Mars ? .
            <br />
            No worries now you send your crypto to anyone on the Earth .
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-start items-center">
          <ServiceCard
            color="bg-[#2952E3]"
            title="Security percentage (1/0)"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitile="Security is 100 percent guranteed . We give our 1st priority to your privacy"
          />
          <ServiceCard
            color="bg-[#8945F8]"
            title="Best Transaction Expereince"
            icon={<CgCardDiamonds fontSize={21} className="text-white" />}
            subtitile="Just on one click get connected and have the most user friendly experience ."
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="Fastest Transaction"
            icon={<BsSpeedometer fontSize={21} className="text-white" />}
            subtitile="Make the Transaction within no time . Just with the account id ."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
