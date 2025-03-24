"use client";
import logoImg from "@/app/assets/logo.png";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import AccountSidebar from "./AccountSidebar";
import GroupSidebar from "./GroupSidebar";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isOpenDelay, setIsOpenDelay] = useState<boolean>(true);
  const handleSidebarStatus = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsOpenDelay(false);
      document.getElementById("sideBar")?.classList.remove("min-w-[160px]");
    } else {
      setTimeout(() => {
        setIsOpenDelay(true);
        document.getElementById("sideBar")?.classList.add("min-w-[160px]");
      }, 1000);
    }
  };
  return (
    <div
      id="sideBar"
      className={
        isOpen
          ? " bg-[#fff] overflow-y-auto overflow-x-hidden rounded-tr-[2rem] px-5 py-10 relative transition-[width] duration-[5s] ease-in-out isOpenTrue"
          : " py-10  relative rounded-tr-[2rem] min-h-screen bg-[#fff] group  is-open isOpenFalse"
      }
    >
      <div className="h-[100%] ">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={logoImg}
            alt="logo"
            className={
              isOpenDelay
                ? "w-[50px] h-[50px] rounded-full shadow-lg group-[.is-open]:w-[30px] group-[.is-open]:h-[30px]"
                : "block w-[25px] h-[25px]"
            }
          ></Image>
          <h3
            className={
              isOpenDelay
                ? "text-2xl font-bold text-[#4c42ab] block"
                : "text-2xl font-bold text-[#4c42ab] hidden"
            }
          >
            Code<span className="font-normal text-[#7d70f2]">Slu</span>
          </h3>
        </div>
        <AccountSidebar isOpenDelay={isOpenDelay} />
        <div
          className="absolute top-14 right-[-5px] text-[20px] group-[.is-open]:rotate-180"
          onClick={handleSidebarStatus}
        >
          <IoIosArrowBack />
        </div>
        <GroupSidebar isOpenDelay={isOpenDelay} />
      </div>
    </div>
  );
};

export default Sidebar;
