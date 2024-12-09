import Image from "next/image";
import React from "react";
import Icons from "@/app/components/Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="px-3 md:px-8 lg:px-16 space-y-8 py-14 bg-[#25283a] flex flex-wrap">
        <div className="w-full lg:w-2/5">
          <div className="flex items-center gap-3">
            <Image
              src="/images/picknclick.png"
              alt="logo"
              width={90}
              height={90}
            />
            <p className="text-white font-bold text-2xl">
              Shop Now, Shop Happiness
            </p>
          </div>
          <p className="text-white mt-3 text-sm">
            Shop Now is an internationally recognized online shopping where you
            can find all the essential goods with best quality and best cost. we
            have been serving the world in online shopping since 2010.
          </p>
          <p className="text-white text-xl font-bold mt-4">Find Us At</p>
          <div className="flex gap-2 text-white mt-2">
            <div className="hover-text-color cursor-pointer">
              {Icons.Facebook}
            </div>
            <div className="hover-text-color cursor-pointer">
              {Icons.Twitter}
            </div>
            <div className="hover-text-color cursor-pointer">
              {Icons.Instagram}
            </div>
            <div className="hover-text-color cursor-pointer">
              {Icons.Linkedin}
            </div>
            <div className="hover-text-color cursor-pointer">
              {Icons.WhatsApp}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 flex flex-wrap text-center space-y-8">
          <div className="w-full md:w-1/3">
            <p className="text-white font-semibold text-xl">Company</p>
            <p className="mt-2 text-white">About Us</p>
            <p className="text-white">Meet Our Team</p>
            <p className="text-white">Terms & Conditions</p>
            <p className="text-white">Privacy Policies</p>
            <p className="text-white">Contact Us</p>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-white font-semibold text-xl">Categories</p>
            <p className="mt-2 text-white">Men</p>
            <p className="text-white">Women</p>
            <p className="text-white">Bags</p>
            <p className="text-white">Watches</p>
            <p className="text-white">Shoes</p>
            <p className="text-white">Electronics</p>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-white font-semibold text-xl">Contact Us</p>
            <p className="mt-2 text-white">Address: Blacktown NSW</p>
            <p className="text-white">Phone: 0425 456 262</p>
            <p className="text-white">Email: service@picknclick.com.au</p>
            <p className="text-white">Fax: 0425 456 262</p>
          </div>
        </div>
      </div>
      <div className="bg-primary_color text-center py-2">
        <p className="text-white">
          ©&nbsp;<span className="font-bold">Pick & Click</span> is Proudly
          Owned by &nbsp;
          <Link
            href="http://jeewansharma.com.np"
            target="_blank"
            className="underline font-semibold hover-text-color"
          >
            Jeewan Sharma
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
