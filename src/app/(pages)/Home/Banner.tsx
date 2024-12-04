import Button from "../../components/Button";
import Image from "next/image";
import React from "react";

const ArrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="size-5"
  >
    <path
      fillRule="evenodd"
      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const Banner = () => {
  return (
    <div className="bg-gray-100 flex pt-6 items-center px-3 md:px-8 lg:px-16">
      <div className="w-1/2 md:w-3/5 text-end">
        <p className="font-bold text-lg md:text-2xl">
          Unlock Your Wardrobe&apos;s Potential at Pick & Click
        </p>
        <p className="text-sm md:text-lg mt-1 mb-3">
          Let Your Style Speak Volumes with Our Brands
        </p>
        <Button name="Explore" type="btn-primary" icon={ArrowIcon} />
      </div>
      <div className=" w-1/2 md:w-2/5 px-3">
        <Image
          src="/images/bannerLady.png"
          alt="Lady"
          height={500}
          width={500}
          className="h-80 w-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
