"use client";
import { useState } from "react";
import Comments from "../../Comments";
import LikesModal from "../../LikesModal";
import ProfileModal from "../../profile/ProfileModal";
import { StaticImageData } from "next/image";
import InputChat from "../../messages/InputChat";

const HomeComment = ({postImg}:{postImg:StaticImageData}) => {
  const [isLikedModalOpen, setIsLikedModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Comments setIsLikedModalOpen={setIsLikedModalOpen} />
      {isLikedModalOpen&& <LikesModal isLikedModalOpen={setIsLikedModalOpen} />}
      <button onClick={() => setIsOpen(true)} className="text-[#929292] mt-1">View all 95 comments</button>
      {isOpen&&<ProfileModal setIsOpen={setIsOpen} img={postImg} />}
      <div className="mt-3">
      <InputChat location="post"/>
      </div>
    </div>
  );
};

export default HomeComment;
