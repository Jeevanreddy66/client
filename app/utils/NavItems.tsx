"use client";
import Link from "next/link";
import React, { FC } from "react";

const navItemsData = [
  { name: "Home", url: "/" },
  { name: "Courses", url: "/courses" },
  { name: "About", url: "/about" },
  { name: "Policy", url: "/policy" },
  { name: "FAQ", url: "/faq" },
];

interface NavItemsProps {
  activeItem: number;
  isMobile: boolean;
}

const NavItems: FC<NavItemsProps> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden 800px:flex">
        {navItemsData &&
          navItemsData.map((item, index) => (
            <Link href={item.url} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? `dark:text-[#37a39a] text-[crimson]`
                    : `dark:text-white text-black`
                } text-[18px] px-6 font-Poppins font-[400]`}
              >
                {item.name}
              </span>
            </Link>
          ))}
      </div>
      {isMobile && (
        <div className="800px:hidden mt-5 w-full">
          <div className="w-full text-center py-6">
            <Link href={"/"} passHref className="cursor-pointer">
              <span className="text-[25px] font-Poppins font-[500] text-black dark:text-white">
                ELearning
              </span>
            </Link>
          </div>
          {navItemsData &&
            navItemsData.map((item, index) => (
              <Link href={item.url} key={index} passHref>
                <span
                  className={`${
                    activeItem === index
                      ? `dark:text-[#37a39a] text-[crimson]`
                      : `dark:text-white text-black`
                  } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
        </div>
      )}
    </>
  );
};

export default NavItems;
