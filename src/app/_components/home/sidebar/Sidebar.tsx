"use client";
import logoImg from "@/app/assets/logo.png";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import AccountSidebar from "./AccountSidebar";
import GroupSidebar from "./GroupSidebar";
import { useDispatch } from "react-redux";
import { setSidebarWidth } from "@/lib/Redux/sidebar";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isLarge, setIsLarge] = useState<boolean>(true);
  const [isOpenDelay, setIsOpenDelay] = useState<boolean>(true);
  const sidebar = document.querySelector("#sideBar");
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1200) {
        setIsOpen(false);
        setIsOpenDelay(false);
        setIsLarge(false);
      } else {
        setIsOpen(true);
        setIsOpenDelay(true);
        setIsLarge(true);
      }
    });
  }, []);

  if (sidebar) {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.right;
        dispatch(setSidebarWidth(width));
      }
    });
    observer.observe(sidebar);
  } else {
    console.log("Sidebar element not found!");
  }

  const handleSidebarStatus = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsOpenDelay(false);
      sidebar?.classList.remove("min-w-[200px]");
    } else {
      setTimeout(() => {
        setIsOpenDelay(true);
        sidebar?.classList.add("min-w-[200px]");
      }, 300);
    }
  };
  return (
    <div
      id="sideBar"
      className={
        isOpen
          ? `isOpenTrue ${isOpenDelay&&'min-w-[200px]'}`
          : "group  is-open isOpenFalse"
      }
     
    >
      <div className="sidebarContent h-[100%] overflow-x-visible overflow-y-auto">
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
        <GroupSidebar isOpenDelay={isOpenDelay} />

        {/* {Arrow} */}
        {isLarge&&(
          <div
          className="sidebarArrow text-[#4c42ab] absolute top-14 right-[-8px] text-[20px] group-[.is-open]:rotate-180 bg-white border-[ #e0e0e0] border-[1px] rounded-full flex justify-center items-center w-[20px] h-[20px] cursor-pointer transition-all duration-300 ease-in-out"
          onClick={handleSidebarStatus}
        >
          <IoIosArrowBack />
        </div>
        )}
        
      </div>
    </div>
  );
};

export default Sidebar;
