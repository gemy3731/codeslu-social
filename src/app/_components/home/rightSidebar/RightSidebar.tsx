"use client";
import Image from "next/image";
// import Image from 'next/image'
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import profileImg from '@/app/assets/profile.jpg'
import PopularActivities from "./PopularActivities";
const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/Login" && (
        <div
          id="rightSidebar"
          className={`fixed right-0 top-0 h-[100vh] w-[400px] z-[100] flex flex-col  bg-[#eceaff] ${
            isOpen ? "translate-x-0" : "translate-x-[100%]"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="sidebarContent h-[100%] overflow-x-visible overflow-y-auto p-6 flex flex-col gap-8">
            <div className="flex items-center justify-center gap-8 mb-4">
              <Image
                src={profileImg}
                alt="profile"
                className="rounded-full sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]"
              />
              <div className="text-[#fff] text-[18px] px-4 py-1 font-semibold bg-[--main-color] rounded-full">
                Score: 597
              </div>
            </div>
            <div>
              <h4 className="text-[--main-color] text-[20px] font-semibold">Popular Activities</h4>
              <div className="mt-10 mx-auto w-fit flex flex-col gap-4">
                {[...Array(4)].map((_, index) => (
                  <PopularActivities key={index} />
                ))}
                {/* <PopularActivities/> */}
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            id="closeRightSidebar"
            className={` h-[100px] w-[20px] absolute left-0 top-[50%] -translate-y-1/2 text-white flex justify-center items-center cursor-pointer rounded-full transition-all duration-300 ease-in-out text-[24px] ${
              isOpen
                ? "translate-x-0 bg-[#00000033] text-[#000] "
                : "-translate-x-[180%] bg-[--main-color]"
            }`}
          >
            <IoIosArrowBack className={isOpen ? "rotate-180" : "rotate-0"} />
          </div>
        </div>
      )}
    </>
  );
};

export default RightSidebar;
