import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <section>
      <div className="flex justify-between items-center h-[60px]">
        <div>
          <img src={logo} alt="" className="h-[40px]" />
        </div>
        <div>
          <span className="text-[16px] text-[#4a5568] font-semibold px-4">
            Find Jobs
          </span>
          <span className="text-[16px] text-[#4a5568] font-semibold px-4">
            Referrals
          </span>
          <span className="text-[16px] text-[#4a5568] font-semibold px-4">
            AI Resume Review
          </span>
          <span className="text-[16px] text-[#4a5568] font-semibold px-4">
            Resume Builder
          </span>
          <span className="text-[16px] text-[#4a5568] font-semibold px-4">
            Premium 🔥
          </span>
        </div>
        <div>
          <button className="text-[16px] font-semibold">Sign in</button>
          <button className="bg-[#1863E5] text-white font-semibold py-2 px-4 rounded-[8px] ml-6">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
}
