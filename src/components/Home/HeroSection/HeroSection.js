import Image from "next/image";
import Navbar from "../../Navbar/Navbar";
import Brands from "@/components/Brands/Brands";

const HeroSection = () => {
  return (
    <div className="bg-[#D7F5DC] pb-[35px]">
      <Navbar />
      <div className="container-layout">
        <div>
          <div className="lg:flex justify-between gap-[80px]">
            <div className="lg:w-1/2 pt-[100px]">
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
            <div className="lg:w-1/2 pt-[61px] flex flex-col  gap-[18px]">
              <div className="flex justify-end  gap-[18px]">
                <Image
                  src="/images/Rectangle 1241.png"
                  height={271}
                  width={408}
                  alt=""
                  blurDataURL="/blur.png"
                  placeholder="blur"
                />
                <Image
                  src="/images/Rectangle 1242.png"
                  height={271}
                  width={180}
                  alt=""
                  blurDataURL="/blur.png"
                  placeholder="blur"
                />
              </div>
              <div className="flex justify-end  gap-[18px]">
                <Image
                  src="/images/Rectangle 1243.png"
                  height={164}
                  width={246}
                  alt=""
                  blurDataURL="/blur.png"
                  placeholder="blur"
                />
                <Image
                  src="/images/Rectangle 1244.png"
                  height={164}
                  width={345}
                  alt=""
                  blurDataURL="/blur.png"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[80px] bg-[#F8FFF9]">
        <Brands/>
      </div>
    </div>
  );
};

export default HeroSection;
