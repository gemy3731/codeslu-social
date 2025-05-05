"use client"
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { GoBookmark } from "react-icons/go";
import { PiShareFatThin } from "react-icons/pi";

const InterActivePost = () => {
      const [isLiked, setIsLiked] = useState(false);
      const [isSaved, setIsSaved] = useState(false);
  return (
    <div className="flex items-center justify-between text-[28px]">
      <div className="flex items-center gap-4 ">
        {isLiked ? (
          <FaHeart
            onClick={() => setIsLiked(false)}
            className=" self-start cursor-pointer text-red-600"
          />
        ) : (
          <CiHeart
            onClick={() => setIsLiked(true)}
            className=" self-start cursor-pointer"
          />
        )}
        <PiShareFatThin className="cursor-pointer" />
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
  );
};

export default InterActivePost;
