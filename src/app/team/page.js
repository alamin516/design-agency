import Image from "next/image";
import Link from "next/link";
import React from "react";

const Team = () => {

  return (
    <>
      <div>
        <div className="container-layout">
          <div className="py-[67px]">
            <div className="lg:w-[495px] mb-[50px]">
              <h5 className="text-xl font-medium text-[#20B15A] uppercase mb-5">
                Our Team Member
              </h5>
              <h2 className="text-[30px] font-semibold leading-[45px]">
                Check our awesome team members
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-[27px]">
              <div className="team-member relative">
                <Image
                  height={387}
                  width={392}
                  src="/images/team/Rectangle 2093.png"
                  alt=""
                  blurDataURL="/blur.png"
                  placeholder="blur"
                  className="team-member-img"
                />
                <div className="text-center py-[25px]">
                  <h3 className="lg:text-[30px] text-2xl font-semibold leading-[26px]">
                    Devon Lane
                  </h3>
                  <div className="social-icons w-[145px] h-[50px] mx-auto rounded-[25px] text-[#737588] bg-white flex gap-2 items-center justify-around px-4 mt-2">
                    <Link href="#">
                      <Image
                        width="10"
                        height="16"
                        src="/images/social/facebook.png"
                        alt=""
                      />
                    </Link>
                    {"|"}
                    <Link href="#">
                      <Image
                        width="16"
                        height="16"
                        src="/images/social/x.png"
                        alt=""
                      />
                    </Link>
                    {"|"}
                    <Link href="#">
                      <Image
                        width="14"
                        height="16"
                        src="/images/social/insta.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-member relative">
                <Image
                  height={387}
                  width={392}
                  src="/images/team/Rectangle 2093 (1).png"
                  alt=""
                  blurDataURL="/blur.png"
                  placeholder="blur"
                  className="team-member-img"
                />
                <div className="text-center py-[25px]">
                  <h3 className="lg:text-[30px] text-2xl font-semibold leading-[26px]">
                    Danny Bailey
                  </h3>
                  <div className="social-icons w-[145px] h-[50px] mx-auto rounded-[25px] text-[#737588] bg-white flex gap-2 items-center justify-around px-4 mt-2">
                    <Link href="#">
                      <Image
                        width="10"
                        height="16"
                        src="/images/social/facebook.png"
                        alt=""
                      />
                    </Link>
                    {"|"}
                    <Link href="#">
                      <Image
                        width="16"
                        height="16"
                        src="/images/social/x.png"
                        alt=""
                      />
                    </Link>
                    {"|"}
                    <Link href="#">
                      <Image
                        width="14"
                        height="16"
                        src="/images/social/insta.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-member relative">
                <Image
                  height={387}
                  width={392}
                  src="/images/team/Rectangle 2093 (2).png"
                  alt=""
                  blurDataURL="/blur.png"
                  placeholder="blur"
                  className="team-member-img"
                />
                <div className="text-center py-[25px]">
                  <h3 className="lg:text-[30px] text-2xl font-semibold leading-[26px]">
                    Alex Lov
                  </h3>
                  <div className="social-icons w-[145px] h-[50px] mx-auto rounded-[25px] text-[#737588] bg-white flex gap-2 items-center justify-around px-4 mt-2">
                    <Link href="#">
                      <Image
                        width="10"
                        height="16"
                        src="/images/social/facebook.png"
                        alt=""
                      />
                    </Link>
                    {"|"}
                    <Link href="#">
                      <Image
                        width="16"
                        height="16"
                        src="/images/social/x.png"
                        alt=""
                      />
                    </Link>
                    {"|"}
                    <Link href="#">
                      <Image
                        width="14"
                        height="16"
                        src="/images/social/insta.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
