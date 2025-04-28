import Image from "next/image";
import React from "react";
import guitar from "@/app/assets/guitar.png";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { Progress } from "flowbite-react";
const PopularActivities = () => {
  return (
    <div
      id="popularActivities"
      className="flex flex-col gap-5 rounded-xl bg-gradient-to-br from-[#fff] to-[#eceaff] p-4 shadow-md w-[300px] border border-white"
    >
      <div className="grid grid-cols-2 items-center gap-4">
        <Image
          src={guitar}
          alt="guitar"
          width={100}
          height={100}
          className="w-[80px] h-[80px] mx-auto"
        ></Image>
        <div>
          <h3 className="text-black">Activity Name</h3>
          <h4 className="text-[#a8a8a8]">User Name</h4>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center text-[#a8a8a8] text-[16px] mb-2">
          <h6>progress</h6>
          <h6>45%</h6>
        </div>
        <Progress progress={45} color="pink" className="!bg-[#fff]" />
      </div>
      <div className="flex justify-between items-center px-2">
        <div className="text-[#a8a8a8] text-[16px] flex items-center gap-1">
          <BiSolidMessageRoundedDots />
          <span>3</span>
        </div>
        <div className="text-[#fff] text-[14px] px-4 py-1  bg-[--main-color] rounded-full flex items-center gap-1">
          <CiClock2 />
          <span>4 days left</span>
        </div>
      </div>
    </div>
  );
};

export default PopularActivities;
