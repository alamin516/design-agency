import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="container-layout">
        <div className="py-[67px]">
          <div className="w-[495px] mb-[50px]">
            <h5 className="text-xl font-medium text-[#20B15A] uppercase mb-5">
              All Project
            </h5>
            <h2 className="text-[30px] font-semibold leading-[45px]">
              Better Agency/SEO Solution At Your Fingertips
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px]">
            <div className="testimonial-card">
              <Image
                width={100}
                height={100}
                src="/images/testimonials/16.png"
                alt="Service 1 Description"
                className="h-[100px] mx-auto object-center"
                blurDataURL="/blur.png"
                placeholder="blur"
              />
              <div className="mt-[40px] text-center">
                <p className="text-base leading-[26px] text-[#9D9D9D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <h2 className="text-[26px] font-semibold leading-[39px] uppercase mt-[26px] mb-[10px]">
                  Alice Bradley
                </h2>
                <h5 className="text-base leading-6">Backend Developer</h5>
              </div>
            </div>
            <div className="testimonial-card">
              <Image
                width={100}
                height={100}
                src="/images/testimonials/11.png"
                alt="Service 1 Description"
                className="h-[100px] mx-auto"
                blurDataURL="/blur.png"
                placeholder="blur"
              />
              <div className="mt-[40px] text-center">
                <p className="text-base leading-[26px] text-[#9D9D9D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <h2 className="text-[26px] font-semibold leading-[39px] uppercase mt-[26px] mb-[10px]">
                  Alice Bradley
                </h2>
                <h5 className="text-base leading-6">Backend Developer</h5>
              </div>
            </div>
            <div className="testimonial-card">
              <Image
                width={100}
                height={100}
                src="/images/testimonials/12.png"
                alt="Service 1 Description"
                className="h-[100px] mx-auto"
                blurDataURL="/blur.png"
                placeholder="blur"
              />
              <div className="mt-[40px] text-center">
                <p className="text-base leading-[26px] text-[#9D9D9D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <h2 className="text-[26px] font-semibold leading-[39px] uppercase mt-[26px] mb-[10px]">
                  Alice Bradley
                </h2>
                <h5 className="text-base leading-6">Backend Developer</h5>
              </div>
            </div>
            <div className="testimonial-card">
              <Image
                width={100}
                height={100}
                src="/images/testimonials/13.png"
                alt="Service 1 Description"
                className="h-[100px] mx-auto"
                blurDataURL="/blur.png"
                placeholder="blur"
              />
              <div className="mt-[40px] text-center">
                <p className="text-base leading-[26px] text-[#9D9D9D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <h2 className="text-[26px] font-semibold leading-[39px] uppercase mt-[26px] mb-[10px]">
                  Alice Bradley
                </h2>
                <h5 className="text-base leading-6">Backend Developer</h5>
              </div>
            </div>
            <div className="testimonial-card">
              <Image
                width={100}
                height={100}
                src="/images/testimonials/14.png"
                alt="Service 1 Description"
                className="h-[100px] mx-auto"
                blurDataURL="/blur.png"
                placeholder="blur"
              />
              <div className="mt-[40px] text-center">
                <p className="text-base leading-[26px] text-[#9D9D9D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <h2 className="text-[26px] font-semibold leading-[39px] uppercase mt-[26px] mb-[10px]">
                  Alice Bradley
                </h2>
                <h5 className="text-base leading-6">Backend Developer</h5>
              </div>
            </div>
            <div className="testimonial-card">
              <Image
                width={100}
                height={100}
                src="/images/testimonials/15.png"
                alt="Service 1 Description"
                className="h-[100px] mx-auto"
                blurDataURL="/blur.png"
                placeholder="blur"
              />
              <div className="mt-[40px] text-center">
                <p className="text-base leading-[26px] text-[#9D9D9D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <h2 className="text-[26px] font-semibold leading-[39px] uppercase mt-[26px] mb-[10px]">
                  Alice Bradley
                </h2>
                <h5 className="text-base leading-6">Backend Developer</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
