import Image from "next/image";
import React from "react";

const FeaturedProject = () => {
  return (
    <div className="pt-[62px] pb-[84px] bg-[#F0FDF4]">
      <div className="container-layout">
        <div className="lg:w-[495px] mb-[72px]">
          <h5 className="text-xl font-medium text-[#20B15A] uppercase mb-6">
            Featured Project
          </h5>
          <h2 className="text-[30px] font-semibold leading-[45px]">
            We provide the Perfect Solution to your business growth
          </h2>
        </div>
        <div className="lg:flex gap-[30px]">
          <div className="lg:w-1/2 w-full">
            <div className="featured-card">
              <Image
                height={531}
                width={603}
                src="/images/featured/Mask.png"
                alt=""
              />
              <div>
                <h5 className="mt-[15px] text-sm leading-[26px] text-[#2E3E5C]">
                  App Design - June 20, 2022
                </h5>
                <h2 className="mt-[10px] text-2xl leading-[28px] text-[#1E1F4B] font-bold">
                  App Redesign
                </h2>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex flex-col gap-[30px]">
            <div className="flex gap-[30px]">
              <div className="featured-card">
                <Image
                  height={188}
                  width={287}
                  src="/images/featured/Mask (1).png"
                  alt=""
                />
                <div>
                  <h5 className="mt-[12px] text-sm leading-[26px] text-[#2E3E5C]">
                    App Design - June 20, 2022
                  </h5>
                  <h2 className="mt-[10px] text-lg leading-[28px] text-[#1E1F4B] font-bold">
                    Redesign channel website landng page
                  </h2>
                </div>
              </div>
              <div className="featured-card">
                <Image
                  height={188}
                  width={287}
                  src="/images/featured/Mask (2).png"
                  alt=""
                />
                <div>
                  <h5 className="mt-[12px] text-sm leading-[26px] text-[#2E3E5C]">
                    App Design - June 20, 2022
                  </h5>
                  <h2 className="mt-[10px] text-lg leading-[28px] text-[#1E1F4B] font-bold">
                    Redesign channel website landng page
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="featured-card">
                <Image
                  height={188}
                  width={287}
                  src="/images/featured/Mask (1).png"
                  alt=""
                />
                <div>
                  <h5 className="mt-[12px] text-sm leading-[26px] text-[#2E3E5C]">
                    App Design - June 20, 2022
                  </h5>
                  <h2 className="mt-[10px] text-lg leading-[28px] text-[#1E1F4B] font-bold">
                    Redesign channel website landng page
                  </h2>
                </div>
              </div>
              <div className="featured-card">
                <Image
                  height={188}
                  width={287}
                  src="/images/featured/Mask (2).png"
                  alt=""
                />
                <div>
                  <h5 className="mt-[12px] text-sm leading-[26px] text-[#2E3E5C]">
                    App Design - June 20, 2022
                  </h5>
                  <h2 className="mt-[10px] text-lg leading-[28px] text-[#1E1F4B] font-bold">
                    Redesign channel website landng page
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
