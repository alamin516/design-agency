import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className="brands lg:w-[1440px] lg:px-[100px] mx-auto lg:flex flex-wrap justify-between items-center h-[120px]">
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
        blurDataURL="/blur.png"
        placeholder="blur"
      />
      <Image
        src="/images/partner/logos_monday.png"
        height={30}
        width={156}
        alt=""
        blurDataURL="/blur.png"
        placeholder="blur"
      />
      <Image
        src="/images/partner/Notion.png"
        height={30}
        width={81}
        alt=""
        blurDataURL="/blur.png"
        placeholder="blur"
      />
      <Image
        src="/images/partner/Slack.png"
        height={30}
        width={115}
        alt=""
        blurDataURL="/blur.png"
        placeholder="blur"
      />
    </div>
  );
};

export default Brands;
