"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import NavItems from "../utils/NavItems";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "../utils/CustomModal";
import Login from "./Auth/Login";

interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
}

const Header: FC<HeaderProps> = ({
  open,
  setOpen,
  activeItem,
  route,
  setRoute,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) setActive(true);
      else setActive(false);
    });
  }

  const handleClose = (e: any) => {
    if (e.target.id === "screen") setOpenSidebar(false);
  };

  return (
    <>
      <div className="w-full relative">
        <div
          className={
            active
              ? `dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500`
              : `w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow`
          }
        >
          <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
            <div className="w-full h-[80px] flex items-center justify-between p-3">
              <div>
                <Link
                  href={"/"}
                  passHref
                  className="text-[25px] font-Poppins font-[500] text-black dark:text-white"
                >
                  ELearning
                </Link>
              </div>

              <div className="flex items-center">
                <NavItems activeItem={activeItem} isMobile={false} />
                <ThemeSwitcher />

                {/* Only For Mobile */}
                <div className="800px:hidden mx-4">
                  <HiOutlineMenuAlt3
                    size={25}
                    className="cursor-pointer dark:text-white text-black"
                    onClick={() => setOpenSidebar(true)}
                  />
                </div>
                <HiOutlineUserCircle
                  size={25}
                  className="hidden 800px:block cursor-pointer dark:text-white text-black mx-4"
                  onClick={() => setOpen(!open)}
                />
              </div>
            </div>
          </div>

          {/* Mobile Sidebar */}
          {openSidebar && (
            <div
              className="fixed w-full h-screen top-0 left-0 dark:bg-unset bg-[#00000024]"
              onClick={handleClose}
              id="screen"
            >
              <div className="w-[70%] fixed z-[100] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
                <NavItems activeItem={activeItem} isMobile={true} />

                <HiOutlineUserCircle
                  size={25}
                  className="cursor-pointer dark:text-white text-black mx-4"
                  onClick={() => setOpen(!open)}
                />

                <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
                  Copyright &copy; 2024 ELearning
                </p>
              </div>
            </div>
          )}
        </div>

        {route === "login" && (
          <>
            {open && (
              <CustomModal
                open={open}
                setOpen={setOpen}
                setRoute={setRoute}
                activeItem={activeItem}
                component={Login}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Header;