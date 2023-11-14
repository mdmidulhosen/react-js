import React from "react";
import amazonImg from "../assets/amazon.jpeg";
import microsoftImg from "../assets/microsoft.png";
import testlaImg from "../assets/tesla.png";
import morganstanleyImg from "../assets/morganstanley.png";
import disneyImg from "../assets/disney.jpeg";

export default function Body() {
  return (
    <div className="flex items-center pt-[128px]">
      <div className="w-[50%]">
        <h1 className="text-[60px] font-extrabold leading-[4.5rem]">
          <span className="text-[#1863E5]">Job referrals.</span>
          <br />
          Your secret weapon for job hunting.
        </h1>
        <p className="text-[#171923] text-[20px] mt-4">
          Get referred into your dream job today.
        </p>
        <div className="mt-8">
          <button className="px-[28px] py-[14px] border-[2px] border-[#1863E5] rounded-[8px] bg-[#1863E5] text-white">
            Get Referred
          </button>
          <button className="px-[28px] py-[14px] border-[2px] border-[#1863E5] rounded-[8px] text-[#1863E5] ml-4">
            Give Referrals
          </button>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="bg-white flex items-center p-4 rounded-[8px] border border-[##eeeeee] mb-4 ">
          <img src={amazonImg} alt="" className="h-[48px]" />
          <p className="text-[20px] text-[#171923] ml-4">
            Someone at <span className="font-bold">Amazon</span> wants to refer
            you.
          </p>
        </div>
        <div className="bg-white flex items-center p-4 rounded-[8px] border border-[##eeeeee] mb-4 ">
          <img src={microsoftImg} alt="" className="h-[48px]" />
          <p className="text-[20px] text-[#171923] ml-4">
            You've been referred into{" "}
            <span className="font-bold">Microsoft 🎉</span>
          </p>
        </div>
        <div className="bg-white flex items-center p-4 rounded-[8px] border border-[##eeeeee] mb-4 ">
          <img src={testlaImg} alt="" className="h-[48px]" />
          <p className="text-[20px] text-[#171923] ml-4">
            Someone at <span className="font-bold">Tesla</span> wants to refer
            you.
          </p>
        </div>
        <div className="bg-white flex items-center p-4 rounded-[8px] border border-[##eeeeee] mb-4 ">
          <img src={morganstanleyImg} alt="" className="h-[48px]" />
          <p className="text-[20px] text-[#171923] ml-4">
            You've been referred into
            <span className="font-bold"> Morgan Stanley 🎉</span>
          </p>
        </div>
        <div className="bg-white flex items-center p-4 rounded-[8px] border border-[##eeeeee]">
          <img src={disneyImg} alt="" className="h-[48px]" />
          <p className="text-[20px] text-[#171923] ml-4">
            Someone at <span className="font-bold">Disney</span> wants to refer
            you.
          </p>
        </div>
      </div>
    </div>
  );
}
