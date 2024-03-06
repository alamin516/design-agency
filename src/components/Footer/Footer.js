import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(95 - 57);
  return (
    <footer className="bg-black pt-[57px] pb-[40px]">
      <div className="container-layout footer-wrapper">
        <div className="lg:flex justify-between gap-[30px]">
          <div className="lg:w-5/12">
            <h2 className="text-[40px] font-bold text-white p-[19.6px] leading-[58px] footer-logo">
              <Link href="/">
                Design<span className="text-[#F6551A]">AGENCY</span>
              </Link>
            </h2>
            <p className="text-xl text-white mb-5">
              Some footer text about the <br /> Agency. Just a little
              description to <br />
              help people understand you better
            </p>
            <div className="flex gap-[10px]">
              <Link href={"#"}>
                <Image
                  height="41"
                  width="41"
                  src="/images/social/Group 32.png"
                  alt=""
                />
              </Link>
              <Link href="/">
                <Image
                  height="41"
                  width="41"
                  src="/images/social/Group 33.png"
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  height="41"
                  width="41"
                  src="/images/social/Group 34.png"
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  height="41"
                  width="41"
                  src="/images/social/Frame 20095.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="lg:w-3/12 mt-[40px]">
            <h2 className="text-white text-xl font-semibold mb-[5px]">
              Quick Links
            </h2>
            <hr/>
            <div className="footer-menu mt-[15px]">
              <ul className="text-white">
                <li className="mb-3">
                  <Link href="/" className="text-lg">
                    Service
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="/" className="text-lg">
                    Portfolio
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="/" className="text-lg">
                    About Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="/" className="text-lg">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-4/12 mt-[40px] text-white ">
            <h2 className="text-xl font-semibold mb-[5px]">
              Address
            </h2>
            <hr/>
            <p className="text-xl font-medium leading-[27.32px] mt-[20px]">Design Agency Head Office. <br/> Airport Road <br/> United Arab Emirate</p>
          </div>
        </div>
        <p className="copyright-text text-white mt-[60px]">
          Copyright Design Agency {`${year}`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
