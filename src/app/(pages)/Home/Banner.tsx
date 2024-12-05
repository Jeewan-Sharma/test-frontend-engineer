import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import Icons from "@/app/components/Icons";

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
          <Button name="Explore" type="btn-primary" icon={Icons.Arrow} />
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
            <div className="text-gray-700">{Icons.Truck}</div>
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
            <div className="text-gray-700">{Icons.Secure}</div>
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
            <div className="text-gray-700">{Icons.Reload}</div>
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
