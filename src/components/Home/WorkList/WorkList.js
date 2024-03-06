import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkList = () => {
  return (
    <div className="py-[67px]">
      <div className="lg:w-[495px] mb-[50px]">
        <h5 className="text-xl font-medium text-[#20B15A] uppercase mb-5">
          Work List
        </h5>
        <h2 className="text-[30px] font-semibold leading-[45px]">
          We provide the Perfect Solution to your business growth
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-[43px]">
        <div className="worklist-card py-[50px] px-[30px]">
          <Image
            height={93.33}
            width={93.33}
            src="/images/worklist/Activity .png"
            alt=""
          />
          <div className="mt-[15px] mb-[45px]">
            <h3 className="text-2xl font-semibold leading-9 mb-[15px]">
              Grow Your Business
            </h3>
            <p className="text-lg">
              We help identify the best ways to improve your business
            </p>
          </div>
          <button className="px-5 py-[15px] text-lg">
            <Link className="flex items-center gap-[10px]" href={"#"}>
              Learn More
              <span>
                {/* <Image height={14} width={16} src="/images/arrow.png" alt="" /> */}
                &#10140;
              </span>
            </Link>
          </button>
        </div>
        <div className="worklist-card py-[50px] px-[30px]">
          <Image
            height={93.33}
            width={93.33}
            src="/images/worklist/Heart.png"
            alt=""
          />
          <div className="mt-[15px] mb-[45px]">
            <h3 className="text-2xl font-semibold leading-9 mb-[15px]">
              Improve brand loyalty
            </h3>
            <p className="text-lg">
              We help identify the best ways to improve your business
            </p>
          </div>
          <button className="px-5 py-[15px] text-lg">
            <Link className="flex items-center gap-[10px]" href={"#"}>
              Learn More
              <span>
                {/* <Image height={14} width={16} src="/images/arrow.png" alt="" /> */}
                &#10140;
              </span>
            </Link>
          </button>
        </div>
        <div className="worklist-card py-[50px] px-[30px]">
          <Image
            height={93.33}
            width={93.33}
            src="/images/worklist/Work.png"
            alt=""
          />
          <div className="mt-[15px] mb-[45px]">
            <h3 className="text-2xl font-semibold leading-9 mb-[15px]">
              Improve Business Model
            </h3>
            <p className="text-lg">
              We help identify the best ways to improve your business
            </p>
          </div>
          <button className="px-5 py-[15px] text-lg">
            <Link className="flex items-center gap-[10px]" href={"#"}>
              Learn More
              <span>&#10140;</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkList;
