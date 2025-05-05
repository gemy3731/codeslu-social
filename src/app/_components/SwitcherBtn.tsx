"use client";
import { useState } from "react";

const SwitcherBtn = () => {
  const [isFollowing, setIsFollowing] = useState(true);
  return (
    <button
      onClick={() => setIsFollowing(!isFollowing)}
      className={
        isFollowing
          ? "bg-[#686868] hover:bg-[#7e7e7e] text-white py-2 px-4 rounded-full"
          : "bg-[--main-color] hover:bg-[#6155d2] text-white py-2 px-4 rounded-full"
      }
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default SwitcherBtn;
