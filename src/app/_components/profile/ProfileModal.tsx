"use client";
import Image, { StaticImageData } from "next/image";
import userImg from "./../../assets/profile.jpg";
import { HiDotsHorizontal } from "react-icons/hi";
import Comments from "../Comments";
import { FaBookmark, FaHeart, FaRegComment } from "react-icons/fa";
import { useState } from "react";
import { PiShareFatBold } from "react-icons/pi";
import { CgHeart } from "react-icons/cg";
import { GoBookmark } from "react-icons/go";
const ProfileModal = ({ img }: { img: StaticImageData }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  return (
    <div className="overflow-hidden bg-[#000000e3]  fixed top-0 left-0 right-0 bottom-0 z-[9999]">
      <div className="container mx-auto px-[150px] py-10 ">
        <div className="bg-white rounded-lg overflow-hidden grid grid-cols-2">
          <Image src={img} alt="post image" className="aspect-[0.8/1]"></Image>
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-2 p-5 border-b border-[#eaeaea]">
              <div className="flex items-center gap-2">
                <Image
                  src={userImg}
                  alt="user image"
                  className="w-[40px] h-[40px] rounded-full"
                ></Image>
                <h3 className="font-medium text-[#000]">UserName</h3>
              </div>
              <button className="text-[#000] text-[20px]">
                <HiDotsHorizontal />
              </button>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <Comments />
            </div>
            <div className="mt-auto border-t border-[#eaeaea]">
              <div className="p-5">
                <div className="flex items-center justify-between text-[28px]">
                  <div className="flex items-center gap-4 ">
                    {isLiked ? (
                      <FaHeart
                        onClick={() => setIsLiked(false)}
                        className=" self-start cursor-pointer text-red-600"
                      />
                    ) : (
                      <CgHeart
                        onClick={() => setIsLiked(true)}
                        className=" self-start cursor-pointer"
                      />
                    )}
                    <FaRegComment className="cursor-pointer" />
                    <PiShareFatBold className="cursor-pointer" />
                  </div>
                  {isSaved ? (
                      <FaBookmark
                        onClick={() => setIsSaved(false)}
                        className=" self-start cursor-pointer text-yellow-300"
                      />
                    ) : (
                      <GoBookmark
                        onClick={() => setIsSaved(true)}
                        className=" self-start cursor-pointer"
                      />
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
