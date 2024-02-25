import React from "react";

const Newsletter = () => {
  return (
    <div className="pt-[91px] pb-[136px]">
      <div className="w-[596px] mx-auto">
        <div className="w-[516px] mx-auto mb-10">
          <div className="w-[495px] mx-auto text-center">
            <h5 className="text-xl font-medium text-[#20B15A] uppercase leading-[30px] mb-[22px]">
              SUBSCRIBE
            </h5>
            <h2 className="text-[30px] font-semibold leading-[45px]">
              Subscribe to get the latest <br /> news about us
            </h2>
          </div>
          <p className="text-base font-medium text-[#8B8B8B]">
            Please drop your email below to get daily update about what we do
          </p>
        </div>
        <div>
          <form className="newsletter">
            <input className="outline-none" type="text" placeholder="Enter Your Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
