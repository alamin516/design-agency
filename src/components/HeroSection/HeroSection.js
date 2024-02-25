import React from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-[#D7F5DC] pb-[35px]">
      <div className="w-[1440px] px-[100px] mx-auto">
        <Navbar />
        <div>
          <div className="flex justify-between gap-[80px]">
            <div className="w-1/2 pt-[100px]">
              <h2 className="text-[50px] font-bold leading-[65px]">
                Increase Your <br /> Customers Loyalty <br /> and Satisfaction
              </h2>
              <p className="text-xl font-medium">
                We help businesses like yours earn more customers, <br />{" "}
                standout from competitors, make more money
              </p>
              <button className="px-[30px] py-5 rounded-[16px] text-white font-medium mt-10 bg-[#20B15A]">
                Get Started
              </button>
            </div>
            <div className="w-1/2 pt-[61px] flex flex-col  gap-[18px]">
              <div className="flex justify-end  gap-[18px]">
                <Image
                  src="/images/Rectangle 1241.png"
                  height={271}
                  width={408}
                  alt=""
                />
                <Image
                  src="/images/Rectangle 1242.png"
                  height={271}
                  width={180}
                  alt=""
                />
              </div>
              <div className="flex justify-end  gap-[18px]">
                <Image
                  src="/images/Rectangle 1243.png"
                  height={164}
                  width={246}
                  alt=""
                />
                <Image
                  src="/images/Rectangle 1244.png"
                  height={164}
                  width={345}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[80px] bg-[#F8FFF9]">
        <div className="w-[1440px] px-[100px] mx-auto flex justify-between items-center h-[120px]">
          <Image
            src="/images/partner/logos_google.png"
            height={30}
            width={90}
            alt=""
          />
          <Image
            src="/images/partner/Trello-logo-blue 1.png"
            height={30}
            width={142}
            alt=""
          />
          <Image
            src="/images/partner/logos_monday.png"
            height={30}
            width={156}
            alt=""
          />
          <Image
            src="/images/partner/Notion.png"
            height={30}
            width={81}
            alt=""
          />
          <Image
            src="/images/partner/Slack.png"
            height={30}
            width={115}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
