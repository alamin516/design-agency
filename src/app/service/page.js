import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import React from "react";

const Service = () => {
  return (
    <>
      <Breadcrumb title={"Our Service"} />
      <div className="container-layout">
        <div className="py-[67px]">
          <div className="w-[495px] mb-[50px]">
            <h5 className="text-xl font-medium text-[#20B15A] uppercase mb-5">
              Our All Services
            </h5>
            <h2 className="text-[30px] font-semibold leading-[45px]">
              We Provide BestWeb design services
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
