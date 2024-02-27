import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <>
      <Breadcrumb title={"All Project"} />
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

          <div className="grid grid-cols-2 gap-[30px]">
            <div className="project-card">
              <Image
                width={544}
                height={472}
                src="/images/projects/1.png"
                alt="Service 1 Description"
                className="h-[472px] rounded-[20px]"
                blurDataURL="/blur.png"
                placeholder="blur"
              />
              <div className="mt-[30px]">
                <h2 className="text-[26px] font-semibold leading-[39px] uppercase">
                  Lorem ipsum dolor sit consectutar
                </h2>
              </div>
            </div>
            <div className="project-card">
              <Image
                width={544}
                height={472}
                src="/images/projects/2.png"
                alt="Service 1 Description"
                className="h-[472px] rounded-[20px]"
                blurDataURL="/blur.png"
                placeholder="blur"
              />
              <div className="mt-[30px]">
                <h2 className="text-[26px] font-semibold leading-[39px] uppercase">
                  Lorem ipsum dolor sit consectutar
                </h2>
              </div>
            </div>
            <div className="project-card">
              <Image
                width={544}
                height={472}
                src="/images/projects/3.png"
                alt="Service 1 Description"
                className="h-[472px] rounded-[20px]"
                blurDataURL="/blur.png"
                placeholder="blur"
              />
              <div className="mt-[30px]">
                <h2 className="text-[26px] font-semibold leading-[39px] uppercase">
                  Lorem ipsum dolor sit consectutar
                </h2>
              </div>
            </div>
            <div className="project-card">
              <Image
                width={544}
                height={472}
                src="/images/projects/4.png"
                alt="Service 1 Description"
                className="h-[472px] rounded-[20px]"
                blurDataURL="/blur.png"
                placeholder="blur"
              />
              <div className="mt-[30px]">
                <h2 className="text-[26px] font-semibold leading-[39px] uppercase">
                  Lorem ipsum dolor sit consectutar
                </h2>
              </div>
            </div>
            <div className="project-card">
              <Image
                width={544}
                height={472}
                src="/images/projects/5.png"
                alt="Service 1 Description"
                className="h-[472px] rounded-[20px]"
                blurDataURL="/blur.png"
                placeholder="blur"
              />
              <div className="mt-[30px]">
                <h2 className="text-[26px] font-semibold leading-[39px] uppercase">
                  Lorem ipsum dolor sit consectutar
                </h2>
              </div>
            </div>
            <div className="project-card">
              <Image
                width={544}
                height={472}
                src="/images/projects/6.png"
                alt="Service 1 Description"
                className="h-[472px] rounded-[20px]"
                blurDataURL="/blur.png"
                placeholder="blur"
              />
              <div className="mt-[30px]">
                <h2 className="text-[26px] font-semibold leading-[39px] uppercase">
                  Lorem ipsum dolor sit consectutar
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
