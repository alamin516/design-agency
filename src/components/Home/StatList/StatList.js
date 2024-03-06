import Image from "next/image";
import React from "react";

const StatList = () => {
  return (
    <div className="py-[66px]">
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-5">
        <div className="stat-card">
            <div className="w-[100px] h-[100px] bg-[#D7F5DC] rounded-[10px] flex items-center justify-center mb-[22px]">
              <Image
                height={40}
                width={40}
                src="/images/statlist/Group 3.png"
                alt=""
              />
            </div>
            <h2 className="text-[30px] leading-[45px] font-semibold mb-[5px]">
              240452
            </h2>
            <p className="text-base leading-6 font-medium">Followers</p>
        </div>
        <div className="stat-card">
            <div className="w-[100px] h-[100px] bg-[#D7F5DC] rounded-[10px] flex items-center justify-center mb-[22px]">
              <Image
                height={40}
                width={40}
                src="/images/statlist/Like.png"
                alt=""
              />
            </div>
            <h2 className="text-[30px] leading-[45px] font-semibold mb-[5px]">
            6300
            </h2>
            <p className="text-base leading-6 font-medium">Solved Problems</p>
        </div>
        <div className="stat-card">
            <div className="w-[100px] h-[100px] bg-[#D7F5DC] rounded-[10px] flex items-center justify-center mb-[22px]">
              <Image
                height={40}
                width={40}
                src="/images/statlist/Happy.png"
                alt=""
              />
            </div>
            <h2 className="text-[30px] leading-[45px] font-semibold mb-[5px]">
            25000
            </h2>
            <p className="text-base leading-6 font-medium">Happy Customers</p>
        </div>
        <div className="stat-card">
            <div className="w-[100px] h-[100px] bg-[#D7F5DC] rounded-[10px] flex items-center justify-center mb-[22px]">
              <Image
                height={40}
                width={40}
                src="/images/statlist/Scan 3.png"
                alt=""
              />
            </div>
            <h2 className="text-[30px] leading-[45px] font-semibold mb-[5px]">
            360452
            </h2>
            <p className="text-base leading-6 font-medium">Projects</p>
        </div>
      </div>
    </div>
  );
};

export default StatList;
