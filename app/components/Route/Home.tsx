"use client";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";

interface HeroProps {}

const Hero: FC<HeroProps> = (props) => {
  return (
    <>
      <div className="w-full 1000px:flex items-center">
        <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] w-[50vh] hero-animation">
          <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-0 z-10">
            <Image
              src={require("../../../public/assets/banner-img-1.png")}
              alt="Hero-Image"
              className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-auto z-[10]"
            />
          </div>
          <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
            <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px]">
              Improve Your Online Learning Experience Better Instantly
            </h2>
            <br />
            <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
              We have 40k+ Online courses & 500K+ Online registered students.
              Find your desired courses from them.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
