"use client";
import Image, { StaticImageData } from "next/image";
import userImg from "./../../assets/profile.jpg";
import { HiDotsHorizontal } from "react-icons/hi";
import Comments from "../Comments";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import InputChat from "../messages/InputChat";
import LikesModal from "../LikesModal";
import InterActivePost from "../InterActivePost";
const ProfileModal = ({ img, setIsOpen }: { img: StaticImageData; setIsOpen: (value: boolean) => void }) => {
  const [isLikedModalOpen, setIsLikedModalOpen] = useState(false);
  return (
    <div className="overflow-hidden bg-[#000000b7]  fixed top-0 left-0 right-0 bottom-0 z-[9999]">
        <div onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-[#fff] text-[24px] w-fit cursor-pointer"><IoClose /></div>
      <div className="container mx-auto px-[150px] py-10 ">
        <div className="bg-[#f6faff] rounded-lg overflow-hidden grid grid-cols-2">
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
              <Comments setIsLikedModalOpen={setIsLikedModalOpen} />
            </div>
            <div className="mt-auto border-t border-[#eaeaea]">
              <div className="p-5">
                <InterActivePost/>
                <div className="mt-4 text-[14px]">
                   <p>Liked by <span className="cursor-pointer font-bold">Mustafa bakr</span> and <span onClick={() => setIsLikedModalOpen(true)} className="font-bold cursor-pointer">31 others</span></p>
                    <p className="text-[#929292] text-[12px]">April 24, 2022</p>
                </div>
              </div>
              <div className=" border-t border-[#eaeaea] relative">
                    <InputChat location="modal"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLikedModalOpen&& <LikesModal isLikedModalOpen={setIsLikedModalOpen} />}
    </div>
  );
};

export default ProfileModal;
