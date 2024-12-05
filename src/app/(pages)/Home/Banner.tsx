import Button from "../../components/Button";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      {/* display */}
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
      {/* features */}
      <div className="flex flex-wrap justify-between mt-3 px-3 md:px-8 lg:px-16">
        <div className="p-2 w-full lg:w-1/3">
          <div className="border p-4 rounded-lg boxShadow flex gap-2 items-center">
            <div className="text-gray-700">{TruckIcon}</div>
            <div>
              <p className="font-semibold text-xl">Free Delivery</p>
              <p className="text-600">
                Free delivery worldwide for purchase above $100
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 w-full lg:w-1/3">
          <div className="border p-4 rounded-lg boxShadow flex gap-2 items-center">
            <div className="text-gray-700">{ReloadIcon}</div>
            <div>
              <p className="font-semibold text-xl">Secured Payment</p>
              <p className="text-600">
                We ensure 100% secure payment using SecurePay
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 w-full lg:w-1/3">
          <div className="border p-4 rounded-lg boxShadow flex gap-2 items-center">
            <div className="text-gray-700">{SecureIcon}</div>
            <div>
              <p className="font-semibold text-xl">7 days easy return </p>
              <p className="text-600">
                Return products within 7 days for exchange
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

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

const TruckIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="size-14"
  >
    <path d="M6.5 3c-1.051 0-2.093.04-3.125.117A1.49 1.49 0 0 0 2 4.607V10.5h9V4.606c0-.771-.59-1.43-1.375-1.489A41.568 41.568 0 0 0 6.5 3ZM2 12v2.5A1.5 1.5 0 0 0 3.5 16h.041a3 3 0 0 1 5.918 0h.791a.75.75 0 0 0 .75-.75V12H2Z" />
    <path d="M6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM13.25 5a.75.75 0 0 0-.75.75v8.514a3.001 3.001 0 0 1 4.893 1.44c.37-.275.61-.719.595-1.227a24.905 24.905 0 0 0-1.784-8.549A1.486 1.486 0 0 0 14.823 5H13.25ZM14.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

const ReloadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-12"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
    />
  </svg>
);

const SecureIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="size-14"
  >
    <path
      fillRule="evenodd"
      d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.75Zm4.196 5.954a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
      clipRule="evenodd"
    />
  </svg>
);
